import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeadingWithIcon } from '../common/SectionHeading';
import Button from '../common/Button';
import { staggerContainer, fadeIn } from '../../utils/animations';
import ProjectShowcase from './ProjectShowcase'; // We'll rename the component
import projectsData from '../../data/projectsData';

const ProjectsSection = ({ themeMode }) => {
  // Get all projects with specific statuses (completed, in-progress, upcoming)
  // This will automatically include any new projects with these statuses
  // Only show the top 3 projects: FarmSA, RepairLink, Together As One
  const showcaseProjects = [
    projectsData.find(p => p.id === "farmsa"),
    projectsData.find(p => p.id === "repair-link"),
    projectsData.find(p => p.id === "together-as-one")
  ].filter(Boolean);
  
  // Theme-specific styles
  const sectionBg = themeMode === 'dark' 
    ? 'bg-gray-900' 
    : 'bg-gray-50';
    
  const ctaText = themeMode === 'dark' 
    ? 'text-gray-300' 
    : 'text-gray-600';
  
  return (
    <section id="projects" className={`py-12 md:py-16 ${sectionBg} relative overflow-hidden`}>
      {/* Enhanced decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
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
          <SectionHeadingWithIcon 
            title="Projects" 
            subtitle="Showcasing my *technical solutions* and experiences" 
            themeMode={themeMode}
            accent="emerald"
            icon="🚀"
            iconBackground="emerald"
          />
          
          {/* Projects showcase component */}
          <motion.div variants={fadeIn('up', 0.2)}>
            <ProjectShowcase 
              themeMode={themeMode} 
              projectsData={showcaseProjects} 
            />
          </motion.div>

          {/* Call to action */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className={`text-center mt-8 p-6 rounded-2xl ${themeMode === 'dark' ? 'bg-gray-800/30' : 'bg-white/60'} backdrop-blur-sm border ${themeMode === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'} max-w-2xl mx-auto`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Explore My Professional Work
            </h3>
            <p className={`${ctaText} mb-6 max-w-md mx-auto`}>
              These projects showcase my expertise in building production-ready applications with modern technologies. My GitHub repository includes both professional freelance work and personal projects that demonstrate my technical growth and capabilities.
            </p>
            
            <Button 
              href="https://github.com/Doc012" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              themeMode={themeMode}
              withArrow={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              }
            >
              View My Full GitHub Repository
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;