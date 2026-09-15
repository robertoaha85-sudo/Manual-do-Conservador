import { motion } from 'motion/react';

interface TransitionProps {
  onComplete: () => void;
}

export function Transition({ onComplete }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[90vh] w-full px-4"
    >
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-16 text-center border-t-8 border-green-700 relative overflow-hidden">
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-green-500 opacity-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-green-900 opacity-10 blur-2xl"></div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-green-950 leading-tight mb-12 tracking-tight">
            Você realmente é de direita? <br className="hidden md:block"/>
            <span className="text-green-600 block mt-2">Faça o Quiz e descubra</span>
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onComplete}
            className="w-full px-6 md:px-16 py-6 md:py-6 bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl rounded-2xl shadow-xl transition-colors duration-300 uppercase tracking-wider border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
          >
            FAÇA O QUIZ AGORA
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
