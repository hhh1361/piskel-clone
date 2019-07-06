import { instrument } from './instruments-functions';

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
      for (let i = 0; i < n; i++) {
        array[i] = new Array(n);
        for (let j = 0; j < n; j++) {
          array[i][j] = { color: '?' };
        }
      }
      global.console.log(array);
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
        instrument.canvas = mainCanvas;
        instrument.array = array;
        instrument.arrayClean = JSON.parse(JSON.stringify(array));
        const size = document.getElementById('canvasSizeInformation');
        size.innerHTML = ` [${instrument.array.length}x${instrument.array.length}]`;
      }


      // start animation
      const preview = document.getElementById('preview');
      const ctx = preview.getContext('2d');
      let i = 0;
      let previewArray;

      // eslint-disable-next-line no-unused-vars
      const timerId = setInterval(() => {
        const collection = document.getElementsByClassName('frame');
        previewArray = Array.from(collection);

        if (i < previewArray.length) {
          ctx.clearRect(0, 0, 224, 224);
          ctx.drawImage(previewArray[i].children[0], 0, 0);
          i++;
          if (i >= previewArray.length) {
            i = 0;
          }
        } else {
          i = 0;
        }
      }, 300);
    });
  }
  canvasCreation();
};

export default canvasFunctions;

export { canvas };
