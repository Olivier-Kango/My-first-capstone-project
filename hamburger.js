const hamburger = document.querySelector('.container_menu');
const navMenu = document.querySelector('.menu');
const fixedHamburger = document.querySelector('.div-home');

const bars = () => {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('change');
  fixedHamburger.classList.toggle('change');
};

hamburger.addEventListener('click', bars);

document.querySelectorAll('.nav-link').forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navMenu.classList.remove('change');
  fixedHamburger.classList.remove('change');
}));