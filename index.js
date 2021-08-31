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

// Start Pop up Modal
const modalContainer = document.createElement('div');
modalContainer.setAttribute('class', 'modal');
// Title
const modalTitle = document.createElement('h2');
modalTitle.setAttribute('class', 'modal-title');
modalTitle.textContent = 'Keeping track of hundreds  of components website';
modalContainer.appendChild(modalTitle);
// List
const modalList = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
modalList.appendChild(listItem1);
modalList.appendChild(listItem2);
modalList.appendChild(listItem3);
modalContainer.appendChild(modalList);
// Image
const imageContainer = document.createElement('div');
imageContainer.setAttribute('class', 'img-container');
const image = document.createElement('img');
image.setAttribute('src', './images/modal.png');
image.setAttribute('alt', 'modal image');
imageContainer.appendChild(image);
modalContainer.appendChild(imageContainer);
// Content
const contentContainer = document.createElement('div');
contentContainer.setAttribute('class', 'content');
const contentText = document.createElement('p');
contentText.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
it 1960s with the releax map lapora verita.`;
contentContainer.appendChild(contentText);
const liveBtn = document.createElement('button');
liveBtn.textContent = 'See Live';
contentContainer.appendChild(liveBtn);
const sourceBtn = document.createElement('button');
sourceBtn.textContent = 'See Source';
contentContainer.appendChild(sourceBtn);
modalContainer.appendChild(contentContainer);
// Append Modal
document.body.appendChild(modalContainer);