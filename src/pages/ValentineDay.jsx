import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const ValentineDay = () => {
  
  useEffect(() => {
    const end = Date.now() + 1500;
    const colors = ['#D32F2F', '#FF4081', '#FFD700'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="text-center w-full max-w-2xl px-4">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-red-600 mb-6 sm:mb-8 font-serif drop-shadow-sm"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Happy Valentine's Day!
      </motion.h1>
      
      <div className="glass-card p-6 sm:p-8 md:p-12 text-left relative overflow-hidden border-2 border-pink-100">
        <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
           <span className="text-9xl">❤️</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-800 font-serif mb-6 italic border-b pb-4 border-pink-200">
          My Dearest Love,
        </p>
        
        <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
          <p>
            As I look back on all the colorful days we've celebrated—from roses to promises, from chocolates to hugs—I realize that my immense love for you can't be contained in just a week.
          </p>
          <p>
            You are the melody to my heart's song, the peace in my chaotic world, and the reason behind my biggest smiles.
          </p>
          <p>
            I promise to stand by you, to cheer you on, and to love you more with every passing second.
          </p>
          <p className="font-bold text-pink-700">
            Will you continue this beautiful journey with me, not just today, but forever?
          </p>
        </div>

        <div className="mt-10 text-right">
          <p className="text-lg text-gray-600 font-serif">Yours Forever,</p>
          <p className="text-3xl font-script text-red-600 transform -rotate-3 mt-2 pr-4">
            Me ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValentineDay;
