
// open close

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const ul = document.querySelector('.overlay-list');

open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
});

close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
});

ul.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

// Interaction Ovserver API

const fv = document.querySelector('.fv');
const header = document.querySelector('header');

function callback(entries) {
  console.log(entries[0]);
  if (entries[0].isIntersecting) {
    header.classList.remove('show-bg');
  } else {
    header.classList.add('show-bg');
  }
}

const options = {
  threshold: [0.1]
}
const observer = new IntersectionObserver(callback, options);
observer.observe(fv);




