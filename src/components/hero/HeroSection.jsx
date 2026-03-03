import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import TypingEffect from '../common/TypingEffect';

const HeroSection = ({ themeMode }) => {
  const sectionRef = useRef(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.3; // Parallax factor
      const opacity = 1 - Math.min(scrollPosition / 700, 1); // Fade out effect
      
      // Apply transform to background elements
      const bgElements = sectionRef.current.querySelectorAll('.parallax-bg');
      bgElements.forEach(el => {
        el.style.transform = `translateY(${translateY}px)`;
        el.style.opacity = opacity;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated modern theme-specific styles
  const sectionBg = themeMode === 'dark' 
    ? 'bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900' 
    : 'bg-gradient-to-b from-slate-100 via-white to-slate-100';
    
  const textPrimaryColor = themeMode === 'dark' 
    ? 'text-white' 
    : 'text-gray-900';
    
  const textSecondaryColor = themeMode === 'dark' 
    ? 'text-gray-300' 
    : 'text-gray-600';
    
  const accentColor = 'bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent';
  
  const glowColor = themeMode === 'dark'
    ? 'bg-emerald-500/10' 
    : 'bg-emerald-500/5';
    
  const blueGlowColor = themeMode === 'dark'
    ? 'bg-teal-500/10' 
    : 'bg-teal-500/5';
    
  const typingTextColor = themeMode === 'dark' 
    ? 'text-teal-400' 
    : 'text-teal-600';
    
  const bgPatternOpacity = themeMode === 'dark' ? 'opacity-10' : 'opacity-5';
  
  const profileBorderColor = themeMode === 'dark'
    ? 'border-emerald-500'
    : 'border-teal-500';
    
  const profileRingColor = themeMode === 'dark'
    ? 'border-emerald-500/30'
    : 'border-teal-500/20';
    
  const statusBgColor = themeMode === 'dark'
    ? 'bg-emerald-600'
    : 'bg-emerald-600';
    
  const scrollTextColor = themeMode === 'dark' 
    ? 'text-gray-400' 
    : 'text-gray-500';
    
  const scrollIndicatorBorderColor = themeMode === 'dark'
    ? 'border-gray-400'
    : 'border-gray-500';
    
  const scrollIndicatorDotColor = themeMode === 'dark'
    ? 'bg-gray-400'
    : 'bg-gray-500';

  return (
    <section 
      id="home" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${sectionBg}`}></div>
      </div>
      
      {/* Enhanced geometric background elements */}
      <div className={`parallax-bg absolute top-10 left-10 w-72 h-72 rounded-full ${glowColor} blur-3xl -z-5`}></div>
      <div className={`parallax-bg absolute bottom-20 right-10 w-80 h-80 rounded-full ${blueGlowColor} blur-3xl -z-5`}></div>
      
      {/* Animated grid background */}
      <div className={`parallax-bg absolute inset-0 ${bgPatternOpacity}`}>
        <div className="absolute inset-0 bg-grid-pattern bg-fixed"></div>
      </div>

      {/* Abstract shapes - visible only in light theme */}
      {themeMode === 'light' && (
        <>
          <motion.div 
            className="absolute top-20 right-[10%] h-24 w-24 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-200 -rotate-12 hidden lg:block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-20 left-[5%] h-32 w-32 rounded-full bg-gradient-to-r from-teal-100 to-emerald-200 hidden lg:block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </>
      )}
      
      {/* Abstract shapes - visible only in dark theme */}
      {themeMode === 'dark' && (
        <>
          <motion.div 
            className="absolute top-20 right-[10%] h-24 w-24 rounded-xl bg-gradient-to-r from-emerald-900/30 to-teal-800/30 -rotate-12 hidden lg:block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-20 left-[5%] h-32 w-32 rounded-full bg-gradient-to-r from-teal-900/30 to-emerald-800/30 hidden lg:block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            {/* Profile image - only show on mobile */}
            <motion.div
              className="mb-8 md:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <div className="relative inline-block">
                <img 
                  src="https://sn-pcs.netlify.app/2.jpg" 
                  alt="Siphamandla Ngcepe" 
                  className={`w-32 h-32 rounded-full object-cover border-4 ${profileBorderColor}`}
                />
                <motion.div 
                  className={`absolute -bottom-2 -right-2 ${statusBgColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Available
                </motion.div>
                
                {/* Decorative ring */}
                <motion.div 
                  className={`absolute inset-0 border-4 ${profileRingColor} rounded-full`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Greeting */}
            <motion.p 
              className={`text-lg md:text-xl ${textSecondaryColor} mb-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            {/* Name */}
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-3 ${textPrimaryColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className={accentColor}>
                Siphamandla Ngcepe
              </span>
            </motion.h1>
            
            {/* Title */}
            <motion.h2 
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 ${textPrimaryColor} flex flex-wrap items-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="relative inline-flex items-center w-auto max-w-full min-w-[300px] md:min-w-[380px] lg:min-w-[450px]" 
                style={{ 
                  minHeight: '1.5em',
                  lineHeight: '1.5em' // Ensures consistent line height
                }}
              >
                <TypingEffect 
                  texts={[
                    "Backend Developer", 
                    "Java Spring Boot Developer", 
                    "Microservices Architect", 
                    "Full-Stack Developer"
                  ]}
                  typingSpeed={60}
                  className={`${typingTextColor} whitespace-nowrap`}
                />
              </span>
            </motion.h2>
            
            {/* Brief intro */}
            <motion.p 
              className={`text-lg ${textSecondaryColor} max-w-lg mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Junior Java Developer with hands-on experience in Spring Boot, REST APIs, and database design. I enjoy building practical, scalable solutions and am actively seeking an entry-level or internship role to grow as a software engineer.
            </motion.p>
            
            {/* Action buttons */}
            <HeroButtons className="justify-center md:justify-start" themeMode={themeMode} />

            {/* Tech badges */}
            <motion.div
              className="flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {["Java", "Spring Boot", "Microservices", "Kafka", "MySQL", "React"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  className={`text-xs px-3 py-1 rounded-full border ${
                    themeMode === 'dark' 
                      ? 'border-emerald-800 bg-emerald-900/30 text-emerald-400' 
                      : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Profile illustration - only show on desktop */}
          <motion.div
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -top-6 -left-6 w-32 h-32 rounded-lg ${themeMode === 'dark' ? 'bg-emerald-900/20' : 'bg-emerald-100/50'} -z-10`}
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${themeMode === 'dark' ? 'bg-teal-900/20' : 'bg-teal-100/50'} -z-10`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              ></motion.div>
              
              {/* Main profile image */}
              <div className="relative">
                <div className={`w-72 h-72 rounded-2xl overflow-hidden border-4 ${profileBorderColor} shadow-xl`}>
                  <img 
                    src="https://sn-pcs.netlify.app/2.jpg" 
                    alt="Siphamandla Ngcepe"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Available badge */}
                <motion.div 
                  className={`absolute -bottom-4 -right-4 ${statusBgColor} text-white px-4 py-2 rounded-lg shadow-lg font-medium flex items-center`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  Available for Hire
                </motion.div>

                {/* Code snippet decoration */}
                <motion.div
                  className={`absolute -left-16 top-12 p-3 rounded-lg ${
                    themeMode === 'dark' 
                      ? 'bg-gray-800/80 border border-gray-700' 
                      : 'bg-white/90 border border-gray-200 shadow-md'
                  } backdrop-blur-sm hidden lg:block`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <pre className={`text-xs ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    <code>{`function coding() {
  return "passion";
}`}</code>
                  </pre>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className={`text-sm ${scrollTextColor} mb-2`}>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className={`h-6 w-4 border-2 ${scrollIndicatorBorderColor} rounded-full flex justify-center pt-1`}
        >
          <div className={`h-1 w-1 ${scrollIndicatorDotColor} rounded-full`}></div>
        </motion.div>
      </motion.div>

      {/* Custom styling for grid pattern */}
      <style className="language-jsx">{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;