import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ResultProps {
  answers: string[];
  onContinue: () => void;
  onRestart: () => void;
}

export function Result({ answers, onContinue, onRestart }: ResultProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    // Calculo determinístico baseado nas respostas
    let score = 0;
    
    // P1: Prisão Bolsonaro
    if (answers[0] === "Discordo") score += 20;
    else if (answers[0] === "Tenho dúvidas") score += 10;
    
    // P2: STF
    if (answers[1] === "Desaprovo") score += 20;
    else if (answers[1] === "Tenho uma opinião dividida") score += 10;
    
    // P3: Flávio Presidente
    if (answers[2] === "Sou favorável") score += 20;
    else if (answers[2] === "Ainda não tenho opinião") score += 10;
    
    // P4: Nikolas Presidente
    if (answers[3] === "Sou favorável") score += 20;
    else if (answers[3] === "Ainda não tenho opinião") score += 10;
    
    // P5: Cenário Atual
    if (answers[4] === "Muito negativo") score += 20;
    else if (answers[4] === "Negativo") score += 10;

    setFinalScore(score);

    // Duração da tela de carregamento: 2.5 segundos
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [answers]);

  useEffect(() => {
    if (!isAnalyzing) {
      let current = 0;
      const duration = 1500; // animação dura 1.5s
      const increment = finalScore / (duration / 16); 
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= finalScore) {
          setDisplayPercentage(finalScore);
          clearInterval(interval);
        } else {
          setDisplayPercentage(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing, finalScore]);

  // Loading Screen
  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full text-center border-t-8 border-green-800 flex flex-col items-center mx-4"
        >
          <div className="relative w-24 h-24 mb-8">
            <svg className="w-full h-full animate-spin text-green-600" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeDasharray="250" strokeDashoffset="60" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-green-950 uppercase tracking-wide animate-pulse">
            Analisando suas respostas...
          </h2>
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 mt-8 overflow-hidden">
             <motion.div 
               className="bg-green-500 h-full"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 2.5, ease: "linear" }}
             />
          </div>
        </motion.div>
      </div>
    );
  }

  // Result Screen Variables
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-3xl mx-auto px-4 py-12"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 w-full relative overflow-hidden border-t-8 border-green-600 text-center">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-green-100 opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-green-900 opacity-10"></div>
        
        <h2 className="text-xl md:text-2xl font-bold text-gray-500 mb-2 uppercase tracking-widest relative z-10">
          Seu Resultado
        </h2>
        
        <div className="my-10 relative z-10 flex justify-center items-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90 drop-shadow-md" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="12" />
              <circle 
                cx="80" cy="80" r={radius} 
                fill="none" 
                stroke="#16a34a" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeDasharray={circumference} 
                strokeDashoffset={strokeDashoffset} 
                className="transition-all duration-100 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-5xl md:text-7xl font-black text-green-950">{displayPercentage}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-10 relative z-10 max-w-xl mx-auto shadow-inner">
          <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed">
            Seu resultado no quiz indica <strong className="text-green-600 font-black text-2xl">{displayPercentage}%</strong> de alinhamento com as posições utilizadas neste questionário.
          </p>
          <p className="text-xs text-gray-400 mt-4 uppercase tracking-wide">
            *Este é apenas um resultado baseado nas suas respostas interativas e não possui valor científico oficial.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
          <button
            onClick={onRestart}
            className="w-full md:w-auto bg-white border-2 border-green-800 text-green-800 font-bold py-4 px-8 rounded-xl text-lg hover:bg-green-50 transition-colors shadow-sm"
          >
            REFAZER O QUIZ
          </button>
          <button
            onClick={onContinue}
            className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </motion.div>
  );
}
