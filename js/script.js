// ==========================================================
// HENOVATE PROPERTY SERVICE LLC — SCRIPT
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile nav toggle ----------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');

  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.main-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Sticky header shadow on scroll ----------
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ---------- Active nav link highlighting ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');

  const highlightNav = () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-link');
      }
    });
  };
  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // ---------- Scroll-reveal animation ----------
  const revealTargets = document.querySelectorAll(
    '.about-card, .service-card, .work-item, .contact-card, .stat-card'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
});