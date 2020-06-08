/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */

const instrument = {
  state: '?',
  penSize: 1,
  currentColor: '?',
  previousColor: '?',
  frames: { frame_0: '?' },
};

const instrumentsFunction = function instrumentsFunction() {
  const instrumentsConstainer = document.getElementById('instrumentsContainer');
  instrumentsConstainer.addEventListener('click', (e) => {
    if (e.target.className === 'instruments') {
      for (let i = 0; i < 15; i++) {
        instrumentsConstainer.children[i].className = 'instruments';
      }
      e.target.className = `${e.target.className}Current`;
      instrument.state = e.target.innerHTML;
    }
    global.console.log(instrument);
  });
};


const penSizeFunction = function penSizeFunction() {
  const thickness = document.getElementById('thickness');
  thickness.addEventListener('click', (e) => {
    if (e.target.className === 'penSize') {
      for (let i = 0; i < 4; i++) {
        thickness.children[i].className = 'penSize';
        thickness.children[i].children[0].className = 'square';
      }
      e.target.className = `${e.target.className}Current`;
      e.target.children[0].className = `${e.target.children[0].className}Current`;
      instrument.penSize = +e.target.children[0].innerHTML;
    } else if (e.target.className === 'square') {
      for (let i = 0; i < 4; i++) {
        thickness.children[i].className = 'penSize';
        thickness.children[i].children[0].className = 'square';
      }
      e.target.parentNode.className = `${e.target.parentNode.className}Current`;
      e.target.className = `${e.target.className}Current`;
      instrument.penSize = +e.target.innerHTML;
    }
    global.console.log(instrument);
  });
};

const currentColor = document.getElementById('currentColor');
const previousColor = document.getElementById('previousColor');
const swapColor = document.getElementById('swapColor');


currentColor.addEventListener('click', (e) => {
  if (currentColor.state !== 'activate') {
    currentColor.children[0].style.display = 'flex';
    currentColor.state = 'activate';
  } else {
    currentColor.children[0].style.display = 'none';
    currentColor.state = 'deactivate';
    instrument.previousColor = instrument.currentColor;
    instrument.currentColor = getComputedStyle(e.target).backgroundColor;
    currentColor.style.backgroundColor = instrument.currentColor;
    previousColor.style.backgroundColor = instrument.previousColor;
    global.console.log(instrument);
  }
});

previousColor.addEventListener('click', (e) => {
  if (previousColor.state !== 'activate') {
    previousColor.children[0].style.display = 'flex';
    previousColor.state = 'activate';
  } else {
    previousColor.children[0].style.display = 'none';
    previousColor.state = 'deactivate';
    instrument.previousColor = getComputedStyle(e.target).backgroundColor;
    previousColor.style.backgroundColor = instrument.previousColor;
    global.console.log(instrument);
  }
});

swapColor.addEventListener('click', () => {
  const temp = instrument.currentColor;
  instrument.currentColor = instrument.previousColor;
  instrument.previousColor = temp;
  currentColor.style.backgroundColor = instrument.currentColor;
  previousColor.style.backgroundColor = instrument.previousColor;
});

export {
  instrument, instrumentsFunction, penSizeFunction,
};
