import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { NAV_LINKS } from '../../utils/constants';

// Icon components to match the names in constants.js
const NavIcon = ({ name }) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      );
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      );
    case 'map':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
        </svg>
      );
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      );
    case 'mail':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      );
    default:
      return null;
  }
};

const Navbar = ({ toggleTheme, themeMode }) => {
  const { activeSection, scrollToSection } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    
    // Added small timeout to ensure menu closes before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Manual scroll implementation that works on all devices
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for the navbar height
          behavior: 'smooth'
        });
      }
      
      // Also update the active section in context
      scrollToSection(sectionId);
    }, 100);
  };

  // Modern theme-specific styles
  const navBg = isScrolled 
    ? themeMode === 'dark'
      ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800/50' 
      : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50'
    : 'bg-transparent';

  const logoGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600';
  
  const activeNavItemBg = themeMode === 'dark'
    ? 'bg-gradient-to-r from-emerald-800/80 to-teal-800/80 text-emerald-400'
    : 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700';
  
  const inactiveNavItemHoverBg = themeMode === 'dark'
    ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50'
    : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-100/80';
  
  const themeToggleBg = themeMode === 'dark'
    ? 'bg-gray-800/70 text-gray-300 hover:text-emerald-400 hover:bg-gray-800'
    : 'bg-gray-200/70 text-gray-700 hover:text-emerald-700 hover:bg-gray-200';

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`text-2xl md:text-3xl font-bold ${logoGradient} flex items-center`}
          >
            <span className="mr-2">SN</span>
            <motion.span
              className="hidden sm:inline-block text-sm font-normal bg-clip-text bg-gradient-to-r from-emerald-400/80 to-teal-500/80 text-transparent"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Developer
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href.substring(1));
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                  activeSection === link.href.substring(1)
                    ? activeNavItemBg
                    : inactiveNavItemHoverBg
                }`}
              >
                {link.icon && <span className="mr-1.5"><NavIcon name={link.icon} /></span>}
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`ml-1.5 h-1.5 w-1.5 rounded-full ${themeMode === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    // Add max scale constraint and smoother animation
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30,
                      restDelta: 0.01, // More precise rest point
                      mass: 0.5 // Lighter for quicker stabilization
                    }}
                    style={{ maxWidth: '4px', maxHeight: '4px' }} // Control max size
                  />
                )}
              </motion.a>
            ))}
            
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: 0 }}
              className={`ml-4 p-2.5 rounded-full transition-all ${themeToggleBg}`}
              aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
            >
              {themeMode === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-md focus:outline-none ${
              themeMode === 'dark'
                ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50'
                : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-100/80'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen 
            ? themeMode === 'dark'
              ? 'border-t border-gray-800 bg-gray-900/95 backdrop-blur-md'
              : 'border-t border-gray-200 bg-white/95 backdrop-blur-md'
            : ''
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href.substring(1));
              }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center px-3 py-2.5 rounded-lg text-base font-medium ${
                activeSection === link.href.substring(1)
                  ? activeNavItemBg
                  : inactiveNavItemHoverBg
              }`}
            >
              {link.icon && <span className="w-6 h-6 mr-3"><NavIcon name={link.icon} /></span>}
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="mobile-nav-indicator"
                  className={`ml-auto h-2 w-2 rounded-full ${themeMode === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  // Add max scale constraint and smoother animation
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30,
                    restDelta: 0.01,
                    mass: 0.5 
                  }}
                  style={{ maxWidth: '6px', maxHeight: '6px' }} // Control max size
                />
              )}
            </motion.a>
          ))}
          
          {/* Theme toggle on mobile */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg text-base font-medium ${
              themeMode === 'dark'
                ? 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50'
                : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-100/80'
            }`}
          >
            {themeMode === 'dark' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                Switch to Light Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                Switch to Dark Mode
              </>
            )}
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;