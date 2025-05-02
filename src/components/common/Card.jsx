import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  elevation = 'md', 
  hoverEffect = true,
  onClick = null
}) => {
  // Elevation styles
  const elevationStyles = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    none: ''
  };

  // Base styles
  const baseStyle = `
    bg-gray-800/50 backdrop-blur-sm 
    border border-gray-700 
    rounded-2xl 
    overflow-hidden
    ${elevationStyles[elevation]}
    ${hoverEffect ? 'transition-all duration-300' : ''}
    ${className}
  `;

  const hoverStyles = hoverEffect ? {
    whileHover: { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' },
    whileTap: { y: 0 }
  } : {};

  return (
    <motion.div 
      className={baseStyle} 
      {...hoverStyles}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;