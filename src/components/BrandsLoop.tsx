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

const BrandsLoop = () => {
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
    { name: "Celcoin Growth", logo: "/lovable-uploads/f8ebba56-6060-48e7-8bb0-4b782e96f4dc.png" },
  ];

  return (
    <section id="brands-loop" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[220px_1fr] gap-8 items-center">
          {/* Fixed Title Column */}
          <div className="text-lg font-semibold text-foreground">
            Trabalhamos com:
          </div>
          
          {/* Marquee Column */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
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
          <div className="text-lg font-semibold text-foreground text-center">
            Trabalhamos com:
          </div>
          
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
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
  );
};

export default BrandsLoop;