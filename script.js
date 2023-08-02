const radio = document.querySelector(`.manual-btn`)
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
const radio4 = document.getElementById('radio4');
const radio5 = document.getElementById('radio5');
let carrossel = document.querySelector(`.carrosselEstrutura .carrossel`)
let cont = 1
document.getElementById(`radio1`).checked = true

setInterval(() => {
    nextImg()
}, 6000)

function nextImg() {
    cont++

    if (cont > 5) {
        cont = 1
    }

    document.getElementById(`radio${cont}`).checked = true
    passImg()
}

function passImg() {
    if (radio1.checked) {
        carrossel.style.marginLeft = `-0%`;
    } else if (radio2.checked) {
        carrossel.style.marginLeft = `-100%`;
    } else if (radio3.checked) {
        carrossel.style.marginLeft = `-200%`;
    } else if (radio4.checked) {
        carrossel.style.marginLeft = `-300%`;
    } else if (radio5.checked) {
        carrossel.style.marginLeft = `-400%`;
    }
}

const inputs = document.querySelectorAll('.form .formulario .formContent .groups input');

function moveLabelUp(event) {
    const label = event.target.parentElement.querySelector('label');
    label.style.transform = "translateY(-45px)";
    label.style.color = `#EBBA34`
}

function moveLabelDown(event) {
    const label = event.target.parentElement.querySelector('label');
    if (event.target.value.trim() === '') {
        label.style.transform = "translateY(0)";
        label.style.color = `#FFF`
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', moveLabelUp);
    input.addEventListener('blur', moveLabelDown);
});

const btn = document.querySelector('.formBtn');

function clear() {
    inputs.forEach((input) => {
        input.value = '';
        const label = input.parentElement.querySelector('label');
        label.style.transform = "translateY(0)";
        label.style.color = `#FFF`
    });
}

btn.addEventListener('click', clear);



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


function scrollToTarget(event) {
    event.preventDefault(); // Evita o comportamento padrão do link (navegação direta)

    const targetId = event.currentTarget.getAttribute("href"); // Obtém o ID do elemento alvo
    const targetElement = document.querySelector(targetId); // Obtém a referência para o elemento alvo

    if (targetElement) {
      // Se o elemento alvo existir, faça a rolagem suave até ele
      const offsetTop = targetElement.getBoundingClientRect().top;
      const offset = window.scrollY;
      const targetPosition = offsetTop + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Define a rolagem suave
      });
    }
  }

  // Adiciona o evento de clique aos links com a classe "smooth-scroll"
  const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", scrollToTarget);
  });


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


