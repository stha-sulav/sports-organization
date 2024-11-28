export class ComponentCreator extends HTMLElement {
  constructor(template) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  linkStyles(linkSrc) {
    if (linkSrc) {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", linkSrc);
      this.shadow.appendChild(link);
    }
  }
}
