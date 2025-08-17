
import { Building2 } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const ClientsSection = () => {

  const clients = [
    { name: "12 Minutos", logo: "/lovable-uploads/761e1da5-7c3d-4713-a8f3-88038dcae126.png" },
    { name: "Americanas Delivery", logo: "/lovable-uploads/0e3c140d-c7f5-4ece-8f7c-d9e629ab41d6.png" },
    { name: "BitCapital", logo: "/lovable-uploads/ced4ec51-aa5b-4abf-88e4-eaea0f969104.png" },
    { name: "Bom Para Crédito", logo: "/lovable-uploads/f3e1518e-77e1-4ff1-96e0-57b4e9285eff.png" },
    { name: "Faire", logo: "/lovable-uploads/ab7d7a61-ce09-4f11-bcb4-337910547149.png" },
    { name: "Get.info", logo: "/lovable-uploads/b1960061-9f3a-421f-a4e0-ed7e8b6638a6.png" },
    { name: "Globo", logo: "/lovable-uploads/17f3f46e-df6a-4963-a0f5-7bf6b8f43eeb.png" },
    { name: "Info4", logo: "/lovable-uploads/79bd1d2e-19c3-4225-b01a-8c408fc86ea0.png" },
    { name: "Involves", logo: "/lovable-uploads/7b2dc6a6-5a29-4cd9-ac4e-5b6347672e4f.png" },
    { name: "Juno", logo: "/lovable-uploads/1cd0b3bc-2777-4dd0-b3e4-3018394004cc.png" }
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
