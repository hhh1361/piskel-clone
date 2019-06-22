const createMainCanvas = function createMainCanvas() {
  const center = document.getElementById('center');
  const canvasSizeTemp = document.getElementById('canvasSizeTemp');
  let mainCanvas;

  let canvasSize;
  canvasSizeTemp.addEventListener('click', (e) => {
    if (e.target.className === 'canvasSize') {
      canvasSize = +e.target.innerHTML;
      center.removeChild(canvasSizeTemp);

      mainCanvas = document.createElement('canvas');
      mainCanvas.width = canvasSize * 5;
      mainCanvas.style.width = `${canvasSize * 5}px`;
      mainCanvas.height = canvasSize * 5;
      mainCanvas.id = 'mainCanvas';
      mainCanvas.className = 'mainCanvas';
      center.style.padding = `${(640 - canvasSize * 5) / 2}px`;
      mainCanvas.style.border = '1px solid white';
      center.appendChild(mainCanvas);
    }
  });
};

export default createMainCanvas;
