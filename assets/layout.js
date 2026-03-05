(function () {
  function headerHTML(base) {
    return `
      <div class="header">
        <div class="brand">
          <div class="logo"></div>
          <div>
            <h1><span data-i18n="brand">HAFY</span> — <span class="small" data-i18n="tagline">helper app for you</span></h1>
          </div>
        </div>

        <div class="nav">
          <a class="pill" href="${base}" data-i18n="nav_home">Home</a>
          <a class="pill" href="${base}tools/" data-i18n="nav_tools">Tools</a>

          <select class="select" id="langSelect" aria-label="Language">
            <option value="be">BE</option><option value="pl">PL</option><option value="en">EN</option>
            <option value="ru">RU</option><option value="de">DE</option><option value="es">ES</option>
            <option value="it">IT</option><option value="fr">FR</option>
          </select>
        </div>
      </div>
    `;
  }

  function footerHTML() {
    return `
      <div class="footer">
        © <span data-i18n="brand">HAFY</span> — <span data-i18n="tagline">helper app for you</span>
      </div>
    `;
  }

  window.HAFY_LAYOUT = {
    mount(base) {
      const header = document.getElementById("siteHeader");
      const footer = document.getElementById("siteFooter");
      if (header) header.innerHTML = headerHTML(base);
      if (footer) footer.innerHTML = footerHTML();
    }
  };
})();
