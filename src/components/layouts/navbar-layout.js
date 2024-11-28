import { ComponentCreator } from "../../utils/ComponentCreator.js";
import { NavbarTemplate } from "../../templates/navbar-template.js";

class NavbarLayout extends ComponentCreator {
  constructor() {
    super(NavbarTemplate);
    this.navLinks = this.shadow.querySelector(".nav-links");
    this.hamberger = this.shadow.querySelector(".hamberger-menu");
    this.linkContainer = this.shadow.querySelector(".link-container");
    this.close = this.shadow.querySelector(".close");

    this.linkStyles("./styles/global.css");
    this.linkStyles("./styles/nav.css");
    this.linkStyles("./styles/variables.css");
  }

  handleMenuClick = () => {
    this.navLinks.style.left = "50%";
  };

  handleCloseClick = () => {
    this.navLinks.style.left = "100%";
  };

  connectedCallback() {
    this.hamberger.addEventListener("click", () => this.handleMenuClick());
    this.close.addEventListener("click", this.handleCloseClick);
  }
}

customElements.define("nav-bar", NavbarLayout);
