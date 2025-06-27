/**
 * @typedef {object} Route
 * @property {string} name - The display name for the route/sitemap entry.
 * @property {string} path - The URL path for this route.
 * @property {Array<Route>} [children] - Optional array of nested routes.
 */

/**
 * @type {Array<Route>}
 */
const routes = [
  {
    name: "Home Page",
    path: "/",
  },
  {
    name: "About ViaSafe",
    path: "/about",
    children: [
      {
        name: "What is ViaSafe?",
        path: "/about/what-is-viasafe",
      },
      {
        name: "Our Mission and Values",
        path: "/about/mission-values",
      },
      {
        name: "ViaSafe Technologies",
        path: "/about/technologies",
      },
    ],
  },
  {
    name: "Features & Benefits",
    path: "/features-benefits",
    children: [
      {
        name: "Road Safety",
        path: "/features-benefits/road-safety",
      },
      {
        name: "Convenience and Savings",
        path: "/features-benefits/convenience-savings",
      },
      {
        name: "Family and Travel",
        path: "/features-benefits/family-travel",
      },
      {
        name: "Inclusivity and Accessibility",
        path: "/features-benefits/accessibility",
      },
      {
        name: "Tuning and Customization",
        path: "/features-benefits/tuning-customization",
      },
      {
        name: "Logistics and Cargo",
        path: "/features-benefits/logistics-cargo",
      },
    ],
  },
  {
    name: "How It Works",
    path: "/how-it-works",
    children: [
      {
        name: "ViaSafe Architecture",
        path: "/how-it-works/architecture",
      },
      {
        name: "ViaSafe Operators",
        path: "/how-it-works/operators",
      },
      {
        name: "Global Roaming",
        path: "/how-it-works/global-roaming",
      },
      {
        name: "Integration with Existing Systems",
        path: "/how-it-works/integration",
      },
    ],
  },
  {
    name: "Join ViaSafe",
    path: "/join",
    children: [
      {
        name: "For Users",
        path: "/join/users",
      },
      {
        name: "For Partners (Business, Government)",
        path: "/join/partners",
      },
      {
        name: "Careers at ViaSafe",
        path: "/join/careers",
      },
    ],
  },
  {
    name: "News & Blog",
    path: "/news-blog",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Legal Information",
    path: "/legal",
    children: [
      { name: "Privacy Policy", path: "/legal/privacy-policy" },
      { name: "Terms of Use", path: "/legal/terms-of-use" },
      { name: "Cookie Policy", path: "/legal/cookie-policy" },
    ],
  },
]

