const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Gallery', 'Marketplace'],
  Community: ['Circles', 'Challenges', 'Events', 'Blog'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="border-t border-rail/40 bg-void py-16 px-6" aria-label="Site footer">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-lg font-bold tracking-widest text-iris" aria-label="PiLanding home">
              PI<span className="text-sakura"> //</span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              The creative platform where anime culture meets design excellence.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-rail/40 pt-8">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} PiLanding. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['X / Twitter', 'Discord', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris rounded"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
