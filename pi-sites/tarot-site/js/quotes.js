// ============================================
// QUOTES.JS — Quote Randomizer
// ============================================

const QuotesModule = (() => {
  let quotesData = [];
  let lastIndex = -1;

  async function load() {
    try {
      const resp = await fetch('data/quotes.json');
      const data = await resp.json();
      quotesData = data.quotes;
      displayRandom();
      setupRefresh();
    } catch (err) {
      console.error('Failed to load quotes:', err);
    }
  }

  function displayRandom() {
    const display = document.querySelector('.quote-display');
    if (!display || quotesData.length === 0) return;

    // Pick a random quote different from the last one
    let idx;
    if (quotesData.length <= 1) {
      idx = 0;
    } else {
      do {
        idx = Math.floor(Math.random() * quotesData.length);
      } while (idx === lastIndex);
    }
    lastIndex = idx;

    const quote = quotesData[idx];
    const attribution = quote.codename
      ? `— ${quote.codename}`
      : `— ${quote.speaker}`;

    display.innerHTML = `
      <p class="quote-text">"${quote.text}"</p>
      <footer class="quote-attribution">${attribution}</footer>
    `;

    // Re-trigger animation
    display.style.animation = 'none';
    display.offsetHeight; // force reflow
    display.style.animation = '';
  }

  function setupRefresh() {
    const btn = document.querySelector('.quote-refresh');
    if (!btn) return;

    btn.addEventListener('click', displayRandom);
  }

  return { load };
})();
