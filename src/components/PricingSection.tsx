import { User, Users, Calendar, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  const pricingTiers = [
    {
      icon: User,
      title: "01 profissional",
      subtitle: "Atração & Seleção",
      price: "R$ 16.486,26",
      benefits: [
        "Análise de cultura organizacional",
        "Mapeamento de candidatos via IA",
        "Validação técnica e comportamental",
        "Apresentação de 4 profissionais",
        "Garantia de 90 dias",
        "Suporte pós-contratação"
      ]
    },
    {
      icon: Users,
      title: "+4 profissionais",
      subtitle: "Atração & Seleção",
      price: "R$ 14.106,26",
      benefits: [
        "Análise de cultura organizacional",
        "Mapeamento de candidatos via IA",
        "Validação técnica e comportamental",
        "Apresentação de 4 profissionais por vaga",
        "Garantia de 90 dias",
        "Suporte pós-contratação",
        "Desconto por volume",
        "Gestão de múltiplas posições"
      ]
    },
    {
      icon: Calendar,
      title: "+6 profissionais",
      subtitle: "Atração & Seleção",
      price: "R$ 11.726,26",
      benefits: [
        "Análise de cultura organizacional",
        "Mapeamento de candidatos via IA",
        "Validação técnica e comportamental",
        "Apresentação de 4 profissionais por vaga",
        "Garantia de 90 dias",
        "Suporte pós-contratação",
        "Máximo desconto por volume",
        "Gestão de múltiplas posições",
        "Account Manager dedicado"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-slate-900/80" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Investimento
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {tier.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {tier.subtitle}
                  </p>
                  
                  {/* Price */}
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                    {tier.price}
                  </p>
                  
                  {/* Benefits List */}
                  <div className="space-y-4">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0" />
                        <p className="text-slate-300 leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Valores por profissional contratado. Inclui todo o processo de atração, seleção e validação cultural. 
            <span className="text-purple-400 font-semibold"> Garantia de 90 dias sem custo adicional.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;