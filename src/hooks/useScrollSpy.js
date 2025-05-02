import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks which section is currently in the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {string[]} options.sectionIds - Array of section IDs to track
 * @param {number} options.offset - Offset from the top of the viewport (in pixels)
 * @param {number} options.threshold - Percentage of section that needs to be visible (0-1)
 * @returns {string} - ID of the active section
 */
const useScrollSpy = ({ 
  sectionIds = [], 
  offset = 100, 
  threshold = 0.3
} = {}) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Define section visibility tracking
      let currentSection = activeSection;
      let maxVisiblePercentage = 0;

      // Check each section's visibility
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollY - offset;
          const sectionHeight = rect.height;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Section is above the viewport
          if (scrollY > sectionBottom) {
            return;
          }
          
          // Calculate visible height of section in viewport
          const visibleHeight = Math.min(scrollY + viewportHeight, sectionBottom) - 
                               Math.max(scrollY, sectionTop);
          
          // Calculate visible percentage of section
          const visiblePercentage = visibleHeight / sectionHeight;
          
          // Update current section if this one is more visible
          if (visiblePercentage > threshold && visiblePercentage > maxVisiblePercentage) {
            maxVisiblePercentage = visiblePercentage;
            currentSection = sectionId;
          }
        }
      });
      
      // Handle edge case: when scrolled to bottom of page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (isAtBottom) {
        // Get last section ID
        currentSection = sectionIds[sectionIds.length - 1];
      }
      
      // Update active section only if it changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sectionIds, offset, threshold]);

  return activeSection;
};

export default useScrollSpy;