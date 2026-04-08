function playSound() {
    const sound = document.getElementById("f1Sound");
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
        window.location.href = "https://www.formula1.com/";
    }, 4 * 1000);
}
