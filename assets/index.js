const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

window.onload = function () {
    setInterval(loadIntro, 2000)
    setInterval(loadAbout, 3500)
}

const intros = ["Mobile Developer", "Backend Developer", "Feminist", "DevOps Enthusiast", "Content Creator", "Yogi", "Lifelong Learner"];
let index = 0;
const intro = document.getElementById("intro-loader");

function loadIntro() {
    intro.innerHTML = intros[index];
    intro.classList.add("fade");
    index++;
    if (index >= intros.length) {
        index = 0;
    }
}
const abouts = [
    "I have a Master's degree in Software Engineering and I like building mobile apps for fun and personal use.",
    "My software development journey started back in 2020.",
    "In the past, I've been involved in multiple interesting freelance, as well as contract, projects. <br>Ranging from online stores to family meals organizer and more.",
    "Being back in Cameroon recently, I pursued my studies in Tunisia, in a private digital-centered institution.",
    "In my free time I like to read books and discuss various topics. <br>Such as the evolution of software engineering, women's rights in our society and self-improvement.",
    "I also publish articles and tutorials on social media and my blogs."
]
const about = document.getElementById("about-p")
let aboutIndex = 0;
function loadAbout() {
    about.innerHTML = abouts[aboutIndex];
    about.classList.add("fade");
    aboutIndex++;
    if (aboutIndex >= abouts.length) {
        aboutIndex = 0;
    }
}