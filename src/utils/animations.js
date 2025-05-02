/**
 * Animation configurations for Framer Motion
 */

/**
 * Fade in animation
 * @param {string} direction - Direction of the fade (up, down, left, right)
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Animation configuration
 */
export const fadeIn = (direction, delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/**
 * Text variant animation for headings and text blocks
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Animation configuration
 */
export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Staggered container animation that staggers its children
 * @param {number} staggerChildren - Delay between children animations
 * @param {number} delayChildren - Delay before starting children animations
 * @returns {Object} Animation configuration
 */
export const staggerContainer = (staggerChildren, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

/**
 * Scale animation
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Animation configuration
 */
export const scaleIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
        delay,
      },
    },
  };
};

/**
 * Text character animation for typing effect
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Animation configuration
 */
export const textCharacter = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.1,
        delay,
      },
    },
  };
};

/**
 * Text word animation for text reveals
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Animation configuration
 */
export const textWord = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.3,
        delay,
      },
    },
  };
};

/**
 * Slide in animation
 * @param {string} direction - Direction of the slide (up, down, left, right)
 * @param {string} type - Animation type (tween or spring)
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Animation configuration
 */
export const slideIn = (direction, type = 'tween', delay = 0, duration = 0.5) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Zoom in animation
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} Animation configuration
 */
export const zoomIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Flip animation
 * @param {string} direction - Direction to flip (x or y)
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Animation configuration
 */
export const flip = (direction = 'y', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      rotateX: direction === 'x' ? 90 : 0,
      rotateY: direction === 'y' ? 90 : 0,
    },
    show: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        delay,
        duration: 1,
        stiffness: 100,
      },
    },
  };
};

/**
 * Float animation for hover effects
 * @returns {Object} Animation configuration
 */
export const floatAnimation = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

/**
 * Reveal animation for text and elements
 * @param {string} direction - Direction of reveal (up, down, left, right)
 * @returns {Object} Animation configuration
 */
export const reveal = (direction = 'up') => {
  let initial = {};
  
  switch (direction) {
    case 'up':
      initial = { y: 100, opacity: 0 };
      break;
    case 'down':
      initial = { y: -100, opacity: 0 };
      break;
    case 'left':
      initial = { x: 100, opacity: 0 };
      break;
    case 'right':
      initial = { x: -100, opacity: 0 };
      break;
    default:
      initial = { opacity: 0 };
  }
  
  return {
    initial,
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
};

/**
 * Pulse animation for drawing attention
 * @returns {Object} Animation configuration
 */
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Path draw animation for SVGs
 * @param {number} delay - Animation delay in seconds
 * @returns {Object} Animation configuration for SVG paths
 */
export const pathDraw = (delay = 0) => {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, delay },
        opacity: { duration: 0.3, delay }
      }
    }
  };
};

/**
 * Blur animation for background elements
 * @returns {Object} Animation configuration
 */
export const blurAnimation = {
  initial: { filter: 'blur(20px)', opacity: 0 },
  animate: { 
    filter: 'blur(0px)', 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    filter: 'blur(20px)',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

/**
 * Page transition animation for route changes
 * @returns {Object} Animation configuration for page transitions
 */
export const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};