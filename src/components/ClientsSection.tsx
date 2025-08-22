
import { Building2 } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const ClientsSection = () => {

  const clients = [
    { name: "StarkBank", logo: "/lovable-uploads/0e308864-6feb-4c86-937a-ac346fd10014.png" },
    { name: "Klavi", logo: "/lovable-uploads/ef3bb958-4385-40d4-877b-ddc178e1ddd8.png" },
    { name: "QITech", logo: "/lovable-uploads/1b585210-a1d7-4deb-a829-05226a06b219.png" },
    { name: "Zig", logo: "/lovable-uploads/3a87808b-5447-4719-ae8d-16245cc1a518.png" },
    { name: "Nuvia", logo: "/lovable-uploads/acd7579e-61c5-422c-a432-cec7395b7dfd.png" },
    { name: "BeeVale", logo: "/lovable-uploads/19a5e6de-d61d-4394-9abf-674de18fb298.png" },
    { name: "SmartPay", logo: "/lovable-uploads/36f0d45d-f5ba-4bc6-87ef-c36717ade077.png" },
    { name: "Neon", logo: "/lovable-uploads/d51b6754-b944-4816-99d4-d4171bf9e6a3.png" },
    { name: "NFE.io", logo: "/lovable-uploads/0616313e-4ed3-4082-9d47-650273a0f057.png" },
    { name: "Asaas", logo: "/lovable-uploads/59f57475-9062-4aa3-b605-090434fc9f9e.png" }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-900 relative overflow-hidden">
      <AnimatedDottedBackground opacity={0.3} color="%23a855f7" size={3} spacing={90} className="hover:opacity-50" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trabalhamos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">com</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Principais fintechs e startups do mercado brasileiro confiam em nosso processo de recrutamento.
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
            <div className="text-4xl font-bold text-purple-400 mb-2">21+</div>
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
