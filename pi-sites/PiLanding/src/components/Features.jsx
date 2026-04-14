const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M2.25 15.75l5.06-5.06a1.5 1.5 0 012.12 0l3.19 3.19a1.5 1.5 0 002.12 0l5.06-5.06" />
        <circle cx="17.25" cy="7.5" r="2.25" />
      </svg>
    ),
    title: 'Curated Anime Gallery',
    desc: 'Browse thousands of anime-style artworks filtered by style, medium, and theme. Real-time feed updated by the community.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Designer Community',
    desc: 'Connect with designers worldwide who share your passion. Join circles, participate in challenges, and grow together.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Design Resources',
    desc: 'Exclusive brush packs, color palettes, and templates inspired by iconic anime aesthetics. Updated weekly.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'Exposure Analytics',
    desc: 'Track your portfolio views, engagement rates, and follower growth. Understand what resonates with your audience.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    title: 'Commission Marketplace',
    desc: 'Offer your services or commission custom anime-style work. Safe payments, clear contracts, zero hassle.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-iris">Features</span>
          <h2 id="features-heading" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-iris to-mint bg-clip-text text-transparent">
              Create &amp; Share
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            A minimal yet powerful toolkit designed for anime-culture designers who want to focus on craft, not complexity.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group rounded-lg border border-rail/40 bg-surface p-6 transition-colors hover:border-iris/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-iris/10 text-iris group-hover:bg-iris/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold tracking-wider">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
