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





