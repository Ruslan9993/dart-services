
let image = document.querySelector('.head__video-play');
// alert(window.innerWidth)
const video = document.querySelector('video');


image.addEventListener('click', () => {
  video.setAttribute('controls', '');
  video.play();
  image.style.display = 'none'
})