const LANGUAGES = {
  RU: "ru",
  EN: "en",
  RO: "ro",
}

const pages = {}

pages.home = {
  1: {
    name: "intro",
    tag: "section",
    children: {
      1: {
        name: "image",
        tag: "img",
        src: "./data/home/main/home.png",
      },
      2: {
        tag: "h1",
        name: "main-title",
        content: {
          ru: "ViaSafe: Ваша Мобильность. Умно. Безопасно. Без Забот.",
          en: "ViaSafe: Your Mobility. Smart. Safe. Worry-Free.",
          ro: "ViaSafe: Mobilitatea Ta. Inteligent. Sigur. Fără Griji.",
        },
      },
      3: {
        tag: "p",
        content: {
          ru: "ViaSafe — это не просто технология, это Глобальная Транспортная Нервная Система, которая переосмысливает каждый аспект вашего передвижения.",
          en: "ViaSafe isn't just technology — it's a Global Transportation Nervous System that redefines every aspect of your movement.",
          ro: "ViaSafe nu este doar o tehnologie — este un Sistem Nervos Global de Transport care regândește fiecare aspect al mobilității tale.",
        },
      },
      4: {
        tag: "p",
        content: {
          ru: "Представьте мир, где дороги, автомобили и вы сами связаны в единую, интеллектуальную сеть, работающую на ваше благо.",
          en: "Imagine a world where roads, cars, and you are all connected in a single, intelligent network working for your benefit.",
          ro: "Imaginează-ți o lume unde drumurile, mașinile și tu sunteți conectați într-o rețea inteligentă, care lucrează în favoarea ta.",
        },
      },
      5: {
        tag: "p",
        content: {
          ru: "Мы создали ViaSafe, чтобы сделать вашу жизнь проще и безопаснее, предлагая беспрецедентный уровень комфорта и эффективности.",
          en: "We created ViaSafe to simplify and protect your life, offering an unprecedented level of comfort and efficiency.",
          ro: "Am creat ViaSafe pentru a-ți face viața mai simplă și mai sigură, oferind un nivel fără precedent de confort și eficiență.",
        },
      },
    },
  },
  2: {
    name: "philosophy",
    tag: "section",
    children: {
      1: {
        tag: "p",
        content: {
          ru: "ViaSafe — это не просто перемещение. Это новая философия жизни на ходу.",
          en: "ViaSafe is more than movement. It’s a new way of life on the go.",
          ro: "ViaSafe nu înseamnă doar deplasare. Este o nouă filosofie a vieții în mișcare.",
        },
      },
    },
  },
  3: {
    name: "cta",
    tag: "section",
    children: {
      1: {
        tag: "h2",
        name: "cta-heading",

        content: {
          ru: "Готовы ощутить будущее мобильности?",
          en: "Ready to experience the future of mobility?",
          ro: "Ești gata să experimentezi viitorul mobilității?",
        },
      },
      2: {
        tag: "p",
        children: {
          1: {
            tag: "a",
            content: {
              ru: "Узнать больше о ViaSafe",
              en: "Learn more about ViaSafe",
              ro: "Află mai multe despre ViaSafe",
            },
          },
          2: {
            tag: "span",
            content: {
              ru: " | ",
              en: " | ",
              ro: " | ",
            },
          },
          3: {
            tag: "a",
            content: {
              ru: "Подключиться сейчас",
              en: "Connect now",
              ro: "Conectează-te acum",
            },
          },
        },
      },
    },
  },
}

function renderToHTML(obj, lang) {
  if (!obj) return

  let res = ""
  for (let key in obj) {
    let node = obj[key]

    let stringImg = ""
    if (node.tag === "img" && node.src) {
      stringImg = `src=${node.src}`
    }

    res += `<${node?.tag}  ${stringImg ?? ""} class="${node?.name ?? ""}"> ${node?.content?.[lang] ?? ""} 
              ${renderToHTML(node.children, lang) ?? ""}
              </${node?.tag}>`
  }

  return res
}

/**
 * Generates HTML content for a given page and language.
 *
 * @param {string} page - The identifier of the page to render.
 * @param {string} lang - The language code to use for rendering.
 * @returns {string} The rendered HTML string for the specified page and language.
 */
function generateHTML(page, lang) {
  return renderToHTML(pages[page], lang)
}

export { pages, LANGUAGES, generateHTML }
