import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotivationalBanner = ({ themeMode = 'dark' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [quote, setQuote] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Enhanced array of motivational quotes for developers
  const quotes = [
    { text: "Every expert was once a beginner.", author: "Unknown" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Progress is possible. Perfection is not.", author: "Simon Sinek" },
    { text: "The best time to start was yesterday. The second best time is now.", author: "Chinese Proverb" }
  ];
  
  // Define theme-specific styles
  const bannerStyles = themeMode === 'dark'
    ? "bg-gradient-to-r from-emerald-900/90 via-teal-800/90 to-emerald-900/90 text-white border-b border-emerald-700/30 shadow-lg shadow-emerald-900/20"
    : "bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100 text-emerald-800 border-b border-emerald-200 shadow-sm shadow-emerald-200/40";
    
  const iconBgStyles = themeMode === 'dark'
    ? "bg-emerald-800/50 text-emerald-300"
    : "bg-emerald-200/70 text-emerald-700";
    
  const controlBtnStyles = themeMode === 'dark'
    ? "text-white/70 hover:text-white hover:bg-white/10"
    : "text-emerald-700/70 hover:text-emerald-800 hover:bg-emerald-700/10";
  
  useEffect(() => {
    // Set initial quote
    setQuote(quotes[currentIndex]);
    
    // Auto-rotate quotes unless paused
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 8000);
    }
    
    // Auto hide after 60 seconds (can be closed manually earlier)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 60000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [isPaused]);
  
  // Update quote when currentIndex changes
  useEffect(() => {
    setQuote(quotes[currentIndex]);
    
    // Animate the quote
    const quoteElement = document.getElementById('quote-text');
    if (quoteElement) {
      quoteElement.classList.add('animate-fade-in');
      setTimeout(() => {
        quoteElement.classList.remove('animate-fade-in');
      }, 1000);
    }
  }, [currentIndex]);
  
  const hideBanner = () => {
    setIsVisible(false);
  };
  
  const handlePrevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };
  
  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  
  const togglePause = () => {
    setIsPaused(!isPaused);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className={`py-3.5 md:py-4 px-4 text-center relative z-50 ${bannerStyles}`}
        >
          <div className="container mx-auto max-w-4xl flex items-center justify-center relative">
            {/* Quote icon with enhanced styling */}
            <div className={`hidden sm:flex h-9 w-9 mr-3 rounded-full ${iconBgStyles} items-center justify-center flex-shrink-0`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Quote content with author */}
            <motion.div 
              key={currentIndex} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col items-center px-6"
            >
              <p id="quote-text" className="text-sm md:text-base font-medium mb-0.5">
                "{quote.text}"
              </p>
              <p className={`text-xs italic ${themeMode === 'dark' ? 'text-emerald-300/80' : 'text-emerald-700/80'}`}>
                — {quote.author}
              </p>
            </motion.div>
            
            {/* Controls */}
            <div className="flex items-center space-x-1 absolute -right-1 sm:static">
              {/* Previous button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevQuote}
                className={`p-1.5 rounded-full ${controlBtnStyles}`}
                aria-label="Previous quote"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              {/* Pause/Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePause}
                className={`p-1.5 rounded-full ${controlBtnStyles}`}
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </motion.button>
              
              {/* Next button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextQuote}
                className={`p-1.5 rounded-full ${controlBtnStyles}`}
                aria-label="Next quote"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={hideBanner}
                className={`p-1.5 rounded-full ml-1 ${controlBtnStyles}`}
                aria-label="Close banner"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </motion.button>
            </div>
            
            {/* Progress bar */}
            {!isPaused && (
              <motion.div 
                className={`absolute bottom-0 left-0 h-0.5 ${themeMode === 'dark' ? 'bg-emerald-400/50' : 'bg-emerald-500/40'}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear", repeat: 0 }}
                key={`progress-${currentIndex}`}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotivationalBanner;