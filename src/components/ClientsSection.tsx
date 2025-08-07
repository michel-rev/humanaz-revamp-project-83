
import { Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

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
  const [offsetRight, setOffsetRight] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    const animateCarousel = () => {
      setOffsetRight(prev => {
        const newOffset = prev - 1;
        // Reset position when one complete set has passed
        return newOffset <= -100 ? 0 : newOffset;
      });
      
      setOffsetLeft(prev => {
        const newOffset = prev + 0.8;
        // Reset position when one complete set has passed
        return newOffset >= 100 ? 0 : newOffset;
      });
    };

    const interval = setInterval(animateCarousel, 50);
    return () => clearInterval(interval);
  }, []);

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

        {/* Clients Infinite Loop Animation */}
        <div className="space-y-8">
          {/* First row - moving right */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex gap-8 transition-none"
              style={{ 
                transform: `translateX(${offsetRight}%)`,
                width: '300%' // Triple width to accommodate seamless loop
              }}
            >
              {/* Triple the logos for seamless infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={`right-${index}`} className="flex-shrink-0 group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 w-48">
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
              ))}
            </div>
          </div>

          {/* Second row - moving left */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex gap-8 transition-none"
              style={{ 
                transform: `translateX(${offsetLeft}%)`,
                width: '300%' // Triple width to accommodate seamless loop
              }}
            >
              {/* Triple the logos for seamless infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={`left-${index}`} className="flex-shrink-0 group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 w-48">
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
              ))}
            </div>
          </div>
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
