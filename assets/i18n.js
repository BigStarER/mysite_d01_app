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

  // Сейчас: браузер + сохранённый выбор.
  // Позже (Cloudflare): добавим определение по IP, если захочешь.
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
      tagline: "Helper App For You",
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
      ad: "Ad space",
      btn_generate: "Generate",
      btn_copy: "Copy",
      pw_settings: "Settings",
      pw_tip: "Works in your browser. Nothing is uploaded.",
      pw_length: "Length",
      pw_symbols: "Symbols",
      msg_generated: "Generated.",
      msg_copied: "Copied.",
      msg_copy_fail: "Copy failed (browser permission).",
      msg_nothing: "Nothing to copy.",
      msg_select_charset: "Select at least one character set."
    },
    ru: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Место для рекламы",
      btn_generate: "Сгенерировать",
      btn_copy: "Копировать",
      pw_settings: "Настройки",
      pw_tip: "Работает в браузере. Ничего на сервер не отправляем.",
      pw_length: "Длина",
      pw_symbols: "Символы",
      msg_generated: "Сгенерировано.",
      msg_copied: "Скопировано.",
      msg_copy_fail: "Не удалось скопировать (разрешения браузера).",
      msg_nothing: "Нечего копировать.",
      msg_select_charset: "Выбери хотя бы один набор символов."
    },
    pl: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Miejsce na reklamę",
      btn_generate: "Generuj",
      btn_copy: "Kopiuj",
      pw_settings: "Ustawienia",
      pw_tip: "Działa w przeglądarce. Nic nie jest wysyłane na serwer.",
      pw_length: "Długość",
      pw_symbols: "Symbole",
      msg_generated: "Wygenerowano.",
      msg_copied: "Skopiowano.",
      msg_copy_fail: "Nie udało się skopiować (uprawnienia przeglądarki).",
      msg_nothing: "Nie ma czego kopiować.",
      msg_select_charset: "Wybierz co najmniej jeden zestaw znaków."
    },
    be: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Месца для рэкламы",
      btn_generate: "Згенераваць",
      btn_copy: "Капіяваць",
      pw_settings: "Налады",
      pw_tip: "Працоўе ў браўзеры. Нічога не адпраўляецца на сервер.",
      pw_length: "Даўжыня",
      pw_symbols: "Сімвалы",
      msg_generated: "Згенеравана.",
      msg_copied: "Скапіявана.",
      msg_copy_fail: "Не атрымалася скапіяваць (дазволы браўзера).",
      msg_nothing: "Няма чаго капіяваць.",
      msg_select_charset: "Абяры хаця б адзін набор сімвалаў."
    },
    de: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Werbeplatz",
      btn_generate: "Generieren",
      btn_copy: "Kopieren",
      pw_settings: "Einstellungen",
      pw_tip: "Funktioniert im Browser. Es werden keine Daten hochgeladen.",
      pw_length: "Länge",
      pw_symbols: "Symbole",
      msg_generated: "Erstellt.",
      msg_copied: "Kopiert.",
      msg_copy_fail: "Kopieren fehlgeschlagen (Browser-Berechtigung).",
      msg_nothing: "Nichts zum Kopieren.",
      msg_select_charset: "Wähle mindestens einen Zeichensatz aus."
    },
    es: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Espacio publicitario",
      btn_generate: "Generar",
      btn_copy: "Copiar",
      pw_settings: "Configuración",
      pw_tip: "Funciona en tu navegador. No se sube ningún dato.",
      pw_length: "Longitud",
      pw_symbols: "Símbolos",
      msg_generated: "Generado.",
      msg_copied: "Copiado.",
      msg_copy_fail: "Error al copiar (permiso del navegador).",
      msg_nothing: "Nada que copiar.",
      msg_select_charset: "Elige al menos un conjunto de caracteres."
    },
    it: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Spazio pubblicitario",
      btn_generate: "Genera",
      btn_copy: "Copia",
      pw_settings: "Impostazioni",
      pw_tip: "Funziona nel browser. Nessun dato viene caricato.",
      pw_length: "Lunghezza",
      pw_symbols: "Simboli",
      msg_generated: "Generato.",
      msg_copied: "Copiato.",
      msg_copy_fail: "Copia non riuscita (permessi del browser).",
      msg_nothing: "Niente da copiare.",
      msg_select_charset: "Seleziona almeno un set di caratteri."
    },
    fr: {
      brand: "HAFY",
      tagline: "Helper App For You",
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
      ad: "Espace pub",
      btn_generate: "Générer",
      btn_copy: "Copier",
      pw_settings: "Paramètres",
      pw_tip: "Fonctionne dans le navigateur. Aucune donnée n'est envoyée.",
      pw_length: "Longueur",
      pw_symbols: "Symboles",
      msg_generated: "Généré.",
      msg_copied: "Copié.",
      msg_copy_fail: "Échec de la copie (autorisation du navigateur).",
      msg_nothing: "Rien à copier.",
      msg_select_charset: "Choisis au moins un jeu de caractères."
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

        // translate attributes: placeholder/title/aria-label
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key] ?? I18N[DEFAULT_LANG][key];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      const val = dict[key] ?? I18N[DEFAULT_LANG][key];
      if (val != null) el.setAttribute("title", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      const val = dict[key] ?? I18N[DEFAULT_LANG][key];
      if (val != null) el.setAttribute("aria-label", val);
    });

    // синхронизируем селект, если уже есть
    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function bindLangSelect() {
    const sel = document.getElementById("langSelect");
    if (!sel) return;

    // защита от повторного навешивания
    if (sel.dataset.bound === "1") return;
    sel.dataset.bound = "1";

    sel.addEventListener("change", () => {
      const lang = normalizeLang(sel.value) || DEFAULT_LANG;
      localStorage.setItem("lang", lang);
      applyLang(lang);
    });
  }

  function applyCurrent() {
    const lang = pickLang();
    applyLang(lang);
    bindLangSelect();
  }

  window.HAFY = {
    supported: SUPPORTED,
    defaultLang: DEFAULT_LANG,
    pickLang,
    applyLang,
    bindLangSelect,
    applyCurrent
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyCurrent();
  });
})();
