import type { ReactNode } from 'react'

interface SectionBlockProps {
  title: string
  children: ReactNode
  className?: string
}

export function SectionBlock({ title, children, className = '' }: SectionBlockProps) {
  return (
    <div className={`mb-5 ${className}`}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{title}</p>
      {children}
    </div>
  )
}

interface InfoCardProps {
  title: string
  description: string
  meta?: string
  badge?: ReactNode
  accent?: string
}

export function InfoCard({ title, description, meta, badge, accent = 'border-l-indigo-400' }: InfoCardProps) {
  return (
    <div className={`bg-white border border-slate-200 border-l-4 ${accent} rounded-xl p-4 mb-3`}>
      <div className="flex items-start justify-between gap-2 mb-1">
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        {badge}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      {meta && <p className="text-xs text-slate-400 mt-2">{meta}</p>}
    </div>
  )
}

interface ScaleItemProps {
  label: string
  score: string
  text: string
  level: 'low' | 'medium' | 'high'
}

const levelColors = {
  low: 'border-l-red-400 bg-red-50',
  medium: 'border-l-amber-400 bg-amber-50',
  high: 'border-l-emerald-400 bg-emerald-50',
}

export function ScaleItem({ label, score, text, level }: ScaleItemProps) {
  return (
    <div className={`border border-slate-200 border-l-4 ${levelColors[level]} rounded-xl p-3 mb-2`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold text-slate-700">{label}</span>
        <span className="text-xs font-mono text-slate-500">{score}</span>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  )
}

interface SimpleTableProps {
  headers: string[]
  rows: (string | ReactNode)[][]
  className?: string
}

export function SimpleTable({ headers, rows, className = '' }: SimpleTableProps) {
  return (
    <div className={`overflow-x-auto -mx-1 ${className}`}>
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-slate-100">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-semibold text-slate-600 border border-slate-200 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 text-slate-600 border border-slate-200 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface BulletListProps {
  items: (string | ReactNode)[]
  className?: string
}

export function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-slate-600">
          <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
