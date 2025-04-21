let currentTheme = localStorage.getItem("theme") || "light";
localStorage.setItem("theme", currentTheme);
document.querySelector("html").setAttribute("data-theme", currentTheme);

function changeTheme(theme) {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    currentTheme = theme;
}

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {
    if (currentTheme == "light") {
        changeTheme("dark")
    }
    else {
        changeTheme("light")
    }
})

const rating = document.querySelector(".rating-input");
const ratingOutput = document.querySelector(".rating-output");
ratingOutput.textContent = rating.value;

rating.addEventListener("input", () => {
    ratingOutput.textContent = rating.value;
})
