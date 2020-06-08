/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';

function paintOverDithering(array, y, x, context) {
  let i = 0;
  let pensize = instrument.penSize;
  if (instrument.penSize % 2 === 0) {
    pensize += 1;
  }
  for (let m = 0; m < pensize; m++) {
    for (let f = 0; f < pensize; f++) {
      if (i < 1) {
        array[y + m][x + f] = { color: instrument.currentColor };
        context.fillStyle = instrument.currentColor;
        context.fillRect(
          (x + f) * 5, (y + m) * 5, pensize, pensize,
        );
        i++;
      } else {
        array[y + m][x + f] = { color: instrument.previousColor };
        context.fillStyle = instrument.previousColor;
        context.fillRect(
          (x + f) * 5, (y + m) * 5, pensize, pensize,
        );
        i = 0;
      }
    }
  }
}

const drawingFunctionDithering = function drawingFunctionDithering() {
  const mouse = { x: 0, y: 0 };
  let draw = false;
  const mainCanvas = document.getElementById('mainCanvas');
  instrument.canvas = mainCanvas;
  const context = mainCanvas.getContext('2d');

  // mousedown event - start drawing
  mainCanvas.addEventListener('mousedown', (e) => {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    if (instrument.state === 'dithering' && instrument.currentColor !== '?') {
      draw = true;
      paintOverDithering(instrument.array, Math.floor(mouse.y / 5), Math.floor(mouse.x / 5), context);
    }
  });

  // mousemove event - continue drawing
  mainCanvas.addEventListener('mousemove', (e) => {
    if (draw === true && instrument.state === 'dithering') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      paintOverDithering(instrument.array, Math.floor(mouse.y / 5), Math.floor(mouse.x / 5), context);
    }
    if (instrument.state === 'dithering') {
      document.onmouseup = () => {
        draw = false;
        document.onmouseup = null;
      };
    }
  });
};

export default drawingFunctionDithering;
