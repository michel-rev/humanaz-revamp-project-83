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
  const validationMetrics = [{
    name: "Capacidade Produtiva",
    description: "Competências técnicas e entrega",
    score: 94,
    indicators: ["Problem solving", "Code quality", "Delivery speed", "Technical communication"]
  }, {
    name: "Alinhamento Cultural",
    description: "Fit com valores e práticas da empresa",
    score: 96,
    indicators: ["Colaboração", "Inovação", "Adaptabilidade", "Growth mindset"]
  }, {
    name: "Potencial de Retenção",
    description: "Probabilidade de permanência longo prazo",
    score: 89,
    indicators: ["Career alignment", "Company values fit", "Team dynamics", "Growth opportunities"]
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
            Nossa <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Engenharia de Prompt</span> em Ação
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Veja como construímos cenários situacionais de negócios, produtos, tecnologia 
            e pessoas para validar alinhamento cultural e competências técnicas
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50 max-w-full">
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
          }) => <Button key={id} variant="ghost" onClick={() => setCurrentDemo(id as any)} className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 text-xs sm:text-sm ${currentDemo === id ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">{label}</span>
              </Button>)}
          </div>
        </div>

        {/* Scenarios Demo */}
        {currentDemo === 'scenarios' && <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    Cenário Ativo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${activeScenario === 0 ? 'from-blue-600/20 to-blue-500/20' : activeScenario === 1 ? 'from-green-600/20 to-green-500/20' : activeScenario === 2 ? 'from-orange-600/20 to-orange-500/20' : 'from-purple-600/20 to-purple-500/20'}`}>
                      {React.createElement(businessScenarios[activeScenario].icon, {
                    className: `w-6 h-6 ${activeScenario === 0 ? 'text-blue-400' : activeScenario === 1 ? 'text-green-400' : activeScenario === 2 ? 'text-orange-400' : 'text-purple-400'}`
                  })}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300 mb-1">
                        {businessScenarios[activeScenario].category}
                      </Badge>
                      <h3 className="text-white font-semibold">{businessScenarios[activeScenario].title}</h3>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                    <p className="text-slate-300 leading-relaxed">
                      {businessScenarios[activeScenario].prompt}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-400">Competências Avaliadas:</p>
                    <div className="flex flex-wrap gap-2">
                      {businessScenarios[activeScenario].evaluation.map((competence, idx) => <Badge key={idx} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {competence}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scenario Navigation */}
              <div className="grid grid-cols-4 gap-2">
                {businessScenarios.map((scenario, idx) => <Button key={idx} variant="ghost" size="sm" onClick={() => setActiveScenario(idx)} className={`p-3 h-auto flex flex-col items-center gap-1 transition-all duration-300 ${activeScenario === idx ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-purple-500/30' : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:border-purple-400/50'}`}>
                    {React.createElement(scenario.icon, {
                className: "w-4 h-4"
              })}
                    <span className="text-xs">{scenario.category}</span>
                  </Button>)}
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Análise do Candidato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <p className="text-slate-300 leading-relaxed">
                    {businessScenarios[activeScenario].response}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Fit Cultural</span>
                      <span className="text-purple-400 font-bold">{businessScenarios[activeScenario].cultural_fit}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" style={{
                    width: `${businessScenarios[activeScenario].cultural_fit}%`
                  }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">A+</div>
                      <p className="text-xs text-slate-400">Competência Técnica</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">94%</div>
                      <p className="text-xs text-slate-400">Match Cultural</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Candidato Aprovado para Próxima Fase</span>
                </div>
              </CardContent>
            </Card>
          </div>}

        {/* Validation Demo */}
        {currentDemo === 'validation' && <div className="grid md:grid-cols-3 gap-6">
            {validationMetrics.map((metric, idx) => <Card key={idx} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`text-4xl font-bold mb-2 ${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-purple-400' : 'text-green-400'}`}>
                      {metric.score}%
                    </div>
                    <h3 className="text-white font-semibold text-lg">{metric.name}</h3>
                    <p className="text-slate-400 text-sm">{metric.description}</p>
                  </div>

                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                    <div className={`h-full transition-all duration-1000 ${idx === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' : idx === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-400' : 'bg-gradient-to-r from-green-500 to-green-400'}`} style={{
                width: `${metric.score}%`
              }} />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-400">Indicadores:</p>
                    {metric.indicators.map((indicator, indicatorIdx) => <div key={indicatorIdx} className="flex items-center gap-2 text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-blue-400' : idx === 1 ? 'bg-purple-400' : 'bg-green-400'}`} />
                        <span className="text-sm">{indicator}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>}

        {/* Competency Definition Demo */}
        {currentDemo === 'competencies' && <div className="space-y-8">
            {/* Competency Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {competencyDefinitions[0].scenarios.map((scenario, idx) => <Card key={idx} className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group px-[23px]">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-3 rounded-xl flex-shrink-0 ${idx === 0 ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20' : idx === 1 ? 'bg-gradient-to-br from-green-500/20 to-green-600/20' : 'bg-gradient-to-br from-purple-500/20 to-purple-600/20'}`}>
                        {idx === 0 ? <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> : idx === 1 ? <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> : <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="outline" className={`text-xs mb-1 sm:mb-2 ${idx === 0 ? 'border-blue-400/30 text-blue-300 bg-blue-400/10' : idx === 1 ? 'border-green-400/30 text-green-300 bg-green-400/10' : 'border-purple-400/30 text-purple-300 bg-purple-400/10'}`}>
                          {idx === 0 ? 'Fintech B2B' : idx === 1 ? 'E-commerce' : 'Healthtech'}
                        </Badge>
                        <CardTitle className="text-white text-base sm:text-lg leading-tight group-hover:text-purple-300 transition-colors">
                          {scenario.clientScenario}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {scenario.businessContext}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 pt-0">
                    {scenario.generatedCompetencies.map((comp, compIdx) => <div key={compIdx} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={`text-xs font-medium ${comp.category === 'Técnica' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' : comp.category === 'Decisão' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'}`}>
                            {comp.category}
                          </Badge>
                        </div>
                        
                        <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-600/30">
                          <p className="text-slate-300 text-sm italic leading-relaxed">
                            "{comp.prompt}"
                          </p>
                        </div>
                      </div>)}
                  </CardContent>
                </Card>)}
            </div>

            {/* Results Summary */}
            <div className="mt-12 sm:mt-16">
              <Card className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                    <div className="space-y-1 sm:space-y-2">
                      
                      <p className="text-white font-semibold text-sm sm:text-base">Competências Identificadas</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Por cenário contextual</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                        94%
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base">Precisão de Match</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Alinhamento cultural</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                        3
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base">Cenários Situacionais</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Negócios, produto, tech</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                        15
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base">Dias de Processo</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Da triagem à aprovação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>}

        {/* Alignment Demo */}
        {currentDemo === 'alignment' && <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Processo de Alinhamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[{
              step: "1",
              title: "Prompt Engineering",
              description: "Criamos cenários específicos baseados na cultura da empresa",
              status: "completed"
            }, {
              step: "2",
              title: "Análise Cultural",
              description: "IA analisa respostas e mapeia traços culturais do candidato",
              status: "completed"
            }, {
              step: "3",
              title: "Validação Técnica",
              description: "Competências são validadas através de cenários reais",
              status: "active"
            }, {
              step: "4",
              title: "Score Final",
              description: "Geramos score combinado de fit cultural + capacidade produtiva",
              status: "pending"
            }].map((item, idx) => <div key={idx} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${item.status === 'completed' ? 'bg-green-500 text-white' : item.status === 'active' ? 'bg-purple-500 text-white animate-pulse' : 'bg-slate-600 text-slate-400'}`}>
                      {item.status === 'completed' ? '✓' : item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>)}
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Resultado do Alinhamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    96%
                  </div>
                  <p className="text-white font-semibold text-lg">Score de Alinhamento</p>
                  <p className="text-slate-400">Cultura + Competências</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="text-2xl font-bold text-purple-400 mb-1">94%</div>
                    <p className="text-slate-300 text-sm">Fit Cultural</p>
                  </div>
                  <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="text-2xl font-bold text-blue-400 mb-1">98%</div>
                    <p className="text-slate-300 text-sm">Capacidade Técnica</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-slate-400 text-sm font-medium">Principais Indicadores:</p>
                  {["Forte alinhamento com valores de inovação", "Excelente capacidade de colaboração", "Mentalidade data-driven comprovada", "Experiência técnica sólida em fintech"].map((indicator, idx) => <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm">{indicator}</span>
                    </div>)}
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Candidato Aprovado
                </Button>
              </CardContent>
            </Card>
          </div>}
      </div>
    </section>;
};
export default InteractiveDemo;