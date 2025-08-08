import { CheckCircle, Phone, Mail, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ObrigadoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ObrigadoModal = ({ open, onOpenChange }: ObrigadoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 p-5 mb-6 mx-auto animate-pulse">
            <CheckCircle className="w-full h-full text-white" />
          </div>
          <DialogTitle className="text-4xl font-bold text-gray-900 mb-4">
            Tudo certo, obrigado!
          </DialogTitle>
          <p className="text-gray-600 text-lg leading-relaxed">
            Recebemos suas informações e seu agendamento foi registrado com sucesso. 
            Em breve nossa equipe vai entrar em contato para dar sequência.
          </p>
        </DialogHeader>
        
        <div className="space-y-8">
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

          {/* Botão de fechar */}
          <div className="flex justify-center pt-6">
            <Button 
              onClick={() => onOpenChange(false)}
              className="px-8 py-3 text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Perfeito, obrigado!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ObrigadoModal;