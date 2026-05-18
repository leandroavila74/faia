import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable } from '../components/SectionBlock'

const proficiencyLevels = [
  {
    badge: 'L0 · Curioso',
    color: 'bg-slate-100 text-slate-600',
    desc: 'Ouviu falar, ainda não usa IA sistematicamente',
    criteria: 'Não tem ferramenta configurada no fluxo diário',
    gate: 'Obrigatório sair do L0 antes de usar IA em contexto produtivo',
  },
  {
    badge: 'L1 · Aplicador',
    color: 'bg-blue-100 text-blue-700',
    desc: 'Usa IA no fluxo diário com fluência básica',
    criteria: 'Pelo menos 1 ferramenta ativa; sabe estruturar prompts básicos e iterar',
    gate: 'Gate de entrada para Fase 3 (Piloto): 100% do time piloto em ≥ L1',
  },
  {
    badge: 'L2 · Crítico',
    color: 'bg-amber-100 text-amber-700',
    desc: 'Avalia output com senso crítico; sabe quando NÃO usar IA',
    criteria: 'Reverte sugestões ruins; identifica hallucinations; distingue uso seguro de arriscado',
    gate: 'Gate para nível "team" na Fase 5: ≥ 60% do time em L2 por estágio',
  },
  {
    badge: 'L3 · Multiplicador',
    color: 'bg-emerald-100 text-emerald-700',
    desc: 'Ensina, padroniza, audita o uso de IA nos outros',
    criteria: 'Cria templates de prompt, treina peers, define guidelines técnicas; campeão de squad',
    gate: 'Meta de escala: ≥ 1 L3 por squad; ≥ 5% da engenharia total em L3',
  },
]

const competencyAreas = [
  {
    name: '1. Prompt Engineering & Colaboração',
    what: 'Como dialogar com IA, dar contexto, iterar, usar system prompts e templates',
    activity: 'Workshop prático: reescrever prompts reais do time para melhorar qualidade de output',
  },
  {
    name: '2. Crítica de Output',
    what: 'Avaliar qualidade, identificar erros sutis, calibrar confiança por tipo de tarefa',
    activity: 'Lab de "caça ao hallucination": exercícios com outputs propositalmente errados',
  },
  {
    name: '3. Segurança e Governança de Uso',
    what: 'Quando IA pode/não pode ser usada, dados sensíveis, PI, compliance, guardrails',
    activity: 'Simulação de incidente: "O que você faria se a IA gerasse código com PII hard-coded?"',
  },
  {
    name: '4. Tooling Específico do Stack',
    what: 'Configuração, atalhos, integrações e boas práticas das ferramentas aprovadas',
    activity: 'Sessão hands-on no editor com o setup padrão da organização',
  },
]

export function Trilhas() {
  return (
    <div className="px-4 py-5 lg:px-8 lg:py-8">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">Trilhas de Capacitação</h2>
        <p className="text-sm text-slate-500 mt-1">Programa de AI fluency para toda a engenharia</p>
      </div>

      {/* Model 70/20/10 */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-4 mb-5">
        <p className="text-violet-200 text-xs font-semibold uppercase tracking-wider mb-2">Modelo de aprendizado</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { pct: '70%', label: 'Experiencial', desc: 'Prática real no fluxo de trabalho — usar IA em tasks reais do sprint' },
            { pct: '20%', label: 'Social', desc: 'Pair programming, demos quinzenais, retros de aprendizado' },
            { pct: '10%', label: 'Formal', desc: 'Workshops, leituras curadas, assessments de proficiência' },
          ].map((item) => (
            <div key={item.pct} className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-white font-bold text-xl">{item.pct}</p>
              <p className="text-violet-200 text-xs font-semibold mt-0.5">{item.label}</p>
              <p className="text-violet-200/70 text-xs mt-1 leading-tight hidden">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-violet-100 text-xs mt-3 leading-relaxed">
          <strong className="text-white">Cadência de assessment:</strong> auto-avaliação trimestral com validação por par (peer review do nível declarado).
        </p>
      </div>

      {/* Proficiency levels */}
      <SectionBlock title="Matriz de 4 níveis de proficiência">
        <div className="space-y-3">
          {proficiencyLevels.map((lvl) => (
            <div key={lvl.badge} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <span className={`inline-flex text-xs font-bold rounded-full px-3 py-1 mb-2 ${lvl.color}`}>{lvl.badge}</span>
              <p className="text-sm font-medium text-slate-800 mb-1">{lvl.desc}</p>
              <p className="text-xs text-slate-500 mb-2"><span className="font-medium">Critério:</span> {lvl.criteria}</p>
              <p className="text-xs text-slate-400 italic"><span className="font-medium not-italic text-slate-500">Gate:</span> {lvl.gate}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Competency areas */}
      <SectionBlock title="4 Áreas de competência (currículo)">
        <div className="space-y-3">
          {competencyAreas.map((area) => (
            <Accordion key={area.name} title={area.name}>
              <div className="pt-3 space-y-2">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">O que cobre</p>
                  <p className="text-sm text-slate-600">{area.what}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Exemplo de atividade</p>
                  <p className="text-sm text-slate-600 italic">"{area.activity}"</p>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </SectionBlock>

      {/* Proficiency targets */}
      <SectionBlock title="Metas de proficiência para escala completa">
        <SimpleTable
          headers={['Nível', 'Meta']}
          rows={[
            ['L0 · Curioso', '< 10% da engenharia'],
            ['L1+ · Aplicador ou acima', '≥ 60% da engenharia'],
            ['L2+ · Crítico ou acima', '≥ 20% da engenharia'],
            ['L3 · Multiplicador', '≥ 5% (1 por squad)'],
          ]}
        />
      </SectionBlock>
    </div>
  )
}
