import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaGavel, FaUsers, FaLaptopCode, FaGithub, FaReact, FaJava, FaTimes } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTailwindcss, SiVite, SiFigma, SiPostman, SiNetlify, SiRender } from 'react-icons/si';
import SectionHeading from '../common/SectionHeading';

// Modal component for displaying detailed information
const DetailModal = ({ isOpen, onClose, project, themeMode }) => {
  if (!isOpen) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 30, stiffness: 500 } }
  };

  const bgColor = themeMode === 'dark' 
    ? 'bg-gray-900' 
    : 'bg-white';
  
  const borderColor = themeMode === 'dark'
    ? 'border-gray-700'
    : 'border-gray-200';

  const isLinkaBadge = project.title === 'Linka IDP';
  const badgeColor = isLinkaBadge
    ? themeMode === 'dark' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
    : themeMode === 'dark' ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-700';

  const techIconBg = themeMode === 'dark'
    ? 'bg-gray-700 text-gray-300'
    : 'bg-gray-200 text-gray-700';

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div 
          className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${bgColor} ${borderColor} border`}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full z-10 ${
              themeMode === 'dark' 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${badgeColor}`}>
                {isLinkaBadge ? <FaTrophy className="text-2xl" /> : <FaGavel className="text-2xl" />}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className={`mt-1 px-3 py-1 rounded-full text-sm inline-block ${badgeColor}`}>
                  {isLinkaBadge ? '1st Place Winner' : 'Legal Tech Innovation'}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">{project.subtitle}</h4>
              <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {project.description}
              </p>
            </div>

            {project.features && (
              <div className="mb-6">
                <h5 className="font-semibold mb-2">{isLinkaBadge ? 'Key Features:' : 'Project Scope:'}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        isLinkaBadge 
                          ? themeMode === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                          : themeMode === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.techStack && (
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Tech Stack:</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className={`p-2 rounded-md ${techIconBg} flex items-center`}>
                      {tech.icon} <span className="ml-1">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.achievements && (
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Achievements:</h5>
                <ul className={`list-disc pl-5 ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.status && (
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Current Status:</h5>
                <ul className={`list-disc pl-5 ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.status.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.tags && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                    themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isLinkaBadge
                    ? themeMode === 'dark' 
                      ? 'bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800' 
                      : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                    : themeMode === 'dark' 
                      ? 'bg-blue-900/50 text-blue-400 hover:bg-blue-800' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {isLinkaBadge ? 'View Live Demo' : 'View Prototype'}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AchievementsSection = ({ themeMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardBg = themeMode === 'dark' ? 'bg-gray-800/70' : 'bg-white/90';
  const cardBorder = themeMode === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const cardHover = themeMode === 'dark' 
    ? 'hover:bg-gray-700/80 hover:border-emerald-700' 
    : 'hover:bg-gray-50 hover:border-emerald-500';
  
  const linkaData = {
    title: "Linka IDP",
    subtitle: "Integrated Development Plan Participation Portal",
    description: "A civic tech platform enhancing citizen participation in municipal planning through a digital solution. Built to digitize and democratize the IDP process by providing a scalable, user-friendly platform enabling transparency and real-time feedback across municipal wards.",
    features: [
      "Ward-based dashboards",
      "Real-time feedback tracking",
      "View & vote on IDP plans",
      "Admin management panel",
      "Submit issues and comments",
      "Mobile-friendly, scalable design"
    ],
    techStack: [
      { icon: <FaReact className="mr-1" />, name: "React" },
      { icon: <SiTailwindcss className="mr-1" />, name: "Tailwind" },
      { icon: <SiVite className="mr-1" />, name: "Vite" },
      { icon: <FaJava className="mr-1" />, name: "Java" },
      { icon: <SiSpringboot className="mr-1" />, name: "Spring Boot" },
      { icon: <SiMysql className="mr-1" />, name: "MySQL" },
      { icon: <SiNetlify className="mr-1" />, name: "Netlify" },
      { icon: <SiRender className="mr-1" />, name: "Render" }
    ],
    achievements: [
      "Built and presented to local officials and mayor",
      "Won 1st place at the Midvaal Digital Hackathon 2025",
      "Recognized by industry professionals for real-world impact"
    ],
    demoLink: "https://linka-idp.netlify.app"
  };

  const psnData = {
    title: "PSN Attorneys",
    subtitle: "Legal Practice Management System",
    description: "Developing prototypes for PSN Attorneys law firm to modernize their systems. Currently in discussions to join their digital transformation initiative to improve client service delivery and internal workflows.",
    features: [
      "Client portal integration",
      "Document management system",
      "Case tracking dashboard",
      "Secure client communications"
    ],
    status: [
      "Completed initial prototype demonstrating core functionality",
      "Received positive feedback from firm partners",
      "In discussions to formalize development partnership",
      "Planning phased implementation approach"
    ],
    tags: [
      { icon: <FaUsers className="mr-1" />, text: "Client-centered design" },
      { icon: <FaLaptopCode className="mr-1" />, text: "Custom development" },
      { icon: <FaGavel className="mr-1" />, text: "Legal tech innovation" }
    ],
    demoLink: "https://psn-demo.netlify.app"
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading 
        title="Achievements" 
        subtitle="Showcasing recent successes and professional opportunities" 
        themeMode={themeMode}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Hackathon Achievement Card */}
        <motion.div 
          className={`rounded-xl border ${cardBg} ${cardBorder} overflow-hidden shadow-lg transition-all duration-300 ${cardHover} group h-full`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-full flex flex-col">
            {/* Card Header */}
            <div className={`p-4 ${themeMode === 'dark' ? 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30' : 'bg-gradient-to-r from-emerald-50 to-teal-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${themeMode === 'dark' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-200 text-emerald-700'} mr-3`}>
                    <FaTrophy className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold">Midvaal Digital Hackathon</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${themeMode === 'dark' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                  May 2025
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-grow">
              <h4 className="text-xl font-semibold mb-2">Linka IDP</h4>
              <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs ${themeMode === 'dark' ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-700'}`}>
                1st Place Winner
              </div>
              <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                A civic tech platform enhancing citizen participation in municipal planning through a digital solution.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <div className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <FaReact className="mr-1" /> React
                </div>
                <div className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <SiTailwindcss className="mr-1" /> Tailwind
                </div>
                <div className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <FaJava className="mr-1" /> Java
                </div>
                <div className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <SiSpringboot className="mr-1" /> Spring
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 pb-5 mt-auto flex flex-col sm:flex-row gap-3 justify-between">
              <button 
                onClick={() => openModal(linkaData)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  themeMode === 'dark' 
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                View Details
              </button>
              <a 
                href="https://linka-idp.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-center ${
                  themeMode === 'dark' 
                    ? 'bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800' 
                    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* PSN Attorneys Project Card */}
        <motion.div 
          className={`rounded-xl border ${cardBg} ${cardBorder} overflow-hidden shadow-lg transition-all duration-300 ${cardHover} group h-full`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-full flex flex-col">
            {/* Card Header */}
            <div className={`p-4 ${themeMode === 'dark' ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${themeMode === 'dark' ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-200 text-blue-700'} mr-3`}>
                    <FaGavel className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold">PSN Attorneys Integration</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${themeMode === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                  <FaLaptopCode className="inline mr-1 text-xs" /> In Progress
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-grow">
              <h4 className="text-xl font-semibold mb-2">Legal Practice Management</h4>
              <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs ${themeMode === 'dark' ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-700'}`}>
                Legal Tech Innovation
              </div>
              <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                Developing prototypes for PSN Attorneys law firm to modernize their systems and improve client service delivery.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <FaUsers className="mr-1" /> Client-centered
                </span>
                <span className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <FaLaptopCode className="mr-1" /> Custom dev
                </span>
                <span className={`px-2 py-1 rounded-md text-xs ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} flex items-center`}>
                  <FaGavel className="mr-1" /> Legal tech
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 pb-5 mt-auto flex flex-col sm:flex-row gap-3 justify-between">
              <button 
                onClick={() => openModal(psnData)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  themeMode === 'dark' 
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                View Details
              </button>
              <a 
                href="https://psn-demo.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-center ${
                  themeMode === 'dark' 
                    ? 'bg-blue-900/50 text-blue-400 hover:bg-blue-800' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                View Prototype
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
        themeMode={themeMode} 
      />
    </div>
  );
};

export default AchievementsSection;