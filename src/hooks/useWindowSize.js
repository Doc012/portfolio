import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks window dimensions and breakpoints
 * 
 * @returns {Object} Window size information
 * @property {number} width - Current window width
 * @property {number} height - Current window height
 * @property {boolean} isMobile - True if width is below 640px (sm)
 * @property {boolean} isTablet - True if width is between 640px and 1024px
 * @property {boolean} isDesktop - True if width is above 1024px
 * @property {string} breakpoint - Current breakpoint name (xs, sm, md, lg, xl, 2xl)
 */
const useWindowSize = () => {
  // Initialize with default state
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    breakpoint: 'lg'
  });
  
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine breakpoint
      let breakpoint;
      if (width < 640) breakpoint = 'xs';
      else if (width < 768) breakpoint = 'sm';
      else if (width < 1024) breakpoint = 'md';
      else if (width < 1280) breakpoint = 'lg';
      else if (width < 1536) breakpoint = 'xl';
      else breakpoint = '2xl';
      
      // Determine device categories
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      const isDesktop = width >= 1024;
      
      setWindowSize({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        breakpoint
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
};

export default useWindowSize;