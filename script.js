// Typing Animation

const words = [
    "AI Enthusiast",
    "Full Stack Learner",
    "Future Software Engineer",
    "Problem Solver",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function type() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();


// Fade Animation While Scrolling

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});