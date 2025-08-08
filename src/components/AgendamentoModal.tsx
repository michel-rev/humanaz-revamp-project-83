import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";

interface AgendamentoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const AgendamentoModal = ({ open, onOpenChange, onSuccess }: AgendamentoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-4 mx-auto">
            <Calendar className="w-full h-full text-white" />
          </div>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-4">
            Agende seu melhor horário
          </DialogTitle>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <p className="text-lg">
              Agora escolha o melhor horário para conversar com nosso time usando o calendário abaixo.
            </p>
          </div>
        </DialogHeader>
        
        <div className="w-full">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/W6PKWefoN3EPme6I0Zye" 
            style={{ 
              width: '100%', 
              border: 'none', 
              overflow: 'hidden',
              minHeight: '600px'
            }} 
            scrolling="no" 
            id="W6PKWefoN3EPme6I0Zye_1754656643254"
            onLoad={() => {
              // Script para detectar quando o agendamento foi concluído
              const script = document.createElement('script');
              script.src = 'https://link.msgsndr.com/js/form_embed.js';
              script.type = 'text/javascript';
              document.head.appendChild(script);
              
              // Listener para redirecionar após agendamento (se possível)
              window.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'booking_completed') {
                  onOpenChange(false);
                  onSuccess();
                }
              });
            }}
          />
        </div>

        <div className="text-center mt-4">
          <p className="text-slate-600 text-sm">
            Após concluir o agendamento, você será direcionado para a próxima etapa.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgendamentoModal;