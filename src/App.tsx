/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { VotingMachine } from './components/VotingMachine';
import { Transition } from './components/Transition';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { ProductCard } from './components/ProductCard';

type Stage = 'voting' | 'transition' | 'quiz' | 'result' | 'product';

export default function App() {
  const [stage, setStage] = useState<Stage>('voting');
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  // Scroll para o topo sempre que a fase (tela) mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const handleVotingConfirm = () => {
    setStage('transition');
  };

  const handleTransitionComplete = () => {
    setStage('quiz');
  };

  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setStage('result');
  };

  const handleQuizRestart = () => {
    setQuizAnswers([]);
    setStage('quiz');
  };

  const handleResultContinue = () => {
    setStage('product');
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] font-sans overflow-x-hidden">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#16a34a 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Header bar */}
      <div className="h-2 w-full bg-gradient-to-r from-green-500 via-green-700 to-green-900"></div>

      <main className="relative z-10 w-full min-h-screen">
        {stage === 'voting' && <VotingMachine onConfirm={handleVotingConfirm} />}
        {stage === 'transition' && <Transition onComplete={handleTransitionComplete} />}
        {stage === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
        {stage === 'result' && <Result answers={quizAnswers} onContinue={handleResultContinue} onRestart={handleQuizRestart} />}
        {stage === 'product' && <ProductCard />}
      </main>
    </div>
  );
}
