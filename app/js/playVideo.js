
let image = document.querySelector('.head__video-play');
// alert(window.innerWidth)
const video = document.querySelector('video');
// let head__video = document.querySelector('.head__video');

image.addEventListener('click', () => {
  video.setAttribute('controls', '');
  video.play();
  image.style.display = 'none'
  
  video.style.border = 'none';
})