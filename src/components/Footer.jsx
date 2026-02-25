import { Link, useNavigate } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export default function Footer() {
  const navigate = useNavigate()

  const scrollToWaitlist = () => {
    navigate('/')
    setTimeout(() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }), 120)
  }

  return (
    <footer className="border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 py-16 items-start">

          {/* Left — brand + tagline + CTA */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-7">
              <img src="/favicon.png" alt="Rally" className="w-9 h-9 rounded-xl" />
              <span className="font-extrabold text-xl text-white tracking-[-0.04em]">rally</span>
            </Link>

            <p className="font-extrabold leading-[1.05] mb-8 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.035em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Dating without<br />
              <span className="italic text-blue-300">the algorithm.</span>
            </p>

            <button
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors mb-8"
            >
              Pre-order on App Store
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-400">iPhone only · App Store</span>
            </div>
          </div>

          {/* Right — big stacked links */}
          <div className="flex flex-col md:pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-center justify-between py-4 border-b border-white/[0.07] last:border-0 text-white/25 hover:text-white transition-colors"
              >
                <span
                  className="font-extrabold tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(22px, 3.5vw, 42px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  {link.label}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                >
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-blue-600/70">© {new Date().getFullYear()} Rally. All rights reserved.</p>
          <p className="text-xs text-blue-600/70">Made with love, no dark patterns.</p>
        </div>

      </div>
    </footer>
  )
}
