/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { instrument } from './instruments-functions';
import { canvas } from './canvas-creation-functions';

const drawingFunctionPixels = function drawingFunctionPixels() {
  const mouse = { x: 0, y: 0 };
  const mainCanvas = document.getElementById('mainCanvas');
  canvas.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  mainCanvas.addEventListener('click', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'paintAllPixels' && instrument.currentColor !== '?') {
      const colorToBeChanged = canvas.array[Math.floor(mouse.y / 5)][Math.floor(mouse.x / 5)].color;
      for (let i = 0; i < canvas.array.length; i++) {
        for (let j = 0; j < canvas.array.length; j++) {
          if (canvas.array[i][j].color === colorToBeChanged) {
            canvas.array[i][j].color = instrument.currentColor;
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
