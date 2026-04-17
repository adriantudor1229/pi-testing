// ============================================
// MEMBERS.JS — Member Data, Filtering, Modals
// ============================================

const MembersModule = (() => {
  let membersData = [];
  let currentFilter = 'all';

  async function load() {
    try {
      const resp = await fetch('data/members.json');
      const data = await resp.json();
      membersData = data.members;
      renderFilter();
      renderCards(membersData);
      setupModal();
    } catch (err) {
      console.error('Failed to load members:', err);
    }
  }

  function renderFilter() {
    const container = document.querySelector('.member-filter');
    if (!container) return;

    // Gather unique pathways
    const pathways = ['all', ...new Set(membersData.map(m => m.pathway))];

    container.innerHTML = pathways.map(p => {
      const label = p === 'all' ? 'All' : p;
      const active = p === currentFilter ? ' member-filter__btn--active' : '';
      return `<button class="member-filter__btn${active}" data-filter="${p}">${label}</button>`;
    }).join('');

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.member-filter__btn');
      if (!btn) return;

      currentFilter = btn.dataset.filter;
      // Update active state
      container.querySelectorAll('.member-filter__btn').forEach(b => b.classList.remove('member-filter__btn--active'));
      btn.classList.add('member-filter__btn--active');

      // Filter and render
      const filtered = currentFilter === 'all'
        ? membersData
        : membersData.filter(m => m.pathway === currentFilter);
      renderCards(filtered);
    });
  }

  function renderCards(members) {
    const grid = document.querySelector('.members-grid');
    if (!grid) return;

    grid.innerHTML = members.map(m => `
      <div class="member-card fade-in" data-codename="${m.codename}">
        <div class="card-inner">
          <div class="card-front">
            <h3 class="member-card__codename">${m.codename}</h3>
            <p class="member-card__realname">${m.realName}</p>
            <p class="member-card__tagline">${m.tagline}</p>
            <p class="member-card__pathway">${m.pathway}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click handlers
    grid.querySelectorAll('.member-card').forEach(card => {
      card.addEventListener('click', () => {
        const codename = card.dataset.codename;
        openModal(codename);
      });
    });

    // Observe for fade-in
    observeFadeIn(grid.querySelectorAll('.fade-in'));
  }

  function setupModal() {
    const modal = document.getElementById('member-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) closeModal(modal);
    });
  }

  function openModal(codename) {
    const member = membersData.find(m => m.codename === codename);
    if (!member) return;

    const modal = document.getElementById('member-modal');
    const body = modal.querySelector('.modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
      <h2 class="modal-body__codename">${member.codename}</h2>
      <p class="modal-body__realname">${member.realName}</p>
      <span class="modal-body__pathway-badge">${member.pathway} — ${member.sequence}</span>

      <div class="modal-body__section">
        <h3>Background</h3>
        <p>${member.background}</p>
      </div>

      <div class="modal-body__section">
        <h3>Abilities</h3>
        <p>${member.abilities}</p>
      </div>

      <div class="modal-body__section">
        <h3>Tarot Club Role</h3>
        <p>${member.role}</p>
      </div>

      ${member.quotes.length > 0 ? `
        <div class="modal-body__section">
          <h3>Notable Quotes</h3>
          <ul class="modal-body__quotes">
            ${member.quotes.map(q => `<li>"${q}"</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    `;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
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
