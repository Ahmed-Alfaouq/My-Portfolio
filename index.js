/* eslint-disable prefer-destructuring */
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
const modal = {
  title: 'Keeping track of hundreds  of components website',
  list: [
    'html',
    'bootstrap',
    'Ruby on rails',
  ],
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
  image: {
    src: './images/modal.png',
    alt: 'modal image',
  },
  btns: {
    liveBtn: {
      text: 'See Live',
      link: '#',
    },
    sourceBtn: {
      text: 'See Source',
      link: '#',
    },
  },
};

const modalContainer = document.createElement('div');
modalContainer.setAttribute('class', 'modal d-none');
// Title
const modalTitleBs = document.createElement('h2');
modalTitleBs.setAttribute('class', 'modal-title-bs crete-font');
modalTitleBs.textContent = modal.title;
modalContainer.appendChild(modalTitleBs);

const modalTitleSs = document.createElement('h2');
modalTitleSs.setAttribute('class', 'modal-title-ss crete-font');
modalTitleSs.textContent = 'Multi Post Stories';
modalContainer.appendChild(modalTitleSs);
// Close Icon
const modalCloseIcon = document.createElement('i');
modalCloseIcon.className = 'fas fa-times';
modalContainer.appendChild(modalCloseIcon);
// List
const modalList = document.createElement('ul');
modalList.setAttribute('class', 'modal-list inter-font');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
listItem1.className = 'modal-list-item';
listItem2.className = 'modal-list-item';
listItem3.className = 'modal-list-item';
listItem1.textContent = modal.list[0];
listItem2.textContent = modal.list[1];
listItem3.textContent = modal.list[2];
modalList.appendChild(listItem1);
modalList.appendChild(listItem2);
modalList.appendChild(listItem3);
modalContainer.appendChild(modalList);

// Image
const imageContainer = document.createElement('div');
imageContainer.setAttribute('class', 'img-container');
const image = document.createElement('img');
image.setAttribute('src', modal.image.src);
image.setAttribute('alt', modal.image.alt);
imageContainer.appendChild(image);
modalContainer.appendChild(imageContainer);

// Content
const contentContainer = document.createElement('div');
contentContainer.setAttribute('class', 'modal-content');
const contentText = document.createElement('p');
contentText.setAttribute('class', 'inter-font description');
contentText.textContent = modal.text;
contentContainer.appendChild(contentText);
const liveBtn = document.createElement('a');
const liveIcon = document.createElement('img');
liveIcon.src = './images/live-icon.png';
liveIcon.alt = 'live icon';
liveBtn.textContent = modal.btns.liveBtn.text;
liveBtn.setAttribute('class', 'btn inter-font');
liveBtn.setAttribute('href', modal.btns.liveBtn.link);
liveBtn.appendChild(liveIcon);
contentContainer.appendChild(liveBtn);
const sourceBtn = document.createElement('a');
const sourceIcon = document.createElement('img');
sourceIcon.src = './images/source-icon.png';
sourceIcon.alt = 'source icon';
sourceBtn.setAttribute('class', 'btn inter-font');
sourceBtn.innerHTML = modal.btns.sourceBtn.text;
sourceBtn.appendChild(sourceIcon);
sourceBtn.setAttribute('href', modal.btns.sourceBtn.link);
contentContainer.appendChild(sourceBtn);
modalContainer.appendChild(contentContainer);
// Append Modal
document.body.appendChild(modalContainer);
// Open Modal Function
const seeProjectBtns = document.getElementsByClassName('see-project');
for (let i = 0; i < seeProjectBtns.length; i += 1) {
  seeProjectBtns[i].addEventListener('click', () => {
    modalContainer.classList.remove('d-none');
  });
}
// Close Modal Function
modalCloseIcon.addEventListener('click', () => {
  modalContainer.classList.add('d-none');
});