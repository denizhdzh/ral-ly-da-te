import { useEffect, useState } from 'react'
import { collection, getCountFromServer, query, where, getDocs, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [recent, setRecent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [totalQ, activeQ, inactiveQ, totalGT, activeGT, totalUsers] = await Promise.allSettled([
          getCountFromServer(collection(db, 'gameQuestions')),
          getCountFromServer(query(collection(db, 'gameQuestions'), where('active', '==', true))),
          getCountFromServer(query(collection(db, 'gameQuestions'), where('active', '==', false))),
          getCountFromServer(collection(db, 'gameTypes')),
          getCountFromServer(query(collection(db, 'gameTypes'), where('active', '==', true))),
          getCountFromServer(collection(db, 'users')),
        ])
        const qSnap = await getDocs(collection(db, 'gameQuestions'))
        const byType = {}
        qSnap.forEach(d => { const t = d.data().type || '?'; byType[t] = (byType[t] || 0) + 1 })

        const gtSnap = await getDocs(query(collection(db, 'gameTypes'), orderBy('order')))
        const gtMap = {}
        gtSnap.forEach(d => { gtMap[d.id] = d.data().displayName })

        const recentSnap = await getDocs(query(collection(db, 'gameQuestions'), orderBy('createdAt', 'desc'), limit(5)))
        setRecent(recentSnap.docs.map(d => ({ id: d.id, ...d.data() })))

        const c = (r) => r.status === 'fulfilled' ? r.value.data().count : null
        setStats({ totalQ: c(totalQ), activeQ: c(activeQ), inactiveQ: c(inactiveQ), totalGT: c(totalGT), activeGT: c(activeGT), users: c(totalUsers), byType, gtMap })
      } catch (e) { console.error(e) }
      finally { setLoading(false) }
    }
    load()
  }, [])

  const fatKat = { fontFamily: "'FatKat', system-ui", fontWeight: 'normal' }

  if (loading) return (
    <div className="p-10 flex items-center gap-3 text-blue-300/40">
      <div className="admin-spinner" /> Loading…
    </div>
  )

  const total = stats?.totalQ || 0
  const byTypeEntries = Object.entries(stats?.byType || {}).sort((a, b) => b[1] - a[1])
  const activeRatio = total > 0 ? Math.round((stats.activeQ / total) * 100) : 0

  const StatCard = ({ label, value, sub }) => (
    <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
      <div className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest mb-2">{label}</div>
      <div className="text-4xl text-white mb-1" style={fatKat}>{value ?? '—'}</div>
      {sub && <div className="text-xs text-white/30">{sub}</div>}
    </div>
  )

  return (
    <div>
      <h1 className="text-3xl text-white mb-7" style={fatKat}>Dashboard</h1>

      <div className="grid grid-cols-4 gap-3 mb-5">
        <StatCard label="Total Questions" value={stats?.totalQ} sub={`${activeRatio}% active`} />
        <StatCard label="Active Questions" value={stats?.activeQ} sub={`${stats?.inactiveQ ?? 0} inactive`} />
        <StatCard label="Game Types" value={stats?.totalGT} sub={`${stats?.activeGT ?? 0} active`} />
        <StatCard label="Registered Users" value={stats?.users != null ? stats.users : '—'} sub={stats?.users == null ? 'no users collection' : 'from Firestore'} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <div className="text-[10px] font-bold text-blue-400/50 uppercase tracking-widest mb-4">Questions by Type</div>
          {byTypeEntries.length === 0
            ? <div className="text-white/20 text-sm">No data yet.</div>
            : byTypeEntries.map(([type, count]) => (
              <div key={type} className="flex items-center gap-3 mb-2.5">
                <div className="text-xs font-semibold text-white/70 w-36 truncate">{stats.gtMap[type] || type}</div>
                <div className="flex-1 bg-white/[0.06] rounded h-1.5 overflow-hidden">
                  <div className="h-full bg-blue-200/50 rounded" style={{ width: total ? `${(count / total) * 100}%` : '0%' }} />
                </div>
                <div className="text-xs font-bold text-white/50 w-8 text-right">{count}</div>
              </div>
            ))
          }
        </div>

        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <div className="text-[10px] font-bold text-blue-400/50 uppercase tracking-widest mb-4">Recently Added</div>
          {recent.length === 0
            ? <div className="text-white/20 text-sm">No questions yet.</div>
            : recent.map(q => (
              <div key={q.id} className="border-b border-white/[0.06] pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                <div className="text-[10px] font-bold text-blue-400/50 uppercase tracking-wider mb-1">{stats.gtMap[q.type] || q.type}</div>
                <div className="text-sm text-white truncate">{q.question || `${q.optionA} vs ${q.optionB}`}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
