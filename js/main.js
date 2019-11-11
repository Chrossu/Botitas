const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-popup');
const popupContent = document.getElementById('container-popup');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  popupContent.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  popupContent.classList.remove('active');
});
