import { todoItemTemplate } from "../templates/todoItemTemplate.js";

class TodoItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(todoItemTemplate.content.cloneNode(true));
    this.checkbox = this.shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") this.updateChecked(newValue);
  }

  updateChecked(value) {
    this.checkbox.checked = value != null && value !== false;
  }
}

customElements.define("todo-item", TodoItem);
