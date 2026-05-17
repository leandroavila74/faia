import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable, BulletList } from '../components/SectionBlock'

const adoptionLevels = [
  { level: 'none', desc: 'IA não é usada neste estágio', char: 'Ponto de partida. Não significa que nunca será — apenas que ainda não é o momento para este estágio específico.' },
  { level: 'experimental', desc: 'IA em uso por 1–2 pessoas, sem padrão definido', char: 'Fase exploratória. O objetivo é aprender, não escalar. Sem gate de qualidade obrigatório ainda.' },
  { level: 'team', desc: 'IA adotada por todo o time com padrão mínimo definido', char: 'Adoção padronizada dentro do squad. Gates de qualidade ativos. Aprendizados documentados.' },
  { level: 'org', desc: 'IA padronizada em toda a organização para este estágio', char: 'Replicação do padrão do time para todos os squads. Métricas de impacto medidas centralmente.' },
]

const sdlcStages = [
  {
    num: 1,
    name: 'Planejamento',
    what: [
      'Síntese de requisitos a partir de discussões e documentos',
      'Geração de critérios de aceite e casos de borda',
      'Estimativas de complexidade baseadas em histórico do repositório',
      'Sugestões de decomposição de tarefas',
    ],
    antiPatterns: [
      'Usar IA para substituir conversas de alinhamento com produto',
      'Aceitar estimativas de IA sem validação com o time técnico',
      'Delegar decisões de priorização para a IA',
    ],
    advanceCriteria: [
      'Pelo menos 80% das tasks têm critérios de aceite gerados com IA revisados',
      'Time reporta redução subjetiva de esforço no planejamento',
      'Qualidade dos critérios de aceite melhorou (menos retrabalho por ambiguidade)',
    ],
  },
  {
    num: 2,
    name: 'Codificação',
    what: [
      'Autocompletar e geração de código inline (copilot mode)',
      'Geração de boilerplate, tipos e interfaces',
      'Refatoração de código com contexto completo do arquivo',
      'Explicação de código legado e sugestões de documentação',
    ],
    antiPatterns: [
      'Aceitar código gerado sem revisão crítica do contexto de negócio',
      'Usar IA para escrever código em áreas sem cobertura de testes',
      'Ignorar sugestões de segurança em favor de velocidade',
    ],
    advanceCriteria: [
      'Aumento mensurável de velocity (≥ 10%) sem degradação de qualidade',
      'Time tem convenções documentadas para uso de IA no stack específico',
      'Taxa de bugs em código com IA igual ou inferior ao código manual',
    ],
    calibration: 'Se dx_code == "low": limitar nível a experimental (código gerado requer revisão obrigatória)',
  },
  {
    num: 3,
    name: 'Code Review',
    what: [
      'Revisão automática de PRs com comentários contextualizados',
      'Identificação de bugs, vulnerabilidades e code smells',
      'Sugestões de melhoria alinhadas às convenções do repositório',
      'Geração de changelog e resumo do PR',
    ],
    antiPatterns: [
      'Substituir a revisão humana por revisão exclusiva de IA',
      'Ignorar comentários de IA sem lê-los por considerar "ruído"',
      'Usar IA para aprovar PRs sem entender o contexto de negócio',
    ],
    advanceCriteria: [
      'Redução de ≥ 20% no tempo médio de revisão de PRs',
      'Comentários de IA identificando pelo menos 1 bug por semana que seria perdido',
      'Revisores humanos relatam que IA melhora a qualidade da revisão',
    ],
    calibration: 'Se seniority == "low": limitar nível a experimental (revisão humana sênior obrigatória como gate)',
  },
  {
    num: 4,
    name: 'Testes & Shift Left',
    what: [
      'Geração automática de testes unitários para código existente',
      'Identificação de casos de borda não cobertos',
      'Geração de testes E2E a partir de critérios de aceite',
      'Análise de cobertura e priorização de quais testes criar',
    ],
    antiPatterns: [
      'Aceitar testes gerados por IA sem revisar se testam o comportamento correto',
      'Usar testes de IA para inflar cobertura sem valor real',
      'Ignorar casos de borda identificados pela IA por serem "edge cases raros"',
      'Continuar com o modelo de QA ao final do sprint enquanto IA gera testes',
      'Tratar Shift Left como iniciativa de ferramental, não de cultura',
    ],
    advanceCriteria: [
      'Cobertura de testes aumentou ≥ 15% nos módulos onde IA foi usada',
      '≥ 50% dos PRs chegam ao review já com testes gerados por IA (Shift Left ativo)',
      'Quality gate no pre-commit ou CI bloqueando merge com cobertura abaixo do DoD',
      'Testes gerados por IA têm taxa de falso-positivo inferior a 10%',
    ],
    calibration: 'Se quality == "low": limitar nível a experimental — testes gerados por IA passam por revisão obrigatória antes de entrar no CI.',
    shiftLeft: [
      'No editor (pre-commit): Copilot/Cursor sugerem testes junto com o código — o teste existe antes do PR',
      'No PR (pre-merge): CodeRabbit identifica ausência de testes antes do merge',
      'Casos de borda em tempo real: IA identifica edge cases enquanto o dev escreve',
      'Análise estática acelerada: IA prioriza o que reforçar no CI',
    ],
  },
  {
    num: 5,
    name: 'Deploy',
    what: [
      'Análise de risco de deploy baseada no diff e histórico de incidentes',
      'Sugestão de estratégia de deploy (canary, blue-green, feature flags)',
      'Geração automática de runbook de rollback',
      'Validação de configurações de infraestrutura antes do deploy',
    ],
    antiPatterns: [
      'Usar IA para automatizar deploy sem revisão humana em deploys de alto risco',
      'Ignorar avisos de risco de IA por pressão de prazo',
      'Confiar em runbooks gerados por IA sem testar o rollback',
    ],
    advanceCriteria: [
      'Redução de ≥ 30% nos deploys que requerem rollback',
      'Análise de risco de IA usada em 100% dos deploys para produção',
      'Runbooks de rollback gerados e testados para os 5 principais serviços',
    ],
    calibration: 'Se continuous_delivery == "low": manter nível em none (pré-condição: CD automatizado primeiro)',
  },
  {
    num: 6,
    name: 'Observabilidade',
    what: [
      'Detecção automática de anomalias em métricas e logs',
      'Análise de causa raiz assistida em incidentes',
      'Geração de dashboards e alertas baseados em padrões históricos',
      'Correlação automática de eventos entre serviços',
    ],
    antiPatterns: [
      'Usar IA para reduzir o número de alertas sem entender o porquê',
      'Confiar em causa raiz sugerida por IA sem validação humana',
      'Ignorar anomalias detectadas por IA por considerar "falso positivo" sem investigar',
    ],
    advanceCriteria: [
      'MTTR (mean time to recover) reduzido em ≥ 25% com IA',
      'Pelo menos 3 incidentes detectados por IA antes de impacto ao usuário',
      'Time usa análise de causa raiz de IA como ponto de partida em 100% dos incidentes P1/P2',
    ],
  },
]

