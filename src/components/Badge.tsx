interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'indigo' | 'violet' | 'blue' | 'amber' | 'emerald' | 'rose' | 'orange' | 'slate' | 'green' | 'red' | 'yellow'
  size?: 'sm' | 'xs'
}

const variantClasses: Record<string, string> = {
  default: 'bg-slate-100 text-slate-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  violet: 'bg-violet-100 text-violet-700',
  blue: 'bg-blue-100 text-blue-700',
  amber: 'bg-amber-100 text-amber-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  rose: 'bg-rose-100 text-rose-700',
  orange: 'bg-orange-100 text-orange-700',
  slate: 'bg-slate-100 text-slate-600',
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
  yellow: 'bg-yellow-100 text-yellow-700',
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const sizeClass = size === 'xs' ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${sizeClass} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
