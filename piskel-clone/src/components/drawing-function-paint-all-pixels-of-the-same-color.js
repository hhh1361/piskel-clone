/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { instrument } from './instruments-functions';

const drawingFunctionPixels = function drawingFunctionPixels() {
  const mouse = { x: 0, y: 0 };
  const mainCanvas = document.getElementById('mainCanvas');
  instrument.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  mainCanvas.addEventListener('click', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'paintAllPixels' && instrument.currentColor !== '?') {
      const colorToBeChanged = instrument.array[Math.floor(mouse.y / 5)][Math.floor(mouse.x / 5)].color;
      for (let i = 0; i < instrument.array.length; i++) {
        for (let j = 0; j < instrument.array.length; j++) {
          if (instrument.array[i][j].color === colorToBeChanged) {
            instrument.array[i][j].color = instrument.currentColor;
            context.fillStyle = instrument.currentColor;
            context.fillRect(
              j * 5, i * 5, 5, 5,
            );
          }
        }
      }
    }
  });
};

export default drawingFunctionPixels;
