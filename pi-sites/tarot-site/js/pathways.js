// ============================================
// PATHWAYS.JS — Pathway Explorer Interactions
// ============================================

const PathwaysModule = (() => {
  let pathwaysData = [];

  async function load() {
    try {
      const resp = await fetch('data/pathways.json');
      const data = await resp.json();
      pathwaysData = data.pathways;
      render();
    } catch (err) {
      console.error('Failed to load pathways:', err);
    }
  }

  function render() {
    const container = document.querySelector('.pathways-explorer');
    if (!container) return;

    container.innerHTML = pathwaysData.map((pw, idx) => `
      <div class="pathway-item fade-in" data-index="${idx}">
        <div class="pathway-header">
          <div>
            <span class="pathway-header__name">${pw.name} Pathway</span>
            <span class="pathway-header__members">— ${pw.members.join(', ')}</span>
          </div>
          <span class="pathway-header__toggle">▼</span>
        </div>
        <div class="pathway-details">
          <ul class="sequence-list">
            ${pw.sequences.map(seq => `
              <li class="sequence-entry">
                <span class="sequence-number">${seq.number}</span>
                <div>
                  <div class="sequence-name">${seq.name}</div>
                  <div class="sequence-description">${seq.description}</div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    // Accordion behavior
    container.querySelectorAll('.pathway-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.pathway-item');
        // Close others
        container.querySelectorAll('.pathway-item.expanded').forEach(el => {
          if (el !== item) el.classList.remove('expanded');
        });
        item.classList.toggle('expanded');
      });
    });

    // Fade-in observer
    observeFadeIn(container.querySelectorAll('.fade-in'));
  }

  function observeFadeIn(elements) {
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

    elements.forEach(el => observer.observe(el));
  }

  return { load };
})();
