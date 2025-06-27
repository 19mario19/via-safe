// import { routes } from "../routes/routes.js"
// console.log(routes)

const LANGUAGES = {
  RU: "ru",
  EN: "en",
  RO: "ro",
}

// function getRouteName(obj) {
//   if (!obj) return

//   let res = []
//   for (let route of obj) {
//     res.push({ name: route.name, path: route.path })

//     if (route.children) {
//       res = res.concat(getRouteName(route.children))
//     }
//   }

//   return res
// }

// const names = getRouteName(routes)

// console.log(names)

const pages = {}
pages["Home Page"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: {
          id: "main-title",
        },
        content: {
          ru: "ViaSafe: Ваша Мобильность. Умно. Безопасно. Без Забот.",
          en: "ViaSafe: Your Mobility. Smart. Safe. Worry-Free.",
          ro: "ViaSafe: Mobilitatea Ta. Inteligent. Sigur. Fără Griji.",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe — это не просто технология, это Глобальная Транспортная Нервная Система, которая переосмысливает каждый аспект вашего передвижения. Представьте мир, где дороги, автомобили и вы сами связаны в единую, интеллектуальную сеть, работающую на ваше благо.",
          en: "ViaSafe isn't just technology — it's a Global Transportation Nervous System that redefines every aspect of your movement. Imagine a world where roads, cars, and you are all connected in a single, intelligent network working for your benefit.",
          ro: "ViaSafe nu este doar o tehnologie — este un Sistem Nervos Global de Transport care regândește fiecare aspect al mobilității tale. Imaginează-ți o lume unde drumurile, mașinile și tu sunteți conectați într-o rețea inteligentă, care lucrează în favoarea ta.",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Мы создали ViaSafe, чтобы сделать вашу жизнь проще и безопаснее, предлагая беспрецедентный уровень комфорта и эффективности.",
          en: "We created ViaSafe to simplify and protect your life, offering an unprecedented level of comfort and efficiency.",
          ro: "Am creat ViaSafe pentru a-ți face viața mai simplă și mai sigură, oferind un nivel fără precedent de confort și eficiență.",
        },
      },
    ],
  },
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "benefits-title",
      role: "region",
    },
    children: [
      {
        tag: "h2",
        attributes: {
          id: "benefits-title",
        },
        content: {
          ru: "Основные Преимущества ViaSafe:",
          en: "Key Benefits of ViaSafe:",
          ro: "Beneficiile Cheie ale ViaSafe:",
        },
      },
      {
        tag: "article",
        attributes: {
          class: "benefit",
          "aria-label": "Непревзойденная Безопасность",
        },
        children: [
          {
            tag: "h3",
            content: {
              ru: "Непревзойденная Безопасность",
              en: "Unmatched Safety",
              ro: "Siguranță Fără Egal",
            },
          },
          {
            tag: "p",
            content: {
              ru: "Забудьте о случайностях на дорогах. ViaSafe предвидит опасности, координирует движение и предупреждает вас о потенциальных рисках в реальном времени, предотвращая аварии до их возникновения. Ваша безопасность – наш главный приоритет.",
              en: "Forget road mishaps. ViaSafe anticipates dangers, coordinates traffic, and alerts you of potential risks in real time—preventing accidents before they happen. Your safety is our top priority.",
              ro: "Uită de accidentele rutiere. ViaSafe anticipează pericolele, coordonează traficul și te avertizează în timp real despre riscuri potențiale — prevenind accidentele înainte să se întâmple. Siguranța ta este prioritatea noastră.",
            },
          },
        ],
      },
      {
        tag: "article",
        attributes: {
          class: "benefit",
          "aria-label": "Свобода от Бюрократии",
        },
        children: [
          {
            tag: "h3",
            content: {
              ru: "Свобода от Бюрократии",
              en: "Freedom from Bureaucracy",
              ro: "Eliberare de Birocrație",
            },
          },
          {
            tag: "p",
            content: {
              ru: "Устали от квитанций, налогов и бесконечных бумаг? ViaSafe объединяет все автомобильные расходы в единый, прозрачный счет и автоматизирует оформление документов, освобождая ваше время и нервы.",
              en: "Tired of receipts, taxes, and endless paperwork? ViaSafe consolidates all your vehicle expenses into one transparent bill and automates documentation, saving your time and nerves.",
              ro: "Te-ai săturat de chitanțe, taxe și birocrație fără sfârșit? ViaSafe adună toate cheltuielile auto într-o singură factură transparentă și automatizează documentația, economisindu-ți timp și energie.",
            },
          },
        ],
      },
      {
        tag: "article",
        attributes: {
          class: "benefit",
          "aria-label": "Безграничные Путешествия",
        },
        children: [
          {
            tag: "h3",
            content: {
              ru: "Безграничные Путешествия",
              en: "Boundless Travel",
              ro: "Călătorii Fără Limite",
            },
          },
          {
            tag: "p",
            content: {
              ru: "Исследуйте мир без стресса. Благодаря глобальному роумингу, ваш ViaSafe-профиль всегда с вами, а система планирует идеальные маршруты и бронирует всё необходимое, куда бы вы ни отправились.",
              en: "Explore the world stress-free. With global roaming, your ViaSafe profile follows you, planning ideal routes and booking everything you need, wherever you go.",
              ro: "Explorează lumea fără stres. Cu roaming global, profilul tău ViaSafe te însoțește mereu, planificând trasee ideale și rezervând tot ce ai nevoie, oriunde ai merge.",
            },
          },
        ],
      },
      {
        tag: "article",
        attributes: {
          class: "benefit",
          "aria-label": "Инклюзивность для Каждого",
        },
        children: [
          {
            tag: "h3",
            content: {
              ru: "Инклюзивность для Каждого",
              en: "Inclusivity for Everyone",
              ro: "Incluziune pentru Toți",
            },
          },
          {
            tag: "p",
            content: {
              ru: "ViaSafe делает мобильность доступной для всех, включая людей с особыми потребностями и пожилых. Система предоставляет адаптированную навигацию, безбарьерные маршруты и мгновенную помощь, расширяя границы независимости.",
              en: "ViaSafe makes mobility accessible to all, including people with special needs and the elderly. It offers adapted navigation, barrier-free routes, and instant support, expanding the limits of independence.",
              ro: "ViaSafe face mobilitatea accesibilă pentru toți, inclusiv pentru persoanele cu nevoi speciale și vârstnici. Sistemul oferă navigație adaptată, rute fără bariere și asistență instantanee, extinzând granițele independenței.",
            },
          },
        ],
      },
      {
        tag: "article",
        attributes: {
          class: "benefit",
          "aria-label": "Умное Управление Транспортом",
        },
        children: [
          {
            tag: "h3",
            content: {
              ru: "Умное Управление Транспортом",
              en: "Smart Vehicle Management",
              ro: "Gestionare Inteligentă a Transportului",
            },
          },
          {
            tag: "p",
            content: {
              ru: "От персонализированного тюнинга в VR-гараже до предиктивного обслуживания вашего авто – ViaSafe делает взаимодействие с транспортом интуитивным, эффективным и контролируемым.",
              en: "From personalised tuning in a VR garage to predictive maintenance of your car – ViaSafe makes your interaction with transport intuitive, efficient, and under control.",
              ro: "De la tuning personalizat într-un garaj VR până la întreținerea predictivă a mașinii tale – ViaSafe face interacțiunea cu transportul intuitivă, eficientă și controlabilă.",
            },
          },
        ],
      },
    ],
  },
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "philosophy-title",
      role: "region",
    },
    children: [
      {
        tag: "p",
        attributes: {
          id: "philosophy-title",
        },
        content: {
          ru: "ViaSafe — это не просто перемещение. Это новая философия жизни на ходу.",
          en: "ViaSafe is more than movement. It’s a new way of life on the go.",
          ro: "ViaSafe nu înseamnă doar deplasare. Este o nouă filosofie a vieții în mișcare.",
        },
      },
    ],
  },
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "cta-heading",
      role: "region",
    },
    children: [
      {
        tag: "h2",
        attributes: {
          id: "cta-heading",
        },
        content: {
          ru: "Готовы ощутить будущее мобильности?",
          en: "Ready to experience the future of mobility?",
          ro: "Ești gata să experimentezi viitorul mobilității?",
        },
      },
      {
        tag: "p",
        children: [
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            content: {
              ru: "Узнать больше о ViaSafe",
              en: "Learn more about ViaSafe",
              ro: "Află mai multe despre ViaSafe",
            },
          },
          {
            tag: "span",
            content: {
              ru: " | ",
              en: " | ",
              ro: " | ",
            },
          },
          {
            tag: "a",
            attributes: {
              href: "#",
            },
            content: {
              ru: "Подключиться сейчас",
              en: "Connect now",
              ro: "Conectează-te acum",
            },
          },
        ],
      },
    ],
  },
]
pages["What is ViaSafe?"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "what-is-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: {
          id: "what-is-title",
        },
        content: {
          ru: "Что такое ViaSafe?",
          en: "What is ViaSafe?",
          ro: "Ce este ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: 'ViaSafe — это не просто отдельное приложение, устройство или компания. Это передовая Глобальная Транспортная Нервная Система – масштабная "операционная система" для всей мобильности, охватывающая всю нашу планету. Представьте её как "Мозг мобильности", который связывает воедино все элементы транспортной инфраструктуры и участников движения.',
          en: "ViaSafe is not just a standalone app, device, or company. It is an advanced Global Transportation Nervous System — a massive 'operating system' for all mobility, spanning the entire planet. Think of it as the 'Mobility Brain' that connects all parts of transport infrastructure and traffic participants.",
          ro: "ViaSafe nu este doar o aplicație, un dispozitiv sau o companie separată. Este un Sistem Nervos Global de Transport avansat – un fel de 'sistem de operare' pentru întreaga mobilitate, care acoperă întreaga planetă. Imaginează-ți-l ca pe un 'Creier al Mobilității' care leagă toate elementele infrastructurii de transport și participanții la trafic.",
        },
      },
      {
        tag: "h2",
        content: {
          ru: "Принципы работы ViaSafe основаны на постоянном цикле:",
          en: "ViaSafe operates based on a continuous cycle:",
          ro: "Principiile de funcționare ale ViaSafe se bazează pe un ciclu continuu:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: 'Сбор данных: Система непрерывно получает информацию от миллионов "нервных окончаний" – это подключенные автомобили (даже старые, дооснащенные специальными датчиками), "умные" светофоры, дорожные знаки, камеры и даже "люди-сенсоры". Эти данные включают всё: от дорожных условий и трафика до поведения других участников движения.',
              en: "Data Collection: The system constantly gathers information from millions of 'nerve endings'—connected cars (even retrofitted old ones), smart traffic lights, road signs, cameras, and even 'human sensors'. These data include everything from road conditions and traffic to the behaviour of other road users.",
              ro: "Colectarea Datelor: Sistemul primește continuu informații de la milioane de 'terminații nervoase' – vehicule conectate (inclusiv cele vechi echipate cu senzori), semafoare inteligente, semne rutiere, camere și chiar 'sensori umani'. Aceste date includ totul: de la condițiile drumului și trafic până la comportamentul altor participanți.",
            },
          },
          {
            tag: "li",
            content: {
              ru: 'Анализ: Весь этот колоссальный объем данных поступает в "мозг" ViaSafe, где мощный ИИ анализирует его с невероятной скоростью. Система не просто фиксирует текущее положение дел, но и прогнозирует будущие события, например, предсказывая пробки или потенциальные опасности.',
              en: "Analysis: This massive data stream is processed by the 'brain' of ViaSafe, where powerful AI analyses it with incredible speed. The system doesn’t just reflect current conditions—it predicts future ones, like upcoming traffic jams or potential hazards.",
              ro: "Analiză: Tot acest volum uriaș de date este procesat de 'creierul' ViaSafe, unde inteligența artificială îl analizează cu o viteză uimitoare. Sistemul nu doar înregistrează starea actuală, ci și prezice evenimente viitoare, cum ar fi ambuteiajele sau pericolele potențiale.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Координация: Основываясь на анализе и прогнозах, ViaSafe принимает решения и координирует действия. Она может регулировать работу светофоров для оптимизации потоков, перенаправлять транспорт, а также давать автомобилям самые безопасные и быстрые маршруты в реальном времени.",
              en: "Coordination: Based on its analysis and forecasts, ViaSafe makes decisions and coordinates actions. It can adjust traffic lights for better flow, redirect vehicles, and deliver the safest, fastest routes in real time.",
              ro: "Coordonare: Pe baza analizei și a previziunilor, ViaSafe ia decizii și coordonează acțiuni. Poate regla semafoarele pentru optimizarea fluxurilor, redirecționa traficul și oferi cele mai sigure și rapide rute în timp real.",
            },
          },
        ],
      },
      {
        tag: "p",
        content: {
          ru: "Наше видение будущего мобильности с ViaSafe – это мир, где передвижение становится бесстрессовым, максимально безопасным и эффективным для каждого. Мы стремимся создать живую, постоянно обучающуюся систему, которая будет интуитивно понимать потребности пользователей, активно предотвращать проблемы и адаптироваться к изменяющимся условиям. Это не просто шаг вперед, это новая философия жизни на ходу.",
          en: "Our vision for the future of mobility with ViaSafe is a world where travel is stress-free, ultra-safe, and efficient for everyone. We aim to build a living, learning system that intuitively understands users' needs, actively prevents problems, and adapts to changing conditions. It's not just a step forward—it’s a new philosophy of movement.",
          ro: "Viziunea noastră asupra viitorului mobilității cu ViaSafe este o lume în care deplasarea este lipsită de stres, extrem de sigură și eficientă pentru toți. Ne propunem să creăm un sistem viu, care învață constant, care înțelege intuitiv nevoile utilizatorilor, previne activ problemele și se adaptează la condițiile în schimbare. Nu este doar un pas înainte – este o nouă filosofie a mobilității.",
        },
      },
    ],
  },
]
pages["Our Mission and Values"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "mission-values-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: {
          id: "mission-values-title",
        },
        content: {
          ru: "Наша Миссия и Ценности",
          en: "Our Mission and Values",
          ro: "Misiunea și Valorile Noastre",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Миссия ViaSafe — создать будущее мобильности, где каждый аспект передвижения является бесшовным, безопасным и доступным. Мы стремимся преобразовывать мир, строя глобальную транспортную экосистему, которая приносит пользу людям и планете.",
          en: "ViaSafe’s mission is to create the future of mobility—seamless, safe, and accessible in every aspect. We aim to transform the world by building a global transportation ecosystem that benefits both people and the planet.",
          ro: "Misiunea ViaSafe este de a crea viitorul mobilității, unde fiecare aspect al deplasării este fluid, sigur și accesibil. Ne propunem să transformăm lumea construind un ecosistem global de transport care aduce beneficii oamenilor și planetei.",
        },
      },
      {
        tag: "h2",
        content: {
          ru: "В основе всего, что мы делаем, лежат наши главные ценности:",
          en: "At the heart of everything we do are our core values:",
          ro: "La baza a tot ceea ce facem stau valorile noastre fundamentale:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Безопасность: Это наш наивысший приоритет. Мы стремимся к нулевой смертности и травматизму на дорогах, используя передовые технологии для предотвращения аварий и обеспечения мгновенной помощи.",
              en: "Safety: Our highest priority. We strive for zero fatalities and injuries on the road, using advanced technologies to prevent accidents and provide instant assistance.",
              ro: "Siguranță: Este prioritatea noastră supremă. Ne dorim zero decese și răni pe drumuri, folosind tehnologii avansate pentru a preveni accidentele și a oferi ajutor imediat.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Эффективность: Мы оптимизируем каждый километр пути, сокращая пробки, экономя время и ресурсы. ViaSafe обеспечивает наиболее быстрые и экономичные маршруты, минимизируя простои и затраты.",
              en: "Efficiency: We optimise every kilometre of travel, reducing congestion, saving time and resources. ViaSafe ensures the fastest and most economical routes, minimising downtime and costs.",
              ro: "Eficiență: Optimizăm fiecare kilometru parcurs, reducând blocajele, economisind timp și resurse. ViaSafe oferă cele mai rapide și economice rute, minimizând timpul pierdut și costurile.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Инклюзивность: Мы убеждены, что мобильность должна быть доступна каждому, независимо от физических возможностей или возраста. ViaSafe разрушает барьеры, предлагая персонализированные решения для людей с особыми потребностями и пожилых.",
              en: "Inclusivity: We believe mobility should be available to everyone, regardless of physical ability or age. ViaSafe breaks barriers by offering personalised solutions for people with special needs and the elderly.",
              ro: "Incluziune: Credem că mobilitatea ar trebui să fie accesibilă tuturor, indiferent de abilitățile fizice sau vârstă. ViaSafe elimină barierele, oferind soluții personalizate pentru persoanele cu nevoi speciale și vârstnici.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Устойчивость: Мы заботимся о будущем планеты. Оптимизируя транспортные потоки и способствуя использованию более чистых видов транспорта, ViaSafe активно работает над снижением выбросов и уменьшением негативного воздействия на окружающую среду.",
              en: "Sustainability: We care about the planet’s future. By optimising transport flow and promoting cleaner modes of travel, ViaSafe actively works to reduce emissions and lessen environmental impact.",
              ro: "Sustenabilitate: Ne pasă de viitorul planetei. Optimizând fluxurile de transport și promovând mijloace mai curate de deplasare, ViaSafe acționează activ pentru a reduce emisiile și a diminua impactul asupra mediului.",
            },
          },
        ],
      },
    ],
  },
]
pages["ViaSafe Technologies"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "technologies-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "technologies-title" },
        content: {
          ru: "Технологии ViaSafe",
          en: "ViaSafe Technologies",
          ro: "Tehnologiile ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe функционирует на основе передовых технологий, которые образуют мощную и взаимосвязанную систему для обеспечения безопасности и эффективности мобильности:",
          en: "ViaSafe operates based on advanced technologies that form a powerful and interconnected system to ensure safety and efficiency in mobility:",
          ro: "ViaSafe funcționează pe baza tehnologiilor avansate, care formează un sistem puternic și interconectat pentru a asigura siguranța și eficiența mobilității:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "strong",
                content: {
                  ru: "Искусственный Интеллект (ИИ) и Машинное Обучение:",
                  en: "Artificial Intelligence (AI) and Machine Learning:",
                  ro: "Inteligență Artificială (IA) și Învățare Automată:",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ' ИИ является "мозгом" ViaSafe. Он непрерывно анализирует колоссальные объемы данных, поступающих от всех элементов системы, прогнозирует события на дорогах и принимает оптимальные решения. Алгоритмы машинного обучения позволяют системе постоянно учиться и адаптироваться к изменяющимся условиям, становясь умнее с каждым пройденным километром и каждым проанализированным событием.',
                  en: ' AI is the "brain" of ViaSafe. It continuously analyses vast amounts of data from all system components, predicts road events, and makes optimal decisions. Machine learning algorithms allow the system to constantly learn and adapt to changing conditions, becoming smarter with every kilometre travelled and every event analysed.',
                  ro: " IA este „creierul” ViaSafe. Analizează continuu volume uriașe de date de la toate componentele sistemului, prezice evenimentele rutiere și ia decizii optime. Algoritmii de învățare automată permit sistemului să învețe constant și să se adapteze la condiții în schimbare, devenind mai inteligent cu fiecare kilometru parcurs și fiecare eveniment analizat.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "strong",
                content: {
                  ru: "Большие Данные и Аналитика:",
                  en: "Big Data and Analytics:",
                  ro: "Big Data și Analitică:",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ' ViaSafe собирает огромные массивы данных от тысяч "нервных окончаний" – подключенных автомобилей, светофоров, дорожных знаков, камер и даже "людей-сенсоров". Эти большие данные позволяют получать полную и актуальную картину дорожной ситуации в реальном времени, а мощные аналитические инструменты выявляют скрытые закономерности и тенденции, необходимые для точного прогнозирования и эффективного управления.',
                  en: ' ViaSafe collects vast datasets from thousands of "nerve endings"—connected cars, traffic lights, road signs, cameras, and even "people-sensors." This big data provides a complete, real-time picture of road conditions, while powerful analytics tools uncover hidden patterns and trends needed for accurate forecasting and effective management.',
                  ro: " ViaSafe colectează volume uriașe de date de la mii de „terminații nervoase” — mașini conectate, semafoare, indicatoare rutiere, camere și chiar „oameni-senzori”. Aceste date mari oferă o imagine completă, în timp real, a condițiilor de trafic, iar instrumentele puternice de analiză identifică modele și tendințe ascunse necesare pentru previziuni precise și gestionare eficientă.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "strong",
                content: {
                  ru: "Блокчейн (для безопасности и целостности данных):",
                  en: "Blockchain (for data security and integrity):",
                  ro: "Blockchain (pentru securitatea și integritatea datelor):",
                },
              },
              {
                tag: "span",
                content: {
                  ru: " Для обеспечения максимальной надежности, прозрачности и неизменности критически важных данных ViaSafe может использовать технологию блокчейн. Это касается, например, истории обслуживания автомобиля, регистрации собственности, данных о ДТП или финансовых транзакций. Блокчейн повышает доверие к системе, исключает возможность фальсификации данных и упрощает юридически значимые операции.",
                  en: " To ensure maximum reliability, transparency, and immutability of critical data, ViaSafe can use blockchain technology. This applies to vehicle service histories, ownership registrations, accident data, or financial transactions. Blockchain enhances trust in the system, prevents data tampering, and simplifies legally significant operations.",
                  ro: " Pentru a asigura fiabilitatea maximă, transparența și imuabilitatea datelor critice, ViaSafe poate utiliza tehnologia blockchain. Aceasta se aplică, de exemplu, istoricului de întreținere a vehiculului, înregistrărilor de proprietate, datelor despre accidente sau tranzacții financiare. Blockchain crește încrederea în sistem, previne falsificarea datelor și simplifică operațiunile cu semnificație legală.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "strong",
                content: {
                  ru: "IoT (Интернет вещей) и Сенсорные Сети:",
                  en: "IoT (Internet of Things) and Sensor Networks:",
                  ro: "IoT (Internetul Lucrurilor) și Rețele de Senzori:",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ' ViaSafe широко использует технологии Интернета вещей, где различные устройства (датчики в автомобилях, "умные" светофоры, дорожные камеры) постоянно обмениваются данными между собой и с центральной системой. Эти обширные сенсорные сети формируют фундамент для сбора информации в реальном времени, позволяя ViaSafe "видеть" и "чувствовать" дорожную обстановку с беспрецедентной детализацией.',
                  en: ' ViaSafe widely employs Internet of Things technology, where various devices (car sensors, smart traffic lights, road cameras) constantly exchange data with each other and with the central system. These extensive sensor networks form the basis for real-time data collection, allowing ViaSafe to "see" and "feel" road conditions with unprecedented detail.',
                  ro: " ViaSafe folosește pe scară largă tehnologia Internetului Lucrurilor, unde diverse dispozitive (senzori auto, semafoare inteligente, camere rutiere) schimbă date continuu între ele și cu sistemul central. Aceste rețele extinse de senzori formează baza colectării de date în timp real, permițând ViaSafe să „vadă” și să „simtă” condițiile de trafic cu o detaliere fără precedent.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

pages["Road Safety"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "road-safety-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "road-safety-title" },
        content: {
          ru: "Безопасность на Дорогах",
          en: "Road Safety",
          ro: "Siguranța Rutieră",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Безопасность является наивысшим приоритетом ViaSafe, обеспечиваемым на каждом этапе вашего пути:",
          en: "Safety is ViaSafe's highest priority, ensured at every stage of your journey:",
          ro: "Siguranța este cea mai mare prioritate a ViaSafe, asigurată la fiecare etapă a călătoriei tale:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Предиктивная безопасность (предотвращение аварий): ViaSafe постоянно анализирует дорожную ситуацию в реальном времени, используя данные от миллионов сенсоров. Система предвидит потенциальные опасности (например, ямы, гололед, аварии, или опасное поведение других водителей) и предупреждает вас о них до того, как они станут критическими, предотвращая аварии ещё до их возникновения.",
              en: "Predictive safety (accident prevention): ViaSafe continuously analyzes road conditions in real time using data from millions of sensors. The system anticipates potential hazards (such as potholes, ice, accidents, or dangerous driver behaviour) and warns you before they become critical, preventing accidents before they happen.",
              ro: "Siguranța predictivă (prevenirea accidentelor): ViaSafe analizează continuu condițiile de drum în timp real folosind date de la milioane de senzori. Sistemul anticipează potențiale pericole (cum ar fi gropi, polei, accidente sau comportamentul periculos al altor șoferi) și te avertizează înainte să devină critice, prevenind accidentele înainte să se întâmple.",
            },
          },
          {
            tag: "li",
            content: {
              ru: '"Умные" светофоры и дорожная инфраструктура: ViaSafe координирует работу "умных" светофоров, которые "общаются" с вашим автомобилем, оптимизируя потоки движения и подготавливая вас к проезду. Вся дорожная инфраструктура (знаки, разметка, камеры) интегрирована в систему, обеспечивая постоянный мониторинг и адаптацию к меняющимся условиям для повышения безопасности.',
              en: '"Smart" traffic lights and road infrastructure: ViaSafe coordinates the operation of "smart" traffic lights that communicate with your vehicle, optimising traffic flows and preparing you for passage. The entire road infrastructure (signs, markings, cameras) is integrated into the system, ensuring continuous monitoring and adaptation to changing conditions for enhanced safety.',
              ro: '"Semafore inteligente" și infrastructură rutieră: ViaSafe coordonează funcționarea semafoarelor „inteligente” care comunică cu vehiculul tău, optimizând fluxurile de trafic și pregătindu-te pentru trecere. Întreaga infrastructură rutieră (indicatoare, marcaje, camere) este integrată în sistem, asigurând monitorizare continuă și adaptare la condiții schimbătoare pentru o siguranță sporită.',
            },
          },
          {
            tag: "li",
            content: {
              ru: "Экстренная помощь и автоматическое оповещение: В случае дорожно-транспортного происшествия или любой другой чрезвычайной ситуации ViaSafe не просто вызывает помощь. Система мгновенно анализирует характер происшествия, определяет точные координаты, количество и тип пострадавших (на основе данных об автомобиле и его пассажирах), а затем передает всю эту критически важную информацию соответствующим экстренным службам (скорой, пожарным, полиции), предлагая им наиболее оптимальный маршрут для оперативного прибытия. Это значительно сокращает время реагирования и повышает эффективность спасательных операций.",
              en: "Emergency assistance and automatic notification: In case of a road accident or any other emergency, ViaSafe doesn't just call for help. The system instantly analyses the nature of the incident, determines exact coordinates, the number and type of casualties (based on vehicle and passenger data), then sends all this critical information to relevant emergency services (ambulance, fire brigade, police), offering the most optimal route for rapid response. This significantly reduces response time and improves rescue operation efficiency.",
              ro: "Asistență de urgență și notificare automată: În caz de accident rutier sau orice altă situație de urgență, ViaSafe nu doar solicită ajutor. Sistemul analizează instantaneu natura incidentului, determină coordonatele exacte, numărul și tipul victimelor (bazat pe datele vehiculului și ale pasagerilor), apoi transmite toate aceste informații critice serviciilor de urgență relevante (ambulanță, pompieri, poliție), oferindu-le ruta optimă pentru răspuns rapid. Aceasta reduce semnificativ timpul de reacție și crește eficiența operațiunilor de salvare.",
            },
          },
        ],
      },
    ],
  },
]
pages["Convenience and Savings"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "convenience-savings-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "convenience-savings-title" },
        content: {
          ru: "Удобство и Экономия",
          en: "Convenience and Savings",
          ro: "Confort și Economii",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe революционизирует ваш подход к владению и использованию автомобиля, превращая заботы в комфорт, а расходы — в эффективное управление:",
          en: "ViaSafe revolutionises your approach to car ownership and usage, turning worries into comfort and expenses into efficient management:",
          ro: "ViaSafe revoluționează modul în care deții și folosești mașina, transformând grijile în confort și cheltuielile în gestionare eficientă:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Единый счет и автоматическая оплата (парковки, штрафы, топливо, страховка): Забудьте о множестве квитанций и постоянной проверке сроков. ViaSafe объединяет все ваши автомобильные расходы – от парковки и штрафов до топлива, страховых взносов и технического обслуживания – в один прозрачный ежемесячный счет. Система автоматически производит все необходимые платежи, например, оплачивает парковку или штрафы (с возможностью скидки за своевременную оплату).",
              en: "Unified bill and automatic payments (parking, fines, fuel, insurance): Forget multiple receipts and constant deadline checks. ViaSafe consolidates all your vehicle expenses—from parking and fines to fuel, insurance premiums, and maintenance—into one transparent monthly bill. The system automatically handles all necessary payments, such as parking fees or fines (with possible discounts for timely payment).",
              ro: "Factura unificată și plăți automate (parcare, amenzi, combustibil, asigurare): Uită de mulțimea de chitanțe și verificări constante ale termenelor. ViaSafe adună toate cheltuielile tale auto — de la parcare și amenzi până la combustibil, prime de asigurare și întreținere — într-o singură factură lunară transparentă. Sistemul gestionează automat toate plățile necesare, cum ar fi taxa de parcare sau amenzile (cu posibile reduceri pentru plata la timp).",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Автоматическое заполнение документов и без бюрократии: Больше никаких долгих часов на заполнение форм и стояние в очередях. ViaSafe автоматически генерирует и заполняет все необходимые документы, такие как договоры купли-продажи автомобиля или страховые полисы, используя уже имеющиеся в системе данные. Это минимизирует бумажную волокиту, снижает стресс и освобождает ваше время.",
              en: "Automatic document filling and no bureaucracy: No more long hours filling out forms and standing in queues. ViaSafe automatically generates and fills all necessary documents, such as car sale contracts or insurance policies, using data already in the system. This minimises paperwork, reduces stress, and frees up your time.",
              ro: "Completarea automată a documentelor și fără birocrație: Nu mai pierzi ore întregi completând formulare și stând la cozi. ViaSafe generează și completează automat toate documentele necesare, cum ar fi contractele de vânzare a mașinii sau polițele de asigurare, folosind datele deja existente în sistem. Acest lucru minimizează birocrația, reduce stresul și îți eliberează timpul.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Оптимизация маршрутов и экономия времени: ViaSafe не просто строит маршрут, она постоянно анализирует дорожную ситуацию в реальном времени, учитывая пробки, погодные условия и даже потенциальные опасности. Система динамически оптимизирует ваш путь, предлагая наиболее быстрые и экономичные маршруты. Это позволяет значительно сократить время в пути, избежать ненужных задержек и сэкономить топливо.",
              en: "Route optimisation and time savings: ViaSafe doesn’t just plan a route; it constantly analyses road conditions in real time, considering traffic jams, weather conditions, and even potential hazards. The system dynamically optimises your path, offering the fastest and most economical routes. This significantly reduces travel time, avoids unnecessary delays, and saves fuel.",
              ro: "Optimizarea traseelor și economisirea timpului: ViaSafe nu doar planifică un traseu; analizează constant condițiile de drum în timp real, luând în considerare ambuteiajele, condițiile meteo și chiar pericolele potențiale. Sistemul optimizează dinamic traseul, oferind cele mai rapide și economice rute. Acest lucru reduce semnificativ timpul de călătorie, evită întârzierile inutile și economisește combustibil.",
            },
          },
        ],
      },
    ],
  },
]
pages["Family and Travel"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "family-travel-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "family-travel-title" },
        content: {
          ru: "Семья и Путешествия",
          en: "Family and Travel",
          ro: "Familie și Călătorii",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe становится незаменимым помощником для вашей семьи и открывает новые горизонты для комфортных и безопасных путешествий:",
          en: "ViaSafe becomes an indispensable assistant for your family, opening new horizons for comfortable and safe travel:",
          ro: "ViaSafe devine un asistent indispensabil pentru familia ta, deschizând noi orizonturi pentru călătorii confortabile și sigure:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Семейные тарифы и управление доступом к авто: ViaSafe предлагает удобные семейные тарифные планы, позволяя всем членам семьи пользоваться одной подключенной машиной без необходимости индивидуальных подписок. Система автоматически распознаёт водителя и адаптирует настройки автомобиля под его предпочтения. Вы можете легко предоставлять временный доступ к вашему автомобилю гостям или родственникам через ViaSafe.",
              en: "Family plans and car access management: ViaSafe offers convenient family tariff plans, allowing all family members to use one connected car without individual subscriptions. The system automatically recognises the driver and adapts the car settings to their preferences. You can easily grant temporary access to your car to guests or relatives through ViaSafe.",
              ro: "Planuri familiale și gestionarea accesului la mașină: ViaSafe oferă planuri tarifare familiale convenabile, permițând tuturor membrilor familiei să folosească o singură mașină conectată fără abonamente individuale. Sistemul recunoaște automat șoferul și adaptează setările mașinii preferințelor acestuia. Poți acorda cu ușurință acces temporar mașinii tale oaspeților sau rudelor prin ViaSafe.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Безопасность детей и автономный транспорт для них: Для родителей ViaSafe обеспечивает беспрецедентный уровень спокойствия. Система позволяет безопасно доставлять детей в детский сад, школу или на дополнительные занятия с использованием автономного транспорта ViaSafe, следуя заранее утверждённому расписанию и маршруту. Вы всегда будете знать точное местонахождение ребёнка и автомобиля, получая уведомления о прибытии.",
              en: "Child safety and autonomous transport for them: For parents, ViaSafe provides an unprecedented level of peace of mind. The system allows safe transportation of children to kindergarten, school, or extracurricular activities using ViaSafe’s autonomous transport, following a pre-approved schedule and route. You will always know the exact location of the child and vehicle, receiving arrival notifications.",
              ro: "Siguranța copiilor și transport autonom pentru ei: Pentru părinți, ViaSafe oferă un nivel fără precedent de liniște sufletească. Sistemul permite transportul sigur al copiilor la grădiniță, școală sau activități extrașcolare folosind transportul autonom ViaSafe, urmând un program și traseu preaprobatate. Vei ști întotdeauna locația exactă a copilului și a vehiculului, primind notificări la sosire.",
            },
          },
          {
            tag: "li",
            content: {
              ru: 'Персональное планирование путешествий (кругосветные поездки): ViaSafe действует как ваш личный турагент. Вы просто указываете свои предпочтения (например, "кругосветное путешествие, месяц, хочу видеть горы и океаны, бюджет X"), и система автоматически планирует оптимальный маршрут. ViaSafe бронирует авиабилеты, поезда, корабли, арендует автомобили там, где это необходимо, и даже выбирает отели в соответствии с вашими предпочтениями и бюджетом.',
              en: "Personal travel planning (round-the-world trips): ViaSafe acts as your personal travel agent. You simply specify your preferences (e.g., 'round-the-world trip, one month, want to see mountains and oceans, budget X'), and the system automatically plans the optimal route. ViaSafe books flights, trains, ships, rents cars where necessary, and even selects hotels according to your preferences and budget.",
              ro: "Planificarea personală a călătoriilor (călătorii în jurul lumii): ViaSafe acționează ca agentul tău de turism personal. Trebuie doar să specifici preferințele tale (ex: „călătorie în jurul lumii, o lună, vreau să văd munți și oceane, buget X”), iar sistemul planifică automat ruta optimă. ViaSafe rezervă bilete de avion, tren, nave, închiriază mașini unde este necesar și chiar selectează hoteluri în funcție de preferințe și buget.",
            },
          },
          {
            tag: "li",
            content: {
              ru: '"Мои Места" – рекомендации в новых городах: Система не только планирует маршруты, но и заботится о вашем комфорте в незнакомых местах. ViaSafe изучает ваши предпочтения в заведениях (кафе, спортзалы, магазины) в вашем родном городе и предлагает аналогичные или похожие места в любой точке мира, куда вы приедете. Больше не нужно тратить время на поиск "своей" кофейни или магазина на незнакомых улицах.',
              en: '"My Places" – recommendations in new cities: The system not only plans routes but also cares about your comfort in unfamiliar places. ViaSafe studies your preferences for venues (cafes, gyms, shops) in your hometown and suggests similar or like-minded places anywhere in the world you visit. No more wasting time looking for "your" café or shop on unfamiliar streets.',
              ro: '"Locurile Mele" – recomandări în orașe noi: Sistemul nu doar planifică rute, ci și se îngrijește de confortul tău în locuri necunoscute. ViaSafe analizează preferințele tale pentru localuri (cafenele, săli de sport, magazine) din orașul natal și îți sugerează locuri similare sau asemănătoare oriunde ai merge în lume. Nu mai pierzi timp căutând „cafeneaua ta” sau magazinul pe străzi necunoscute.',
            },
          },
        ],
      },
    ],
  },
]
pages["Inclusivity and Accessibility"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "inclusivity-accessibility-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "inclusivity-accessibility-title" },
        content: {
          ru: "Инклюзивность и Доступность",
          en: "Inclusivity and Accessibility",
          ro: "Incluziune și Accesibilitate",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe стремится сделать мобильность по-настоящему доступной для каждого, разрушая барьеры и обеспечивая независимость всем участникам движения, независимо от их физических возможностей:",
          en: "ViaSafe strives to make mobility truly accessible to everyone, breaking down barriers and ensuring independence for all participants in movement, regardless of their physical abilities:",
          ro: "ViaSafe se străduiește să facă mobilitatea cu adevărat accesibilă pentru toți, eliminând barierele și asigurând independența tuturor participanților la mișcare, indiferent de abilitățile lor fizice:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: 'Помощь слабовидящим и незрячим (голосовая навигация): Для людей с нарушениями зрения ViaSafe становится их "глазами" на дороге. Система предоставляет подробные голосовые подсказки о каждом шаге: "впереди бордюр", "справа скамейка", "приближается электросамокат", "пешеходный переход, светофор горит зеленым". Она даже может предупредить о незакрепленной плитке или открытом люке, действуя как личный, невидимый проводник.',
              en: "Assistance for visually impaired and blind (voice navigation): For people with vision impairments, ViaSafe becomes their 'eyes' on the road. The system provides detailed voice prompts for every step: 'curb ahead,' 'bench on the right,' 'electric scooter approaching,' 'pedestrian crossing, traffic light is green.' It can even warn about loose tiles or open manholes, acting as a personal, invisible guide.",
              ro: "Asistență pentru persoanele cu deficiențe de vedere și nevăzătoare (navigație vocală): Pentru persoanele cu deficiențe de vedere, ViaSafe devine „ochii” lor pe drum. Sistemul oferă indicații vocale detaliate pentru fiecare pas: „bordură înainte”, „bancă în dreapta”, „trotinetă electrică care se apropie”, „trecere de pietoni, semaforul este verde”. Poate chiar avertiza despre dale slăbite sau gură de canal deschisă, acționând ca un ghid personal invizibil.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Безбарьерные маршруты для людей на колясках: ViaSafe прокладывает маршруты, учитывающие необходимость избегать ступенек, ищет пути с пандусами, лифтами и достаточной шириной проходов. Система также может указывать на доступные туалеты, магазины или кафе, и при необходимости вызвать такси, оборудованное для инвалидных колясок.",
              en: "Barrier-free routes for wheelchair users: ViaSafe plans routes that avoid stairs, seeks paths with ramps, elevators, and adequate passage widths. The system can also indicate accessible toilets, shops, or cafes, and, if needed, call taxis equipped for wheelchairs.",
              ro: "Rute fără bariere pentru utilizatorii de scaune cu rotile: ViaSafe planifică rute care evită scările, caută trasee cu rampe, lifturi și lățimi adecvate ale pasajelor. Sistemul poate indica și toalete accesibile, magazine sau cafenele și, dacă este necesar, poate chema taxiuri echipate pentru scaune cu rotile.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Поддержка пожилых людей (мониторинг, экстренная помощь): Для пожилых пользователей ViaSafe выступает надежным спутником, который напоминает о нужной остановке или помогает найти дорогу домой. В случае непредвиденных ситуаций, таких как падение (которое может быть зафиксировано интегрированными смарт-часами), ViaSafe автоматически вызывает помощь и сообщает точные координаты родным.",
              en: "Support for elderly people (monitoring, emergency assistance): For elderly users, ViaSafe acts as a reliable companion, reminding them of the needed stop or helping find their way home. In unforeseen situations, such as a fall (which can be detected by integrated smartwatches), ViaSafe automatically calls for help and notifies relatives with exact coordinates.",
              ro: "Sprijin pentru persoanele în vârstă (monitorizare, asistență de urgență): Pentru utilizatorii vârstnici, ViaSafe acționează ca un însoțitor de încredere, amintindu-le de oprirea necesară sau ajutându-i să găsească drumul spre casă. În situații neprevăzute, cum ar fi o cădere (care poate fi detectată de ceasuri inteligente integrate), ViaSafe apelează automat ajutorul și notifică rudele cu coordonatele exacte.",
            },
          },
          {
            tag: "li",
            content: {
              ru: 'Интеграция с существующими системами доступности: ViaSafe не создает изолированных решений, а встраивает инклюзивность в свою основу, становясь стандартом доступности. Если в одном городе ViaSafe интегрируется с системой для "умных" тростей или другими специализированными устройствами, эта функция мгновенно становится доступной для всех пользователей ViaSafe по всему миру. Это означает, что инновации в доступности распространяются глобально, разрушая географические барьеры.',
              en: "Integration with existing accessibility systems: ViaSafe does not create isolated solutions but embeds inclusivity at its core, becoming an accessibility standard. If ViaSafe integrates with a 'smart cane' system or other specialized devices in one city, this feature instantly becomes available to all ViaSafe users worldwide. This means accessibility innovations spread globally, breaking geographic barriers.",
              ro: "Integrarea cu sistemele existente de accesibilitate: ViaSafe nu creează soluții izolate, ci integrează incluziunea în nucleul său, devenind un standard de accesibilitate. Dacă ViaSafe se integrează cu un sistem de „bastoane inteligente” sau alte dispozitive specializate într-un oraș, această funcție devine instantaneu disponibilă pentru toți utilizatorii ViaSafe din întreaga lume. Aceasta înseamnă că inovațiile în accesibilitate se răspândesc global, distrugând barierele geografice.",
            },
          },
        ],
      },
    ],
  },
]
pages["Tuning and Customization"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "tuning-customisation-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "tuning-customisation-title" },
        content: {
          ru: "Тюнинг и Кастомизация",
          en: "Tuning and Customization",
          ro: "Tuning și Personalizare",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe открывает новую эру для автолюбителей, позволяя персонализировать свой автомобиль с уверенностью в безопасности и законности:",
          en: "ViaSafe opens a new era for car enthusiasts, allowing you to personalise your car with full confidence in its safety and legality:",
          ro: "ViaSafe deschide o nouă eră pentru pasionații de mașini, permițând personalizarea vehiculului cu încredere deplină în siguranță și legalitate:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "«VR Гараж» для виртуального моделирования модификаций: ViaSafe предоставляет уникальную функцию «Виртуальный Гараж». Здесь вы можете надеть VR-очки или использовать приложение, чтобы «примерить» любые модификации и тюнинг для своего автомобиля в точном 3D-моделировании. Вы сможете увидеть, как новый обвес, другие диски, установка турбонаддува или даже переоборудование в электромобиль повлияют на динамику, расход топлива, аэродинамику и управляемость вашего авто на дороге. Всё это без риска и затрат!",
              en: "\"VR Garage\" for virtual modification modelling: ViaSafe offers a unique feature called the Virtual Garage. You can put on VR glasses or use the app to 'try on' any modifications and tuning for your car in exact 3D simulation. You’ll see how new body kits, different rims, turbo installations, or even electric conversions affect dynamics, fuel consumption, aerodynamics, and handling. All this without risk or cost!",
              ro: "„Garaj VR” pentru modelarea virtuală a modificărilor: ViaSafe oferă o funcție unică numită Garajul Virtual. Poți folosi ochelari VR sau aplicația pentru a „proba” orice modificare și tuning pentru mașina ta într-o simulare 3D precisă. Vei vedea cum afectează noile spoilere, jantele, montarea unui turbo sau chiar conversia electrică dinamica, consumul, aerodinamica și manevrabilitatea. Toate acestea fără riscuri sau cheltuieli!",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Сертификация запчастей и услуг: ViaSafe сотрудничает с производителями и тюнинг-студиями, которые сертифицируют свои запчасти и услуги. Это гарантирует, что всё, что вы выбираете в «VR Гараже» или заказываете через систему, будет высокого качества, безопасно и не вызовет юридических проблем. Больше не нужно искать «проверенные» сервисы на свой страх и риск – ViaSafe уже проверила их.",
              en: "Certified parts and services: ViaSafe collaborates with manufacturers and tuning studios that certify their parts and services. This ensures everything you select in the VR Garage or order through the system is high-quality, safe, and legally compliant. No more risky guesswork – ViaSafe has done the vetting for you.",
              ro: "Certificarea pieselor și serviciilor: ViaSafe colaborează cu producători și ateliere de tuning care certifică piesele și serviciile lor. Astfel, tot ceea ce alegi din Garajul VR sau comanzi prin sistem este de calitate, sigur și legal. Nu mai trebuie să cauți „ateliere de încredere” – ViaSafe le-a verificat deja.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Безопасные и легальные улучшения авто: Благодаря системе ViaSafe, процесс от идеи до реализации становится бесшовным. После одобрения в VR-гараже, ViaSafe сама свяжется с ближайшим сертифицированным сервисным центром, который закажет детали и назначит удобное время для установки. Это позволяет сделать ваш автомобиль по-настоящему уникальным и идеальным, при этом будучи полностью уверенным в его безопасности и легальности на дороге.",
              en: "Safe and legal vehicle enhancements: With ViaSafe, the entire journey from idea to implementation is seamless. Once approved in the VR Garage, ViaSafe contacts the nearest certified service centre, orders the parts, and schedules installation. This lets you make your car truly unique and ideal, while being fully confident in its road safety and legality.",
              ro: "Îmbunătățiri auto sigure și legale: Cu ViaSafe, procesul de la idee la implementare este perfect. După aprobarea în Garajul VR, ViaSafe contactează cel mai apropiat service certificat, comandă piesele și programează instalarea. Astfel, îți poți face mașina unică și ideală, având garanția siguranței și legalității pe drum.",
            },
          },
        ],
      },
    ],
  },
]
pages["Logistics and Cargo"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "logistics-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "logistics-title" },
        content: {
          ru: "Логистика и Грузоперевозки (Для Бизнеса)",
          en: "Logistics and Cargo (For Business)",
          ro: "Logistică și Transport de Marfă (Pentru Afaceri)",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe предлагает революционные решения для сферы логистики и грузоперевозок, значительно повышая их эффективность, безопасность и экономичность:",
          en: "ViaSafe offers revolutionary solutions for the logistics and cargo industry, dramatically improving efficiency, safety, and cost-effectiveness:",
          ro: "ViaSafe oferă soluții revoluționare pentru domeniul logisticii și transportului de marfă, îmbunătățind semnificativ eficiența, siguranța și rentabilitatea:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Оптимизация маршрутов для грузовиков: Система ViaSafe динамически строит и корректирует маршруты для грузового транспорта в реальном времени. Она учитывает множество факторов: текущую дорожную ситуацию (пробки, ремонты), погодные условия, ограничения по весу и габаритам, а также износ самого транспортного средства. Это позволяет минимизировать время в пути, сократить расход топлива и снизить риски возникновения аварий.",
              en: "Truck route optimisation: ViaSafe dynamically builds and adjusts routes for cargo transport in real time. It considers many factors such as current road conditions (traffic, roadwork), weather, weight and size restrictions, and even the wear on the vehicle itself. This minimises travel time, reduces fuel consumption, and lowers accident risks.",
              ro: "Optimizarea rutelor pentru camioane: Sistemul ViaSafe construiește și ajustează dinamic rutele pentru transportul de marfă în timp real. Ia în considerare numeroși factori: condițiile actuale de drum (blocaje, reparații), vremea, restricțiile de greutate și dimensiuni și chiar uzura vehiculului. Astfel, se reduce timpul de deplasare, consumul de combustibil și riscul de accidente.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Мониторинг грузов: Для обеспечения сохранности и соблюдения условий перевозки ViaSafe позволяет отслеживать состояние самого груза. Для чувствительных товаров (например, продукты питания, медикаменты, особо ценные грузы) система может мониторить температуру, влажность, вибрацию и другие критически важные параметры внутри грузового отсека, немедленно предупреждая о любых отклонениях от нормы.",
              en: "Cargo monitoring: To ensure safety and proper transport conditions, ViaSafe enables monitoring of the cargo itself. For sensitive goods (e.g. food, medicine, high-value items), the system can track temperature, humidity, vibration, and other critical parameters inside the cargo hold—alerting instantly if any deviation occurs.",
              ro: "Monitorizarea mărfurilor: Pentru a asigura siguranța și condițiile adecvate de transport, ViaSafe permite monitorizarea stării mărfii. Pentru bunuri sensibile (alimente, medicamente, mărfuri de valoare mare), sistemul poate monitoriza temperatura, umiditatea, vibrațiile și alți parametri critici din compartimentul de marfă, avertizând imediat la orice abatere.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Автоматизация документооборота: ViaSafe значительно упрощает и ускоряет оформление всех необходимых документов, связанных с грузоперевозками. Транспортные накладные, таможенные декларации, счета-фактуры и другие сопроводительные документы могут автоматически генерироваться, заполняться и отправляться в нужные инстанции. Это минимизирует бюрократические задержки, особенно на границах и при прохождении различных контролей.",
              en: "Document automation: ViaSafe streamlines and speeds up the paperwork involved in cargo transport. Waybills, customs declarations, invoices, and other documents can be automatically generated, filled out, and sent to the appropriate authorities. This reduces bureaucratic delays, especially at borders and checkpoints.",
              ro: "Automatizarea documentelor: ViaSafe simplifică și accelerează completarea tuturor documentelor necesare pentru transportul de marfă. Avizele de însoțire, declarațiile vamale, facturile și alte documente însoțitoare pot fi generate, completate și trimise automat către autoritățile relevante. Astfel, se reduc întârzierile birocratice, mai ales la granițe și controale.",
            },
          },
        ],
      },
    ],
  },
]
pages["ViaSafe Architecture"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "architecture-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "architecture-title" },
        content: {
          ru: "Архитектура ViaSafe",
          en: "ViaSafe Architecture",
          ro: "Arhitectura ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: 'Чтобы по-настоящему понять мощь ViaSafe, важно заглянуть "за кулисы" и разобраться в её уникальной архитектуре – это сердце всей системы:',
          en: "To truly grasp ViaSafe’s power, we must look behind the scenes and understand its unique architecture—the beating heart of the entire system:",
          ro: "Pentru a înțelege cu adevărat puterea ViaSafe, trebuie să privim „în culise” și să înțelegem arhitectura sa unică – inima întregului sistem:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: 'ViaSafe как операционная система (не приложение, не устройство): В отличие от обычных приложений, ViaSafe – это не программа, которую вы скачиваете на телефон, и не отдельное устройство в автомобиле. Это полноценная операционная система для всей мобильности, глобальный программный комплекс, который управляет и координирует миллиарды взаимодействий в транспортной сети. Думайте о ней как о центральном "мозге", который непрерывно работает, обеспечивая слаженность и безопасность движения.',
              en: "ViaSafe as an operating system (not just an app or device): Unlike traditional apps, ViaSafe isn’t something you just install—it’s a full-fledged global operating system for mobility. It governs billions of interactions in transportation networks. Think of it as the central 'brain' of traffic movement, always active, always coordinating.",
              ro: "ViaSafe ca sistem de operare (nu doar o aplicație sau un dispozitiv): Spre deosebire de aplicațiile obișnuite, ViaSafe nu este doar un program descărcabil, ci un sistem de operare complet pentru mobilitate, un complex software global care gestionează miliarde de interacțiuni în rețelele de transport. Este creierul central al mișcării, activ non-stop.",
            },
          },
          {
            tag: "li",
            content: {
              ru: 'Сбор данных (датчики в авто, инфраструктура, люди-сенсоры): ViaSafe постоянно собирает огромные объемы данных через обширную сеть "нервных окончаний".',
              en: "Data collection (vehicle sensors, infrastructure, human sensors): ViaSafe continuously collects vast amounts of data through its network of 'nerve endings'.",
              ro: "Colectarea datelor (senzori din vehicule, infrastructură, senzori umani): ViaSafe colectează constant volume uriașe de date prin rețeaua sa extinsă de 'terminații nervoase'.",
            },
          },
          {
            tag: "ul",
            children: [
              {
                tag: "li",
                content: {
                  ru: "Датчики в авто: Подключенные к системе автомобили (включая дооснащенные старые модели) оснащены сенсорами, которые передают информацию о скорости, местоположении, состоянии дорожного покрытия, работе систем автомобиля и даже стиле вождения.",
                  en: "Vehicle sensors: Connected vehicles, including retrofitted older models, transmit data about speed, location, road conditions, system performance, and even driving style.",
                  ro: "Senzori în vehicule: Vehiculele conectate, inclusiv modelele mai vechi echipate suplimentar, transmit date despre viteză, locație, starea drumului, funcționarea sistemelor și stilul de conducere.",
                },
              },
              {
                tag: "li",
                content: {
                  ru: 'Инфраструктура: "Умные" светофоры, дорожные знаки, камеры видеонаблюдения, метеостанции и другие элементы дорожной инфраструктуры также являются активными источниками данных, сообщая о трафике, погодных условиях, инцидентах и состоянии дорог.',
                  en: "Infrastructure: Smart traffic lights, road signs, cameras, and weather stations also feed data about traffic, weather, incidents, and road conditions.",
                  ro: "Infrastructură: Semafoare inteligente, semne rutiere, camere și stații meteo furnizează date despre trafic, condițiile meteo, incidente și starea drumurilor.",
                },
              },
              {
                tag: "li",
                content: {
                  ru: '"Люди-сенсоры": Даже пользователи ViaSafe, не управляющие автомобилем (например, пешеходы или пассажиры), могут анонимно и добровольно передавать данные о дорожных условиях, скоплениях людей или необычных событиях, по аналогии с "Uber для данных".',
                  en: "\"Human sensors\": Even non-drivers (pedestrians or passengers) can anonymously and voluntarily share data about road conditions or crowding—like an 'Uber for data'.",
                  ro: "„Senzori umani”: Chiar și utilizatorii ViaSafe care nu conduc (pietoni sau pasageri) pot trimite anonim și voluntar date despre condițiile de drum sau aglomerație – ca un „Uber pentru date”.",
                },
              },
            ],
          },
          {
            tag: "li",
            content: {
              ru: "Обработка и анализ данных (ИИ, прогнозирование): Все собранные данные стекаются в центральную систему ViaSafe. Здесь в дело вступает мощный Искусственный Интеллект. Он мгновенно обрабатывает и анализирует эти колоссальные объемы информации, выявляя закономерности, идентифицируя потенциальные проблемы и, что самое важное, прогнозируя развитие ситуации. ИИ способен предсказывать пробки, аварии, изменения погодных условий и другие факторы, влияющие на мобильность.",
              en: "Data processing and analysis (AI, prediction): All collected data flows into ViaSafe’s central system. Here, powerful AI instantly processes it to identify patterns, predict traffic, accidents, weather changes, and other factors affecting mobility.",
              ro: "Procesarea și analiza datelor (IA, predicții): Toate datele colectate ajung în sistemul central ViaSafe. Inteligența Artificială procesează rapid aceste volume mari de informații, prezicând blocaje, accidente, schimbări meteorologice și alți factori care influențează mobilitatea.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Координация и принятие решений: Основываясь на глубоком анализе и прогнозах, ViaSafe принимает решения и координирует действия в масштабах всей транспортной сети. Система может динамически регулировать работу светофоров, перенаправлять транспортные потоки, предлагать индивидуальные оптимальные маршруты для каждого участника движения, и даже удаленно взаимодействовать с автономными транспортными средствами. Все это происходит в реальном времени, обеспечивая непрерывную оптимизацию и повышение безопасности.",
              en: "Coordination and decision-making: Based on deep analysis and forecasting, ViaSafe coordinates transport on a global scale—adjusting traffic lights, rerouting flows, offering optimal individual routes, and even remotely guiding autonomous vehicles, all in real time.",
              ro: "Coordonare și luarea deciziilor: Pe baza analizelor și predicțiilor, ViaSafe coordonează transportul la scară largă – reglează semafoarele, redirecționează fluxurile, oferă rute personalizate și interacționează de la distanță cu vehicule autonome, totul în timp real.",
            },
          },
        ],
      },
    ],
  },
]
pages["ViaSafe Operators"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "operators-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "operators-title" },
        content: {
          ru: "Операторы ViaSafe",
          en: "ViaSafe Operators",
          ro: "Operatorii ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "В отличие от единой корпорации, ViaSafe работает по децентрализованной модели, где ключевую роль играют Операторы ViaSafe. Эта система напоминает принцип работы мобильных операторов: сама ViaSafe – это глобальная технология, а местные услуги по её предоставлению берут на себя различные компании.",
          en: "Unlike a centralised corporation, ViaSafe operates under a decentralised model where key roles are carried out by local ViaSafe Operators. This model works like mobile carriers—ViaSafe is the global tech, but local service delivery is handled by various providers.",
          ro: "Spre deosebire de o corporație centralizată, ViaSafe funcționează după un model descentralizat, în care rolurile cheie sunt îndeplinite de Operatorii ViaSafe locali. Acest sistem este similar cu operatorii de telefonie mobilă: ViaSafe este tehnologia globală, iar furnizarea serviciilor este gestionată local de companii diferite.",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Роль и функции (установка, обслуживание, локальное управление): Операторы ViaSafe являются вашими непосредственными поставщиками услуг на местах. Их основные функции включают:",
              en: "Roles and responsibilities (installation, maintenance, local management): ViaSafe Operators act as your direct local service providers. Their core responsibilities include:",
              ro: "Roluri și responsabilități (instalare, întreținere, gestionare locală): Operatorii ViaSafe sunt furnizorii dvs. locali direcți. Responsabilitățile lor principale includ:",
            },
          },
          {
            tag: "ul",
            children: [
              {
                tag: "li",
                content: {
                  ru: 'Установка оборудования: Они отвечают за физическое развёртывание и установку необходимого оборудования ViaSafe – датчиков на дорогах, в "умных" светофорах, на станциях зарядки/обслуживания и, при необходимости, в самих транспортных средствах.',
                  en: "Equipment installation: They handle physical deployment and installation of ViaSafe equipment—roadside sensors, smart traffic lights, charging/service stations, and in-vehicle devices if needed.",
                  ro: "Instalarea echipamentelor: Ei se ocupă de desfășurarea fizică și instalarea echipamentelor ViaSafe – senzori rutieri, semafoare inteligente, stații de încărcare/servisare și, dacă este necesar, dispozitive în vehicule.",
                },
              },
              {
                tag: "li",
                content: {
                  ru: 'Обслуживание инфраструктуры: Операторы обеспечивают бесперебойную работу всех компонентов "нервной системы" ViaSafe в своем регионе, проводя регулярное техническое обслуживание и оперативно устраняя любые неисправности.',
                  en: "Infrastructure maintenance: Operators ensure uninterrupted function of ViaSafe’s 'nervous system' in their region by performing regular maintenance and fixing issues promptly.",
                  ro: "Întreținerea infrastructurii: Operatorii asigură funcționarea neîntreruptă a „sistemului nervos” ViaSafe în regiunea lor prin întreținere regulată și remedierea rapidă a problemelor.",
                },
              },
              {
                tag: "li",
                content: {
                  ru: "Локальное управление: Они адаптируют и настраивают работу системы ViaSafe под специфические условия своего региона – это может быть особая плотность трафика, уникальные дорожные особенности или местные нормативные требования. Операторы также являются вашей службой поддержки и центром коммуникации для всех вопросов, связанных с использованием ViaSafe.",
                  en: "Local management: Operators adapt the ViaSafe system to the specific conditions of their region—unique traffic density, road features, or local regulations. They also act as support and communication hubs for users.",
                  ro: "Gestionare locală: Operatorii adaptează sistemul ViaSafe la condițiile specifice din regiunea lor – densitate specială a traficului, particularități rutiere sau cerințe locale. De asemenea, sunt centrele de asistență și comunicare pentru utilizatori.",
                },
              },
            ],
          },
          {
            tag: "li",
            content: {
              ru: "Модель конкуренции и выбор оператора: Децентрализованная модель ViaSafe поощряет здоровую конкуренцию между операторами. Как и в случае с мобильной связью, операторы ViaSafe будут стремиться привлечь вас как клиента, предлагая различные пакеты услуг, тарифные планы и уровень обслуживания. Это дает вам, как пользователю, свободу выбора наиболее подходящего и выгодного для вас оператора, что способствует постоянному улучшению качества услуг и внедрению инноваций в системе ViaSafe.",
              en: "Competition model and operator choice: The decentralised ViaSafe model fosters healthy competition. Like mobile networks, operators will compete for your business with packages, pricing, and service quality. This gives you freedom of choice and pushes for constant improvement and innovation.",
              ro: "Modelul competitiv și alegerea operatorului: Modelul descentralizat al ViaSafe încurajează concurența sănătoasă. La fel ca în telefonia mobilă, operatorii ViaSafe vor concura pentru clienți oferind pachete, prețuri și servicii variate. Aveți libertatea de a alege operatorul care vi se potrivește cel mai bine, ceea ce stimulează îmbunătățirea constantă a serviciilor și inovația.",
            },
          },
        ],
      },
    ],
  },
]
pages["Global Roaming"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "global-roaming-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "global-roaming-title" },
        content: {
          ru: "Глобальный Роуминг",
          en: "Global Roaming",
          ro: "Roaming Global",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe обеспечивает беспрецедентную свободу передвижения по всему миру благодаря своей системе глобального роуминга. Вам больше не придется беспокоиться о смене настроек или потере связи при пересечении границ – ваша мобильность будет по-настоящему бесшовной:",
          en: "ViaSafe provides unprecedented freedom of movement worldwide through its global roaming system. You no longer have to worry about changing settings or losing connection when crossing borders—your mobility will be truly seamless:",
          ro: "ViaSafe oferă o libertate de mișcare fără precedent la nivel global prin sistemul său de roaming global. Nu va mai trebui să vă faceți griji cu privire la modificarea setărilor sau pierderea conexiunii la trecerea frontierelor – mobilitatea dumneavoastră va fi cu adevărat neîntreruptă:",
        },
      },
      {
        tag: "h2",
        attributes: { id: "roaming-principle-title" },
        content: {
          ru: "Принцип работы (аналогия с мобильной связью)",
          en: "How it Works (Analogy with Mobile Communication)",
          ro: "Principiul de Funcționare (Analogia cu Comunicațiile Mobile)",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Система глобального роуминга ViaSafe функционирует по принципу, очень схожему с роумингом мобильной связи, но с значительно расширенными возможностями. Как ваш мобильный телефон автоматически подключается к сети местного оператора в другой стране, так и ваша ViaSafe-система (будь то в автомобиле или на личном устройстве) без вашего участия взаимодействует с местными Операторами ViaSafe по всему миру.",
          en: "The ViaSafe global roaming system operates on a principle very similar to mobile roaming, but with significantly expanded capabilities. Just as your mobile phone automatically connects to a local operator's network in another country, your ViaSafe system (whether in your car or on a personal device) interacts with local ViaSafe Operators worldwide without your intervention.",
          ro: "Sistemul de roaming global ViaSafe funcționează pe un principiu foarte asemănător cu roamingul mobil, dar cu capabilități semnificativ extinse. La fel cum telefonul dvs. mobil se conectează automat la rețeaua unui operator local într-o altă țară, sistemul dvs. ViaSafe (fie în mașină, fie pe un dispozitiv personal) interacționează cu Operatorii ViaSafe locali din întreaga lume fără intervenția dumneavoastră.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "seamless-transfer-title" },
        content: {
          ru: "Бесшовная передача профиля и услуг",
          en: "Seamless Profile and Service Transfer",
          ro: "Transfer Neîntrerupt de Profil și Servicii",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Когда вы перемещаетесь из зоны действия одного Оператора ViaSafe в зону действия другого (например, пересекаете границу страны), система автоматически и мгновенно передает ваш пользовательский профиль и все связанные с ним данные новому оператору. Это означает, что все ваши настройки, предпочтения, текущие маршруты и активные сервисы остаются неизменными. Вы продолжаете получать актуальную информацию о дорогах, пробках, опасностях и доступных услугах (парковки, зарядные станции) от местного оператора, не замечая перехода.",
          en: "When you move from one ViaSafe Operator's coverage area to another (e.g., crossing a country border), the system automatically and instantly transfers your user profile and all associated data to the new operator. This means all your settings, preferences, current routes, and active services remain unchanged. You continue to receive up-to-date information about roads, traffic, hazards, and available services (parking, charging stations) from the local operator, without noticing the transition.",
          ro: "Când vă deplasați dintr-o zonă de acoperire a unui Operator ViaSafe în zona altuia (de exemplu, traversați o frontieră), sistemul transferă automat și instantaneu profilul dvs. de utilizator și toate datele asociate către noul operator. Aceasta înseamnă că toate setările, preferințele, rutele curente și serviciile active rămân neschimbate. Continuați să primiți informații actualizate despre drumuri, trafic, pericole și servicii disponibile (parcări, stații de încărcare) de la operatorul local, fără a observa tranziția.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "international-agreements-title" },
        content: {
          ru: "Международные соглашения операторов",
          en: "International Operator Agreements",
          ro: "Acorduri Internaționale ale Operatorilor",
        },
      },
      {
        tag: "p",
        content: {
          ru: "В основе глобального роуминга ViaSafe лежат обширные международные соглашения между Операторами ViaSafe. Эти договорённости обеспечивают непрерывность предоставления услуг, стандартизацию взаимодействия и взаиморасчеты между операторами. Благодаря этому, куда бы вы ни поехали, система ViaSafe всегда будет с вами, а ваш автомобиль будет 'чувствовать себя как дома' в любой точке мира.",
          en: "ViaSafe's global roaming is built upon extensive international agreements between ViaSafe Operators. These agreements ensure continuous service delivery, standardized interaction, and inter-operator billing. Thanks to this, wherever you go, the ViaSafe system will always be with you, and your car will 'feel at home' anywhere in the world.",
          ro: "La baza roamingului global ViaSafe stau acorduri internaționale extinse între Operatorii ViaSafe. Aceste înțelegeri asigură continuitatea furnizării serviciilor, standardizarea interacțiunii și decontările reciproce între operatori. Datorită acestui fapt, oriunde ați merge, sistemul ViaSafe va fi întotdeauna cu dumneavoastră, iar mașina dumneavoastră se va 'simți ca acasă' în orice colț al lumii.",
        },
      },
    ],
  },
]
pages["Integration with Existing Systems"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "integration-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "integration-title" },
        content: {
          ru: "Интеграция с Существующими Систем",
          en: "Integration with Existing Systems",
          ro: "Integrarea cu Sistemele Existente",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe не стремится заменить все существующие приложения и сервисы, а, напротив, строит свою мощь на их интеллектуальной интеграции. Этот подход позволяет создать бесшовную и интуитивно понятную экосистему для пользователя.",
          en: "ViaSafe does not aim to replace all existing applications and services; on the contrary, it builds its strength on their intelligent integration. This approach allows for the creation of a seamless and intuitive ecosystem for the user.",
          ro: "ViaSafe nu urmărește să înlocuiască toate aplicațiile și serviciile existente, ci, dimpotrivă, își construiește puterea pe integrarea inteligentă a acestora. Această abordare permite crearea unui ecosistem fluid și intuitiv pentru utilizator.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "why-integration-title" },
        content: {
          ru: "Почему интеграция, а не создание с нуля",
          en: "Why Integration, Not Building from Scratch",
          ro: "De ce Integrare, și nu Creare de la Zero",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Эффективность и скорость: Создание с нуля аналогов уже существующих и успешно работающих платформ (таких как картографические сервисы, мессенджеры или системы бронирования) было бы неэффективным и заняло бы десятилетия. Интеграция позволяет ViaSafe быстро запускаться и развиваться, используя проверенные и любимые пользователями решения.",
              en: "Efficiency and speed: Creating analogues of already existing and successfully operating platforms (such as mapping services, messengers, or booking systems) from scratch would be inefficient and take decades. Integration allows ViaSafe to launch and evolve quickly, using proven and user-loved solutions.",
              ro: "Eficiență și viteză: Crearea de la zero a analogilor platformelor existente și funcționale (cum ar fi serviciile de cartografiere, mesageria instantanee sau sistemele de rezervare) ar fi ineficientă și ar dura decenii. Integrarea permite ViaSafe să se lanseze și să se dezvolte rapid, utilizând soluții verificate și apreciate de utilizatori.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Экономия ресурсов: Вместо того чтобы дублировать функционал, ViaSafe фокусируется на своей уникальной ценности – интеллектуальном анализе данных, обеспечении безопасности и глобальной координации мобильности.",
              en: "Resource saving: Instead of duplicating functionality, ViaSafe focuses on its unique value—intelligent data analysis, ensuring safety, and global mobility coordination.",
              ro: "Economie de resurse: În loc să dubleze funcționalitatea, ViaSafe se concentrează pe valoarea sa unică – analiza inteligentă a datelor, asigurarea siguranței și coordonarea globală a mobilității.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Привычка пользователя: Людям комфортнее использовать уже знакомые интерфейсы и приложения. Интеграция ViaSafe позволяет им продолжать пользоваться привычными сервисами, обогащая их новым уровнем функциональности и взаимодействия.",
              en: "User habit: People are more comfortable using familiar interfaces and applications. ViaSafe integration allows them to continue using their accustomed services, enriching them with a new level of functionality and interaction.",
              ro: "Obiceiul utilizatorului: Oamenii se simt mai confortabil folosind interfețe și aplicații deja familiare. Integrarea ViaSafe le permite să continue să utilizeze serviciile obișnuite, îmbogățindu-le cu un nou nivel de funcționalitate și interacțiune.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "examples-integration-title" },
        content: {
          ru: "Примеры интеграций (навигаторы, мессенджеры, агрегаторы, банки, госслужбы)",
          en: "Examples of Integrations (Navigators, Messengers, Aggregators, Banks, Government Services)",
          ro: "Exemple de Integrări (Navigatoare, Aplicații de Mesagerie, Agregatoare, Bănci, Servicii Guvernamentale)",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Навигаторы (Яндекс.Карты, Google Maps и др.): ViaSafe не заставляет вас отказываться от любимых навигаторов. Она интегрируется с ними, обогащая их данные своей уникальной информацией о реальном состоянии дорог, опасностях и динамическом управлении трафиком. Вы получаете привычный интерфейс, но с гораздо более точной и безопасной навигацией.",
              en: "Navigators (Yandex.Maps, Google Maps, etc.): ViaSafe does not force you to abandon your favorite navigators. It integrates with them, enriching their data with its unique information about real-time road conditions, hazards, and dynamic traffic management. You get a familiar interface, but with much more accurate and safer navigation.",
              ro: "Navigatoare (Yandex.Maps, Google Maps etc.): ViaSafe nu vă obligă să renunțați la navigatoarele preferate. Se integrează cu acestea, îmbogățindu-le datele cu informații unice despre starea reală a drumurilor, pericole și gestionarea dinamică a traficului. Obțineți o interfață familiară, dar cu o navigație mult mai precisă și mai sigură.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Мессенджеры (WhatsApp, Telegram и др.): Вместо создания собственного 'встроенного' мессенджера, ViaSafe позволяет общаться с другими водителями или экстренными службами через уже привычные вам платформы, используя голосовое управление для безопасности.",
              en: "Messengers (WhatsApp, Telegram, etc.): Instead of creating its own 'built-in' messenger, ViaSafe allows you to communicate with other drivers or emergency services through platforms you already use, utilizing voice control for safety.",
              ro: "Aplicații de mesagerie (WhatsApp, Telegram etc.): În loc să creeze propriul mesager 'încorporat', ViaSafe vă permite să comunicați cu alți șoferi sau cu serviciile de urgență prin intermediul platformelor cu care sunteți deja familiarizat, folosind controlul vocal pentru siguranță.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Агрегаторы путешествий (Booking.com, Expedia, Airbnb и др.): При планировании путешествий ViaSafe подключается к ведущим агрегаторам для бронирования отелей, билетов и других услуг. Она выбирает лучшие варианты на основе ваших предпочтений и данных о безопасности, а подтверждения приходят от известных мировых сервисов.",
              en: "Travel aggregators (Booking.com, Expedia, Airbnb, etc.): When planning trips, ViaSafe connects to leading aggregators for booking hotels, tickets, and other services. It selects the best options based on your preferences and safety data, with confirmations coming from well-known global services.",
              ro: "Agregatoare de călătorii (Booking.com, Expedia, Airbnb etc.): La planificarea călătoriilor, ViaSafe se conectează la agregatoarele de top pentru rezervări de hoteluri, bilete și alte servicii. Alege cele mai bune opțiuni pe baza preferințelor și datelor dvs. de siguranță, iar confirmările vin de la servicii globale cunoscute.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Банковские системы и платежные шлюзы: Для автоматизации платежей за парковку, штрафы, топливо или другие услуги ViaSafe интегрируется с банковскими системами.",
              en: "Banking systems and payment gateways: To automate payments for parking, fines, fuel, or other services, ViaSafe integrates with banking systems.",
              ro: "Sisteme bancare și gateway-uri de plată: Pentru automatizarea plăților pentru parcare, amenzi, combustibil sau alte servicii, ViaSafe se integrează cu sistemele bancare.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Государственные службы и базы данных (ГИБДД, налоговая и др.): Для упрощения бюрократических процедур (регистрация, налоги, штрафы) ViaSafe взаимодействует с государственными базами данных, автоматизируя заполнение документов и платежи под вашим контролем.",
              en: "Government services and databases (traffic police, tax authorities, etc.): To simplify bureaucratic procedures (registration, taxes, fines), ViaSafe interacts with government databases, automating document completion and payments under your control.",
              ro: "Servicii guvernamentale și baze de date (poliția rutieră, autoritățile fiscale etc.): Pentru simplificarea procedurilor birocratice (înregistrare, taxe, amenzi), ViaSafe interacționează cu bazele de date guvernamentale, automatizând completarea documentelor și plățile sub controlul dumneavoastră.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "orchestrator-title" },
        content: {
          ru: "ViaSafe как 'оркестратор' сервисов",
          en: "ViaSafe as a Service 'Orchestrator'",
          ro: "ViaSafe ca 'Orchestrator' de Servicii",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe действует как центральный 'дирижер', который координирует работу всех этих разрозненных сервисов. Она собирает информацию от каждого из них, обрабатывает ее, принимает решения и затем 'дает указания' соответствующим платформам, чтобы они действовали в унисон. Это создает единую, бесшовную экосистему, где вам не нужно переключаться между десятками приложений, а все данные передаются автоматически, делая вашу жизнь значительно проще и эффективнее.",
          en: "ViaSafe acts as a central 'conductor' that coordinates the operation of all these disparate services. It gathers information from each, processes it, makes decisions, and then 'instructs' the respective platforms to act in unison. This creates a unified, seamless ecosystem where you don't need to switch between dozens of apps, and all data is transferred automatically, making your life significantly simpler and more efficient.",
          ro: "ViaSafe acționează ca un 'dirijor' central care coordonează funcționarea tuturor acestor servicii disparate. Colectează informații de la fiecare, le prelucrează, ia decizii și apoi 'instruiește' platformele respective să acționeze în unison. Acest lucru creează un ecosistem unificat, fluid, unde nu trebuie să comutați între zeci de aplicații, iar toate datele sunt transferate automat, făcându-vă viața semnificativ mai simplă și mai eficientă.",
        },
      },
    ],
  },
]
pages["For Users"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "for-users-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "for-users-title" },
        content: {
          ru: "Для Пользователей",
          en: "For Users",
          ro: "Pentru Utilizatori",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Мы приглашаем вас стать частью революции в мобильности! Присоединиться к ViaSafe просто, а преимущества очевидны.",
          en: "We invite you to become part of the mobility revolution! Joining ViaSafe is simple, and the benefits are clear.",
          ro: "Vă invităm să deveniți parte din revoluția mobilității! Aderarea la ViaSafe este simplă, iar beneficiile sunt evidente.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "how-to-connect-title" },
        content: {
          ru: "Как подключиться",
          en: "How to Connect",
          ro: "Cum să vă Conectați",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Мобильное приложение: Основной способ взаимодействия с ViaSafe для большинства пользователей — это интуитивно понятное мобильное приложение. Оно служит вашим личным интерфейсом к системе, позволяя управлять поездками, просматривать информацию, настраивать предпочтения и взаимодействовать с оператором ViaSafe.",
              en: "Mobile app: The primary way for most users to interact with ViaSafe is through an intuitive mobile application. It serves as your personal interface to the system, allowing you to manage trips, view information, set preferences, and interact with your ViaSafe operator.",
              ro: "Aplicația mobilă: Modul principal de interacțiune cu ViaSafe pentru majoritatea utilizatorilor este aplicația mobilă intuitivă. Aceasta servește ca interfață personală cu sistemul, permițându-vă să gestionați călătoriile, să vizualizați informații, să setați preferințe și să interacționați cu operatorul ViaSafe.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Оборудование для авто: Для использования полного спектра функций ViaSafe ваш автомобиль должен быть оснащен специализированным оборудованием. Это могут быть встроенные в новые модели автомобилей системы или комплекты для дооснащения существующих транспортных средств. Наши сертифицированные партнеры помогут с установкой, обеспечивая полную совместимость и надежность.",
              en: "In-car equipment: To use the full range of ViaSafe features, your car must be equipped with specialized hardware. This could be systems built into new car models or retrofit kits for existing vehicles. Our certified partners will assist with installation, ensuring full compatibility and reliability.",
              ro: "Echipament pentru mașină: Pentru a utiliza gama completă de funcții ViaSafe, mașina dvs. trebuie să fie echipată cu echipament specializat. Acestea pot fi sisteme încorporate în noile modele de mașini sau kituri de modernizare pentru vehiculele existente. Partenerii noștri certificați vă vor ajuta cu instalarea, asigurând compatibilitate și fiabilitate complete.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "ViaSafe Connect (для не-автомобилистов): Даже если у вас нет личного автомобиля, вы можете подключиться к ViaSafe через мобильное приложение. Это позволит вам пользоваться автономным транспортом ViaSafe как услугой, получать персонализированную навигацию для пешеходов или общественного транспорта, а также пользоваться всеми преимуществами инклюзивности системы.",
              en: "ViaSafe Connect (for non-drivers): Even if you don't own a car, you can connect to ViaSafe via the mobile app. This allows you to use ViaSafe autonomous transport as a service, receive personalized navigation for pedestrians or public transport, and enjoy all the benefits of the system's inclusivity.",
              ro: "ViaSafe Connect (pentru ne-șoferi): Chiar dacă nu dețineți o mașină personală, vă puteți conecta la ViaSafe prin aplicația mobilă. Acest lucru vă va permite să utilizați transportul autonom ViaSafe ca serviciu, să primiți navigație personalizată pentru pietoni sau transportul public și să beneficiați de toate avantajele incluziunii sistemului.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "tariff-plans-title" },
        content: {
          ru: "Тарифные планы",
          en: "Tariff Plans",
          ro: "Planuri Tarifare",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe предлагает гибкие тарифные планы, разработанные для удовлетворения разнообразных потребностей:",
          en: "ViaSafe offers flexible tariff plans designed to meet diverse needs:",
          ro: "ViaSafe oferă planuri tarifare flexibile, concepute pentru a satisface nevoi diverse:",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Индивидуальные планы: Идеально подходят для личного использования, предлагая полный набор функций безопасности, удобства и доступа к сервисам ViaSafe.",
              en: "Individual plans: Ideal for personal use, offering a full suite of safety, convenience, and access features to ViaSafe services.",
              ro: "Planuri individuale: Ideale pentru uz personal, oferind o suită completă de funcții de siguranță, confort și acces la serviciile ViaSafe.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Семейные планы: Выгодное решение для нескольких членов семьи, пользующихся одним или несколькими подключенными транспортными средствами. Семейный план обеспечивает единый счет и упрощенное управление доступом для всех, кто вам дорог.",
              en: "Family plans: A cost-effective solution for multiple family members using one or more connected vehicles. The family plan provides a single account and simplified access management for everyone you care about.",
              ro: "Planuri de familie: O soluție avantajoasă pentru mai mulți membri ai familiei care utilizează unul sau mai multe vehicule conectate. Planul de familie asigură un cont unic și o gestionare simplificată a accesului pentru toți cei dragi.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Бизнес-планы: Специальные предложения для компаний, управляющих автопарками, логистических операторов и других корпоративных клиентов, заинтересованных в оптимизации транспортных процессов.",
              en: "Business plans: Special offers for companies managing fleets, logistics operators, and other corporate clients interested in optimizing transport processes.",
              ro: "Planuri de afaceri: Oferte speciale pentru companiile care gestionează flote, operatorii logistici și alți clienți corporativi interesați de optimizarea proceselor de transport.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "faq-title" },
        content: {
          ru: "Часто задаваемые вопросы (FAQ)",
          en: "Frequently Asked Questions (FAQ)",
          ro: "Întrebări Frecvente (FAQ)",
        },
      },
      {
        tag: "p",
        content: {
          ru: "У вас есть вопросы? Мы собрали ответы на самые распространенные из них в нашем разделе FAQ. Здесь вы найдете подробную информацию о том, как работает ViaSafe, какие преимущества она предлагает, и как начать пользоваться системой. Если вы не найдете ответ на свой вопрос, наша служба поддержки всегда готова помочь.",
          en: "Do you have questions? We've compiled answers to the most common ones in our FAQ section. Here you'll find detailed information on how ViaSafe works, what benefits it offers, and how to start using the system. If you don't find the answer to your question, our support team is always ready to help.",
          ro: "Aveți întrebări? Am adunat răspunsurile la cele mai frecvente dintre ele în secțiunea noastră de Întrebări Frecvente. Aici veți găsi informații detaliate despre cum funcționează ViaSafe, ce beneficii oferă și cum să începeți să utilizați sistemul. Dacă nu găsiți răspunsul la întrebarea dvs., echipa noastră de suport este întotdeauna gata să vă ajute.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q1" },
        content: {
          ru: "1. Что мне нужно, чтобы начать пользоваться ViaSafe?",
          en: "1. What do I need to start using ViaSafe?",
          ro: "1. De ce am nevoie pentru a începe să utilizez ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Для большинства функций вам понадобится мобильное приложение ViaSafe. Для полного спектра возможностей вашего автомобиля может потребоваться установка специализированного оборудования ViaSafe или наличие его в вашей новой машине.",
          en: "For most functions, you'll need the ViaSafe mobile app. For the full range of capabilities, your car might require the installation of specialized ViaSafe equipment or to have it built into your new car.",
          ro: "Pentru majoritatea funcțiilor, veți avea nevoie de aplicația mobilă ViaSafe. Pentru gama completă de capabilități, mașina dvs. ar putea necesita instalarea echipamentului ViaSafe specializat sau să-l aibă încorporat în mașina nouă.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q2" },
        content: {
          ru: "2. Должен ли я покупать новый автомобиль, чтобы использовать ViaSafe?",
          en: "2. Do I need to buy a new car to use ViaSafe?",
          ro: "2. Trebuie să cumpăr o mașină nouă pentru a utiliza ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Нет. Хотя новые автомобили могут поставляться со встроенными системами ViaSafe, многие существующие транспортные средства можно дооснастить необходимым оборудованием для подключения к системе.",
          en: "No. While new cars may come with built-in ViaSafe systems, many existing vehicles can be retrofitted with the necessary equipment to connect to the system.",
          ro: "Nu. Deși mașinile noi pot fi livrate cu sisteme ViaSafe încorporate, multe vehicule existente pot fi echipate ulterior cu echipamentul necesar pentru a se conecta la sistem.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q3" },
        content: {
          ru: "3. Сколько стоит использование ViaSafe?",
          en: "3. How much does ViaSafe cost?",
          ro: "3. Cât costă utilizarea ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Стоимость зависит от выбранного вами тарифного плана (индивидуальный, семейный или бизнес) и объема используемых услуг. Мы предлагаем гибкие планы, разработанные для различных потребностей. Подробную информацию о тарифах вы найдете в соответствующем разделе сайта или у своего Оператора ViaSafe.",
          en: "The cost depends on your chosen tariff plan (individual, family, or business) and the volume of services used. We offer flexible plans designed for various needs. Detailed information on tariffs can be found in the relevant section of the website or from your ViaSafe Operator.",
          ro: "Costul depinde de planul tarifar ales (individual, familie sau afaceri) și de volumul serviciilor utilizate. Oferim planuri flexibile, concepute pentru diverse nevoi. Informații detaliate despre tarife veți găsi în secțiunea corespunzătoare a site-ului sau la Operatorul ViaSafe.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q4" },
        content: {
          ru: "4. Смогу ли я выбрать оператора ViaSafe в своем регионе?",
          en: "4. Will I be able to choose a ViaSafe operator in my region?",
          ro: "4. Voi putea alege un operator ViaSafe în regiunea mea?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Да. Модель ViaSafe предполагает наличие нескольких Операторов ViaSafe, которые конкурируют за клиентов. Вы сможете выбрать того оператора, который предлагает наиболее выгодные условия, качество обслуживания и набор функций в вашем регионе.",
          en: "Yes. The ViaSafe model assumes the presence of several ViaSafe Operators who compete for customers. You will be able to choose the operator that offers the most favorable terms, service quality, and set of features in your region.",
          ro: "Da. Modelul ViaSafe presupune prezența mai multor Operatori ViaSafe care concurează pentru clienți. Veți putea alege operatorul care oferă cele mai favorabile condiții, calitatea serviciilor și setul de funcții în regiunea dumneavoastră.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q5" },
        content: {
          ru: "5. Что произойдет, если я перееду в другой город или страну?",
          en: "5. What happens if I move to another city or country?",
          ro: "5. Ce se întâmplă dacă mă mut într-un alt oraș sau țară?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Благодаря глобальному роумингу ViaSafe, ваш профиль и все настройки автоматически переключатся на местного Оператора ViaSafe. Вы продолжите пользоваться всеми функциями системы без каких-либо перебоев или необходимости перенастройки.",
          en: "Thanks to ViaSafe global roaming, your profile and all settings will automatically switch to the local ViaSafe Operator. You will continue to use all system functions without any interruptions or the need for reconfiguration.",
          ro: "Datorită roamingului global ViaSafe, profilul și toate setările dvs. vor trece automat la Operatorul ViaSafe local. Veți continua să utilizați toate funcțiile sistemului fără întreruperi sau necesitatea reconfigurării.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q6" },
        content: {
          ru: "6. Насколько безопасны мои данные в системе ViaSafe?",
          en: "6. How secure is my data in the ViaSafe system?",
          ro: "6. Cât de sigure sunt datele mele în sistemul ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Безопасность и конфиденциальность данных являются нашим приоритетом. ViaSafe использует передовые технологии, включая блокчейн, для защиты вашей информации и обеспечения её целостности и неизменности. Все передаваемые данные шифруются.",
          en: "Data security and confidentiality are our priority. ViaSafe uses advanced technologies, including blockchain, to protect your information and ensure its integrity and immutability. All transmitted data is encrypted.",
          ro: "Securitatea și confidențialitatea datelor sunt prioritatea noastră. ViaSafe utilizează tehnologii avansate, inclusiv blockchain, pentru a vă proteja informațiile și a le asigura integritatea și imutabilitatea. Toate datele transmise sunt criptate.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q7" },
        content: {
          ru: "7. Могу ли я отключиться от ViaSafe в любой момент?",
          en: "7. Can I disconnect from ViaSafe at any time?",
          ro: "7. Mă pot deconecta de la ViaSafe în orice moment?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Да, вы можете управлять своей подпиской и отключиться от ViaSafe в соответствии с условиями вашего тарифного плана.",
          en: "Yes, you can manage your subscription and disconnect from ViaSafe according to the terms of your tariff plan.",
          ro: "Da, vă puteți gestiona abonamentul și vă puteți deconecta de la ViaSafe în conformitate cu termenii planului tarifar.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q8" },
        content: {
          ru: "8. Как ViaSafe будет работать с моим текущим навигатором или мессенджером?",
          en: "8. How will ViaSafe work with my current navigator or messenger?",
          ro: "8. Cum va funcționa ViaSafe cu navigatorul sau aplicația mea de mesagerie curentă?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe интегрируется с популярными навигационными приложениями и мессенджерами, а не заменяет их. Вы продолжите использовать привычные сервисы, но ViaSafe будет обогащать их данными и координировать их работу для вашего удобства.",
          en: "ViaSafe integrates with popular navigation apps and messengers rather than replacing them. You will continue to use your accustomed services, but ViaSafe will enrich them with data and coordinate their operation for your convenience.",
          ro: "ViaSafe se integrează cu aplicațiile populare de navigație și mesagerie, mai degrabă decât să le înlocuiască. Veți continua să utilizați serviciile obișnuite, dar ViaSafe le va îmbogăți cu date și le va coordona funcționarea pentru confortul dumneavoastră.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q9" },
        content: {
          ru: "9. Что делать, если у меня возникнут вопросы или проблемы с ViaSafe?",
          en: "9. What should I do if I have questions or problems with ViaSafe?",
          ro: "9. Ce ar trebui să fac dacă am întrebări sau probleme cu ViaSafe?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Вы можете обратиться в нашу службу поддержки через мобильное приложение, веб-сайт или напрямую связаться со своим Оператором ViaSafe. Мы всегда готовы помочь.",
          en: "You can contact our support team via the mobile app, website, or directly reach out to your ViaSafe Operator. We are always ready to help.",
          ro: "Puteți contacta echipa noastră de suport prin aplicația mobilă, site-ul web sau puteți contacta direct Operatorul dvs. ViaSafe. Suntem întotdeauna gata să vă ajutăm.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "faq-q10" },
        content: {
          ru: "10. Сможет ли ViaSafe помочь мне с поиском парковки или оплатой штрафов?",
          en: "10. Can ViaSafe help me find parking or pay fines?",
          ro: "10. Poate ViaSafe să mă ajute să găsesc parcare sau să plătesc amenzi?",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Да, это одни из ключевых преимуществ ViaSafe. Система автоматически находит парковочные места, управляет оплатой парковки и может автоматически оплачивать штрафы, избавляя вас от этих рутинных забот.",
          en: "Yes, these are some of ViaSafe's key benefits. The system automatically finds parking spaces, manages parking payments, and can automatically pay fines, freeing you from these routine tasks.",
          ro: "Da, acestea sunt unele dintre avantajele cheie ale ViaSafe. Sistemul găsește automat locuri de parcare, gestionează plățile pentru parcare și poate plăti automat amenzile, eliberându-vă de aceste sarcini de rutină.",
        },
      },
    ],
  },
]
pages["For Partners (Business, Government)"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "partners-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "partners-title" },
        content: {
          ru: "Для Партнеров (Бизнес, Государство)",
          en: "For Partners (Business, Government)",
          ro: "Pentru Parteneri (Afaceri, Guvern)",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe открывает широкие возможности для развития бизнеса и повышения эффективности государственных услуг в сфере мобильности. Мы приглашаем партнеров, готовых формировать будущее транспорта вместе с нами.",
          en: "ViaSafe opens up vast opportunities for business development and improving the efficiency of public services in mobility. We invite partners ready to shape the future of transport with us.",
          ro: "ViaSafe deschide oportunități vaste pentru dezvoltarea afacerilor și creșterea eficienței serviciilor publice în domeniul mobilității. Invităm partenerii pregătiți să modeleze viitorul transportului alături de noi.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "become-operator-title" },
        content: {
          ru: "Стать Оператором ViaSafe",
          en: "Become a ViaSafe Operator",
          ro: "Deveniți Operator ViaSafe",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Возможность: Если вы крупная IT-компания, телекомму-гигант или государственная структура, ViaSafe предлагает уникальную возможность стать лицензированным Оператором ViaSafe в вашем регионе или стране.",
              en: "Opportunity: If you are a large IT company, a telecom giant, or a government entity, ViaSafe offers a unique opportunity to become a licensed ViaSafe Operator in your region or country.",
              ro: "Oportunitate: Dacă sunteți o companie IT mare, un gigant telecomunicativ sau o structură guvernamentală, ViaSafe oferă o oportunitate unică de a deveni un Operator ViaSafe licențiat în regiunea sau țara dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Роль: Как Оператор, вы будете отвечать за развертывание и обслуживание инфраструктуры ViaSafe (датчики, 'умные' светофоры), управление локальной сетью мобильности и предоставление сервисов конечным пользователям.",
              en: "Role: As an Operator, you will be responsible for deploying and maintaining ViaSafe infrastructure (sensors, smart traffic lights), managing the local mobility network, and providing services to end-users.",
              ro: "Rol: Ca Operator, veți fi responsabil pentru implementarea și întreținerea infrastructurii ViaSafe (senzori, semafoare inteligente), gestionarea rețelei locale de mobilitate și furnizarea de servicii utilizatorilor finali.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Преимущества: Вы получаете доступ к передовым технологиям, становитесь ключевым игроком на рынке мобильных услуг, формируете новые потоки доходов и играете важную роль в развитии 'умных' городов.",
              en: "Benefits: You gain access to cutting-edge technologies, become a key player in the mobility services market, generate new revenue streams, and play a crucial role in the development of 'smart' cities.",
              ro: "Beneficii: Obțineți acces la tehnologii de vârf, deveniți un jucător cheie pe piața serviciilor de mobilitate, generați noi fluxuri de venituri și jucați un rol crucial în dezvoltarea orașelor 'inteligente'.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "integrate-services-title" },
        content: {
          ru: "Интеграция своих сервисов с ViaSafe",
          en: "Integrate Your Services with ViaSafe",
          ro: "Integrați-vă Serviciile cu ViaSafe",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Возможность: Если у вашей компании уже есть успешные сервисы в сфере транспорта, логистики, платежей, туризма или других смежных областях, ViaSafe предлагает глубокую интеграцию.",
              en: "Opportunity: If your company already has successful services in transport, logistics, payments, tourism, or other related fields, ViaSafe offers deep integration.",
              ro: "Oportunitate: Dacă compania dumneavoastră are deja servicii de succes în transport, logistică, plăți, turism sau alte domenii conexe, ViaSafe oferă o integrare profundă.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Примеры: Это могут быть навигационные приложения, мессенджеры, агрегаторы путешествий, банковские системы, страховые компании, сервисы по обслуживанию автомобилей, каршеринг и многие другие.",
              en: "Examples: These could include navigation apps, messengers, travel aggregators, banking systems, insurance companies, car maintenance services, carsharing, and many more.",
              ro: "Exemple: Acestea pot include aplicații de navigație, mesagerie, agregatoare de călătorii, sisteme bancare, companii de asigurări, servicii de întreținere auto, car-sharing și multe altele.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Преимущества: Интеграция с ViaSafe позволяет вам значительно расширить свою аудиторию, получить доступ к обширным данным для улучшения собственных сервисов, предложить пользователям бесшовный опыт и стать частью глобальной, взаимосвязанной экосистемы мобильности.",
              en: "Benefits: Integration with ViaSafe allows you to significantly expand your audience, gain access to extensive data to improve your own services, offer users a seamless experience, and become part of a global, interconnected mobility ecosystem.",
              ro: "Beneficii: Integrarea cu ViaSafe vă permite să vă extindeți semnificativ audiența, să accesați date extinse pentru a vă îmbunătăți propriile servicii, să oferiți utilizatorilor o experiență fluidă și să deveniți parte a unui ecosistem de mobilitate global și interconectat.",
            },
          },
        ],
      },
      {
        tag: "h2",
        attributes: { id: "industry-offers-title" },
        content: {
          ru: "Предложения для автопроизводителей, страховых, логистических компаний и других отраслей",
          en: "Offers for Automakers, Insurance, Logistics Companies, and Other Industries",
          ro: "Oferte pentru Producătorii Auto, Companii de Asigurări, Logistice și Alte Industrii",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Для автопроизводителей: Интеграция ViaSafe в новые модели позволяет создавать 'умные' автомобили с непревзойденным уровнем безопасности, преддиктивным обслуживанием и глубокой персонализацией через 'VR Гараж'. Это открывает новые возможности для послепродажного обслуживания и формирования лояльности клиентов.",
              en: "For automakers: Integrating ViaSafe into new models allows for the creation of 'smart' cars with unparalleled safety, predictive maintenance, and deep personalization through 'VR Garage'. This opens up new opportunities for after-sales service and building customer loyalty.",
              ro: "Pentru producătorii auto: Integrarea ViaSafe în noile modele permite crearea de mașini 'inteligente' cu un nivel de siguranță inegalabil, întreținere predictivă și personalizare profundă prin 'Garajul VR'. Aceasta deschide noi oportunități pentru servicii post-vânzare și fidelizarea clienților.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Для страховых компаний: ViaSafe предоставляет точные данные о стиле вождения и реальных рисках, что позволяет создавать принципиально новые, персонализированные и справедливые страховые продукты. Возможность автоматической оплаты полисов и обработки инцидентов упрощает процессы.",
              en: "For insurance companies: ViaSafe provides accurate data on driving style and real risks, enabling the creation of fundamentally new, personalized, and fair insurance products. The ability to automatically pay policies and process incidents simplifies procedures.",
              ro: "Pentru companiile de asigurări: ViaSafe oferă date precise despre stilul de condus și riscurile reale, permițând crearea de produse de asigurare fundamental noi, personalizate și echitabile. Posibilitatea plății automate a polițelor și a gestionării incidentelor simplifică procesele.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Для логистических компаний: Оптимизация маршрутов для грузовиков, мониторинг состояния грузов и автоматизация документооборота, предлагаемые ViaSafe, значительно повышают эффективность, сокращают издержки и улучшают прозрачность цепочек поставок.",
              en: "For logistics companies: ViaSafe's route optimization for trucks, cargo status monitoring, and document automation significantly increase efficiency, reduce costs, and improve supply chain transparency.",
              ro: "Pentru companiile de logistică: Optimizarea rutelor pentru camioane, monitorizarea stării mărfurilor și automatizarea documentelor, oferite de ViaSafe, sporesc semnificativ eficiența, reduc costurile și îmbunătățesc transparența lanțurilor de aprovizionare.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Для государственных структур: ViaSafe предлагает инструменты для повышения безопасности дорожного движения, оптимизации городской инфраструктуры, улучшения экологической ситуации и эффективного управления транспортными потоками, а также интеграции с государственными базами данных для автоматизации услуг.",
              en: "For government entities: ViaSafe offers tools to enhance road safety, optimize urban infrastructure, improve environmental conditions, and efficiently manage traffic flows, as well as integration with government databases for service automation.",
              ro: "Pentru structurile guvernamentale: ViaSafe oferă instrumente pentru creșterea siguranței rutiere, optimizarea infrastructurii urbane, îmbunătățirea situației ecologice și gestionarea eficientă a fluxurilor de trafic, precum și integrarea cu bazele de date guvernamentale pentru automatizarea serviciilor.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Для других отраслей: Возможности ViaSafe простираются гораздо шире, предлагая решения для компаний, занимающихся зарядными станциями для электромобилей, парковочными системами, сервисами 'последней мили' (дроны, роботы), городским планированием и многими другими.",
              en: "For other industries: ViaSafe's capabilities extend much further, offering solutions for companies involved in EV charging stations, parking systems, 'last-mile' services (drones, robots), urban planning, and many others.",
              ro: "Pentru alte industrii: Capacitățile ViaSafe se extind mult mai departe, oferind soluții pentru companiile implicate în stații de încărcare EV, sisteme de parcare, servicii de 'ultimul kilometru' (drone, roboți), planificare urbană și multe altele.",
            },
          },
        ],
      },
    ],
  },
]
pages["Careers at ViaSafe"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "careers-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "careers-title" },
        content: {
          ru: "Карьера в ViaSafe",
          en: "Careers at ViaSafe",
          ro: "Cariere la ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe — это не просто технологический проект, это движение, которое формирует будущее мобильности на планете. Мы ищем талантливых, амбициозных и увлеченных профессионалов, готовых присоединиться к нашей команде и внести свой вклад в создание более безопасного, эффективного и инклюзивного мира.",
          en: "ViaSafe is not just a technology project; it's a movement shaping the future of mobility on the planet. We are looking for talented, ambitious, and passionate professionals ready to join our team and contribute to creating a safer, more efficient, and inclusive world.",
          ro: "ViaSafe nu este doar un proiect tehnologic; este o mișcare care modelează viitorul mobilității pe planetă. Căutăm profesioniști talentați, ambițioși și pasionați, gata să se alăture echipei noastre și să contribuie la crearea unei lumi mai sigure, mai eficiente și mai incluzive.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "vacancies-title" },
        content: {
          ru: "Вакансии",
          en: "Vacancies",
          ro: "Posturi Vacante",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Мы постоянно ищем специалистов в самых разных областях: от разработчиков ИИ, инженеров по данным и специалистов по кибербезопасности до экспертов по городской логистике, аналитиков по транспортным системам и менеджеров по развитию партнерских отношений.",
          en: "We are constantly looking for specialists in various fields: from AI developers, data engineers, and cybersecurity experts to urban logistics specialists, transportation system analysts, and partnership development managers.",
          ro: "Căutăm constant specialiști în diverse domenii: de la dezvoltatori AI, ingineri de date și experți în securitate cibernetică, până la experți în logistică urbană, analiști de sisteme de transport și manageri de dezvoltare a parteneriatelor.",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Следите за актуальными вакансиями на нашем сайте в разделе 'Карьера'. Мы предлагаем конкурентную заработную плату, возможности для профессионального роста, работу над проектами мирового масштаба и комфортные условия труда.",
          en: "Keep an eye on current vacancies on our website in the 'Careers' section. We offer competitive salaries, opportunities for professional growth, work on global-scale projects, and comfortable working conditions.",
          ro: "Urmăriți posturile vacante actuale pe site-ul nostru, în secțiunea 'Cariere'. Oferim salarii competitive, oportunități de creștere profesională, muncă la proiecte de anvergură mondială și condiții de muncă confortabile.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "philosophy-title" },
        content: {
          ru: "Философия компании",
          en: "Company Philosophy",
          ro: "Filozofia Companiei",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Инновации в ДНК: Мы верим в смелые идеи и постоянные эксперименты. Наша команда находится на переднем крае технологического прогресса, создавая решения, которые меняют мир.",
              en: "Innovation in DNA: We believe in bold ideas and continuous experimentation. Our team is at the forefront of technological progress, creating solutions that change the world.",
              ro: "Inovația în ADN: Credem în idei îndrăznețe și experimentare continuă. Echipa noastră se află în avangarda progresului tehnologic, creând soluții care schimbă lumea.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Сотрудничество и Доверие: Мы ценим открытое общение, взаимоуважение и командную работу. Мы строим долгосрочные отношения с сотрудниками, партнерами и сообществом, основанные на доверии и общих целях.",
              en: "Collaboration and Trust: We value open communication, mutual respect, and teamwork. We build long-term relationships with employees, partners, and the community, based on trust and shared goals.",
              ro: "Colaborare și Încredere: Apreciem comunicarea deschisă, respectul reciproc și munca în echipă. Construim relații pe termen lung cu angajații, partenerii și comunitatea, bazate pe încredere și obiective comune.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Ответственность: Мы осознаем масштаб нашего влияния и несём ответственность за создание системы, которая приносит пользу обществу и окружающей среде. Безопасность, инклюзивность и устойчивость — это не просто ценности, это принципы, которыми мы руководствуемся в каждом решении.",
              en: "Responsibility: We recognize the scale of our impact and are responsible for creating a system that benefits society and the environment. Safety, inclusivity, and sustainability are not just values; they are principles guiding every decision we make.",
              ro: "Responsabilitate: Suntem conștienți de amploarea impactului nostru și suntem responsabili pentru crearea unui sistem care aduce beneficii societății și mediului. Siguranța, incluziunea și sustenabilitatea nu sunt doar valori; sunt principii care ne ghidează în fiecare decizie.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Развитие и Рост: Мы поддерживаем стремление к обучению и профессиональному развитию. В ViaSafe вы найдете возможности для реализации своего потенциала и постоянного совершенствования навыков.",
              en: "Development and Growth: We support the pursuit of learning and professional development. At ViaSafe, you will find opportunities to realize your potential and continuously improve your skills.",
              ro: "Dezvoltare și Creștere: Susținem dorința de învățare și dezvoltare profesională. La ViaSafe, veți găsi oportunități de a vă realiza potențialul și de a vă îmbunătăți continuu abilitățile.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Люди прежде всего: Наши сотрудники — наша главная ценность. Мы создаем стимулирующую и поддерживающую рабочую среду, где каждый может чувствовать себя частью большого и важного дела.",
              en: "People First: Our employees are our greatest asset. We create a stimulating and supportive work environment where everyone can feel part of a large and important endeavor.",
              ro: "Oamenii pe primul loc: Angajații noștri sunt cea mai mare valoare a noastră. Creăm un mediu de lucru stimulativ și de susținere, unde fiecare se poate simți parte dintr-un proiect mare și important.",
            },
          },
        ],
      },
    ],
  },
]
pages["News & Blog"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "news-blog-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "news-blog-title" },
        content: {
          ru: "Новости и Блог",
          en: "News & Blog",
          ro: "Știri și Blog",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Добро пожаловать в наш раздел 'Новости и Блог', где вы найдете самую свежую информацию о ViaSafe, глубокие аналитические статьи и вдохновляющие истории из мира мобильности будущего. Мы постоянно развиваемся и хотим делиться с вами каждым шагом!",
          en: "Welcome to our 'News & Blog' section, where you'll find the latest information about ViaSafe, in-depth analytical articles, and inspiring stories from the world of future mobility. We are constantly evolving and want to share every step with you!",
          ro: "Bun venit în secțiunea noastră 'Știri și Blog', unde veți găsi cele mai recente informații despre ViaSafe, articole analitice aprofundate și povești inspiraționale din lumea mobilității viitorului. Suntem în continuă dezvoltare și dorim să împărtășim cu dumneavoastră fiecare pas!",
        },
      },
      {
        tag: "h2",
        attributes: { id: "latest-updates-title" },
        content: {
          ru: "Последние обновления системы",
          en: "Latest System Updates",
          ro: "Ultimele Actualizări ale Sistemului",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Будьте в курсе всех нововведений и улучшений, которые мы внедряем в ViaSafe. Здесь вы найдете подробные описания новых функций, оптимизаций производительности и расширений географии покрытия системы. Мы стремимся к постоянному совершенствованию, и этот раздел поможет вам всегда быть в курсе самых актуальных изменений.",
          en: "Stay up-to-date with all the innovations and improvements we're implementing in ViaSafe. Here you'll find detailed descriptions of new features, performance optimizations, and expansions of the system's geographical coverage. We strive for continuous improvement, and this section will help you always be aware of the most current changes.",
          ro: "Fiți la curent cu toate inovațiile și îmbunătățirile pe care le implementăm în ViaSafe. Aici veți găsi descrieri detaliate ale noilor funcții, optimizări ale performanței și extinderi ale acoperirii geografice a sistemului. Ne străduim să ne îmbunătățim constant, iar această secțiune vă va ajuta să fiți mereu la curent cu cele mai relevante modificări.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "success-stories-title" },
        content: {
          ru: "Истории успеха пользователей",
          en: "User Success Stories",
          ro: "Povești de Succes ale Utilizatorilor",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Узнайте, как ViaSafe меняет жизнь обычных людей и бизнесов по всему миру. Мы делимся реальными историями о том, как наши пользователи стали безопаснее на дорогах, сэкономили время, успешно организовали семейные путешествия или оптимизировали свои логистические процессы благодаря ViaSafe. Эти истории вдохновляют и показывают реальную ценность нашей системы.",
          en: "Discover how ViaSafe is changing the lives of everyday people and businesses worldwide. We share real stories of how our users have become safer on the roads, saved time, successfully organized family trips, or optimized their logistics processes thanks to ViaSafe. These stories inspire and demonstrate the real value of our system.",
          ro: "Aflați cum ViaSafe schimbă viețile oamenilor obișnuiți și ale afacerilor din întreaga lume. Împărtășim povești reale despre cum utilizatorii noștri au devenit mai siguri pe drumuri, au economisit timp, au organizat cu succes călătorii de familie sau și-au optimizat procesele logistice datorită ViaSafe. Aceste povești inspiră și arată valoarea reală a sistemului nostru.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "future-mobility-articles-title" },
        content: {
          ru: "Статьи о будущем мобильности и технологий",
          en: "Articles on the Future of Mobility and Technology",
          ro: "Articole despre Viitorul Mobilității și Tehnologiei",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Наш блог — это площадка для экспертных мнений и дискуссий о трендах и перспективах в сфере транспорта. Здесь вы найдете аналитические статьи о развитии искусственного интеллекта в мобильности, влиянии блокчейна на транспортную отрасль, прогнозах по развитию автономного транспорта и других передовых технологиях, формирующих будущее.",
          en: "Our blog is a platform for expert opinions and discussions on trends and prospects in the field of transport. Here you will find analytical articles on the development of artificial intelligence in mobility, the impact of blockchain on the transport industry, forecasts for the development of autonomous transport, and other advanced technologies shaping the future.",
          ro: "Blogul nostru este o platformă pentru opinii experte și discuții despre tendințe și perspective în domeniul transportului. Aici veți găsi articole analitice despre dezvoltarea inteligenței artificiale în mobilitate, impactul blockchain-ului asupra industriei transporturilor, previziuni privind dezvoltarea transportului autonom și alte tehnologii avansate care modelează viitorul.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "new-features-announcements-title" },
        content: {
          ru: "Объявления о новых функциях",
          en: "New Feature Announcements",
          ro: "Anunțuri privind Funcții Noi",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Мы постоянно работаем над расширением возможностей ViaSafe. В этом разделе мы будем анонсировать запуск новых функций и сервисов, давать им подробные описания и объяснять, как они сделают вашу мобильность еще более удобной, безопасной и эффективной. Подпишитесь на нашу рассылку, чтобы не пропустить важные анонсы!",
          en: "We are constantly working to expand ViaSafe's capabilities. In this section, we will announce the launch of new features and services, provide detailed descriptions, and explain how they will make your mobility even more convenient, safe, and efficient. Subscribe to our newsletter so you don't miss important announcements!",
          ro: "Lucrăm constant la extinderea capacităților ViaSafe. În această secțiune, vom anunța lansarea de noi funcții și servicii, vom oferi descrieri detaliate și vom explica cum vă vor face mobilitatea și mai convenabilă, sigură și eficientă. Abonați-vă la newsletterul nostru pentru a nu rata anunțurile importante!",
        },
      },
    ],
  },
]
pages["Contact Us"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "contact-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "contact-title" },
        content: {
          ru: "Контакты",
          en: "Contact Us",
          ro: "Contact",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Форма обратной связи.",
          en: "Contact Form.",
          ro: "Formular de Contact.",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Адреса и телефоны (для общих запросов).",
          en: "Addresses and phone numbers (for general inquiries).",
          ro: "Adrese și numere de telefon (pentru solicitări generale).",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Пресс-центр.",
          en: "Press Center.",
          ro: "Centru de Presă.",
        },
      },
    ],
  },
]
pages["Privacy Policy"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "privacy-policy-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "privacy-policy-title" },
        content: {
          ru: "Политика конфиденциальности",
          en: "Privacy Policy",
          ro: "Politica de Confidențialitate",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Этот документ подробно описывает, как ViaSafe собирает, использует, хранит и защищает ваши персональные данные. Мы обязуемся обеспечивать конфиденциальность вашей информации и применять строгие меры безопасности, включая шифрование и технологии блокчейн, для предотвращения несанкционированного доступа. Ознакомьтесь с тем, какие данные мы собираем, зачем это делаем и каковы ваши права в отношении вашей информации.",
          en: "This document describes in detail how ViaSafe collects, uses, stores, and protects your personal data. We are committed to ensuring the confidentiality of your information and applying strict security measures, including encryption and blockchain technologies, to prevent unauthorized access. Learn about what data we collect, why we do it, and what your rights are regarding your information.",
          ro: "Acest document descrie în detaliu modul în care ViaSafe colectează, utilizează, stochează și protejează datele dumneavoastră personale. Ne angajăm să asigurăm confidențialitatea informațiilor dumneavoastră și să aplicăm măsuri stricte de securitate, inclusiv criptarea și tehnologiile blockchain, pentru a preveni accesul neautorizat. Aflați ce date colectăm, de ce o facem și care sunt drepturile dumneavoastră în ceea ce privește informațiile dumneavoastră.",
        },
      },
    ],
  },
]
pages["Terms of Use"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "terms-of-use-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "terms-of-use-main-title" },
        content: {
          ru: "Условия использования",
          en: "Terms of Use",
          ro: "Termeni de Utilizare",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Данный документ представляет собой соглашение между вами (пользователем) и Операторами ViaSafe, регулирующее правила доступа и использования всех сервисов и функций системы. В нем изложены ваши права и обязанности, условия предоставления услуг, ограничения ответственности, а также процедуры разрешения споров. Принимая эти условия, вы соглашаетесь с правилами взаимодействия в экосистеме ViaSafe.",
          en: "This document constitutes an agreement between you (the user) and ViaSafe Operators, governing the rules for accessing and using all services and functions of the system. It outlines your rights and obligations, terms of service provision, limitations of liability, and dispute resolution procedures. By accepting these terms, you agree to the rules of interaction within the ViaSafe ecosystem.",
          ro: "Acest document constituie un acord între dumneavoastră (utilizatorul) și Operatorii ViaSafe, reglementând regulile de acces și utilizare a tuturor serviciilor și funcțiilor sistemului. Acesta prezintă drepturile și obligațiile dumneavoastră, termenii de furnizare a serviciilor, limitările de răspundere și procedurile de soluționare a litigiilor. Prin acceptarea acestor termeni, sunteți de acord cu regulile de interacțiune în ecosistemul ViaSafe.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "terms-of-use-full" }, // A sub-heading for the detailed terms example
        content: {
          ru: "Условия Использования Сервисов ViaSafe",
          en: "Terms of Use for ViaSafe Services",
          ro: "Termeni de Utilizare pentru Serviciile ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Дата вступления в силу: [Указать дату, например, 1 января 2025 г.]",
          en: "Effective Date: [Specify date, e.g., January 1, 2025]",
          ro: "Data intrării în vigoare: [Specificați data, ex: 1 ianuarie 2025]",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Настоящие Условия использования (далее – 'Условия') регулируют ваш доступ и использование услуг и функций глобальной транспортной нервной системы ViaSafe (далее – 'Сервис ViaSafe'), включая мобильные приложения, бортовое оборудование, веб-сайты, API и любые другие продукты или услуги, предоставляемые Операторами ViaSafe (далее – 'Оператор' или 'Операторы').",
          en: "These Terms of Use (hereinafter – 'Terms') govern your access and use of the services and functions of the global transportation nervous system ViaSafe (hereinafter – 'ViaSafe Service'), including mobile applications, on-board equipment, websites, APIs, and any other products or services provided by ViaSafe Operators (hereinafter – 'Operator' or 'Operators').",
          ro: "Acești Termeni de Utilizare (în continuare – 'Termeni') reglementează accesul și utilizarea serviciilor și funcțiilor sistemului nervos de transport global ViaSafe (în continuare – 'Serviciul ViaSafe'), incluzând aplicații mobile, echipamente de bord, site-uri web, API-uri și orice alte produse sau servicii furnizate de Operatorii ViaSafe (în continuare – 'Operator' sau 'Operatori').",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ВАЖНО: Пожалуйста, внимательно ознакомьтесь с настоящими Условиями перед использованием Сервиса ViaSafe. Используя Сервис ViaSafe, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия, а также Политику конфиденциальности ViaSafe.",
          en: "IMPORTANT: Please read these Terms carefully before using the ViaSafe Service. By using the ViaSafe Service, you confirm that you have read, understood, and agree to comply with these Terms, as well as ViaSafe's Privacy Policy.",
          ro: "IMPORTANT: Vă rugăm să citiți cu atenție acești Termeni înainte de a utiliza Serviciul ViaSafe. Prin utilizarea Serviciului ViaSafe, confirmați că ați citit, înțeles și sunteți de acord să respectați acești Termeni, precum și Politica de Confidențialitate ViaSafe.",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Если вы не согласны с настоящими Условиями, вы не имеете права использовать Сервис ViaSafe.",
          en: "If you do not agree to these Terms, you are not authorized to use the ViaSafe Service.",
          ro: "Dacă nu sunteți de acord cu acești Termeni, nu aveți dreptul să utilizați Serviciul ViaSafe.",
        },
      },
      {
        tag: "h3",
        attributes: { id: "general-provisions" },
        content: {
          ru: "1. Общие положения",
          en: "1. General Provisions",
          ro: "1. Dispoziții Generale",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "1.1. Сервис ViaSafe предоставляется вам Операторами ViaSafe в соответствии с выбранным вами тарифным планом и настоящими Условиями.",
              en: "1.1. The ViaSafe Service is provided to you by ViaSafe Operators in accordance with your chosen tariff plan and these Terms.",
              ro: "1.1. Serviciul ViaSafe vă este furnizat de Operatorii ViaSafe în conformitate cu planul tarifar ales și cu acești Termeni.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "1.2. ViaSafe является комплексной технологической платформой, предназначенной для повышения безопасности, эффективности и удобства мобильности путем интеграции данных от транспортных средств, инфраструктуры и пользователей.",
              en: "1.2. ViaSafe is a comprehensive technological platform designed to enhance the safety, efficiency, and convenience of mobility by integrating data from vehicles, infrastructure, and users.",
              ro: "1.2. ViaSafe este o platformă tehnologică complexă, concepută pentru a spori siguranța, eficiența și confortul mobilității prin integrarea datelor de la vehicule, infrastructură și utilizatori.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "1.3. Операторы ViaSafe могут предлагать различные пакеты услуг, а также дополнительные функции в зависимости от региона и технических возможностей.",
              en: "1.3. ViaSafe Operators may offer various service packages, as well as additional features, depending on the region and technical capabilities.",
              ro: "1.3. Operatorii ViaSafe pot oferi diverse pachete de servicii, precum și funcționalități suplimentare, în funcție de regiune și de capabilitățile tehnice.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "account-registration" },
        content: {
          ru: "2. Ваша Учетная Запись и Регистрация",
          en: "2. Your Account and Registration",
          ro: "2. Contul și Înregistrarea Dumneavoastră",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "2.1. Для доступа к большинству функций Сервиса ViaSafe требуется регистрация учетной записи. Вы соглашаетесь предоставлять точную, полную и актуальную информацию при регистрации и регулярно обновлять ее.",
              en: "2.1. Access to most features of the ViaSafe Service requires account registration. You agree to provide accurate, complete, and up-to-date information upon registration and to update it regularly.",
              ro: "2.1. Accesul la majoritatea funcțiilor Serviciului ViaSafe necesită înregistrarea unui cont. Sunteți de acord să furnizați informații exacte, complete și actualizate la înregistrare și să le actualizați periodic.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "2.2. Вы несете полную ответственность за поддержание конфиденциальности данных вашей учетной записи, включая пароль, и за все действия, совершаемые под вашей учетной записью. Немедленно уведомите Оператора о любом несанкционированном использовании вашей учетной записи.",
              en: "2.2. You are solely responsible for maintaining the confidentiality of your account data, including your password, and for all activities that occur under your account. Immediately notify the Operator of any unauthorized use of your account.",
              ro: "2.2. Sunteți pe deplin responsabil pentru menținerea confidențialității datelor contului dumneavoastră, inclusiv a parolei, și pentru toate acțiunile efectuate sub contul dumneavoastră. Notificați imediat Operatorul cu privire la orice utilizare neautorizată a contului dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "2.3. Вы должны быть совершеннолетним и обладать полной дееспособностью для заключения юридически обязывающих соглашений в соответствии с законодательством вашей юрисдикции.",
              en: "2.3. You must be of legal age and possess full legal capacity to enter into legally binding agreements in accordance with the laws of your jurisdiction.",
              ro: "2.3. Trebuie să fiți major și să aveți capacitatea juridică deplină de a încheia acorduri obligatorii din punct de vedere legal, în conformitate cu legislația jurisdicției dumneavoastră.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "using-viasafe-service" },
        content: {
          ru: "3. Использование Сервиса ViaSafe",
          en: "3. Use of the ViaSafe Service",
          ro: "3. Utilizarea Serviciului ViaSafe",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "3.1. Лицензия на использование: ViaSafe предоставляет вам ограниченную, неисключительную, непередаваемую и отзывную лицензию на доступ и использование Сервиса ViaSafe в личных, некоммерческих целях, если иное не оговорено в специальном соглашении (например, для бизнес-клиентов).",
              en: "3.1. License to Use: ViaSafe grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the ViaSafe Service for personal, non-commercial purposes, unless otherwise stipulated in a special agreement (e.g., for business clients).",
              ro: "3.1. Licență de utilizare: ViaSafe vă acordă o licență limitată, neexclusivă, netransferabilă și revocabilă pentru a accesa și utiliza Serviciul ViaSafe în scopuri personale, necomerciale, cu excepția cazului în care se stipulează altfel într-un acord special (de exemplu, pentru clienții de afaceri).",
            },
          },
          {
            tag: "li",
            content: {
              ru: "3.2. Запрещенные действия: Вы обязуетесь не использовать Сервис ViaSafe: a) в любых незаконных целях или в нарушение применимого законодательства; b) для нарушения или поощрения нарушения прав третьих лиц; c) для распространения вредоносного ПО, вирусов или любого другого кода, который может повредить или нарушить работу Сервиса ViaSafe или связанных систем; d) для вмешательства в работу Сервиса ViaSafe, его серверов или сетей; e) для несанкционированного доступа к данным других пользователей или систем ViaSafe.",
              en: "3.2. Prohibited Actions: You agree not to use the ViaSafe Service: a) for any unlawful purpose or in violation of applicable law; b) to violate or encourage the violation of third-party rights; c) to distribute malware, viruses, or any other code that may damage or disrupt the operation of the ViaSafe Service or related systems; d) to interfere with the operation of the ViaSafe Service, its servers, or networks; e) for unauthorized access to other users' data or ViaSafe systems.",
              ro: "3.2. Acțiuni Interzise: Vă angajați să nu utilizați Serviciul ViaSafe: a) în orice scop ilegal sau cu încălcarea legislației aplicabile; b) pentru a încălca sau a încuraja încălcarea drepturilor terților; c) pentru a distribui software malițios, viruși sau orice alt cod care poate deteriora sau perturba funcționarea Serviciului ViaSafe sau a sistemelor conexe; d) pentru a interfera cu funcționarea Serviciului ViaSafe, a serverelor sau rețelelor sale; e) pentru acces neautorizat la datele altor utilizatori sau la sistemele ViaSafe.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "3.3. Соблюдение правил дорожного движения: Несмотря на функции безопасности и помощи ViaSafe, вы всегда несете полную ответственность за соблюдение всех применимых правил дорожного движения, законов и нормативных актов при управлении транспортным средством. ViaSafe является вспомогательной системой и не заменяет необходимость ответственного и внимательного вождения.",
              en: "3.3. Compliance with traffic rules: Despite ViaSafe's safety and assistance features, you are always solely responsible for complying with all applicable traffic rules, laws, and regulations when operating a vehicle. ViaSafe is an auxiliary system and does not replace the need for responsible and attentive driving.",
              ro: "3.3. Respectarea regulilor de circulație: În ciuda funcțiilor de siguranță și asistență ViaSafe, sunteți întotdeauna pe deplin responsabil pentru respectarea tuturor regulilor de circulație, legilor și reglementărilor aplicabile atunci când conduceți un vehicul. ViaSafe este un sistem auxiliar și nu înlocuiește necesitatea unei conduceri responsabile și atente.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "data-privacy" },
        content: {
          ru: "4. Данные и Конфиденциальность",
          en: "4. Data and Privacy",
          ro: "4. Date și Confidențialitate",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "4.1. Сбор и использование ваших данных регулируются нашей Политикой конфиденциальности. Используя Сервис ViaSafe, вы даете согласие на сбор, использование и хранение ваших данных в соответствии с данной Политикой.",
              en: "4.1. The collection and use of your data are governed by our Privacy Policy. By using the ViaSafe Service, you consent to the collection, use, and storage of your data in accordance with this Policy.",
              ro: "4.1. Colectarea și utilizarea datelor dumneavoastră sunt guvernate de Politica noastră de Confidențialitate. Prin utilizarea Serviciului ViaSafe, vă dați acordul pentru colectarea, utilizarea și stocarea datelor dumneavoastră în conformitate cu această Politică.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "4.2. Вы соглашаетесь с тем, что ViaSafe и Операторы могут собирать и использовать технические данные и информацию о вашем устройстве, программном обеспечении и периферийных устройствах для обеспечения функциональности Сервиса, его улучшения и предоставления релевантных услуг.",
              en: "4.2. You agree that ViaSafe and Operators may collect and use technical data and information about your device, software, and peripherals to ensure the functionality of the Service, improve it, and provide relevant services.",
              ro: "4.2. Sunteți de acord că ViaSafe și Operatorii pot colecta și utiliza date tehnice și informații despre dispozitivul, software-ul și perifericele dumneavoastră pentru a asigura funcționalitatea Serviciului, a-l îmbunătăți și a oferi servicii relevante.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "4.3. Данные, передаваемые в систему ViaSafe, могут быть использованы для повышения общей безопасности дорожного движения, оптимизации трафика, улучшения инфраструктуры и разработки новых сервисов.",
              en: "4.3. Data transmitted to the ViaSafe system may be used to enhance overall road safety, optimize traffic, improve infrastructure, and develop new services.",
              ro: "4.3. Datele transmise sistemului ViaSafe pot fi utilizate pentru a îmbunătăți siguranța generală a traficului rutier, a optimiza traficul, a îmbunătăți infrastructura și a dezvolta noi servicii.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "intellectual-property" },
        content: {
          ru: "5. Интеллектуальная Собственность",
          en: "5. Intellectual Property",
          ro: "5. Proprietate Intelectuală",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "5.1. Все права, правовые титулы и интересы в отношении Сервиса ViaSafe, включая, но не ограничиваясь, программное обеспечение, технологии, торговые марки, логотипы и контент, являются исключительной собственностью ViaSafe и её лицензиаров.",
              en: "5.1. All rights, title, and interest in and to the ViaSafe Service, including, but not limited to, software, technologies, trademarks, logos, and content, are the exclusive property of ViaSafe and its licensors.",
              ro: "5.1. Toate drepturile, titlurile și interesele în și asupra Serviciului ViaSafe, inclusiv, dar fără a se limita la, software-ul, tehnologiile, mărcile comerciale, logo-urile și conținutul, sunt proprietatea exclusivă a ViaSafe și a licențiatorilor săi.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "5.2. Настоящие Условия не предоставляют вам никаких прав на использование торговых марок, логотипов или технологий ViaSafe, кроме как в рамках разрешенного использования Сервиса.",
              en: "5.2. These Terms do not grant you any rights to use ViaSafe's trademarks, logos, or technologies, except as permitted within the scope of Service use.",
              ro: "5.2. Acești Termeni nu vă acordă niciun drept de a utiliza mărcile comerciale, logo-urile sau tehnologiile ViaSafe, cu excepția cazurilor permise în cadrul utilizării Serviciului.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "disclaimer-warranties" },
        content: {
          ru: "6. Отказ от Гарантий",
          en: "6. Disclaimer of Warranties",
          ro: "6. Exonerarea de Garanții",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "6.1. Сервис ViaSafe предоставляется на условиях 'как есть' и 'как доступно'. ViaSafe и Операторы не дают никаких гарантий, явных или подразумеваемых, в отношении работоспособности, точности, надежности, пригодности для конкретных целей или отсутствия ошибок в Сервисе.",
              en: "6.1. The ViaSafe Service is provided on an 'as is' and 'as available' basis. ViaSafe and the Operators make no warranties, express or implied, regarding the operation, accuracy, reliability, fitness for a particular purpose, or absence of errors in the Service.",
              ro: "6.1. Serviciul ViaSafe este furnizat 'ca atare' și 'conform disponibilității'. ViaSafe și Operatorii nu oferă nicio garanție, expresă sau implicită, cu privire la funcționalitatea, acuratețea, fiabilitatea, adecvarea pentru un anumit scop sau absența erorilor în Serviciu.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "6.2. ViaSafe не гарантирует бесперебойную или безошибочную работу Сервиса, а также отсутствие вирусов или других вредоносных компонентов.",
              en: "6.2. ViaSafe does not guarantee uninterrupted or error-free operation of the Service, nor the absence of viruses or other harmful components.",
              ro: "6.2. ViaSafe nu garantează funcționarea neîntreruptă sau fără erori a Serviciului, nici absența virușilor sau a altor componente dăunătoare.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "limitation-liability" },
        content: {
          ru: "7. Ограничение Ответственности",
          en: "7. Limitation of Liability",
          ro: "7. Limitarea Răspunderii",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "7.1. В максимальной степени, разрешенной применимым законодательством, ViaSafe и Операторы не несут ответственности за любые прямые, косвенные, случайные, специальные, побочные или штрафные убытки, включая, помимо прочего, убытки от потери прибыли, данных или другого нематериального ущерба, возникшие в результате использования или невозможности использования Сервиса ViaSafe.",
              en: "7.1. To the maximum extent permitted by applicable law, ViaSafe and the Operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including, but not limited to, damages for loss of profits, data, or other intangible losses, arising from the use or inability to use the ViaSafe Service.",
              ro: "7.1. În măsura maximă permisă de legislația aplicabilă, ViaSafe și Operatorii nu vor fi răspunzători pentru niciun fel de daune directe, indirecte, accidentale, speciale, consecvențiale sau punitive, incluzând, dar fără a se limita la, daune pentru pierderea de profituri, date sau alte daune intangibile, rezultate din utilizarea sau incapacitatea de a utiliza Serviciul ViaSafe.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "7.2. В случае возникновения аварий, инцидентов или любых других проблем на дороге, ViaSafe является вспомогательной системой и не заменяет вашей личной ответственности как водителя (при наличии таковой) и обязанностей соблюдать правила дорожного движения.",
              en: "7.2. In the event of accidents, incidents, or any other road problems, ViaSafe is an auxiliary system and does not replace your personal responsibility as a driver (if applicable) and your obligations to comply with traffic laws.",
              ro: "7.2. În cazul producerii de accidente, incidente sau orice alte probleme rutiere, ViaSafe este un sistem auxiliar și nu înlocuiește responsabilitatea dumneavoastră personală ca șofer (dacă este cazul) și obligațiile de a respecta regulile de circulație.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "termination" },
        content: {
          ru: "8. Прекращение Действия",
          en: "8. Termination",
          ro: "8. Încetare",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "8.1. Вы можете прекратить использование Сервиса ViaSafe в любое время, уведомив об этом своего Оператора.",
              en: "8.1. You may cease using the ViaSafe Service at any time by notifying your Operator.",
              ro: "8.1. Puteți înceta utilizarea Serviciului ViaSafe în orice moment, notificând Operatorul dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "8.2. ViaSafe или Оператор могут приостановить или прекратить ваш доступ к Сервису ViaSafe в любое время, без предварительного уведомления, если вы нарушите настоящие Условия или другие применимые политики.",
              en: "8.2. ViaSafe or the Operator may suspend or terminate your access to the ViaSafe Service at any time, without prior notice, if you violate these Terms or other applicable policies.",
              ro: "8.2. ViaSafe sau Operatorul vă pot suspenda sau rezilia accesul la Serviciul ViaSafe în orice moment, fără notificare prealabilă, dacă încălcați acești Termeni sau alte politici aplicabile.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "changes-to-terms" },
        content: {
          ru: "9. Изменения Условий",
          en: "9. Changes to Terms",
          ro: "9. Modificări ale Termenilor",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "9.1. ViaSafe и Операторы оставляют за собой право изменять настоящие Условия в любое время. Все изменения вступают в силу немедленно после их публикации на веб-сайте или уведомления вас иным способом.",
              en: "9.1. ViaSafe and the Operators reserve the right to modify these Terms at any time. All changes become effective immediately upon their publication on the website or upon other notification to you.",
              ro: "9.1. ViaSafe și Operatorii își rezervă dreptul de a modifica acești Termeni în orice moment. Toate modificările intră în vigoare imediat după publicarea lor pe site-ul web sau după o altă notificare către dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "9.2. Ваше дальнейшее использование Сервиса ViaSafe после публикации изменений означает ваше согласие с обновленными Условиями.",
              en: "9.2. Your continued use of the ViaSafe Service after the publication of changes signifies your acceptance of the updated Terms.",
              ro: "9.2. Continuarea utilizării Serviciului ViaSafe după publicarea modificărilor semnifică acceptarea dumneavoastră a Termenilor actualizați.",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "governing-law-dispute-resolution" },
        content: {
          ru: "10. Применимое Законодательство и Разрешение Споров",
          en: "10. Governing Law and Dispute Resolution",
          ro: "10. Legea Aplicabilă și Soluționarea Litigiilor",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "10.1. Настоящие Условия регулируются и толкуются в соответствии с законодательством [Указать юрисдикцию, например, страны, где зарегистрирован основной Оператор или штаб-квартира ViaSafe Global].",
              en: "10.1. These Terms are governed by and construed in accordance with the laws of [Specify jurisdiction, e.g., the country where the main Operator or ViaSafe Global headquarters is registered].",
              ro: "10.1. Acești Termeni sunt guvernați și interpretați în conformitate cu legile din [Specificați jurisdicția, de exemplu, țara în care este înregistrat Operatorul principal sau sediul ViaSafe Global].",
            },
          },
          {
            tag: "li",
            content: {
              ru: "10.2. Любые споры, возникающие из настоящих Условий или в связи с ними, будут разрешаться путем переговоров. В случае невозможности достижения согласия, спор будет передан на рассмотрение в компетентный суд [Указать юрисдикцию].",
              en: "10.2. Any disputes arising from or in connection with these Terms shall be resolved through negotiation. In case an agreement cannot be reached, the dispute will be submitted to the competent court of [Specify jurisdiction].",
              ro: "10.2. Orice litigii care decurg din sau în legătură cu acești Termeni vor fi soluționate prin negociere. În cazul în care nu se poate ajunge la un acord, litigiul va fi supus examinării instanței competente din [Specificați jurisdicția].",
            },
          },
        ],
      },
      {
        tag: "h3",
        attributes: { id: "contact-us-terms" },
        content: {
          ru: "Свяжитесь с нами:",
          en: "Contact us:",
          ro: "Contactați-ne:",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Если у вас есть вопросы относительно настоящих Условий использования, пожалуйста, свяжитесь с нами по адресу: [Указать общий адрес электронной почты или ссылку на контактную форму].",
          en: "If you have questions regarding these Terms of Use, please contact us at: [Specify general email address or link to contact form].",
          ro: "Dacă aveți întrebări referitoare la acești Termeni de Utilizare, vă rugăm să ne contactați la: [Specificați adresa de e-mail generală sau linkul către formularul de contact].",
        },
      },
    ],
  },
]
pages["Cookie Policy"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "cookie-policy-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "cookie-policy-title" },
        content: {
          ru: "Политика Cookies",
          en: "Cookie Policy",
          ro: "Politica de Cookie-uri",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Этот документ объясняет, что такое файлы cookie, как ViaSafe и наши партнеры используют их на нашем веб-сайте и в приложении, а также какие у вас есть варианты управления ими. Мы используем cookies для улучшения пользовательского опыта, анализа трафика и персонализации контента, обеспечивая при этом вашу конфиденциальность.",
          en: "This document explains what cookies are, how ViaSafe and our partners use them on our website and in the app, and what your options are for managing them. We use cookies to enhance the user experience, analyze traffic, and personalize content, while ensuring your privacy.",
          ro: "Acest document explică ce sunt cookie-urile, cum le utilizează ViaSafe și partenerii noștri pe site-ul nostru web și în aplicație, precum și opțiunile pe care le aveți pentru gestionarea acestora. Utilizăm cookie-uri pentru a îmbunătăți experiența utilizatorului, a analiza traficul și a personaliza conținutul, asigurând în același timp confidențialitatea dumneavoastră.",
        },
      },
    ],
  },
]
pages["Legal Information"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "legal-info-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "legal-info-main-title" },
        content: {
          ru: "Юридическая Информация",
          en: "Legal Information",
          ro: "Informații Juridice",
        },
      },
      {
        tag: "p",
        content: {
          ru: "В этом разделе вы найдете все необходимые юридические документы, регламентирующие использование услуг ViaSafe. Мы стремимся к максимальной прозрачности и соответствию всем применимым нормам и законодательству.",
          en: "In this section, you will find all necessary legal documents regulating the use of ViaSafe services. We strive for maximum transparency and compliance with all applicable norms and legislation.",
          ro: "În această secțiune, veți găsi toate documentele legale necesare care reglementează utilizarea serviciilor ViaSafe. Ne străduim să asigurăm o transparență maximă și conformitatea cu toate normele și legislația aplicabile.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "policy-documents-heading" },
        content: {
          ru: "Политики и Условия",
          en: "Policies and Terms",
          ro: "Politici și Termeni",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: {
              ru: "Политика конфиденциальности: Этот документ подробно описывает, как ViaSafe собирает, использует, хранит и защищает ваши персональные данные. Ознакомьтесь с тем, какие данные мы собираем, зачем это делаем и каковы ваши права в отношении вашей информации.",
              en: "Privacy Policy: This document describes in detail how ViaSafe collects, uses, stores, and protects your personal data. Learn about what data we collect, why we do it, and what your rights are regarding your information.",
              ro: "Politica de Confidențialitate: Acest document descrie în detaliu modul în care ViaSafe colectează, utilizează, stochează și protejează datele dumneavoastră personale. Aflați ce date colectăm, de ce o facem și care sunt drepturile dumneavoastră în ceea ce privește informațiile dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Условия использования: Данный документ представляет собой соглашение между вами (пользователем) и Операторами ViaSafe, регулирующее правила доступа и использования всех сервисов и функций системы. В нем изложены ваши права и обязанности.",
              en: "Terms of Use: This document constitutes an agreement between you (the user) and ViaSafe Operators, governing the rules for accessing and using all services and functions of the system. It outlines your rights and obligations.",
              ro: "Termeni de Utilizare: Acest document constituie un acord între dumneavoastră (utilizatorul) și Operatorii ViaSafe, reglementând regulile de acces și utilizare a tuturor serviciilor și funcțiilor sistemului. Acesta prezintă drepturile și obligațiile dumneavoastră.",
            },
          },
          {
            tag: "li",
            content: {
              ru: "Политика Cookies: Этот документ объясняет, что такое файлы cookie, как ViaSafe и наши партнеры используют их на нашем веб-сайте и в приложении, а также какие у вас есть варианты управления ими.",
              en: "Cookie Policy: This document explains what cookies are, how ViaSafe and our partners use them on our website and in the app, and what your options are for managing them.",
              ro: "Politica de Cookie-uri: Acest document explică ce sunt cookie-urile, cum le utilizează ViaSafe și partenerii noștri pe site-ul nostru web și în aplicație, precum și opțiunile pe care le aveți pentru gestionarea acestora.",
            },
          },
        ],
      },
      {
        tag: "p",
        content: {
          ru: "Мы настоятельно рекомендуем внимательно ознакомиться со всеми юридическими документами перед началом использования сервисов ViaSafe.",
          en: "We strongly recommend that you carefully review all legal documents before starting to use ViaSafe services.",
          ro: "Vă recomandăm insistent să examinați cu atenție toate documentele legale înainte de a începe să utilizați serviciile ViaSafe.",
        },
      },
    ],
  },
]

