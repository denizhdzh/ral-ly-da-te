import { useState, useEffect } from 'react'
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'

const EMPTY = { typeId: '', displayName: '', emoji: '', description: '', order: 0, active: true }

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

export default function GameTypesPage() {
  const [types, setTypes]   = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal]   = useState(null)
  const [form, setForm]     = useState(EMPTY)
  const [saving, setSaving] = useState(false)
  const [toast, setToast]   = useState(null)

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 3000) }

  const load = async () => {
    setLoading(true)
    try {
      const snap = await getDocs(query(collection(db, 'gameTypes'), orderBy('order')))
      setTypes(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { showToast(e.message, 'error') }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const openAdd  = () => { setForm(EMPTY); setModal('add') }
  const openEdit = (t) => { setForm({ typeId: t.id, displayName: t.displayName || '', emoji: t.emoji || '', description: t.description || '', order: t.order ?? 0, active: t.active ?? true }); setModal('edit') }

  const handleSave = async () => {
    const id = form.typeId.trim()
    if (!id) return showToast('Type ID is required', 'error')
    setSaving(true)
    try {
      await setDoc(doc(db, 'gameTypes', id), { displayName: form.displayName, emoji: form.emoji, description: form.description, order: Number(form.order), active: form.active })
      showToast(modal === 'add' ? 'Added' : 'Updated')
      setModal(null)
      await load()
    } catch (e) { showToast(e.message, 'error') }
    finally { setSaving(false) }
  }

  const handleToggle = async (t) => {
    try {
      await updateDoc(doc(db, 'gameTypes', t.id), { active: !t.active })
      setTypes(prev => prev.map(x => x.id === t.id ? { ...x, active: !x.active } : x))
    } catch (e) { showToast(e.message, 'error') }
  }

  const handleDelete = async (t) => {
    if (!window.confirm(`Delete "${t.displayName || t.id}"?`)) return
    try {
      await deleteDoc(doc(db, 'gameTypes', t.id))
      setTypes(prev => prev.filter(x => x.id !== t.id))
      showToast('Deleted')
    } catch (e) { showToast(e.message, 'error') }
  }

  const fatKat = { fontFamily: "'FatKat', system-ui", fontWeight: 'normal' }

  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-3xl text-white" style={fatKat}>Game Types</h1>
        <button onClick={openAdd} className="bg-white text-blue-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors">
          + Add Game Type
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16"><div className="admin-spinner" /></div>
      ) : (
        <div className="bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Order', 'Emoji', 'Display Name', 'ID', 'Description', 'Active', 'Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-blue-400/50 uppercase tracking-widest border-b border-white/[0.08] bg-white/[0.03] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {types.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-14 text-white/20 text-sm">No game types yet.</td></tr>
              ) : types.map(t => (
                <tr key={t.id} className="border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors">
                  <td className="px-4 py-3 text-white/40 text-center text-sm">{t.order}</td>
                  <td className="px-4 py-3 text-xl text-center">{t.emoji}</td>
                  <td className="px-4 py-3 text-white font-medium text-sm">{t.displayName}</td>
                  <td className="px-4 py-3"><code className="text-blue-400/50 text-xs font-mono">{t.id}</code></td>
                  <td className="px-4 py-3 text-white/60 text-sm max-w-[200px] truncate">{t.description}</td>
                  <td className="px-4 py-3"><Toggle active={t.active} onToggle={() => handleToggle(t)} /></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(t)} className="text-xs font-semibold text-blue-300/60 border border-white/10 px-3 py-1.5 rounded-full hover:text-white hover:border-white/25 transition-all">Edit</button>
                      <button onClick={() => handleDelete(t)} className="text-xs font-semibold text-red-400/40 border border-red-400/15 px-3 py-1.5 rounded-full hover:text-red-400/80 hover:border-red-400/30 transition-all">Del</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 bg-blue-950/75 backdrop-blur-sm flex items-center justify-center z-50 p-5" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="bg-blue-900 border border-white/15 rounded-3xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl text-white mb-6" style={fatKat}>{modal === 'add' ? 'Add Game Type' : `Edit: ${form.displayName || form.typeId}`}</h2>

            <div className="mb-3.5">
              <label className={labelCls}>Type ID (no spaces)</label>
              <input value={form.typeId} onChange={e => setForm(f => ({ ...f, typeId: e.target.value.replace(/\s/g, '') }))} placeholder="e.g. thisOrThat" disabled={modal === 'edit'} className={`${inputCls} ${modal === 'edit' ? 'opacity-40 cursor-default' : ''}`} style={{ fontFamily: 'inherit' }} />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className={labelCls}>Display Name</label>
                <input value={form.displayName} onChange={e => setForm(f => ({ ...f, displayName: e.target.value }))} placeholder="This or That" className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className={labelCls}>Emoji</label>
                <input value={form.emoji} onChange={e => setForm(f => ({ ...f, emoji: e.target.value }))} placeholder="🔀" className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
            </div>
            <div className="mb-3.5">
              <label className={labelCls}>Description</label>
              <input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Lifestyle picks" className={inputCls} style={{ fontFamily: 'inherit' }} />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div>
                <label className={labelCls}>Order</label>
                <input type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: e.target.value }))} className={inputCls} style={{ fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className={labelCls}>Active</label>
                <div className="pt-2.5"><Toggle active={form.active} onToggle={() => setForm(f => ({ ...f, active: !f.active }))} /></div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setModal(null)} className="text-sm font-semibold text-blue-300/60 border border-white/10 px-5 py-2.5 rounded-full hover:text-white hover:border-white/25 transition-all">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="bg-white text-blue-900 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors disabled:opacity-50">
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
      <Toast toast={toast} />
    </div>
  )
}
