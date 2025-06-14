import express from "express"
import path from "path"

const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")

app.use(express.json())
app.use(express.static(fullPath))

app.get("/", (req, res) => {
  return res.sendFile(path.join(__rootFolder, "public", "index.html"))
})

app.listen(PORT, () => {
  console.log(new Date().toLocaleTimeString())
  console.log(`Listening on port: ${PORT}`)
})
