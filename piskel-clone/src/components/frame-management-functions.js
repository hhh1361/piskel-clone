import { refresh } from './support-functions';
import { canvas } from './canvas-creation-functions';

export default function frameManagement() {
  const mainCanvas = document.getElementById('mainCanvas');
  const current = document.getElementById('current');
  const currentContext = current.getContext('2d');
  mainCanvas.addEventListener('mousedown', () => {
    document.addEventListener('mouseup', function mouseUp() {
      refresh(canvas.array, currentContext, 128 / canvas.array.length);
      document.removeEventListener('mouseup', mouseUp);
    });
  });
  mainCanvas.addEventListener('click', () => {
    refresh(canvas.array, currentContext, 128 / canvas.array.length);
  });
}
