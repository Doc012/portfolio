import { useEffect, useState, Suspense, lazy } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

// Core components (always load)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';
import MotivationalBanner from './components/common/MotivationalBanner';
import HeroSection from './components/hero/HeroSection';

// Lazy-loaded components (load as needed)
const AboutSection = lazy(() => import('./components/about/AboutSection'));
const JourneySection = lazy(() => import('./components/journey/JourneySection'));
const TechStackSection = lazy(() => import('./components/techstack/TechStackSection'));
const ProjectsSection = lazy(() => import('./components/projects/ProjectsSection'));
const AchievementsSection = lazy(() => import('./components/achievements/AchievementsSection'));
const ContactSection = lazy(() => import('./components/contact/ContactSection'));

// Utilities
import { pageTransition } from './utils/animations';

// Custom scrollbar styles
const scrollbarStyles = {
  light: `
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #10b981, #0d9488);
      border-radius: 10px;
      border: 3px solid #f1f1f1;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #059669, #0f766e);
    }
    
    /* Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: #10b981 #f1f1f1;
    }
  `,
  dark: `
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #1f2937;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #059669, #0f766e);
      border-radius: 10px;
      border: 3px solid #1f2937;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #10b981, #0d9488);
    }
    
    /* Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: #059669 #1f2937;
    }
  `
};

const SectionLoader = ({ themeMode }) => (
  <div className={`flex justify-center items-center py-24 ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
    <svg className="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24">
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
        fill="none"
      ></circle>
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <span className="text-lg font-medium">Loading...</span>
  </div>
);

const ScrollObserver = () => {
  const { setScrollProgress } = useAppContext();
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);
  
  return null; // No visual element
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [themeMode, setThemeMode] = useState('light');
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    localStorage.setItem('preferred-theme', newTheme);
  };

  // Apply custom scrollbar based on theme
  useEffect(() => {
    // Remove existing style tag if it exists
    const existingStyleTag = document.getElementById('custom-scrollbar');
    if (existingStyleTag) {
      existingStyleTag.remove();
    }
    
    // Create and append new style tag
    const style = document.createElement('style');
    style.id = 'custom-scrollbar';
    style.textContent = themeMode === 'dark' ? scrollbarStyles.dark : scrollbarStyles.light;
    document.head.appendChild(style);
    
    return () => {
      // Clean up on unmount
      if (document.getElementById('custom-scrollbar')) {
        document.getElementById('custom-scrollbar').remove();
      }
    };
  }, [themeMode]);

  // Check for returning visitor and restore preferences
  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDark ? 'dark' : 'light');
    }
    
    // Check if user has visited before
    const visited = localStorage.getItem('visited');
    setHasVisitedBefore(!!visited);
    
    // Mark as visited
    localStorage.setItem('visited', 'true');
    
    // Simulate initial loading (shorter for returning visitors)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, hasVisitedBefore ? 1000 : 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  // Define section backgrounds with higher contrast
  const evenSectionBg = themeMode === 'dark'
    ? 'bg-gray-900'
    : 'bg-white';
    
  const oddSectionBg = themeMode === 'dark'
    ? 'bg-gray-800'
    : 'bg-gray-100';
    
  const sectionBorder = themeMode === 'dark'
    ? 'border-t border-gray-700'
    : 'border-t border-gray-200';

  if (isLoading) {
    return <Loader hasVisitedBefore={hasVisitedBefore} />;
  }

  return (
    <AppProvider>
      <ScrollObserver />
      <div 
        className={`flex flex-col min-h-screen transition-colors duration-300 ${
          themeMode === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
            : 'bg-gradient-to-br from-blue-50 to-white text-gray-800'
        }`}
      >
        <MotivationalBanner />
        <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
        
        <main className="flex-grow relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className={`absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30 
              ${themeMode === 'dark' ? 'bg-emerald-900/20' : 'bg-emerald-200/30'}`} />
            <div className={`absolute bottom-1/4 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20
              ${themeMode === 'dark' ? 'bg-teal-900/20' : 'bg-teal-200/30'}`} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              className="w-full"
            >
              {/* Home section - always has its own background */}
              <section id="home" className="relative">
                <HeroSection themeMode={themeMode} />
              </section>
              
              {/* About section - odd section */}
              <motion.section 
                id="about" 
                className={`${oddSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <AboutSection themeMode={themeMode} />
                </Suspense>
              </motion.section>
              
              {/* Journey section - even section */}
              <motion.section 
                id="journey" 
                className={`${evenSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <JourneySection themeMode={themeMode} />
                </Suspense>
              </motion.section>
              
              {/* Tech Stack section - odd section */}
              <motion.section 
                id="tech-stack" 
                className={`${oddSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <TechStackSection themeMode={themeMode} />
                </Suspense>
              </motion.section>
              
              {/* Projects section - even section */}
              <motion.section 
                id="projects" 
                className={`${evenSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <ProjectsSection themeMode={themeMode} />
                </Suspense>
              </motion.section>
              
              {/* Achievements section - odd section */}
              <motion.section 
                id="achievements" 
                className={`${oddSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <AchievementsSection themeMode={themeMode} />
                </Suspense>
              </motion.section>
              
              {/* Contact section - now even section */}
              <motion.section 
                id="contact" 
                className={`${evenSectionBg} ${sectionBorder} relative`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Suspense fallback={<SectionLoader themeMode={themeMode} />}>
                  <ContactSection themeMode={themeMode} />
                </Suspense>
              </motion.section>
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer themeMode={themeMode} />
        <ScrollToTop themeMode={themeMode} />
      </div>
    </AppProvider>
  );
}