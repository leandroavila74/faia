import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable, BulletList } from '../components/SectionBlock'

const rolloutPlan = [
  { size: '1–9 engenheiros', waves: '1 onda', duration: '4–6 semanas', strategy: 'Adoção simultânea de todo o time. Piloto e escala são a mesma fase.' },
  { size: '10–29 engenheiros', waves: '2 ondas', duration: '6–8 semanas cada', strategy: 'Onda 1: 50% do time (squads mais maduros). Onda 2: restante com playbook documentado da onda 1.' },
  { size: '30–99 engenheiros', waves: '3 ondas', duration: '8 semanas cada', strategy: 'Onda 1: time piloto + 1 squad adjacente. Ondas 2–3: rollout por afinidade técnica e disponibilidade de campeões.' },
  { size: '100–299 engenheiros', waves: '4 ondas', duration: '6–10 semanas cada', strategy: 'Onda 1: squads com campeões de IA formados. Ondas subsequentes: rollout por vertical de produto.' },
  { size: '300+ engenheiros', waves: '5 ondas', duration: '8–12 semanas cada', strategy: 'Ondas por business unit ou domínio. Requer estrutura de campeões por squad e plataforma interna de IA.' },
]

const metricsAdoption = [
  { id: 'MET-A01', name: '% de engenheiros usando IA semanalmente', desc: 'Proporção de engenheiros que usaram pelo menos uma ferramenta de IA em tarefas de desenvolvimento na semana. Meta progressiva: 25% → 50% → 80%.' },
  { id: 'MET-A02', name: 'Número de ferramentas de IA ativas', desc: 'Quantidade de ferramentas de IA aprovadas e em uso ativo na organização. Indica profundidade da adoção além de um único ponto de entrada.' },
  { id: 'MET-A03', name: 'Taxa de adoção por squad', desc: 'Proporção de squads com pelo menos 1 ferramenta de IA padronizada e em uso por toda a equipe. Meta: 100% dos squads ao final da última onda.' },
  { id: 'MET-A04', name: 'Distribuição de proficiência (Capability Heatmap)', desc: 'Proporção da engenharia em cada nível L0/L1/L2/L3. Meta ao completar escala: <10% em L0 · ≥60% em L1+ · ≥20% em L2+ · ≥5% em L3. Publicado por squad trimestralmente.' },
  { id: 'MET-A05', name: 'Tempo para atingir L1 em novos engenheiros', desc: 'Tempo médio para um engenheiro novo atingir L1 a partir do onboarding. Meta: <4 semanas.' },
]

const metricsEngagement = [
  { id: 'MET-E01', name: '% do SDLC coberto por IA', desc: 'Proporção dos 6 estágios do SDLC com nível de adoção ≥ "team" na organização.' },
  { id: 'MET-E02', name: 'Sessões de IA por engenheiro por semana', desc: 'Número médio de sessões de interação com ferramentas de IA por engenheiro por semana. Indica qualidade e profundidade do uso.' },
  { id: 'MET-E03', name: '% de PRs com revisão assistida por IA', desc: 'Proporção de pull requests que passam por revisão automática de IA antes de revisão humana.' },
]

const metricsImpact = [
  { id: 'MET-I01', name: 'Variação no cycle time', desc: 'Delta percentual no tempo médio de commit a deploy após adoção de IA em relação ao baseline.' },
  { id: 'MET-I02', name: 'Variação na taxa de bugs', desc: 'Delta percentual na taxa de bugs reportados em produção após adoção de IA.' },
  { id: 'MET-I03', name: 'Variação nas métricas DORA', desc: 'Variação consolidada nas 4 métricas DORA (deployment frequency, lead time, change failure rate, MTTR) antes e depois da adoção completa.' },
]

const ceremonies = [
  { name: 'Weekly Sync', freq: 'Semanal · 30 min', participants: 'Time central de adoção de IA', objective: 'Revisar métricas da semana, desbloquear impedimentos, alinhar prioridades da próxima onda' },
  { name: 'Campeões Champions', freq: 'Quinzenal · 45 min', participants: 'Time central + campeões de IA por squad', objective: 'Compartilhar aprendizados entre squads, alinhar boas práticas, identificar casos de uso replicáveis' },
  { name: 'Retro de Adoção', freq: 'Mensal · 60 min', participants: 'Time central + liderança técnica', objective: 'Avaliar progresso das métricas, ajustar estratégia de rollout, comunicar resultados para a organização' },
]

