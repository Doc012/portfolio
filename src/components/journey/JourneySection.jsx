import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import JourneyLevel from './JourneyLevel';
import Timeline from './Timeline';
import { staggerContainer, fadeIn } from '../../utils/animations';

const JourneySection = ({ themeMode }) => {
  // Theme-specific styles updated for emerald/teal theme
  const sectionBg = themeMode === 'dark' 
    ? 'bg-gray-900/60 backdrop-blur-lg' 
    : 'bg-gray-50/60 backdrop-blur-lg';
  
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700'
    : 'bg-white/60 backdrop-blur-sm border-gray-200';
  
  const textColor = themeMode === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const accentColor = themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600';
  const headingColor = themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600';
  const bulletColor = themeMode === 'dark' ? 'text-teal-400' : 'text-teal-500';

  // Enhanced journey levels with icons and descriptions
  // Updated to show Junior as active instead of Intern
  const journeyLevels = [
    {
      title: "Zero",
      description: "Learning fundamentals, building simple projects",
      icon: "🌱",
      isActive: false,
      isCompleted: true
    },
    {
      title: "Intern",
      description: "First professional exposure, learning team workflows",
      icon: "🚀",
      isActive: false,
      isCompleted: true
    },
    {
      title: "Junior",
      description: "Growing independence, contributing to real projects",
      icon: "💻",
      isActive: true,
      isCompleted: false
    },
    {
      title: "Intermediate",
      description: "Leading features, mentoring others",
      icon: "⚙️",
      isActive: false,
      isCompleted: false
    },
    {
      title: "Senior",
      description: "Architectural decisions, guiding teams",
      icon: "🏆",
      isActive: false,
      isCompleted: false
    }
  ];

  // Updated active index to Junior (position 2)
  const activeIndex = 2;

  return (
    <section id="journey" className={`py-16 md:py-24 ${sectionBg} relative overflow-hidden`}>
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${themeMode === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`}
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading 
            title="Developer Journey" 
            subtitle="Charting my growth path in software development"
            themeMode={themeMode}
            accent="emerald"
          />
          
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className={`${textColor} text-lg`}>
              Currently at <span className={`${accentColor} font-bold`}>Junior Developer</span> level. 
              Building skills daily through projects and continuous learning.
            </p>
          </motion.div>
          
          {/* Timeline component */}
          <Timeline 
            activeIndex={activeIndex}
            themeMode={themeMode}
            levels={journeyLevels.map((level, index) => ({
              ...level,
              content: (
                <JourneyLevel
                  key={level.title}
                  index={index}
                  title={level.title}
                  description={level.description}
                  icon={level.icon}
                  isActive={level.isActive}
                  isCompleted={level.isCompleted}
                  themeMode={themeMode}
                />
              )
            }))}
          />
          
          {/* Current status details with enhanced card */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className={`mt-16 max-w-3xl mx-auto ${cardBg} border p-6 md:p-8 rounded-2xl shadow-xl
              ${themeMode === 'dark' ? 'border-l-emerald-600/30' : 'border-l-emerald-500/30'}
              border-l-4
            `}
            whileHover={{ boxShadow: themeMode === 'dark' 
              ? '0 20px 25px -5px rgba(16, 185, 129, 0.05), 0 10px 10px -5px rgba(16, 185, 129, 0.04)'
              : '0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className={`text-xl md:text-2xl font-bold ${headingColor}`}>My Current Focus</h3>
            </div>
            
            <ul className={`space-y-4 ${textColor}`}>
              {[
                "Enhancing my expertise in full-stack development with Java, Spring Boot, and React",
                "Contributing to real-world projects and solving complex technical challenges",
                "Implementing industry best practices in software development and deployment",
                "Growing my skills in code review, testing, and collaborative development"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{delay: 0.5 + (i * 0.1)}}
                  viewport={{once: true}}
                >
                  <span className={`${bulletColor} mr-2 text-lg`}>✦</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Added timeline milestone */}
            <div className="mt-8 pt-6 border-t border-gray-700/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/10 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${accentColor}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    Next milestone:
                  </span>
                </div>
                <span className={`${accentColor} font-medium`}>Intermediate Developer — Q1 2027</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;