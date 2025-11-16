/* ---------- NAV SCROLL ---------- */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

/* ---------- SMOOTH SCROLL FOR ANCHORS ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const tgt = document.querySelector(this.getAttribute('href'));
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ---------- SCROLL REVEAL ---------- */
const reveal = () => {
  const els = document.querySelectorAll('.scroll-animate, .section-title, .about-text, .about-image, .team-member, .portfolio-item, .contact-info, .contact-form');
  const trigger = window.innerHeight * 0.9;
  els.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', reveal);

/* ---------- PARALLAX HERO ---------- */
const heroImg = document.querySelector('.hero-image');
if (heroImg) {
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
  });
}