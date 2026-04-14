import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-void/80 backdrop-blur-md border-b border-rail/40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="PiLanding home">
          <span className="text-xl font-bold tracking-widest text-iris group-hover:text-iris-light transition-colors">
            PI<span className="text-sakura"> //</span> LANDING
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider text-muted">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="ml-2 inline-block rounded-md bg-iris px-5 py-2 text-white text-xs font-semibold tracking-widest uppercase hover:bg-glow transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-rail/40 bg-void/95 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-sm tracking-wider text-muted">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                className="inline-block rounded-md bg-iris px-5 py-2 text-white text-xs font-semibold tracking-widest uppercase"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
