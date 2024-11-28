import { routes } from "../data/routes.js";

const navLinks = document.querySelector(".nav-links");
const linkContainer = document.querySelector(".link-container");
const hamburgerMenu = document.querySelector(".hamberger-menu");
const close = document.querySelector(".close");

const handleMenuClick = () => {
  navLinks.style.left = "50%";
};

const handleCloseClick = () => {
  navLinks.style.left = "100%";
};

hamburgerMenu.addEventListener("click", () => handleMenuClick());
close.addEventListener("click", handleCloseClick);

linkContainer.innerHTML = routes
  .filter((route) => !route.location)
  .map((route) => `<a href="${route.route}" class="nav-link">${route.name}</a>`)
  .join("");
