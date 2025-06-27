import express from "express"
import path from "path"
import { LANGUAGES } from "./public/data/data.js"
import { routes2 as routes } from "./routes/routes.js"

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
  for (let l in LANGUAGES) {
    const lang = l.toLowerCase()
    app.get(`/${lang}${parent.path}`, (req, res) => {
      const filePath =
        parent.path === "/"
          ? path.join(fullPath, lang, `${parent.name[lang]}.html`)
          : path.join(fullPath, lang, parent.path, `${parent.name[lang]}.html`)

      return res.sendFile(filePath)
    })

    if (Array.isArray(parent.children) && parent.children.length > 0) {
      for (let child of parent.children) {
        app.get(`/${lang}${child.path}`, (req, res) => {
          const childFile = path.join(
            fullPath,
            lang,
            child.path,
            `${child.name[lang]}.html`,
          )
          return res.sendFile(childFile)
        })
      }
    }
  }
}

app.listen(PORT, () => {
  console.log(new Date().toLocaleTimeString())
  console.log(`Listening on port: ${PORT}`)
})
