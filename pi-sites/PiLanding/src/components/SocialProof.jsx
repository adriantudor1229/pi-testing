const LOGOS = [
  'CRUNCHYROLL',
  'PIXIV',
  'WACOM',
  'CLIP STUDIO',
  'MEDIBANG',
  'DEVIANART',
]

export default function SocialProof() {
  return (
    <section className="border-y border-rail/40 bg-abyss py-16 px-6" aria-label="Trusted by leading platforms">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-muted mb-10">
        Trusted by creators on
      </p>
      <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {LOGOS.map((name) => (
          <span
            key={name}
            className="text-sm md:text-base font-semibold tracking-[0.15em] text-rail hover:text-muted transition-colors select-none"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            quote: 'PiLanding changed how I discover anime-inspired design. The community is incredibly talented.',
            name: 'Yuki Tanaka',
            role: 'Freelance Illustrator',
          },
          {
            quote: "Finally a platform that understands both design craft and anime aesthetics. It's my daily inspiration source.",
            name: 'Mira Chen',
            role: 'UI/UX Designer',
          },
          {
            quote: 'I landed two commission gigs through PiLanding in my first month. The exposure here is real.',
            name: 'Alex Rivera',
            role: 'Concept Artist',
          },
        ].map((t) => (
          <blockquote
            key={t.name}
            className="rounded-lg border border-rail/40 bg-surface p-6"
          >
            <p className="text-sm leading-relaxed text-muted italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full bg-gradient-to-br from-iris to-sakura"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold text-white">{t.name}</p>
                <p className="text-[10px] tracking-wider uppercase text-muted">{t.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
