// Smooth scroll for navbar
const links = document.querySelectorAll('.nav-links a');
links.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Active section highlight (ScrollSpy)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Typing animation in hero
const words = ["Machine Learning", "Deep Learning", "Computer Vision"];
let i = 0;
const typingText = document.getElementById("typing-text");
setInterval(() => {
  typingText.textContent = words[i];
  i = (i + 1) % words.length;
}, 2500);

// Footer year auto update
document.getElementById('year').textContent = new Date().getFullYear();

// Mouse glow effect
const glow = document.getElementById("glow");
document.addEventListener("mousemove", (e) => {
  glow.style.background = `
    radial-gradient(
      300px circle at ${e.clientX}px ${e.clientY}px,
      rgba(0,255,106,0.15),
      transparent 80%
    )
  `;
});
