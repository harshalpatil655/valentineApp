import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, ChevronRight } from 'lucide-react';

const STORY_STEPS = [
  {
    id: 1,
    text: "Hey... There's something I've been wanting to tell you...",
    sub: "(Tap to continue)",
    bg: "from-rose-50 to-pink-100"
  },
  {
    id: 2,
    text: "Every moment with you feels like a beautiful dream come true.",
    sub: "You make my world brighter ✨",
    bg: "from-pink-100 to-rose-200"
  },
  {
    id: 3,
    text: "So today, I want to ask you something very special...",
    sub: "Are you ready?",
    bg: "from-rose-200 to-rose-300"
  },
  {
    id: 4,
    type: "proposal", // The Interaction Phase
    bg: "from-rose-300 to-rose-500"
  }
];

const ProposeDay = () => {
  const [step, setStep] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  // Handle step progression
  const nextStep = () => {
    if (step < STORY_STEPS.length - 1) {
      setStep(step + 1);
    }
  };

  const handleAccept = () => {
    setIsAccepted(true);
    fireProposalConfetti();
  };

  const fireProposalConfetti = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 bg-gradient-to-br ${STORY_STEPS[step].bg}`}>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ y: '100vh', x: Math.random() * 100 + 'vw', scale: Math.random() * 0.5 + 0.5 }}
            animate={{ y: '-10vh' }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'linear' }}
          >
            <Heart size={Math.random() * 30 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step < 3 ? (
          // STORYTELLING PHASE
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center px-6 max-w-2xl cursor-pointer"
            onClick={nextStep}
          >
            <motion.div className="mb-6 inline-block">
               <Sparkles className="text-rose-600/60 w-12 h-12 mx-auto animate-pulse" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-rose-900 mb-4 leading-tight font-serif drop-shadow-sm">
              {STORY_STEPS[step].text}
            </h1>
            
            <p className="text-rose-800/80 text-lg sm:text-xl font-medium animate-bounce mt-8">
              {STORY_STEPS[step].sub}
            </p>

            <motion.div 
               className="mt-12 mx-auto w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
            >
               <ChevronRight className="text-rose-800" />
            </motion.div>
          </motion.div>
        ) : (
          // PROPOSAL PHASE - DIRECT REVEAL (No Box)
          <motion.div
             key="proposal"
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative z-10 text-center w-full max-w-lg px-4"
          >
             <div className="mb-8 h-24 sm:h-32 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isAccepted ? (
                     <motion.h2 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1.5, rotate: [0, -5, 5, 0] }}
                       className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg font-serif"
                     >
                       She said YES! 💖💍
                     </motion.h2>
                  ) : (
                     <motion.h2 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md font-serif"
                     >
                       Be My Forever? ❤️
                     </motion.h2>
                  )}
                </AnimatePresence>
             </div>

             {/* Ring Display - No Box */}
             <motion.div 
                className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 mb-8"
                animate={
                  isAccepted 
                    ? { y: -20, scale: 1.2, rotate: 360, filter: "drop-shadow(0 0 50px gold)" } 
                    : { y: 0, scale: 1, rotate: 0 }
                }
                transition={{ duration: 2, ease: "easeInOut" }}
             >
               <div className="text-[10rem] sm:text-[12rem] filter drop-shadow-2xl">
                 💍
               </div>
             </motion.div>

             {!isAccepted && (
               <motion.button
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-white text-rose-600 rounded-full font-bold text-xl shadow-xl border-4 border-rose-200"
                 onClick={handleAccept}
               >
                 Yes, I will! 💖
               </motion.button>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProposeDay;
