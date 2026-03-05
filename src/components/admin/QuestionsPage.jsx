import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, serverTimestamp, writeBatch } from 'firebase/firestore'
import { db } from '../../firebase'

const AUTO_FILL = {
  redFlag: { optionA: '🚩 Red Flag', optionB: '✅ Nah' },
  hotTake: { optionA: 'Agree',       optionB: 'Disagree' },
}

const JSON_PLACEHOLDER = `[
  { "type": "thisOrThat", "question": "", "optionA": "Beach", "optionB": "Mountains" },
  { "type": "hotTake", "question": "Pineapple on pizza is fine", "optionA": "Agree", "optionB": "Disagree" }
]`

const EXAMPLE = `[
  { "type": "thisOrThat", "question": "", "optionA": "Beach", "optionB": "Mountains" },
  { "type": "thisOrThat", "question": "", "optionA": "Coffee", "optionB": "Tea" },
  { "type": "hotTake", "question": "Pineapple on pizza is fine", "optionA": "Agree", "optionB": "Disagree" },
  { "type": "redFlag", "question": "They reply with one word", "optionA": "🚩 Red Flag", "optionB": "✅ Nah" },
  { "type": "deepTalk", "question": "What would you do with one free year?", "optionA": "Travel", "optionB": "Build something" }
]`

function ExampleBlock({ onUse }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(EXAMPLE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="mb-4 rounded-xl border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08]">
        <span className="text-[10px] font-bold text-blue-400/50 uppercase tracking-widest">Format Example</span>
        <div className="flex gap-2">
          <button onClick={copy} className="text-xs font-semibold text-blue-300/60 border border-white/10 px-3 py-1 rounded-full hover:text-white hover:border-white/25 transition-all">
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button onClick={() => onUse(EXAMPLE)} className="text-xs font-semibold text-blue-900 bg-white/90 px-3 py-1 rounded-full hover:bg-white transition-all">
            Use
          </button>
        </div>
      </div>
      <pre className="text-[11px] text-blue-200/50 px-4 py-3 overflow-x-auto leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>{EXAMPLE}</pre>
    </div>
  )
}

function Toggle({ active, onToggle }) {
  return (
    <div onClick={onToggle} className={`relative w-9 h-5 rounded-full border cursor-pointer transition-colors ${active ? 'bg-emerald-400/30 border-emerald-400/40' : 'bg-white/10 border-white/12'}`}>
      <div className={`admin-toggle-thumb ${active ? 'on' : ''}`} style={{ transform: active ? 'translateX(16px)' : 'translateX(0)' }} />
    </div>
  )
}

function Toast({ toast }) {
  if (!toast) return null
  return (
    <div className={`toast-in fixed bottom-7 right-7 bg-white/10 backdrop-blur-xl border rounded-2xl px-5 py-3.5 text-sm font-semibold text-white z-50 ${toast.type === 'error' ? 'border-red-400/40 border-l-4 border-l-red-400/80' : 'border-white/15 border-l-4 border-l-emerald-400/80'}`}>
      {toast.msg}
    </div>
  )
}

const inputCls = "w-full px-3.5 py-2.5 bg-white/[0.06] border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/35 transition-all placeholder:text-blue-400/20"
const labelCls = "block text-[11px] font-bold text-blue-400/55 uppercase tracking-widest mb-1.5"