const risks = [
  { id: 'RISK-S01', name: 'Big-bang rollout', mitigation: 'Implementar rollout em ondas com critérios de entrada explícitos. Nunca avançar sem métricas de sucesso da onda anterior.' },
  { id: 'RISK-S02', name: 'Potemkin AI (adoção superficial)', mitigation: 'Medir engajamento qualitativo (sessões/semana, profundidade de uso) além de adoção binária.' },
  { id: 'RISK-S03', name: 'Sobrecarga do Time AI Enablers', mitigation: 'Limitar squads em onboarding simultâneo ao capacity do Time AI Enablers. Usar modelo de campeões para distribuir carga.' },
  { id: 'RISK-S04', name: 'Perda de conhecimento entre ondas', mitigation: 'Documentar playbook de cada onda antes de iniciar a próxima. Campeões da onda anterior tornam-se mentores da próxima.' },
  { id: 'RISK-S05', name: 'Resistência sênior', mitigation: 'Envolver engenheiros sêniores no design do processo desde o início. Demonstrar como IA amplifica capacidade técnica avançada.' },
  { id: 'RISK-S06', name: 'Proliferação de ferramentas (tool sprawl)', mitigation: 'Processo de aprovação centralizado. Revisão trimestral do portfólio com descontinuação de ferramentas de baixo uso.' },
  { id: 'RISK-S07', name: 'Governança insuficiente para escala', mitigation: 'Verificar que a Fase 6 está completa antes de iniciar a Fase 7. Escalar o processo de revisão de segurança antes de aumentar ferramentas aprovadas.' },
  { id: 'RISK-S08', name: 'Regressão pós-conclusão', mitigation: 'Manter as cerimônias recorrentes mesmo após o framework "concluído". Tratar adoção de IA como prática contínua, não projeto com fim definido.' },
]

const conclusionCriteria = [
  '≥ 80% dos engenheiros da organização usando pelo menos uma ferramenta de IA semanalmente',
  'Todos os squads com pelo menos 2 estágios do SDLC com IA no nível "team" ou superior',
  'Framework de governança v1 publicado, comunicado e com processo de revisão ativo',
  'Métricas DORA com melhora mensurável em relação ao baseline pré-framework',
  'Pelo menos 1 ciclo completo de retro de adoção realizado com liderança técnica e resultados documentados',
]

export function Phase7Content() {
  return (
    <div>
      {/* Rollout plan */}
      <SectionBlock title="Plano de rollout em ondas">
        <SimpleTable
          headers={['Tamanho', 'Ondas', 'Duração', 'Estratégia']}
          rows={rolloutPlan.map((r) => [r.size, r.waves, r.duration, r.strategy])}
        />
      </SectionBlock>

      {/* Metrics */}
      <SectionBlock title="9 métricas em 3 camadas">
        <Accordion title="Camada 1 — Adoção (5 métricas)" defaultOpen>
          <div className="pt-3 space-y-2">
            {metricsAdoption.map((m) => (
              <div key={m.id} className="bg-slate-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono font-bold text-orange-600">{m.id}</span>
                </div>
                <p className="text-sm font-medium text-slate-800">{m.name}</p>
                <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </Accordion>
        <Accordion title="Camada 2 — Engajamento (3 métricas)">
          <div className="pt-3 space-y-2">
            {metricsEngagement.map((m) => (
              <div key={m.id} className="bg-slate-50 rounded-lg p-3">
                <span className="text-xs font-mono font-bold text-orange-600">{m.id}</span>
                <p className="text-sm font-medium text-slate-800 mt-0.5">{m.name}</p>
                <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </Accordion>
        <Accordion title="Camada 3 — Impacto / DORA (3 métricas)">
          <div className="pt-3 space-y-2">
            {metricsImpact.map((m) => (
              <div key={m.id} className="bg-slate-50 rounded-lg p-3">
                <span className="text-xs font-mono font-bold text-orange-600">{m.id}</span>
                <p className="text-sm font-medium text-slate-800 mt-0.5">{m.name}</p>
                <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </Accordion>
      </SectionBlock>

      {/* Ceremonies */}
      <SectionBlock title="3 Cerimônias recorrentes">
        <SimpleTable
          headers={['Cerimônia', 'Freq.', 'Participantes', 'Objetivo']}
          rows={ceremonies.map((c) => [c.name, c.freq, c.participants, c.objective])}
        />
      </SectionBlock>

      {/* Risks */}
      <SectionBlock title="8 Riscos de escala e mitigações">
        {risks.map((r) => (
          <div key={r.id} className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-rose-600">{r.id}</span>
              <p className="text-sm font-semibold text-slate-800">{r.name}</p>
            </div>
            <p className="text-xs text-slate-500"><span className="font-medium text-slate-600">Mitigação:</span> {r.mitigation}</p>
          </div>
        ))}
      </SectionBlock>

      {/* Conclusion criteria */}
      <SectionBlock title="5 Critérios de conclusão do framework">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <BulletList items={conclusionCriteria} />
        </div>
      </SectionBlock>
    </div>
  )
}
