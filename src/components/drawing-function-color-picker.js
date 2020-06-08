/* eslint-disable max-len */
import { instrument } from './instruments-functions';

const drawingFunctionColorPicker = function drawingFunctionColorPicker() {
  const mouse = { x: 0, y: 0 };
  const currentColor = document.getElementById('currentColor');
  const previousColor = document.getElementById('previousColor');
  const mainCanvas = document.getElementById('mainCanvas');
  mainCanvas.addEventListener('click', (e) => {
    if (instrument.state === 'colorPicker') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      const temp = instrument.array[Math.floor(mouse.y / 5)][Math.floor(mouse.x / 5)].color;
      instrument.previousColor = instrument.currentColor;
      instrument.currentColor = temp;
      currentColor.style.backgroundColor = instrument.currentColor;
      previousColor.style.backgroundColor = instrument.previousColor;
    }
  });
};

export default drawingFunctionColorPicker;
