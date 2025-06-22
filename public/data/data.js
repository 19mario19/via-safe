const LANGUAGES = {
  RU: "ru",
  RO: "ro",
  EN: "en",
}

const pages = {}

pages.home = {
  1: {
    [LANGUAGES.RU]: /*html*/ `
      <section aria-labelledby="main-title" role="region">
        <h1 id="main-title">Главная Страница (Home)</h1>
        <h2 id="viasafe-slogan">ViaSafe: Ваша Мобильность. Умно. Безопасно. Без Забот.</h2>
        <p>ViaSafe — это не просто технология, это Глобальная Транспортная Нервная Система...</p>
        <p>Представьте мир, где дороги, автомобили и вы сами связаны...</p>
        <p>Мы создали ViaSafe, чтобы сделать вашу жизнь проще и безопаснее...</p>
      </section>
    `,
    [LANGUAGES.EN]: /*html*/ `
      <section aria-labelledby="main-title" role="region">
        <h1 id="main-title">Home Page</h1>
        <h2 id="viasafe-slogan">ViaSafe: Your Mobility. Smart. Safe. Worry-Free.</h2>
        <p>ViaSafe isn't just technology — it's a Global Transportation Nervous System that redefines every aspect of your movement.</p>
        <p>Imagine a world where roads, cars, and you are all connected in a single, intelligent network working for your benefit.</p>
        <p>We created ViaSafe to simplify and protect your life, offering an unprecedented level of comfort and efficiency.</p>
      </section>
    `,
    [LANGUAGES.RO]: /*html*/ `
      <section aria-labelledby="main-title" role="region">
        <h1 id="main-title">Pagina Principală</h1>
        <h2 id="viasafe-slogan">ViaSafe: Mobilitatea Ta. Inteligent. Sigur. Fără Griji.</h2>
        <p>ViaSafe nu este doar o tehnologie — este un Sistem Nervos Global de Transport care regândește fiecare aspect al mobilității tale.</p>
        <p>Imaginează-ți o lume unde drumurile, mașinile și tu sunteți conectați într-o rețea inteligentă, care lucrează în favoarea ta.</p>
        <p>Am creat ViaSafe pentru a-ți face viața mai simplă și mai sigură, oferind un nivel fără precedent de confort și eficiență.</p>
      </section>
    `,
  },

  2: {
    [LANGUAGES.RU]: /*html*/ `
      <section aria-labelledby="benefits-heading" role="region">
        <h2 id="benefits-heading">Основные Преимущества ViaSafe:</h2>
        <ul aria-label="Список преимуществ">
          <li><strong>Непревзойденная Безопасность:</strong> ViaSafe предвидит опасности...</li>
          <li><strong>Свобода от Бюрократии:</strong> ViaSafe объединяет расходы и автоматизирует оформление...</li>
          <li><strong>Безграничные Путешествия:</strong> Глобальный роуминг и умное планирование...</li>
          <li><strong>Инклюзивность для Каждого:</strong> Доступно для людей с особыми потребностями...</li>
          <li><strong>Умное Управление Транспортом:</strong> Персональный VR-гараж и предиктивное обслуживание...</li>
        </ul>
      </section>
    `,
    [LANGUAGES.EN]: /*html*/ `
      <section aria-labelledby="benefits-heading" role="region">
        <h2 id="benefits-heading">Key Benefits of ViaSafe:</h2>
        <ul aria-label="Benefits list">
          <li><strong>Unmatched Safety:</strong> Anticipates danger, coordinates traffic, and prevents accidents in real time.</li>
          <li><strong>Freedom from Bureaucracy:</strong> Merges all expenses into one bill, automates documents.</li>
          <li><strong>Unlimited Travel:</strong> Global roaming and automatic route optimisation, wherever you go.</li>
          <li><strong>Accessibility for All:</strong> Navigation for people with disabilities and seniors, with instant support.</li>
          <li><strong>Smart Vehicle Management:</strong> VR tuning, predictive maintenance, and intuitive control.</li>
        </ul>
      </section>
    `,
    [LANGUAGES.RO]: /*html*/ `
      <section aria-labelledby="benefits-heading" role="region">
        <h2 id="benefits-heading">Beneficiile Cheie ale ViaSafe:</h2>
        <ul aria-label="Listă de beneficii">
          <li><strong>Siguranță Deosebită:</strong> Anticipează pericolele, coordonează traficul și previne accidentele în timp real.</li>
          <li><strong>Fără Birocrație:</strong> Toate cheltuielile într-o singură factură, documente automatizate.</li>
          <li><strong>Călătorii Fără Limite:</strong> Roaming global și planificare inteligentă a rutelor.</li>
          <li><strong>Accesibil pentru Toți:</strong> Navigare adaptată și suport instant pentru persoane cu nevoi speciale.</li>
          <li><strong>Management Inteligent al Vehiculului:</strong> Tuning în VR și mentenanță predictivă.</li>
        </ul>
      </section>
    `,
  },

  3: {
    [LANGUAGES.RU]: /*html*/ `
      <section aria-label="Философия ViaSafe" role="region">
        <p><strong>ViaSafe</strong> — это не просто перемещение. Это новая философия жизни на ходу.</p>
      </section>
    `,
    [LANGUAGES.EN]: /*html*/ `
      <section aria-label="ViaSafe Philosophy" role="region">
        <p><strong>ViaSafe</strong> is more than movement. It’s a new way of life on the go.</p>
      </section>
    `,
    [LANGUAGES.RO]: /*html*/ `
      <section aria-label="Filosofia ViaSafe" role="region">
        <p><strong>ViaSafe</strong> nu înseamnă doar deplasare. Este o nouă filosofie a vieții în mișcare.</p>
      </section>
    `,
  },

  4: {
    [LANGUAGES.RU]: /*html*/ `
      <section aria-labelledby="cta-heading" role="region">
        <h2 id="cta-heading">Готовы ощутить будущее мобильности?</h2>
        <p>
          <a href="#about-viasafe" role="link" aria-label="Узнать больше о ViaSafe">Узнать больше о ViaSafe</a> | 
          <a href="#connect" role="link" aria-label="Подключиться к ViaSafe сейчас">Подключиться сейчас</a>
        </p>
      </section>
    `,
    [LANGUAGES.EN]: /*html*/ `
      <section aria-labelledby="cta-heading" role="region">
        <h2 id="cta-heading">Ready to experience the future of mobility?</h2>
        <p>
          <a href="#about-viasafe" role="link" aria-label="Learn more about ViaSafe">Learn more about ViaSafe</a> | 
          <a href="#connect" role="link" aria-label="Connect to ViaSafe now">Connect now</a>
        </p>
      </section>
    `,
    [LANGUAGES.RO]: /*html*/ `
      <section aria-labelledby="cta-heading" role="region">
        <h2 id="cta-heading">Ești gata să experimentezi viitorul mobilității?</h2>
        <p>
          <a href="#about-viasafe" role="link" aria-label="Află mai multe despre ViaSafe">Află mai multe despre ViaSafe</a> | 
          <a href="#connect" role="link" aria-label="Conectează-te acum">Conectează-te acum</a>
        </p>
      </section>
    `,
  },
}

export { pages, LANGUAGES }
