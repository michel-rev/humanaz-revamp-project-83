import { CheckCircle, ArrowLeft, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-5 mb-6 mx-auto animate-pulse">
              <CheckCircle className="w-full h-full text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
              Tudo certo, obrigado!
            </CardTitle>
            <p className="text-gray-600 text-lg leading-relaxed">
              Recebemos suas informações e seu agendamento foi registrado com sucesso. 
              Em breve nossa equipe vai entrar em contato para dar sequência.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Próximos passos */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Próximos passos:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span>Você receberá um e-mail de confirmação em alguns minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span>Nossa equipe fará contato 24h antes da reunião agendada</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span>Prepare suas dúvidas e necessidades para maximizar nossa conversa</span>
                </li>
              </ul>
            </div>

            {/* Contatos de emergência */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Precisa de ajuda imediata?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Ligação direta disponível</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Suporte via e-mail 24h</span>
                </div>
              </div>
            </div>

            {/* Botão de volta */}
            <div className="flex justify-center pt-6">
              <Link to="/">
                <Button 
                  className="flex items-center gap-2 px-8 py-3 text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao site
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Obrigado;