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
      name: "Plano Essencial",
      price: "R$ 16.486",
      period: "por profissional",
      description: "1 vaga estratégica. Para quem quer começar com o pé direito.",
      subtitle: "Ideal para quem: precisa preencher uma vaga crítica sem erro de contratação.",
      features: [
        "4 profissionais com mentalidade de ownership entregues em até 15 dias corridos",
        "Talentos que pensam negócio e executam com autonomia",
        "Profissionais alinhados aos seus desafios reais de crescimento",
        "Reposição garantida por 3 meses",
        "Pagamento dividido: 50% no contrato + 50% na contratação",
        "Valide a experiência HumanAZ com profissionais que aceleram resultados"
      ],
      buttonText: "Começar Agora",
      popular: false
    },
    {
      icon: Users,
      name: "Plano de Escala",
      price: "R$ 14.106",
      period: "por profissional",
      description: "4 a 5 vagas. Para quem precisa montar time com agilidade.",
      subtitle: "Ideal para quem: está escalando e precisa de múltiplas contratações consistentes e estratégicas.",
      features: [
        "4 profissionais por vaga com SLA de 15 dias corridos cada",
        "Talentos com visão estratégica e atitude de crescimento",
        "Profissionais conectados aos problemas que realmente importam",
        "Reposição garantida por 3 meses",
        "Pagamento dividido: 50% no contrato + 50% na contratação",
        "Escale com velocidade entregando profissionais que transformam desafios em oportunidades"
      ],
      buttonText: "Mais Popular",
      popular: true
    },
    {
      icon: Building2,
      name: "Plano de Crescimento",
      price: "R$ 11.726",
      period: "por profissional",
      description: "6 ou mais vagas. Para quem precisa acelerar de verdade.",
      subtitle: "Ideal para quem: está em rodada, expansão ou pivot tecnológico — e precisa de múltiplos game-changers simultaneamente.",
      features: [
        "Time de especialistas atuando em paralelo nas suas posições",
        "SLA mantido: 15 dias corridos por vaga",
        "Talentos preparados para resolver seus desafios de negócio e tecnologia",
        "Reposição garantida por 3 meses",
        "Pagamento dividido: 50% no contrato + 50% na contratação",
        "O plano mais vantajoso em custo por vaga para quem quer acelerar forte com talentos que fazem acontecer"
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
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4 text-center">
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
                
                <CardContent className="p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-6 mx-auto">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="text-center mb-5">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{plan.price}</span>
                    <span className="block md:inline text-gray-500 text-sm md:text-base ml-0 md:ml-2 align-baseline">{plan.period}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-center mb-3 leading-relaxed text-sm sm:text-base md:text-lg">
                    {plan.description}
                  </p>
                  
                  {/* Subtitle */}
                  <p className="text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
                    {plan.subtitle}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      if (plan.name === 'Plano Essencial') {
                        setBasicModalOpen(true);
                      } else if (plan.name === 'Plano de Escala') {
                        setProfessionalModalOpen(true);
                      } else if (plan.name === 'Plano de Crescimento') {
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
            Valores por profissional contratado. Inclui todo o processo de atração, seleção, validação técnicas e cultural. Garantia de 90 dias sem custo adicional.
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