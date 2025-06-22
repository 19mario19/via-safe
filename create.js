import path from "path"
import { promises as fs } from "fs"
import { routes } from "./routes/routes.js"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

console.log(fullPath)
console.log(routes)

function LayoutTitle(title) {
  return LayoutDir(
    { title, content: { nav: Navigation(), body: "", footer: Footer() } },
    true,
  )
}


async function generatePages() {
  for (let route of routes) {
    try {
      const parentPath = path.join(fullPath, route.path)
      const parentFile = path.join(parentPath, `${route.name}.html`)
      console.log(parentPath)
      await fs.mkdir(parentPath, { recursive: true })
      await fs.writeFile(parentFile, LayoutTitle(route.name), "utf-8")

      if (Array.isArray(route.children) && route.children.length > 0) {
        for (let child of route.children) {
          const childPath = path.join(fullPath, child.path)
          const childFile = path.join(childPath, `${child.name}.html`)
          console.log(childPath)
          await fs.mkdir(childPath, { recursive: true })
          await fs.writeFile(childFile, LayoutTitle(child.name, ""), "utf-8")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

generatePages()
