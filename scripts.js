const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "🍅";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌶️";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});