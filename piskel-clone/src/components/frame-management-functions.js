/* eslint-disable max-len */
import { refresh } from './support-functions';
import { instrument } from './instruments-functions';

export default function frameManagement() {
  const mainCanvas = document.getElementById('mainCanvas');


  // current frame image update  on mouse down/up
  mainCanvas.addEventListener('mousedown', () => {
    document.addEventListener('mouseup', function mouseUp() {
      const current = document.getElementById('current');
      const currentContext = current.getContext('2d');
      refresh(instrument.array, currentContext, 128 / instrument.array.length, instrument.array.length);
      instrument.frames[`${current.parentElement.id}`] = JSON.parse(JSON.stringify(instrument.array));
      document.removeEventListener('mouseup', mouseUp);
    });
  });

  // current frame image update  on click
  mainCanvas.addEventListener('click', () => {
    const current = document.getElementById('current');
    const currentContext = current.getContext('2d');
    refresh(instrument.array, currentContext, 128 / instrument.array.length, instrument.array.length);


    instrument.frames[`${current.parentElement.id}`] = JSON.parse(JSON.stringify(instrument.array));
  });

  // add new frame
  const addFrame = document.getElementById('addFrame');
  addFrame.addEventListener('click', () => {
    const frames = document.getElementById('frames');
    const current = document.getElementById('current');
    instrument.frames[current.parentElement.id] = JSON.parse(JSON.stringify(instrument.array));
    // clear mainCanvas
    instrument.array = JSON.parse(JSON.stringify(instrument.arrayClean));
    const context = mainCanvas.getContext('2d');
    context.clearRect(
      0, 0, instrument.array.length * 5, instrument.array.length * 5,
    );
    if (current !== null) {
      current.removeAttribute('id');
    }

    // add frame div
    const frame = document.createElement('div');
    frame.className = 'frame';
    const tmpKeys = Object.keys(instrument.frames);
    frame.id = `frame_${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
    frames.insertBefore(frame, addFrame);
    instrument.frames[frame.id] = JSON.parse(JSON.stringify(instrument.array));

    // add canvas
    const canv = document.createElement('canvas');
    canv.className = `canvas canvas_${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
    canv.id = 'current';
    canv.width = 128;
    canv.height = 128;
    frame.appendChild(canv);

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
    num.innerHTML = `${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
    frame.appendChild(num);
  });


  // delete frame div
  const frames = document.getElementById('frames');
  frames.addEventListener('click', (e) => {
    let tmpKeys = Object.keys(instrument.frames);
    let tmpValues = Object.values(instrument.frames);
    if (tmpKeys.length > 1) {
      if (e.target.className === 'framesFunctions delete') {
        // delete object/array
        delete instrument.frames[e.target.parentNode.id];

        // delete element
        if (e.target.parentElement.children[0].id === 'current') {
          frames.removeChild(e.target.parentNode);
          tmpKeys = Object.keys(instrument.frames);
          tmpValues = Object.values(instrument.frames);
          // reassign Current ID
          frames.children[tmpKeys.length - 1].firstElementChild.setAttribute('id', 'current');

          // reapply main canvas
          const context = mainCanvas.getContext('2d');
          instrument.array = tmpValues[tmpValues.length - 1];
          refresh(instrument.array, context, 5, instrument.array.length);
        } else {
          frames.removeChild(e.target.parentNode);
        }
      }
    } else { // if only one frame is presented
      // array clear
      instrument.array = JSON.parse(JSON.stringify(instrument.arrayClean));

      // main canvas clear
      let context = mainCanvas.getContext('2d');
      context.clearRect(
        0, 0, instrument.array.length * 5, instrument.array.length * 5,
      );

      // frame canvas clear
      context = e.target.parentElement.children[0].getContext('2d');
      context.clearRect(
        0, 0, instrument.array.length * 5, instrument.array.length * 5,
      );
    }
  });


  // copy frame div
  frames.addEventListener('click', (e) => {
    let tmpKeys = Object.keys(instrument.frames);
    // let tmpValues = Object.values(instrument.frames);

    if (e.target.className === 'framesFunctions copy') {
      // add frame div
      const frame = document.createElement('div');
      frame.className = 'frame';
      tmpKeys = Object.keys(instrument.frames);
      frame.id = `frame_${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
      frames.insertBefore(frame, e.target.parentElement);
      // eslint-disable-next-line max-len
      instrument.frames[frame.id] = JSON.parse(JSON.stringify(instrument.frames[e.target.parentElement.id]));

      // add canvas
      const canv = document.createElement('canvas');
      canv.className = `canvas canvas_${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
      canv.width = 128;
      canv.height = 128;
      frame.appendChild(canv);
      const ctx = canv.getContext('2d');
      refresh(instrument.frames[frame.id], ctx, 128 / instrument.array.length, instrument.array.length);

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
      num.innerHTML = `${+tmpKeys[tmpKeys.length - 1].match(/\d+/) + 1}`;
      frame.appendChild(num);
    }
  });


  // chose current frame onclick
  frames.addEventListener('click', (e) => {
    if (e.target.width === 128) {
      if (e.target.id !== 'current') {
        const current = document.getElementById('current');
        const context = mainCanvas.getContext('2d');
        instrument.array = JSON.parse(JSON.stringify(instrument.frames[e.target.parentElement.id]));
        context.clearRect(
          0, 0, instrument.array.length * 5, instrument.array.length * 5,
        );
        refresh(instrument.array, context, 5, instrument.array.length);
        current.removeAttribute('id');
        e.target.id = 'current';
      }
    }
  });
}
