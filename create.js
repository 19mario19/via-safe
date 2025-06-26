import path from "path"
import { promises as fs } from "fs"
import { routes } from "./routes/routes.js"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"
import { generateHTML, LANGUAGES } from "./data/data.js"

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

// console.log(fullPath)
// console.log(routes)

function LayoutTitleBody(title, body = "", depth) {
  return LayoutDir(
    { title, content: { nav: Navigation(), body, footer: Footer() } },
    true,
    depth,
  )
}

// console.log(generateHTML("Home Page", LANGUAGES.EN))

async function generatePages() {
  for (let route of routes) {
    try {
      const parentPath = path.join(fullPath, route.path)
      const parentFile = path.join(parentPath, `${route.name}.html`)

      await fs.mkdir(parentPath, { recursive: true })

      const body = generateHTML(route.name, LANGUAGES.EN) ?? ""

      await fs.writeFile(parentFile, LayoutTitleBody(route.name, body), "utf-8")

      if (Array.isArray(route.children) && route.children.length > 0) {
        for (let child of route.children) {
          const childPath = path.join(fullPath, child.path)
          const childFile = path.join(childPath, `${child.name}.html`)

          await fs.mkdir(childPath, { recursive: true })

          const body = generateHTML(child.name, LANGUAGES.EN) ?? ""

          // console.log("\n")

          await fs.writeFile(
            childFile,
            LayoutTitleBody(child.name, body, 2),
            "utf-8",
          )
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

generatePages()
