import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable } from '../components/SectionBlock'

const dimensions = [
  { name: 'Autonomia Técnica', weight: '2×', question: 'O time candidato pode tomar decisões técnicas e experimentar ferramentas sem aprovações externas ao squad?' },
  { name: 'Senioridade', weight: '2×', question: 'O time tem engenheiros sêniores capazes de avaliar criticamente o output da IA e orientar adoção responsável?' },
  { name: 'Velocidade de Feedback', weight: '2×', question: 'O pipeline de CI/CD do time permite ciclos de feedback rápidos (<10 min) e deploys frequentes?' },
  { name: 'Segurança Psicológica', weight: '1×', question: 'O time se sente seguro para experimentar, cometer erros e reportar problemas sem medo de julgamento?' },
  { name: 'Estabilidade de Roadmap', weight: '1×', question: 'O roadmap do time tem estabilidade suficiente para dedicar capacidade ao piloto sem interrupções frequentes?' },
]

const tools = [
  { name: 'GitHub Copilot', cat: 'Codificação', desc: 'Autocompletar e geração de código inline no editor. Prioritário para times com baixo DX ou feedback_speed.' },
  { name: 'Cursor', cat: 'Codificação', desc: 'IDE com IA integrada para edição conversacional de código. Prioritário para times com baixo DX ou autonomia.' },
  { name: 'Amazon Q Developer', cat: 'Codificação', desc: 'Assistente de código AWS-nativo com integração a repositórios. Indicado para stacks AWS.' },
  { name: 'Codeium', cat: 'Codificação', desc: 'Autocompletar gratuito compatível com múltiplos IDEs. Boa opção de entrada sem custo.' },
  { name: 'CodeRabbit', cat: 'Revisão', desc: 'Revisão automática de PRs com sugestões contextualizadas. Prioritário para times com baixa velocidade de feedback.' },
  { name: 'Notion AI', cat: 'Planejamento', desc: 'Síntese e geração de documentação técnica assistida.' },
  { name: 'Linear', cat: 'Planejamento', desc: 'Gestão de projetos com triagem e priorização assistidas.' },
  { name: 'Playwright + AI Codegen', cat: 'Testes', desc: 'Geração automática de testes E2E via gravação e IA.' },
  { name: 'Testim', cat: 'Testes', desc: 'Testes funcionais com manutenção autoadaptativa por IA.' },
  { name: 'Datadog AI Insights', cat: 'Monitoramento', desc: 'Detecção de anomalias e análise de causa raiz assistida.' },
]

export function Phase3Content() {
  return (
    <div>
      {/* Scoring */}
      <SectionBlock title="Dimensões avaliadas (scoring ponderado)">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-3">
          <p className="text-xs text-slate-700">
            Autonomia, Senioridade e Velocidade de Feedback têm peso <strong>2×</strong>. Segurança psicológica e estabilidade de roadmap têm peso <strong>1×</strong>.{' '}
            Score total ÷ 8 = score de prontidão.
          </p>
        </div>
        <SimpleTable
          headers={['Dimensão', 'Peso', 'Pergunta']}
          rows={dimensions.map((d) => [d.name, d.weight, d.question])}
        />
      </SectionBlock>

      {/* Gate */}
      <SectionBlock title="Gate de capability (pré-requisito de entrada)">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Antes de iniciar o piloto, <strong>100% dos membros</strong> do time selecionado devem atingir{' '}
            <span className="inline-flex text-xs font-bold rounded-full px-2 py-0.5 bg-blue-100 text-blue-700">L1 · Aplicador</span>.
            O piloto não começa com ninguém em L0.
          </p>
        </div>
      </SectionBlock>

      {/* Tools */}
      <SectionBlock title="Exemplos de ferramentas por categoria">
        <p className="text-xs text-slate-400 italic mb-3">Lista ilustrativa — não exaustiva e não endossada. Use como ponto de partida para avaliação.</p>
        {['Codificação', 'Revisão', 'Planejamento', 'Testes', 'Monitoramento'].map((cat) => (
          <Accordion key={cat} title={cat}>
            <div className="pt-2 space-y-2">
              {tools.filter((t) => t.cat === cat).map((t) => (
                <div key={t.name} className="bg-slate-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Success metrics */}
      <SectionBlock title="Métricas de sucesso do piloto">
        <p className="text-xs text-slate-400 italic mb-3">
          Baseado em: MIT/Microsoft/Accenture RCT · Jellyfish · McKinsey AI Software · DORA State of AI 2025.
          DORA 2025 confirma que IA é amplificador — times sem qualidade registraram aumento de bugs.
        </p>
        <SimpleTable
          headers={['Baixo — adoção e segurança', 'Médio — tempo e qualidade', 'Alto — outcomes']}
          rows={[
            [
              '≥ 80% dos membros usando ao menos 1 ferramenta de IA após 4 semanas',
              'Redução de 20% no tempo de revisão de PRs',
              'Aumento de 25% em tasks completadas por sprint',
            ],
            [
              '≥ 70% do time relata confiança no código gerado por IA após revisão',
              'Redução de 15% no coding time em tarefas cobertas por IA',
              'Redução de 20% em defeitos reportados por cliente nos módulos do piloto',
            ],
            [
              'Zero incidentes de produção por código de IA sem revisão adequada',
              'Taxa de bugs em código com IA igual ou inferior ao código manual',
              'Pelo menos 3 estágios do SDLC com IA no nível "team" e métricas documentadas',
            ],
            [
              'Processo de revisão obrigatória documentado e seguido por 100% do time',
              'Pelo menos 2 casos de uso documentados com ganho mensurável',
              'DORA baseline estabelecido e ao menos 1 métrica com melhora mensurável',
            ],
          ]}
        />
      </SectionBlock>

      {/* Expansion criteria */}
      <SectionBlock title="Critérios de expansão além do piloto">
        <SimpleTable
          headers={['Baixo', 'Médio', 'Alto']}
          rows={[
            [
              'Todos os membros completaram onboarding nas ferramentas de IA',
              'Pelo menos 2 fluxos com IA documentados com métricas de ganho',
              'Todos os critérios de sucesso do piloto atingidos com dados',
            ],
            [
              'Pelo menos 1 processo de revisão de código de IA documentado e seguido',
              'Time piloto atingiu as metas de velocity e qualidade definidas',
              'Time piloto capaz de integrar e padronizar novas ferramentas de IA de forma autônoma',
            ],
            [
              'Nenhum incidente de produção por adoção de IA não supervisionada nos últimos 30 dias',
              'Pelo menos 1 membro sênior preparado para liderar adoção em outro time',
              'Governança básica de uso de IA definida',
            ],
          ]}
        />
      </SectionBlock>
    </div>
  )
}