export default function QuestionsPage() {
  const [questions, setQuestions]     = useState([])
  const [gameTypes, setGameTypes]     = useState([])
  const [loading, setLoading]         = useState(true)
  const [filterType, setFilterType]   = useState('all')
  const [filterActive, setFilterActive] = useState('all')
  const [addTab, setAddTab]           = useState('form')
  const [form, setForm]               = useState({ type: '', question: '', optionA: '', optionB: '' })
  const [jsonText, setJsonText]       = useState('')
  const [saving, setSaving]           = useState(false)
  const [toast, setToast]             = useState(null)
  const [jsonResult, setJsonResult]   = useState(null)

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 3500) }

  const loadAll = async () => {
    setLoading(true)
    try {
      const [gtSnap, qSnap] = await Promise.all([
        getDocs(query(collection(db, 'gameTypes'), orderBy('order'))),
        getDocs(query(collection(db, 'gameQuestions'), orderBy('createdAt', 'desc'))),
      ])
      setGameTypes(gtSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      setQuestions(qSnap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { showToast(e.message, 'error') }
    finally { setLoading(false) }
  }

  useEffect(() => { loadAll() }, [])

  const handleTypeChange = (type) => {
    const fill = AUTO_FILL[type] || { optionA: '', optionB: '' }
    setForm(f => ({ ...f, type, ...fill }))
  }

  const filtered = questions.filter(q => {
    if (filterType !== 'all' && q.type !== filterType) return false
    if (filterActive === 'active' && !q.active) return false
    if (filterActive === 'inactive' && q.active) return false
    return true
  })

  const handleToggle = async (q) => {
    try {
      await updateDoc(doc(db, 'gameQuestions', q.id), { active: !q.active })
      setQuestions(prev => prev.map(x => x.id === q.id ? { ...x, active: !x.active } : x))
    } catch (e) { showToast(e.message, 'error') }
  }

  const handleDelete = async (q) => {
    if (!window.confirm('Delete this question?')) return
    try {
      await deleteDoc(doc(db, 'gameQuestions', q.id))
      setQuestions(prev => prev.filter(x => x.id !== q.id))
      showToast('Deleted')
    } catch (e) { showToast(e.message, 'error') }
  }

  const handleAdd = async () => {
    if (!form.type) return showToast('Select a game type', 'error')
    if (!form.optionA.trim() || !form.optionB.trim()) return showToast('Option A and B are required', 'error')
    setSaving(true)
    try {
      const ref = await addDoc(collection(db, 'gameQuestions'), { type: form.type, question: form.question.trim(), optionA: form.optionA.trim(), optionB: form.optionB.trim(), active: true, createdAt: serverTimestamp() })
      setQuestions(prev => [{ id: ref.id, type: form.type, question: form.question.trim(), optionA: form.optionA.trim(), optionB: form.optionB.trim(), active: true }, ...prev])
      const fill = AUTO_FILL[form.type] || { optionA: '', optionB: '' }
      setForm(f => ({ ...f, question: '', ...fill }))
      showToast('Question added')
    } catch (e) { showToast(e.message, 'error') }
    finally { setSaving(false) }
  }

  const handleBulkImport = async () => {
    setJsonResult(null)
    let parsed
    try {
      parsed = JSON.parse(jsonText)
      if (!Array.isArray(parsed)) throw new Error('Must be a JSON array')
    } catch (e) { setJsonResult({ ok: false, msg: 'Parse error: ' + e.message }); return }
    setSaving(true)
    try {
      let total = 0
      for (let i = 0; i < parsed.length; i += 500) {
        const batch = writeBatch(db)
        parsed.slice(i, i + 500).forEach(item => {
          batch.set(doc(collection(db, 'gameQuestions')), { type: item.type || '', question: item.question || '', optionA: item.optionA || '', optionB: item.optionB || '', active: true, createdAt: serverTimestamp() })
        })
        await batch.commit()
        total += Math.min(500, parsed.length - i)
      }
      setJsonResult({ ok: true, msg: `${total} questions imported.` })
      setJsonText('')
      await loadAll()
    } catch (e) { setJsonResult({ ok: false, msg: 'Import failed: ' + e.message }) }
    finally { setSaving(false) }
  }

  const typeLabel = (id) => { const gt = gameTypes.find(g => g.id === id); return gt ? `${gt.emoji} ${gt.displayName}` : id }
  const fatKat = { fontFamily: "'FatKat', system-ui", fontWeight: 'normal' }
  const selectCls = "px-3.5 py-2 bg-white/[0.07] border border-white/10 rounded-full text-blue-200/80 text-sm font-semibold outline-none cursor-pointer"

  return (
    <div>
      <h1 className="text-3xl text-white mb-7" style={fatKat}>Questions</h1>

      {/* Add Panel */}
      <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-xl mb-5">
        <div className="text-[10px] font-bold text-blue-400/50 uppercase tracking-widest mb-4">Add Questions</div>

        <div className="flex gap-1 bg-white/[0.05] border border-white/10 rounded-xl p-1 w-fit mb-5">
          {['form', 'json'].map(tab => (
            <button key={tab} onClick={() => setAddTab(tab)} className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all ${addTab === tab ? 'bg-white/12 text-white' : 'text-blue-300/50 hover:text-blue-200/80'}`}>
              {tab === 'form' ? 'Single' : 'JSON Bulk'}
            </button>
          ))}
        </div>

        {addTab === 'form' ? (
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Game Type</label>
                <select value={form.type} onChange={e => handleTypeChange(e.target.value)} className={inputCls} style={{ fontFamily: 'inherit' }}>
                  <option value="">Select type…</option>
                  {gameTypes.map(gt => <option key={gt.id} value={gt.id}>{gt.emoji} {gt.displayName}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Question <span className="text-blue-400/30 normal-case tracking-normal font-medium">(empty = A vs B)</span></label>
                <input value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} placeholder="e.g. Pineapple on pizza is fine" className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className={labelCls}>Option A</label>
                <input value={form.optionA} onChange={e => setForm(f => ({ ...f, optionA: e.target.value }))} placeholder="Option A" className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className={labelCls}>Option B</label>
                <input value={form.optionB} onChange={e => setForm(f => ({ ...f, optionB: e.target.value }))} placeholder="Option B" className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
            </div>
            <button onClick={handleAdd} disabled={saving} className="bg-white text-blue-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors disabled:opacity-50">
              {saving ? <><span className="admin-spinner-sm mr-2" />Adding…</> : '+ Add Question'}
            </button>
          </div>
        ) : (
          <div>
            {/* Example block */}
            <ExampleBlock onUse={(ex) => { setJsonText(ex); setJsonResult(null) }} />
            <textarea value={jsonText} onChange={e => { setJsonText(e.target.value); setJsonResult(null) }} placeholder={JSON_PLACEHOLDER}
              className="w-full px-3.5 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white/80 text-xs outline-none focus:border-white/35 transition-all placeholder:text-blue-400/20 min-h-[180px] resize-y mb-3"
              style={{ fontFamily: "'Courier New', monospace" }} />
            {jsonResult && <p className={`text-xs font-semibold mb-3 ${jsonResult.ok ? 'text-emerald-400/80' : 'text-red-400/80'}`}>{jsonResult.msg}</p>}
            <button onClick={handleBulkImport} disabled={saving || !jsonText.trim()} className="bg-white text-blue-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors disabled:opacity-50">
              {saving ? <><span className="admin-spinner-sm mr-2" />Importing…</> : 'Import JSON'}
            </button>
          </div>
        )}
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <select value={filterType} onChange={e => setFilterType(e.target.value)} className={selectCls} style={{ fontFamily: 'inherit' }}>
          <option value="all">All Types</option>
          {gameTypes.map(gt => <option key={gt.id} value={gt.id}>{gt.emoji} {gt.displayName}</option>)}
        </select>
        <select value={filterActive} onChange={e => setFilterActive(e.target.value)} className={selectCls} style={{ fontFamily: 'inherit' }}>
          <option value="all">All status</option>
          <option value="active">Active only</option>
          <option value="inactive">Inactive only</option>
        </select>
        <span className="ml-auto text-xs font-semibold text-white/30">{filtered.length} question{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-16"><div className="admin-spinner" /></div>
      ) : (
        <div className="bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Type', 'Question', 'Option A', 'Option B', 'Active', 'Del'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-blue-400/50 uppercase tracking-widest border-b border-white/[0.08] bg-white/[0.03] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-14 text-white/20 text-sm">No questions match this filter.</td></tr>
              ) : filtered.map(q => (
                <tr key={q.id} className="border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors">
                  <td className="px-4 py-3 text-blue-300/60 text-sm whitespace-nowrap">{typeLabel(q.type)}</td>
                  <td className="px-4 py-3 max-w-[220px] truncate text-sm" style={{ color: q.question ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.25)', fontStyle: q.question ? 'normal' : 'italic' }}>
                    {q.question || '— A vs B'}
                  </td>
                  <td className="px-4 py-3 text-white/80 text-sm max-w-[160px] truncate">{q.optionA}</td>
                  <td className="px-4 py-3 text-white/80 text-sm max-w-[160px] truncate">{q.optionB}</td>
                  <td className="px-4 py-3"><Toggle active={q.active} onToggle={() => handleToggle(q)} /></td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleDelete(q)} className="text-xs font-semibold text-red-400/40 border border-red-400/15 px-3 py-1.5 rounded-full hover:text-red-400/80 hover:border-red-400/30 transition-all">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Toast toast={toast} />
    </div>
  )
}
