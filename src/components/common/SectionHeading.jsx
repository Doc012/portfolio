import { motion } from 'framer-motion';
import { textVariant } from '../../utils/animations';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center", 
  className = "", 
  themeMode,
  accent = "emerald" // Default accent color theme
}) => {
  // Define accent color gradients and styles
  const accentStyles = {
    emerald: {
      underline: "bg-gradient-to-r from-emerald-400 to-teal-500",
      titleSpan: themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
      subtitleSpan: themeMode === 'dark' ? 'text-teal-400' : 'text-teal-600',
      titleShadow: themeMode === 'dark' ? 'drop-shadow-sm shadow-emerald-700' : ''
    },
    indigo: {
      underline: "bg-gradient-to-r from-indigo-500 to-purple-500",
      titleSpan: themeMode === 'dark' ? 'text-indigo-400' : 'text-indigo-600',
      subtitleSpan: themeMode === 'dark' ? 'text-purple-400' : 'text-purple-500',
      titleShadow: themeMode === 'dark' ? 'drop-shadow-sm shadow-indigo-700' : ''
    },
    amber: {
      underline: "bg-gradient-to-r from-amber-400 to-orange-500",
      titleSpan: themeMode === 'dark' ? 'text-amber-400' : 'text-amber-600',
      subtitleSpan: themeMode === 'dark' ? 'text-orange-400' : 'text-orange-600',
      titleShadow: themeMode === 'dark' ? 'drop-shadow-sm shadow-amber-700' : ''
    }
  };
  
  // Get the selected accent style
  const { underline, titleSpan, subtitleSpan, titleShadow } = accentStyles[accent] || accentStyles.emerald;

  // Split the title to add accent to last word
  const words = title.split(' ');
  const lastWord = words.pop();
  const titleStart = words.join(' ');
  
  // Add highlight words in subtitle (surrounded by *)
  const formattedSubtitle = subtitle ? 
    subtitle.split('*').map((text, i) => 
      i % 2 === 0 ? text : <span key={i} className={subtitleSpan + " font-semibold"}>{text}</span>
    ) : null;

  return (
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-12 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"} ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ${themeMode === 'light' ? 'text-gray-800' : 'text-white'} ${titleShadow}`}>
        <span className="relative inline-block">
          {titleStart && <>{titleStart}{' '}</>}
          <span className={titleSpan}>{lastWord}</span>
          
          {/* Enhanced underline with animation */}
          <motion.span 
            className={`absolute -bottom-2 left-0 h-1.5 rounded-full ${underline}`}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.span>
        </span>
      </h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg md:text-xl ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {formattedSubtitle}
        </motion.p>
      )}
      
      {/* Optional decorative elements */}
      {align === "center" && (
        <>
          <motion.div 
            className={`hidden md:block absolute -z-10 left-1/2 transform -translate-x-1/2 top-0 w-20 h-20 ${underline.replace('bg-gradient-to-r', 'bg-gradient-to-br')}/5 blur-2xl rounded-full`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 3, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </>
      )}
    </motion.div>
  );
};

// Enhanced version with a decorative icon option
export const SectionHeadingWithIcon = ({ 
  icon, 
  iconBackground = "emerald", 
  ...props 
}) => {
  // Define icon background styles
  const bgStyles = {
    emerald: props.themeMode === 'dark' 
      ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20 text-emerald-400' 
      : 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600',
    indigo: props.themeMode === 'dark' 
      ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 text-indigo-400' 
      : 'bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600',
    amber: props.themeMode === 'dark' 
      ? 'bg-gradient-to-br from-amber-600/20 to-orange-600/20 text-amber-400' 
      : 'bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600'
  };
  
  const iconBg = bgStyles[iconBackground] || bgStyles.emerald;
  
  return (
    <div className="relative">
      <div className="flex flex-col items-center mb-6">
        <motion.div 
          className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-6 shadow-md`}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl">{icon}</div>
        </motion.div>
      </div>
      
      <SectionHeading {...props} />
    </div>
  );
};

export default SectionHeading;