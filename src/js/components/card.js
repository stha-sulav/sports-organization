const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `

<div class="card">
                <img src="" alt="" class="card-image">
                <div class="card-item-content">
                  <h3 class="card-header">
                    <slot name="heading-text"></slot>
                  </h3>
                  <p class="card-description">
                    <slot name="description-text"></slot>
                  </p>
                  <a href="/sports/football" class="btn-accent">
                  <slot name="link-text"> </slot>
                  </a>
                </div>
              </div>`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.link = document.createElement("link");
    this.link.rel = "stylesheet";
    this.link.href = "./styles/styles.css";

    this.image = this.shadow.querySelector(".card-image");
    this.imageSrc = this.shadow.querySelector("[data-imgsrc]");

    this.image.attributes.href = this.imageSrc;

    this.shadowRoot.appendChild(this.link);
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }
}

customElements.define("card-component", Card);
