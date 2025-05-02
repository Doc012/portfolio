import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollSpy = ({ themeMode }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLabels, setShowLabels] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define sections to track with modern SVG icons
  const sections = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'journey', 
      label: 'Journey', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'tech-stack', 
      label: 'Tech', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Determine which section is in view
      const viewportHeight = window.innerHeight;
      const scrollThreshold = 0.3; // Percentage of section that needs to be in view
      
      let currentSection = null;
      let maxVisiblePercentage = 0;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementHeight = rect.height;
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / elementHeight;

          if (visiblePercentage > scrollThreshold && visiblePercentage > maxVisiblePercentage) {
            maxVisiblePercentage = visiblePercentage;
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll(); // Initialize on mount
    window.addEventListener('scroll', handleScroll);
    
    // Hide labels automatically after some time of inactivity
    let timeout;
    if (isExpanded) {
      timeout = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [activeSection, sections, isExpanded]);

  // Detect screen size and adjust display accordingly
  useEffect(() => {
    const handleResize = () => {
      setShowLabels(window.innerWidth >= 768); // Hide labels on mobile
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show ScrollSpy only when scrolled
  const isVisible = scrollPosition > 200;

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Toggle expanded mode (for mobile)
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Modern scrollspy styles with enhanced emerald/teal theme
  const scrollspyBg = themeMode === 'dark'
    ? 'bg-gray-900/90 backdrop-blur-sm border-gray-800'
    : 'bg-white/95 backdrop-blur-sm border-gray-200';
    
  const activeItemBg = themeMode === 'dark'
    ? 'bg-gradient-to-r from-emerald-900/70 to-teal-900/70'
    : 'bg-gradient-to-r from-emerald-100 to-teal-50';
    
  const activeItemText = themeMode === 'dark'
    ? 'text-emerald-400'
    : 'text-emerald-700';
    
  const inactiveItemText = themeMode === 'dark'
    ? 'text-gray-400 hover:text-emerald-300'
    : 'text-gray-600 hover:text-emerald-700';
    
  // Mobile specific styles
  const mobileScrollspyBg = themeMode === 'dark'
    ? 'bg-gray-900/90 backdrop-blur-sm border-gray-800'
    : 'bg-white/95 backdrop-blur-sm border-gray-200';
    
  const toggleBtnBg = themeMode === 'dark' 
    ? 'bg-emerald-800/80 text-emerald-300 hover:bg-emerald-700/80'
    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200';

  return (
    <>
      {/* Desktop ScrollSpy */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={`${scrollspyBg} shadow-lg px-3 py-2.5 rounded-full border`}
              whileHover={{ boxShadow: `0 10px 25px -5px rgba(${themeMode === 'dark' ? '16, 185, 129' : '16, 185, 129'}, 0.15)` }}
            >
              <ul className="flex items-center space-x-1.5">
                {sections.map(({ id, label, icon }) => (
                  <li key={id}>
                    <motion.a
                      href={`#${id}`}
                      onClick={(e) => handleClick(e, id)}
                      className={`relative flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        activeSection === id ? activeItemText : inactiveItemText
                      }`}
                      title={label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeSection === id && (
                        <motion.span
                          layoutId="scrollSpyIndicator"
                          className={`absolute inset-0 ${activeItemBg} rounded-full`}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center">
                        <span className="mr-1.5">{icon}</span>
                        {showLabels && <span>{label}</span>}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile ScrollSpy */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-4 right-4 md:hidden z-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleExpanded}
              className={`rounded-full p-3 shadow-lg ${toggleBtnBg}`}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.nav
                  className="absolute bottom-16 right-0 mb-2"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`${mobileScrollspyBg} shadow-xl rounded-2xl p-2 border`}>
                    <ul className="flex flex-col space-y-1">
                      {sections.map(({ id, label, icon }, index) => (
                        <motion.li
                          key={id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <motion.a
                            href={`#${id}`}
                            onClick={(e) => {
                              handleClick(e, id);
                              setIsExpanded(false);
                            }}
                            className={`flex items-center w-full px-4 py-2 rounded-lg ${
                              activeSection === id ? activeItemText : inactiveItemText
                            }`}
                            whileTap={{ scale: 0.97 }}
                          >
                            {activeSection === id && (
                              <motion.span
                                layoutId="mobileScrollSpyIndicator"
                                className={`absolute inset-0 ${activeItemBg} rounded-lg`}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}
                            <span className="mr-3 relative z-10">{icon}</span>
                            <span className="relative z-10">{label}</span>
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollSpy;