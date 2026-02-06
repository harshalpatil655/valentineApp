import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PromiseDay = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="text-center w-full max-w-lg px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 sm:mb-6 font-serif">Happy Promise Day! 🤞</h1>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl border-4 border-double border-blue-200 mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500"
      >
        <div className="border-b-2 border-gray-200 pb-4 mb-4">
          <h2 className="text-2xl font-serif text-gray-800 tracking-wider uppercase">Love Contract</h2>
          <p className="text-xs text-gray-400 mt-1">OFFICIAL DOCUMENT OF ETERNAL AFFECTION</p>
        </div>

        <ul className="text-left space-y-4 text-gray-700 mb-8 font-medium">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✨</span>
            <span>I promise to be your biggest fan and your safe place.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✨</span>
            <span>I promise to listen to you, even when you don't speak.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✨</span>
            <span>I promise to love you a little more every single day.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">✨</span>
            <span>I promise that you will never have to face the world alone.</span>
          </li>
        </ul>

        {!signed ? (
          <button 
            onClick={() => setSigned(true)}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #6366f1 100%)',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.875rem 2rem',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.35)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.45), 0 0 25px rgba(99, 102, 241, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.35)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Sign this Promise ✍️
            </span>
          </button>
        ) : (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="text-center"
          >
            <p className="text-green-600 font-bold text-xl font-script text-3xl transform -rotate-6">
              Signed with Love ❤️
            </p>
            <p className="text-xs text-gray-400 mt-2">Timestamp: {new Date().toLocaleDateString()}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PromiseDay;
