import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informações que Coletamos</h2>
                <p className="text-gray-600 mb-4">
                  A HumanAZ coleta informações que você nos fornece diretamente, como quando você:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Preenche formulários em nosso site</li>
                  <li>Se inscreve em nossa newsletter</li>
                  <li>Entra em contato conosco</li>
                  <li>Participa de nossos processos seletivos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Como Usamos suas Informações</h2>
                <p className="text-gray-600 mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fornecer nossos serviços de recrutamento</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Comunicar com você sobre oportunidades relevantes</li>
                  <li>Enviar newsletters e atualizações (com seu consentimento)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Compartilhamento de Informações</h2>
                <p className="text-gray-600 mb-4">
                  Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. 
                  Podemos compartilhar informações apenas quando necessário para fornecer nossos serviços 
                  ou quando exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Segurança</h2>
                <p className="text-gray-600 mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas 
                  para proteger suas informações pessoais contra acesso não autorizado, alteração, 
                  divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Seus Direitos</h2>
                <p className="text-gray-600 mb-4">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar a exclusão de suas informações</li>
                  <li>Cancelar a inscrição em nossas comunicações</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contato</h2>
                <p className="text-gray-600 mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade, 
                  entre em contato conosco em: contato@humanaz.io
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidade;