export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(139,92,246,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(249,168,212,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full border border-rail bg-surface px-4 py-1 text-[10px] tracking-[0.25em] uppercase text-muted">
          Anime Culture &times; Design Community
        </span>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Where{' '}
          <span className="bg-gradient-to-r from-iris to-sakura bg-clip-text text-transparent">
            Anime Art
          </span>{' '}
          Meets Modern Design
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
          PiLanding is the creative hub for designers who breathe anime culture.
          Showcase work, discover inspiration, and connect with a global community
          of visual storytellers.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-iris px-8 py-3 text-sm font-semibold tracking-widest uppercase text-white hover:bg-glow transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
          >
            Join the Community
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-rail px-8 py-3 text-sm font-semibold tracking-widest uppercase text-muted hover:text-white hover:border-iris/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
          >
            Explore Features
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '12K+', label: 'Designers' },
            { value: '85K+', label: 'Artworks' },
            { value: '40+', label: 'Countries' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
