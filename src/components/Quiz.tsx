import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizQuestion } from './QuizQuestion';

interface QuizProps {
  onComplete: (answers: string[]) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // Scroll para o topo sempre que a pergunta mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  const handleNext = (selectedAnswer: string) => {
    const newAnswers = [...answers, selectedAnswer];
    
    if (currentQuestionIndex < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 min-h-[90vh] flex flex-col justify-center">
      <h1 className="text-2xl md:text-3xl font-black text-green-950 mb-8 text-center uppercase tracking-tight drop-shadow-sm px-4">
        Você realmente é de direita? Faça o Quiz e descubra
      </h1>
      
      <div className="relative">
        <QuizQuestion 
          question={questions[currentQuestionIndex]}
          currentQuestionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
          onNext={handleNext} 
        />
      </div>
    </div>
  );
}
