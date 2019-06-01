/* eslint-disable no-plusplus */
const paintBucket = document.getElementById('paint-bucket');
const choseColor = document.getElementById('chose-color');
const cur = document.getElementById('cur');
const prev = document.getElementById('prev');


let currentColor;
let tempColor;
let state;


// Paint bucket :hover
paintBucket.addEventListener('click', () => {
  if (state !== 'paintBucket') {
    state = 'paintBucket';
    paintBucket.style.backgroundColor = 'gray';
    choseColor.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '228px';
  } else {
    state = 'inactive';
    paintBucket.style.backgroundColor = 'rgb(50, 50, 50)';
  }
});


// Chose color :hover
choseColor.addEventListener('click', () => {
  if (state !== 'choseColor') {
    state = 'choseColor';
    choseColor.style.backgroundColor = 'gray';
    paintBucket.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '590px';
  } else {
    state = 'inactive';
    choseColor.style.backgroundColor = 'rgb(50, 50, 50)';
    choseColor.style.width = '228px';
  }
});


// Присвоение ивентов для кнопок палитры и предыдущего цветов
const elements = document.querySelectorAll('.colors');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (event) => {
    currentColor = getComputedStyle(event.target).backgroundColor;
    tempColor = cur.style.backgroundColor;
    cur.style.backgroundColor = currentColor;
    prev.style.backgroundColor = tempColor;
  });
}


const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
context.lineWidth = 10;
context.lineCap = 'round';
const mouse = { x: 0, y: 0 };
let draw = false;

canvas.addEventListener('mousedown', function dawn(e) {
  console.log(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  draw = true;
  context.beginPath();
  context.strokeStyle = currentColor;
  context.moveTo(mouse.x, mouse.y);
});
canvas.addEventListener('mousemove', function move(e) {
  if (draw === true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }
});
canvas.addEventListener('mouseup', function up(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
  context.closePath();
  draw = false;
});
