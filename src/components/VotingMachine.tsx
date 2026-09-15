import { useState } from 'react';
import { motion } from 'motion/react';
import { candidateImages } from '../data/questions';

interface VotingMachineProps {
  onConfirm: () => void;
}

export function VotingMachine({ onConfirm }: VotingMachineProps) {
  const [number, setNumber] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [showCandidate, setShowCandidate] = useState<boolean>(false);
  const [isBlank, setIsBlank] = useState<boolean>(false);
  const [candidateInfo, setCandidateInfo] = useState<{name: string, party: string, image: string} | null>(null);

  const handleNumberClick = (num: string) => {
    // Prevent typing if error or blocked is shown
    if (error || blocked) {
      handleCorrect();
    }
    
    if (number.length < 2 && !error && !blocked) {
      const newNumber = number + num;
      setNumber(newNumber);
      
      if (newNumber.length === 2) {
        if (newNumber === '22') {
          setCandidateInfo({ name: 'FLÁVIO BOLSONARO', party: 'PL', image: candidateImages.flavio });
          setShowCandidate(true);
        } else if (newNumber === '13') {
          setCandidateInfo({ name: 'LULA', party: 'PT', image: candidateImages.lula });
          setShowCandidate(true);
        } else {
          setShowCandidate(false);
          setError(true);
        }
      }
    }
  };

  const handleCorrect = () => {
    setNumber(prev => prev.slice(0, -1));
    setError(false);
    setBlocked(false);
    setShowCandidate(false);
    setIsBlank(false);
    setCandidateInfo(null);
  };

  const handleBlank = () => {
    setNumber('');
    setError(false);
    setBlocked(false);
    setShowCandidate(false);
    setIsBlank(true);
    setCandidateInfo(null);
  };

  const handleConfirmClick = () => {
    // REGRA DE NAVEGACAO - APENAS 22 AVANCA
    if (number === '22') {
      onConfirm();
    } else if (number === '13') {
      setBlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto min-h-[80vh] p-4"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-black text-green-800 mb-2 tracking-tight uppercase">Simulação de Voto</h1>
        <p className="text-lg md:text-xl text-green-950 font-medium">Digite o número para visualizar o candidato</p>
      </div>

      <div className="bg-[#e5e5e5] border-4 border-[#cccccc] p-4 md:p-8 rounded-xl shadow-2xl flex flex-col md:flex-row gap-6 md:gap-12 w-full">
        {/* Screen */}
        <div className="flex-1 bg-white border-2 border-gray-300 rounded-lg p-6 flex flex-col min-h-[300px] md:min-h-[400px] relative shadow-inner">
          <div className="text-left h-full flex flex-col">
            <p className="text-gray-800 text-lg md:text-xl font-bold mb-8 uppercase">Presidente</p>
            
            {!isBlank && (
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-600 text-lg">Número:</span>
                <div className="flex gap-2">
                  <div className="w-14 h-16 md:w-16 md:h-20 border-2 border-gray-400 flex items-center justify-center text-4xl md:text-5xl font-bold bg-gray-50">
                    {number[0] || ''}
                  </div>
                  <div className="w-14 h-16 md:w-16 md:h-20 border-2 border-gray-400 flex items-center justify-center text-4xl md:text-5xl font-bold bg-gray-50">
                    {number[1] || ''}
                  </div>
                </div>
              </div>
            )}

            {isBlank && (
              <div className="flex-1 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-black text-gray-800 uppercase animate-pulse text-center">Voto em Branco</span>
              </div>
            )}

            {showCandidate && candidateInfo && !blocked && !error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 items-start justify-between flex-1 flex-col-reverse sm:flex-row"
              >
                <div className="flex-1 w-full">
                  <p className="text-gray-600 text-lg mb-1">Nome: <br className="sm:hidden"/><span className="font-bold text-gray-900 text-xl md:text-2xl">{candidateInfo.name}</span></p>
                  <p className="text-gray-600 text-lg">Partido: <span className="font-bold text-gray-900">{candidateInfo.party}</span></p>
                  <div className="mt-4 sm:mt-8 text-green-700 font-bold text-lg sm:text-xl uppercase animate-pulse">
                    Aperte VERDE para CONFIRMAR
                  </div>
                </div>
                <div className="w-full sm:w-32 h-48 sm:h-44 bg-gray-100 border border-gray-300 flex items-center justify-center shrink-0 shadow-md p-1 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-2 z-0">
                     Carregando imagem...
                   </div>
                   <img src={candidateInfo.image} alt="Foto Candidato" className="w-full h-full object-contain relative z-10" 
                     onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-center text-red-500">Imagem indisponível</span>'; }}
                   />
                </div>
              </motion.div>
            )}

            {blocked && candidateInfo && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 items-start justify-between flex-1 flex-col-reverse sm:flex-row"
              >
                <div className="flex-1 w-full">
                  <p className="text-gray-600 text-lg mb-1">Nome: <br className="sm:hidden"/><span className="font-bold text-gray-900 text-xl md:text-2xl">{candidateInfo.name}</span></p>
                  <p className="text-gray-600 text-lg">Partido: <span className="font-bold text-gray-900">{candidateInfo.party}</span></p>
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-bold text-sm sm:text-lg mb-4 leading-tight">Esta simulação não pode prosseguir com este número.</p>
                    <button 
                      onClick={handleCorrect}
                      className="bg-green-800 text-white px-6 py-3 rounded-lg font-bold uppercase shadow hover:bg-green-900 transition-colors w-full"
                    >
                      Voltar
                    </button>
                  </div>
                </div>
                <div className="w-full sm:w-32 h-48 sm:h-44 bg-gray-100 border border-gray-300 flex items-center justify-center shrink-0 shadow-md p-1 opacity-70 relative">
                   <img src={candidateInfo.image} alt="Foto Candidato" className="w-full h-full object-contain relative z-10" />
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex-1"
              >
                <p className="text-red-600 font-bold text-xl mb-4">Número não reconhecido nesta simulação.</p>
                <button 
                  onClick={handleCorrect}
                  className="bg-orange-500 text-white px-6 py-2 rounded font-bold uppercase shadow hover:bg-orange-600 transition-colors"
                >
                  Tentar novamente
                </button>
              </motion.div>
            )}
            
          </div>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 uppercase font-medium">Aperte a tecla:</p>
            <div className="flex gap-4 mt-2">
              <p className="text-sm text-gray-500 font-medium"><span className="text-green-600 font-bold">VERDE</span> para CONFIRMAR</p>
              <p className="text-sm text-gray-500 font-medium"><span className="text-orange-500 font-bold">LARANJA</span> para CORRIGIR</p>
            </div>
          </div>
        </div>

        {/* Keyboard */}
        <div className="w-full md:w-80 bg-[#1a1a1a] p-6 rounded-lg shadow-inner flex flex-col justify-end">
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] active:bg-black text-white text-2xl md:text-3xl font-bold py-4 rounded shadow-sm border border-gray-700 transition-colors"
              >
                {num}
              </button>
            ))}
            <div className="col-start-2">
              <button
                onClick={() => handleNumberClick('0')}
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] active:bg-black text-white text-2xl md:text-3xl font-bold py-4 w-full rounded shadow-sm border border-gray-700 transition-colors"
              >
                0
              </button>
            </div>
          </div>

          <div className="flex gap-2 h-20 md:h-20 mt-2">
            <button 
              onClick={handleBlank}
              className="flex-1 bg-white hover:bg-gray-100 active:bg-gray-300 text-black font-bold text-sm md:text-base uppercase rounded-md shadow-sm pt-4 md:pt-6 border border-gray-300 transition-colors leading-none"
            >
              Branco
            </button>
            <button 
              onClick={handleCorrect}
              className="flex-1 bg-[#ff4b00] hover:bg-[#ff6a2b] active:bg-[#d63f00] text-black font-bold text-sm md:text-base uppercase rounded-md shadow-sm pt-4 md:pt-6 border border-[#cc3c00] transition-colors leading-none"
            >
              Corrige
            </button>
            <button 
              onClick={handleConfirmClick}
              className="flex-[1.2] bg-green-600 hover:bg-green-500 active:bg-green-700 text-black font-bold text-sm md:text-base uppercase rounded-md shadow-sm pt-4 md:pt-6 border border-green-800 transition-colors leading-none"
            >
              Confirma
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-sm md:text-base text-gray-500 text-center max-w-2xl px-4 font-medium leading-relaxed">
        Esta página é uma experiência informativa e interativa. Não se trata de uma urna oficial nem de uma votação real.
      </p>
    </motion.div>
  );
}
