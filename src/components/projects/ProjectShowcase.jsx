import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../common/Button';
import ProjectDetails from './ProjectDetails';

const ProjectShowcase = ({ themeMode, projectsData }) => {
  const [activeModal, setActiveModal] = useState(null);

  // Generate appropriate status badge
  const getStatusDetails = (status) => {
    switch(status) {
      case 'completed':
        return { 
          badgeColor: 'bg-emerald-500',
          badgeText: 'Completed',
          icon: '✓'
        };
      case 'in-progress':
        return { 
          badgeColor: 'bg-amber-500',
          badgeText: 'In Progress',
          icon: '⚙️'
        };
      case 'upcoming':
      default:
        return { 
          badgeColor: 'bg-blue-500',
          badgeText: 'Upcoming',
          icon: '🚀'
        };
    }
  };

  // Theme-specific styles
  const cardBg = themeMode === 'dark' ? 'bg-gray-800/80' : 'bg-white';
  const cardHoverEffect = themeMode === 'dark' 
    ? 'hover:bg-gray-700/90 hover:shadow-emerald-900/20' 
    : 'hover:bg-gray-50 hover:shadow-emerald-500/30';
  const titleColor = themeMode === 'dark' ? 'text-white' : 'text-gray-800';
  const descriptionColor = themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const techBadgeBg = themeMode === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700';

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
        {projectsData.map((project, index) => {
          const statusDetails = getStatusDetails(project.status);
          
          // Check if this is the social impact project
          const isSocialImpact = project.id === "together-as-one";
          
          // Custom styling for social impact project
          const cardClasses = `${cardBg} ${cardHoverEffect} rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 relative`;
            
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cardClasses}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <div className={`
                    px-3 py-1 rounded-full text-xs font-medium shadow-md
                    ${statusDetails.badgeColor} text-white
                    flex items-center gap-1
                  `}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {statusDetails.badgeText}
                  </div>
                </div>
                
                {/* Social Impact badge - only for Together As One */}
                {isSocialImpact && (
                  <div className="absolute top-3 left-3">
                    <div className={`
                      px-3 py-1 rounded-full text-xs font-medium shadow-md
                      ${themeMode === 'dark' ? 'bg-blue-600/90' : 'bg-blue-500/90'} text-white
                      flex items-center gap-1
                    `}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      Social Impact
                    </div>
                  </div>
                )}
                
                {/* Date chip with improved contrast and visibility */}
                {project.lastUpdated && (
                  <div className="absolute bottom-3 left-3">
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
                <h4 className={`text-xl font-bold ${titleColor} mb-2`}>
                  {project.title}
                </h4>
                
                <p className={`${descriptionColor} text-sm mb-4 line-clamp-2 flex-grow`}>
                  {project.shortDescription || project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(project.technologies || []).slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-xs ${techBadgeBg} px-2 py-0.5 rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.technologies || []).length > 3 && (
                    <span className={`text-xs ${techBadgeBg} px-2 py-0.5 rounded-full font-medium`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  <Button 
                    onClick={() => setActiveModal(project)}
                    variant="primary" 
                    size="sm"
                    themeMode={themeMode}
                    withArrow={true}
                  >
                    {project.status === 'upcoming' ? 'Learn More' : 'View Details'}
                  </Button>
                  
                  {project.demoUrl && project.status !== 'upcoming' && (
                    <>
                      {project.id === "together-as-one" ? (
                        // Functional demo button for Together As One
                        <Button 
                          href="https://togetherasone.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline" 
                          size="sm"
                          themeMode={themeMode}
                          icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M4.5 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12 4.5H5A1.5 1.5 0 0 0 3.5 6v4A1.5 1.5 0 0 0 5 11.5h1a.5.5 0 0 0 0-1H5a.5.5 0 0 1-.5-.5V6z"/>
                              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                          }
                        >
                          Live Demo
                        </Button>
                      ) : (
                        // Disabled demo button for other projects
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
                    </>
                  )}
                  
                  {project.githubUrl && project.status !== 'upcoming' && (
                    <Button 
                      href={project.githubUrl} 
                      target="_blank" 
                      variant="ghost" 
                      size="sm"
                      themeMode={themeMode}
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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
          );
        })}
      </div>

      {/* Project Details Modal */}
      {activeModal && (
        <ProjectDetails 
          project={activeModal} 
          isOpen={!!activeModal} 
          onClose={() => setActiveModal(null)}
          themeMode={themeMode}
        />
      )}
    </div>
  );
};

export default ProjectShowcase;