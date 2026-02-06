import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

const FinalValentine = () => {
  const [heartsFloating, setHeartsFloating] = useState([]);

  useEffect(() => {
    // Confetti celebration on page load
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D32F2F', '#FF4081', '#FFD700', '#FF69B4']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D32F2F', '#FF4081', '#FFD700', '#FF69B4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Create floating hearts
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
      };
      setHeartsFloating(prev => [...prev.slice(-8), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {heartsFloating.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: '100vh', opacity: 0.8 }}
            animate={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 6 + Math.random() * 2, delay: heart.delay, ease: 'linear' }}
            style={{ 
              position: 'absolute',
              left: `${heart.left}%`,
              fontSize: '2rem',
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Animated Hearts Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <Heart 
              size={80} 
              fill="#EC4899" 
              color="#EC4899" 
              className="drop-shadow-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles size={40} color="#FFD700" className="absolute" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #EC4899, #BE185D, #9D174D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'var(--font-heading)',
          }}
        >
          Happy Valentine's Day!
        </motion.h1>

        {/* Romantic Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass-card p-6 md:p-10 mb-8"
        >
          <p className="text-5xl md:text-7xl mb-6 script-font text-rose-600">
            You said YES!
          </p>
          
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p className="font-medium">
              🌹 We started with roses and promises...
            </p>
            <p className="font-medium">
              💝 We shared chocolates, hugs, and kisses...
            </p>
            <p className="font-bold text-xl text-pink-700 mt-6">
              And now, here we are – celebrating our love!
            </p>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200"
          >
            <p className="text-2xl md:text-3xl font-script text-rose-700 italic">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </motion.div>
        </motion.div>

        {/* Emoji Heart Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-4 gap-3 mb-8 max-w-xs mx-auto"
        >
          {['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
              className="text-4xl md:text-5xl"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Forever starts today! 💫
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Thank you for being my Valentine ❤️
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
        💝
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        💖
      </div>
    </div>
  );
};

export default FinalValentine;
