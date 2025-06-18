import { routes } from "../routes/routes.js"

function Footer() {
  const elements = routes
    ?.map((route) => {
      return /*html*/ `
    <li class="parent">
      <a href="${route.path}">
        ${route.name}
      </a>
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
    </li>
    `
    })
    .join("")

  return /*html*/ `
<footer class="main-footer">
    ${
      elements
        ? /*html*/ `
    <ul class="parent">
      ${elements}
    </ul>
    `
        : ""
    }
  </footer>`
}

export { Footer }
