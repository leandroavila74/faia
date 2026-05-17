import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable } from '../components/SectionBlock'

const tools = [
  { name: 'GitHub Copilot', cat: 'Codificação', desc: 'Autocompletar e geração de código inline no editor. Prioritário para times com baixo DX ou feedback_speed.' },
  { name: 'Cursor', cat: 'Codificação', desc: 'IDE com IA integrada para edição conversacional de código. Prioritário para times com baixo DX ou autonomia.' },
  { name: 'Amazon Q Developer', cat: 'Codificação', desc: 'Assistente de código AWS-nativo com integração a repositórios. Indicado para stacks AWS.' },
  { name: 'Codeium', cat: 'Codificação', desc: 'Autocompletar gratuito compatível com múltiplos IDEs. Boa opção de entrada sem custo.' },
  { name: 'CodeRabbit', cat: 'Revisão', desc: 'Revisão automática de PRs com sugestões contextualizadas. Prioritário para times com baixa velocidade de feedback.' },
  { name: 'Notion AI', cat: 'Planejamento', desc: 'Síntese e geração de documentação técnica assistida. Indicado para times com baixo ownership ou org_flexibility.' },
  { name: 'Linear', cat: 'Planejamento', desc: 'Gestão de projetos com triagem e priorização assistidas. Indicado para times com baixa autonomia.' },
  { name: 'Playwright + AI Codegen', cat: 'Testes', desc: 'Geração automática de testes E2E via gravação e IA. Prioritário para times com baixa qualidade.' },
  { name: 'Testim', cat: 'Testes', desc: 'Testes funcionais com manutenção autoadaptativa por IA. Indicado para times com baixa maturidade de qualidade.' },
  { name: 'Datadog AI Insights', cat: 'Monitoramento', desc: 'Detecção de anomalias e análise de causa raiz assistida. Prioritário para times com baixo feedback_speed.' },
]

const catColors: Record<string, string> = {
  Codificação: 'bg-blue-100 text-blue-700',
  Revisão: 'bg-violet-100 text-violet-700',
  Planejamento: 'bg-amber-100 text-amber-700',
  Testes: 'bg-emerald-100 text-emerald-700',
  Monitoramento: 'bg-rose-100 text-rose-700',
}

const doraMetrics = [
  { id: 'MET-I01', name: 'Variação no cycle time', desc: 'Delta percentual no tempo médio de commit a deploy após adoção de IA.' },
  { id: 'MET-I02', name: 'Variação na taxa de bugs', desc: 'Delta percentual na taxa de bugs reportados em produção após adoção de IA.' },
  { id: 'MET-I03', name: 'Variação nas métricas DORA', desc: 'Variação nas 4 métricas DORA (deployment frequency, lead time, change failure rate, MTTR).' },
]

const references = [
  { title: 'MIT/Microsoft/Accenture RCT', desc: '4.867 devs · +26% completed tasks · 2025' },
  { title: 'Jellyfish Study', desc: '146k tickets · -26% PR review time · -20% coding time' },
  { title: 'McKinsey AI Software 2025', desc: 'Top performers: -20–30% defects' },
  { title: 'DORA State of AI 2025', desc: 'IA é amplificador — times sem qualidade registraram +41% bugs' },
  { title: 'OWASP LLM Top 10 · 2025', desc: 'Riscos e controles para sistemas baseados em LLMs' },
]

export function Recursos() {
  return (
    <div className="px-4 py-5">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900">Recursos</h2>
        <p className="text-sm text-slate-500 mt-1">Ferramentas, métricas e referências do framework</p>
      </div>

      {/* Tools */}
      <SectionBlock title="Ferramentas por categoria">
        <p className="text-xs text-slate-400 mb-3 italic">Lista ilustrativa — não exaustiva e não endossada. Use como ponto de partida para avaliação.</p>
        {['Codificação', 'Revisão', 'Planejamento', 'Testes', 'Monitoramento'].map((cat) => (
          <Accordion key={cat} title={cat}>
            <div className="pt-3 space-y-3">
              {tools
                .filter((t) => t.cat === cat)
                .map((tool) => (
                  <div key={tool.name} className="border border-slate-100 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-slate-800">{tool.name}</p>
                      <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${catColors[tool.cat]}`}>{tool.cat}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* DORA metrics */}
      <SectionBlock title="Métricas de impacto (DORA)">
        <div className="space-y-2">
          {doraMetrics.map((m) => (
            <div key={m.id} className="bg-white border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-indigo-600">{m.id}</span>
              </div>
              <p className="text-sm font-medium text-slate-800">{m.name}</p>
              <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Adoption levels */}
      <SectionBlock title="Níveis de adoção por estágio (Fase 5)">
        <SimpleTable
          headers={['Nível', 'Definição']}
          rows={[
            ['none', 'IA não é usada neste estágio'],
            ['experimental', 'IA em uso por 1–2 pessoas, sem padrão definido'],
            ['team', 'IA adotada por todo o time com padrão mínimo definido'],
            ['org', 'IA padronizada em toda a organização para este estágio'],
          ]}
        />
      </SectionBlock>

      {/* References */}
      <SectionBlock title="Referências e estudos">
        <div className="space-y-2">
          {references.map((ref) => (
            <div key={ref.title} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="text-sm font-semibold text-slate-800">{ref.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{ref.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* About */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-4 mt-2">
        <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-1">Sobre o framework</p>
        <p className="text-white text-sm leading-relaxed">
          Desenvolvido com base em experiência prática de desenvolvedores e líderes técnicos da comunidade{' '}
          <span className="font-bold">Tech Leads Club</span>.
        </p>
        <p className="text-indigo-200 text-xs mt-2">Beta · v0.5 · Distribuído gratuitamente</p>
      </div>
    </div>
  )
}
