import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable, BulletList } from '../components/SectionBlock'

const policies = [
  {
    num: 1,
    title: 'Uso de Dados em Prompts',
    desc: 'Nenhum dado sensível, PII, credencial ou propriedade intelectual confidencial pode ser incluído em prompts enviados a modelos de IA externos. Dados de teste devem ser sintéticos ou anonimizados.',
    owner: 'Security Engineering',
    review: 'Anual',
  },
  {
    num: 2,
    title: 'Escolha e Aprovação de Ferramentas',
    desc: 'Toda ferramenta de IA que acesse código, dados ou infraestrutura da empresa requer avaliação de segurança e aprovação formal antes do uso em produção.',
    owner: 'Time AI Enablers + Security',
    review: 'Semestral',
  },
  {
    num: 3,
    title: 'Revisão Humana Obrigatória',
    desc: 'Todo código gerado com assistência de IA que for para produção requer revisão humana por um engenheiro com senioridade adequada ao contexto. IA não aprova PRs de forma autônoma.',
    owner: 'Tech Leads',
    review: 'Anual',
  },
  {
    num: 4,
    title: 'Propriedade Intelectual',
    desc: 'Código gerado com assistência de IA é propriedade da empresa. Engenheiros não devem usar ferramentas de IA que reivindiquem propriedade sobre outputs. Licenças devem incluir cláusula de IP explícita.',
    owner: 'Legal + CTO',
    review: 'Anual',
  },
  {
    num: 5,
    title: 'Segurança e Vulnerabilidades',
    desc: 'Código gerado por IA para funções de segurança (autenticação, autorização, criptografia) requer revisão especializada adicional. Não usar IA para gerar lógica de segurança sem supervisão de security engineer.',
    owner: 'Security Engineering',
    review: 'Semestral',
  },
  {
    num: 6,
    title: 'Controle de Custos',
    desc: 'Todas as contas de ferramentas de IA devem ter limites de gasto configurados. Uso acima do threshold mensal requer aprovação prévia. Relatório de custos consolidado mensal para liderança técnica.',
    owner: 'Engineering Manager + Finance',
    review: 'Trimestral',
  },
  {
    num: 7,
    title: 'Exceções e Desvios',
    desc: 'Qualquer desvio de política deve ser documentado, justificado e aprovado pelo responsável da política com prazo de validade definido. Exceções são revisadas no ciclo semestral de governança.',
    owner: 'Time AI Enablers',
    review: 'Semestral',
  },
  {
    num: 8,
    title: 'Revisão Periódica das Políticas',
    desc: 'Todas as políticas são revisadas semestralmente ou quando ocorre mudança significativa nas ferramentas, no contexto regulatório ou nos incidentes relacionados a IA.',
    owner: 'CTO + Time AI Enablers',
    review: 'Semestral',
  },
  {
    num: 9,
    title: 'AI Literacy Requirement',
    desc: 'Nenhum engenheiro pode usar ferramentas de IA em contexto produtivo sem ter atingido L1 · Aplicador. Revisão de código gerado com IA exige revisor em L2 · Crítico ou acima.',
    owner: 'Time AI Enablers',
    review: 'Trimestral',
  },
]

const technicalStandards = [
  { title: 'Commits com Assistência de IA', desc: 'Mensagens de commit devem indicar quando código relevante foi gerado com IA. Formato sugerido: prefixo [ai-assisted] ou convenção definida pelo time.' },
  { title: 'Prompts Versionados', desc: 'Prompts utilizados em contextos críticos (geração de código de produção, análise de segurança) devem ser versionados no repositório junto ao código que os utiliza.' },
  { title: 'Observabilidade do Uso de IA', desc: 'Sistemas que expõem funcionalidades baseadas em IA para usuários finais devem ter métricas de uso, latência, taxa de erro e feedback instrumentadas.' },
  { title: 'Rastreamento de Custos por Serviço', desc: 'Chamadas a APIs de IA externas devem ter tags de custo por serviço/squad. Budget alerts configurados por squad e por ambiente (dev/staging/prod separados).' },
  { title: 'Revisão de Código Gerado por IA', desc: 'PRs com mais de 30% do código gerado com IA devem ter checklist explícito: lógica de negócio correta, ausência de PII hard-coded, tratamento de erros adequado e cobertura de testes.' },
  { title: 'Dados Sintéticos para Desenvolvimento', desc: 'Ambientes de dev e staging devem usar dados sintéticos gerados por IA em vez de cópias de dados de produção.' },
  { title: 'Shift Left Quality Gates', desc: 'Sequência obrigatória e progressiva: (1) Pre-commit: lint + testes unitários; (2) CI gate: suite completa + análise estática; (3) PR quality check: revisão de IA + checklist; (4) Staging: apenas código que passou nos 3 gates anteriores.' },
]

