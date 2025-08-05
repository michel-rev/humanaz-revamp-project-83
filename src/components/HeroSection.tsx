
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedMetricsSection from "@/components/AnimatedMetricsSection";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <AnimatedDottedBackground opacity={0.4} className="hover:opacity-60" />
      
      <div className="relative container mx-auto px-4 pt-8 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Recrutamento Tech - Retenção, Contexto e Precisão
            </div>
            
            <h1 className="text-[78px] font-bold leading-[78px]">
              Conectamos
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                {" "}talentos tech{" "}
              </span>
              às empresas certas
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Transformamos contratações tech através de IA, curadoria humanizada e um processo de 15 dias que entrega 4 profissionais perfeitamente alinhados à sua cultura e necessidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-[1rem]">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="gradient-outline" className="text-[1rem]">
                <Play className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </div>
            
            {/* Animated Stats */}
            <AnimatedMetricsSection />
          </div>
          
          {/* Visual Element */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-sm border border-purple-400/30 p-4 animate-float">
                  <div className="text-purple-300 text-sm">Neon Pagamentos</div>
                  <div className="text-white font-semibold">Senior Frontend Developer</div>
                  <div className="text-slate-400 text-xs mt-2">Match: 98%</div>
                </div>
                
                <div className="absolute top-20 left-0 w-64 h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-blue-400/30 p-4 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-blue-300 text-sm">Stark Bank</div>
                  <div className="text-white font-semibold">DevOps Engineer</div>
                  <div className="text-slate-400 text-xs mt-2">Match: 96%</div>
                </div>
                
                <div className="absolute bottom-0 right-8 w-64 h-32 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl backdrop-blur-sm border border-green-400/30 p-4 animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-green-300 text-sm">Asaas</div>
                  <div className="text-white font-semibold">Full Stack Developer</div>
                  <div className="text-slate-400 text-xs mt-2">Match: 94%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
