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

  // Adiciona a classe "visible" para fazer o elemento aparecer
  copyText.classList.add('visible');

  // Aguarda 2 segundos (2000 milissegundos) e, em seguida, remove a classe "visible" para fazer o elemento sumir
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