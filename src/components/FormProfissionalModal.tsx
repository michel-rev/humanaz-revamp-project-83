import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormProfissionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const FormProfissionalModal = ({ open, onOpenChange, onSuccess }: FormProfissionalModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Validação básica
    const nome = formData.get('nome') as string;
    const telefone = formData.get('telefone') as string;
    const email = formData.get('email') as string;
    const empresa = formData.get('empresa') as string;
    const setor = formData.get('setor') as string;
    const mensagem = formData.get('mensagem') as string;

    if (!nome || !telefone || !email || !empresa || !setor || !mensagem) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, insira um email válido.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      plan_id: "escala",
      nome: nome,
      email: email,
      empresa: empresa,
      setor: setor,
      mensagem: mensagem,
      telefone: telefone
    };
    
    console.log('Enviando dados para webhook:', payload);
    
    try {
      const response = await fetch("https://services.leadconnectorhq.com/hooks/wnuqW06oEeR1y8xNjFPE/webhook-trigger/fdc08095-fcb0-4861-90f6-30e15adfc7b9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Informações enviadas com sucesso!");
        onOpenChange(false);
        window.location.href = '/agendamento';
      } else {
        toast.error("Erro ao enviar informações. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar informações. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
            Plano de Escala
          </DialogTitle>
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
            Mais Popular
          </div>
          <p className="text-gray-600 text-lg">
            Preencha os dados abaixo para começarmos sua jornada
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Nome e Telefone na mesma linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-gray-700 font-medium">
                Nome completo *
              </Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                required
                className="h-12"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-gray-700 font-medium">
                Telefone *
              </Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                required
                className="h-12"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="h-12"
              placeholder="seu@email.com"
            />
          </div>

          {/* Empresa e Setor na mesma linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-gray-700 font-medium">
                Nome da empresa *
              </Label>
              <Input
                id="empresa"
                name="empresa"
                type="text"
                required
                className="h-12"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="setor" className="text-gray-700 font-medium">
                Setor da empresa *
              </Label>
              <Select name="setor" required>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fintech">Fintech</SelectItem>
                  <SelectItem value="SaaS">SaaS</SelectItem>
                  <SelectItem value="Software House">Software House</SelectItem>
                  <SelectItem value="Health Tech">Health Tech</SelectItem>
                  <SelectItem value="Agrotech">Agrotech</SelectItem>
                  <SelectItem value="IoT">IoT</SelectItem>
                  <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="EdTech">EdTech</SelectItem>
                  <SelectItem value="Outras">Outras</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-gray-700 font-medium">
              Mensagem *
            </Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              required
              className="min-h-[120px]"
              placeholder="Conte-nos mais sobre suas necessidades de recrutamento..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            {isSubmitting ? "Enviando..." : "Mais Popular"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormProfissionalModal;