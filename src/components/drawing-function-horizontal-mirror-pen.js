/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';

const drawingFunctionHorizontalMirrorPen = function drawingFunctionHorizontalMirrorPen() {
  const mouse = { x: 0, y: 0 };
  let draw = false;
  const mainCanvas = document.getElementById('mainCanvas');
  instrument.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  // mousedown event - start drawing
  mainCanvas.addEventListener('mousedown', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'horizontalMirrorPen' && instrument.currentColor !== '?') {
      draw = true;
      global.console.log(mouse.x, mouse.y);
      context.fillStyle = instrument.currentColor;

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.floor(mouse.y / 5) + i][Math.floor(mouse.x / 5) + j] = { color: instrument.currentColor };
        }
      }

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.ceil((instrument.array.length * 5 - mouse.y) / 5) - 1 - i][Math.floor(mouse.x / 5) + j] = { color: instrument.currentColor };
        }
      }


      context.fillRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );

      context.fillRect(
        Math.floor(mouse.x / 5) * 5, (instrument.array.length - Math.floor(mouse.y / 5)) * 5 - instrument.penSize * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
  });

  // mousemove event - continue drawing
  mainCanvas.addEventListener('mousemove', (e) => {
    if (draw === true && instrument.state === 'horizontalMirrorPen') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.floor(mouse.y / 5) + i][Math.floor(mouse.x / 5) + j] = { color: instrument.currentColor };
        }
      }

      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.ceil((instrument.array.length * 5 - mouse.y) / 5) - 1 - i][Math.floor(mouse.x / 5) + j] = { color: instrument.currentColor };
        }
      }


      context.fillRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );

      context.fillRect(
        Math.floor(mouse.x / 5) * 5, (instrument.array.length - Math.floor(mouse.y / 5)) * 5 - instrument.penSize * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
    if (instrument.state === 'horizontalMirrorPen') {
      document.onmouseup = () => {
        draw = false;
        document.onmouseup = null;
      };
    }
  });
};

export default drawingFunctionHorizontalMirrorPen;
