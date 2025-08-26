const menuIcon = document.querySelector(".menu-icon");
const menuBurger = document.querySelector(".menu-burger");

menuIcon.addEventListener("click", () => {
  menuBurger.classList.toggle("menu-hidden");
});
