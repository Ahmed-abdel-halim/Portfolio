/* ===== Hero Particles ===== */
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 2 },
            line_linked: {
                enable: true,
                distance: 130,
                color: "#ffffff",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.6 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

/* ===== Footer Particles ===== */
if (document.getElementById("footer-js")) {
    particlesJS("footer-js", {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#ffff00" },
            shape: { type: "star" },
            opacity: {
                value: 1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.2 }
            },
            size: { value: 6, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 0.7 }
        },
        interactivity: {
            events: {
                onhover: { enable: false },
                onclick: { enable: true }
            }
        },
        retina_detect: true
    });
}

/* ===== Typewriter Effect ===== */
if (document.getElementById("typewriter")) {
    const texts = ["Ahmed Abdel Halim", "Full Stack Web Developer"];
    let count = 0;
    let index = 0;
    let speed = 100;
    let delayBetweenTexts = 1500;

    function typeEffect() {
        let currentText = texts[count];
        if (index < currentText.length) {
            document.getElementById("typewriter").textContent += currentText.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").textContent = "";
                index = 0;
                count = (count + 1) % texts.length;
                typeEffect();
            }, delayBetweenTexts);
        }
    }
    typeEffect();
}

/* ===== Mobile Menu Toggle ===== */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

/* ===== AOS Init ===== */
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true
    });
}


// dark mode toggle
    const toggleBtn = document.querySelector('.theme-toggle');
    const icon = toggleBtn.querySelector('i');
    const body = document.body;

    // لو فيه ثيم محفوظ قبل كده، نطبقه
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun'); // شمس
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon'); // قمر
        }
    });