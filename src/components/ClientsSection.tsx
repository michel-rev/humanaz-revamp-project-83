
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Import all logos
import neonLogo from "@/assets/logos/neon-logo.svg";
import supersimLogo from "@/assets/logos/supersim-logo.png";
import nuviaLogo from "@/assets/logos/nuvia-logo.png";
import klaviLogo from "@/assets/logos/klavi-logo.png";
import zigfunLogo from "@/assets/logos/zigfun-logo.png";
import celcoinLogo from "@/assets/logos/celcoin-logo.png";
import starkbankLogo from "@/assets/logos/starkbank-logo.png";
import asaasLogo from "@/assets/logos/asaas-logo.png";
import qitechLogo from "@/assets/logos/qitech-logo.png";
import tivitaLogo from "@/assets/logos/tivita-logo.png";

const ClientsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const clients = [
    { name: "Neon Pagamentos", logo: neonLogo },
    { name: "SuperSim", logo: supersimLogo },
    { name: "Nuvia", logo: nuviaLogo },
    { name: "Klavi", logo: klaviLogo },
    { name: "ZigFun", logo: zigfunLogo },
    { name: "Celcoin", logo: celcoinLogo },
    { name: "StarkBank", logo: starkbankLogo },
    { name: "Asaas", logo: asaasLogo },
    { name: "QITech", logo: qitechLogo },
    { name: "Tivita", logo: tivitaLogo }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-900 relative overflow-hidden">
      <AnimatedDottedBackground opacity={0.3} color="%23a855f7" size={3} spacing={90} className="hover:opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-sm mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Empresas que Confiam em Nós
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Parceiros de <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sucesso</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Trabalhamos com as principais fintechs e startups do mercado brasileiro, conectando talentos excepcionais às empresas mais inovadoras.
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Duplicate clients for infinite scroll effect */}
              {[...clients, ...clients].map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in">
                    <div className="flex items-center justify-center h-24">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          filter: "brightness(0.9) contrast(1.1)",
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation arrows */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <CarouselPrevious className="bg-slate-800/80 border-slate-600 hover:bg-slate-700 hover:border-purple-400/50 text-white">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <CarouselNext className="bg-slate-800/80 border-slate-600 hover:bg-slate-700 hover:border-purple-400/50 text-white">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-700">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-slate-400">Empresas Parceiras</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-slate-400">Profissionais Contratados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-slate-400">Taxa de Aprovação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
            <div className="text-slate-400">Retenção 12 meses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
