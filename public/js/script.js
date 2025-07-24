import { LANGUAGES } from "../data/data.js"

const THEME = {
  LIGHT: "light",
  DARK: "dark",
}

document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;


window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")

  let currentTheme = localStorage.getItem("theme") || THEME.DARK
  const buttonTheme = document.querySelector("button.theme")

  if (currentTheme === THEME.DARK) {
    enableDark()
    // buttonTheme.classList.remove("active")
  }
  if (currentTheme === THEME.LIGHT) {
    // buttonTheme.classList.add("active")
    enableLight()
  }

  const container = document.querySelector(".main-header")

  // console.log(container.children)

  const toggle = container?.querySelector("#toggle")
  const parents = container.querySelectorAll("li.parent.hasChildren i")

  //   toggle.classList.remove("active")

  toggle.addEventListener("click", () => {
    // console.log("click")
    toggle.classList.toggle("active")
    // document.body.classList.toggle("stop-scroll")

    if (!toggle.classList.contains("active")) clearActive(parents)
  })

  // active li element
  parents.forEach((parent, _) => {
    parent.addEventListener("click", () => {
      // console.log("parent clicked is: ", parent)

      //   console.log(parent.innerHTML)

      const wasActive = parent.classList.contains("active")

      clearActive(parents)

      if (!wasActive) {
        parent.classList.toggle("active")
      }
    })
  })

  const currentPath = getPath()

  // testing in live server, move to [1] otherwise
  // const currentLanguage = currentPath.split("/")[3]
  const currentLanguage = currentPath.split("/")[1]
  // console.log(currentLanguage)

  const ul = document.querySelector("ul.langs")
  const items = ul.querySelectorAll("li.item")

  // console.log(ul)
  // console.log(items)
  let itemsArray = Array.from(items)

  for (let item of itemsArray) {
    const language = item.textContent.trim().toLowerCase()
    if (language === currentLanguage) item.classList.add("active")

    // console.log(language, currentLanguage)
    if (language !== currentLanguage)
      item.addEventListener("click", () => {
        // console.log(language)
        // clearActive(itemsArray)

        const newPath = currentPath.split("/")
        newPath.shift()
        newPath[0] = language
        const completePath = newPath.join("/")
        window.location.href = "/" + completePath
      })
  }

  // toggle theme

  buttonTheme.addEventListener("click", () => {
    if (currentTheme === THEME.LIGHT)
      if (currentTheme === THEME.DARK)
        // buttonTheme.querySelector("img").classList.add("light")
        // buttonTheme.querySelector("img").classList.remove("light")

        toggleTheme()
    currentTheme = localStorage.getItem("theme")
    localStorage.setItem(
      "theme",
      currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
    )
  })

  // testing dropdown langs

  const ulContainer = document.querySelector("ul.langs")

  const arrow = document.createElement("i")
  arrow.classList.add("material-icons")
  arrow.textContent = "arrow_drop_down"
  ulContainer.append(arrow)

  const cnt = document.createElement("ul")
  cnt.classList.add("not-selected")
  ulContainer.append(cnt)

  arrow.addEventListener("click", () => {
    cnt.innerHTML = ""
    cnt.classList.toggle("show")
    const notSelectedLangs = Object.values(LANGUAGES).filter(
      (lang) => lang !== currentLanguage,
    )

    for (let lang of notSelectedLangs) {
      const element = document.createElement("li")
      element.textContent = lang.toUpperCase()
      console.log("element =>", element)
      cnt.append(element)

      element.addEventListener("click", () => {
        console.log("current path: ", currentPath)
        const newPath = currentPath.split("/")
        console.log(newPath)
        newPath[1] = lang
        const completePath = newPath.join("/")
        console.log(completePath)
        const origin = location.origin
        window.location.href = `${origin}${completePath}`
      })
    }
  })

  // if (!item.classList.contains("active"))
})

/**
 * Removes the "active" class from each element in the provided list.
 *
 * @param {HTMLElement[]} list - An array of DOM elements to clear the "active" class from.
 */
function clearActive(list) {
  list.forEach((element) => element.classList.remove("active"))
}

function getPath() {
  return location.pathname
}

function toggleTheme() {
  document.body.classList.toggle("light-theme")
}

function enableLight() {
  console.log("ENABLEING LIGHT THEME")
  document.body.classList.add("light-theme")

  const logo = document.querySelector("h1.logo a img")

  const dark = "/media/logo/logo-1.svg"

  logo.src = dark
}
function enableDark() {
  console.log("ENABLEING DARK THEME")
  document.body.classList.remove("light-theme")

  const logo = document.querySelector("h1.logo a img")

  const light = "/media/logo/logo-1-dark.svg"

  logo.src = light
}
