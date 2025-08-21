import { ArrowRight, Users, Brain, Target, TrendingUp } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
const FlywheelSection = () => {
  const steps = [{
    icon: Users,
    title: "Quem Somos",
    description: "Startup de recrutamento tech especializada em crescimento de times de tecnologia, dados e produto",
    details: "Neon Pagamentos, SuperSim, Nuvia, Klavi, ZigFun, NFE.io, StarkBank, Asaas, QITech, BeeVale, SmartPay e outras empresas líderes do mercado.",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: Brain,
    title: "Por Que Fazemos",
    description: "Customizamos fluxos de recrutamento para conferir assertividade e agilidade",
    details: "Acreditamos que o match perfeito entre talento e empresa acelera o crescimento de ambos, criando impacto real no ecossistema tech.",
    color: "from-blue-500 to-purple-500"
  }, {
    icon: Target,
    title: "Como Fazemos",
    description: "Flywheel de 15 dias com IA, prompt engineering e curadoria humanizada",
    details: "Cruzamos cenários reais de negócios, produto, tecnologia e pessoas às vivências e experiências do profissional, validando sua contribuição ao negócio.",
    color: "from-green-500 to-blue-500"
  }, {
    icon: TrendingUp,
    title: "Valor Agregado",
    description: "Redução de custos de preenchimento e aumento da retenção",
    details: "Vamos além da vaga. Conectamos 04 profissionais, alinhados com a cultura da empresa e as competências que o negócio precisa para crescer.",
    color: "from-orange-500 to-red-500"
  }];
  return <section id="flywheel" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedDottedBackground opacity={0.2} color="%23e2e8f0" size={3} spacing={80} className="hover:opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Nosso <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Flywheel</span> de Sucesso
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Um processo otimizado que roda em 15 dias corridos, conectando ta</p>
        </div>

        {/* Flywheel Visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Circular container */}
          <div className="relative w-full h-[800px] sm:h-[900px] lg:h-[1000px]">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="font-bold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                      15 Dias
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8,8" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="25%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="75%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Steps in circular arrangement */}
            {steps.map((step, index) => {
            const Icon = step.icon;
            // Position cards in a circle: top, right, bottom, left
            const positions = [{
              top: '5%',
              left: '50%',
              transform: 'translateX(-50%)'
            },
            // Top
            {
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)'
            },
            // Right
            {
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)'
            },
            // Bottom
            {
              top: '50%',
              left: '5%',
              transform: 'translateY(-50%)'
            } // Left
            ];
            return <div key={index} className="absolute w-64 sm:w-72 lg:w-80 animate-fade-in" style={{
              ...positions[index],
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="relative p-4 sm:p-6 rounded-2xl bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group text-center">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${step.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-3 sm:mb-4 font-medium">
                      {step.description}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <a href="#investimento" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            Experimente Nosso Flywheel
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
};
export default FlywheelSection;