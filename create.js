import path from "path"
import { promises as fs } from "fs"
import { routes2 as routes } from "./routes/routes.js"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"
import { generateHTML, LANGUAGES } from "./data/data.js"

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

// console.log(fullPath)
// console.log(routes)

function LayoutTitleBody(title, body = "", lang) {
  return LayoutDir(
    { title, content: { nav: Navigation(lang), body, footer: Footer(lang) } },
    true,
  )
}

// console.log(generateHTML("Home Page", LANGUAGES.EN))

async function generatePages() {
  for (let route of routes) {
    for (let l in LANGUAGES) {
      let lang = l.toLowerCase()
      try {
        const parentPath = path.join(fullPath, lang, route.path)
        const parentFile = path.join(parentPath, `${route.name[lang]}.html`)

        // console.log(route.name)

        await fs.mkdir(parentPath, { recursive: true })

        const body = generateHTML(route.name[LANGUAGES.EN], lang) ?? "" // keeping english route name

        await fs.writeFile(
          parentFile,
          LayoutTitleBody(route.name[lang], body,lang),
          "utf-8",
        )

        if (Array.isArray(route.children) && route.children.length > 0) {
          for (let child of route.children) {
            const childPath = path.join(fullPath, lang, child.path)
            const childFile = path.join(childPath, `${child.name[lang]}.html`)

            await fs.mkdir(childPath, { recursive: true })

            const body = generateHTML(child.name[LANGUAGES.EN], lang) ?? ""

            // console.log("\n")

            await fs.writeFile(
              childFile,
              LayoutTitleBody(child.name[lang], body,lang),
              "utf-8",
            )
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

generatePages()
