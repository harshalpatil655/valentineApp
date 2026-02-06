import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const DAYS = [
  { id: 1, name: 'Rose Day', path: '/rose-day', icon: '🌹', date: 'Feb 7' },
  { id: 2, name: 'Propose Day', path: '/propose-day', icon: '💍', date: 'Feb 8' },
  { id: 3, name: 'Chocolate Day', path: '/chocolate-day', icon: '🍫', date: 'Feb 9' },
  { id: 4, name: 'Teddy Day', path: '/teddy-day', icon: '🧸', date: 'Feb 10' },
  { id: 5, name: 'Promise Day', path: '/promise-day', icon: '🤞', date: 'Feb 11' },
  { id: 6, name: 'Hug Day', path: '/hug-day', icon: '🤗', date: 'Feb 12' },
  { id: 7, name: 'Kiss Day', path: '/kiss-day', icon: '💋', date: 'Feb 13' },
  { id: 8, name: 'Valentine Day', path: '/valentine-day', icon: '❤️', date: 'Feb 14' },
];

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-4"
        >
          <Sparkles size={48} className="text-rose-500" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-3">
          Happy Valentine Week!
        </h1>
        
        <p className="text-lg sm:text-xl text-rose-700 mb-2" style={{ fontFamily: 'var(--font-script)' }}>
          Our Journey of Love
        </p>
        
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          8 beautiful days, each filled with love, surprises, and memories to cherish forever 💕
        </p>
      </motion.div>

      {/* Timeline - Horizontal Scrollable */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="romantic-card w-full mb-8 overflow-hidden"
      >
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar px-2 snap-x">
          {DAYS.map((day, index) => (
            <motion.button
              key={day.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(day.path)}
              className="flex-shrink-0 flex flex-row items-center justify-center gap-3 p-3 w-40 sm:w-48 rounded-2xl bg-white/60 hover:bg-white/90 border-2 border-rose-100 hover:border-rose-300 transition-all cursor-pointer group snap-center"
            >
              <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                {day.icon}
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="font-semibold text-rose-800 text-sm truncate group-hover:text-rose-600">
                  {day.name}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">{day.date}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <button
          onClick={() => navigate('/rose-day')}
          className="btn-primary flex items-center gap-2"
        >
          <Heart size={20} fill="white" />
          <span>Let's Begin Our Journey</span>
        </button>
        
        <p className="text-xs text-gray-500">
          Start with Rose Day or choose any day above
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 text-6xl opacity-10 animate-pulse pointer-events-none">
        💝
      </div>
      <div className="fixed bottom-10 right-10 text-6xl opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}>
        💖
      </div>
      </div>
    </div>
  );
};

export default Welcome;
