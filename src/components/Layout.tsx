import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-200 lg:bg-slate-100">
      {/* Sidebar — desktop only */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-slate-200 lg:bg-white lg:z-20">
        <DesktopSidebar />
      </aside>

      {/* Main wrapper: mobile column centrada / desktop offset da sidebar */}
      <div className="flex flex-col max-w-md mx-auto bg-slate-50 min-h-screen shadow-xl relative lg:max-w-none lg:ml-64 lg:shadow-none lg:bg-slate-50">
        <Header />
        <main className="flex-1 pb-20 lg:pb-10 lg:max-w-4xl lg:mx-auto lg:w-full">
          {children}
        </main>
      </div>

      {/* Bottom nav — mobile only */}
      <BottomNav />
    </div>
  )
}

/* ───────── Desktop Sidebar ───────── */

function DesktopSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Brand */}
      <div className="px-5 py-5 border-b border-slate-100">
        <button
          className="flex items-center gap-3 w-full text-left cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
            <span className="text-white font-bold text-base">F</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-none">FAIA</p>
            <p className="text-xs text-slate-400 mt-0.5 leading-none">Framework de Adoção de IA</p>
          </div>
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.id)
          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                active
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
              onClick={() => navigate(item.id)}
            >
              <span className={active ? 'text-indigo-600' : 'text-slate-400'}>
                {item.icon(active)}
              </span>
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Beta · v0.5</span>
          <a
            href="https://github.com/leandroavila74/faia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            title="Ver no GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

/* ───────── Header ───────── */

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isPhaseDetail = location.pathname.startsWith('/framework/') && location.pathname !== '/framework'

  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      {/* Mobile: logo + título / Desktop: só o título da seção atual */}
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center active:bg-indigo-700 hover:bg-indigo-700 transition-colors cursor-pointer shadow-sm hover:shadow-md lg:hidden"
          onClick={() => navigate('/')}
        >
          <span className="text-white font-bold text-sm">F</span>
        </button>
        <div>
          <h1 className="text-sm font-bold text-slate-900 leading-none lg:hidden">FAIA</h1>
          <p className="text-xs text-slate-400 leading-none mt-0.5 lg:hidden">Framework de Adoção de IA</p>
          <p className="hidden lg:block text-sm font-semibold text-slate-700">
            {pageTitles[location.pathname] ?? (isPhaseDetail ? 'Detalhes da Fase' : 'FAIA')}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isPhaseDetail && (
          <button
            className="text-xs text-indigo-600 font-medium px-3 py-1 rounded-full bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-100 transition-colors cursor-pointer"
            onClick={() => navigate('/framework')}
          >
            ← Fases
          </button>
        )}
        {/* GitHub icon — mobile only (desktop tem na sidebar) */}
        <a
          href="https://github.com/leandroavila74/faia"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 active:bg-slate-200 transition-colors cursor-pointer lg:hidden"
          title="Ver no GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
    </header>
  )
}

const pageTitles: Record<string, string> = {
  '/': 'Início',
  '/framework': 'As 7 Fases',
  '/trilhas': 'Trilhas de Capacitação',
  '/recursos': 'Recursos',
}

/* ───────── Nav items (shared) ───────── */

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

/* ───────── Bottom Nav (mobile only) ───────── */

function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-2 py-1 flex items-center justify-around z-10 lg:hidden">
      {navItems.map((item) => {
        const active = isActive(item.id)
        return (
          <button
            key={item.id}
            className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-150 cursor-pointer ${
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
