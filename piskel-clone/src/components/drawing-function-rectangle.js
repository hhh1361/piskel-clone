/* eslint-disable no-param-reassign */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';
import { canvas } from './canvas-creation-functions';
import paintOver from './support-functions';
// import paintOver from './support-functions';


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
        paintOver(canvas.array, rectangle.vertex.y + i, rectangle.vertex.x);
        paintOver(canvas.array, rectangle.vertex.y + i, rectangle.vertex.x + rectangle.distanceX);
      }

      // draw rectangle: horizontal lines
      for (let i = 0; i <= rectangle.distanceX; i++) {
        paintOver(canvas.array, rectangle.vertex.y, rectangle.vertex.x + i);
        paintOver(canvas.array, rectangle.vertex.y + rectangle.distanceY, rectangle.vertex.x + i);
      }


      console.log(rectangle);
      // refresh main canvas
      canvas.canvas = mainCanvas;
      const context = mainCanvas.getContext('2d');

      context.clearRect(
        0, 0, canvas.array.length * 5, canvas.array.length * 5,
      );
      for (let i = 0; i < canvas.array.length; i++) {
        for (let j = 0; j < canvas.array.length; j++) {
          if (canvas.array[i][j].color !== '?') {
            context.fillStyle = canvas.array[i][j].color;
            context.fillRect(j * 5, i * 5, 5, 5);
          }
        }
      }
    }
  });
};

export default drawingFunctionRectangle;
