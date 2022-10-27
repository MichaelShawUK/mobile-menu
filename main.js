const moreBtn = document.getElementById('more-btn');
const moreMenu = document.getElementById('more-menu');
const moreImg = document.getElementById('more-img');
const additionalLinks = document.querySelectorAll('.hidden');
moreBtn.addEventListener('click', () => {
  moreMenu.classList.toggle('block');
  moreImg.classList.toggle('rotate360');
  setTimeout(slide, 100);
})

function slide() {
  additionalLinks.forEach(link => {
    link.classList.toggle('slide-from-right');
  })
}