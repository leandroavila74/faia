import { useParams, useNavigate } from 'react-router-dom'
import { phases } from '../data/phases'
import { Phase1Content } from '../phases/Phase1'
import { Phase2Content } from '../phases/Phase2'
import { Phase3Content } from '../phases/Phase3'
import { Phase4Content } from '../phases/Phase4'
import { Phase5Content } from '../phases/Phase5'
import { Phase6Content } from '../phases/Phase6'
import { Phase7Content } from '../phases/Phase7'

const colorMap: Record<string, { bg: string; text: string; num: string; border: string }> = {
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', num: 'bg-indigo-600', border: 'border-indigo-200' },
  violet: { bg: 'bg-violet-600', text: 'text-violet-600', num: 'bg-violet-600', border: 'border-violet-200' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', num: 'bg-blue-600', border: 'border-blue-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', num: 'bg-amber-500', border: 'border-amber-200' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', num: 'bg-emerald-600', border: 'border-emerald-200' },
  rose: { bg: 'bg-rose-600', text: 'text-rose-600', num: 'bg-rose-600', border: 'border-rose-200' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', num: 'bg-orange-500', border: 'border-orange-200' },
}

const contentMap: Record<number, React.ComponentType> = {
  1: Phase1Content,
  2: Phase2Content,
  3: Phase3Content,
  4: Phase4Content,
  5: Phase5Content,
  6: Phase6Content,
  7: Phase7Content,
}

export function PhaseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const phaseId = parseInt(id ?? '1')
  const phase = phases.find((p) => p.id === phaseId)

  if (!phase) {
    return (
      <div className="px-4 py-10 text-center">
        <p className="text-slate-500">Fase não encontrada.</p>
      </div>
    )
  }

  const c = colorMap[phase.color]
  const ContentComponent = contentMap[phase.id]

  return (
    <div>
      {/* Phase header */}
      <div className={`${c.bg} px-4 pt-4 pb-5`}>
        <button
          className="flex items-center gap-1 text-white/70 text-xs mb-3 active:opacity-80"
          onClick={() => navigate('/framework')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
        <div className="flex items-start gap-3">
          <div className="bg-white/20 rounded-xl w-10 h-10 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {phase.id}
          </div>
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-0.5">Fase {phase.id}</p>
            <h2 className="text-white font-bold text-lg leading-tight">{phase.title}</h2>
          </div>
        </div>
        <p className="text-white/80 text-xs italic mt-3 leading-relaxed">"{phase.philosophy}"</p>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-px bg-slate-200 border-b border-slate-200">
        {phase.meta.map((m, i) => (
          <div key={i} className="bg-white px-3 py-2">
            <p className="text-xs text-slate-400 font-medium">{m.label}</p>
            <p className="text-xs text-slate-700 font-semibold mt-0.5">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Objective */}
      <div className="px-4 py-4 bg-slate-50 border-b border-slate-200">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Objetivo da fase</p>
        <p className="text-sm text-slate-600 leading-relaxed">{phase.objective}</p>
      </div>

      {/* Phase-specific content */}
      <div className="px-4 py-4">
        <ContentComponent />
      </div>

      {/* Navigation between phases */}
      <div className="flex gap-3 px-4 pb-6">
        {phaseId > 1 && (
          <button
            className="flex-1 flex items-center justify-center gap-1 border border-slate-200 rounded-xl py-3 text-sm text-slate-600 font-medium active:bg-slate-50"
            onClick={() => navigate(`/framework/${phaseId - 1}`)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Fase {phaseId - 1}
          </button>
        )}
        {phaseId < 7 && (
          <button
            className={`flex-1 flex items-center justify-center gap-1 ${c.bg} rounded-xl py-3 text-sm text-white font-medium active:opacity-90`}
            onClick={() => navigate(`/framework/${phaseId + 1}`)}
          >
            Fase {phaseId + 1}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
