import { Accordion } from '../components/Accordion'
import { SectionBlock, SimpleTable, BulletList } from '../components/SectionBlock'

const tracks = [
  {
    name: 'Trilha Técnica',
    color: 'bg-blue-600',
    items: [
      'Débito técnico impedindo adoção de IA',
      'Pipeline de CI/CD com automação insuficiente',
      'Cobertura de testes abaixo do mínimo seguro',
      'Ambiente de desenvolvimento instável ou não reproduzível',
      'Arquitetura acoplada que dificulta integração de ferramentas',
      'Ausência de observabilidade adequada em produção',
    ],
  },
  {
    name: 'Trilha Organizacional',
    color: 'bg-amber-500',
    items: [
      'Processos de aprovação lentos para adoção de ferramentas',
      'Falta de ownership claro sobre iniciativas de IA',
      'Ausência de estrutura dedicada (Time AI Enablers)',
      'Roadmap instável que interrompe experimentos continuamente',
      'Dependências externas não gerenciadas que bloqueiam decisões',
      'Falta de patrocínio executivo claro para a iniciativa',
    ],
  },
  {
    name: 'Trilha Cultura',
    color: 'bg-violet-600',
    items: [
      'Resistência ativa ou passiva à adoção de IA',
      'Medo de julgamento ao experimentar e errar com IA',
      'Ausência de reconhecimento para iniciativas de adoção',
      'Falta de capacidade técnica para avaliar output de IA',
      'Comunicação deficiente sobre valor e objetivos da adoção',
      'Ausência de campeões de IA nos squads',
    ],
  },
]

const milestones = [
  {
    marco: '+30 dias',
    foco: 'Itens críticos de maior impacto e menor esforço — as "vitórias rápidas"',
    criterio: 'Bloqueadores imediatos removidos; time consegue experimentar com IA sem impedimentos do dia a dia',
  },
  {
    marco: '+90 dias',
    foco: 'Itens de médio esforço que criam infraestrutura para adoção sustentável',
    criterio: 'Base técnica e organizacional suficiente para expandir adoção além do time piloto',
  },
  {
    marco: '+180 dias',
    foco: 'Itens estruturais de alto esforço que garantem escala e sustentabilidade de longo prazo',
    criterio: 'Organização operando com IA de forma sistemática, com governança e métricas estabelecidas',
  },
]

export function Phase4Content() {
  return (
    <div>
      {/* Formula */}
      <SectionBlock title="Fórmula de priorização">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm font-mono font-bold text-amber-900 mb-2">
            Score = (impacto × 3) + (esforço_inverso × 2) + (risco × 2)
          </p>
          <div className="space-y-1 text-xs text-amber-800">
            <p>Cada variável é avaliada de 1 a 3.</p>
            <p>Esforço inverso: esforço baixo = 3, médio = 2, alto = 1.</p>
            <p>Score máximo: 15 · Score mínimo: 7</p>
            <p><strong>Crítico:</strong> score ≥ 11 · <strong>Médio:</strong> score 7–10</p>
          </div>
        </div>
      </SectionBlock>

      {/* Tracks */}
      <SectionBlock title="As 3 trilhas do plano">
        {tracks.map((track) => (
          <Accordion key={track.name} title={track.name}>
            <div className="pt-3">
              <BulletList items={track.items} />
            </div>
          </Accordion>
        ))}
      </SectionBlock>

      {/* Milestones */}
      <SectionBlock title="Estrutura de milestones">
        <div className="space-y-3">
          {milestones.map((m) => (
            <div key={m.marco} className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-600 text-white text-xs font-bold rounded-full px-3 py-1">{m.marco}</span>
              </div>
              <p className="text-sm font-medium text-slate-800 mb-1">{m.foco}</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Critério de conclusão:</span> {m.criterio}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Bottlenecks table */}
      <SectionBlock title="Gargalos típicos por dimensão">
        <SimpleTable
          headers={['Dimensão', 'Gargalo (Baixo)', 'Gargalo (Médio)']}
          rows={[
            ['Autonomia', 'Baixa autonomia limita experimentação com IA sem aprovação constante.', 'Autonomia parcial pode gerar inconsistência: algumas iniciativas avançam enquanto outras aguardam.'],
            ['Cont. Delivery', 'Pipeline não consolidado aumenta lead time e reduz ciclos de feedback.', 'CD parcialmente implementado: pipelines existem mas sem automação completa.'],
            ['Qualidade', 'Ausência de testes automatizados amplia risco de regressões durante adoção de IA.', 'Cobertura parcial: módulos críticos cobertos, mas gaps na automação reduzem confiança.'],
            ['Vel. Feedback', 'Ciclo de feedback lento compromete a velocidade de aprendizado com ferramentas de IA.', 'Feedback moderado: revisões realizadas, mas sem SLAs definidos.'],
            ['Ownership', 'Baixo senso de propriedade reduz a motivação para adotar IA de forma autônoma.', 'Ownership concentrado em alguns membros sênior; risco de gargalo em revisões.'],
            ['DX & Código', 'Experiência de desenvolvimento degradada reduz o ganho percebido das ferramentas de IA.', 'DX razoável, mas ainda com fricção em setup que pode desacelerar novos membros.'],
            ['Senioridade', 'Time predominantemente júnior exige maior investimento para validar sugestões de IA.', 'Seniority mista: capacidade de revisão crítica limitada pela concentração sênior.'],
            ['Flex. Org.', 'Rigidez organizacional limita a capacidade de experimentação e iteração rápida.', 'Flexibilidade parcial: dependências externas adicionam latência nas decisões.'],
            ['Uso de IA', 'Uso atual inexistente ou individual, sem padronização.', 'IA já utilizada individualmente por alguns membros, mas sem padronização de ferramentas.'],
          ]}
        />
      </SectionBlock>
    </div>
  )
}
