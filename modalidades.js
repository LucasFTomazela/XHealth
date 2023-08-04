let sliderContainer = document.querySelector(".galleria__inner");
let innerSlider = document.querySelector(".cards");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
  if (!pressed) {
    sliderContainer.classList.add("no-pointer-events");
  }
});

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
  sliderContainer.classList.remove("no-pointer-events");
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (pressed) {
    e.preventDefault();
    x = e.clientX; // Use clientX em vez de offsetX para obter a posição correta do mouse
    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
  }
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
  sliderContainer.style.cursor = "grab";
  if (!pressed) {
    sliderContainer.classList.remove("no-pointer-events");
  }
});

const checkBoundary = () => {
  const sliderWidth = parseInt(window.getComputedStyle(innerSlider).width);
  const leftLimit = 0;
  const rightLimit = 1850;

  if (x - startX > leftLimit) {
    innerSlider.style.left = `${leftLimit}px`;
  } else if (x - startX < -rightLimit) {
    innerSlider.style.left = `${-rightLimit}px`;
  }
};

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