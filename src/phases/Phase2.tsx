import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable, BulletList } from '../components/SectionBlock'

const archetypes = [
  {
    name: 'Lean',
    color: 'border-indigo-200 bg-indigo-50',
    headerColor: 'bg-indigo-600',
    size: 'Empresas pequenas · 0,5–1 pessoa em part-time',
    techResponsibilities: [
      'Avaliar e recomendar ferramentas de IA para o contexto do time',
      'Criar guias de configuração e boas práticas de prompts',
      'Monitorar qualidade do código gerado com assistência de IA',
      'Definir guardrails mínimos: o que pode/não pode ir em prompt, revisão obrigatória, dados sensíveis',
      'Definir governança básica: política de ferramentas aprovadas, critério de revisão e owner das decisões',
    ],
    processResponsibilities: [
      'Facilitar retrospectivas focadas em uso de IA mensalmente',
      'Documentar casos de uso validados e lições aprendidas',
      'Manter o backlog de experimentos de IA atualizado',
    ],
    cultureResponsibilities: [
      'Criar ambiente seguro para experimentação sem punição por falhas',
      'Compartilhar aprendizados informalmente via canais de chat',
      'Estabelecer Definition of Done que inclua critério mínimo de qualidade',
      'Introduzir o conceito de Shift Left: identificar problemas antes do merge',
    ],
    antiResp: [
      'Não é responsável por desenvolver features com IA no lugar de outros',
      'Não centraliza todas as decisões de ferramentas de IA',
      'Não substitui o papel de tech lead ou engineering manager',
    ],
    ritual: 'Check-in quinzenal de 30 min com o time completo para compartilhar aprendizados e ajustar prioridades de experimentação.',
    plan: [
      '30d: Escolher 1–2 ferramentas, onboarding de todo o time',
      '60d: Documentar 2 casos de uso validados com ganho mensurável',
      '90d: Revisar governança básica e critérios de expansão',
    ],
  },
  {
    name: 'Dedicado',
    color: 'border-violet-200 bg-violet-50',
    headerColor: 'bg-violet-600',
    size: 'Empresas médias · 2–3 pessoas dedicadas',
    techResponsibilities: [
      'Avaliar, pilotar e standardizar ferramentas de IA em múltiplos times',
      'Criar e manter biblioteca de prompts, templates e integrações internas',
      'Definir critérios de qualidade para código assistido por IA e implementar gates no pipeline',
      'Definir guardrails formais priorizados por criticidade (CRÍTICA → ALTA → MÉDIA)',
      'Desenvolver infraestrutura compartilhada básica: MCPs internos para acesso padronizado a contexto',
    ],
    processResponsibilities: [
      'Facilitar cerimônias de adoção bi-semanais com representantes de cada squad',
      'Gerenciar backlog de iniciativas de IA com priorização por impacto e esforço',
      'Reportar métricas de adoção para liderança mensalmente',
    ],
    cultureResponsibilities: [
      'Treinar tech leads de todos os squads nas melhores práticas de uso de IA',
      'Criar conteúdo interno (guias, vídeos curtos, demos ao vivo)',
      'Identificar e apoiar campeões de IA em cada squad',
      'Implementar e disseminar Shift Left: quality gates em pre-commit e PR',
      'Padronizar Definition of Done cross-squad com critérios de cobertura mínima como requisito de merge',
    ],
    antiResp: [
      'Não é o único time que pode usar ou avaliar ferramentas de IA',
      'Não substitui a autonomia técnica de cada squad',
      'Não é responsável por resultados de produto dos outros times',
    ],
    ritual: 'Weekly sync interno (30 min) + Bi-weekly com representantes dos squads para disseminação de aprendizados.',
    plan: [
      '30d: Mapa de maturidade de todos os squads + priorizar 3 iniciativas de alto impacto',
      '60d: ≥ 50% dos squads com pelo menos 1 ferramenta de IA padronizada',
      '90d: Relatório de impacto consolidado + roadmap de adoção para próximo trimestre',
    ],
  },
  {
    name: 'Distribuído',
    color: 'border-blue-200 bg-blue-50',
    headerColor: 'bg-blue-600',
    size: 'Empresas grandes · 4–6 pessoas centrais + 1 campeão por squad',
    techResponsibilities: [
      'Definir a estratégia e o roadmap de adoção de IA para toda a organização',
      'Estabelecer e manter governança corporativa de IA: políticas, auditoria e alinhamento regulatório',
      'Definir e evoluir guardrails de segurança e compliance para toda a engenharia',
      'MCPs internos — servidores Model Context Protocol para expor dados/APIs internas de forma padronizada',
      'Marketplace de skills — catálogo centralizado de prompts, agentes e templates validados',
      'AI Harness — infraestrutura de orquestração, sandboxing e observabilidade para agentes de IA',
    ],
    processResponsibilities: [
      'Treinar e apoiar os campeões de IA em cada squad',
      'Adaptar melhores práticas centrais ao contexto de cada squad',
      'Reportar bloqueios e aprendizados ao time central mensalmente',
    ],
    cultureResponsibilities: [
      'Ser ponto focal de adoção de IA no squad (não dedicação exclusiva)',
      'Adaptar as melhores práticas centrais ao contexto do squad',
    ],
    antiResp: [
      'Não é um gargalo de aprovação para iniciativas de IA nos squads',
      'Não é responsável pela execução técnica de IA em cada squad',
      'Não substitui a liderança técnica local dos squads',
    ],
    ritual: 'Estrutura federada: time central coordena, campeões executam localmente.',
    plan: [
      '30d: Identificar e onboarding dos campeões + mapa de maturidade por squad',
      '60d: Framework de governança v1 publicado + ≥ 30% dos squads com adoção ativa',
      '90d: Plataforma interna de IA v1 + 60% dos squads com métricas de adoção reportando',
    ],
  },
]

