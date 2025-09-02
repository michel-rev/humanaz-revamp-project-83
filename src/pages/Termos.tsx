import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-600 mb-4">
                  Ao acessar e usar os serviços da HumanAZ, você concorda com estes Termos de Uso. 
                  Se você não concordar com algum destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição dos Serviços</h2>
                <p className="text-gray-600 mb-4">
                  A HumanAZ oferece serviços de recrutamento e seleção de profissionais de tecnologia, 
                  conectando talentos excepcionais às empresas certas através de IA, curadoria humanizada 
                  e processos otimizados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso Aceitável</h2>
                <p className="text-gray-600 mb-4">
                  Você concorda em usar nossos serviços apenas para fins legítimos e de acordo com estes termos. 
                  Você não deve:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fornecer informações falsas ou enganosas</li>
                  <li>Violar direitos de propriedade intelectual</li>
                  <li>Interferir no funcionamento de nossos sistemas</li>
                  <li>Usar nossos serviços para atividades ilegais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propriedade Intelectual</h2>
                <p className="text-gray-600 mb-4">
                  Todo o conteúdo, marcas registradas e propriedade intelectual em nosso site 
                  são de propriedade da HumanAZ ou de nossos licenciadores e são protegidos 
                  pelas leis de direitos autorais aplicáveis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitação de Responsabilidade</h2>
                <p className="text-gray-600 mb-4">
                  A HumanAZ não será responsável por danos indiretos, incidentais, especiais 
                  ou consequenciais decorrentes do uso ou impossibilidade de uso de nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modificações</h2>
                <p className="text-gray-600 mb-4">
                  Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Lei Aplicável</h2>
                <p className="text-gray-600 mb-4">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa 
                  será resolvida nos tribunais competentes de São Paulo, SP.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contato</h2>
                <p className="text-gray-600 mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato conosco em: contato@humanaz.io
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

export default Termos;