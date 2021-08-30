const menuIcon = document.getElementById("menu-icons");
const menu = document.getElementById("menu");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("d-none");
  closeIcon.classList.remove("d-none");
  menu.classList.add("open");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("open");
  menuIcon.classList.remove("d-none");
  closeIcon.classList.remove("d-none");
});
