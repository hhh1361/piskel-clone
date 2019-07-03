const fullscreenFunction = function fullscreenFunction() {
  const fullscreen = document.getElementById('fullscreen');
  const preview = document.getElementById('preview');
  fullscreen.addEventListener('click', () => {
    preview.requestFullscreen();
  });
};

export default fullscreenFunction;
