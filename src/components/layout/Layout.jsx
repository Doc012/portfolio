import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollSpy from './ScrollSpy';
import MotivationalBanner from '../common/MotivationalBanner';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children, themeMode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionsRef = useRef([]);
  
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Simulate loading 
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);
  
  // Theme-specific background styles
  const mainBg = themeMode === 'dark'
    ? 'bg-gradient-to-br from-gray-900 to-slate-900 text-gray-100'
    : 'bg-gradient-to-br from-slate-50 to-white text-gray-800';
    
  return (
    <div className={`flex flex-col min-h-screen ${mainBg} transition-colors duration-300`}>
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-24 h-24 border-4 border-t-emerald-500 border-r-transparent border-b-teal-500 border-l-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.p 
                className="mt-4 text-white text-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="flex flex-col min-h-screen w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MotivationalBanner themeMode={themeMode} />
            <Navbar themeMode={themeMode} />
            <main className="flex-grow">{children}</main>
            <Footer themeMode={themeMode} />
            <ScrollSpy themeMode={themeMode} containerRef={sectionsRef} />
            <ScrollToTop themeMode={themeMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;