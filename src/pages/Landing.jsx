import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

const FloatingHeart = ({ delay = 0, left }) => (
  <motion.div
    initial={{ y: '100vh', opacity: 0.8, scale: 1 }}
    animate={{ 
      y: '-100vh', 
      opacity: [0.8, 0.5, 0],
      rotate: 360,
      scale: [1, 0.7, 0.4]
    }}
    transition={{ 
      duration: 8 + Math.random() * 4, 
      delay,
      ease: 'linear',
      repeat: Infinity
    }}
    style={{ 
      position: 'fixed',
      left: `${left}%`,
      fontSize: `${1.5 + Math.random()}rem`,
      pointerEvents: 'none',
      zIndex: 0
    }}
  >
    💕
  </motion.div>
);

const Landing = () => {
  const navigate = useNavigate();
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const [showNoTooltip, setShowNoTooltip] = useState('');

  useEffect(()=>{
    console.log("noBtnPos:::::",noClickCount);
    
  },[noClickCount])

  const moveNoButton = () => {
    setNoClickCount(prev => prev + 1);
    
    // Different responses based on attempts
    if (noClickCount === 0) {
      setShowNoTooltip("Are you sure? 🥺");
    } else if (noClickCount === 1) {
      setShowNoTooltip("Think again... 💕");
    } else {
      setShowNoTooltip("Can't catch me! 😘");
    }
    
    // More erratic movement with each attempt
    const multiplier = 50 + (noClickCount * 30);
    const x = (Math.random() - 0.5) * multiplier;
    const y = (Math.random() - 0.5) * multiplier;
    setNoBtnPos({ x, y });
    
    // Clear tooltip after a moment
    setTimeout(() => setShowNoTooltip(''), 2000);
  };

  const handleYesClick = () => {
    // Massive confetti celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#ff6b9d', '#fda4af', '#FFD700']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#ff6b9d', '#fda4af', '#FFD700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    
    navigate('/welcome');
  };

  return (
    <>
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <FloatingHeart 
            key={i} 
            delay={i * 1} 
            left={10 + i * 12}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg"
        >
          {/* Animated Heart Icon */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <Heart 
                size={100} 
                fill="rgb(244, 63, 94)" 
                color="rgb(244, 63, 94)" 
                className="drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-rose-500 blur-3xl opacity-30 scale-150 rounded-full"></div>
            </div>
          </motion.div>

          {/* Main Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
              Will you be my
            </h1>
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl text-rose-600 mb-4" 
              style={{ fontFamily: 'var(--font-script)' }}
            >
              Valentine?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              I have a week full of surprises just for you... 💝
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[140px]"
          >
            {/* YES Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              className="btn-primary relative z-20 flex items-center gap-2"
              animate={{ 
                boxShadow: [
                  '0 4px 16px rgba(244, 63, 94, 0.3)',
                  '0 8px 24px rgba(244, 63, 94, 0.5)',
                  '0 4px 16px rgba(244, 63, 94, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={20} fill="white" />
              <span>YES!</span>
              <Sparkles size={16} />
            </motion.button>

            {/* NO Button */}
            <div className="relative">
              <AnimatePresence>
                {showNoTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -45 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-rose-200 whitespace-nowrap text-sm font-medium text-rose-600"
                  >
                    {showNoTooltip}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                animate={noBtnPos}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="btn-secondary relative z-10 min-w-[120px]"
                whileHover={{ scale: 1.02 }}
              >
                No
              </motion.button>
            </div>
          </motion.div>

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xs text-gray-400 mt-8 italic"
          >
            (Psst... there's only one right answer 😉)
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="fixed top-10 right-10 text-6xl opacity-20 pointer-events-none"
      >
        💝
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="fixed bottom-10 left-10 text-6xl opacity-20 pointer-events-none"
      >
        💖
      </motion.div>
    </>
  );
};

export default Landing;
