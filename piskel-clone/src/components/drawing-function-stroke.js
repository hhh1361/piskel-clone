/* eslint-disable no-param-reassign */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { instrument } from './instruments-functions';
import { canvas } from './canvas-creation-functions';
import paintOver from './support-functions';


const drawingFunctionStroke = function drawingFunctionStroke() {
  const mouse = { x: 0, y: 0 };
  const mainCanvas = document.getElementById('mainCanvas');
  const stroke = {
    start: '?',
    finish: '?',
  };

  mainCanvas.addEventListener('mousedown', (e) => {
    if (instrument.state === 'stroke') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      stroke.start = { y: Math.floor(mouse.y / 5), x: Math.floor(mouse.x / 5) };
    }
  });

  mainCanvas.addEventListener('mouseup', (e) => {
    if (instrument.state === 'stroke') {
      mouse.x = e.pageX - mainCanvas.offsetLeft;
      mouse.y = e.pageY - mainCanvas.offsetTop;
      stroke.finish = { y: Math.floor(mouse.y / 5), x: Math.floor(mouse.x / 5) };
      if (stroke.finish.x - stroke.start.x > 0) {
        stroke.distanceX = 1 + stroke.finish.x - stroke.start.x;
      } else {
        stroke.distanceX = -1 + stroke.finish.x - stroke.start.x;
      }
      if (stroke.finish.y - stroke.start.y > 0) {
        stroke.distanceY = 1 + stroke.finish.y - stroke.start.y;
      } else {
        stroke.distanceY = -1 + stroke.finish.y - stroke.start.y;
      }

      stroke.array = [];
      function sort(number, n) {
        while (number > 0 && n > 0) {
          let a;
          if (n % 2) {
            a = Math.floor(number / n);
          } else {
            a = Math.ceil(number / n);
          }
          number -= a;
          n--;
          stroke.array.push(a);
        }
        stroke.arraySum = stroke.array.reduce((acc, i) => acc + i);
      }

      if (Math.abs(stroke.distanceX) > Math.abs(stroke.distanceY)) { // X distance > Y distance
        sort(Math.abs(stroke.distanceX), Math.abs(stroke.distanceY));

        if (stroke.distanceY > 0) { // X > Y; Y > 0;
          let n = 0;
          if (stroke.distanceX > 0) { // X > Y; Y > 0; X > 0
            for (let i = 0; i < stroke.distanceY; i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + i, stroke.start.x + n);
                canvas.array[stroke.start.y + i][stroke.start.x + n].color = instrument.currentColor;
                n++;
              }
            }
          } else { // X > Y; Y > 0; X =< 0
            for (let i = 0; i < stroke.distanceY; i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + i, stroke.start.x + n);
                canvas.array[stroke.start.y + i][stroke.start.x + n].color = instrument.currentColor;
                n--;
              }
            }
          }
        } else { // X > Y; Y =< 0;
          let n = 0;
          if (stroke.distanceX > 0) { // X > Y; Y < 0; X > 0
            for (let i = 0; i < Math.abs(stroke.distanceY); i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y - i, stroke.start.x + n);
                canvas.array[stroke.start.y - i][stroke.start.x + n].color = instrument.currentColor;
                n++;
              }
            }
          } else { // X > Y; Y < 0; X =< 0
            for (let i = 0; i < Math.abs(stroke.distanceY); i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y - i, stroke.start.x + n);
                canvas.array[stroke.start.y - i][stroke.start.x + n].color = instrument.currentColor;
                n--;
              }
            }
          }
        }
      } else { // X distance =< Y distance
        sort(Math.abs(stroke.distanceY), Math.abs(stroke.distanceX));

        if (stroke.distanceY > 0) { // X =< Y; Y > 0
          let n = 0;
          if (stroke.distanceX > 0) { // X =< Y; Y > 0; X > 0
            for (let i = 0; i < stroke.distanceY; i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + n, stroke.start.x + i);
                canvas.array[stroke.start.y + n][stroke.start.x + i].color = instrument.currentColor;
                n++;
              }
            }
          } else { // X =< Y; Y > 0; X =< 0
            for (let i = 0; i < stroke.distanceY; i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + n, stroke.start.x - i);
                canvas.array[stroke.start.y + n][stroke.start.x - i].color = instrument.currentColor;
                n++;
              }
            }
          }
        } else { // X =< Y; Y =< 0
          let n = 0;
          if (stroke.distanceX > 0) { // X =< Y; Y =< 0; X > 0
            for (let i = 0; i < Math.abs(stroke.distanceY); i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + n, stroke.start.x + i);
                canvas.array[stroke.start.y + n][stroke.start.x + i].color = instrument.currentColor;
                n--;
              }
            }
          } else { // X =< Y; Y =< 0; X =< 0
            for (let i = 0; i < Math.abs(stroke.distanceY); i++) {
              for (let j = 0; j < stroke.array[i]; j++) {
                paintOver(canvas.array, stroke.start.y + n, stroke.start.x - i);
                canvas.array[stroke.start.y + n][stroke.start.x - i].color = instrument.currentColor;
                n--;
              }
            }
          }
        }
      }


      // refresh main canvas
      canvas.canvas = mainCanvas;
      const context = mainCanvas.getContext('2d');

      context.clearRect(
        0, 0, canvas.array.length * 5, canvas.array.length * 5,
      );
      for (let i = 0; i < canvas.array.length; i++) {
        for (let j = 0; j < canvas.array.length; j++) {
          if (canvas.array[i][j].color !== '?') {
            context.fillStyle = canvas.array[i][j].color;
            context.fillRect(j * 5, i * 5, 5, 5);
          }
        }
      }
    }
  });
};

export default drawingFunctionStroke;
