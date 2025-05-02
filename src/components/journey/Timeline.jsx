import { motion } from 'framer-motion';

const Timeline = ({ activeIndex, levels, themeMode }) => {
  // Calculate the progress percentage based on active level
  const progressPercentage = (activeIndex / (levels.length - 1)) * 100;
  
  // Theme-specific styles updated for emerald/teal theme
  const backgroundLineColor = themeMode === 'dark' ? 'bg-gray-700/80' : 'bg-gray-300/80';
  
  return (
    <div className="relative py-12 px-4 md:px-0 w-full max-w-3xl mx-auto">
      {/* Journey levels */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
        {levels.map((level, index) => (
          <div key={level.title} className="flex flex-col items-center">
            {/* Custom content for each level */}
            {level.content}
          </div>
        ))}
      </div>

      {/* Enhanced background connection line - hidden on mobile */}
      <div className={`absolute top-[4.5rem] left-0 w-full h-1.5 ${backgroundLineColor} rounded-full hidden md:block`}></div>

      {/* Progress connection line with improved emerald/teal gradient - hidden on mobile */}
      <motion.div 
        className="absolute top-[4.5rem] left-0 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 shadow-sm shadow-emerald-500/30 hidden md:block"
        initial={{ width: 0 }}
        whileInView={{ width: `${progressPercentage}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>
      
      {/* Enhanced current indicator - hidden on mobile */}
      <motion.div 
        className="absolute top-[calc(4.5rem-0.5rem)] z-20 hidden md:block"
        style={{ left: `${progressPercentage}%` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-5 rounded-full shadow-lg shadow-emerald-500/50 flex items-center justify-center"
        >
          <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full">
            <div className="w-full h-full rounded-full bg-emerald-400 animate-pulse opacity-70"></div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Timeline;