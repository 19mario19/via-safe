/**
 * @fileoverview
 * A lightweight, declarative DOM manipulation utility powered by data attributes.
 * This library enables interactive behaviour such as toggling classes, conditionally
 * displaying elements, and triggering custom handlers — all without manual JS wiring.
 *
 * @version 1.0.0
 * @author ...
 * @license MIT
 */

/**
 * Global dependencies object that tracks conditional elements and their relationships.
 * @type {Object.<string, HTMLElement[]>}
 * @private
 */
const dependencies = {}

/**
 * Initialize the DOM utility library when the DOM is fully loaded.
 * Sets up event listeners and processes all elements with data attributes.
 *
 * Supported data attributes:
 * - data-fn: Specifies a handler function to call
 * - data-target: Specifies target elements (legacy support)
 * - data-class: Specifies the CSS class to toggle (default: "active")
 * - data-toggle: Comma-separated list of selectors to toggle classes on
 * - data-show: Conditional visibility based on element state
 * - data-event: Event type to listen for (default: "click")
 *
 * @listens DOMContentLoaded
 */
window.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(
    "[data-fn], [data-target], [data-class], [data-toggle], [data-show]",
  )
  const conditions = document.querySelectorAll("[data-show]")
  conditions.forEach((condition) => {
    condition.classList.add("hidden")
    const dataIf = condition.dataset.show
    dependencies[dataIf] = []
  })
  tags.forEach((tag) => {
    const dataset = tag.dataset
    let targets = ""
    const className = dataset.class || "active"
    const eventType = dataset.event || "click"
    const condition = dataset.show
    if (condition && dependencies[condition]) {
      dependencies[condition].push(tag)
    }
    const toggle = dataset.toggle
    if (toggle) {
      targets = toggle.split(",").map((h) => h.trim())
      targets.forEach((target) => {
        const targetElements =
          target === "self" ? [tag] : document.querySelectorAll(target)
        tag.addEventListener(eventType, () => {
          handlers["toggleClasses"](targetElements, className)
        })
      })
    }
    const handlerString = dataset.fn
    if (handlerString) {
      const array = handlerString.split(",").map((h) => h.trim())

      array.forEach((handler) => {
        tag.addEventListener(eventType, () => {
          if (typeof handlers[handler] === "function") {
            handlers[handler]()
          } else {
            console.log(`[${handler}] -> does not exist in [HANDLERS] object!`)
          }
        })
      })
    }
  })
  for (let key of Object.keys(dependencies)) {
    const [selector, className] = key.split(".")
    const element = document.querySelector(selector)
    if (element) {
      evaluateDOM(element, className)
    }
  }
})

/**
 * Global click handler that evaluates conditional visibility for all dependencies.
 * Checks if clicked element matches any dependency selectors and updates visibility accordingly.
 *
 * @listens click
 * @param {Event} e - The click event object
 */
window.addEventListener("click", (e) => {
  const clickedElement = e.target
  for (let key of Object.keys(dependencies)) {
    const [selector, className] = key.split(".")
    const element = document.querySelector(selector)
    if (
      (element && element === clickedElement) ||
      clickedElement.matches(selector) ||
      clickedElement.closest(selector)
    ) {
      evaluateDOM(clickedElement, className)
    }
  }
})

/**
 * Evaluates the DOM state and shows/hides dependent elements based on trigger element's class.
 *
 * @param {HTMLElement} trigger - The element that triggered the evaluation
 * @param {string} [className="active"] - The class name to check for on the trigger element
 *
 * @description This function:
 * 1. Gets the ID from the trigger element or its parent
 * 2. Finds all elements that depend on this trigger's state
 * 3. Shows dependent elements if trigger has the specified class, hides them otherwise
 *
 * @example
 * // If element with id="menu-btn" has class "active",
 * // all elements with data-show="#menu-btn.active" will be visible
 * evaluateDOM(document.getElementById('menu-btn'), 'active')
 */
function evaluateDOM(trigger, className = "active") {
  let getId = null
  if (trigger.id) {
    getId = trigger.id
  } else if (trigger.parentElement.id) {
    getId = trigger.parentElement.id
  }
  if (!getId) return
  const key = `#${getId}`
  const element = document.querySelector(key)
  if (!element) return
  const depKey = `${key}.${className}`
  const dependents = dependencies[depKey]
  if (!Array.isArray(dependents)) return
  dependents.forEach((item) => {
    if (element.classList.contains(className)) {
      item.classList.remove("hidden")
    } else {
      item.classList.add("hidden")
    }
  })
}

/**
 * Collection of handler functions that can be called via data-fn attribute.
 * @namespace handlers
 */
