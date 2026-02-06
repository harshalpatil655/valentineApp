import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const DAYS = [
  { path: '/welcome', icon: '🏠', name: 'Dashboard', shortName: 'Home' },
  { path: '/rose-day', icon: '🌹', name: 'Rose', shortName: 'Rose' },
  { path: '/propose-day', icon: '💍', name: 'Propose', shortName: 'Propose' },
  { path: '/chocolate-day', icon: '🍫', name: 'Chocolate', shortName: 'Choco' },
  { path: '/teddy-day', icon: '🧸', name: 'Teddy', shortName: 'Teddy' },
  { path: '/promise-day', icon: '🤞', name: 'Promise', shortName: 'Promise' },
  { path: '/hug-day', icon: '🤗', name: 'Hug', shortName: 'Hug' },
  { path: '/kiss-day', icon: '💋', name: 'Kiss', shortName: 'Kiss' },
  { path: '/valentine-day', icon: '❤️', name: 'Valentine', shortName: 'V-Day' },
];

const LoveLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    {/* Outer Glow Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-2 border-dashed border-rose-300 rounded-full opacity-50"
    />
    
    {/* Pulsing Core */}
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="relative z-10"
    >
       <Heart className="w-6 h-6 text-rose-600 fill-rose-600 drop-shadow-sm" />
    </motion.div>

    {/* Tiny Satellite Heart */}
    <motion.div
       animate={{ rotate: -360 }}
       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
       className="absolute inset-0"
    >
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
       </div>
    </motion.div>
  </div>
);

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="h-16 w-full" /> {/* Spacer */}

      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100 flex items-center justify-between px-4 sm:px-8 transition-all duration-300">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-5 cursor-pointer hover:opacity-80 transition-opacity mr-4 flex-shrink-0" 
          onClick={() => navigate('/welcome')}
        >
          <LoveLogo />
          <span className="hidden sm:block ml-1 font-bold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent font-serif text-xl tracking-wide">
            Valentine's Week
          </span>
        </div>

        {/* Horizontal Navigation - Simple Text & Icons */}
        <div className="flex-1 overflow-x-auto no-scrollbar mask-gradient-right flex items-center justify-end">
          <div className="flex items-center gap-6 min-w-max px-2">
             {DAYS.map((day) => {
               const isActive = location.pathname === day.path;
               return (
                 <motion.button
                   key={day.path}
                   onClick={() => navigate(day.path)}
                   whileHover={{ scale: 1.1, color: '#e11d48' }}
                   whileTap={{ scale: 0.95 }}
                   style={{ background: 'transparent', border: 'none', padding: 0, marginTop: '5px' }} // Force reset
                   className={`
                     group relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300
                     outline-none cursor-pointer select-none
                     ${isActive ? 'text-rose-600' : 'text-slate-400 hover:text-rose-500'}
                   `}
                 >
                   {/* Hover Background (Invisible normally, visible on hover) */}
                   <div className={`absolute inset-0 bg-rose-50 rounded-xl transition-opacity duration-300 -z-10 ${isActive ? 'opacity-100 bg-rose-50/50' : 'opacity-0 group-hover:opacity-100'}`} />

                   <span className={`text-2xl transition-transform duration-300 z-10 ${isActive ? 'scale-110 drop-shadow-sm rotate-3' : 'group-hover:scale-110 group-hover:-rotate-3'}`}>
                     {day.icon}
                   </span>
                   <span className={`text-[10px] uppercase tracking-widest z-10 ${isActive ? 'font-black' : 'font-semibold opacity-70 group-hover:opacity-100'}`}>
                     {day.shortName}
                   </span>
                   
                   {/* Minimal Active Dot */}
                   {isActive && (
                     <motion.div 
                       layoutId="activeDot"
                       className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1 shadow-sm"
                     />
                   )}
                 </motion.button>
               );
             })}
          </div>
        </div>
      </header>
    </>
  );
}
