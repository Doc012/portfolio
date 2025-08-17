import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../common/Modal';
import Button from '../common/Button';

const ProjectDetails = ({ project, isOpen, onClose, themeMode }) => {
  if (!project) return null;
  
  // Theme-specific styles updated for emerald/teal theme
  const headingColor = themeMode === 'dark'
    ? 'text-white'
    : 'text-gray-800';
    
  const subHeadingColor = themeMode === 'dark'
    ? 'text-emerald-400'
    : 'text-emerald-600';
    
  const textColor = themeMode === 'dark'
    ? 'text-gray-300'
    : 'text-gray-700';
    
  const listBulletColor = themeMode === 'dark'
    ? 'text-emerald-400'
    : 'text-emerald-600';
    
  const techBadgeBg = themeMode === 'dark'
    ? 'bg-gray-700 text-emerald-300 border border-emerald-800/30'
    : 'bg-gray-100 text-emerald-700 border border-emerald-200';
    
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/70 border-gray-700'
    : 'bg-white/90 border-gray-200';
    
  // Check if this is the RepairLink v1.2 project
  const isRepairLinkV12 = project.id === "repair-link-two";
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      size="lg"
      themeMode={themeMode}
    >
      <div className="space-y-8">
        {/* Project image with improved presentation */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Project status/timeline if available */}
        {(project.status || project.timeline || project.lastUpdated) && (
          <div className={`flex flex-wrap justify-between items-center p-4 rounded-lg ${cardBg} border`}>
            {project.status && (
              <div className="flex items-center space-x-2">
                <div className={`w-2.5 h-2.5 rounded-full ${
                  project.status === 'completed' ? 'bg-emerald-500' :
                  project.status === 'in-progress' ? 'bg-amber-500' :
                  'bg-blue-500'
                } animate-pulse`}></div>
                <span className={`text-sm font-medium ${
                  project.status === 'completed' ? 'text-emerald-500' :
                  project.status === 'in-progress' ? 'text-amber-500' :
                  'text-blue-500'
                }`}>
                  {project.status === 'completed' ? 'Completed' :
                   project.status === 'in-progress' ? 'In Progress' :
                   'Planned'}
                </span>
              </div>
            )}
            
            {project.timeline && (
              <div className="text-sm text-gray-500">
                <span className="font-medium">Timeline:</span> {project.timeline}
              </div>
            )}
            
            {project.lastUpdated && (
              <div className="text-sm text-gray-500">
                <span className="font-medium">Last Updated:</span> {project.lastUpdated}
              </div>
            )}
          </div>
        )}
        
        {/* Project description */}
        <div className="space-y-4">
          <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            Overview
          </h3>
          <p className={`${textColor} whitespace-pre-line leading-relaxed`}>{project.description}</p>
        </div>
        
        {/* Project features - conditional rendering based on project */}
        {project.id === "repair-link-two" ? (
          <>
            {/* Improvements Section */}
            {project.improvements && project.improvements.length > 0 && (
              <div className="space-y-4">
                <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Improvements(In Progress)
                </h3>
                <ul className={`space-y-3 ${textColor} ml-5`}>
                  {project.improvements.map((improvement, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className={`${listBulletColor} mr-2 text-lg`}>↻</span>
                      <span>{improvement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* New Features Section */}
            {project.newFeatures && project.newFeatures.length > 0 && (
              <div className="space-y-4">
                <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  New Features
                </h3>
                <ul className={`space-y-3 ${textColor} ml-5`}>
                  {project.newFeatures.map((newFeature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className={`${listBulletColor} mr-2 text-lg`}>✦</span>
                      <span>{newFeature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          // Regular Features Section for other projects
          project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key Features
              </h3>
              <ul className={`space-y-3 ${textColor} ml-5`}>
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className={`${listBulletColor} mr-2 text-lg`}>✦</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )
        )}
        
        {/* Project challenges */}
        {project.challenges && (
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Challenges & Solutions
            </h3>
            <div className={`p-4 ${themeMode === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'} rounded-lg border ${themeMode === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <p className={`${textColor} whitespace-pre-line leading-relaxed`}>{project.challenges}</p>
            </div>
          </div>
        )}
        
        {/* Learning outcomes */}
        {project.learningOutcomes && (
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Learning Outcomes
            </h3>
            <div className="pl-4 border-l-2 border-emerald-500/30">
              <p className={`${textColor} italic leading-relaxed`}>{project.learningOutcomes}</p>
            </div>
          </div>
        )}
        
        {/* Video walkthrough */}
        {project.videoUrl && (
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Video Walkthrough
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe 
                src={project.videoUrl}
                title={`${project.title} Walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
        
        {/* Technologies used */}
        <div className="space-y-4">
          <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={tech} 
                className={`${techBadgeBg} px-3 py-1.5 rounded-full text-sm font-medium`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${subHeadingColor} flex items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.caption || `${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                  {screenshot.caption && (
                    <div className={`p-2 text-center text-sm ${themeMode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {screenshot.caption}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Project links */}
        <div className="pt-6 flex flex-wrap gap-3 border-t border-gray-200 dark:border-gray-800">
          
          
          {project.githubUrl && (
            <Button 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="outline"
              themeMode={themeMode}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              }
            >
              GitHub Repository
            </Button>
          )}
          
          {project.demoUrl && project.status !== 'upcoming' && (
            <Button
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              themeMode={themeMode}
              className="mt-4"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.5 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12 4.5H5A1.5 1.5 0 0 0 3.5 6v4A1.5 1.5 0 0 0 5 11.5h1a.5.5 0 0 0 0-1H5a.5.5 0 0 1-.5-.5V6z"/>
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              }
            >
              View Live Site
            </Button>
          )}
          
          {project.caseStudyUrl && (
            <Button 
              href={project.caseStudyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="ghost"
              themeMode={themeMode}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              }
            >
              Case Study
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;