/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import { instrument } from './instruments-functions';
// eslint-disable-next-line no-unused-vars
import { refresh, fillRect } from './support-functions';

const drawingFunctionLighten = function drawingFunctionLighten() {
  const mouse = { x: 0, y: 0 };
  const mainCanvas = document.getElementById('mainCanvas');
  const ctx = mainCanvas.getContext('2d');

  function mouseDownMoveUp(e) {
    if (instrument.state === 'lighten') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      const target = instrument.array[Math.floor(mouse.y / 5)][Math.floor(mouse.x / 5)];
      const re = /\d+/gi;
      const rgb = target.color.match(re);
      for (let i = 0; i < rgb.length; i++) {
        if (rgb[i] < 240) {
          // eslint-disable-next-line operator-assignment
          rgb[i] = +rgb[i] + 15;
        } else {
          rgb[i] = 255;
        }
      }
      target.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      for (let i = 0; i < instrument.penSize; i++) {
        for (let j = 0; j < instrument.penSize; j++) {
          instrument.array[Math.floor(mouse.y / 5) + i][Math.floor(mouse.x / 5) + j] = { color: target.color };
          fillRect(ctx, Math.floor(mouse.y / 5) + i, Math.floor(mouse.x / 5) + j, target.color);
        }
      }
    }
  }
  mainCanvas.addEventListener('mousedown', (e) => {
    mouseDownMoveUp(e);
    mainCanvas.addEventListener('mousemove', function mouseMove(e) {
      mouseDownMoveUp(e);
      document.addEventListener('mouseup', function mouseUp(e) {
        mouseDownMoveUp(e);
        mainCanvas.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
      });
    });
  });
};

export default drawingFunctionLighten;
