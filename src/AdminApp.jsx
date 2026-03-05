import { useState } from 'react'
import Login from './components/admin/Login'
import Sidebar from './components/admin/Sidebar'
import Dashboard from './components/admin/Dashboard'
import GameTypesPage from './components/admin/GameTypesPage'
import QuestionsPage from './components/admin/QuestionsPage'
import './admin.css'

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('rally_admin') === '1')
  const [page, setPage] = useState('dashboard')

  const handleLogout = () => {
    localStorage.removeItem('rally_admin')
    setLoggedIn(false)
  }

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />

  return (
    <div className="flex min-h-screen bg-blue-950">
      <Sidebar page={page} setPage={setPage} onLogout={handleLogout} />
      <main className="flex-1 p-10 overflow-y-auto min-w-0">
        {page === 'dashboard' && <Dashboard />}
        {page === 'gameTypes' && <GameTypesPage />}
        {page === 'questions' && <QuestionsPage />}
      </main>
    </div>
  )
}
