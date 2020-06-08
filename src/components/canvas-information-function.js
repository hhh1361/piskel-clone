/* eslint-disable no-unused-vars */
import { canvas } from './canvas-creation-functions';

const canvasInformationFunction = function canvasInformationFunction() {
  const size = document.getElementById('canvasSizeInformation');
  const cursor = document.getElementById('cursorCoordinatesInformation');
  const mainCanvas = document.getElementById('mainCanvas');
  const mouse = { x: 0, y: 0 };


  function getInformation(e) {
    mouse.x = e.pageX - mainCanvas.offsetLeft;
    mouse.y = e.pageY - mainCanvas.offsetTop;
    cursor.innerHTML = `${Math.floor(mouse.x / 5)}:${Math.floor(mouse.y / 5)} `;
  }
  function clearInformation(e) {
    cursor.innerHTML = null;
  }


  mainCanvas.addEventListener('mousemove', getInformation);
  mainCanvas.addEventListener('mouseout', clearInformation);
};


export default canvasInformationFunction;
