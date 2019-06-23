/* eslint-disable no-plusplus */


export default function canvasFunctions() {
  function canvasCreation() {
    const center = document.getElementById('center');
    const canvasSizeTemp = document.getElementById('canvasSizeTemp');
    let mainCanvas;
    let array;
    let canvasSize;

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

        mainCanvas = document.createElement('canvas');
        mainCanvas.width = canvasSize * 5;
        mainCanvas.style.width = `${canvasSize * 5}px`;
        mainCanvas.height = canvasSize * 5;
        mainCanvas.id = 'mainCanvas';
        mainCanvas.className = 'mainCanvas';
        center.style.padding = `${(640 - canvasSize * 5) / 2}px`;
        mainCanvas.style.border = '1px solid white';
        center.appendChild(mainCanvas);

        arrayCreator(canvasSize);
        mainCanvas.array = array;
      }
      global.console.log(mainCanvas);
    });
  }
  canvasCreation();
}
