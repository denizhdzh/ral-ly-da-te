import { useState } from 'react'

const ADMIN_EMAIL    = import.meta.env.VITE_ADMIN_EMAIL
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

export default function Login({ onLogin }) {
  const [email, setEmail]       = useState(ADMIN_EMAIL || '')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('rally_admin', '1')
      onLogin()
    } else {
      setError('Wrong email or password.')
    }
  }

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-5">
      <div className="w-full max-w-sm bg-white/[0.07] border border-white/[0.12] rounded-3xl p-11 backdrop-blur-xl">
        <h1 className="text-white text-3xl mb-1" style={{ fontFamily: "'FatKat', system-ui", fontWeight: 'normal' }}>RALLY</h1>
        <p className="text-blue-300/60 text-sm mb-8">Admin Dashboard</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3.5">
            <label className="block text-[11px] font-bold text-blue-400/55 uppercase tracking-widest mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required autoFocus
              className="w-full px-3.5 py-2.5 bg-white/[0.06] border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/35 transition-all placeholder:text-blue-400/25"
              style={{ fontFamily: 'inherit' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-blue-400/55 uppercase tracking-widest mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3.5 py-2.5 bg-white/[0.06] border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/35 transition-all placeholder:text-blue-400/25"
              style={{ fontFamily: 'inherit' }}
            />
          </div>
          {error && <p className="text-red-400/80 text-xs font-semibold mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full bg-white text-blue-900 font-bold text-sm py-3 rounded-full hover:bg-blue-50 transition-colors mt-1"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
