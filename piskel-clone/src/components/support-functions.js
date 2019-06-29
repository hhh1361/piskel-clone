/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { instrument } from './instruments-functions';
// import { canvas } from './canvas-creation-functions';

const paintOver = function paintOver(array, y, x) {
  for (let m = 0; m < instrument.penSize; m++) {
    for (let f = 0; f < instrument.penSize; f++) {
      array[y + m][x + f] = { color: instrument.currentColor };
    }
  }
};


export default paintOver;
