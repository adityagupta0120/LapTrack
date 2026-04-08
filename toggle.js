let isDark = false;

function toggleDark() {
    isDark = !isDark;

    const lightVid = document.getElementById("lightVid");
    const darkVid  = document.getElementById("darkVid");
    const btn      = document.querySelector(".dark-toggle");

    if (isDark) {
        lightVid.style.display = "none";
        lightVid.pause();
        darkVid.style.display = "block";
        darkVid.play();
        btn.textContent = "☀️ Light Mode";
    } else {
        darkVid.style.display = "none";
        darkVid.pause();
        lightVid.style.display = "block";
        lightVid.play();
        btn.textContent = "🌙 Dark Mode";
    }
}
