
import { Building2 } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const ClientsSection = () => {

  const clients = [
    { name: "Parceiro 1", logo: "/lovable-uploads/bf08bbb3-71ef-422a-9b7a-284d46696b7b.png" },
    { name: "Parceiro 2", logo: "/lovable-uploads/ea0d4845-0c02-41b4-82cc-961d720f19c9.png" },
    { name: "Parceiro 3", logo: "/lovable-uploads/c214c201-c292-47ad-be06-fae231a17ebf.png" },
    { name: "Parceiro 4", logo: "/lovable-uploads/ed6a6a6d-9131-41d0-96f4-9af0ed67736a.png" },
    { name: "Parceiro 5", logo: "/lovable-uploads/1ca6efa9-3c24-4bd7-ba87-c9c5cb76d832.png" },
    { name: "Parceiro 6", logo: "/lovable-uploads/6e13cf7c-9c7b-4c9f-8bd8-3b96824d359a.png" },
    { name: "Parceiro 7", logo: "/lovable-uploads/ed56b1e0-22c9-450c-a22d-dd6c24a82c73.png" },
    { name: "Parceiro 8", logo: "/lovable-uploads/b65297a8-f883-4478-bb39-ad95e968c779.png" },
    { name: "Parceiro 9", logo: "/lovable-uploads/2cd9bbdd-9b53-4d30-968c-9ceaf5c13905.png" },
    { name: "Parceiro 10", logo: "/lovable-uploads/cd83697e-55af-4d04-9705-e774e5f395e0.png" }
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
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-8 animate-[scroll-right_20s_linear_infinite]">
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
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-8 animate-[scroll-left_25s_linear_infinite]">
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
