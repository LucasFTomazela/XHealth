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


/////////////
document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelectorAll('.day');
    const tables = document.querySelectorAll('.table');

    days.forEach(day => {
        day.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            tables.forEach(table => {
                if (table.id === target + '-table') {
                    table.style.opacity = 1;
                } else {
                    table.style.opacity = 0;
                }
            });
            days.forEach(day => day.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

const daysList = document.querySelectorAll('.treinos .centro .days ul li p');


daysList.forEach((p) => {
  p.addEventListener('click', () => {
    if (!p.classList.contains('active')) {
      daysList.forEach((item) => item.classList.remove('active'));
      p.classList.add('active');
    }
  });
});