// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  typeWriter();
});

// Typewriter Effect
  const typewriterText = "Hi, I'm Aisha! 👋";
  const typewriterEl = document.getElementById("typewriter");
  let i = 0;

  function typeEffect() {
    if (i < typewriterText.length) {
      typewriterEl.textContent = typewriterText.substring(0, i + 1);
      i++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typewriterEl.textContent = "";
        i = 0;
        typeEffect();
      }, 2000);
    }
  }

  typeEffect();