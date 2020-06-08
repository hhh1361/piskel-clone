/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { instrument } from './instruments-functions';
import { canvas } from './canvas-creation-functions';
import { refresh } from './support-functions';

export default function localStorageFunction() {
  const saveLocal = document.getElementById('saveLocal');
  saveLocal.addEventListener('click', () => {
    localStorage.setItem('instrument', JSON.stringify(instrument));
    localStorage.setItem('canvas', JSON.stringify(canvas));
  });

  const loadLocal = document.getElementById('loadLocal');
  loadLocal.addEventListener('click', () => {
    const loadInstrument = JSON.parse(localStorage.instrument);
    const keysArray = Object.keys(loadInstrument);
    const valuesArray = Object.values(loadInstrument);
    const mainCanvas = document.getElementById('mainCanvas');
    for (let i = 0; i < keysArray.length; i++) {
      instrument[keysArray[i]] = valuesArray[i];
    }

    function mainCanvasCreation(canvasSize) {
      const center = document.getElementById('center');
      const canvasSizeTemp = document.getElementById('canvasSizeTemp');
      if (canvasSizeTemp) {
        center.removeChild(canvasSizeTemp);
        mainCanvas.width = canvasSize * 5;
        mainCanvas.style.width = `${canvasSize * 5}px`;
        mainCanvas.height = canvasSize * 5;
        center.style.padding = `${(640 - canvasSize * 5) / 2}px`;
        mainCanvas.style.border = '1px solid white';
        mainCanvas.style.opacity = '1';
      }
    }
    mainCanvasCreation(instrument.frames[Object.keys(instrument.frames)[0]].length);
    const framesKeysArray = Object.keys(instrument.frames);
    const framesValuesArray = Object.values(instrument.frames);


    // clear existing frames
    function clearFrames() {
      const frames = document.getElementById('frames');
      const addFrame = document.getElementById('addFrame');
      while (frames.firstChild !== addFrame) {
        frames.removeChild(frames.firstChild);
      }
    }
    clearFrames();


    // add frames from local storage
    function addNewFrame(i) {
      const addFrame = document.getElementById('addFrame');
      const frames = document.getElementById('frames');
      const current = document.getElementById('current');
      if (current !== null) {
        current.removeAttribute('id');
      }

      // add frame div
      const frame = document.createElement('div');
      frame.className = 'frame';
      frame.id = framesKeysArray[i];
      frames.insertBefore(frame, addFrame);

      // add canvas
      const canv = document.createElement('canvas');
      canv.className = `canvas canvas_${+framesKeysArray[i].match(/\d+/)}`;
      canv.width = 128;
      canv.height = 128;
      canv.id = 'current';
      frame.appendChild(canv);
      const ctx = canv.getContext('2d');
      // eslint-disable-next-line max-len
      refresh(framesValuesArray[i], ctx, canv.width / framesValuesArray[i].length, framesValuesArray[i].length);
      instrument.array = JSON.parse(JSON.stringify(framesValuesArray[i]));


      // add copy div
      const copy = document.createElement('div');
      copy.className = 'framesFunctions copy';
      frame.appendChild(copy);

      // add delete div
      const del = document.createElement('div');
      del.className = 'framesFunctions delete';
      frame.appendChild(del);

      // add move div
      const move = document.createElement('div');
      move.className = 'framesFunctions move';
      frame.appendChild(move);

      // add number div
      const num = document.createElement('div');
      num.className = 'framesFunctions number';
      num.innerHTML = `${+framesKeysArray[i].match(/\d+/)}`;
      frame.appendChild(num);
    }

    for (let i = 0; i < framesKeysArray.length; i++) {
      addNewFrame(i);
    }
    const ctx = mainCanvas.getContext('2d');
    const lastFrame = framesValuesArray[framesValuesArray.length - 1];
    refresh(lastFrame, ctx, mainCanvas.width / lastFrame.length, lastFrame.length);

    // chose pensize
    function chosePensize() {
      const tmpCollection = document.getElementsByClassName('penSizeCurrent');
      if (tmpCollection.length !== 0) {
        const tmpArray = Array.from(tmpCollection);
        tmpArray[0].className = 'penSize';
        tmpArray[0].children[0].className = 'square';
      }
      const collection = document.getElementsByClassName('penSize');
      const array = Array.from(collection);
      array[instrument.penSize - 1].className = 'penSizeCurrent';
      array[instrument.penSize - 1].children[0].className = 'squareCurrent';
    }
    chosePensize();


    function choseInstrument() {
      const tmpCollection = document.getElementsByClassName('instrumentsCurrent');
      if (tmpCollection.length !== 0) {
        const tmpArray = Array.from(tmpCollection);
        tmpArray[0].className = 'instruments';
      }
      const collection = document.getElementsByClassName('instruments');
      const array = Array.from(collection);
      for (let i = 0; i < array.length; i++) {
        if (array[i].innerHTML === instrument.state) {
          array[i].className = 'instrumentsCurrent';
        }
      }
    }
    choseInstrument();

    function choseColors() {
      const current = document.getElementById('currentColor');
      current.style.backgroundColor = instrument.currentColor;
      const previous = document.getElementById('previousColor');
      previous.style.backgroundColor = instrument.previousColor;
    }
    choseColors();

    // start animation
    function startAnimation() {
      const preview = document.getElementById('preview');
      // eslint-disable-next-line no-shadow
      const ctx = preview.getContext('2d');
      let i = 0;
      let previewArray;


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
    }
    startAnimation();
  });
}
