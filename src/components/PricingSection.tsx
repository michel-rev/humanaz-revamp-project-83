import { useState } from "react";
import { User, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FormBasicoModal from "@/components/FormBasicoModal";
import FormProfissionalModal from "@/components/FormProfissionalModal";
import FormEnterpriseModal from "@/components/FormEnterpriseModal";

const PricingSection = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [professionalModalOpen, setProfessionalModalOpen] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);

  const handleModalSuccess = () => {
    // Redireciona para a página de agendamento após sucesso no formulário
    window.location.href = '/agendamento';
  };

  const pricingPlans = [
    {
      icon: User,
      name: "Básico",
      price: "R$ 16.486",
      period: "por profissional",
      description: "Ideal para empresas que buscam talentos específicos",
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
      name: "Profissional",
      price: "R$ 14.106",
      period: "por profissional",
      description: "Perfeito para times em crescimento e múltiplas vagas",
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
      icon: Building2,
      name: "Enterprise",
      price: "R$ 11.726",
      period: "por profissional",
      description: "Solução completa para grandes operações de recrutamento",
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

  return (
    <section id="investimento" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-slate-900/80" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
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
                className={`bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative ${
                  plan.popular 
                    ? 'border-2 border-gradient-to-r from-purple-500 to-pink-500 ring-2 ring-purple-500/20' 
                    : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 mx-auto">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="text-center mb-5">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{plan.price}</span>
                    <span className="block md:inline text-gray-500 text-sm md:text-base ml-0 md:ml-2 align-baseline">{plan.period}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-center mb-8 leading-relaxed text-base md:text-lg">
                    {plan.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      if (plan.name === 'Básico') {
                        setBasicModalOpen(true);
                      } else if (plan.name === 'Profissional') {
                        setProfessionalModalOpen(true);
                      } else if (plan.name === 'Enterprise') {
                        setEnterpriseModalOpen(true);
                      }
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wide text-base md:text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
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
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
            Valores por profissional contratado. Inclui todo o processo de atração, seleção e validação cultural. 
            <span className="text-purple-400 font-semibold"> Garantia de 90 dias sem custo adicional.</span>
          </p>
        </div>
      </div>

      {/* Modals */}
      <FormBasicoModal 
        open={basicModalOpen} 
        onOpenChange={setBasicModalOpen}
        onSuccess={handleModalSuccess}
      />
      <FormProfissionalModal 
        open={professionalModalOpen} 
        onOpenChange={setProfessionalModalOpen}
        onSuccess={handleModalSuccess}
      />
      <FormEnterpriseModal 
        open={enterpriseModalOpen} 
        onOpenChange={setEnterpriseModalOpen}
        onSuccess={handleModalSuccess}
      />
    </section>
  );
};

export default PricingSection;