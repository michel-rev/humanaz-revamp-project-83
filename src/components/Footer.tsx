
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl">HumanAZ</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Conectamos talentos tech excepcionais às empresas certas através de IA, curadoria humanizada e um processo otimizado de 15 dias.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                contato@humanaz.io
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center text-slate-400">
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Fique por dentro das novidades</h3>
              <p className="text-slate-400">Receba insights sobre recrutamento tech e mercado</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 md:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © 2024 HumanAZ. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
