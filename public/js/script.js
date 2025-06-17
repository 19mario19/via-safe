window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded...")

  const container = document.querySelector(".main-header")

  const parents = container.querySelectorAll("li.parent.hasChildren")

  console.log(parents)

  parents.forEach((parent, index) => {
    parent.addEventListener("click", () => {
      console.log("parent clicked is: ", parent)
      clearActive(parents)
      parent.classList.toggle("active")
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
