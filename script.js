document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("theme-toggle-btn");
    const bodyElement = document.body;

    const savedTheme = localStorage.getItem("siteTheme");
    if (savedTheme === "dark") {
        bodyElement.classList.add("dark-mode");
        if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            bodyElement.classList.toggle("dark-mode");
            
            if (bodyElement.classList.contains("dark-mode")) {
                themeBtn.innerText = "☀️ Light Mode";
                localStorage.setItem("siteTheme", "dark");
            } else {
                themeBtn.innerText = "🌙 Dark Mode";
                localStorage.setItem("siteTheme", "light");
            }
        });
    }

    const cards = document.querySelectorAll(".content-card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0.9";
        card.style.transition = "all 0.4s ease-out";
        observer.observe(card);
    });
});