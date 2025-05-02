import { motion } from 'framer-motion';

const JourneyLevel = ({ 
  title, 
  description, 
  icon, 
  isActive, 
  isCompleted,
  index,
  themeMode 
}) => {
  // Theme-specific styles - updated for emerald/teal theme
  const inactiveBackground = themeMode === 'dark' ? 'bg-gray-800/70' : 'bg-gray-200/90';
  const inactiveTextColor = themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const descriptionColor = themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500';
  
  // Active and completed colors with emerald/teal theme
  const activeColor = 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30';
  const completedColor = 'bg-gradient-to-r from-emerald-600 to-emerald-700';
  const activeTextColor = isActive 
    ? themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
    : isCompleted 
      ? themeMode === 'dark' ? 'text-emerald-500' : 'text-emerald-600' 
      : inactiveTextColor;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
      whileHover={!isActive && !isCompleted ? { y: -5 } : {}}
    >
      {/* Level Circle */}
      <div className={`
        relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
        ${isActive 
          ? activeColor 
          : isCompleted 
            ? completedColor 
            : inactiveBackground
        }
        transition-all duration-300 transform
        ${!isActive && !isCompleted ? 'hover:shadow-md' : 'shadow-lg'}
      `}>
        {/* Enhanced pulse effect for active level */}
        {isActive && (
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 0.2, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-full h-full rounded-full bg-emerald-500/20"
          />
        )}

        {/* Secondary pulse for added depth */}
        {isActive && (
          <motion.div
            animate={{ 
              scale: [1.1, 1.5, 1.1],
              opacity: [0.5, 0.1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute w-full h-full rounded-full bg-teal-500/10"
          />
        )}

        {/* Icon with enhanced contrast and sizing */}
        <span className={`text-2xl ${isActive || isCompleted ? 'text-white' : inactiveTextColor}`}>
          {icon}
        </span>
      </div>

      {/* Title with improved hover effect */}
      <h3 className={`text-center text-lg font-semibold mb-2 ${activeTextColor} transition-colors duration-300`}>
        {title}
      </h3>

      {/* Description with improved readability */}
      <p className={`text-center text-sm ${descriptionColor} px-4 max-w-[150px] mx-auto`}>
        {description}
      </p>
    </motion.div>
  );
};

export default JourneyLevel;