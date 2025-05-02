import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ themeMode = 'dark' }) => {
  // Colors based on the theme
  const bgColor = themeMode === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = themeMode === 'dark' ? 'text-gray-300' : 'text-gray-700';
  
  // Logo animation variants
  const logoVariants = {
    initial: { opacity: 0, scale: 0.5, y: -20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Dots animation variants
  const dotsContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-8, 0, -8],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  // Progress circle animation
  const progressVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${bgColor} backdrop-blur-sm`}>
      {/* Logo animation */}
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        className="mb-10 relative"
      >
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
          SN
        </div>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-teal-500 to-emerald-400/0"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 0], 
            opacity: [0, 1, 0],
            transition: { 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>
      
      {/* Main spinner */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Outer rotating ring */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke={themeMode === 'dark' ? '#10b981' : '#047857'} // emerald-500 or emerald-700
            strokeWidth="4"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0.2, rotate: 0, opacity: 0.4 }}
            animate={{ 
              pathLength: [0.2, 0.4, 0.2],
              rotate: 360,
              opacity: [0.4, 0.8, 0.4],
              transition: { 
                pathLength: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
          />
        </svg>
        
        {/* Inner progress circle */}
        <svg className="absolute w-3/4 h-3/4" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke={themeMode === 'dark' ? '#14b8a6' : '#0d9488'} // teal-500 or teal-600
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            variants={progressVariants}
            initial="initial"
            animate="animate"
            style={{ rotate: -90 }}
          />
        </svg>
        
        {/* Center pulsing dot */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated dots */}
      <motion.div
        className="flex space-x-2 mt-8"
        variants={dotsContainerVariants}
        initial="initial"
        animate="animate"
      >
        {[0, 1, 2].map(index => (
          <motion.div 
            key={index}
            variants={dotVariants}
            className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600"
          />
        ))}
      </motion.div>
      
      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className={`mt-8 ${textColor} text-lg font-medium tracking-wide`}
      >
        Crafting your experience
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >...</motion.span>
      </motion.p>
    </div>
  );
};

export default Loader;