import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Agendamento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-4 mx-auto">
              <Calendar className="w-full h-full text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Agende seu melhor horário
            </CardTitle>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <p className="text-lg">
                Agora escolha o melhor horário para conversar com nosso time usando o calendário abaixo.
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
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
                      window.location.href = '/obrigado';
                    }
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-base">
            Após concluir o agendamento, você será direcionado para a próxima etapa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;