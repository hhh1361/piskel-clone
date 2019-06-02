/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const pen = document.getElementById('pen');
const choseColor = document.getElementById('chose-color');
const cur = document.getElementById('cur');
const prev = document.getElementById('prev');
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const mouse = { x: 0, y: 0 };

let draw = false;
let currentColor;
let tempColor;
let state;
const thickness = 20;
const canvasSize = 32;


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
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (event) => {
    currentColor = getComputedStyle(event.target).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
  });
}

// creating 32x32 field
let array;
function arrayCreator(n) {
  array = new Array(n);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(n);
  }
}
arrayCreator(canvasSize);


canvas.addEventListener('mousedown', function dawn(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  if (state === 'pen') {
    draw = true;
    array[Math.floor(mouse.x / 20)][Math.floor(mouse.y / 20)] = { color: currentColor };
    context.fillRect(
      Math.floor(mouse.x / 20) * 20, Math.floor(mouse.y / 20) * 20, thickness, thickness,
    );
    context.fillStyle = currentColor;
  }
});
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


    const canvasNew = document.getElementById('newSlide');
    const contextNew = canvasNew.getContext('2d');
    array.forEach((row) => {
      row.forEach(() => {
        contextNew.fillRect(
          Math.floor(mouse.x / 20) * 7, Math.floor(mouse.y / 20) * 7, 7, 7,
        );
      });
    });
  }
});
canvas.addEventListener('mouseup', () => {
  draw = false;
});


const plus = document.getElementById('plus');
