const template = document.createElement("template");
template.innerHTML = `<p>Hello World</p>`;

class RootLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: open });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("root-layout", RootLayout);
