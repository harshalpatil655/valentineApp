import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DAYS = [
  { path: '/rose-day', icon: '🌹', name: 'Rose', shortName: 'Rose' },
  { path: '/propose-day', icon: '💍', name: 'Propose', shortName: 'Propose' },
  { path: '/chocolate-day', icon: '🍫', name: 'Chocolate', shortName: 'Choco' },
  { path: '/teddy-day', icon: '🧸', name: 'Teddy', shortName: 'Teddy' },
  { path: '/promise-day', icon: '🤞', name: 'Promise', shortName: 'Promise' },
  { path: '/hug-day', icon: '🤗', name: 'Hug', shortName: 'Hug' },
  { path: '/kiss-day', icon: '💋', name: 'Kiss', shortName: 'Kiss' },
  { path: '/valentine-day', icon: '❤️', name: 'Valentine', shortName: 'V-Day' },
];

const TopNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div 
      className="w-full py-3 px-2 sm:px-4 overflow-x-auto"
      style={{
        background: 'linear-gradient(90deg, rgba(255, 241, 242, 0.95) 0%, rgba(255, 228, 230, 0.95) 50%, rgba(252, 231, 243, 0.95) 100%)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(244, 63, 94, 0.15)',
        boxShadow: '0 2px 8px rgba(244, 63, 94, 0.08)',
      }}
    >
      <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center min-w-max sm:min-w-0 mx-auto max-w-4xl">
        {DAYS.map((day) => {
          const isActive = location.pathname === day.path;
          
          return (
            <motion.button
              key={day.path}
              onClick={() => navigate(day.path)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex flex-col sm:flex-row items-center gap-1 sm:gap-2 
                px-3 sm:px-4 py-2 rounded-full transition-all
                ${isActive 
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg' 
                  : 'bg-white/60 hover:bg-white/90 text-rose-700 border border-rose-200'
                }
              `}
              style={{
                minWidth: isActive ? '80px' : '70px',
              }}
            >
              <span className="text-xl sm:text-2xl">{day.icon}</span>
              <span className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${isActive ? 'text-white' : ''}`}>
                {day.shortName}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default TopNavBar;
