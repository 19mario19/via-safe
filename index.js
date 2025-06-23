import express from "express"
import path from "path"
import { LANGUAGES } from "./public/data/data.js"

const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")

app.use(express.json())
app.use(express.static(fullPath))

app.get("/", (req, res) => {
  return res.sendFile(path.join(__rootFolder, "public", "index.html"))
})

const obj = {
  1: {
    name: "top",
    tag: "section",
    children: {
      1: {
        name: "alina",
        tag: "p",
        content: {
          [LANGUAGES.RU]: "Привет, Алина!",
          [LANGUAGES.RO]: "Salut, Alina!",
          [LANGUAGES.EN]: "Hello, Alina!",
        },
      },
      2: {
        name: "malina",
        tag: "p",
        content: {
          [LANGUAGES.RU]: "Как дела, Малина?",
          [LANGUAGES.RO]: "Ce faci, Malina?",
          [LANGUAGES.EN]: "How are you, Malina?",
        },
      },
    },
  },
  2: {
    name: "middle",
    tag: "section",
    children: {
      1: {
        name: "list",
        tag: "ul",
        children: {
          1: {
            name: "item",
            tag: "li",
            children: {
              1: {
                name: "link",
                tag: "a",
                children: {
                  1: {
                    name: "paragraph",
                    tag: "p",
                    content: {
                      [LANGUAGES.RU]: "Это первый пункт.",
                      [LANGUAGES.RO]: "Acesta este primul element.",
                      [LANGUAGES.EN]: "This is the first item.",
                    },
                  },
                  2: {
                    name: "subtitle",
                    tag: "h2",
                    content: {
                      [LANGUAGES.RU]: "Заголовок",
                      [LANGUAGES.RO]: "Subtitlu",
                      [LANGUAGES.EN]: "Subtitle",
                    },
                  },
                },
              },
            },
          },
          2: {
            name: "item",
            tag: "li",
            children: {
              1: {
                name: "link",
                tag: "a",
                children: {
                  1: {
                    name: "paragraph",
                    tag: "p",
                    content: {
                      [LANGUAGES.RU]: "Это второй пункт.",
                      [LANGUAGES.RO]: "Acesta este al doilea element.",
                      [LANGUAGES.EN]: "This is the second item.",
                    },
                  },
                  2: {
                    name: "subtitle",
                    tag: "h2",
                    content: {
                      [LANGUAGES.RU]: "Заголовок",
                      [LANGUAGES.RO]: "Subtitlu",
                      [LANGUAGES.EN]: "Subtitle",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

// console.log(JSON.stringify(obj))

function renderToHTML(obj, lang) {
  if (!obj) {
    console.log("END\n")
    return
  }

  let res = ""
  for (let key in obj) {
    let node = obj[key]

    res += `<${node?.tag} class="${node?.name}"> ${node?.content?.[lang] ?? ""} 
            ${renderToHTML(node.children, lang) ?? ""}
            </${node?.tag}>`
  }

  return res
}

let html = renderToHTML(obj, LANGUAGES.RU)
console.log(html)

app.listen(PORT, () => {
  console.log(new Date().toLocaleTimeString())
  console.log(`Listening on port: ${PORT}`)
})
