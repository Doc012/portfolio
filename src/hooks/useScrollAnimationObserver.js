import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies animations to elements when they enter the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.targetSelector - CSS selector for elements to animate
 * @param {string} options.animationClass - CSS class to apply when element is visible
 * @param {number} options.threshold - Percentage of element that needs to be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.once - Whether to trigger the animation only once
 * @returns {React.RefObject} - Ref to attach to the container element
 */
const useScrollAnimationObserver = ({
  targetSelector = '.animate-on-scroll',
  animationClass = 'is-animated',
  threshold = 0.1,
  rootMargin = '0px',
  once = true
} = {}) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Get all elements to animate within the container
    const elementsToAnimate = container.querySelectorAll(targetSelector);
    if (elementsToAnimate.length === 0) return;
    
    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          
          // If once is true, unobserve after animation is applied
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // If not 'once', remove the class when out of viewport
          entry.target.classList.remove(animationClass);
        }
      });
    }, {
      threshold,
      rootMargin
    });
    
    // Observe each element
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
    
    // Cleanup
    return () => {
      if (elementsToAnimate) {
        elementsToAnimate.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, [targetSelector, animationClass, threshold, rootMargin, once]);
  
  return containerRef;
};

export default useScrollAnimationObserver;