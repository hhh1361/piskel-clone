/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */

const instrument = {
  state: '?',
  penSize: 1,
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
      instrument.penSize = e.target.children[0].innerHTML;
    } else if (e.target.className === 'square') {
      for (let i = 0; i < 4; i++) {
        thickness.children[i].className = 'penSize';
        thickness.children[i].children[0].className = 'square';
      }
      e.target.parentNode.className = `${e.target.parentNode.className}Current`;
      e.target.className = `${e.target.className}Current`;
      instrument.penSize = e.target.innerHTML;
    }
    global.console.log(instrument);
  });
};
export {
  instrument, instrumentsFunction, penSizeFunction,
};