const guardrails = [
  { title: 'Nenhum PII em Prompts', priority: 'Crítica', priorityColor: 'bg-red-100 text-red-700', desc: 'Bloqueio técnico + alerta automático quando padrões de PII (CPF, e-mail, telefone, nome completo) são detectados em prompts enviados a APIs externas. Auditoria mensal de logs de prompts.' },
  { title: 'Nenhum Output de IA Raw em Produção', priority: 'Crítica', priorityColor: 'bg-red-100 text-red-700', desc: 'Outputs de modelos de IA que chegam a usuários finais devem passar por validação e revisão antes. Nenhum pipeline de produção aceita output de IA sem gate de qualidade.' },
  { title: 'Privacy Mode Ativado em Ferramentas', priority: 'Alta', priorityColor: 'bg-orange-100 text-orange-700', desc: 'Todas as ferramentas de IA aprovadas devem ter modo de privacidade ativado (que impede o uso do código como dados de treinamento).' },
  { title: 'Revisão de Licença de Dependências', priority: 'Alta', priorityColor: 'bg-orange-100 text-orange-700', desc: 'Dependências sugeridas por IA devem ter licença verificada antes da adoção. Checklist de licença incluído no processo de revisão de PRs.' },
  { title: 'Isolamento de Ambiente para IA', priority: 'Média', priorityColor: 'bg-amber-100 text-amber-700', desc: 'Experimentações com modelos de IA em desenvolvimento devem ser isoladas do ambiente de produção. Credenciais de produção nunca acessíveis em dev/staging onde IA é usada.' },
  { title: 'Alertas de Anomalia de Uso', priority: 'Média', priorityColor: 'bg-amber-100 text-amber-700', desc: 'Alertas automáticos quando o uso de APIs de IA exceder 2× o baseline semanal por squad. Detecta loops de automação incorretos ou vazamento de credenciais.' },
]

const owaspRisks = [
  { id: 'LLM01', risk: 'Prompt Injection — input manipula o modelo a agir fora do escopo', control: 'Spotlighting, policy classification, separação instrução/dados no system prompt', size: 'Todos' },
  { id: 'LLM02', risk: 'Sensitive Information Disclosure — modelo expõe IP, dados de outros usuários, credenciais', control: 'PII sanitization no input + output, sensitive data scan, privacy mode obrigatório', size: 'Todos' },
  { id: 'LLM03', risk: 'Supply Chain Vulnerabilities — modelos, MCPs e dependências comprometidos', control: 'Registry verificado para MCPs, scan de provenance, allowlist de modelos aprovados', size: 'Médias+' },
  { id: 'LLM05', risk: 'Improper Output Handling — output não validado vai direto para produção', control: 'Schema validation, nunca output raw em produção, output scan antes de injetar em pipelines', size: 'Todos' },
  { id: 'LLM06', risk: 'Excessive Agency — agente executa ações além do autorizado', control: 'Least privilege por tool call, human-in-the-loop em ações irreversíveis, plan drift detection', size: 'Uso agentic' },
  { id: 'LLM07', risk: 'System Prompt Leakage — modelo reproduz instruções internas no output', control: 'Leak detection no output, não incluir dados sensíveis em system prompts', size: 'Médias+' },
  { id: 'LLM10', risk: 'Unbounded Consumption — agente consome tokens/compute sem limite', control: 'Budget alerts por squad, rate limiting, max_tokens hardcoded, anomaly detection de uso', size: 'Todos' },
]

