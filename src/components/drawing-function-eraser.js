/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';

const drawingFunctionEraser = function drawingFunctionEraser() {
  const mouse = { x: 0, y: 0 };
  let draw = false;
  const mainCanvas = document.getElementById('mainCanvas');
  instrument.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  // mousedown event - start erase
  mainCanvas.addEventListener('mousedown', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'eraser' && instrument.currentColor !== '?') {
      draw = true;
      global.console.log(mouse.x, mouse.y);

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.floor(mouse.x / 5) + i][Math.floor(mouse.y / 5) + j].color = '?';
        }
      }
      global.console.log(instrument.array);


      context.clearRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
  });

  // mousemove event - continue drawing
  mainCanvas.addEventListener('mousemove', (e) => {
    if (draw === true && instrument.state === 'eraser') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          if (Math.floor(mouse.x / 5) + j < instrument.array.length && Math.floor(mouse.y / 5) + i < instrument.array.length) {
            instrument.array[Math.floor(mouse.y / 5) + i][Math.floor(mouse.x / 5) + j] = { color: '?' };
          }
        }
      }


      context.clearRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
    if (instrument.state === 'eraser') {
      document.onmouseup = () => {
        draw = false;
        document.onmouseup = null;
      };
    }
  });
};

export default drawingFunctionEraser;
