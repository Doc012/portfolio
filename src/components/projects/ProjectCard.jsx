import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ project, index, themeMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Theme-specific styles updated for emerald/teal theme
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/80'
    : 'bg-white/70 backdrop-blur-sm border border-gray-200/80';
    
  const titleColor = themeMode === 'dark'
    ? 'text-white'
    : 'text-gray-800';
    
  const descriptionColor = themeMode === 'dark'
    ? 'text-gray-400'
    : 'text-gray-600';
    
  const badgeBg = themeMode === 'dark'
    ? 'bg-emerald-900/80 text-emerald-200' 
    : 'bg-emerald-700/80 text-emerald-50';
    
  const cardHoverEffect = themeMode === 'dark'
    ? 'hover:border-emerald-600/30 hover:shadow-xl hover:shadow-emerald-800/10'
    : 'hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-300/20';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className={`${cardBg} ${cardHoverEffect} rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        {/* Project Image with overlay effect */}
        <div className="relative overflow-hidden group">
          <div className="h-48 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-all"
            />
            
            {/* Gradient overlay that becomes more visible on hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 
              ${isHovered ? 'opacity-90' : 'opacity-60'}`}
            />
            
            {/* Featured badge if applicable */}
            {project.featured && (
              <div className="absolute top-2 right-2">
                <div className={`
                  px-2.5 py-1 rounded-full text-xs font-medium
                  bg-gradient-to-r from-emerald-500 to-teal-500 text-white
                  flex items-center gap-1 shadow-lg
                `}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              </div>
            )}
          </div>
          
          {/* Technology badges with improved styling */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <motion.span 
                key={tech} 
                className={`text-xs ${badgeBg} px-2.5 py-1 rounded-full font-medium shadow-sm backdrop-blur-sm`}
                whileHover={{ y: -2, x: 0, transition: { duration: 0.2 } }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span 
                className={`text-xs ${badgeBg} px-2.5 py-1 rounded-full font-medium shadow-sm backdrop-blur-sm`}
                whileHover={{ y: -2, x: 0, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              >
                +{project.technologies.length - 3}
              </motion.span>
            )}
          </div>

          {/* Improved date badge */}
          {project.lastUpdated && (
            <div className="absolute bottom-3 left-3 z-10">
              <div className={`px-2.5 py-1.5 rounded-full text-xs font-medium 
                ${themeMode === 'dark' 
                  ? 'bg-gray-900/80 text-white border border-gray-700/50' 
                  : 'bg-white/90 text-gray-800 border border-gray-200/50'} 
                backdrop-blur-sm shadow-md flex items-center gap-1.5`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} 
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {project.lastUpdated}
              </div>
            </div>
          )}
        </div>
      
        {/* Project Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className={`text-xl font-bold ${titleColor} mb-2 line-clamp-1`}>
            {project.title}
            {project.isNew && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                New
              </span>
            )}
          </h3>
          <p className={`${descriptionColor} text-sm mb-4 line-clamp-3 flex-grow`}>
            {project.shortDescription}
          </p>
          
          {/* Project stats with icons */}
          <div className="flex items-center gap-4 mb-4">
            {project.codeSize && (
              <div className="flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {project.codeSize}
              </div>
            )}
            {project.lastUpdated && (
              <div className="flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.lastUpdated}
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={openModal}
              themeMode={themeMode}
              withArrow={true}
            >
              Details
            </Button>
            
            {project.demoUrl && (
              <div className="relative group">
                <Button 
                  as="div"
                  variant="outline" 
                  size="sm"
                  themeMode={themeMode}
                  className="opacity-70 cursor-not-allowed"
                  disabled={true}
                >
                  Live Demo
                </Button>
                {/* Tooltip that appears on hover */}
                <div className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-xs font-medium whitespace-nowrap ${
                  themeMode === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-700 text-white'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-max`}>
                  Coming soon - Not yet deployed
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                    themeMode === 'dark' ? 'bg-gray-800' : 'bg-gray-700'
                  }`}></div>
                </div>
              </div>
            )}
            
            {project.githubUrl && (
              <Button 
                href={project.githubUrl} 
                target="_blank" 
                variant="ghost" 
                size="sm"
                themeMode={themeMode}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                }
              >
                Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Project Details Modal */}
      <ProjectDetails 
        project={project} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        themeMode={themeMode}
      />
    </>
  );
};

export default ProjectCard;