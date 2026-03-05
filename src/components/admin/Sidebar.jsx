const NAV = [
  { id: 'dashboard', label: 'Dashboard',   icon: '▦' },
  { id: 'gameTypes', label: 'Game Types',  icon: '◈' },
  { id: 'questions', label: 'Questions',   icon: '◎' },
]

export default function Sidebar({ page, setPage, onLogout }) {
  return (
    <aside className="w-52 min-w-[208px] bg-blue-900 border-r border-white/[0.08] flex flex-col h-screen sticky top-0 overflow-y-auto backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/[0.08]">
        <span className="text-white text-lg" style={{ fontFamily: "'FatKat', system-ui", fontWeight: 'normal' }}>RALLY</span>
        <span className="text-[9px] font-bold text-blue-300/90 bg-white/[0.12] border border-white/[0.15] px-2 py-0.5 rounded-full uppercase tracking-wider">Admin</span>
      </div>

      <nav className="p-2 flex-1">
        {NAV.map(item => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all mb-0.5
              ${page === item.id
                ? 'bg-white/10 text-white'
                : 'text-blue-300/50 hover:bg-white/[0.06] hover:text-blue-200/90'
              }`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-white/[0.08]">
        <button
          onClick={onLogout}
          className="w-full py-2 border border-white/10 rounded-full text-blue-400/40 text-xs font-semibold hover:border-white/20 hover:text-blue-300/70 transition-all"
        >
          Sign Out
        </button>
      </div>
    </aside>
  )
}
