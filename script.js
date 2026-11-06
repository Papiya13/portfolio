// Dark and Light Theme

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀";
    }

});


// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });

});


// Typing Animation

const words = [
    "Web Developer",
    "Programmer",
    "Creative Thinker",
    "Future Software Developer"
];

let wordIndex = 0;

function changeText() {

    const typing = document.getElementById("typing");

    typing.textContent = words[wordIndex];

    wordIndex++;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

}

setInterval(changeText, 2000);


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if (name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "") {

        formMessage.textContent = "Please fill all the fields.";

    } else {

        formMessage.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        contactForm.reset();

    }

});