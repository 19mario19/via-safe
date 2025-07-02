import { LANGUAGES } from "../data/data.js"

const THEME = {
  LIGHT: "light",
  DARK: "dark",
}

let currentTheme = localStorage.getItem("theme") || THEME.DARK
if (currentTheme === THEME.LIGHT) enableLight()
if (currentTheme === THEME.DARK) enableDark()

window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")
  const container = document.querySelector(".main-header")

  // console.log(container.children)

  const toggle = container?.querySelector("#toggle")
  const parents = container.querySelectorAll("li.parent.hasChildren img")

  //   toggle.classList.remove("active")

  toggle.addEventListener("click", () => {
    // console.log("click")
    toggle.classList.toggle("active")

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
  const buttonTheme = document.querySelector("button.theme")

  buttonTheme.addEventListener("click", () => {
    if (currentTheme === THEME.LIGHT)
      buttonTheme.querySelector("img").classList.add("light")
    if (currentTheme === THEME.DARK)
      buttonTheme.querySelector("img").classList.remove("light")

    toggleTheme()
    currentTheme = localStorage.getItem("theme")
    localStorage.setItem(
      "theme",
      currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
    )
  })

  // testing dropdown langs

  const ulContainer = document.querySelector("ul.langs")

  const arrow = document.createElement("img")
  arrow.src = "/media/svg/arrow.svg"
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
    console.log(notSelectedLangs)

    for (let lang of notSelectedLangs) {
      const element = document.createElement("li")
      element.textContent = lang.toUpperCase()
      console.log("element =>",element)
      cnt.append(element)

      element.addEventListener("click", () => {
        console.log("current path: ",currentPath)
        const newPath = currentPath.split("/")
        console.log(newPath)
        newPath[1] = lang
        const completePath = newPath.join("/")
        console.log(completePath)
        window.location.href = `http://localhost:3000${completePath}`
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
  document.body.classList.add("light-theme")
}
function enableDark() {
  document.body.classList.remove("light-theme")
}
