import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FormProfissional = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://services.leadconnectorhq.com/hooks/wnuqW06oEeR1y8xNjFPE/webhook-trigger/d47c5ae7-9f71-4784-95c0-b3867f3c4946", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Informações enviadas com sucesso!");
        navigate("/agendamento");
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-4 mx-auto">
              <Users className="w-full h-full text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Plano Profissional
            </CardTitle>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
              Mais Popular
            </div>
            <p className="text-gray-600 text-lg">
              Preencha os dados abaixo para começarmos sua jornada
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="plano" value="Profissional" />
              
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormProfissional;