/* eslint-disable no-loop-func */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const pen = document.getElementById('pen');
const choseColor = document.getElementById('chose-color');
const cur = document.getElementById('cur');
const prev = document.getElementById('prev');
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const mouse = { x: 0, y: 0 };
const frames = document.getElementById('frames');
const container = document.getElementById('container');


let draw = false;
let currentColor;
let tempColor;
let state;
const thickness = 20;
const canvasSize = 32;
let array;
let previewArray;
let num = 1;
let num2 = 1;
const fps = document.getElementById('FPS');
let timerId;


// Pen :hover
pen.addEventListener('click', () => {
  if (state !== 'pen') {
    state = 'pen';
    pen.style.backgroundColor = 'gray';
    choseColor.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '228px';
  } else {
    state = 'inactive';
    pen.style.backgroundColor = 'rgb(50, 50, 50)';
  }
});


// Chose color :hover
choseColor.addEventListener('click', () => {
  if (state !== 'choseColor') {
    state = 'choseColor';
    choseColor.style.backgroundColor = 'gray';
    pen.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '590px';
  } else {
    state = 'inactive';
    choseColor.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '228px';
  }
});


// pallete
const elements = document.querySelectorAll('.colors');
for (let j = 0; j < elements.length; j++) {
  elements[j].addEventListener('click', (event) => {
    currentColor = getComputedStyle(event.target).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
  });
}

// creating 32x32 field
function arrayCreator(n) {
  array = new Array(n);
  for (let j = 0; j < array.length; j++) {
    array[j] = new Array(n);
  }
}
arrayCreator(canvasSize);

// main canvas drawing functions
canvas.addEventListener('mousedown', function down(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  if (state === 'pen') {
    draw = true;
    context.fillStyle = currentColor;
    array[Math.floor(mouse.x / 20)][Math.floor(mouse.y / 20)] = { color: currentColor };
    context.fillRect(
      Math.floor(mouse.x / 20) * 20, Math.floor(mouse.y / 20) * 20, thickness, thickness,
    );
  }
});
// main canvas drawing functions
canvas.addEventListener('mousemove', function move(e) {
  if (draw === true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

    array[Math.floor(mouse.x / 20)][Math.floor(mouse.y / 20)] = { color: currentColor };

    array.forEach((row) => {
      row.forEach(() => {
        context.fillRect(
          Math.floor(mouse.x / 20) * 20, Math.floor(mouse.y / 20) * 20, thickness, thickness,
        );
      });
    });


    const canvasNew = document.getElementById('current');
    const contextNew = canvasNew.getContext('2d');
    array.forEach((row) => {
      row.forEach(() => {
        contextNew.fillStyle = currentColor;
        contextNew.fillRect(
          Math.floor(mouse.x / 20) * 7, Math.floor(mouse.y / 20) * 7, 7, 7,
        );
      });
    });
  }
});
// main canvas drawing functions
canvas.addEventListener('mouseup', () => {
  draw = false;
  const x = document.getElementsByClassName('frame');
  previewArray = Array.from(x);
});

