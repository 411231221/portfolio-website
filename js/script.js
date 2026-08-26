// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    const loading = document.querySelector(".loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.visibility = "hidden";

    }, 800);

});

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ======================================
// CLOSE MENU AFTER CLICK
// ======================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ======================================
// TYPING EFFECT
// ======================================

const typing = document.getElementById("typing");

const texts = [

    "Frontend Developer",

    "Web Developer",

    "Node.js Developer",

    "AI Enthusiast"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const current = texts[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            textIndex = (textIndex + 1) % texts.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

    ".section-title,.project-card,.service-card,.skill-card,.contact-card,.stat,.about-avatar"

).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

// ======================================
// ACTIVE NAVBAR
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================
// HEADER SHADOW
// ======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});