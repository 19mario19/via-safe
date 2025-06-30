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
  const parents = container.querySelectorAll("li.parent.hasChildren")

  //   toggle.classList.remove("active")

  toggle.addEventListener("click", () => {
    // console.log("click")
    toggle.classList.toggle("active")

    if (!toggle.classList.contains("active")) clearActive(parents)
  })

  // active li element
  parents.forEach((parent, _) => {
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

  const currentPath = getPath()

  const currentLanguage = currentPath.split("/")[1]
  console.log(currentLanguage)

  const ul = document.querySelector("ul.langs")
  const items = ul.querySelectorAll("li.item")

  console.log(ul)
  console.log(items)
  let itemsArray = Array.from(items)

  for (let item of itemsArray) {
    const language = item.textContent.trim().toLowerCase()
    if (language === currentLanguage) item.classList.add("active")

    console.log(language, currentLanguage)
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

  // items.forEach((item) => {
  //   for (let lang in LANGUAGES) {
  //     const language = lang.toLowerCase()
  //     // console.log(lang)
  //     const li = item
  //     clearActive(items)
  //     if (language === currentLanguage) li.classList.add("active")

  //     li.addEventListener("click", () => {
  //       console.log(li)

  //       // console.log(currentPath, lang)
  //       // const newPath = currentPath.split("/")
  //       // newPath.shift()
  //       // newPath[0] = language
  //       // const completePath = newPath.join("/")
  //       // console.log(completePath)
  //       // window.location.href = "/" + completePath
  //     })
  //   }
  // })

  // toggle theme
  const buttonTheme = document.querySelector("button.theme")
  // const buttonTheme = document.createElement("button")
  // buttonTheme.classList.add("theme")
  // const img = document.createElement("img")
  // img.src = "/media/theme/theme.png"
  // buttonTheme.appendChild(img)
  // container.insertBefore(buttonTheme, container.firstChild)
  buttonTheme.addEventListener("click", () => {
    toggleTheme()
    currentTheme = localStorage.getItem("theme")
    localStorage.setItem(
      "theme",
      currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
    )
  })
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
