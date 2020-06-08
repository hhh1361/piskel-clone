/* eslint-disable no-plusplus */
import { instrument } from './instruments-functions';

export default function keysFunction() {
  const keysObject = {
    pen: 'p',
    eraser: 'e',
    verticalMirrorPen: 'v',
    horizontalMirrorPen: 'h',
    paintBucket: 'b',
    paintAllPixels: 'a',
    move: 'm',
    stroke: 's',
    rectangle: 'r',
    circle: 'c',
    rectangleSelection: 'n',
    lassoSelection: 'm',
    lighten: 'l',
    dithering: 'd',
    colorPicker: 'z',
  };
  function choseInstrument(e) {
    const collection = document.getElementsByClassName('instrumentsCurrent');
    const instrumentCurrent = Array.from(collection);

    if (instrumentCurrent.length > 0) {
      instrumentCurrent[0].className = 'instruments';
    }
    switch (e.key) {
      case keysObject.pen: instrument.state = 'pen';
        break;
      case keysObject.eraser: instrument.state = 'eraser';
        break;
      case keysObject.verticalMirrorPen: instrument.state = 'verticalMirrorPen';
        break;
      case keysObject.horizontalMirrorPen: instrument.state = 'horizontalMirrorPen';
        break;
      case keysObject.paintBucket: instrument.state = 'paintBucket';
        break;
      case keysObject.paintAllPixels: instrument.state = 'paintAllPixels';
        break;
      case keysObject.move: instrument.state = 'move';
        break;
      case keysObject.stroke: instrument.state = 'stroke';
        break;
      case keysObject.rectangle: instrument.state = 'rectangle';
        break;
      case keysObject.circle: instrument.state = 'circle';
        break;
      case keysObject.rectangleSelection: instrument.state = 'rectangleSelection';
        break;
      case keysObject.lassoSelection: instrument.state = 'lassoSelection';
        break;
      case keysObject.lighten: instrument.state = 'lighten';
        break;
      case keysObject.dithering: instrument.state = 'dithering';
        break;
      case keysObject.colorPicker: instrument.state = 'colorPicker';
        break;
      default:
    }
    const current = document.getElementById(instrument.state);
    current.className = 'instrumentsCurrent';
  }
  document.addEventListener('keypress', choseInstrument);

  const descriptionsArray = Object.keys(keysObject);
  let keysArray = Object.values(keysObject);

  const keyBoard = document.getElementById('keyBoard');
  keyBoard.addEventListener('click', () => {
    const keyBoardBox = document.createElement('div');
    keyBoardBox.className = 'keyBoardBox';
    const col = document.getElementsByTagName('main');
    const ar = Array.from(col);
    const main = ar[0];
    main.appendChild(keyBoardBox);

    const head = document.createElement('h3');
    head.className = 'keyBoardBoxHead';
    keyBoardBox.appendChild(head);
    const text = document.createElement('span');
    text.innerHTML = 'Keyboard Shortcuts';
    head.appendChild(text);
    const close = document.createElement('span');
    close.innerHTML = 'X';
    close.className = 'keyBoardBoxClose';
    close.id = 'keyBoardBoxClosev';
    head.appendChild(close);
    const ul = document.createElement('ul');
    keyBoardBox.appendChild(ul);


    for (let i = 0; i < descriptionsArray.length; i++) {
      const li = document.createElement('li');
      li.className = `LI${i}`;
      ul.appendChild(li);
      const image = document.createElement('div');
      image.className = `image LI${descriptionsArray[i]}`;
      li.appendChild(image);
      const key = document.createElement('div');
      key.className = 'LIkeys';
      key.innerHTML = keysArray[i].toUpperCase();
      li.appendChild(key);
      const description = document.createElement('div');
      description.className = 'LIdescription';
      description.innerHTML = `${descriptionsArray[i]} tool`.toUpperCase();
      li.appendChild(description);
    }


    document.addEventListener('click', function closeFunction(e) {
      function refreshKeys() {
        for (let i = 0; i < keysArray.length; i++) {
          const collection = document.getElementsByClassName('LIkeys');
          const array = Array.from(collection);
          keysArray = Object.values(keysObject);
          keysObject[descriptionsArray[i]] = array[i].innerHTML.toLowerCase();
        }
      }
      function choseKey(key) {
        const collection = document.getElementsByClassName('LIkeys');
        const array = Array.from(collection);

        // const position = keysArray.indexOf(e.target.innerHTML.toLowerCase());
        // const descr = descriptionsArray[position];

        if (keysArray.indexOf(key.key) === -1) {
          e.target.innerHTML = key.key.toUpperCase();
          e.target.className = 'LIkeys';
          document.removeEventListener('keypress', choseKey);
          document.addEventListener('keypress', choseInstrument);
          refreshKeys();
        } else {
          array[keysArray.indexOf(key.key)].innerHTML = '?';
          array[keysArray.indexOf(key.key)].className = 'LIkeys blink';
          refreshKeys();
          e.target.innerHTML = key.key.toUpperCase();
          e.target.className = 'LIkeys';
          refreshKeys();
          document.removeEventListener('keypress', choseKey);
          document.addEventListener('keypress', choseInstrument);
        }
      }
      document.removeEventListener('keypress', choseInstrument);

      if (e.target === close) {
        main.removeChild(keyBoardBox);
        document.addEventListener('keypress', choseInstrument);
        document.removeEventListener('click', closeFunction);
      }

      if (e.target.className === 'LIkeys' || e.target.className === 'LIkeys blink') {
        const position = keysArray.indexOf(e.target.innerHTML.toLowerCase());
        const descr = descriptionsArray[position];
        keysObject[descr] = '?';
        refreshKeys();
        e.target.className = 'LIkeys blink';

        document.addEventListener('keypress', choseKey);
      }
    });
  });
}
