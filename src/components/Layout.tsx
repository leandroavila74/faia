import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto relative shadow-xl">
      <Header />
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isPhaseDetail = location.pathname.startsWith('/framework/') && location.pathname !== '/framework'

  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center active:bg-indigo-700 transition-colors"
          onClick={() => navigate('/')}
        >
          <span className="text-white font-bold text-sm">F</span>
        </button>
        <div>
          <h1 className="text-sm font-bold text-slate-900 leading-none">FAIA</h1>
          <p className="text-xs text-slate-400 leading-none mt-0.5">Framework de Adoção de IA</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isPhaseDetail && (
          <button
            className="text-xs text-indigo-600 font-medium px-3 py-1 rounded-full bg-indigo-50 active:bg-indigo-100"
            onClick={() => navigate('/framework')}
          >
            ← Fases
          </button>
        )}
        <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
          TL
        </div>
      </div>
    </header>
  )
}

const navItems = [
  {
    id: '/',
    label: 'Início',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: '/framework',
    label: 'Framework',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    id: '/trilhas',
    label: 'Trilhas',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: '/recursos',
    label: 'Recursos',
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-2 py-1 flex items-center justify-around z-10">
      {navItems.map((item) => {
        const active = isActive(item.id)
        return (
          <button
            key={item.id}
            className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors ${
              active ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
            }`}
            onClick={() => navigate(item.id)}
          >
            {item.icon(active)}
            <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
