
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";
import asaasLogo from "@/assets/logos/asaas-logo.png";
import starkbankLogo from "@/assets/logos/starkbank-logo.png";
import klaviLogo from "@/assets/logos/klavi-logo.png";
import qitechLogo from "@/assets/logos/qitech-logo.png";
import zigfunLogo from "@/assets/logos/zigfun-logo.png";
import nuviaLogo from "@/assets/logos/nuvia-logo.png";
import celcoinLogo from "@/assets/logos/celcoin-logo.png";
import supersimLogo from "@/assets/logos/supersim-logo.png";
import tivitaLogo from "@/assets/logos/tivita-logo.png";
import neonLogo from "@/assets/logos/neon-logo.svg";

const FlywheelSection = () => {
  const brands = [
    { name: "Asaas", logo: asaasLogo },
    { name: "Starkbank", logo: starkbankLogo },
    { name: "Klavi", logo: klaviLogo },
    { name: "QiTech", logo: qitechLogo },
    { name: "Zigfun", logo: zigfunLogo },
    { name: "Nuvia", logo: nuviaLogo },
    { name: "Celcoin", logo: celcoinLogo },
    { name: "Supersim", logo: supersimLogo },
    { name: "Tivita", logo: tivitaLogo },
    { name: "Neon", logo: neonLogo },
    { name: "Asaas", logo: asaasLogo },
    { name: "Starkbank", logo: starkbankLogo },
    { name: "Klavi", logo: klaviLogo },
    { name: "QiTech", logo: qitechLogo },
    { name: "Zigfun", logo: zigfunLogo },
  ];
  return <section id="flywheel" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedDottedBackground opacity={0.2} color="%23e2e8f0" size={3} spacing={80} className="hover:opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Nosso <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Flywheel</span> de Sucesso
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Vamos além da vaga. Um processo inteligente que conecta vivências e experiências do profissional em resolver problemas reais de negócio, com a atitude que o crescimento da sua empresa precisa.</p>
        </div>

        {/* Flywheel Visual */}
        <div className="w-full grid place-items-center">
          <img 
            src="/lovable-uploads/3c5464fe-9e1b-4b84-a2f8-b161271aa845.png" 
            alt="Flywheel de Recrutamento - 4 peças: Quem Somos, Por Que Fazemos, Como Fazemos, Valor Agregado" 
            className="w-full h-auto max-w-[1200px] rounded-2xl"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.15))' }}
          />
        </div>


        {/* Brands Loop Section */}
        <section id="brands-loop" className="mt-16 py-8">
          <div className="container mx-auto px-4">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-[220px_1fr] gap-12 items-center">
              {/* Fixed Title Column */}
              <div className="text-lg font-semibold text-slate-900">
                Trabalhamos com:
              </div>
              
              {/* Marquee Column */}
              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Marquee Track */}
                <div className="group flex gap-12 animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
                  {/* First set */}
                  {brands.map((brand, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-8 w-auto grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-8 w-auto grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-4">
              <div className="text-lg font-semibold text-slate-900 text-center">
                Trabalhamos com:
              </div>
              
              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Mobile Marquee Track */}
                <div className="flex gap-8 animate-marquee motion-reduce:animate-none">
                  {/* First set */}
                  {brands.map((brand, index) => (
                    <div key={`mobile-first-${index}`} className="flex-shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-6 w-auto grayscale opacity-85"
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <div key={`mobile-second-${index}`} className="flex-shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-6 w-auto grayscale opacity-85"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>;
};
export default FlywheelSection;