import { motion } from 'framer-motion';

const SectionContainer = ({ id, children, themeMode }) => {
  // Theme-specific styles
  const topIndicatorColor = themeMode === 'dark'
    ? 'bg-gradient-to-r from-transparent via-purple-500/20 to-transparent'
    : 'bg-gradient-to-r from-transparent via-purple-500/20 to-transparent';
    
  const bottomIndicatorColor = themeMode === 'dark'
    ? 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent'
    : 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent';

  return (
    <section id={id} className="relative">
      {/* Top section indicator */}
      <div className={`absolute top-0 left-0 right-0 h-px ${topIndicatorColor}`}></div>
      
      {/* Content */}
      {children}
      
      {/* Bottom section indicator */}
      <div className={`absolute bottom-0 left-0 right-0 h-px ${bottomIndicatorColor}`}></div>
    </section>
  );
};

export default SectionContainer;