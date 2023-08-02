const trackContainer = document.querySelector('.cards');
const carouselImage = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');
let amountToMove = carouselImage[0].offsetWidth;

window.addEventListener('resize', () => {
  amountToMove = carouselImage[0].offsetWidth;
});

let count = 0;
btnNext.addEventListener('click', function () {
  if (count >= carouselImage.length - 1) return;
  count++;
  let imgSrc = carouselImage[count - 1].firstElementChild;
  if (imgSrc.getAttribute('src') === "") {
    imgSrc.setAttribute('src', imgSrc.dataset.src);
  }
  trackContainer.style.transition = "transform 0.5s ease-in-out";
  trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  btnShowHide(count);
});

btnPrev.addEventListener('click', function () {
  if (count === 0) return;
  count--;
  trackContainer.style.transition = "transform 0.5s ease-in-out";
  trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  btnShowHide(count);
});

window.addEventListener('resize', () => {
  const widthGallery = document.querySelector('.tour__gallery').offsetWidth;
  trackContainer.style.transition = "none";
  trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  if (count === carouselImage.length - 1) {
    trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  }
});

function btnShowHide(count) {
  console.log(count);
  if (count === 0) {
    btnPrev.classList.add('is-hidden');
    btnNext.classList.remove('is-hidden');
  } else if (count === carouselImage.length - 2) {
    btnPrev.classList.remove('is-hidden');
    btnNext.classList.add('is-hidden');
  } else {
    btnPrev.classList.remove('is-hidden');
    btnNext.classList.remove('is-hidden');
  }
}
