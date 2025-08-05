
import { ArrowRight, Users, Brain, Target, TrendingUp } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const FlywheelSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Quem Somos",
      description: "Startup de recrutamento tech especializada em fintechs e startups de alta performance",
      details: "Trabalhamos com Neon, SuperSim, Nuvia, Klavi, ZigFun, Celcoin, StarkBank, Asaas, QITech, Tivita e outras empresas líderes do mercado.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Por Que Fazemos",
      description: "Customizamos fluxos de recrutamento para conferir assertividade e agilidade",
      details: "Acreditamos que o match perfeito entre talento e empresa acelera o crescimento de ambos, criando impacto real no ecossistema tech.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Como Fazemos",
      description: "Flywheel de 15 dias com IA, prompt engineering e curadoria humanizada",
      details: "Combinamos tecnologia avançada com expertise humana para verificar alinhamento cultural e técnico através de dados e parâmetros precisos.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Valor Agregado",
      description: "Redução de custos de preenchimento e aumento da retenção",
      details: "Entregamos 4 profissionais qualificados que se alinham perfeitamente à cultura e competências da vaga, maximizando ROI.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedDottedBackground opacity={0.2} color="%23e2e8f0" size={3} spacing={80} className="hover:opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nosso <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Flywheel</span> de Sucesso
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um processo otimizado que roda em 15 dias corridos, conectando talentos excepcionais às empresas certas através de tecnologia e curadoria humanizada.
          </p>
        </div>

        {/* Flywheel Visual */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
              15 Dias
            </div>
          </div>

          {/* Steps in circular arrangement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const positions = [
                "md:translate-x-0 md:-translate-y-8", // Top left
                "md:translate-x-0 md:-translate-y-8", // Top right  
                "md:translate-x-0 md:translate-y-8",  // Bottom left
                "md:translate-x-0 md:translate-y-8"   // Bottom right
              ];

              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group ${positions[index]} animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-4 font-medium">
                    {step.description}
                  </p>
                  
                  <p className="text-slate-500 leading-relaxed">
                    {step.details}
                  </p>

                  {/* Arrow for flow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            Experimente Nosso Flywheel
            <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlywheelSection;
