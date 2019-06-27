/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
const canvas = {
  canvas: '?',
  array: '?',
};

const canvasFunctions = function canvasFunctions() {
  function canvasCreation() {
    const center = document.getElementById('center');
    const canvasSizeTemp = document.getElementById('canvasSizeTemp');
    let array;
    let canvasSize;
    let mainCanvas;


    // creating 32x32/64x64/128x128 Array
    function arrayCreator(n) {
      array = new Array(n);
      for (let j = 0; j < array.length; j++) {
        array[j] = new Array(n);
      }
    }

    // creating 32x32/64x64/128x128 Canvas
    canvasSizeTemp.addEventListener('click', (e) => {
      if (e.target.className === 'canvasSize') {
        canvasSize = +e.target.innerHTML;
        center.removeChild(canvasSizeTemp);

        mainCanvas = document.getElementById('mainCanvas');
        mainCanvas.width = canvasSize * 5;
        mainCanvas.style.width = `${canvasSize * 5}px`;
        mainCanvas.height = canvasSize * 5;
        center.style.padding = `${(640 - canvasSize * 5) / 2}px`;
        mainCanvas.style.border = '1px solid white';
        mainCanvas.style.opacity = '1';


        arrayCreator(canvasSize);
        canvas.canvas = mainCanvas;
        canvas.array = array;
        const size = document.getElementById('canvasSizeInformation');
        size.innerHTML = ` [${canvas.array.length}x${canvas.array.length}]`;
      }
      global.console.log(canvas);
    });
  }
  canvasCreation();
};

export default canvasFunctions;

export { canvas };
