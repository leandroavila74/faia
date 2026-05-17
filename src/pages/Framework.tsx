import { phases } from '../data/phases'
import { PhaseCard } from '../components/PhaseCard'

export function Framework() {
  return (
    <div className="px-4 py-5">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900">As 7 Fases</h2>
        <p className="text-sm text-slate-500 mt-1">Toque em uma fase para ver o conteúdo completo</p>
      </div>
      <div>
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  )
}
