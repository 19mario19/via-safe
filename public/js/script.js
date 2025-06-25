import { generateHTML, LANGUAGES } from "../data/data.js"

window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")
  const container = document.querySelector(".main-header")

  const toggle = container?.querySelector("#toggle")
  const parents = container.querySelectorAll("li.parent.hasChildren")

  //   toggle.classList.remove("active")

  toggle.addEventListener("click", () => {
    // console.log("click")
    toggle.classList.toggle("active")

    if (!toggle.classList.contains("active")) clearActive(parents)
  })

  // active li element
  parents.forEach((parent, index) => {
    parent.addEventListener("click", () => {
      console.log("parent clicked is: ", parent)

    //   console.log(parent.innerHTML)

      const wasActive = parent.classList.contains("active")

      clearActive(parents)

      if (!wasActive) {
        parent.classList.toggle("active")
      }
    })
  })

  // adding content to home page
//   let currentLanguage = LANGUAGES.EN
//   let currentPage = "Terms of Use"

//   const mainContainer = document.querySelector("main")
//   mainContainer.innerHTML = generateHTML(currentPage, currentLanguage)
  
//   const title = mainContainer.querySelector("h1")
//   console.log(title.innerHTML)


//   const ul = document.createElement("ul")
//   ul.classList.add("list")
//   container.append(ul)
//   for (let lang in LANGUAGES) {
//     // console.log(lang)
//     const li = document.createElement("li")
//     li.classList.add("item")
//     li.textContent = lang
//     ul.append(li)

//     li.addEventListener("click", () => {
//       mainContainer.innerHTML = ""
//       mainContainer.innerHTML = generateHTML("Home Page", lang)
//       //   console.log(homePage.innerHTML)
//     })
//   }
})

/**
 * Removes the "active" class from each element in the provided list.
 *
 * @param {HTMLElement[]} list - An array of DOM elements to clear the "active" class from.
 */
function clearActive(list) {
  list.forEach((element) => element.classList.remove("active"))
}
