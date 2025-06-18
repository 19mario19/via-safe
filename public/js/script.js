window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")
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
})

/**
 * Removes the "active" class from each element in the provided list.
 *
 * @param {HTMLElement[]} list - An array of DOM elements to clear the "active" class from.
 */
function clearActive(list) {
  list.forEach((element) => element.classList.remove("active"))
}
