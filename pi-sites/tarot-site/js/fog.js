// ============================================
// FOG.JS — Fog Particle System & Effects
// ============================================

const FogSystem = (() => {
  let canvas, ctx;
  let particles = [];
  let animationId = null;
  let width, height;

  const CONFIG = {
    particleCount: 35,
    minRadius: 80,
    maxRadius: 250,
    minSpeed: 0.15,
    maxSpeed: 0.5,
    minOpacity: 0.015,
    maxOpacity: 0.06,
    colors: [
      'rgba(164, 164, 174,', // fog-light
      'rgba(130, 130, 140,', // grayish
      'rgba(201, 168, 76,',  // gold tint (rare)
      'rgba(82, 82, 91,',    // fog-dark
    ],
    goldChance: 0.08,
  };

  class FogParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.radius = Math.max(40, CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius));
      this.x = initial
        ? Math.random() * (width || window.innerWidth)
        : -this.radius * 2;
      this.y = Math.random() * (height || window.innerHeight);

      this.speedX = CONFIG.minSpeed + Math.random() * (CONFIG.maxSpeed - CONFIG.minSpeed);
      // Slight vertical drift
      this.speedY = (Math.random() - 0.5) * 0.15;

      this.opacity = CONFIG.minOpacity + Math.random() * (CONFIG.maxOpacity - CONFIG.minOpacity);
      this.opacitySpeed = (Math.random() - 0.5) * 0.0003;
      this.baseOpacity = this.opacity;

      // Color
      const isGold = Math.random() < CONFIG.goldChance;
      this.color = isGold ? CONFIG.colors[2] : CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
      if (isGold) {
        this.opacity *= 0.4;
        this.baseOpacity = this.opacity;
      }
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Pulse opacity
      this.opacity += this.opacitySpeed;
      if (this.opacity > this.baseOpacity * 1.5 || this.opacity < this.baseOpacity * 0.5) {
        this.opacitySpeed = -this.opacitySpeed;
      }
      this.opacity = Math.max(0.005, Math.min(this.opacity, CONFIG.maxOpacity * 1.5));

      // Wrap around
      if (this.x - this.radius > width + 50) {
        this.reset();
      }
      if (this.y < -this.radius) this.y = height + this.radius;
      if (this.y > height + this.radius) this.y = -this.radius;
    }

    draw(ctx) {
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.radius
      );
      gradient.addColorStop(0, `${this.color} ${this.opacity})`);
      gradient.addColorStop(0.5, `${this.color} ${this.opacity * 0.5})`);
      gradient.addColorStop(1, `${this.color} 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    canvas = document.getElementById('fog-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resize();

    // Create particles
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new FogParticle());
    }

    window.addEventListener('resize', debounce(resize, 200));
    animate();
  }

  function resize() {
    const hero = canvas.parentElement;
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.update();
      p.draw(ctx);
    }

    animationId = requestAnimationFrame(animate);
  }

  function destroy() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    particles = [];
  }

  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  }

  return { init, destroy };
})();
