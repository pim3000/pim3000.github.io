// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// Smooth scrolling for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Dynamic "a/an" typing effect
const roles = ["Artist", "Animator", "Sculpturist", "Editor", "Prop Maker"];
let index = 0;

function typeRole() {
    const role = roles[index];
    const firstLetter = role.trim().charAt(0).toLowerCase();

    // Check for vowel → use "an"
    const isVowel = ["a", "i", "u", "e", "o"].includes(firstLetter);
    document.getElementById("article").textContent = isVowel ? "an" : "a";

    let charIndex = 0;
    const roleSpan = document.getElementById("role");
    roleSpan.textContent = "";

    function typeChar() {
        if (charIndex < role.length) {
            roleSpan.textContent += role.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 120); // typing speed
        } else {
            setTimeout(() => {
                index = (index + 1) % roles.length;
                typeRole();
            }, 1200); // pause before next word
        }
    }

    typeChar();
}

typeRole();



