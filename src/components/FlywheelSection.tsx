import { ArrowRight } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
const FlywheelSection = () => {
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
        <div className="w-full grid place-items-center">
          <img 
            src="/lovable-uploads/3c5464fe-9e1b-4b84-a2f8-b161271aa845.png" 
            alt="Flywheel de Recrutamento - 4 peças: Quem Somos, Por Que Fazemos, Como Fazemos, Valor Agregado" 
            className="w-full h-auto max-w-[1200px] rounded-2xl"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.15))' }}
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