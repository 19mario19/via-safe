import { LANGUAGES } from "../data/data.js"
import { routes2 as routes } from "../routes/routes.js"

function Footer(lang = LANGUAGES.RU) {
  const language = lang.toLowerCase()
  const elements = routes
    ?.map((route) => {
      return /*html*/ `
    <li class="parent">
      <a href="${language}${route.path}">
        ${route.name[language]}
      </a>
      ${
        route?.children
          ? /*html*/ `
          <ul class="child">
          ${route?.children
            .map((child) => {
              return /*html*/ `
              <li class="child">
                <a href="${language}${child.path}">
                  ${child.name[language]}
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
    <ul class="parent container">
      ${elements}
    </ul>
    `
        : ""
    }
  </footer>`
}

export { Footer }
