const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

window.onload = function () {
    setInterval(loadIntro, 2000)
}

var intros = ["Mobile Developer", "Feminist", "Backend Developer", "Content Creator", "Yogi", "Lifelong Learner"]
var index = 0;
var intro = document.getElementById("intro-loader")

function loadIntro() {
    intro.innerHTML = intros[index];
    intro.classList.add("fade");
    index++;
    if (index >= intros.length) {
        index = 0;
    }
}