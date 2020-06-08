/* eslint-disable no-param-reassign */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';
import { paintOver } from './support-functions';


const drawingFunctionRectangle = function drawingFunctionRectangle() {
  const mouse = { x: 0, y: 0 };
  const mainCanvas = document.getElementById('mainCanvas');
  const rectangle = {
    start: '?',
    finish: '?',
    vertex: {
      y: '?',
      x: '?',
    },
  };

  mainCanvas.addEventListener('mousedown', (e) => {
    if (instrument.state === 'rectangle') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      rectangle.start = { y: Math.floor(mouse.y / 5), x: Math.floor(mouse.x / 5) };
    }
  });

  mainCanvas.addEventListener('mouseup', (e) => {
    if (instrument.state === 'rectangle') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      rectangle.finish = { y: Math.floor(mouse.y / 5), x: Math.floor(mouse.x / 5) };

      rectangle.distanceX = Math.abs(rectangle.finish.x - rectangle.start.x);
      rectangle.distanceY = Math.abs(rectangle.finish.y - rectangle.start.y);

      // get vertex coordinates
      if (rectangle.start.y < rectangle.finish.y) {
        rectangle.vertex.y = rectangle.start.y;
      } else {
        rectangle.vertex.y = rectangle.finish.y;
      }
      if (rectangle.start.x < rectangle.finish.x) {
        rectangle.vertex.x = rectangle.start.x;
      } else {
        rectangle.vertex.x = rectangle.finish.x;
      }

      // draw rectangle: vertical lines
      for (let i = 0; i <= rectangle.distanceY; i++) {
        paintOver(instrument.array, rectangle.vertex.y + i, rectangle.vertex.x, instrument.currentColor);
        paintOver(instrument.array, rectangle.vertex.y + i, rectangle.vertex.x + rectangle.distanceX, instrument.currentColor);
      }

      // draw rectangle: horizontal lines
      for (let i = 0; i <= rectangle.distanceX; i++) {
        paintOver(instrument.array, rectangle.vertex.y, rectangle.vertex.x + i, instrument.currentColor);
        paintOver(instrument.array, rectangle.vertex.y + rectangle.distanceY, rectangle.vertex.x + i, instrument.currentColor);
      }


      // refresh main canvas
      instrument.canvas = mainCanvas;
      const context = mainCanvas.getContext('2d');

      context.clearRect(
        0, 0, instrument.array.length * 5, instrument.array.length * 5,
      );
      for (let i = 0; i < instrument.array.length; i++) {
        for (let j = 0; j < instrument.array.length; j++) {
          if (instrument.array[i][j].color !== '?') {
            context.fillStyle = instrument.array[i][j].color;
            context.fillRect(j * 5, i * 5, 5, 5);
          }
        }
      }
    }
  });
};

export default drawingFunctionRectangle;
