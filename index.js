import express from "express"
import path from "path"
import { LANGUAGES } from "./public/data/data.js"
import { routes } from "./routes/routes.js"

const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

app.use(express.json())
app.use(express.static(path.join(__rootFolder, "public")))

// app.get("/", (req, res) => {
//   return res.sendFile(path.join(__rootFolder, "public", "index.html"))
// })

for (let parent of routes) {
  app.get(parent.path, (req, res) => {
    if (parent.path === "/") {
      return res.sendFile(path.join(fullPath, `${parent.name}.html`))
    }
    return res.sendFile(path.join(fullPath, parent.path, `${parent.name}.html`))
  })

  if (Array.isArray(parent.children) && parent.children.length > 0) {
    for (let child of parent.children) {
      app.get(child.path, (req, res) => {
        return res.sendFile(
          path.join(fullPath, child.path, `${child.name}.html`),
        )
      })
    }
  }
}

app.listen(PORT, () => {
  console.log(new Date().toLocaleTimeString())
  console.log(`Listening on port: ${PORT}`)
})
