import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const scrollToWaitlist = () => {
    setTimeout(() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[62px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 shrink-0"
        >
          <div className="w-8 h-8 rounded-xl overflow-hidden">
            <img src="/favicon.png" alt="Rally" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold text-[18px] text-white tracking-[-0.04em]">
            rally
          </span>
        </Link>

        {/* Desktop: pill nav */}
        <div className="hidden md:flex items-center gap-0.5 rounded-full bg-white/8 px-1.5 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-semibold px-4 py-1.5 rounded-full transition-colors ${
                isActive(link.path)
                  ? 'bg-white/20 text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop: CTA */}
        <Link
          to="/"
          onClick={scrollToWaitlist}
          className="hidden md:inline-flex items-center gap-1.5 bg-white text-blue-900 text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors shrink-0"
        >
          Join waitlist
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden p-2 -mr-1.5 text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-blue-900 border-t border-white/10 px-5 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold py-3 px-4 rounded-2xl transition-colors ${
                isActive(link.path) ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => { setOpen(false); scrollToWaitlist() }}
            className="mt-3 bg-white text-blue-900 text-sm font-bold px-5 py-3.5 rounded-full text-center hover:bg-blue-50 transition-colors"
          >
            Join waitlist
          </Link>
        </div>
      )}
    </nav>
  )
}
