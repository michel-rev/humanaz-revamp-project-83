import { User, Users, Calendar, Sparkles, Target, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: User,
      badge: "Starter",
      name: "Básico",
      price: "R$ 16.486",
      period: "por profissional",
      description: "Ideal para empresas que buscam talentos específicos",
      categories: ["Técnica", "Cultural"],
      competencies: ["React", "TypeScript", "Node.js", "Product Thinking", "Team Leadership"],
      examplePrompt: "Preciso de um desenvolvedor sênior que seja proativo, tenha experiência em startups e saiba liderar tecnicamente",
      features: [
        "1 profissional selecionado",
        "Análise de cultura organizacional",
        "Mapeamento via IA",
        "Validação técnica completa",
        "Apresentação de 4 candidatos",
        "Garantia de 90 dias",
        "Suporte pós-contratação"
      ],
      buttonText: "Começar Agora",
      popular: false
    },
    {
      icon: Users,
      badge: "Growth",
      name: "Profissional",
      price: "R$ 14.106",
      period: "por profissional",
      description: "Perfeito para times em crescimento e múltiplas vagas",
      categories: ["Técnica", "Decisão", "Cultural"],
      competencies: ["Full-Stack", "DevOps", "Architecture", "Strategic Thinking", "Mentorship", "Agile"],
      examplePrompt: "Busco um tech lead para escalar o time, com experiência em arquitetura e capacidade de mentoria",
      features: [
        "4+ profissionais selecionados",
        "Tudo do plano Básico",
        "Desconto por volume",
        "Gestão de múltiplas posições",
        "Account Manager dedicado",
        "Relatórios personalizados",
        "Suporte prioritário"
      ],
      buttonText: "Mais Popular",
      popular: true
    },
    {
      icon: Building,
      badge: "Enterprise",
      name: "Enterprise",
      price: "R$ 11.726",
      period: "por profissional",
      description: "Solução completa para grandes operações de recrutamento",
      categories: ["Técnica", "Decisão", "Cultural", "Estratégica"],
      competencies: ["Engineering Management", "System Design", "AI/ML", "Business Acumen", "Innovation", "Global Team"],
      examplePrompt: "Necessito de CTOs e diretores de engenharia para expansão internacional com foco em IA",
      features: [
        "6+ profissionais selecionados",
        "Máximo desconto por volume",
        "Tudo dos planos anteriores",
        "Integração com seu ATS",
        "Consultoria estratégica",
        "SLA personalizado",
        "Treinamento da equipe"
      ],
      buttonText: "Falar com Vendas",
      popular: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Técnica": "bg-blue-100 text-blue-700",
      "Cultural": "bg-green-100 text-green-700", 
      "Decisão": "bg-purple-100 text-purple-700",
      "Estratégica": "bg-orange-100 text-orange-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Investimento
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <Card
                key={index}
                className={`bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500 group ${
                  plan.popular ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  {/* Main Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-5 mb-6 mx-auto shadow-lg">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Badge */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {plan.badge}
                    </div>
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                    <div className="text-gray-500 text-lg">{plan.period}</div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 text-lg leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Category Chips */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {plan.categories.map((category, catIndex) => (
                      <span 
                        key={catIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Competency Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {plan.competencies.map((comp, compIndex) => (
                      <span 
                        key={compIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>

                  {/* Example Prompt */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-8 border-l-4 border-blue-500">
                    <div className="text-blue-600 text-2xl mb-2">"</div>
                    <p className="text-blue-700 italic text-sm leading-relaxed">
                      {plan.examplePrompt}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Valores por profissional contratado. Inclui todo o processo de atração, seleção e validação cultural. 
            <span className="text-blue-600 font-semibold"> Garantia de 90 dias sem custo adicional.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;