export function Phase2Content() {
  return (
    <div>
      {/* Archetypes */}
      <SectionBlock title="Os 3 arquétipos de Time AI Enablers">
        {archetypes.map((arch) => (
          <Accordion key={arch.name} title={`${arch.name} — ${arch.size}`}>
            <div className="pt-3 space-y-4">
              <Accordion title="Responsabilidades técnicas" defaultOpen>
                <div className="pt-2">
                  <BulletList items={arch.techResponsibilities} />
                </div>
              </Accordion>
              <Accordion title="Responsabilidades de processo">
                <div className="pt-2">
                  <BulletList items={arch.processResponsibilities} />
                </div>
              </Accordion>
              <Accordion title="Responsabilidades de cultura">
                <div className="pt-2">
                  <BulletList items={arch.cultureResponsibilities} />
                </div>
              </Accordion>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs font-bold text-red-600 mb-2">Anti-responsabilidades</p>
                <BulletList items={arch.antiResp} />
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs font-bold text-slate-600 mb-1">Ritual principal</p>
                <p className="text-xs text-slate-600">{arch.ritual}</p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                <p className="text-xs font-bold text-indigo-700 mb-2">Plano 30/60/90 dias</p>
                <BulletList items={arch.plan} />
              </div>
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Proficiency levels info */}
      <SectionBlock title="Programa de Capacitação Contínua">
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            O Time AI Enablers é o dono do programa de capacitação. Capability humana não é um evento pontual — é fio condutor de todas as fases.
          </p>
        </div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Gates de proficiência</p>
        <SimpleTable
          headers={['Nível', 'Gate de avanço']}
          rows={[
            ['L0 · Curioso', 'Obrigatório sair do L0 antes de usar IA em contexto produtivo'],
            ['L1 · Aplicador', 'Gate de entrada para Fase 3: 100% do time piloto em ≥ L1'],
            ['L2 · Crítico', 'Gate para "team" na Fase 5: ≥ 60% do time em L2 por estágio'],
            ['L3 · Multiplicador', 'Meta de escala: ≥ 1 L3 por squad; ≥ 5% da engenharia total em L3'],
          ]}
        />
      </SectionBlock>

      {/* Metrics */}
      <SectionBlock title="Métricas de saúde (Lean)">
        <div className="space-y-2">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-bold text-blue-700 mb-1">Leading</p>
            <BulletList items={[
              '% do time usando IA semanalmente',
              '# experimentos iniciados/mês',
              'Tempo médio de onboarding em nova ferramenta',
            ]} />
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="text-xs font-bold text-emerald-700 mb-1">Lagging</p>
            <BulletList items={[
              'Variação de velocity antes/depois',
              'Taxa de defeitos em código com IA',
            ]} />
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
