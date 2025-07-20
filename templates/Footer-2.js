/**
 * Generates the HTML markup for the navigation bar using the defined routes.
 *
 * - Displays a logo that links to the first route.
 * - Renders navigation links for each route in the `routes` array.
 * - If a route has children, displays a dropdown with child links and an arrow icon.
 * - Includes a burger menu icon for mobile navigation.
 *
 * @returns {string} The HTML string representing the navigation bar.
 */
import { LANGUAGES } from "../data/data.js"
import { routes2 as routes } from "../routes/routes.js"

function Footer(lang = LANGUAGES.RU) {
  // const stringDepth = "../".repeat(depth)


  const elements = routes
    ?.map((route) => {
      const hasChildren = route?.children?.length > 0 ? "hasChildren" : ""

      return /*html*/ `
      <div class="drop-down">
      <li class="parent ${hasChildren}">
      <a href="/${lang}${route.path}">
      ${route.name[lang]}
      ${
        hasChildren
          ? /*html*/ `
          <i class="material-icons">arrow_drop_down</i>
        `
          : ""
      }
      </a>
      </li>
      ${
        route?.children
          ? /*html*/ `
        <ul class="child">
        ${route?.children
          .map((child) => {
            return /*html*/ `
              <li class="child">
              <a href="/${lang}${child.path}">
              ${child.name[lang]}
                </a>
                </li>
                `
          })
          .join("")}
            </ul>`
          : ""
      }
            </div>
    `
    })
    .join("")

  return /*html*/ `
  <footer class="main-header">
  
  ${
    elements
      ? /*html*/ `
    <ul class="parent container">
    ${elements}
    </ul>
    `
      : ""
  }
  <div class="bottom"><p>© 2025 ViaSafe</p></div>
  </footer>`
}

export { Footer }