// button "+" functions
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
  const createCanvas = document.createElement('canvas');
  createCanvas.width = 224;
  createCanvas.height = 224;
  createCanvas.className = `frame _${num++}`;
  const deleteCurrent = document.getElementById('current');
  if (deleteCurrent !== null) {
    deleteCurrent.removeAttribute('id');
  }
  createCanvas.id = 'current';
  frames.appendChild(createCanvas);
  context.clearRect(0, 0, canvas.width, canvas.height);


  let collection = document.getElementsByClassName('frame');
  let frameArray = Array.from(collection);
  if (array.length > 4) {
    frames.style.transform = `translateY(-${(frameArray.length - 3) * 241}px)`;
  }
  for (let i = 0; i < frameArray.length; i++) {
    frameArray[i].onclick = () => {
      container.removeChild(frameArray[i]);
      collection = document.getElementsByClassName('box');
      frameArray = Array.from(collection);
      if (frameArray.length > 4) {
        frames.style.transform = `translateY(-${(frameArray.length - 3) * 241}px)`;
      }
    };

    // events on frames library
    frameArray[i].onclick = () => {
      const changeCurrent = document.getElementById('current');
      if (changeCurrent !== null) {
        changeCurrent.removeAttribute('id');
        frameArray[i].id = 'current';
      }
      createCanvas.id = 'current';
    };
    frameArray[i].onmouseenter = () => {
    // delete :hover
      const del = document.createElement('div');
      del.id = `delete_${num2}`;
      del.innerHTML = 'Delete';
      del.style.zIndex = '999';
      del.style.fontSize = '32pt';
      del.style.fontFamily = "'Titillium Web', sans-serif";
      del.style.width = '223px';
      del.style.marginLeft = '5px';
      del.style.height = '50px';
      del.style.color = 'white';
      del.style.backgroundColor = '#B62525';
      del.style.borderRadius = '100% 100% 0 0';
      del.style.boxShadow = 'inset 0px 0px 15px 0px rgb(209, 209, 191)';
      del.style.textAlign = 'center';
      del.style.lineHeight = '50px';
      del.style.position = 'absolute';
      del.style.transform = 'translateY(179px)';
      del.style.transition = 'all, 1s';
      del.onclick = (event) => {
        frames.removeChild(event.currentTarget.nextSibling.nextSibling);
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
      frames.insertBefore(del, frameArray[i]);

      // copy :hover
      const copy = document.createElement('div');
      copy.id = `copy_${num2}`;
      num2++;
      copy.style.zIndex = '999';
      copy.innerHTML = 'Copy';
      copy.style.fontSize = '32pt';
      copy.style.fontFamily = "'Titillium Web', sans-serif";
      copy.style.width = '223px';
      copy.style.marginLeft = '5px';
      copy.style.height = '50px';
      copy.style.color = 'white';
      copy.style.backgroundColor = '#27E109';
      copy.style.borderRadius = '0 0 100% 100%';
      copy.style.boxShadow = 'inset 0px 0px 40px 0px rgb(209, 209, 191)';
      copy.style.textAlign = 'center';
      copy.style.lineHeight = '50px';
      copy.style.position = 'absolute';
      copy.style.transform = 'translateY(5px)';
      copy.onclick = (event) => {
        const copy1 = event.currentTarget.nextSibling.cloneNode(true);
        frames.insertBefore(copy1, event.currentTarget.nextSibling);
        const copy1context = copy1.getContext('2d');
        copy1context.drawImage(frameArray[i], 0, 0);
        copy1.id = null;
      };
      frames.insertBefore(copy, frameArray[i]);
    };
    frameArray[i].onmouseleave = () => {
      const del = document.getElementById(`delete_${num2 - 1}`);
      setTimeout(() => {
        frames.removeChild(del);
      }, 500);
      const copy = document.getElementById(`copy_${num2 - 1}`);
      setTimeout(() => {
        frames.removeChild(copy);
      }, 500);
    };
  }
});


// preview frame
const preview = document.getElementById('preview');
const ctx = preview.getContext('2d');
const on = document.getElementById('on');
on.addEventListener('click', () => {
  let i = 0;
  timerId = setInterval(() => {
    const x = document.getElementsByClassName('frame');
    previewArray = Array.from(x);
    ctx.clearRect(0, 0, 224, 224);
    ctx.drawImage(previewArray[i++], 0, 0);
    if (i === previewArray.length) {
      i = 0;
    }
  }, 1000 / fps.value);
});

const off = document.getElementById('off');
off.addEventListener('click', () => {
  clearInterval(timerId);
});

fps.addEventListener('mouseenter', () => {
  const inputValue = document.createElement('div');
  const optionsContainer = document.getElementById('previewContainer');
  optionsContainer.appendChild(inputValue);
  inputValue.innerHTML = `FPS: ${fps.value}`;
  inputValue.style.width = '224px';
  inputValue.style.height = '50px';
  inputValue.id = 'inputValue';
  inputValue.style.fontSize = '22pt';
  inputValue.style.fontFamily = "'Titillium Web', sans-serif";
  inputValue.style.marginLeft = '5px';
  inputValue.style.color = 'white';
  inputValue.style.backgroundColor = '#4bf36f';
  inputValue.style.borderRadius = '0 0 100% 100%';
  inputValue.style.boxShadow = 'inset 0px 0px 40px 0px rgb(209, 209, 191)';
  inputValue.style.textAlign = 'center';
  inputValue.style.lineHeight = '50px';
});
fps.addEventListener('mousemove', () => {
  const inputValue = document.getElementById('inputValue');
  inputValue.innerHTML = `FPS: ${fps.value}`;
});
fps.addEventListener('click', () => {
  const inputValue = document.getElementById('inputValue');
  inputValue.innerHTML = `FPS: ${fps.value}`;

  // reapply interval
  clearInterval(timerId);
  let i = 0;
  timerId = setInterval(() => {
    const x = document.getElementsByClassName('frame');
    previewArray = Array.from(x);
    ctx.clearRect(0, 0, 224, 224);
    ctx.drawImage(previewArray[i++], 0, 0);
    if (i === previewArray.length) {
      i = 0;
    }
  }, 1000 / fps.value);
});
fps.addEventListener('mouseleave', () => {
  const optionsContainer = document.getElementById('previewContainer');
  const inputValue = document.getElementById('inputValue');
  optionsContainer.removeChild(inputValue);
});

// fullscreen
const fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click', () => {
  preview.requestFullscreen();
});
