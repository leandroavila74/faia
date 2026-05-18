import { useNavigate } from 'react-router-dom'
import { phases, coverTags } from '../data/phases'

const phaseColors: Record<string, string> = {
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
  blue: 'bg-blue-600',
  amber: 'bg-amber-500',
  emerald: 'bg-emerald-600',
  rose: 'bg-rose-600',
  orange: 'bg-orange-500',
}

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="px-4 py-6 space-y-6 lg:px-8 lg:py-8">
      {/* Desktop: grid 2 colunas (hero+tags | journey) */}
      <div className="lg:grid lg:grid-cols-5 lg:gap-8 lg:items-start space-y-6 lg:space-y-0">
        {/* Coluna esquerda */}
        <div className="lg:col-span-3 space-y-5">
          {/* Hero */}
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-2xl p-5 text-white lg:p-8 shadow-xl shadow-indigo-200 ring-1 ring-indigo-500/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Tech Leads Club</span>
            </div>
            <h1 className="text-2xl font-bold leading-tight mb-2 lg:text-3xl">Framework de Adoção de IA</h1>
            <p className="text-indigo-100 text-sm leading-relaxed lg:text-base">
              Um guia de 7 fases para times de engenharia que querem adotar IA de forma estruturada e sustentável —
              do diagnóstico organizacional à escala corporativa.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs bg-white/20 rounded-full px-3 py-1 text-indigo-100">Beta · v0.5</span>
              <span className="text-xs bg-white/20 rounded-full px-3 py-1 text-indigo-100">Gratuito</span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">O que o framework cobre</p>
            <div className="flex flex-wrap gap-2">
              {coverTags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA — desktop only nesta coluna */}
          <button
            className="hidden lg:block w-full bg-indigo-600 text-white rounded-xl py-3.5 font-semibold text-sm hover:bg-indigo-700 active:bg-indigo-700 transition-all duration-200 cursor-pointer shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0"
            onClick={() => navigate('/framework')}
          >
            Explorar todas as fases →
          </button>
        </div>

        {/* Coluna direita — Journey Map */}
        <div className="lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Mapa da jornada</p>
          <div className="flex flex-col gap-2">
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-150 text-left cursor-pointer group shadow-sm"
                onClick={() => navigate(`/framework/${phase.id}`)}
              >
                <div className={`${phaseColors[phase.color]} w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  {phase.id}
                </div>
                <span className="text-sm font-medium text-slate-700 flex-1 group-hover:text-slate-900 transition-colors duration-150">{phase.shortTitle}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-slate-300 flex-shrink-0 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — mobile only */}
      <button
        className="lg:hidden w-full bg-indigo-600 text-white rounded-xl py-3.5 font-semibold text-sm active:bg-indigo-700 transition-all duration-200 cursor-pointer shadow-md shadow-indigo-200"
        onClick={() => navigate('/framework')}
      >
        Explorar todas as fases →
      </button>

      {/* Footer note */}
      <p className="text-xs text-center text-slate-400 pb-2">
        Construído com base em experiência de devs e líderes técnicos da comunidade{' '}
        <span className="font-medium text-slate-500">Tech Leads Club</span>
      </p>
    </div>
  )
}