const routes2 = [
  {
    name: {
      en: "Home Page",
      ru: "Главная",
      ro: "Pagina Principală",
    },
    path: "/",
  },
  {
    name: {
      en: "About ViaSafe",
      ru: "О ViaSafe",
      ro: "Despre ViaSafe",
    },
    path: "/about/",
    children: [
      {
        name: {
          en: "What is ViaSafe?",
          ru: "Что такое ViaSafe?",
          ro: "Ce este ViaSafe?",
        },
        path: "/about/what-is-viasafe/",
      },
      {
        name: {
          en: "Our Mission and Values",
          ru: "Наша миссия и ценности",
          ro: "Misiunea și Valorile Noastre",
        },
        path: "/about/mission-values/",
      },
      {
        name: {
          en: "ViaSafe Technologies",
          ru: "Технологии ViaSafe",
          ro: "Tehnologiile ViaSafe",
        },
        path: "/about/technologies/",
      },
    ],
  },
  {
    name: {
      en: "Features & Benefits",
      ru: "Возможности и преимущества",
      ro: "Funcționalități și Beneficii",
    },
    path: "/features-benefits/",
    children: [
      {
        name: {
          en: "Road Safety",
          ru: "Безопасность на дороге",
          ro: "Siguranța Rutieră",
        },
        path: "/features-benefits/road-safety/",
      },
      {
        name: {
          en: "Convenience and Savings",
          ru: "Удобство и экономия",
          ro: "Confort și Economii",
        },
        path: "/features-benefits/convenience-savings/",
      },
      {
        name: {
          en: "Family and Travel",
          ru: "Семья и путешествия",
          ro: "Familie și Călătorii",
        },
        path: "/features-benefits/family-travel/",
      },
      {
        name: {
          en: "Inclusivity and Accessibility",
          ru: "Инклюзивность и доступность",
          ro: "Incluziune și Accesibilitate",
        },
        path: "/features-benefits/accessibility/",
      },
      {
        name: {
          en: "Tuning and Customization",
          ru: "Тюнинг и кастомизация",
          ro: "Tuning și Personalizare",
        },
        path: "/features-benefits/tuning-customization/",
      },
      {
        name: {
          en: "Logistics and Cargo",
          ru: "Логистика и грузоперевозки",
          ro: "Logistică și Transport Marfă",
        },
        path: "/features-benefits/logistics-cargo/",
      },
    ],
  },
  {
    name: {
      en: "How It Works",
      ru: "Как это работает",
      ro: "Cum Funcționează",
    },
    path: "/how-it-works/",
    children: [
      {
        name: {
          en: "ViaSafe Architecture",
          ru: "Архитектура ViaSafe",
          ro: "Arhitectura ViaSafe",
        },
        path: "/how-it-works/architecture/",
      },
      {
        name: {
          en: "ViaSafe Operators",
          ru: "Операторы ViaSafe",
          ro: "Operatorii ViaSafe",
        },
        path: "/how-it-works/operators/",
      },
      {
        name: {
          en: "Global Roaming",
          ru: "Глобальный роуминг",
          ro: "Roaming Global",
        },
        path: "/how-it-works/global-roaming/",
      },
      {
        name: {
          en: "Integration with Existing Systems",
          ru: "Интеграция с существующими системами",
          ro: "Integrare cu Sistemele Existente",
        },
        path: "/how-it-works/integration/",
      },
    ],
  },
  {
    name: {
      en: "Join ViaSafe",
      ru: "Присоединиться к ViaSafe",
      ro: "Alătură-te ViaSafe",
    },
    path: "/join/",
    children: [
      {
        name: {
          en: "For Users",
          ru: "Для пользователей",
          ro: "Pentru Utilizatori",
        },
        path: "/join/users/",
      },
      {
        name: {
          en: "For Partners (Business, Government)",
          ru: "Для партнёров (бизнеса, правительства)",
          ro: "Pentru Parteneri (Afaceri, Guvern)",
        },
        path: "/join/partners/",
      },
      {
        name: {
          en: "Careers at ViaSafe",
          ru: "Карьера в ViaSafe",
          ro: "Cariere la ViaSafe",
        },
        path: "/join/careers/",
      },
    ],
  },
  {
    name: {
      en: "News & Blog",
      ru: "Новости и блог",
      ro: "Noutăți și Blog",
    },
    path: "/news-blog/",
  },
  {
    name: {
      en: "Contact Us",
      ru: "Связаться с нами",
      ro: "Contactați-ne",
    },
    path: "/contact/",
  },
  {
    name: {
      en: "Legal Information",
      ru: "Правовая информация",
      ro: "Informații Legale",
    },
    path: "/legal/",
    children: [
      {
        name: {
          en: "Privacy Policy",
          ru: "Политика конфиденциальности",
          ro: "Politica de Confidențialitate",
        },
        path: "/legal/privacy-policy/",
      },
      {
        name: {
          en: "Terms of Use",
          ru: "Условия использования",
          ro: "Termeni de Utilizare",
        },
        path: "/legal/terms-of-use/",
      },
      {
        name: {
          en: "Cookie Policy",
          ru: "Политика использования файлов cookie",
          ro: "Politica Cookie",
        },
        path: "/legal/cookie-policy/",
      },
    ],
  },
]

export { routes, routes2 }
