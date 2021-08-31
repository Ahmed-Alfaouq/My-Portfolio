const menuIcon = document.getElementById('menu-icons');
const menu = document.getElementById('collapse-menu');
const closeIcon = document.getElementById('close-icon');
const logo = document.getElementsByClassName('logo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('d-none');
  closeIcon.classList.remove('d-none');
  logo[0].classList.add('d-none');
  menu.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('open');
  menuIcon.classList.remove('d-none');
  logo[0].classList.remove('d-none');
  closeIcon.classList.remove('d-none');
});

/* Add Scroolspy */
const portfolioLink = document.getElementById('portfolio-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementsByClassName('contact-link');
// Call Sections
const navbar = document.getElementById('navbar');
const headlineSection = document.getElementById('headline');
const portfolioSection = document.getElementById('works');
const aboutSection = document.getElementById('about');

portfolioLink.addEventListener('click', () => {
  menu.classList.remove('open');
  menuIcon.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  logo[0].classList.remove('d-none');
  window.scrollTo(0, (navbar.clientHeight + headlineSection.clientHeight));
});

aboutLink.addEventListener('click', () => {
  menu.classList.remove('open');
  menuIcon.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  logo[0].classList.remove('d-none');
  window.scrollTo(0, (navbar.clientHeight
    + headlineSection.clientHeight
    + portfolioSection.clientHeight));
});

contactLink[0].addEventListener('click', () => {
  menu.classList.remove('open');
  menuIcon.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  logo[0].classList.remove('d-none');
  window.scrollTo(0,
    (navbar.clientHeight
    + headlineSection.clientHeight
    + portfolioSection.clientHeight
    + aboutSection.clientHeight));
});
