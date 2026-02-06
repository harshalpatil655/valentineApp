import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const TeddyDay = () => {
  const [hugCount, setHugCount] = useState(0);

  const handleHug = () => {
    setHugCount(c => c + 1);
    
    // Teddy flood!
    const bear = confetti.shapeFromText({ text: '🧸', scalar: 2 });
    const heart = confetti.shapeFromText({ text: '🤗', scalar: 2 });
    
    confetti({
      particleCount: 15,
      spread: 60,
      origin: { y: 0.6 },
      shapes: [bear, heart],
      gravity: 0.7,
      ticks: 50,
      colors: ['#FFA500', '#FFC0CB']
    });
  };

  return (
    <div className="text-center w-full max-w-lg px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-3 sm:mb-4 font-serif">Happy Teddy Day! 🧸</h1>
      
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">Tap/Click the teddy to give it a warm hug!</p>

      <motion.div 
        className="text-7xl sm:text-9xl mb-6 sm:mb-8 select-none cursor-pointer inline-block"
        whileTap={{ scale: 0.8, rotate: [0, -10, 10, 0] }}
        onClick={handleHug}
      >
        🧸
      </motion.div>

      <p className="text-2xl font-bold text-pink-600 mb-8">
        Hugs Given: {hugCount}
      </p>

      <motion.div className="bg-white/60 p-6 rounded-2xl shadow-md border-2 border-amber-100">
        <h3 className="text-xl font-semibold text-amber-900 mb-3">Why a Teddy?</h3>
        <p className="text-gray-700 leading-relaxed">
          Because sometimes I can't be there to hold you,<br/>
          but I want you to feel my warmth.<br/>
          Sending you this virtual teddy to cuddle with whenever you miss me.
        </p>
      </motion.div>
    </div>
  );
};

export default TeddyDay;
