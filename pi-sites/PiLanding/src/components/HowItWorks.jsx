const STEPS = [
  {
    num: '01',
    title: 'Create Your Portfolio',
    desc: 'Upload your anime-inspired designs. Our smart tagging system categorizes your work automatically for maximum discoverability.',
  },
  {
    num: '02',
    title: 'Engage the Community',
    desc: 'Follow designers, join circles, enter weekly challenges. The algorithm rewards genuine engagement with organic reach.',
  },
  {
    num: '03',
    title: 'Grow Your Reach',
    desc: 'Track analytics, land commissions, and build a following that translates into real-world creative opportunities.',
  },
]

const PLANS = [
  {
    name: 'Explorer',
    price: 'Free',
    desc: 'Perfect for browsing and getting started.',
    features: ['Browse full gallery', 'Join 3 circles', 'Basic profile', 'Weekly inspiration digest'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Creator',
    price: '$9',
    period: '/mo',
    desc: 'For active designers who want full exposure.',
    features: [
      'Unlimited uploads',
      'Priority in feeds',
      'Analytics dashboard',
      'Commission marketplace',
      'Custom portfolio URL',
    ],
    cta: 'Go Creator',
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$29',
    period: '/mo',
    desc: 'For teams and professional studios.',
    features: [
      'Everything in Creator',
      'Team accounts (up to 10)',
      'API access',
      'Dedicated support',
      'Featured placement',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* How It Works */}
      <section id="how-it-works" className="border-t border-rail/40 bg-abyss py-24 px-6" aria-labelledby="hiw-heading">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-sakura">How It Works</span>
            <h2 id="hiw-heading" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Three Steps to{' '}
              <span className="bg-gradient-to-r from-sakura to-iris bg-clip-text text-transparent">
                Unlimited Exposure
              </span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="relative text-center md:text-left">
                <p className="text-4xl font-bold text-iris/20" aria-hidden="true">{s.num}</p>
                <h3 className="mt-2 text-base font-semibold tracking-wider">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-mint">Pricing</span>
            <h2 id="pricing-heading" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              Start free. Upgrade when you need more reach and tools.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-8 transition-colors ${
                  plan.highlight
                    ? 'border-iris bg-surface shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)]'
                    : 'border-rail/40 bg-surface'
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-iris/20 px-3 py-0.5 text-[10px] font-semibold tracking-widest uppercase text-iris">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold tracking-wider">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.desc}</p>
                <p className="mt-6 text-4xl font-bold">
                  {plan.price}
                  {plan.period && <span className="text-base font-normal text-muted">{plan.period}</span>}
                </p>

                <ul className="mt-6 space-y-3" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`mt-8 block w-full rounded-md py-3 text-center text-xs font-semibold tracking-widest uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris ${
                    plan.highlight
                      ? 'bg-iris text-white hover:bg-glow'
                      : 'border border-rail text-muted hover:text-white hover:border-iris/60'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
