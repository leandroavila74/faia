import type { PhaseInfo } from '../types'

export const phases: PhaseInfo[] = [
  {
    id: 1,
    title: 'Diagnóstico Organizacional e de Engenharia',
    shortTitle: 'Diagnóstico',
    philosophy: 'IA não deve ser limitada pela estrutura organizacional e pela maturidade da engenharia.',
    color: 'indigo',
    objective:
      'Mede o nível de prontidão da organização e da engenharia para adoção de IA, identificando lacunas de cultura, maturidade operacional e capacidade técnica. O resultado orienta todas as fases seguintes e serve como baseline para medir evolução.',
    meta: [
      { label: 'Pré-requisitos', value: 'Nenhum — ponto de entrada do framework' },
      { label: 'Tempo estimado', value: '≤ 8 minutos' },
      { label: 'Conclusão esperada', value: '≥ 50%' },
      { label: 'Acesso', value: 'Gratuito · Resultado imediato' },
    ],
  },
  {
    id: 2,
    title: 'Time AI Enablers',
    shortTitle: 'AI Enablers',
    philosophy:
      'Antes de experimentar, defina quem é dono da jornada. Sem um responsável claro, pilotos nascem e morrem sem deixar rastro.',
    color: 'violet',
    objective:
      'Define quem é o dono da jornada de adoção de IA antes de qualquer experimento começar. Consolida o Time AI Enablers com papéis, responsabilidades e rituais — garantindo que o piloto (Fase 3) tenha patrocínio, estrutura e um responsável por transformar aprendizados em expansão.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fase 1 concluída' },
      { label: 'Tempo estimado', value: '≤ 10 minutos' },
      { label: 'Conversão esperada', value: '≥ 30% (Fase 1 → 2)' },
      { label: 'Conclusão esperada', value: '≥ 70%' },
    ],
  },
  {
    id: 3,
    title: 'Definição do Time Piloto',
    shortTitle: 'Time Piloto',
    philosophy:
      'O primeiro piloto deve ser feito no ambiente com maior probabilidade de sucesso — não no mais crítico, mais visível ou mais problemático.',
    color: 'blue',
    objective:
      'Com o Time AI Enablers formado e o dono da jornada definido, esta fase seleciona qual squad de produto vai ser o primeiro a experimentar IA em contexto real de produção. Avalia prontidão do time candidato e gera um plano operacional completo para o ciclo piloto.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fases 1 e 2 concluídas' },
      { label: 'Tempo estimado', value: '≤ 12 minutos' },
      { label: 'Conversão esperada', value: '≥ 50% (Fase 2 → 3)' },
      { label: 'Conclusão esperada', value: '≥ 65%' },
    ],
  },
  {
    id: 4,
    title: 'Remoção de Gargalos Organizacionais e Técnicos',
    shortTitle: 'Gargalos',
    philosophy: 'A IA acelera um fluxo que já consegue evoluir. Se o fluxo não evolui, IA apenas amplifica o caos.',
    color: 'amber',
    objective:
      'Consolida os gargalos identificados nas fases anteriores, prioriza-os por impacto, esforço e risco, e gera um plano sequenciado em 3 trilhas com marcos relativos.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fases 1, 2 e 3 · Todas obrigatórias' },
      { label: 'Tempo estimado', value: '≤ 15 minutos' },
      { label: 'Conversão esperada', value: '≥ 60% (Fase 3 → 4)' },
      { label: 'Diferencial', value: 'Lista editável antes da geração' },
    ],
  },
  {
    id: 5,
    title: 'Adoção Progressiva de IA no Fluxo de Desenvolvimento',
    shortTitle: 'Adoção Progressiva',
    philosophy:
      'IA não se adota em um único movimento. Cada etapa do ciclo de desenvolvimento tem prontidão e impacto diferentes.',
    color: 'emerald',
    objective:
      'Gera um playbook de adoção progressiva para os 6 estágios do SDLC. Para cada estágio, define o nível de adoção recomendado (none → experimental → team → org), o workflow com responsabilidades, anti-padrões e critérios de avanço.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fases 1, 2 e 4' },
      { label: 'Tempo estimado', value: '≤ 12 minutos' },
      { label: 'Conversão esperada', value: '≥ 65% (Fase 4 → 5)' },
      { label: 'Conclusão esperada', value: '≥ 75%' },
    ],
  },
  {
    id: 6,
    title: 'Governança e Padronização',
    shortTitle: 'Governança',
    philosophy:
      'Governança boa é a que ninguém percebe que existe. Governança ruim é a que aparece em toda decisão técnica.',
    color: 'rose',
    objective:
      'Estabelece políticas, padrões e mecanismos de controle que asseguram uso responsável, rastreável e consistente de IA em toda a engenharia, reduzindo risco e variabilidade.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fases 1, 2 e 5' },
      { label: 'Tempo estimado', value: '≤ 15 minutos' },
      { label: 'Conversão esperada', value: '≥ 55% (Fase 5 → 6)' },
      { label: 'PDF download esperado', value: '≥ 65%' },
    ],
  },
  {
    id: 7,
    title: 'Escala Organizacional',
    shortTitle: 'Escala',
    philosophy:
      'Escalar não é replicar o piloto. É codificar o que aprendeu, sequenciar quem adota, e medir o que importa.',
    color: 'orange',
    objective:
      'Expande a adoção de IA para todas as equipes de engenharia, operacionalizando a estrutura de governança e os aprendizados das fases anteriores para gerar impacto organizacional amplo e sustentável. A conclusão desta fase marca o ciclo completo do framework.',
    meta: [
      { label: 'Pré-requisitos', value: 'Fases 1, 2, 5 e 6 · Fases 3 e 4 opcionais' },
      { label: 'Tempo estimado', value: '≤ 18 minutos' },
      { label: 'Conversão esperada', value: '≥ 50% (Fase 6 → 7)' },
      { label: 'Conclusão esperada', value: '≥ 75%' },
    ],
  },
]

export const coverTags = [
  '7 fases sequenciais',
  '9 dimensões avaliadas',
  '3 macro-blocos',
  'exemplos de ferramentas por categoria',
  '3 arquétipos de adoção',
  '6 etapas do SDLC',
  '9 políticas · 7 padrões técnicos',
  '4 níveis de proficiência em IA',
  'AI Security Posture · OWASP LLM Top 10',
]
