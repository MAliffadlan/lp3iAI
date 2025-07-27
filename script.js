document.addEventListener('DOMContentLoaded', () => {
  // 1) Animasi Hero on Load
  document.querySelector('.hero-title').classList.add('show');
  document.querySelector('.hero-subtitle').classList.add('show');
  document.querySelector('.hero .btn').classList.add('show');

  // 2) Navbar background saat scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

// ❶ Intro splash: fade‑out setelah load
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  intro.classList.add('fade-out');
});

document.addEventListener('DOMContentLoaded', () => {
  // ❷ Animasi Hero on Load
  document.querySelector('.hero-title').classList.add('show');
  document.querySelector('.hero-subtitle').classList.add('show');
  document.querySelector('.hero .btn').classList.add('show');

  // ❸ Navbar background saat scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ❹ Intersection Observer untuk reveal section
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      '.section-title, .feature-item, .about-text, .about-image, .contact-container'
    )
    .forEach((el) => observer.observe(el));

  // ❺ Form kontak (dummy)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    form.reset();
  });
});
});