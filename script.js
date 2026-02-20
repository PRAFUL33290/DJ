/* DJ Praful D. — Site Web Script */

document.addEventListener('DOMContentLoaded', function () {
  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
    });
  });

  // --- Scroll-triggered fade-in animations ---
  const sections = document.querySelectorAll('.section');
  sections.forEach(function (section) {
    section.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  // --- Contact form handling ---
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    // Show confirmation (no backend)
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Demande envoyée !';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.opacity = '1';
      form.reset();
    }, 3000);
  });
});
