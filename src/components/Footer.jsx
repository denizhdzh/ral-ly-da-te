import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/favicon.png" alt="Rally" className="w-7 h-7 rounded-lg" />
              <span className="font-extrabold text-lg text-white tracking-[-0.04em]">rally</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              Dating without the algorithm. Real connections, no limits.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/faq', label: 'FAQ' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-blue-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-blue-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-400">
            © {new Date().getFullYear()} Rally. All rights reserved.
          </p>
          <p className="text-xs text-blue-400">iOS and Android coming soon.</p>
        </div>
      </div>
    </footer>
  )
}
