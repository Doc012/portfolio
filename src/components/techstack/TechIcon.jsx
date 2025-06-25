import { useState } from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ 
  name, 
  icon, 
  color, 
  description, 
  proficiency = "intermediate",
  category,
  index,
  themeMode 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Updated proficiency colors to match emerald/teal theme
  const proficiencyColors = {
    beginner: themeMode === 'dark' ? "bg-gradient-to-r from-amber-500 to-amber-600" : "bg-gradient-to-r from-amber-400 to-amber-500",
    intermediate: themeMode === 'dark' ? "bg-gradient-to-r from-teal-500 to-teal-600" : "bg-gradient-to-r from-teal-400 to-teal-500",
    advanced: themeMode === 'dark' ? "bg-gradient-to-r from-emerald-500 to-emerald-600" : "bg-gradient-to-r from-emerald-400 to-emerald-500",
    expert: themeMode === 'dark' ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-emerald-400 to-teal-400"
  };

  // Proficiency labels with icons
  const proficiencyLabels = {
    beginner: "🌱 Beginner",
    intermediate: "🌿 Intermediate",
    advanced: "🌲 Advanced",
    expert: "🌳 Expert"
  };

  // Get proficiency width with smoother curve
  const getProficiencyWidth = () => {
    switch (proficiency) {
      case 'beginner': return '30%';
      case 'intermediate': return '60%';
      case 'advanced': return '85%';
      case 'expert': return '98%';
      default: return '50%';
    }
  };

  // Theme-specific styles with emerald/teal accents
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/80 backdrop-blur border border-gray-700/80'
    : 'bg-white/90 backdrop-blur border border-gray-200/80';
    
  const nameColor = themeMode === 'dark'
    ? 'text-white'
    : 'text-gray-800';
    
  const categoryPillBg = themeMode === 'dark'
    ? 'bg-gray-700/70 text-emerald-400 font-medium'
    : 'bg-emerald-50 text-emerald-700 font-medium';
    
  const proficiencyBarBg = themeMode === 'dark'
    ? 'bg-gray-700/70'
    : 'bg-gray-200/70';
    
  const proficiencyLabelColor = themeMode === 'dark'
    ? 'text-gray-400'
    : 'text-gray-600';
    
  const tooltipBg = themeMode === 'dark'
    ? 'from-gray-800/95 to-gray-900/95'
    : 'from-white/95 to-gray-50/95';
    
  const tooltipTextColor = themeMode === 'dark'
    ? 'text-gray-300'
    : 'text-gray-700';
    
  // Dynamic shadow color based on tech's color but with a fallback
  const shadowColor = color ? color.replace('#', '') : '10B981'; // Use emerald-500 as fallback
  
  // Enhanced hover style with subtle glow effect
  const hoverStyle = isHovered 
    ? themeMode === 'dark'
      ? `shadow-lg shadow-${shadowColor}/20 border-${shadowColor}/20 transform scale-[1.02]`
      : `shadow-lg shadow-${shadowColor}/10 border-${shadowColor}/20 transform scale-[1.02]`
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          ${cardBg}
          rounded-xl p-5 
          flex flex-col items-center justify-center text-center gap-3 h-full
          transition-all duration-300 relative overflow-hidden
          ${hoverStyle}
        `}
        style={{
          boxShadow: isHovered ? `0 10px 25px -5px rgba(${parseInt(shadowColor.substr(0,2), 16)}, ${parseInt(shadowColor.substr(2,2), 16)}, ${parseInt(shadowColor.substr(4,2), 16)}, 0.1)` : ''
        }}
      >
        {/* Background gradient on hover */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ 
              background: `linear-gradient(135deg, ${color}30, transparent 80%)`,
              borderRadius: 'inherit'
            }}
          />
        )}
        
        {/* Icon with enhanced animations - Updated for SVG icons */}
        <motion.div 
          className="text-4xl mb-2 relative flex items-center justify-center"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ color }}
        >
          {/* Subtle effect behind icon */}
          {isHovered && (
            <motion.div 
              className="absolute inset-0 rounded-full blur-sm -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1.2 }}
              style={{ backgroundColor: `${color}20` }}
            />
          )}
          {/* This now handles both string emoji icons and React component icons */}
          {typeof icon === 'string' ? icon : <div className="text-4xl">{icon}</div>}
        </motion.div>
        
        {/* Name */}
        <h3 className={`${nameColor} font-semibold text-lg transition-colors duration-300`}>{name}</h3>
        
        {/* Category */}
        <div className={`${categoryPillBg} text-xs px-2.5 py-1 rounded-full transition-colors duration-300`}>
          {category}
        </div>
        
        {/* Proficiency bar with enhanced style */}
        <div className={`w-full h-1.5 ${proficiencyBarBg} rounded-full mt-2 overflow-hidden`}>
          <motion.div 
            className={`h-full rounded-full ${proficiencyColors[proficiency]} shadow-inner`}
            initial={{ width: 0 }}
            whileInView={{ width: getProficiencyWidth() }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Improved proficiency label */}
        <div className={`text-xs ${proficiencyLabelColor}`}>
          {proficiencyLabels[proficiency] || proficiency}
        </div>
        
        {/* Enhanced description tooltip */}
        <motion.div 
          className={`
            absolute inset-0 bg-gradient-to-br ${tooltipBg} backdrop-blur-sm
            flex items-center justify-center p-5 opacity-0 invisible
            transition-all duration-300 rounded-xl border border-${shadowColor}/20
          `}
          animate={{
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex flex-col items-center">
            <div 
              className="w-12 h-12 mb-3 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: `${color}15`,
                color: color
              }}
            >
              {typeof icon === 'string' ? 
                <span className="text-2xl">{icon}</span> : 
                <div className="text-2xl">{icon}</div>
              }
            </div>
            <p className={`${tooltipTextColor} text-sm leading-relaxed`}>{description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechIcon;