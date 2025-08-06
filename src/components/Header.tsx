
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  
  const isDarkBackground = activeSection.isDark;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Como Funciona", href: "#processo" },
    { name: "Clientes", href: "#clientes" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isDarkBackground ? 'border-gray-300/20 bg-white/10 backdrop-blur-md' : 'border-gray-800/20 bg-white/90 backdrop-blur-md shadow-lg'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center mr-12">
            <img 
              src="/lovable-uploads/223cbda9-53a4-4e94-a4b7-bcc0b550cf27.png" 
              alt="HumanAZ Logo" 
              className={`h-10 w-auto transition-all duration-500 ${isDarkBackground ? 'filter-none' : 'brightness-0'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 mx-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-400 after:via-pink-400 after:to-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isDarkBackground ? 'text-white' : 'text-gray-900'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-[1rem]">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-500 h-4 ${isDarkBackground ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-500 ${isDarkBackground ? 'border-purple-400/20' : 'border-gray-800/20'}`}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-400 after:via-pink-400 after:to-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isDarkBackground ? 'text-white' : 'text-gray-900'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mt-4 text-[1rem]">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
