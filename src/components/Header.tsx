
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Building2, Users, Award, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const activeSection = useActiveSection();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isDarkBackground = activeSection.isDark;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: "Como Funciona", href: "#processo" },
    { name: "Oportunidade", href: "#clientes" },
    { name: "Empresa", href: "#sobre", hasDropdown: true },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" }
  ];

  const empresaDropdownItems = [
    {
      icon: Building2,
      title: "Sobre Nós",
      description: "Nossa história e missão",
      href: "#sobre"
    },
    {
      icon: Users,
      title: "Nossa Equipe",
      description: "Conheça os especialistas",
      href: "#equipe"
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Reconhecimentos e prêmios",
      href: "#certificacoes"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Onde estamos localizados",
      href: "#localizacao"
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center mr-12">
            <img 
              src="/lovable-uploads/223cbda9-53a4-4e94-a4b7-bcc0b550cf27.png" 
              alt="HumanAZ Logo" 
              className="h-10 w-auto brightness-0"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 mx-12">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg border border-gray-200 shadow-sm z-50 py-2">
                      {empresaDropdownItems.map((dropdownItem, index) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            className="block px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="flex items-start gap-4">
                              <IconComponent className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                                  {dropdownItem.title}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg border-0 transition-colors duration-300">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="w-full text-left font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center justify-between group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    {isMobileDropdownOpen && (
                      <div className="mt-2 ml-4 space-y-3">
                        {empresaDropdownItems.map((dropdownItem, index) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <a
                              key={index}
                              href={dropdownItem.href}
                              className="block py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen(false);
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <IconComponent className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                                    {dropdownItem.title}
                                  </div>
                                  <div className="text-sm text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
              <Button className="bg-purple-600 hover:bg-purple-700 text-white mt-4 font-semibold px-6 py-2 rounded-lg border-0 transition-colors duration-300">
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
