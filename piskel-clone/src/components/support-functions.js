/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { instrument } from './instruments-functions';
// import { canvas } from './canvas-creation-functions';

export function paintOver(array, y, x, colorToFill) {
  for (let m = 0; m < instrument.penSize; m++) {
    for (let f = 0; f < instrument.penSize; f++) {
      array[y + m][x + f] = { color: colorToFill };
    }
  }
}

export function refresh(array, context, n) {
  context.clearRect(
    0, 0, array.length * n, array.length * n,
  );
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j].color !== '?') {
        context.fillStyle = array[i][j].color;
        context.fillRect(j * n, i * n, n, n);
      }
    }
  }
}

export function fillRect(context, y, x, color) {
  context.fillStyle = color;
  context.fillRect(
    x * 5, y * 5, instrument.penSize * 5, instrument.penSize * 5,
  );
}