const templates = [
  { name: 'Conservador', when: 'currentAiUsage == "none" OU overallLevel == "low"', char: 'Começa pelos estágios de menor risco (testes e observabilidade). Prioriza qualidade sobre velocidade de adoção.' },
  { name: 'Balanceado', when: 'Caso padrão (não se encaixa em conservador nem agressivo)', char: 'Começa pela codificação. Avança em paralelo nos estágios de menor risco enquanto consolida os de maior impacto.' },
  { name: 'Agressivo', when: 'currentAiUsage == "organization" OU overallLevel == "high"', char: 'Adoção simultânea em múltiplos estágios (código, review e deploy primeiro). Para times com alta maturidade.' },
]

export function Phase5Content() {
  return (
    <div>
      {/* Templates */}
      <SectionBlock title="Templates de adoção">
        <SimpleTable
          headers={['Template', 'Quando é selecionado', 'Característica']}
          rows={templates.map((t) => [t.name, t.when, t.char])}
        />
      </SectionBlock>

      {/* Levels */}
      <SectionBlock title="Os 4 níveis de adoção por estágio">
        <div className="space-y-2">
          {adoptionLevels.map((l) => (
            <div key={l.level} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="text-xs font-mono font-bold text-indigo-600">{l.level}</span>
              <p className="text-sm font-medium text-slate-800 mt-0.5">{l.desc}</p>
              <p className="text-xs text-slate-500 mt-1">{l.char}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* SDLC stages */}
      <SectionBlock title="Os 6 estágios do SDLC">
        {sdlcStages.map((stage) => (
          <Accordion key={stage.num} title={`${stage.num}. ${stage.name}`}>
            <div className="pt-3 space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">O que IA faz neste estágio</p>
                <BulletList items={stage.what} />
              </div>
              {stage.calibration && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-blue-700 mb-1">Calibração automática</p>
                  <p className="text-xs text-blue-800">{stage.calibration}</p>
                </div>
              )}
              {stage.shiftLeft && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Como IA habilita Shift Left</p>
                  <BulletList items={stage.shiftLeft} />
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">Anti-padrões</p>
                <BulletList items={stage.antiPatterns} />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Critérios de avanço</p>
                <BulletList items={stage.advanceCriteria} />
              </div>
            </div>
          </Accordion>
        ))}
      </SectionBlock>
    </div>
  )
}
