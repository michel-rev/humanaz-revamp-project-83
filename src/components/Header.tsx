
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Link } from "react-router-dom";

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
    { name: "Flywheel", href: "#flywheel" },
    { name: "Como Funciona", href: "#processo" },
    { name: "Oportunidade", href: "https://app.humanaz.io/" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-12">
            <img 
              src="/lovable-uploads/223cbda9-53a4-4e94-a4b7-bcc0b550cf27.png" 
              alt="HumanAZ Logo" 
              className="h-10 w-auto brightness-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 mx-12">
            {navigation.map((item) => {
              const isExternal = item.href.startsWith('http') || item.href.startsWith('#');
              return isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#investimento">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg border-0 transition-colors duration-300">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center justify-center hover:bg-gray-100 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isExternal = item.href.startsWith('http') || item.href.startsWith('#');
                return isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
              <a href="#investimento">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white mt-4 font-semibold px-6 py-2 rounded-lg border-0 transition-colors duration-300">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
