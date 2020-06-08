/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';
import { paintOver } from './support-functions';


const drawingFunctionPen = function drawingFunctionPen() {
  const mouse = { x: 0, y: 0 };
  let draw = false;
  const mainCanvas = document.getElementById('mainCanvas');
  instrument.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  // mousedown event - start drawing
  mainCanvas.addEventListener('mousedown', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'pen' && instrument.currentColor !== '?') {
      draw = true;
      global.console.log(mouse.x, mouse.y);
      context.fillStyle = instrument.currentColor;

      paintOver(instrument.array, Math.floor(mouse.y / 5), Math.floor(mouse.x / 5), instrument.currentColor);

      global.console.log(instrument.array);

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


      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          if (Math.floor(mouse.x / 5) + j < instrument.array.length && Math.floor(mouse.y / 5) + i < instrument.array.length) {
            instrument.array[Math.floor(mouse.y / 5) + i][Math.floor(mouse.x / 5) + j] = { color: instrument.currentColor };
          }
        }
      }


      context.fillRect(
        Math.floor(mouse.x / 5) * 5, Math.floor(mouse.y / 5) * 5, instrument.penSize * 5, instrument.penSize * 5,
      );
    }
    if (instrument.state === 'pen') {
      document.onmouseup = () => {
        draw = false;
        document.onmouseup = null;
      };
    }
  });
};

export default drawingFunctionPen;
