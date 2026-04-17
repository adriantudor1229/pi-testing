// ============================================
// MAIN.JS — App Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  FogSystem.init();
  MembersModule.load();
  PathwaysModule.load();
  QuotesModule.load();

  // Global scroll-triggered fade-in for sections
  setupScrollAnimations();

  // Smooth scroll for hero CTA
  const cta = document.querySelector('.scroll-cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(cta.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

function setupScrollAnimations() {
  const elements = document.querySelectorAll(
    '.section-title, .hero-content, .site-footer'
  );

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}
