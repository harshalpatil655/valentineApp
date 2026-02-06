import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
  { path: '/', label: 'Landing' },
  { path: '/rose-day', label: '🌹 Rose' },
  { path: '/propose-day', label: '💍 Propose' },
  { path: '/chocolate-day', label: '🍫 Choco' },
  { path: '/teddy-day', label: '🧸 Teddy' },
  { path: '/promise-day', label: '🤞 Promise' },
  { path: '/hug-day', label: '🤗 Hug' },
  { path: '/kiss-day', label: '💋 Kiss' },
  { path: '/valentine-day', label: '❤️ Valentine' },
  { path: '/final-valentine', label: '🎉 Celebration' },
];

const DevNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 group"
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, #ff6b9d 0%, #c06c84 100%)'
            : 'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #ffa8c5 100%)',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: isOpen 
            ? '0 8px 24px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 107, 157, 0.3)'
            : '0 4px 12px rgba(255, 107, 157, 0.3)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 157, 0.5), 0 0 30px rgba(255, 107, 157, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen ? 'scale(1.05)' : 'scale(1)';
          e.currentTarget.style.boxShadow = isOpen 
            ? '0 8px 24px rgba(255, 107, 157, 0.4), 0 0 20px rgba(255, 107, 157, 0.3)'
            : '0 4px 12px rgba(255, 107, 157, 0.3)';
        }}
      >
        <span style={{
          fontSize: '24px',
          color: 'white',
          transition: 'transform 0.3s ease',
          display: 'inline-block',
          animation: isOpen ? 'none' : 'heartbeat 1.5s ease-in-out infinite',
        }}>
          {isOpen ? '✕' : '❤️'}
        </span>
      </button>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.1); }
          20% { transform: scale(1); }
          30% { transform: scale(1.1); }
          40% { transform: scale(1); }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              background: 'linear-gradient(160deg, rgba(255, 241, 242, 0.98) 0%, rgba(255, 228, 230, 0.98) 50%, rgba(252, 231, 243, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '-8px 0 32px rgba(190, 24, 93, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
            }}
            className="fixed top-0 right-0 h-full w-72 z-40 p-8 flex flex-col gap-1"
          >
            {/* Header */}
            <div className="mb-6 pb-4 border-b-2 border-gradient" style={{
              borderImage: 'linear-gradient(90deg, rgba(236, 72, 153, 0.3), rgba(190, 24, 93, 0.6)) 1'
            }}>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent mb-1" style={{
                fontFamily: 'var(--font-heading)'
              }}>
                Jump to Day
              </h3>
              <p className="text-xs text-pink-400 uppercase tracking-widest">Valentine's Week</p>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto space-y-1.5">
              {pages.map(page => (
                <Link
                  key={page.path}
                  to={page.path}
                  onClick={() => setIsOpen(false)}
                  className="group relative block"
                >
                  <div
                    className={`
                      relative px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
                      ${location.pathname === page.path 
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105' 
                        : 'text-gray-700 hover:text-pink-700'
                      }
                    `}
                    style={{
                      boxShadow: location.pathname === page.path 
                        ? '0 4px 15px rgba(236, 72, 153, 0.4)'
                        : 'none'
                    }}
                  >
                    {/* Background glow for non-active items on hover */}
                    {location.pathname !== page.path && (
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ zIndex: -1 }}
                      />
                    )}
                    
                    {/* Content */}
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl transition-transform duration-300 ${
                        location.pathname === page.path ? 'scale-110' : 'group-hover:scale-125'
                      }`}>
                        {page.label.split(' ')[0]}
                      </span>
                      <span className="flex-1">{page.label.split(' ').slice(1).join(' ')}</span>
                      {location.pathname === page.path && (
                        <span className="text-white/80">✓</span>
                      )}
                    </div>

                    {/* Active indicator */}
                    {location.pathname === page.path && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-white rounded-r-full" 
                        style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-pink-200/50 text-center">
              <p className="text-xs text-pink-400/70 uppercase tracking-wider font-medium">
                💕 Made with Love
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DevNav;
