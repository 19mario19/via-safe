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
    name: 'How It Works',
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
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Use", path: "/terms-of-use" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  },
]

export { routes }
