import { routes } from "../routes/routes.js"

/**
 * Renders a navigation menu based on the global `routes` array.
 * Each route is rendered as a list item with a link, and if the route has children,
 * a nested list of child routes is also rendered.
 *
 * @returns {string} HTML string representing the navigation menu.
 */
function Footer() {
  const elements = routes
    ?.map((route) => {
      return /*html*/ `
    <li>
      <a href="${route.path}">
        ${route.name}
      </a>
      ${
        route?.children
          ? /*html*/ `
          <ul>
          ${route?.children
            .map((child) => {
              return /*html*/ `
              <li>
                <a href="${child.path}">
                  ${child.name}
                </a>
              </li>
              `
            })
            .join("")}
          </ul>`
          : ""
      }
    </li>
    `
    })
    .join("")

  return /*html*/ `
<nav class="">
    ${
     elements
      ? /*html*/ `
    <ul>
      ${elements}
    </ul>
    `
      : ""
  }
  </nav>`
}

export { Footer }
