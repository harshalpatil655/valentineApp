import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

const CHOCOLATES = [
  { id: 'truffle', emoji: '🌑', name: 'Dark Truffle', color: 'bg-stone-800' },
  { id: 'milk', emoji: '🟤', name: 'Milk Cube', color: 'bg-amber-700' },
  { id: 'white', emoji: '⚪', name: 'White Delight', color: 'bg-yellow-100' },
  { id: 'heart', emoji: '🤎', name: 'Cocoa Heart', color: 'bg-rose-900' },
  { id: 'gold', emoji: '🪙', name: 'Gold Coin', color: 'bg-yellow-500' },
  { id: 'cherry', emoji: '🍒', name: 'Cherry Dip', color: 'bg-red-800' },
];

const ChocolateDay = () => {
  const [box, setBox] = useState([]);
  const [isFull, setIsFull] = useState(false);

  // Add chocolate to box
  const addToBox = (choco) => {
    if (box.length < 6) {
      const newBox = [...box, { ...choco, instanceId: Date.now() }];
      setBox(newBox);
      
      // Sweet Pop Effect
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#8B4513', '#D2691E', '#FFF8DC'], // Chocolate colors
        ticks: 50,
        scalar: 0.8
      });

      if (newBox.length === 6) {
        setIsFull(true);
        setTimeout(fireCompletionConfetti, 500);
      }
    }
  };

  // Completion Celebration
  const fireCompletionConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FFA500'] // Gold colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FFA500']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const resetBox = () => {
    setBox([]);
    setIsFull(false);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 w-full flex flex-col items-center justify-center overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 -z-20" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none -z-10">
         {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ y: -50, x: Math.random() * 100 + 'vw' }}
              animate={{ y: '100vh', rotate: 360 }}
              transition={{ duration: Math.random() * 5 + 10, repeat: Infinity, ease: "linear" }}
            >
              🍫
            </motion.div>
         ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 font-serif mb-2">Curate Your Sweet Box</h1>
        <p className="text-amber-800/70 font-medium">Pick your favorites to fill the heart! ({box.length}/6)</p>
      </motion.div>

      {/* The Chocolate Box */}
      <div className="relative mb-12">
        <motion.div 
          layout
          className={`
             w-72 h-72 sm:w-80 sm:h-80 bg-white/40 backdrop-blur-md border-4 border-amber-200/50 rounded-[3rem] 
             grid grid-cols-2 gap-4 p-6 shadow-2xl relative transition-all duration-500
             ${isFull ? 'shadow-amber-500/30 scale-105 bg-amber-50/50' : ''}
          `}
        >
          {/* Box Contents */}
          <AnimatePresence>
            {box.map((item, index) => (
              <motion.div
                key={item.instanceId}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                className={`
                   relative flex items-center justify-center rounded-2xl shadow-inner
                   ${item.color} bg-opacity-20
                `}
              >
                <span className="text-5xl filter drop-shadow-lg">{item.emoji}</span>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md"
                >
                  <Sparkles size={12} className="text-amber-500" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Empty Slots */}
          {[...Array(6 - box.length)].map((_, i) => (
             <div key={`empty-${i}`} className="border-2 border-dashed border-amber-900/10 rounded-2xl flex items-center justify-center">
               <span className="text-amber-900/10 text-2xl font-bold">+</span>
             </div>
          ))}
        </motion.div>

        {/* Ribbon Overlay (Visible when full) */}
        {isFull && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
             <div className="bg-red-600 text-white px-6 py-2 rotate-12 font-script text-3xl shadow-xl border-2 border-white/50">
               Sent with Love! 💝
             </div>
          </motion.div>
        )}
      </div>

      {/* Selection Tray */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4 max-w-2xl px-4"
        animate={isFull ? { opacity: 0.5, pointerEvents: 'none' } : { opacity: 1 }}
      >
        {CHOCOLATES.map((choco) => (
          <motion.button
            key={choco.id}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToBox(choco)}
            className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 transition-colors"
          >
            <span className="text-3xl mb-1">{choco.emoji}</span>
            <span className="text-xs font-bold text-amber-900">{choco.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Reset Button (Only when not empty) */}
      {box.length > 0 && !isFull && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={resetBox}
          className="mt-8 text-amber-700/60 font-bold hover:text-amber-900 underline text-sm"
        >
          Start Over
        </motion.button>
      )}

      {isFull && (
         <motion.button
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           onClick={() => { resetBox(); setIsFull(false); }}
           className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
         >
           Pack Another Box? 🎁
         </motion.button>
      )}

    </div>
  );
};

export default ChocolateDay;
