
import { CheckCircle, Clock, Users, Zap } from "lucide-react";
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Clock,
      title: "Onboarding do perfil a ser recrutado",
      description: "Guiada pela nossa curadoria humanizada, aplicamos engenharia de prompt para parametrizar cultura e competências em problemas reais de negócios, produto e tecnologia, customizando e personalizando a comunicação da vaga ao candidato.",
      duration: "Dia 1-2",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "IA + Curadoria",
      description: "Prompt engineering e análise humanizada para mapear candidatos ideais",
      duration: "Dia 3-8",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Validação Cultural",
      description: "Verificamos alinhamento através de parâmetros e dados comportamentais",
      duration: "Dia 9-12",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: CheckCircle,
      title: "Apresentação Final",
      description: "Entregamos 4 profissionais perfeitamente alinhados à sua vaga",
      duration: "Dia 13-15",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="processo" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-purple-50/30" />
      <AnimatedDottedBackground opacity={0.15} color="%23a855f7" size={2} spacing={70} className="hover:opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Como Funciona Nosso <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Processo</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Plug'n'Play. Nos adaptamos ao seu processo seletivo.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-pink-200 to-green-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Duration Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${step.color} mb-6`}>
                      {step.duration}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="text-purple-100 mb-6 max-w-md">
              Vamos personalizar um fluxo de recrutamento que se adapte perfeitamente às suas necessidades.
            </p>
            <a href="#investimento" className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300">
              Iniciar Processo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
