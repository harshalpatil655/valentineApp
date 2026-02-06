import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HugDay = () => {
  const [hugStrength, setHugStrength] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    let interval;
    if (isHolding) {
      interval = setInterval(() => {
        setHugStrength(prev => Math.min(prev + 2, 100)); // Fill up in ~2.5s
      }, 50);
    } else {
      // Create a slow decay if desired, or just stop
      if (hugStrength > 0 && hugStrength < 100) {
         setHugStrength(prev => Math.max(prev - 5, 0));
      }
    }
    return () => clearInterval(interval);
  }, [isHolding, hugStrength]);

  return (
    <div className="text-center w-full max-w-lg px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4 sm:mb-6 font-serif">Happy Hug Day! 🤗</h1>

      <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>
        
        {/* Expanding Emoji */}
        <motion.div 
          className="text-7xl sm:text-9xl z-10"
          animate={{ scale: 1 + (hugStrength / 100) }}
        >
          🤗
        </motion.div>

        {/* Progress Ring? Simplified as a bar below for now */}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6 mb-4 sm:mb-6 overflow-hidden border border-gray-300">
        <motion.div 
          className="bg-orange-500 h-full"
          style={{ width: `${hugStrength}%` }}
        />
      </div>

      <button
        onMouseDown={() => setIsHolding(true)}
        onMouseUp={() => setIsHolding(false)}
        onMouseLeave={() => setIsHolding(false)}
        onTouchStart={(e) => { e.preventDefault(); setIsHolding(true); }}
        onTouchEnd={() => setIsHolding(false)}
        style={{
          background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
          border: 'none',
          borderRadius: '9999px',
          padding: '1rem 2.5rem',
          color: 'white',
          fontSize: '1.125rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: isHolding 
            ? '0 12px 35px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.4)' 
            : '0 8px 20px rgba(249, 115, 22, 0.35)',
          transform: isHolding ? 'scale(0.95)' : 'scale(1)',
          transition: 'all 0.2s ease',
          animation: isHolding ? 'pulse 0.8s ease-in-out infinite' : 'none',
        }}
        className="select-none mb-8"
        onMouseEnter={(e) => {
          if (!isHolding) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(249, 115, 22, 0.45), 0 0 30px rgba(249, 115, 22, 0.3)';
          }
        }}
        onMouseOver={(e) => {
          if (!isHolding) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.35)';
          }
        }}
      >
        Hold to Send a Hug! 🫂
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hugStrength === 100 ? 1 : 0 }}
        className="bg-white/70 p-4 rounded-xl shadow-lg"
      >
        <p className="text-xl font-bold text-orange-800">Hug Sent Successfully! 🎉</p>
        <p className="text-gray-700 mt-2">
          Wrapped up in my arms is where you belong.<br/>
          Sending you the tightest, warmest squeeze!
        </p>
      </motion.div>
    </div>
  );
};

export default HugDay;
