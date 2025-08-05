
import { Building2 } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const ClientsSection = () => {
  const clients = [
    { name: "Neon Pagamentos", logo: "🏦" },
    { name: "SuperSim", logo: "📱" },
    { name: "Nuvia", logo: "💎" },
    { name: "Klavi", logo: "🎹" },
    { name: "ZigFun", logo: "⚡" },
    { name: "Celcoin", logo: "💰" },
    { name: "StarkBank", logo: "🏛️" },
    { name: "Asaas", logo: "💳" },
    { name: "QITech", logo: "🚀" },
    { name: "Tivita", logo: "📊" }
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

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
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
