const trackContainer = document.querySelector('.cards');
const carouselImage = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');
let amountToMove = carouselImage[0].offsetWidth;

window.addEventListener('resize', () => {
  amountToMove = carouselImage[0].offsetWidth;
});

let count = 0;

btnNext.addEventListener('click', nextBtn);

function nextBtn(){
  if (count >= carouselImage.length - 1) return;
  count++;
  let imgSrc = carouselImage[count - 1].firstElementChild;
  if (imgSrc.getAttribute('src') === "") {
    imgSrc.setAttribute('src', imgSrc.dataset.src);
  }
  trackContainer.style.transition = "transform 0.5s ease-in-out";
  trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  btnShowHide(count);
}

btnPrev.addEventListener('click', prevBtn);

function prevBtn() {
  if (count === 0) return;
  count--;
  trackContainer.style.transition = "transform 0.5s ease-in-out";
  trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
  btnShowHide(count);
}

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
    btnPrev.style.cursor = 'default';
    btnNext.style.cursor = 'pointer';
    btnNext.addEventListener('click', nextBtn)
  } else if (count === carouselImage.length - 4) {
    btnPrev.classList.remove('is-hidden');
    btnNext.classList.add('is-hidden');
    btnNext.removeEventListener('click', nextBtn)
    btnNext.style.cursor = 'default';
    btnPrev.style.cursor = 'pointer';
  } else {
    btnPrev.classList.remove('is-hidden');
    btnNext.classList.remove('is-hidden');
    btnNext.addEventListener('click', nextBtn)
    btnPrev.addEventListener('click', prevBtn)
    btnNext.style.cursor = 'pointer';
    btnPrev.style.cursor = 'pointer';
  }
}

  const address = document.getElementById(`address`)
  const phone = document.getElementById(`phone`)
  const mail = document.getElementById(`mail`)
  const copyText = document.getElementById(`copied`)
  console.log(copyText)

  address.addEventListener('click', copyToClipboard)
  phone.addEventListener('click', copyToClipboard)
  mail.addEventListener('click', copyToClipboard)

  function copyToClipboard(ev) {
    navigator.clipboard.writeText(ev.currentTarget.innerText);
  
    copyText.classList.add('visible');
  
    setTimeout(function () {
      copyText.classList.remove('visible');
    }, 1500);
  }

  const newsletterInput = document.querySelector('.newsletterInput input');
const newsletterLabel = document.querySelector('.newsletterInput label');
const newsletterBtn = document.querySelector('.newsletterInput button');

function newsLabelUp() {
    newsletterLabel.style.transform = "translateY(45px)";
    newsletterLabel.style.color = "#EBBA34";
}

function newsLabelDown() {
    if (newsletterInput.value.trim() === '') {
        newsletterLabel.style.transform = "translateY(0)";
        newsletterLabel.style.color = "#FFF";
    }
}

newsletterInput.addEventListener('focus', newsLabelUp);
newsletterInput.addEventListener('blur', newsLabelDown);

function newsClear() {
    newsletterInput.value = '';
    newsletterLabel.style.transform = "translateY(0)";
    newsletterLabel.style.color = "#FFF";
}

newsletterBtn.addEventListener('click', newsClear);