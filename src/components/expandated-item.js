import { expandableItemTemplate } from "../templates/expandedItemTemplate.js";
import { ComponentCreator } from "../utils/ComponentCreator.js";

class ExpandatedItem extends ComponentCreator {
  constructor() {
    super(expandableItemTemplate);
  }
}

customElements.define("expanded-item", ExpandatedItem);
