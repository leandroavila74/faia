import { Accordion } from '../components/Accordion'
import { SectionBlock, ScaleItem, SimpleTable } from '../components/SectionBlock'

const macroBlocos = [
  {
    letra: 'A',
    nome: 'Cultura & Autonomia',
    desc: 'Avalia o grau de autonomia das equipes, a flexibilidade organizacional e o senso de responsabilidade sobre entregas e decisões técnicas.',
    dims: 'Autonomia de Engenharia · Flexibilidade Organizacional · Ownership e Accountability',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    numColor: 'bg-indigo-600',
  },
  {
    letra: 'B',
    nome: 'Maturidade Operacional',
    desc: 'Mede a capacidade de entrega contínua, os padrões de qualidade adotados e a velocidade com que as equipes recebem e processam feedback.',
    dims: 'Maturidade de Continuous Delivery · Maturidade de Qualidade · Velocidade de Feedback',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    numColor: 'bg-violet-600',
  },
  {
    letra: 'C',
    nome: 'Capacidade Técnica & IA',
    desc: 'Examina a experiência do desenvolvedor no código, o nível de adoção de inteligência artificial e a senioridade técnica média das equipes.',
    dims: 'Developer Experience e Qualidade do Código · Maturidade no Uso de IA · Senioridade da Engenharia',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    numColor: 'bg-blue-600',
  },
]

