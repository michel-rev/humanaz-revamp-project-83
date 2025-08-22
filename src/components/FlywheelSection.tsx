import { ArrowRight, Users, Brain, Target, TrendingUp } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
const FlywheelSection = () => {
  const steps = [{
    icon: Users,
    title: "Quem Somos",
    description: "Startup de recrutamento tech especializada em crescimento de times de tecnologia.",
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
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Vamos além da vaga. Um processo inteligente que conecta vivências e experiências do profissional em resolver problemas reais de negócio, com a atitude que o crescimento da sua empresa precisa.</p>
        </div>

        {/* Flywheel Visual */}
        <div className="relative max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/3f77d22f-38e3-426d-bd28-79c0e6d18fda.png" 
            alt="Flywheel de Recrutamento - Processo de 15 dias com IA e curadoria humanizada" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
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