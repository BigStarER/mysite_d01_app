  window.HAFY = {
    supported: SUPPORTED,
    defaultLang: DEFAULT_LANG,
    pickLang,
    applyLang,
    bindLangSelect() {
      const sel = document.getElementById("langSelect");
      if (!sel) return;
      // чтобы не вешать 100 раз
      if (sel.dataset.bound === "1") return;
      sel.dataset.bound = "1";

      sel.addEventListener("change", () => {
        const lang = normalizeLang(sel.value) || DEFAULT_LANG;
        localStorage.setItem("lang", lang);
        applyLang(lang);
      });
    },
    applyCurrent() {
      const lang = pickLang();
      applyLang(lang);
      this.bindLangSelect();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.HAFY.applyCurrent();
  });
