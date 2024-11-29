const template = document.createElement("template");
template.innerHTML = `<div></div>`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("carousel-component", Carousel);

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".carousel-item-content");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});
