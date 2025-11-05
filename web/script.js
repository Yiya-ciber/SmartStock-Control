// Animación Reveal en scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight * 0.85;
    if (top < visible) el.classList.add('active');
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
