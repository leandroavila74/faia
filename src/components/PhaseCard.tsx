import { useNavigate } from 'react-router-dom'
import type { PhaseInfo } from '../types'

const colorMap: Record<string, { bg: string; text: string; num: string; border: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', num: 'bg-indigo-600', border: 'border-indigo-200' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', num: 'bg-violet-600', border: 'border-violet-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', num: 'bg-blue-600', border: 'border-blue-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', num: 'bg-amber-600', border: 'border-amber-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', num: 'bg-emerald-600', border: 'border-emerald-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', num: 'bg-rose-600', border: 'border-rose-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', num: 'bg-orange-600', border: 'border-orange-200' },
}

interface PhaseCardProps {
  phase: PhaseInfo
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const navigate = useNavigate()
  const c = colorMap[phase.color]

  return (
    <button
      className={`w-full text-left rounded-2xl border ${c.border} ${c.bg} p-4 mb-3 active:opacity-80 transition-opacity`}
      onClick={() => navigate(`/framework/${phase.id}`)}
    >
      <div className="flex items-start gap-3">
        <div className={`${c.num} text-white rounded-xl w-9 h-9 flex items-center justify-center flex-shrink-0 font-bold text-sm`}>
          {phase.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-900 leading-snug">{phase.title}</p>
          <p className={`text-xs mt-1 italic ${c.text} leading-relaxed line-clamp-2`}>"{phase.philosophy}"</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {phase.meta.slice(0, 2).map((m, i) => (
              <span key={i} className="text-xs text-slate-500">
                <span className="font-medium text-slate-700">{m.label}:</span> {m.value}
              </span>
            ))}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 flex-shrink-0 mt-1 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}