const questions = [
  {
    num: 1,
    dim: 'Autonomia de Engenharia',
    text: 'Os engenheiros do seu time conseguem liderar funcionalidades de ponta a ponta — do design técnico ao deploy — sem depender de aprovações externas ao squad?',
    measures: 'Grau de autonomia técnica real dos engenheiros para tomar decisões e entregar sem bloqueios externos.',
    impact: 'Times com baixa autonomia não conseguem incorporar IA no fluxo de trabalho porque cada mudança de processo exige aprovação de fora do squad.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Engenheiros dependem de múltiplas aprovações externas para a maioria das decisões técnicas. Funcionalidades passam por arquitetos centrais, comitês ou outras equipes antes de qualquer avanço.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Engenheiros têm autonomia para a maioria das decisões técnicas rotineiras, mas ainda dependem de aprovação externa para mudanças de arquitetura, tecnologia ou impacto cross-squad.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'Engenheiros lideram funcionalidades de ponta a ponta com ownership técnico completo. Decisões de arquitetura, tecnologia e deploy são feitas dentro do squad.' },
    ],
  },
  {
    num: 2,
    dim: 'Flexibilidade Organizacional',
    text: 'Quando seu time identifica uma nova prática, ferramenta ou tecnologia relevante, quanto tempo leva para experimentá-la formalmente no ambiente de trabalho?',
    measures: 'Velocidade com que a organização consegue avaliar e adotar novas práticas tecnológicas sem burocracia excessiva.',
    impact: 'Organizações com baixa flexibilidade levam meses para aprovar ferramentas de IA, perdendo janelas de adoção enquanto a tecnologia avança rapidamente.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Adoção de novas práticas ou ferramentas leva meses e exige múltiplos níveis de aprovação. O processo de avaliação é informal ou inexistente.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Existe um processo de avaliação de novas tecnologias, mas o ciclo médio leva de 4 a 8 semanas. Times conseguem fazer experimentos controlados, mas a adoção formal é lenta.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'Times conseguem iniciar experimentos formais em menos de 2 semanas. O processo de adoção é claro, rápido e com critérios objetivos.' },
    ],
  },
  {
    num: 3,
    dim: 'Ownership e Accountability',
    text: 'Quando algo falha em produção em um sistema do seu time, o processo de resolução e aprendizado é conduzido pelo próprio squad — incluindo análise de causa raiz e ações preventivas?',
    measures: 'Grau em que times assumem responsabilidade completa pelos resultados das suas entregas, incluindo operação e incidentes.',
    impact: 'Times sem ownership real de produção não têm incentivo para usar IA em observabilidade e detecção de problemas, pois não se sentem responsáveis pelo sistema em execução.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Incidentes são frequentemente escalados para equipes externas (SRE, ops, arquitetura) para resolução. Análises de causa raiz são raras ou conduzidas por outra equipe.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'O squad é responsável pelo on-call mas ainda delega parte da resolução para equipes de suporte especializadas. Análises de causa raiz acontecem para incidentes maiores.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'O squad tem ownership completo do sistema em produção — detecta, resolve, analisa e age preventivamente. On-call é rotativo dentro do time.' },
    ],
  },
  {
    num: 4,
    dim: 'Maturidade de Continuous Delivery',
    text: 'Com que frequência seu time realiza deploys em produção e qual o nível de automação desse processo?',
    measures: 'Frequência e previsibilidade das entregas em produção, com o grau de automação que as suporta.',
    impact: 'Pipelines manuais e deploys infrequentes tornam impossível usar IA em code review, análise de PR e sugestões de refatoração de forma integrada ao fluxo real de entrega.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Deploys acontecem mensalmente ou com menor frequência e envolvem processos manuais significativos. Cada deploy é um evento de alto risco que requer coordenação entre múltiplas equipes.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Deploys acontecem semanalmente com automação parcial. O pipeline de CI/CD cobre build e testes, mas o deploy para produção ainda tem etapas manuais.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'Deploys acontecem múltiplas vezes por semana ou diariamente, com pipeline totalmente automatizado do commit ao deploy. Feature flags separam deploy de release.' },
    ],
  },
  {
    num: 5,
    dim: 'Maturidade de Qualidade',
    text: 'Qual é o nível de automação de testes e o grau em que o próprio time de engenharia é responsável pela qualidade do código em produção?',
    measures: 'Maturidade da automação de testes e do ownership de qualidade pelo time de engenharia.',
    impact: 'Código sem cobertura de testes torna arriscada a adoção de IA para geração e refatoração de código, pois não há rede de segurança para validar o output da IA automaticamente.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Testes automatizados cobrem menos de 30% da base de código ou são inconsistentes entre módulos. Qualidade é responsabilidade de QA manual separado do time.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Há cobertura de testes automatizados para as principais funcionalidades, mas a cobertura é desigual e testes de integração são limitados.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'Cobertura de testes automatizados é alta e consistente. Quality gates no pipeline bloqueiam código com cobertura insuficiente ou falha em testes.' },
    ],
  },
  {
    num: 6,
    dim: 'Velocidade de Feedback',
    text: 'Quanto tempo leva desde um commit até o feedback completo — testes, build, análise estática — e até o primeiro sinal de comportamento em produção?',
    measures: 'Velocidade dos ciclos de feedback desde o código até a observabilidade em produção.',
    impact: 'Ciclos de feedback longos limitam a eficácia de IA em code review e pair programming, pois o custo de validar sugestões da IA é alto quando o loop de feedback demora horas.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'O pipeline de CI leva mais de 30 minutos para dar feedback. Monitoramento de produção é reativo — problemas são detectados por usuários antes de alertas internos.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'O pipeline de CI entrega feedback em 10 a 30 minutos. Há monitoramento básico de produção com alertas configurados para os principais erros.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'O pipeline de CI entrega feedback em menos de 10 minutos. Monitoramento de produção é proativo com detecção de anomalias antes de impacto ao usuário.' },
    ],
  },
  {
    num: 7,
    dim: 'Developer Experience e Qualidade do Código',
    text: 'Como você avalia a qualidade da arquitetura do código e a produtividade real dos engenheiros no dia a dia de desenvolvimento?',
    measures: 'Saúde da arquitetura de código e a experiência real de desenvolvimento — tempo de onboarding, facilidade de mudança, nível de débito técnico.',
    impact: 'Código com alto débito técnico e arquitetura acoplada limita o que IA consegue ajudar — sugestões de IA são ineficazes quando o contexto do código é fragmentado.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'A base de código tem alto débito técnico que torna mudanças arriscadas e lentas. Onboarding de novos engenheiros leva semanas.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Há partes da base de código bem estruturadas e outras com débito técnico significativo. Onboarding é possível em alguns dias com acompanhamento.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'A arquitetura é clara, modular e documentada. Onboarding acontece em menos de 2 dias produtivos. Débito técnico é monitorado e priorizado sistematicamente.' },
    ],
  },
  {
    num: 8,
    dim: 'Maturidade no Uso de IA',
    text: 'Em que extensão ferramentas de IA já estão integradas ao fluxo de desenvolvimento do seu time — desde sugestões de código até automação de tarefas de engenharia?',
    measures: 'Grau de integração de IA no fluxo de desenvolvimento e a profundidade do uso além do básico.',
    impact: 'Dimensão de auto-referência: o nível atual de uso de IA revela a prontidão do time para aprofundar a adoção e o quanto a organização está preparada para extrair valor das próximas ondas de IA.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'IA não é usada sistematicamente no fluxo de desenvolvimento. Alguns membros podem usar ferramentas individualmente, mas sem padronização ou política organizacional.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Assistentes de código com IA são usados pela maioria do time, mas o uso está limitado a sugestões de código e completions.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'IA está integrada em múltiplas etapas do fluxo de desenvolvimento — sugestão de código, revisão, geração de testes, documentação e análise de pull requests.' },
    ],
  },
  {
    num: 9,
    dim: 'Senioridade da Engenharia',
    text: 'Qual é a proporção de engenheiros sêniores e staff no seu time — profissionais capazes de tomar decisões técnicas complexas com autonomia real?',
    measures: 'Capacidade técnica coletiva do time para operar com autonomia, avaliar trade-offs e liderar decisões de arquitetura.',
    impact: 'Times com baixa senioridade não conseguem avaliar criticamente o output da IA, resultando em adoção superficial ou em código gerado por IA que cria novos problemas não detectados.',
    scales: [
      { level: 'low' as const, label: 'Baixo · 1,0', text: 'Menos de 20% do time é composto por engenheiros sêniores ou staff. Decisões técnicas complexas frequentemente dependem de consultoria externa.' },
      { level: 'medium' as const, label: 'Médio · 2,0', text: 'Entre 20% e 40% do time são sêniores ou staff. Há capacidade técnica para a maioria das decisões rotineiras, mas problemas de arquitetura ainda requerem apoio externo.' },
      { level: 'high' as const, label: 'Alto · 3,0', text: 'Mais de 40% do time são sêniores, staff ou principal. O time tem capacidade técnica para tomar decisões complexas de forma autônoma.' },
    ],
  },
]

