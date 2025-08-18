import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Brain, Target, TrendingUp, Users, Briefcase, Code, ChevronRight, CheckCircle } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
const InteractiveDemo = () => {
  const [currentDemo, setCurrentDemo] = useState<'scenarios' | 'validation' | 'alignment' | 'competencies'>('competencies');
  const [activeScenario, setActiveScenario] = useState(0);
  const [indicators, setIndicators] = useState({
    cultural_fit: 0,
    technical_skills: 0,
    retention_score: 0,
    hiring_speed: 0
  });
  const businessScenarios = [{
    category: "Negócios",
    icon: Briefcase,
    title: "Decisão Estratégica de Alto Impacto",
    prompt: "Conte sobre uma situação onde você precisou tomar uma decisão estratégica que impactava diretamente a receita da empresa, considerando trade-offs entre custos, prazos e qualidade. Como você validou sua decisão?",
    evaluation: ["Pensamento estratégico", "Análise de ROI", "Gestão de stakeholders"],
    response: "Enfrentei dilema: API de pagamentos vs. marketplace. Trade-offs analisados: (1) Marketplace geraria +R$ 500k/mês mas demandaria 4 meses; (2) API reduziria churn mas sem receita imediata. Decidi pela API considerando que 40% de churn custaria R$ 3M/mês. Priorizei impacto vs. tempo, resultando em +R$ 2M/mês de retenção.",
    cultural_fit: 94
  }, {
    category: "Produto",
    icon: Target,
    title: "Otimização de Experiência Crítica",
    prompt: "Descreva uma vez que você identificou e resolveu um problema crítico de UX que estava impactando métricas importantes do produto. Qual foi sua abordagem e os resultados obtidos?",
    evaluation: ["User-centric thinking", "Data-driven decisions", "Iteração rápida"],
    response: "Detectei 70% abandono no checkout. Opções avaliadas: (1) Redesign completo (3 meses); (2) Otimização incremental (2 semanas); (3) Checkout em etapa única (1 mês). Escolhi opção 3 por equilibrar impacto vs. velocidade. Implementação com A/B testing validou redução de 45% no abandono, gerando +R$ 800k/mês.",
    cultural_fit: 96
  }, {
    category: "Tecnologia",
    icon: Code,
    title: "Sistema de Missão Crítica",
    prompt: "Conte sobre uma vez que você precisou construir ou otimizar uma aplicação de alto volume transacional. Como você lidou com requisitos de baixa latência, throughput elevado e necessidade de isolar clientes sem impacto nas APIs?",
    evaluation: ["Arquiteturas resilientes", "Performance crítica", "Isolamento de falhas"],
    response: "Sistema crítico 50M transações/dia enfrentava latência crescente. Trade-offs analisados: (1) Escala horizontal custosa mas rápida; (2) Otimização database complexa; (3) Isolamento parcial com clusters dedicados. Escolhi isolamento progressivo para 10% dos clientes VIP enquanto otimizava o principal, mantendo SLA 99.99% e 15k TPS.",
    cultural_fit: 97
  }, {
    category: "Pessoas",
    icon: Users,
    title: "Liderança em Crise",
    prompt: "Descreva uma situação onde você precisou liderar sua equipe através de uma crise técnica ou organizacional significativa. Como você manteve a moral, a produtividade e entregou resultados sob pressão?",
    evaluation: ["Liderança sob pressão", "Comunicação em crise", "Gestão de equipe"],
    response: "Outage crítico afetando 2M usuários. Dilemas enfrentados: (1) Rollback total perdendo 6h de dados; (2) Fix incremental arriscado; (3) Recovery paralelo com squads dedicados. Escolhi opção 3: coordenei war room, updates C-level a cada 30min, e recovery em paralelo. Resultado: 4h vs. 8h estimadas, zero perda de dados.",
    cultural_fit: 98
  }];
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  
  const deepDiveCases = [{
    title: "Performance Crítica",
    situation: "Sistema de 50M transações/dia com latência crescente afetando SLA",
    result: "Latência P99 reduzida de 300ms → 30ms | Throughput aumentado de 15k → 35k TPS",
    tradeoffs: [
      "Escala horizontal (custos vs. velocidade): Optou por otimização primeiro",
      "Database sharding (complexidade vs. impacto): Implementou particionamento temporal",
      "Cache distribuído (consistência vs. performance): Redis Cluster com eventual consistency"
    ],
    obstacles: [
      "Lock contention em transações críticas: Resolvido com query optimization",
      "Memory leaks em conexões idle: Implementou connection pooling robusto",
      "Query N+1 em relatórios: Migrou para batch processing assíncrono"
    ],
    technologies: [
      "Redis Cluster: Cache distribuído para reduzir latência de consultas",
      "PostgreSQL particionado: Divisão temporal para otimizar queries históricas",
      "Kafka: Processamento assíncrono para operações não-críticas"
    ],
    foundations: [
      "CAP Theorem: Priorizou disponibilidade e partição tolerante",
      "Circuit Breaker Pattern: Isolamento de falhas em serviços críticos",
      "Eventual Consistency: Aceitou inconsistência temporária para performance"
    ],
    businessImpact: "Sistema suportou Black Friday com 3x volume normal sem degradação"
  }, {
    title: "Arquitetura Resiliente", 
    situation: "Outage crítico afetando 2M usuários com cascading failures",
    result: "Recovery em 4h vs. 8h estimadas | Zero data loss | Processo replicável",
    tradeoffs: [
      "Rollback total vs. fix incremental: Escolheu recovery paralelo",
      "Comunicação stakeholders vs. foco técnico: Definiu incident commander",
      "Speed vs. thoroughness: Priorizou restore com post-mortem detalhado"
    ],
    obstacles: [
      "Database corruption: 3 shards específicos com dados inconsistentes",
      "Cascading failures: Microserviços dependentes falhando em sequência",
      "Read replica lag: Inconsistência entre master e replicas"
    ],
    technologies: [
      "War room setup: Coordenação centralizada com Slack + Zoom",
      "Parallel recovery: Squads dedicados por componente crítico",
      "Grafana + Prometheus: Monitoring real-time do processo de recovery"
    ],
    foundations: [
      "Chaos Engineering: Testes prévios de resistência facilitaram diagnóstico",
      "Bulkhead Pattern: Isolamento impediu falha total do sistema",
      "Graceful Degradation: Funcionalidades não-críticas desabilitadas"
    ],
    businessImpact: "Manteve confiança do mercado e evitou perda de R$ 5M em transações"
  }, {
    title: "Crescimento Exponencial",
    situation: "Fintech crescendo 300% em 6 meses, arquitetura não escalava",
    result: "Suportou crescimento 10x | Zero downtime na migração | Time produtivo",
    tradeoffs: [
      "Rewrite vs. refactoring: Escolheu modular monolith com microserviços estratégicos",
      "Cloud-native vs. hybrid: Migração incremental para reduzir riscos",
      "Speed vs. quality: Implementou feature flags para releases graduais"
    ],
    obstacles: [
      "Database hot spots: Tabelas de transações sobrecarregadas",
      "File upload bottlenecks: Documentos KYC causando timeouts",
      "API rate limiting: Limites inadequados para crescimento"
    ],
    technologies: [
      "Database sharding: Consistent hashing por customer_id",
      "CDN + S3: Assets estáticos e documentos com edge caching",
      "API Gateway: Rate limiting dinâmico baseado em customer tier"
    ],
    foundations: [
      "Domain-Driven Design: Separação clara de bounded contexts",
      "CQRS: Read/write separation para otimizar consultas",
      "Event Sourcing: Auditoria completa e reprocessamento de eventos"
    ],
    businessImpact: "Habilitou IPO da empresa ao demonstrar capacidade de escala"
  }];
  const competencyDefinitions = [{
    title: "Cenários de Competência",
    scenarios: [{
      clientScenario: "Fintech B2B - Decisões de Alto Volume",
      businessContext: "Empresa processa 100M transações/mês e precisa de Tech Lead para otimizar sistemas críticos",
      generatedCompetencies: [{
        category: "Técnica",
        competencies: ["Arquiteturas distribuídas", "Otimização de performance", "Monitoramento real-time"],
        prompt: "Como você dimensionaria uma arquitetura para processar 100M transações/mês mantendo latência <50ms?"
      }, {
        category: "Decisão",
        competencies: ["Trade-offs técnicos", "Análise de custo-benefício", "Gestão de riscos"],
        prompt: "Descreva uma situação onde você teve que escolher entre disponibilidade e consistência"
      }]
    }, {
      clientScenario: "E-commerce B2C - Crescimento Acelerado",
      businessContext: "Startup que cresceu 300% em 6 meses precisa de Head of Product para escalar plataforma",
      generatedCompetencies: [{
        category: "Técnica",
        competencies: ["Microserviços", "Auto-scaling", "Observabilidade"],
        prompt: "Como estruturaria arquitetura que suporte crescimento de 10x no tráfego em 3 meses?"
      }, {
        category: "Cultural",
        competencies: ["Mentalidade de crescimento", "Adaptabilidade", "Liderança remota"],
        prompt: "Como manteria alinhamento cultural em um time que cresce 50% ao mês?"
      }]
    }, {
      clientScenario: "Healthtech - Produto Regulamentado",
      businessContext: "Plataforma de telemedicina precisa de Lead Engineer para garantir compliance LGPD/HIPAA",
      generatedCompetencies: [{
        category: "Técnica",
        competencies: ["Security by design", "Audit trails", "Data encryption"],
        prompt: "Como projetaria arquitetura que garanta LGPD compliance para dados médicos sensíveis?"
      }, {
        category: "Cultural",
        competencies: ["Responsabilidade social", "Colaboração multidisciplinar", "Ética em tecnologia"],
        prompt: "Como trabalharia com equipes médicas para traduzir workflows clínicos em features?"
      }]
    }]
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndicators(prev => ({
        cultural_fit: Math.min(94, prev.cultural_fit + Math.random() * 2),
        technical_skills: Math.min(91, prev.technical_skills + Math.random() * 1.5),
        retention_score: Math.min(96, prev.retention_score + Math.random() * 1.8),
        hiring_speed: Math.min(89, prev.hiring_speed + Math.random() * 2.2)
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % businessScenarios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [businessScenarios.length]);
  return <section id="interactive-demo" className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <AnimatedDottedBackground opacity={0.08} color="%23334155" size={2} spacing={80} className="hover:opacity-15" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Subjetividade → <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Parâmetros Mensuráveis</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Nossa engenharia de prompt transforma aspectos subjetivos do recrutamento em parâmetros objetivos,
            <br />criando cenários reais de <strong className="text-white">negócios, produtos, tecnologia e pessoas</strong> para validação precisa
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 bg-white rounded-lg p-2 border border-gray-200 max-w-full">
            {[{
            id: 'competencies',
            label: 'Definição de Competências',
            icon: Zap
          }, {
            id: 'scenarios',
            label: 'Cenários Situacionais',
            icon: Brain
          }, {
            id: 'validation',
            label: 'Validação Tempo Real',
            icon: TrendingUp
          }, {
            id: 'alignment',
            label: 'Alinhamento Cultural',
            icon: Target
          }].map(({
            id,
            label,
            icon: Icon
          }) => <Button key={id} variant="ghost" onClick={() => setCurrentDemo(id as any)} className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm ${currentDemo === id ? 'bg-purple-600 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap text-base">{label}</span>
              </Button>)}
          </div>
        </div>

        {/* Scenarios Demo */}
        {currentDemo === 'scenarios' && <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    Cenário Ativo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeScenario === 0 ? 'bg-blue-50' : activeScenario === 1 ? 'bg-green-50' : activeScenario === 2 ? 'bg-orange-50' : 'bg-purple-50'}`}>
                      {React.createElement(businessScenarios[activeScenario].icon, {
                    className: `w-6 h-6 ${activeScenario === 0 ? 'text-blue-600' : activeScenario === 1 ? 'text-green-600' : activeScenario === 2 ? 'text-orange-600' : 'text-purple-600'}`
                  })}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-600 mb-1">
                        {businessScenarios[activeScenario].category}
                      </Badge>
                      <h3 className="text-gray-900 font-semibold">{businessScenarios[activeScenario].title}</h3>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {businessScenarios[activeScenario].prompt}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">Competências Avaliadas:</p>
                    <div className="flex flex-wrap gap-2">
                      {businessScenarios[activeScenario].evaluation.map((competence, idx) => <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                          {competence}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scenario Navigation */}
              <div className="grid grid-cols-4 gap-2">
                {businessScenarios.map((scenario, idx) => <Button key={idx} variant="ghost" size="sm" onClick={() => setActiveScenario(idx)} className={`p-3 h-auto flex flex-col items-center gap-1 transition-all duration-300 ${activeScenario === idx ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-purple-300'}`}>
                    {React.createElement(scenario.icon, {
                className: "w-4 h-4"
              })}
                    <span className="text-xs">{scenario.category}</span>
                  </Button>)}
              </div>
            </div>

            <Card className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Análise do Candidato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {businessScenarios[activeScenario].response}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-900 font-medium">Fit Cultural</span>
                      <span className="text-purple-600 font-bold">{businessScenarios[activeScenario].cultural_fit}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" style={{
                    width: `${businessScenarios[activeScenario].cultural_fit}%`
                  }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">A+</div>
                      <p className="text-xs text-gray-500">Competência Técnica</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">94%</div>
                      <p className="text-xs text-gray-500">Match Cultural</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Candidato Aprovado para Próxima Fase</span>
                </div>
              </CardContent>
            </Card>
          </div>}

        {/* Deep Dive Validation Demo */}
        {currentDemo === 'validation' && <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Validação Real: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Como Fez</span>
              </h3>
              <p className="text-slate-300">
                Cruzamento entre desafios de negócio do cliente e vivências práticas do profissional
              </p>
            </div>
            
            <div className="space-y-6">
              {deepDiveCases.map((caseStudy, idx) => (
                <Card key={idx} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header - Always Visible */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedCase(expandedCase === idx ? null : idx)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-blue-50' : idx === 1 ? 'bg-red-50' : 'bg-green-50'}`}>
                            {idx === 0 ? <Zap className="w-6 h-6 text-blue-600" /> : 
                             idx === 1 ? <Target className="w-6 h-6 text-red-600" /> : 
                             <TrendingUp className="w-6 h-6 text-green-600" />}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{caseStudy.title}</h3>
                            <p className="text-gray-600">{caseStudy.situation}</p>
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedCase === idx ? 'rotate-90' : ''}`} />
                      </div>
                      
                      {/* Result Preview */}
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-900 font-medium">{caseStudy.result}</p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCase === idx && (
                      <div className="border-t border-gray-200 bg-gray-50">
                        <div className="p-6 space-y-6">
                          {/* Level 2: Trade-offs & Process */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Nível 2</Badge>
                              Trade-offs Analisados
                            </h4>
                            <div className="space-y-2">
                              {caseStudy.tradeoffs.map((tradeoff, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-gray-700">{tradeoff}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Obstacles */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Obstáculos Enfrentados</h4>
                            <div className="space-y-2">
                              {caseStudy.obstacles.map((obstacle, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-gray-700">{obstacle}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Level 3: Technical Foundations */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Nível 3</Badge>
                                Tecnologias Aplicadas
                              </h4>
                              <div className="space-y-2">
                                {caseStudy.technologies.map((tech, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-gray-700">{tech}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fundamentos Técnicos</h4>
                              <div className="space-y-2">
                                {caseStudy.foundations.map((foundation, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-gray-700">{foundation}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Business Impact */}
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Impacto no Negócio</h4>
                            <p className="text-gray-700 font-medium">{caseStudy.businessImpact}</p>
                          </div>

                          {/* Validation Status */}
                          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">Experiência comprovada em cenários similares com resultados mensuráveis</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>}

        {/* Competency Definition Demo */}
        {currentDemo === 'competencies' && <div className="space-y-8">
            {/* Competency Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {competencyDefinitions[0].scenarios.map((scenario, idx) => <Card key={idx} className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 group p-8 rounded-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${idx === 0 ? 'bg-blue-50' : idx === 1 ? 'bg-green-50' : 'bg-purple-50'}`}>
                      {idx === 0 ? <Briefcase className="w-6 h-6 text-blue-600" /> : idx === 1 ? <TrendingUp className="w-6 h-6 text-green-600" /> : <Target className="w-6 h-6 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className={`text-sm font-medium mb-4 px-3 py-1 rounded-lg ${idx === 0 ? 'border-blue-200 text-blue-700 bg-blue-50' : idx === 1 ? 'border-green-200 text-green-700 bg-green-50' : 'border-purple-200 text-purple-700 bg-purple-50'}`}>
                        {idx === 0 ? 'Fintech B2B' : idx === 1 ? 'E-commerce' : 'Healthtech'}
                      </Badge>
                      <h3 className={`text-xl font-bold leading-tight mb-4 ${idx === 0 ? 'text-blue-900' : idx === 1 ? 'text-green-900' : 'text-purple-900'}`}>
                        {scenario.clientScenario}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {scenario.businessContext}
                  </p>
                </Card>)}
            </div>

            {/* Results Summary */}
            <div className="mt-12 sm:mt-16">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                        12
                      </div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">Competências Identificadas</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Por cenário contextual</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                        94%
                      </div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">Precisão de Match</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Alinhamento cultural</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600">
                        3
                      </div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">Cenários Situacionais</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Negócios, produto, tech</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">
                        15
                      </div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">Dias de Processo</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Da triagem à aprovação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>}

        {/* Cultural Deep Dive Demo */}
        {currentDemo === 'alignment' && <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cultural Deep Dive Analysis</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Validação cultural através de atitudes demonstradas em cenários reais de negócios, produto e tecnologia
              </p>
            </div>

            <div className="space-y-6">
              {[{
                title: "Cenário de Crise - Atitude sob Pressão",
                situation: "Sistema crítico down em Black Friday, 5M usuários afetados",
                result: "Recovery em 4h vs. 8h estimadas | Zero data loss | War room coordenado",
                interpretation: [
                  "Análise rápida de impacto vs. investigação completa: Priorizou triage baseado em severidade",
                  "Definiu war room imediato com incident commander dedicado",
                  "Comunicação transparente com stakeholders sem gerar pânico desnecessário"
                ],
                engagement: [
                  "Definiu responsabilidades claras por squad e componente crítico",
                  "Updates regulares para C-level com timeline realista",
                  "Manteve equipe focada com objetivos mensuráveis por hora"
                ],
                resolution: [
                  "Recovery paralelo priorizando restore vs. investigação detalhada",
                  "Documentou timeline de decisões para post-mortem blameless",
                  "Liderou comunicação externa com transparência total"
                ],
                attitudes: ["Ownership completo", "Liderança sob pressão", "Comunicação transparente"],
                values: ["Responsabilidade", "Transparência", "Foco no cliente"],
                practices: ["Incident command system", "Blameless post-mortem", "War room coordination"],
                proactivity: "Criou runbooks preventivos e processo de crisis management pós-incidente"
              }, {
                title: "Cenário de Produto - Atitude Colaborativa",
                situation: "Feature complexa com deadline apertado, PM e Dev discordando de abordagem",
                result: "MVP entregue no prazo | +40% adoption rate | Framework de decisão criado",
                interpretation: [
                  "Balanceou viabilidade técnica vs. necessidade urgente de negócio",
                  "Mapeou trade-offs de cada abordagem com métricas concretas",
                  "Propôs experimento A/B para validar hipóteses conflitantes"
                ],
                engagement: [
                  "Facilitou discussão técnica usando linguagem de negócio",
                  "Criou matriz de priorização compartilhada entre teams",
                  "Estabeleceu checkpoints de validação com critérios objetivos"
                ],
                resolution: [
                  "Implementou solução incremental mantendo valor de negócio",
                  "Criou documentação técnica acessível para time de produto",
                  "Definiu métricas de sucesso alinhadas entre engenharia e produto"
                ],
                attitudes: ["Colaboração cross-functional", "Mentalidade data-driven", "Facilitação técnica"],
                values: ["Colaboração", "Data-driven decisions", "Customer-centric"],
                practices: ["A/B testing", "Incremental delivery", "Cross-team alignment"],
                proactivity: "Propôs framework de decisão para resolver futuros conflitos produto-tech"
              }, {
                title: "Cenário de Crescimento - Atitude de Mentoria",
                situation: "Equipe crescendo 300% em 6 meses, juniores perdidos, seniors sobrecarregados",
                result: "Time produtivo em 2 semanas | Knowledge gaps eliminados | Cultura de mentoria",
                interpretation: [
                  "Identificou bottleneck em knowledge transfer vs. processo vs. ferramentas",
                  "Mapeou competências da equipe e gaps críticos de conhecimento",
                  "Antecipou scaling challenges antes de impactar delivery"
                ],
                engagement: [
                  "Criou programa estruturado de buddy system para onboarding",
                  "Estabeleceu code review sessions educativas vs. apenas approval",
                  "Implementou office hours técnicos para mentoria assíncrona"
                ],
                resolution: [
                  "Documentation-driven development para eliminar dependências",
                  "Tech talks internas sobre architectural decisions e context",
                  "Knowledge sharing channel para dúvidas e best practices"
                ],
                attitudes: ["Liderança técnica", "Investimento em pessoas", "Visão de longo prazo"],
                values: ["Growth mindset", "Knowledge sharing", "People development"],
                practices: ["Buddy system", "Documentation-driven", "Continuous learning"],
                proactivity: "Criou programa de technical leadership development para próximos seniors"
              }].map((caseStudy, idx) => (
                <Card key={idx} className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{caseStudy.title}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedCase(expandedCase === idx ? null : idx)}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        <ChevronRight className={`w-4 h-4 transition-transform ${expandedCase === idx ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Situação</h4>
                        <p className="text-gray-700">{caseStudy.situation}</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Resultado</h4>
                        <p className="text-green-800 font-medium">{caseStudy.result}</p>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {expandedCase === idx && (
                      <div className="mt-6 space-y-6 border-t border-gray-200 pt-6">
                        {/* Level 1: How they approached */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Nível 1</Badge>
                            Como Interpretou e Definiu
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Interpretação da Situação</h5>
                              <div className="space-y-2">
                                {caseStudy.interpretation.map((item, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Como Engajou e Resolveu</h5>
                              <div className="space-y-2">
                                {caseStudy.engagement.slice(0,2).map((item, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Level 2: Attitudes and Values */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Nível 2</Badge>
                              Atitudes Demonstradas
                            </h4>
                            <div className="space-y-2">
                              {caseStudy.attitudes.map((attitude, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-gray-700">{attitude}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Valores Evidenciados</h4>
                            <div className="space-y-2">
                              {caseStudy.values.map((value, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-gray-700">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Level 3: Practices and Proactivity */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Nível 3</Badge>
                            Boas Práticas e Proatividade
                          </h4>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-medium text-gray-900 mb-2">Boas Práticas Aplicadas</h5>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.practices.map((practice, i) => (
                                <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700">
                                  {practice}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <h5 className="font-medium text-orange-900 mb-2">Proatividade Demonstrada</h5>
                            <p className="text-orange-800">{caseStudy.proactivity}</p>
                          </div>
                        </div>

                        {/* Cultural Evidence */}
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="text-lg font-semibold text-green-900 mb-2">Evidência Cultural</h4>
                          <p className="text-green-800">
                            Demonstrou consistência comportamental alinhada com valores organizacionais de {caseStudy.values.join(", ").toLowerCase()}, 
                            evidenciando fit cultural através de atitudes práticas em cenários de alta pressão.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cultural Validation Summary */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Validação Cultural Final</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-600 mb-3">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Cultural Fit Aprovado</span>
                  </div>
                  <p className="text-green-800 leading-relaxed">
                    <strong>Atitudes consistentes com cultura de ownership, colaboração e growth mindset</strong>, 
                    evidenciadas em múltiplos cenários de alta pressão. Demonstrou capacidade de liderança técnica, 
                    comunicação transparente e investimento no desenvolvimento de pessoas, alinhando-se perfeitamente 
                    com valores organizacionais de responsabilidade, transparência e foco no cliente.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">3/3</div>
                    <p className="text-blue-700 text-sm font-medium">Cenários Validados</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">9+</div>
                    <p className="text-purple-700 text-sm font-medium">Atitudes Evidenciadas</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <p className="text-green-700 text-sm font-medium">Alinhamento Cultural</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>}
      </div>
    </section>;
};
export default InteractiveDemo;