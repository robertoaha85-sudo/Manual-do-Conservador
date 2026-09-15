import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Landmark, Scale, FileText, Users, Vote, CheckCircle2, ChevronDown } from 'lucide-react';
import ebookCover from '../assets/images/manual_do_conservador_mockup_1789514650169.jpg';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h4 className="text-lg font-bold text-green-900 pr-4">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-green-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export function ProductCard() {
  const handleCheckout = () => {
    // Espaço para inserir o link real de checkout posteriormente
    window.location.href = "#checkout";
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white font-sans overflow-hidden text-gray-800"
    >
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-green-950 to-green-900 text-white pt-16 md:pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-green-800 border border-green-700 text-green-100 text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full mb-6 shadow-sm">
              E-BOOK DIGITAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
              MANUAL DO <br className="hidden md:block" />
              CONSERVADOR
            </h1>
            <h2 className="text-xl md:text-2xl text-green-100 font-bold mb-6 leading-relaxed">
              Pare de apenas ouvir falar sobre conservadorismo. Entenda as ideias por trás dele.
            </h2>
            <p className="text-lg text-green-200/90 mb-10 leading-relaxed font-medium">
              Um material direto e organizado para quem quer compreender conceitos, princípios, instituições e debates que fazem parte do pensamento conservador.
            </p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto md:mx-0">
              <button 
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-xl py-5 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
              >
                QUERO O MANUAL POR R$ 10,99
              </button>
              <p className="text-sm font-medium text-green-300/80 text-center uppercase tracking-wider">
                Pagamento único • Acesso ao produto digital
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-white opacity-5 blur-2xl rounded-full transform translate-y-10"></div>
              <img 
                src={ebookCover} 
                alt="Mockup do E-book Manual do Conservador" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-green-800/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE IMPACTO */}
      <section className="bg-green-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            Quanto você realmente conhece as ideias que defende?
          </h2>
          <div className="w-16 h-1.5 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-green-50 font-medium leading-relaxed mb-6">
            É fácil repetir frases. Mais importante é entender os conceitos, conhecer os argumentos e saber explicar as próprias posições.
          </p>
          <p className="text-lg md:text-xl text-green-100 font-medium leading-relaxed">
            O Manual do Conservador foi criado para transformar assuntos políticos complexos em uma leitura simples, organizada e acessível.
          </p>
        </div>
      </section>

      {/* 3. O QUE VOCÊ VAI ENCONTRAR */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-4">Dentro do Manual</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "PRINCÍPIOS CONSERVADORES", text: "Uma introdução aos principais conceitos associados ao pensamento conservador." },
              { icon: Landmark, title: "ESTADO E INSTITUIÇÕES", text: "Entenda o funcionamento das principais instituições políticas brasileiras." },
              { icon: Scale, title: "LIBERDADE E RESPONSABILIDADE", text: "Conheça conceitos frequentemente presentes nos debates sobre liberdade individual, responsabilidade e sociedade." },
              { icon: FileText, title: "ECONOMIA", text: "Entenda conceitos econômicos frequentemente relacionados às diferentes correntes políticas." },
              { icon: Users, title: "SOCIEDADE E VALORES", text: "Conheça diferentes argumentos presentes nos debates sobre família, tradição, cultura e mudanças sociais." },
              { icon: Vote, title: "POLÍTICA BRASILEIRA", text: "Organize seus conhecimentos sobre eleições, Poderes da República e participação política." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 border border-green-100">
                  <item.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-green-950 mb-3 tracking-wide">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É O E-BOOK? */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-green-950 mb-16">
            Este Manual foi feito para você que...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Quer começar a estudar conservadorismo.",
              "Quer entender melhor os conceitos que aparecem nos debates políticos.",
              "Quer organizar seus conhecimentos.",
              "Quer deixar de depender apenas de vídeos curtos e posts de redes sociais.",
              "Quer ter um material simples para consultar quando surgir uma dúvida.",
              "Quer conhecer diferentes argumentos antes de formar suas próprias conclusões."
            ].map((phrase, idx) => (
              <div key={idx} className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-7 h-7 text-green-600 mr-4 shrink-0" />
                <span className="text-gray-800 font-bold leading-tight pt-0.5">{phrase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-green-950 text-white relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 w-full flex justify-center">
            <img 
              src={ebookCover} 
              alt="Manual do Conservador" 
              className="w-full max-w-sm h-auto rounded-xl shadow-2xl object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-green-800/50"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-tight">
              Por R$ 10,99, você leva um material para consultar quando quiser.
            </h2>
            
            <h3 className="text-2xl font-bold text-green-400 mb-8 uppercase tracking-widest">
              Manual do Conservador
            </h3>
            
            <ul className="space-y-5 mb-12">
              {[
                "Conteúdo organizado",
                "Leitura simples",
                "Material digital",
                "Consulta quando quiser",
                "Pagamento único",
                "Acesso conforme as condições do checkout"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-lg font-medium text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-4 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleCheckout}
              className="w-full md:w-auto px-10 bg-green-600 hover:bg-green-500 text-white font-black text-xl py-5 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
            >
              QUERO ACESSAR O MANUAL
            </button>
          </div>
        </div>
      </section>

      {/* 6. TRANSFORMAÇÃO */}
      <section className="py-24 px-4 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-green-950 mb-8 leading-tight">
            Conhecimento muda a forma como você participa dos debates.
          </h2>
          <div className="w-16 h-1.5 bg-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-700 text-xl leading-relaxed mb-6 font-medium">
            Você não precisa concordar com tudo. Mas entender conceitos, argumentos e instituições permite participar de discussões políticas com mais clareza.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            O objetivo deste Manual é oferecer uma introdução organizada para quem quer estudar o pensamento conservador e compreender melhor os debates políticos brasileiros.
          </p>
        </div>
      </section>

      {/* 7. PREÇO */}
      <section className="py-24 px-4 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-green-50 opacity-50 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl border-t-8 border-green-700 w-full relative">
            <h2 className="text-2xl md:text-3xl font-black text-green-950 mb-8">
              Comece por menos do que custa um café.
            </h2>
            
            <div className="mb-2">
              <span className="text-7xl md:text-8xl font-black text-green-900 tracking-tighter drop-shadow-sm">R$ 10,99</span>
            </div>
            <p className="text-xl text-gray-500 font-bold mb-10 uppercase tracking-widest">Pagamento único</p>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-2xl py-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-b-4 border-green-800 active:border-b-0 active:translate-y-1 mb-6"
            >
              QUERO MEU MANUAL
            </button>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto font-medium">
              Produto digital • Acesso conforme as condições apresentadas no checkout
            </p>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL (PLACEHOLDERS) */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-green-950 mb-16">
            O que os leitores estão dizendo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col min-h-[200px]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium italic text-base leading-relaxed mb-6">
                “Gostei porque é direto ao ponto. Eu já tinha algumas ideias sobre conservadorismo, mas nunca tinha parado para entender de onde elas vinham.”
              </p>
              <p className="text-gray-900 font-bold mt-auto text-sm">— Lucas, 24 anos</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col min-h-[200px]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium italic text-base leading-relaxed mb-6">
                “É um material bem tranquilo de ler. Não fica usando palavras difíceis o tempo todo e dá uma visão geral que ajuda bastante quem está começando a estudar o assunto.”
              </p>
              <p className="text-gray-900 font-bold mt-auto text-sm">— Rafael, 29 anos</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col min-h-[200px]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium italic text-base leading-relaxed mb-6">
                “Comprei esperando encontrar só opinião, mas achei interessante justamente por organizar os conceitos e explicar as ideias de uma forma mais simples.”
              </p>
              <p className="text-gray-900 font-bold mt-auto text-sm">— Marcos, 32 anos</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 9. TRANSPARENCIA & PERGUNTAS FREQUENTES */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          
          <div className="bg-green-50 p-10 rounded-3xl border border-green-100 text-center md:text-left flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-green-950 mb-4">Uma experiência informativa</h2>
              <p className="text-gray-700 leading-relaxed font-medium mb-4 text-sm md:text-base">
                O quiz apresentado antes desta página é uma experiência interativa e informal. Ele não possui finalidade científica e não determina objetivamente a identidade política de ninguém.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                O e-book também não pretende substituir fontes oficiais, estudos acadêmicos ou diferentes perspectivas políticas. Seu objetivo é servir como material introdutório e de consulta.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-center text-green-950 mb-10">
              Perguntas Frequentes
            </h2>
            
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
              <FAQItem 
                question="1. O que é o produto?" 
                answer="É um e-book digital introdutório sobre conceitos, instituições e debates relacionados à direita brasileira e à política nacional." 
              />
              <FAQItem 
                question="2. É um livro físico?" 
                answer="Não. O produto é digital." 
              />
              <FAQItem 
                question="3. Quanto custa?" 
                answer="O valor é R$ 10,99, em pagamento único." 
              />
              <FAQItem 
                question="4. Preciso conhecer política para ler?" 
                answer="Não. O conteúdo foi pensado também para quem está começando a estudar o assunto." 
              />
              <FAQItem 
                question="5. O material é um curso?" 
                answer="Não. É um e-book de leitura e consulta." 
              />
              <FAQItem 
                question="6. O quiz determina se eu sou de direita?" 
                answer="Não. O quiz é apenas uma experiência informal baseada nas respostas fornecidas pelo participante." 
              />
              <FAQItem 
                question="7. Como recebo o e-book?" 
                answer="Após a confirmação do pagamento, o acesso será disponibilizado conforme as instruções do checkout." 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="bg-green-950 text-green-100/60 py-16 px-4 text-center text-sm border-t border-green-900">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold text-green-50 mb-3 text-base tracking-wider uppercase">© 2026 — Manual do Conservador</p>
          <p className="mb-10 font-medium text-green-100/50">Material digital para fins informativos e educacionais.</p>
          
          <div className="flex flex-wrap justify-center gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
