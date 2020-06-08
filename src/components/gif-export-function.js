/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import gifshot from './gif/gifshot';
import { instrument } from './instruments-functions';


export default function gifExportFunction() {
  const save = document.getElementById('settingsIconSave');
  save.addEventListener('click', () => {
    const array = Object.values(instrument.frames);
    function refresh(arr, context, n, arrayLength) {
      context.clearRect(
        0, 0, arrayLength * n, arrayLength * n,
      );
      for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
          if (arr[i][j].color === '?') {
            context.fillStyle = 'black';
          } else {
            context.fillStyle = arr[i][j].color;
          }
          context.fillRect(j * n, i * n, n, n);
        }
      }
    }

    const imageArray = [];
    for (let i = 0; i < array.length; i++) {
      const img = document.createElement('img');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = array[i].length * 5;
      canvas.height = array[i].length * 5;

      refresh(array[i], context, 5, array[i].length);
      const data = canvas.toDataURL();
      img.src = data;
      imageArray.push(img);
    }


    gifshot.createGIF({
      gifWidth: 640,
      gifHeight: 640,
      images: imageArray,
      interval: 0.3,
      numFrames: 10,
      frameDuration: 1,
      fontWeight: 'normal',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      textBaseline: 'bottom',
      sampleInterval: 10,
      numWorkers: 2,
    }, (obj) => {
      if (!obj.error) {
        const { image } = obj;
        const animatedImage = document.createElement('img');
        animatedImage.src = image;
        window.location.href = animatedImage.src.replace('image/gif', 'image/octet-stream');
      }
    });
  });
}