export function Phase1Content() {
  return (
    <div>
      {/* Scoring */}
      <SectionBlock title="Metodologia de pontuação">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-3">
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Cada dimensão recebe pontuação de <strong>1,0</strong> (baixo), <strong>2,0</strong> (médio) ou <strong>3,0</strong> (alto). O score geral é a média das 9 dimensões.
          </p>
          <div className="space-y-2">
            {[
              { label: 'Baixo', range: 'Score < 1,67', desc: 'Organização tem bloqueios significativos para adoção de IA', color: 'bg-red-100 text-red-700' },
              { label: 'Médio', range: '1,67 ≤ Score < 2,34', desc: 'Organização tem base, mas com gaps que precisam de atenção', color: 'bg-amber-100 text-amber-700' },
              { label: 'Alto', range: 'Score ≥ 2,34', desc: 'Organização está pronta para adoção acelerada de IA', color: 'bg-emerald-100 text-emerald-700' },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-2">
                <span className={`text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0 ${s.color}`}>{s.label}</span>
                <div>
                  <p className="text-xs font-mono text-slate-600">{s.range}</p>
                  <p className="text-xs text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Macro blocks */}
      <SectionBlock title="Os 3 macro-blocos">
        {macroBlocos.map((mb) => (
          <div key={mb.letra} className={`border ${mb.color} rounded-xl p-4 mb-3`}>
            <div className="flex items-start gap-3">
              <div className={`${mb.numColor} text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold flex-shrink-0`}>
                {mb.letra}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{mb.nome}</p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{mb.desc}</p>
                <p className="text-xs font-medium text-slate-400 mt-2">{mb.dims}</p>
              </div>
            </div>
          </div>
        ))}
      </SectionBlock>

      {/* Questions */}
      <SectionBlock title="As 9 perguntas do diagnóstico">
        {questions.map((q) => (
          <Accordion key={q.num} title={`Q${q.num} · ${q.dim}`}>
            <div className="pt-3 space-y-3">
              <p className="text-sm font-medium text-slate-800 leading-relaxed">{q.text}</p>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">O que mede</p>
                <p className="text-xs text-slate-600">{q.measures}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-amber-700 mb-1">Impacto na adoção de IA</p>
                <p className="text-xs text-amber-800">{q.impact}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Escala de respostas</p>
                {q.scales.map((s) => (
                  <ScaleItem key={s.label} level={s.level} label={s.label} score="" text={s.text} />
                ))}
              </div>
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Recommendations table */}
      <SectionBlock title="Recomendações por dimensão e nível">
        <SimpleTable
          headers={['Dimensão', 'Baixo', 'Médio', 'Alto']}
          rows={[
            ['Autonomia', 'Mapear dependências externas que bloqueiam decisões. Implementar ownership por squad com escopo claro.', 'Estabelecer critérios objetivos para escalada de decisões versus decisão local.', 'Documentar mecanismos de autonomia para replicar em novos times.'],
            ['Flex. Org.', 'Identificar pontos de aprovação burocrática. Criar processo de experimentação controlada.', 'Formalizar framework de decisão para avaliação de novas tecnologias. Ciclo < 2 semanas.', 'Documentar modelo de adoção como referência. Avaliar se cria débito de governança.'],
            ['Ownership', 'Definir SLOs por squad e torná-los visíveis. Estabelecer on-call rotativo por produto.', 'Conectar métricas de negócio aos resultados de engenharia de cada squad.', 'Verificar se ownership está distribuído de forma sustentável.'],
            ['Cont. Delivery', 'Automatizar build e deploy antes de qualquer outra iniciativa de CD.', 'Implementar feature flags para separar deploy de release.', 'Garantir que frequência de deploy não degrada estabilidade de produção.'],
            ['Qualidade', 'Estabelecer cobertura mínima de testes como critério de merge.', 'Mover testes manuais de regressão para automação progressivamente.', 'Medir custo de manutenção dos testes para prevenir debt em automação.'],
            ['Vel. Feedback', 'Instrumentar pipeline de CI para medir tempo médio de feedback.', 'Reduzir tempo de execução do pipeline para < 10 minutos.', 'Avaliar se velocidade de feedback está sendo usada em decisões de produto.'],
            ['DX & Código', 'Realizar auditoria de débito técnico nas áreas de maior volume de alteração.', 'Padronizar ambiente de dev com containers reproduzíveis.', 'Medir correlação entre qualidade do código e velocidade de entrega.'],
            ['Uso de IA', 'Adotar assistentes de código com IA para toda a engenharia como ponto de partida.', 'Medir impacto do uso de IA em velocity, qualidade e tempo de ciclo.', 'Explorar agentes de IA para tarefas de refatoração e automação de fluxos repetitivos.'],
            ['Senioridade', 'Criar plano de carreira técnico com critérios explícitos de progressão para sênior.', 'Revisar distribuição de tarefas complexas para desenvolver sêniores emergentes.', 'Avaliar se senioridade está sendo usada para elevar o nível técnico coletivo.'],
          ]}
        />
      </SectionBlock>
    </div>
  )
}
