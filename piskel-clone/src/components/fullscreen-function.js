const fullscreenFunction = function fullscreenFunction() {
  const fullscreen = document.getElementById('fullscreen');
  const previewContainer = document.getElementById('previewContainer');
  fullscreen.addEventListener('click', () => {
    previewContainer.requestFullscreen();
  });
};

export default fullscreenFunction;
