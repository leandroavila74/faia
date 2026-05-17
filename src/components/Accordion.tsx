import { useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white text-left gap-3"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 bg-white border-t border-slate-100">{children}</div>}
    </div>
  )
}
