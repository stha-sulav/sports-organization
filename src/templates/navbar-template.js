import { templateCreator } from "../utils/templateCreator.js";
import { routes } from "../data/routes.js";

const context = `<header>
    <nav class="navbar">
      <h1>Logo</h1>
      <span class="hamberger-menu"></span>
      <div class="nav-links">
        <span class="close"></span>
        <div class="link-container">
          ${routes
            .filter((route) => !route.location)
            .map(
              (route) =>
                `<a href="${route.route}" class="nav-link">${route.name}</a>`
            )
            .join("")} 
        </div>
      </div>
    </nav>
    </header>
  `;

export const NavbarTemplate = templateCreator(context);
