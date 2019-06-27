/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';
import { canvas } from './canvas-creation-functions';

const drawingFunctionPen = function drawingFunctionPen() {
  const mouse = { x: 0, y: 0 };
  let draw = false;
  const mainCanvas = document.getElementById('mainCanvas');
  canvas.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  // mousedown event - start drawing
  mainCanvas.addEventListener('mousedown', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'pen' && instrument.currentColor !== '?') {
      draw = true;
      global.console.log(mouse.x, mouse.y);
      context.fillStyle = instrument.currentColor;
      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          canvas.array[Math.floor(mouse.x / 5) + i][Math.floor(mouse.y / 5) + j] = { color: instrument.currentColor };
        }
      }
      global.console.log(canvas.array);

      context.fillRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
  });

  // mousemove event - continue drawing
  mainCanvas.addEventListener('mousemove', (e) => {
    if (draw === true && instrument.state === 'pen') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;

      canvas.array[Math.floor(mouse.x / 5)][Math.floor(mouse.y / 5)] = { color: 'temp' };


      context.fillRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
    if (instrument.state === 'pen') {
      document.onmouseup = () => {
        draw = false;

        for (let y = 0; y < canvas.array.length; y++) {
          for (let x = 0; x < canvas.array.length; x++) {
            if (canvas.array[y][x] !== undefined) {
              if (canvas.array[y][x].color === 'temp') {
                for (let i = 0; i < instrument.penSize; i++) {
                  for (let j = 0; j < instrument.penSize; j++) {
                    if (y + i < canvas.array.length && x + i < canvas.array.length) {
                      canvas.array[y + i][x + j] = { color: instrument.currentColor };
                    }
                  }
                }
              }
            }
          }
        }

        document.onmouseup = null;
      };
    }
  });
};

export default drawingFunctionPen;
