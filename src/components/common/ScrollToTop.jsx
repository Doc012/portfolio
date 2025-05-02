import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = ({ themeMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Apply theme-specific styles
  const buttonClasses = themeMode === 'dark'
    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-500 hover:to-teal-600 border border-emerald-700'
    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 border border-emerald-600/10';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.3 
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Decorative rings that appear on hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 rounded-full ${themeMode === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/10'}`}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.6 }}
                  exit={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 0.7 }}
                  className={`absolute inset-0 rounded-full ${themeMode === 'dark' ? 'bg-teal-500/5' : 'bg-teal-500/5'}`}
                />
              </>
            )}
          </AnimatePresence>

          <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full ${buttonClasses} shadow-lg hover:shadow-xl focus:outline-none relative z-10
              ${themeMode === 'dark' 
                ? 'shadow-emerald-700/20 hover:shadow-emerald-600/30' 
                : 'shadow-emerald-500/20 hover:shadow-emerald-400/30'}`}
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </motion.button>
          
          {/* Touch ripple effect for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-center font-medium"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ 
                delay: 0.1, 
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              className={`${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}
            >
              Top
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;