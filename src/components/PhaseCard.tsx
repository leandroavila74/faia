import { useNavigate } from 'react-router-dom'
import type { PhaseInfo } from '../types'

const colorMap: Record<string, { bg: string; text: string; num: string; border: string; hoverBorder: string; shadow: string }> = {
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-700',  num: 'bg-indigo-600',  border: 'border-indigo-200',  hoverBorder: 'hover:border-indigo-400',  shadow: 'hover:shadow-indigo-100' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-700',  num: 'bg-violet-600',  border: 'border-violet-200',  hoverBorder: 'hover:border-violet-400',  shadow: 'hover:shadow-violet-100' },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    num: 'bg-blue-600',    border: 'border-blue-200',    hoverBorder: 'hover:border-blue-400',    shadow: 'hover:shadow-blue-100' },
  amber:   { bg: 'bg-amber-50',   text: 'text-amber-700',   num: 'bg-amber-600',   border: 'border-amber-200',   hoverBorder: 'hover:border-amber-400',   shadow: 'hover:shadow-amber-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', num: 'bg-emerald-600', border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400', shadow: 'hover:shadow-emerald-100' },
  rose:    { bg: 'bg-rose-50',    text: 'text-rose-700',    num: 'bg-rose-600',    border: 'border-rose-200',    hoverBorder: 'hover:border-rose-400',    shadow: 'hover:shadow-rose-100' },
  orange:  { bg: 'bg-orange-50',  text: 'text-orange-700',  num: 'bg-orange-600',  border: 'border-orange-200',  hoverBorder: 'hover:border-orange-400',  shadow: 'hover:shadow-orange-100' },
}

interface PhaseCardProps {
  phase: PhaseInfo
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const navigate = useNavigate()
  const c = colorMap[phase.color]

  return (
    <button
      className={`
        w-full text-left rounded-2xl border ${c.border} ${c.bg} p-4 mb-3
        shadow-sm ${c.hoverBorder} ${c.shadow} hover:shadow-lg hover:-translate-y-0.5
        active:translate-y-0 active:shadow-sm
        transition-all duration-200 cursor-pointer
        group
      `}
      onClick={() => navigate(`/framework/${phase.id}`)}
    >
      <div className="flex items-start gap-3">
        <div className={`${c.num} text-white rounded-xl w-9 h-9 flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm group-hover:scale-110 transition-transform duration-200`}>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 flex-shrink-0 mt-1 ${c.text} group-hover:translate-x-0.5 transition-transform duration-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}
