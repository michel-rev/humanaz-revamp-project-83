import { Briefcase, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: Briefcase,
      title: "Fintech B2B – Decisões de Alto Volume",
      description: "Tech Lead para otimizar sistemas críticos em empresas de alto volume de transações.",
      categories: {
        "Técnica": ["Arquiteturas distribuídas", "Otimização de performance", "Monitoramento real-time"],
        "Decisão": ["Trade-offs técnicos", "Análise de custo-benefício", "Gestão de riscos"]
      },
      prompts: {
        "Técnica": "Como dimensionar uma arquitetura para processar 100M transações/mês mantendo latência <50ms?",
        "Decisão": "Descreva uma situação em que precisou escolher entre disponibilidade e consistência."
      }
    },
    {
      icon: TrendingUp,
      title: "E-commerce B2C – Crescimento Acelerado",
      description: "Head of Product para escalar plataformas em startups de crescimento rápido.",
      categories: {
        "Técnica": ["Microsserviços", "Auto-scaling", "Observabilidade"],
        "Cultural": ["Mentalidade de crescimento", "Adaptabilidade", "Liderança remota"]
      },
      prompts: {
        "Técnica": "Como estruturar arquitetura para suportar crescimento de 10x no tráfego em 3 meses?",
        "Cultural": "Como manter alinhamento cultural em um time que cresce 50% ao mês?"
      }
    },
    {
      icon: Shield,
      title: "Healthtech – Produto Regulamentado",
      description: "Lead Engineer para garantir compliance LGPD/HIPAA em plataformas de telemedicina.",
      categories: {
        "Técnica": ["Security by design", "Audit trails", "Data encryption"],
        "Cultural": ["Responsabilidade social", "Colaboração multidisciplinar", "Ética em tecnologia"]
      },
      prompts: {
        "Técnica": "Como projetar arquitetura que garanta LGPD compliance para dados médicos sensíveis?",
        "Cultural": "Como traduzir workflows clínicos em features técnicas junto a equipes médicas?"
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Técnica":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Decisão":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Cultural":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center lg:justify-start mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3">
              <Briefcase className="w-full h-full text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Desafios Reais
            </h2>
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            
            return (
              <Card
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {challenge.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {challenge.description}
                  </p>
                  
                  {/* Categories and Tags */}
                  <div className="space-y-6">
                    {Object.entries(challenge.categories).map(([category, tags]) => (
                      <div key={category} className="space-y-3">
                        {/* Category Title */}
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          {category}
                        </h4>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className={`${getCategoryColor(category)} border text-sm px-3 py-1`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Prompt Example */}
                        {challenge.prompts[category as keyof typeof challenge.prompts] && (
                          <blockquote className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-purple-300">
                            "{challenge.prompts[category as keyof typeof challenge.prompts]}"
                          </blockquote>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;