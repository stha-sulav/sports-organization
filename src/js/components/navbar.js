const navLinks = document.querySelector(".nav-links");
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
