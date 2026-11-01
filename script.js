document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle-btn");
    const langBtn = document.getElementById("lang-toggle-btn");
    let currentLang = "en";

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "ar" : "en";
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
            langBtn.textContent = currentLang === "ar" ? "🌐 English" : "🌐 العربية";

            const translatableElements = document.querySelectorAll("[data-en][data-ar]");
            translatableElements.forEach(el => {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            });
        });
    }
});