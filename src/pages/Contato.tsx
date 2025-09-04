import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", celular: "", email: "", mensagem: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Vamos Trabalhar <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Juntos</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Vamos trabalhar juntos para criar uma conexão de propósitos, que contribua para o crescimento do seu negócio, e que represente sua marca e atraia profissionais qualificados?
            </p>
            <p className="text-lg text-purple-600 font-semibold mt-6">
              Lembre-se: Tudo é conectado, mas poucas são por conexão de propósitos!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Company Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <Building className="h-8 w-8 text-purple-600" />
                    Informações da Empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Haz Inteligencia Em Capital Humano Eireli
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      CNPJ: 30.633.157/0001-15
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Localização</p>
                      <p className="text-slate-600">Rio de Janeiro</p>
                      <p className="text-slate-600">Bairro: Barra Da Tijuca</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-purple-100">contato@humanaz.com.br</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Telefone</h4>
                    <p className="text-blue-100">(11) 5026-6963</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Entre em Contato
                </CardTitle>
                <p className="text-slate-600">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="celular">Celular *</Label>
                    <Input
                      id="celular"
                      name="celular"
                      type="tel"
                      required
                      value={formData.celular}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="(11) 5026-6963"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;