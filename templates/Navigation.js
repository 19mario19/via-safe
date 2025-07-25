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

function Navigation(lang = LANGUAGES.RU) {
  // const stringDepth = "../".repeat(depth)

  const logoSrc = {
    light: "/media/logo/logo-1.svg",
    // dark: "./media/logo/logo-1-dark.svg",
  }

  const elements = routes
    ?.map((route) => {
      const hasChildren = route?.children?.length > 0 ? "hasChildren" : ""

      return /*html*/ `
      <div class="drop-down">
      <li class="parent ${hasChildren}">
      <a href="/${lang}${route.path}">
      ${route.name[lang]}
      </a>
      ${
        hasChildren
          ? /*html*/ `
          <i class="material-icons">arrow_drop_down</i>
        `
          : ""
      }
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
  <nav class="main-header">
  <div class="left container">
  <h1 class="logo">
  ${
    logoSrc
      ? /*html*/ `
    <a href="/${lang}${routes[0].path}">
    <img src="${logoSrc.light}" alt="" />
    </a>
    `
      : ""
  }
  </h1>
  
  <div class="mid">
  <ul class="langs">
  <li class="active">
  ${lang.toUpperCase()}
  </li>
    </ul>          
    <button
        class="theme"
        data-toggle="#theme-toggle"
        data-class="light"
        data-fn="toggleTheme,toggleLogo"
     >
 
     <img
        id="theme-toggle"
        src="/media/theme/theme.png"
        alt="toggle theme image"
      />

    </button>
  </div>
  </div>

  <div class="burger" id="toggle">
  
    <img src="/media/menu/menu.png" alt="menu icon" />
  </div>
  
  ${
    elements
      ? /*html*/ `
    <ul class="parent container">
    ${elements}
    </ul>
    `
      : ""
  }
  </nav>`
}

export { Navigation }
