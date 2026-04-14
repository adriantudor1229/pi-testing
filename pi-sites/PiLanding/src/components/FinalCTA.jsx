export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-rail/40 bg-abyss py-24 px-6"
      aria-labelledby="cta-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-iris">Ready?</span>
        <h2
          id="cta-heading"
          className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
        >
          Join{' '}
          <span className="bg-gradient-to-r from-iris via-sakura to-mint bg-clip-text text-transparent">
            12,000+ Designers
          </span>{' '}
          Who Get It
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Stop creating in a vacuum. PiLanding connects your anime-inspired work
          with the people who truly appreciate it. Free to start, no credit card required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-iris px-10 py-3.5 text-sm font-semibold tracking-widest uppercase text-white hover:bg-glow transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
          >
            Create Free Account
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-muted">
          Free forever plan available &middot; No credit card &middot; Cancel anytime
        </p>
      </div>
    </section>
  )
}