// link pages
pages["About ViaSafe"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "about-viasafe-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "about-viasafe-main-title" },
        content: {
          ru: "О ViaSafe",
          en: "About ViaSafe",
          ro: "Despre ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe — это больше, чем просто транспортная система; это видение будущего мобильности, где каждый аспект движения становится умным, безопасным и удобным. Узнайте о нашей уникальной философии, основных принципах работы и передовых технологиях, которые делают это возможным.",
          en: "ViaSafe is more than just a transportation system; it's a vision for the future of mobility, where every aspect of movement becomes smart, safe, and convenient. Learn about our unique philosophy, core operating principles, and the advanced technologies that make it all possible.",
          ro: "ViaSafe este mai mult decât un simplu sistem de transport; este o viziune pentru viitorul mobilității, unde fiecare aspect al mișcării devine inteligent, sigur și convenabil. Aflați despre filozofia noastră unică, principiile de bază de funcționare și tehnologiile avansate care fac totul posibil.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "explore-about-heading" },
        content: {
          ru: "Подробнее о ViaSafe",
          en: "Explore About ViaSafe",
          ro: "Explorați Despre ViaSafe",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/about/what-is-viasafe" },
                content: {
                  ru: "Что такое ViaSafe?",
                  en: "What is ViaSafe?",
                  ro: "Ce este ViaSafe?",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Познакомьтесь с определением ViaSafe как Глобальной Транспортной Нервной Системы.",
                  en: ": Get to know the definition of ViaSafe as a Global Transportation Nervous System.",
                  ro: ": Aflați definiția ViaSafe ca Sistem Nervos de Transport Global.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/about/mission-values" },
                content: {
                  ru: "Наша Миссия и Ценности",
                  en: "Our Mission and Values",
                  ro: "Misiunea și Valorile Noastre",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Узнайте о ключевых принципах, которые лежат в основе нашей работы.",
                  en: ": Discover the core principles that guide our work.",
                  ro: ": Descoperiți principiile fundamentale care ne ghidează activitatea.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/about/technologies" },
                content: {
                  ru: "Технологии ViaSafe",
                  en: "ViaSafe Technologies",
                  ro: "Tehnologii ViaSafe",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Ознакомьтесь с ИИ, блокчейном, IoT и другими технологиями, которые мы используем.",
                  en: ": Learn about the AI, blockchain, IoT, and other technologies we leverage.",
                  ro: ": Aflați despre AI, blockchain, IoT și alte tehnologii pe care le utilizăm.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

pages["Features & Benefits"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "features-benefits-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "features-benefits-main-title" },
        content: {
          ru: "Возможности и Преимущества ViaSafe",
          en: "ViaSafe Features & Benefits",
          ro: "Funcționalități și Beneficii ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe разработана для того, чтобы сделать вашу мобильность беспрецедентно безопасной, удобной и экономичной. Откройте для себя широкий спектр возможностей, которые улучшат вашу повседневную жизнь на дорогах и за их пределами.",
          en: "ViaSafe is designed to make your mobility unprecedentedly safe, convenient, and economical. Discover a wide range of features that will enhance your daily life on the roads and beyond.",
          ro: "ViaSafe este concepută pentru a vă face mobilitatea incomparabil mai sigură, mai comodă și mai economică. Descoperiți o gamă largă de funcționalități care vă vor îmbunătăți viața de zi cu zi pe drumuri și nu numai.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "explore-features-heading" },
        content: {
          ru: "Подробнее о Возможностях",
          en: "Explore Features in Detail",
          ro: "Explorați Funcționalitățile în Detaliu",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/road-safety" },
                content: {
                  ru: "Безопасность на Дорогах",
                  en: "Road Safety",
                  ro: "Siguranța Rutieră",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Как ViaSafe предотвращает аварии и защищает вас в реальном времени.",
                  en: ": How ViaSafe prevents accidents and protects you in real-time.",
                  ro: ": Cum ViaSafe previne accidentele și vă protejează în timp real.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/convenience-savings" },
                content: {
                  ru: "Удобство и Экономия",
                  en: "Convenience and Savings",
                  ro: "Comoditate și Economii",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Узнайте, как ViaSafe упрощает ваши расходы и автоматизирует рутину.",
                  en: ": Learn how ViaSafe simplifies your expenses and automates routines.",
                  ro: ": Aflați cum ViaSafe vă simplifică cheltuielile și automatizează rutina.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/family-travel" },
                content: {
                  ru: "Семья и Путешествия",
                  en: "Family and Travel",
                  ro: "Familie și Călătorii",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Функции для безопасных и комфортных поездок с близкими.",
                  en: ": Features for safe and comfortable trips with loved ones.",
                  ro: ": Funcționalități pentru călătorii sigure și confortabile cu cei dragi.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/accessibility" },
                content: {
                  ru: "Инклюзивность и Доступность",
                  en: "Inclusivity and Accessibility",
                  ro: "Inclusivitate și Accesibilitate",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Как ViaSafe делает мобильность доступной для всех, включая людей с особыми потребностями.",
                  en: ": How ViaSafe makes mobility accessible to everyone, including people with special needs.",
                  ro: ": Cum ViaSafe face mobilitatea accesibilă tuturor, inclusiv persoanelor cu nevoi speciale.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/tuning-customization" },
                content: {
                  ru: "Тюнинг и Кастомизация",
                  en: "Tuning and Customization",
                  ro: "Tuning și Personalizare",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Настройте ваш автомобиль и опыт вождения с уникальными возможностями ViaSafe.",
                  en: ": Customize your car and driving experience with ViaSafe's unique features.",
                  ro: ": Personalizați-vă mașina și experiența de condus cu funcționalitățile unice ale ViaSafe.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/features-benefits/logistics-cargo" },
                content: {
                  ru: "Логистика и Грузоперевозки",
                  en: "Logistics and Cargo",
                  ro: "Logistică și Transport Marfă",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Оптимизируйте управление грузами и автопарками с интеллектуальными решениями.",
                  en: ": Optimize cargo and fleet management with intelligent solutions.",
                  ro: ": Optimizați gestionarea mărfurilor și a flotelor cu soluții inteligente.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

pages["How It Works"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "how-it-works-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "how-it-works-main-title" },
        content: {
          ru: "Как Работает ViaSafe",
          en: "How ViaSafe Works",
          ro: "Cum Funcționează ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "ViaSafe — это сложная, но интуитивно понятная система, которая гармонично объединяет транспортные средства, инфраструктуру и пользователей. Узнайте о внутренней архитектуре, роли операторов, механизмах глобального роуминга и о том, как мы интегрируемся с существующими системами для обеспечения бесперебойной и эффективной мобильности.",
          en: "ViaSafe is a complex yet intuitive system that harmoniously integrates vehicles, infrastructure, and users. Learn about its internal architecture, the role of operators, global roaming mechanisms, and how we integrate with existing systems to ensure seamless and efficient mobility.",
          ro: "ViaSafe este un sistem complex, dar intuitiv, care integrează armonios vehiculele, infrastructura și utilizatorii. Aflați despre arhitectura sa internă, rolul operatorilor, mecanismele de roaming global și modul în care ne integrăm cu sistemele existente pentru a asigura o mobilitate fluidă și eficientă.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "explore-how-it-works-heading" },
        content: {
          ru: "Изучите Принципы Работы",
          en: "Explore How It Works",
          ro: "Explorați Principiile de Funcționare",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/how-it-works/architecture" },
                content: {
                  ru: "Архитектура ViaSafe",
                  en: "ViaSafe Architecture",
                  ro: "Arhitectura ViaSafe",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Погрузитесь в структуру и основные компоненты нашей системы.",
                  en: ": Dive into the structure and core components of our system.",
                  ro: ": Aprofundați structura și componentele de bază ale sistemului nostru.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/how-it-works/operators" },
                content: {
                  ru: "Операторы ViaSafe",
                  en: "ViaSafe Operators",
                  ro: "Operatori ViaSafe",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Узнайте о роли и функциях децентрализованных операторов в экосистеме.",
                  en: ": Learn about the role and functions of decentralized operators in the ecosystem.",
                  ro: ": Aflați despre rolul și funcțiile operatorilor descentralizați în ecosistem.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/how-it-works/global-roaming" },
                content: {
                  ru: "Глобальный Роуминг",
                  en: "Global Roaming",
                  ro: "Roaming Global",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Как ViaSafe обеспечивает бесшовную мобильность по всему миру.",
                  en: ": How ViaSafe ensures seamless global mobility.",
                  ro: ": Cum ViaSafe asigură mobilitatea globală fără întreruperi.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/how-it-works/integration" },
                content: {
                  ru: "Интеграция с Существующими Систелами",
                  en: "Integration with Existing Systems",
                  ro: "Integrarea cu Sistemele Existente",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Узнайте, как ViaSafe взаимодействует с другими приложениями и сервисами.",
                  en: ": Learn how ViaSafe interacts with other applications and services.",
                  ro: ": Aflați cum ViaSafe interacționează cu alte aplicații și servicii.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

pages["Join ViaSafe"] = [
  {
    tag: "section",
    attributes: {
      class: "container",
      "aria-labelledby": "join-viasafe-main-title",
      role: "region",
    },
    children: [
      {
        tag: "h1",
        attributes: { id: "join-viasafe-main-title" },
        content: {
          ru: "Присоединиться к ViaSafe",
          en: "Join ViaSafe",
          ro: "Alăturați-vă ViaSafe",
        },
      },
      {
        tag: "p",
        content: {
          ru: "Добро пожаловать в будущее мобильности! ViaSafe предлагает возможности для каждого — будь вы индивидуальный пользователь, стремящийся к более безопасным и удобным поездкам, или бизнес/государственная организация, желающая оптимизировать транспортные процессы. Узнайте, как стать частью нашей растущей экосистемы.",
          en: "Welcome to the future of mobility! ViaSafe offers opportunities for everyone—whether you're an individual user seeking safer and more convenient travels, or a business/government organization looking to optimize transportation processes. Discover how to become part of our growing ecosystem.",
          ro: "Bun venit în viitorul mobilității! ViaSafe oferă oportunități pentru toată lumea—fie că sunteți un utilizator individual care caută călătorii mai sigure și mai convenabile, fie o organizație de afaceri/guvernamentală care dorește să optimizeze procesele de transport. Descoperiți cum să deveniți parte a ecosistemului nostru în creștere.",
        },
      },
      {
        tag: "h2",
        attributes: { id: "explore-join-heading" },
        content: {
          ru: "Как Присоединиться",
          en: "How to Join",
          ro: "Cum să Vă Alăturați",
        },
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/join/users" },
                content: {
                  ru: "Для Пользователей",
                  en: "For Users",
                  ro: "Pentru Utilizatori",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Подключитесь к ViaSafe через мобильное приложение или оборудование для автомобиля.",
                  en: ": Connect to ViaSafe via the mobile app or in-car equipment.",
                  ro: ": Conectați-vă la ViaSafe prin aplicația mobilă sau echipamentul auto.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/join/partners" },
                content: {
                  ru: "Для Партнеров (Бизнес, Государство)",
                  en: "For Partners (Business, Government)",
                  ro: "Pentru Parteneri (Afaceri, Guvern)",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Узнайте о возможностях сотрудничества и интеграции для вашего бизнеса или организации.",
                  en: ": Learn about collaboration and integration opportunities for your business or organization.",
                  ro: ": Aflați despre oportunitățile de colaborare și integrare pentru afacerea sau organizația dumneavoastră.",
                },
              },
            ],
          },
          {
            tag: "li",
            children: [
              {
                tag: "a",
                attributes: { href: "/join/careers" },
                content: {
                  ru: "Карьера в ViaSafe",
                  en: "Careers at ViaSafe",
                  ro: "Cariere la ViaSafe",
                },
              },
              {
                tag: "span",
                content: {
                  ru: ": Изучите открытые вакансии и присоединитесь к нашей инновационной команде.",
                  en: ": Explore open positions and join our innovative team.",
                  ro: ": Explorați posturile deschise și alăturați-vă echipei noastre inovatoare.",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

const list = [
  { name: "Home Page", path: "/" },
  { name: "About ViaSafe", path: "/about/" },
  { name: "What is ViaSafe?", path: "/about/what-is-viasafe/" },
  { name: "Our Mission and Values", path: "/about/mission-values/" },
  { name: "ViaSafe Technologies", path: "/about/technologies/" },
  { name: "Features & Benefits", path: "/features-benefits/" },
  { name: "Road Safety", path: "/features-benefits/road-safety/" },
  {
    name: "Convenience and Savings",
    path: "/features-benefits/convenience-savings/",
  },
  {
    name: "Family and Travel",
    path: "/features-benefits/family-travel/",
  },
  {
    name: "Inclusivity and Accessibility",
    path: "/features-benefits/accessibility/",
  },
  {
    name: "Tuning and Customization",
    path: "/features-benefits/tuning-customization/",
  },
  {
    name: "Logistics and Cargo",
    path: "/features-benefits/logistics-cargo/",
  },
  { name: "How It Works", path: "/how-it-works/" },
  { name: "ViaSafe Architecture", path: "/how-it-works/architecture/" },
  { name: "ViaSafe Operators", path: "/how-it-works/operators/" },
  { name: "Global Roaming", path: "/how-it-works/global-roaming/" },
  {
    name: "Integration with Existing Systems",
    path: "/how-it-works/integration/",
  },
  { name: "Join ViaSafe", path: "/join/" },
  { name: "For Users", path: "/join/users/" },
  {
    name: "For Partners (Business, Government)",
    path: "/join/partners/",
  },
  { name: "Careers at ViaSafe", path: "/join/careers/" },
  { name: "News & Blog", path: "/news-blog/" },
  { name: "Contact Us", path: "/contact/" },
  { name: "Legal Information", path: "/legal/" },
  { name: "Privacy Policy", path: "/legal/privacy-policy/" },
  { name: "Terms of Use", path: "/legal/terms-of-use/" },
  { name: "Cookie Policy", path: "/legal/cookie-policy/" },
]

function combine(list, pages) {
  const res = []
  for (let item of list) {
    const pageData = pages[item.name]
    if (pageData) {
      res.push({ ...item, data: pageData })
    }
  }
  return res
}

const completeData = combine(list, pages)

function render(array, lang) {
  let selfclosing = ["img", "br", "hr", "input"]

  if (!Array.isArray(array)) return

  let res = ""
  for (let obj of array) {
    let node = obj

    // adding attrs
    let attrs = ""
    if (node.attributes) {
      for (let [k, v] of Object.entries(node.attributes)) {
        if (k === "href") {
          attrs += `${k}="/${lang}${v}" `
        }
        attrs += `${k}="${v}" `
      }
    }

    // checking if self closing tag
    if (selfclosing.includes(node.tag)) {
      res += `<${node.tag} ${attrs ?? ""}/>`
    } else {
      // not self closing
      let content =
        typeof node.content === "object" ? node?.content[lang] : node?.content

      res += `<${node.tag} ${attrs ?? ""}>${content ?? ""}${render(node.children || [], lang)}</${node.tag}>`
    }
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
  console.log(page, lang)
  const element = completeData.find((el) => el.name === page) || []
  return render(element.data || [], lang.toLowerCase())
}

export { pages, LANGUAGES, list, generateHTML }
