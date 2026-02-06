import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Love is in the air...</h1>
      
      <motion.div 
        className="text-6xl mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ⏳
      </motion.div>

      <p className="text-xl text-gray-600 max-w-lg mx-auto">
        Valentine's Week starts on February 7th.<br/>
        Come back then for a special surprise!
      </p>
    </div>
  );
};

export default ComingSoon;
