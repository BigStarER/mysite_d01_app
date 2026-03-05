(function () {
  const SUPPORTED = ["be","pl","en","ru","de","es","it","fr"];
  const DEFAULT_LANG = "en";

  function normalizeLang(input) {
    if (!input) return null;
    const l = String(input).toLowerCase().replace("_","-");
    const short = l.split("-")[0];
    return SUPPORTED.includes(short) ? short : null;
  }

  function detectFromBrowser() {
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language];
    for (const l of langs) {
      const n = normalizeLang(l);
      if (n) return n;
    }
    return null;
  }

  // В будущем сюда добавим detectFromIP через Cloudflare.
  function pickLang() {
    const saved = normalizeLang(localStorage.getItem("lang"));
    if (saved) return saved;

    const browser = detectFromBrowser();
    if (browser) return browser;

    return DEFAULT_LANG;
  }

  const I18N = {
    en: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Home",
      nav_tools: "Tools",
      title_home: "Welcome",
      desc_home: "Quick tools for everyday tasks. Choose a category.",
      title_tools: "Tools",
      desc_tools: "Pick what you need.",
      cat_video: "Video tools",
      cat_audio: "Audio tools",
      cat_password: "Password tools",
      back: "Back",
      ad: "Ad space"
    },
    ru: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Главная",
      nav_tools: "Инструменты",
      title_home: "Добро пожаловать",
      desc_home: "Быстрые инструменты на каждый день. Выбери категорию.",
      title_tools: "Инструменты",
      desc_tools: "Выбери нужное.",
      cat_video: "Инструменты видео",
      cat_audio: "Инструменты аудио",
      cat_password: "Пароли",
      back: "Назад",
      ad: "Место для рекламы"
    },
    pl: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Start",
      nav_tools: "Narzędzia",
      title_home: "Witaj",
      desc_home: "Szybkie narzędzia na co dzień. Wybierz kategorię.",
      title_tools: "Narzędzia",
      desc_tools: "Wybierz, czego potrzebujesz.",
      cat_video: "Narzędzia wideo",
      cat_audio: "Narzędzia audio",
      cat_password: "Hasła",
      back: "Wstecz",
      ad: "Miejsce na reklamę"
    },
    be: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Галоўная",
      nav_tools: "Інструменты",
      title_home: "Вітаем",
      desc_home: "Хуткія інструменты на кожны дзень. Абяры катэгорыю.",
      title_tools: "Інструменты",
      desc_tools: "Абяры патрэбнае.",
      cat_video: "Відэа інструменты",
      cat_audio: "Аўдыё інструменты",
      cat_password: "Паролі",
      back: "Назад",
      ad: "Месца для рэкламы"
    },
    de: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Start",
      nav_tools: "Tools",
      title_home: "Willkommen",
      desc_home: "Schnelle Tools für den Alltag. Wähle eine Kategorie.",
      title_tools: "Tools",
      desc_tools: "Wähle, was du brauchst.",
      cat_video: "Video-Tools",
      cat_audio: "Audio-Tools",
      cat_password: "Passwörter",
      back: "Zurück",
      ad: "Werbeplatz"
    },
    es: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Inicio",
      nav_tools: "Herramientas",
      title_home: "Bienvenido",
      desc_home: "Herramientas rápidas para el día a día. Elige una categoría.",
      title_tools: "Herramientas",
      desc_tools: "Elige lo que necesitas.",
      cat_video: "Herramientas de video",
      cat_audio: "Herramientas de audio",
      cat_password: "Contraseñas",
      back: "Atrás",
      ad: "Espacio publicitario"
    },
    it: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Home",
      nav_tools: "Strumenti",
      title_home: "Benvenuto",
      desc_home: "Strumenti rapidi per tutti i giorni. Scegli una categoria.",
      title_tools: "Strumenti",
      desc_tools: "Scegli ciò che ti serve.",
      cat_video: "Strumenti video",
      cat_audio: "Strumenti audio",
      cat_password: "Password",
      back: "Indietro",
      ad: "Spazio pubblicitario"
    },
    fr: {
      brand: "HAFY",
      tagline: "helper app for you",
      nav_home: "Accueil",
      nav_tools: "Outils",
      title_home: "Bienvenue",
      desc_home: "Outils rapides pour le quotidien. Choisis une catégorie.",
      title_tools: "Outils",
      desc_tools: "Choisis ce dont tu as besoin.",
      cat_video: "Outils vidéo",
      cat_audio: "Outils audio",
      cat_password: "Mots de passe",
      back: "Retour",
      ad: "Espace pub"
    }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = dict[key] ?? I18N[DEFAULT_LANG][key];
      if (val == null) return;
      el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-href]").forEach(el => {
      const key = el.getAttribute("data-i18n-href");
      const val = dict[key] ?? I18N[DEFAULT_LANG][key];
      if (val) el.setAttribute("href", val);
    });

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function initLangUI() {
    const sel = document.getElementById("langSelect");
    if (!sel) return;
    sel.addEventListener("change", () => {
      const lang = normalizeLang(sel.value) || DEFAULT_LANG;
      localStorage.setItem("lang", lang);
      applyLang(lang);
    });
  }

  window.HAFY = {
    supported: SUPPORTED,
    defaultLang: DEFAULT_LANG,
    pickLang,
    applyLang
  };

  document.addEventListener("DOMContentLoaded", () => {
    const lang = pickLang();
    initLangUI();
    applyLang(lang);
  });
})();
