
import AnimatedDottedBackground from "@/components/AnimatedDottedBackground";

const FlywheelSection = () => {
  const brands = [
    { name: "Asaas", logo: "/lovable-uploads/d1d1a753-8572-4782-9a2c-8cce976eccae.png" },
    { name: "Starkbank", logo: "/lovable-uploads/4170a859-68a5-4a85-aea9-d9a5e8b19187.png" },
    { name: "Klavi", logo: "/lovable-uploads/bb5a3fe7-fec2-4000-9e34-9dbcf99e4aa2.png" },
    { name: "QiTech", logo: "/lovable-uploads/6b5d9406-1c56-4935-a4ef-4732cb3c7615.png" },
    { name: "Zig", logo: "/lovable-uploads/745616a5-ed53-464c-b541-214d7fa8eb5f.png" },
    { name: "Nuvia", logo: "/lovable-uploads/ced770ac-2b86-41ee-8c90-b38a3e6c717d.png" },
    { name: "Bee Vale", logo: "/lovable-uploads/94460819-eca8-4aa0-b736-3aff3dc14de1.png" },
    { name: "SmartPay", logo: "/lovable-uploads/830b2565-b46b-4697-97a6-fa1def776d22.png" },
    { name: "Neon", logo: "/lovable-uploads/5d34ebe8-63b7-4027-94fe-940c48effa4c.png" },
    { name: "NFE", logo: "/lovable-uploads/0cea912f-e21c-4e8b-9786-524c2d390341.png" },
  ];
  return <section id="flywheel" className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedDottedBackground opacity={0.2} color="%23e2e8f0" size={3} spacing={80} className="hover:opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-4">
            Nosso <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Flywheel</span> de Sucesso
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Solução Plug&apos;n&apos;Play para o seu recrutamento de tecnologia. Adicione inteligência ao seu recrutamento com a HumanAZ conferindo assertividade e agilidade as suas contratações.</p>
        </div>

        {/* Flywheel Visual */}
        <div className="w-full grid place-items-center">
          <img 
            src="/lovable-uploads/c922fb5b-a18f-4d53-a356-9816951de420.png" 
            alt="Flywheel HumanAZ - Por que fazemos, Como fazemos, Valor Agregado, processo de +15 dias corridos" 
            className="w-full h-auto max-w-[1200px] rounded-2xl"
            style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.15))' }}
          />
        </div>


        {/* Brands Loop Section */}
        <section id="brands-loop" className="mt-8 sm:mt-12 py-4 sm:py-6">
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
                <div className="group flex animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
                  {/* First set */}
                  {brands.map((brand, index) => (
                    <figure key={`first-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="transition-all duration-300 hover:scale-105"
                      />
                    </figure>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <figure key={`second-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="transition-all duration-300 hover:scale-105"
                      />
                    </figure>
                  ))}
                  
                  {/* Third set for longer loop */}
                  {brands.map((brand, index) => (
                    <figure key={`third-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="transition-all duration-300 hover:scale-105"
                      />
                    </figure>
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
                <div className="flex animate-marquee motion-reduce:animate-none">
                  {/* First set */}
                  {brands.map((brand, index) => (
                    <figure key={`mobile-first-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className=""
                      />
                    </figure>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <figure key={`mobile-second-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className=""
                      />
                    </figure>
                  ))}
                  
                  {/* Third set for longer loop */}
                  {brands.map((brand, index) => (
                    <figure key={`mobile-third-${index}`} className="brand">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className=""
                      />
                    </figure>
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