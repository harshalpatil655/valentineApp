import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KissDay = () => {
  const [kisses, setKisses] = useState([]);

  const handleTap = (e) => {
    // For simplicity in this layout, we'll spawn kisses from the center avatar
    // but fly them towards where the user clicked, or just random up
    const id = Date.now();
    setKisses(prev => [...prev, { id }]);
    
    setTimeout(() => {
        setKisses(prev => prev.filter(k => k.id !== id));
    }, 2000);
  };

  return (
    <div 
      className="text-center w-full h-full flex flex-col items-center justify-center min-h-[50vh] px-4"
      onClick={handleTap}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2 font-serif">Happy Kiss Day! 💋</h1>
      <p className="text-gray-500 mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-widest">Tap to send kisses</p>
      
      <div className="relative">
        <motion.div 
          className="text-7xl sm:text-9xl mb-6 sm:mb-8 cursor-pointer"
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          😘
        </motion.div>

        <AnimatePresence>
          {kisses.map(kiss => (
            <motion.div
              key={kiss.id}
              initial={{ opacity: 0.8, scale: 0.5, x: 0, y: 0 }}
              animate={{ 
                 opacity: 0, 
                 y: -150 - Math.random() * 100, 
                 x: (Math.random() - 0.5) * 200,
                 rotate: Math.random() * 45 - 22.5
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 text-5xl pointer-events-none"
              style={{ marginLeft: '-20px', marginTop: '-40px' }} // Center adjustment
            >
              💋
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="bg-white/60 p-6 rounded-xl shadow-sm max-w-md border border-pink-200">
        <p className="text-lg text-gray-800 font-medium italic">
          "A kiss is a secret told to the mouth instead of the ear."
        </p>
        <p className="text-pink-700 mt-2 font-semibold">
          Sending you a million virtual kisses today!
        </p>
      </div>
    </div>
  );
};

export default KissDay;
