import { generateHTML, LANGUAGES } from "../data/data.js"

window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")

  let currentLanguage = LANGUAGES.RU

  const container = document.querySelector(".main-header")

  const toggle = container?.querySelector("#toggle")
  const parents = container.querySelectorAll("li.parent.hasChildren")

  // init
  //   toggle.classList.remove("active")

  toggle.addEventListener("click", () => {
    console.log("click")
    toggle.classList.toggle("active")

    if (!toggle.classList.contains("active")) clearActive(parents)
  })

  // active li element
  parents.forEach((parent, index) => {
    parent.addEventListener("click", () => {
      console.log("parent clicked is: ", parent)

      const wasActive = parent.classList.contains("active")

      clearActive(parents)

      if (!wasActive) {
        parent.classList.toggle("active")
      }
    })
  })

  // adding content to home page
  const homePage = document.querySelector("#home")
  if (!homePage) console.log("Home page not found")
  homePage.innerHTML = generateHTML("home", LANGUAGES.RU)

  const ul = document.createElement("ul")
  container.append(ul)
  for (let lang in LANGUAGES) {
    console.log(lang)
    const li = document.createElement("li")
    li.textContent = lang
    ul.append(li)

    li.addEventListener("click", () => {
      homePage.innerHTML = ""
      homePage.innerHTML = generateHTML("home", lang.toLowerCase())
    //   console.log(homePage.innerHTML)
    })
  }
})

/**
 * Removes the "active" class from each element in the provided list.
 *
 * @param {HTMLElement[]} list - An array of DOM elements to clear the "active" class from.
 */
function clearActive(list) {
  list.forEach((element) => element.classList.remove("active"))
}
