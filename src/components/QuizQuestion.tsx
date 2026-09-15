import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../data/questions';

interface QuizQuestionProps {
  question: Question;
  currentQuestionNumber: number;
  totalQuestions: number;
  isLastQuestion: boolean;
  onNext: (selectedAnswer: string) => void;
}

export function QuizQuestion({ question, currentQuestionNumber, totalQuestions, isLastQuestion, onNext }: QuizQuestionProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOptionIndex(null);
  }, [question.id]);

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const handleNext = () => {
    if (selectedOptionIndex !== null) {
      onNext(question.options[selectedOptionIndex]);
    }
  };

  const percentage = (currentQuestionNumber / totalQuestions) * 100;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
      >
        {/* Image Container - approx 45% on desktop */}
        <div className="w-full md:w-[45%] h-[350px] md:h-[550px] bg-[#f8f9fa] flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <img 
            src={question.image} 
            alt="Ilustração da pergunta" 
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Content Container - approx 55% on desktop */}
        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center">
          
          {/* Progress Indicator */}
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-green-800 uppercase tracking-wider">
                Pergunta {currentQuestionNumber} de {totalQuestions}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {Math.round(percentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 leading-tight">
            {question.question}
          </h2>

          <div className="flex flex-col gap-3 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              let buttonClass = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-300 text-lg ";
              
              if (isSelected) {
                buttonClass += "border-green-600 bg-green-50 text-green-700 shadow-sm transform scale-[1.01]";
              } else {
                buttonClass += "border-gray-200 text-gray-700 hover:border-green-200 hover:bg-green-50/50";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 transition-colors ${
                      isSelected ? 'border-green-600 bg-green-600' : 'border-gray-300'
                    }`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="mt-auto flex justify-end w-full">
            <button
              onClick={handleNext}
              disabled={selectedOptionIndex === null}
              className={`py-4 px-10 rounded-xl font-bold text-lg uppercase transition-all shadow-md w-full md:w-auto ${
                selectedOptionIndex !== null 
                  ? 'bg-green-700 text-white hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-1' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isLastQuestion ? 'Finalizar Quiz' : 'Próxima'}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
