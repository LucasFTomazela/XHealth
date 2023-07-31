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
