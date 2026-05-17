export interface PhaseMeta {
  label: string
  value: string
}

export interface PhaseInfo {
  id: number
  title: string
  shortTitle: string
  philosophy: string
  meta: PhaseMeta[]
  color: PhaseColor
  objective: string
}

export type PhaseColor = 'indigo' | 'violet' | 'blue' | 'amber' | 'emerald' | 'rose' | 'orange'
