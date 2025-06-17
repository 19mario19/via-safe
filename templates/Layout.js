/**
 * Generates an HTML layout string with optional navigation, body, and footer content.
 *
 * @param {Object} params - The parameters for the layout.
 * @param {string} params.title - The title of the HTML document.
 * @param {Object} params.content - The content sections for the layout.
 * @param {string} [params.content.nav] - The HTML string for the navigation section (optional).
 * @param {string} [params.content.body] - The HTML string for the body section (optional).
 * @param {string} [params.content.footer] - The HTML string for the footer section (optional).
 * @param {boolean} [script=false] - Whether to include the script tag for "/js/script.js".
 * @returns {string} The generated HTML layout as a string.
 */
function LayoutDir({ title, content: { nav, body, footer } }, script = false) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./global.css" />
        ${
          script
            ? '<script src="./js/script.js" defer type="module"></script>'
            : ""
        }
        <title>${title}</title>
    </head>
    <body>
        ${nav ?? ""}
        ${body ?? ""}
        ${footer ?? ""}
    </body>
    </html>
`
}

export { LayoutDir }
