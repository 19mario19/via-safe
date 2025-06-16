import { routes } from "../routes/routes.js"

/**
 * Renders a navigation menu based on the global `routes` array.
 * Each route is rendered as a list item with a link, and if the route has children,
 * a nested list of child routes is also rendered.
 *
 * @returns {string} HTML string representing the navigation menu.
 */
function Navigation() {
  const logoSrc = {
    light: "../media/logo/logo-1.svg",
    dark: "../media/logo/logo-1-dark.svg",
  }

  const arrowSrc = {
    light: "../media/svg/arrow.svg",
    dark: "",
  }

  const elements = routes
    ?.map((route) => {
      const hasChildren = route?.children?.length > 0 ? "hasChildren" : ""

      return /*html*/ `
      <div className="drop-down">
      <li class="parent ${hasChildren}">
      <a href="${route.path}">
      ${route.name}
      ${
        hasChildren
          ? /*html*/ `
        <img src="${arrowSrc.light}" alt="arrow" />
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
            </div>
    `
    })
    .join("")

  return /*html*/ `
  <nav class="main-header">

  <h1 className="logo">
  ${
    logoSrc
      ? /*html*/ `
      <a href="${routes[0].path}">
      <img src="${logoSrc.light}" alt="" />
      </a>
    `
      : ""
  }
  </h1>
  
  ${
    elements
      ? /*html*/ `
    <ul class="parent">
    ${elements}
    </ul>
    `
      : ""
  }
  </nav>`
}

export { Navigation }
