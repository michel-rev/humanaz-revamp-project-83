
import { ArrowRight, Calendar, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedDottedBackground opacity={0.4} size={4} spacing={60} className="hover:opacity-60" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Transforme Suas
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Contratações Tech
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se às principais fintechs e startups do mercado. Experimente um processo de recrutamento que entrega resultados reais em 15 dias.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-base sm:text-lg px-6 sm:px-8">
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Agendar Demonstração
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button size="lg" variant="gradient-outline" className="text-base sm:text-lg px-6 sm:px-8">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Falar com Especialista
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Ligação Direta</h3>
              <p className="text-slate-400 text-sm">Converse com nosso time agora</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Chat Online</h3>
              <p className="text-slate-400 text-sm">Suporte em tempo real</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Reunião Virtual</h3>
              <p className="text-slate-400 text-sm">Demonstração personalizada</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-slate-700 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">15 Dias</div>
                <div className="text-slate-400 text-sm">Processo Completo</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">95%</div>
                <div className="text-slate-400 text-sm">Taxa de Aprovação</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
                <div className="text-slate-400 text-sm">Candidatos Qualificados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                <div className="text-slate-400 text-sm">Empresas Parceiras</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
