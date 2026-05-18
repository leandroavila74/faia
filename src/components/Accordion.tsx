import { useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`border rounded-xl overflow-hidden mb-3 transition-all duration-200 ${open ? 'border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'}`}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white text-left gap-3 cursor-pointer hover:bg-slate-50 transition-colors duration-150"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Animação suave via grid-rows */}
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 bg-white border-t border-slate-100">{children}</div>
        </div>
      </div>
    </div>
  )
}
