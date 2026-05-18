import { phases } from '../data/phases'
import { PhaseCard } from '../components/PhaseCard'

export function Framework() {
  return (
    <div className="px-4 py-5 lg:px-8 lg:py-8">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">As 7 Fases</h2>
        <p className="text-sm text-slate-500 mt-1">Selecione uma fase para ver o conteúdo completo</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  )
}
