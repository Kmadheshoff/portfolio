// Navbar scroll effect (optional sticky logic)
 const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});
const typingElement = document.querySelector(".typing");
const texts = [
  "Cyber Security Enthusiast",
  "Web Developer",
  "Full Stack Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= texts.length) index = 0;

  currentText = texts[index];
  let displayText = currentText.substring(0, charIndex);

  typingElement.textContent = displayText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index++;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);
