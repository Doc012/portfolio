import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether a media query matches
 * 
 * @param {string} query - CSS media query string
 * @returns {boolean} - True if the media query matches
 * 
 * @example
 * // Check if screen is medium or larger
 * const isMediumScreen = useMediaQuery('(min-width: 768px)');
 * 
 * // Check if user prefers dark mode
 * const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 */
const useMediaQuery = (query) => {
  // Check if we're in a browser environment
  const isClient = typeof window === 'object';
  
  // State for the query match
  const [matches, setMatches] = useState(
    isClient ? window.matchMedia(query).matches : false
  );
  
  useEffect(() => {
    if (!isClient) return;
    
    const mediaQuery = window.matchMedia(query);
    
    // Handler function
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };
    
    // Set initial value
    updateMatches();
    
    // Use addEventListener with MediaQueryList
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMatches);
      return () => {
        mediaQuery.removeEventListener('change', updateMatches);
      };
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(updateMatches);
      return () => {
        mediaQuery.removeListener(updateMatches);
      };
    }
  }, [query, isClient]);
  
  return matches;
};

export default useMediaQuery;