export function Phase6Content() {
  return (
    <div>
      {/* Policies */}
      <SectionBlock title="9 Políticas de uso de IA">
        {policies.map((p) => (
          <Accordion key={p.num} title={`${p.num}. ${p.title}`}>
            <div className="pt-3 space-y-2">
              <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
              <p className="text-xs text-slate-400">
                <span className="font-medium text-slate-500">Responsável:</span> {p.owner} ·{' '}
                <span className="font-medium text-slate-500">Revisão:</span> {p.review}
              </p>
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Technical standards */}
      <SectionBlock title="7 Padrões Técnicos">
        {technicalStandards.map((s) => (
          <Accordion key={s.title} title={s.title}>
            <div className="pt-3">
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Guardrails */}
      <SectionBlock title="6 Guardrails (por criticidade)">
        {guardrails.map((g) => (
          <div key={g.title} className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="text-sm font-semibold text-slate-800">{g.title}</p>
              <span className={`text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0 ${g.priorityColor}`}>{g.priority}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </SectionBlock>

      {/* Approval process */}
      <SectionBlock title="Processo de revisão em 5 etapas">
        <SimpleTable
          headers={['#', 'Etapa', 'Responsável', 'SLA']}
          rows={[
            ['1', 'Proposta inicial: documenta ferramenta/prática com casos de uso e riscos', 'Engenheiro proponente', '—'],
            ['2', 'Revisão de segurança: avalia riscos de dados, acesso e licença', 'Security Engineering', '3 dias úteis'],
            ['3', 'Piloto controlado: uso restrito em ambiente isolado por 2 semanas', 'Time AI Enablers', '2 semanas'],
            ['4', 'Avaliação de impacto: resultados documentados com métricas', 'Time AI Enablers', '5 dias úteis'],
            ['5', 'Decisão e comunicação: aprovação ou rejeição com comunicação para toda engenharia', 'CTO / VP Engineering', '2 dias úteis'],
          ]}
        />
      </SectionBlock>

      {/* AI Security Posture */}
      <SectionBlock title="AI Security Posture">
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 mb-3">
          <p className="text-xs text-slate-700 leading-relaxed">
            Segurança de IA não é só "não vaze PII". É uma disciplina própria que cobre como modelos são manipulados, como agentes agem além do autorizado, e como a organização detecta e responde a esses riscos.
          </p>
        </div>

        <Accordion title="Framework de defesa em 3 camadas">
          <div className="pt-3 space-y-3">
            {[
              {
                layer: 'Camada 1 — Input Guardrails',
                subtitle: 'Antes de o prompt chegar ao modelo',
                controls: ['Prompt injection detection', 'PII sanitization automática', 'Policy classification', 'Context shaping'],
                note: 'Pequenas: ao menos PII sanitization + prompt injection detection.',
              },
              {
                layer: 'Camada 2 — Output Guardrails',
                subtitle: 'Antes de o output chegar ao usuário ou sistema downstream',
                controls: ['Nenhum output raw em produção', 'Schema validation', 'Sensitive data scan no output', 'System prompt leakage detection'],
                note: 'Pequenas: ao menos nenhum output raw + schema validation para outputs estruturados.',
              },
              {
                layer: 'Camada 3 — Runtime Guardrails',
                subtitle: 'Quando agentes acessam ferramentas e sistemas externos',
                controls: ['Least privilege por tool call', 'Audit log por ação do agente', 'Plan drift detection', 'Human-in-the-loop para ações irreversíveis'],
                note: 'Pequenas: human-in-the-loop para qualquer ação agentic em produção.',
              },
            ].map((layer) => (
              <div key={layer.layer} className="border border-slate-200 rounded-xl p-3">
                <p className="text-sm font-bold text-slate-800">{layer.layer}</p>
                <p className="text-xs text-slate-500 mb-2">{layer.subtitle}</p>
                <BulletList items={layer.controls} />
                <p className="text-xs text-slate-400 italic mt-2">{layer.note}</p>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="OWASP LLM Top 10 · 2025">
          <div className="pt-3">
            <SimpleTable
              headers={['ID', 'Risco', 'Controle prático', 'Tamanho']}
              rows={owaspRisks.map((r) => [r.id, r.risk, r.control, r.size])}
            />
          </div>
        </Accordion>
      </SectionBlock>

      {/* MCP Security */}
      <SectionBlock title="MCP Security — 6 controles mínimos">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3">
          <p className="text-xs text-slate-700">
            92% dos MCP servers em uso empresarial têm alto risco de segurança — 24% sem nenhuma autenticação.
            O EU AI Act (em vigor ago/2026) pode responsabilizar organizações por integrações MCP não governadas.
          </p>
        </div>
        <SimpleTable
          headers={['Controle', 'O que implica']}
          rows={[
            ['OAuth 2.0', 'Autenticação obrigatória. Nenhum agente conecta a MCP server sem identity verificada.'],
            ['RBAC por operação', 'Autorização por tool call individual, não só por servidor. Escopo mínimo por papel.'],
            ['Audit log com atribuição', 'Quem pediu, qual tool, quais parâmetros, qual resultado — log imutável por operação.'],
            ['Path & scope controls', 'Limitar quais recursos e operações cada MCP server pode expor. Allowlist explícita de paths.'],
            ['Rate limiting', 'Por agente, por usuário e por servidor. Previne consumo descontrolado e ataques de amplificação.'],
            ['Sensitivity label evaluation', 'Classificar dados expostos por cada MCP tool. Bloquear acesso a dados acima do autorizado.'],
          ]}
        />
      </SectionBlock>
    </div>
  )
}
