import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';

const RoseDay = () => {
  const [playlist, setPlaylist] = useState([]);

  const addRose = (color) => {
    // 5-second slow flood
    const duration = 5000;
    const end = Date.now() + duration;
    
    // Choose colors based on selection
    const floodColors = color === 'red' ? ['#ff0000', '#dc2626'] 
                      : color === 'yellow' ? ['#ffd700', '#fbbf24'] 
                      : ['#ff69b4', '#ec4899'];

    const roseEmoji = confetti.shapeFromText({ text: '🌹', scalar: 2 });

    (function frame() {
      // Launch from random positions at top
      confetti({
        particleCount: 5,
        angle: 270, // Downwards
        spread: 180,
        origin: { x: Math.random(), y: -0.1 }, // Start above screen
        colors: floodColors,
        shapes: [roseEmoji],
        gravity: 0.5, // Slow fall
        scalar: 2,
        drift: (Math.random() - 0.5) * 2, // Drift left/right
        ticks: 200 // Last longer
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setPlaylist([
      ...playlist,
      {
        id: Date.now(),
        color,
        x: Math.random() * 40 - 20,
        angle: Math.random() * 30 - 15,
      },
    ]);
  };

  return (
    <div className="text-center w-full max-w-lg px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-3 sm:mb-4 drop-shadow-sm font-serif">
        Happy Rose Day! 🌹
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 italic px-2">
        "A rose speaks of love silently, in a language known only to the heart."
      </p>

      <p className="text-sm sm:text-md text-pink-700 mb-4">
        Make a bouquet for us! Click the roses below to add them.
      </p>

      {/* Bouquet Display Area */}
      <div className="relative h-56 sm:h-64 w-full bg-white/40 rounded-xl border-2 border-pink-200 mb-6 sm:mb-8 flex items-end justify-center overflow-hidden shadow-inner">
        <div
          className="absolute bottom-0 w-20 sm:w-24 h-28 sm:h-32 bg-stone-300 rounded-b-lg border-x-4 border-stone-400 z-10 opacity-90"
          style={{ clipPath: "polygon(10% 0, 90% 0, 80% 100%, 20% 100%)" }}
        ></div>
        {playlist.length === 0 && (
          <span className="absolute top-1/2 text-gray-400">
            Your bouquet is empty...
          </span>
        )}

        {playlist.map((rose, i) => (
          <motion.div
            key={rose.id}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-12 text-5xl z-0 origin-bottom"
            style={{
              left: `calc(50% + ${rose.x}px)`,
              transform: `translateX(-50%) rotate(${rose.angle}deg)`,
              filter: `hue-rotate(${
                rose.color === "red" ? 0 : rose.color === "pink" ? 90 : 200
              }deg)`,
            }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <motion.button
          whileTap={{ scale: 0.85, rotate: -15 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          onClick={() => addRose("red")}
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #be123c 100%)',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4), 0 0 25px rgba(239, 68, 68, 0.2)',
            transition: 'all 0.3s ease',
          }}
          className="w-14 h-14 sm:w-[70px] sm:h-[70px] hover:shadow-2xl"
        >
          <span className="text-4xl sm:text-5xl">🌹</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.85, rotate: -15 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          onClick={() => addRose("pink")}
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(236, 72, 153, 0.4), 0 0 25px rgba(236, 72, 153, 0.2)',
            transition: 'all 0.3s ease',
          }}
          className="w-14 h-14 sm:w-[70px] sm:h-[70px] hover:shadow-2xl"
        >
          <span className="text-4xl sm:text-5xl filter hue-rotate-15">🌹</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.85, rotate: -15 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          onClick={() => addRose("yellow")}
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(251, 191, 36, 0.4), 0 0 25px rgba(251, 191, 36, 0.2)',
            transition: 'all 0.3s ease',
          }}
          className="w-14 h-14 sm:w-[70px] sm:h-[70px] hover:shadow-2xl"
        >
          <span className="text-4xl sm:text-5xl">🌹</span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white/60 p-6 rounded-lg shadow-sm"
      >
        <p className="text-gray-800 leading-relaxed font-medium">
          Just like these roses, my love for you comes in many shades.
          <br />
          Red for passion, Pink for admiration, and Yellow for our friendship.
          <br />
          You are the most beautiful flower in my garden of life.
        </p>
      </motion.div>
    </div>
  );
};

export default RoseDay;
