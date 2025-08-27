
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
    { name: "Parceiro 10", logo: "/lovable-uploads/cd83697e-55af-4d04-9705-e774e5f395e0.png" },
    { name: "Parceiro 11", logo: "/lovable-uploads/4b25fd16-a63e-454d-a9d8-de4b9d40791e.png" },
    { name: "Parceiro 12", logo: "/lovable-uploads/bd64466a-5c59-4fff-bbbc-ea17a0d6a6b3.png" },
    { name: "Parceiro 13", logo: "/lovable-uploads/7a4bba2f-8938-40ec-9c86-c473f67deae2.png" },
    { name: "Parceiro 14", logo: "/lovable-uploads/45d74ef2-a3d7-4980-82ba-e7dfa74d8141.png" },
    { name: "Parceiro 15", logo: "/lovable-uploads/6089b568-bd6b-48b4-ba55-e05c0fe0bbba.png" },
    { name: "Parceiro 16", logo: "/lovable-uploads/b9e73dc1-0e63-4efd-9e47-0f09f52ed2b2.png" },
    { name: "Parceiro 17", logo: "/lovable-uploads/f23916b3-d3a7-49b9-a82e-98c8f9273344.png" },
    { name: "Parceiro 18", logo: "/lovable-uploads/d950348a-db0c-47a6-828f-9cf2744b16a6.png" },
    { name: "Parceiro 19", logo: "/lovable-uploads/6cb1b962-ae40-477c-8f75-f6d982fd62ac.png" },
    { name: "Parceiro 20", logo: "/lovable-uploads/bae90704-3161-4dd1-bef6-783530f1c86b.png" },
    { name: "Parceiro 21", logo: "/lovable-uploads/a45e5db0-5d80-40b5-a352-ea1a8a292419.png" }
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
            <div className="text-4xl font-bold text-purple-400 mb-2">+150</div>
            <div className="text-slate-400">Empresas parceiras</div>
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
