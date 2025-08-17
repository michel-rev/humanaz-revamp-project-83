import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedMetricsSection from "@/components/AnimatedMetricsSection";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import FormBasicoModal from "@/components/FormBasicoModal";
const HeroSection = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const handleModalSuccess = () => {
    // Redireciona para a página de agendamento após sucesso no formulário
    window.location.href = '/agendamento';
  };
  return <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <AnimatedDottedBackground opacity={0.3} color="%23a855f7" size={3} spacing={80} className="hover:opacity-50" />
      
      <div className="relative container mx-auto px-4 pt-8 pb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
          {/* Visual Element - Moved to top on mobile */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mt-0 relative order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-sm border border-purple-400/30 p-3 sm:p-4 animate-float">
                  <div className="text-purple-300 text-xs sm:text-sm">Neon Pagamentos</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Senior Frontend Developer</div>
                  <div className="text-slate-400 text-xs mt-1 sm:mt-2">Match: 98%</div>
                </div>
                
                <div className="absolute top-16 sm:top-20 left-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-blue-400/30 p-3 sm:p-4 animate-float" style={{
                animationDelay: '1s'
              }}>
                  <div className="text-blue-300 text-xs sm:text-sm">Stark Bank</div>
                  <div className="text-white font-semibold text-sm sm:text-base">DevOps Engineer</div>
                  <div className="text-slate-400 text-xs mt-1 sm:mt-2">Match: 96%</div>
                </div>
                
                <div className="absolute bottom-0 right-4 sm:right-8 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl backdrop-blur-sm border border-green-400/30 p-3 sm:p-4 animate-float" style={{
                animationDelay: '2s'
              }}>
                  <div className="text-green-300 text-xs sm:text-sm">Asaas</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Full Stack Developer</div>
                  <div className="text-slate-400 text-xs mt-1 sm:mt-2">Match: 94%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Moved to bottom on mobile */}
          <div className="lg:w-1/2 text-white space-y-4 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Recrutamento Tech Especializado
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[78px]">
              Seu{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                time de tecnologia
              </span>
              {" "}em 15 dias corridos.
              <br />
              Aumente sua taxa de retenção.
              <br />
              <span className="text-green-400 font-extrabold">
                Ou seu dinheiro de volta.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">Engenharia de prompt, IA e curadoria humanizada para atrair, alinhar e reter <strong className="text-white">times de tecnologia</strong> com cultura e competências da sua empresa.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#investimento">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-base sm:text-lg px-6 sm:px-8">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </a>
              
              <Button size="lg" variant="gradient-outline" className="text-base sm:text-lg px-6 sm:px-8">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Ver Como Funciona
              </Button>
            </div>
            
            {/* Animated Stats */}
            <AnimatedMetricsSection />
          </div>
        </div>
      </div>

      {/* Modal */}
      <FormBasicoModal open={basicModalOpen} onOpenChange={setBasicModalOpen} onSuccess={handleModalSuccess} />
    </section>;
};
export default HeroSection;