const handlers = {
  /**
   * Toggles specified CSS class on an array of elements.
   *
   * @memberof handlers
   * @param {HTMLElement[]} elementsArray - Array of DOM elements to toggle class on
   * @param {string} [className="active"] - CSS class name to toggle
   *
   * @example
   * // Toggle "active" class on multiple elements
   * handlers.toggleClasses([el1, el2, el3], "active")
   *
   * // Usage in HTML:
   * // <button data-fn="toggleClasses" data-toggle=".menu-item" data-class="open">Toggle Menu</button>
   */
  toggleClasses: function toggleClasses(elementsArray, className = "active") {
    if (elementsArray.length > 0) {
      elementsArray.forEach((el) => {
        el.classList.toggle(className)
      })
    }
  },

  /**
   * Toggles scroll prevention on the document body by adding/removing "stop-scroll" class.
   * Useful for modal overlays or full-screen menus.
   *
   * @memberof handlers
   *
   * @example
   * // Usage in HTML:
   * // <button data-fn="noScroll">Toggle Body Scroll</button>
   *
   * // CSS should include:
   * // .stop-scroll { overflow: hidden; }
   */
  noScroll: function noScroll() {
    document.body.classList.toggle("stop-scroll")
  },
  toggleTheme: function toggleTheme() {
    document.body.classList.toggle("light-theme")
  },
  toggleLogo: function toggleLogo() {
    const logo = document.querySelector("h1.logo a img")

    const origin = window.location.origin

    const dark = origin + "/media/logo/logo-1.svg"
    const light = origin + "/media/logo/logo-1-dark.svg"

    if (logo.src === light) {
      logo.src = dark
    } else if (logo.src === dark) {
      logo.src = light
    }
  },
}

/**
 * @typedef {Object} DataAttributes
 * @property {string} [data-fn] - Name of a function in the global `handlers` object to execute
 * @property {string} [data-toggle] - Comma-separated selectors to toggle (use "self" to target the element itself)
 * @property {string} [data-class] - CSS class to toggle (defaults to "active")
 * @property {string} [data-show] - Conditional display: show this element if a specified selector has a class (format: "#id.class")
 * @property {string} [data-event] - Event type to listen for (defaults to "click")
 * @property {string} [data-target] - (Legacy) Target elements to manipulate
 */

/*
  DOM Utility Library - Quick Start Guide

  Overview:
  This library enables declarative DOM manipulation through HTML data attributes,
  eliminating the need for manual JavaScript event handling in many cases.

  Installation:
  1. Include this script in your HTML file
  2. Add appropriate CSS for classes like "hidden", "active", and "stop-scroll"

  -----------------------------
  Data Attributes Reference:
  -----------------------------

  data-toggle:
    Toggles CSS classes on specified elements.

    Example 1 - Toggle class on other elements:
      <button data-toggle=".menu-item" data-class="open">Toggle Menu</button>

    Example 2 - Toggle class on self:
      <button data-toggle="self" data-class="active">Toggle Self</button>

    Example 3 - Multiple targets:
      <button data-toggle=".nav, .overlay" data-class="visible">Toggle Multiple</button>


  data-fn:
    Calls predefined handler functions.

    Example 1 - Call toggleClasses handler:
      <button data-fn="toggleClasses" data-toggle=".sidebar">Toggle Sidebar</button>

    Example 2 - Prevent body scroll:
      <button data-fn="noScroll">Toggle Body Scroll</button>


  data-show:
    Conditional visibility based on element state.

    Example - This div will be visible only when #menu-btn has the "active" class:
      <div data-show="#menu-btn.active">
        <p>Menu is open!</p>
      </div>

      <button id="menu-btn" data-toggle="self" data-class="active">Toggle Menu</button>


  data-class:
    Specifies which CSS class to toggle (default is "active").

    Example:
      <button data-toggle=".dropdown" data-class="open">Open Dropdown</button>


  data-event:
    Changes the event type (default is "click").

    Example:
      <div data-toggle=".tooltip" data-event="mouseenter">Hover for tooltip</div>


  -----------------------------
  CSS Requirements:
  -----------------------------

    .hidden {
      display: none;
    }

    .active {
       your active styles 
  }

  .stop-scroll {
      overflow: hidden;
    }

  -----------------------------
  Extending Functionality:
  -----------------------------

    Add custom handlers to the `handlers` object.

    Example:
      handlers.myCustomHandler = function() {
        // Your custom logic here
      }

  -----------------------------
  Browser Support:
  -----------------------------

    - Works in modern browsers with querySelector support
    - IE11+ supported if dataset polyfill is included

  -----------------------------
  Performance Notes:
  -----------------------------

    - Uses event delegation for efficient memory usage
    - Minimal DOM queries through caching
    - Lightweight footprint (~2KB minified)
*/
