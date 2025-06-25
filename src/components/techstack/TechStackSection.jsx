import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import TechIcon from './TechIcon';
import { staggerContainer, fadeIn } from '../../utils/animations';
import { 
  FaJava, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDocker, 
  FaAws, 
  FaMicrosoft,
  FaServer
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiTypescript, 
  SiRedis, 
  SiTailwindcss,
  SiGraphql,
  SiNextdotjs,
  SiReact, // Use SiReact instead of SiReactnative
  SiMongodb,
  SiKubernetes
} from 'react-icons/si';

// Updated Tech Stack data with real icons
const techStackData = [
  {
    id: 1,
    name: "Java",
    icon: <FaJava />,
    color: "#f89820",
    description: "Core language for backend development with 3+ years of experience in building robust applications.",
    proficiency: "intermediate",
    category: "Backend"
  },
  {
    id: 2,
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "#6db33f",
    description: "Framework for creating production-ready Spring applications with minimal configuration.",
    proficiency: "intermediate",
    category: "Backend"
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
    description: "Library for building interactive user interfaces with reusable components.",
    proficiency: "intermediate",
    category: "Frontend"
  },
  {
    id: 4,
    name: "MySQL",
    icon: <SiMysql />,
    color: "#4479A1",
    description: "Relational database for storing and managing application data.",
    proficiency: "intermediate",
    category: "Database"
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F0DB4F",
    description: "Core language for front-end development and browser interactions.",
    proficiency: "intermediate",
    category: "Frontend"
  },
  {
    id: 6,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
    description: "Strongly typed superset of JavaScript for more maintainable code.",
    proficiency: "beginner",
    category: "Frontend"
  },
  {
    id: 7,
    name: "Docker",
    icon: <FaDocker />,
    color: "#2496ED",
    description: "Platform for developing, shipping, and running applications in containers.",
    proficiency: "beginner",
    category: "DevOps"
  },
  {
    id: 8,
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    description: "Version control system for tracking changes and collaborating on code.",
    proficiency: "intermediate",
    category: "Tools"
  },
  {
    id: 9,
    name: "Redis",
    icon: <SiRedis />,
    color: "#DC382D",
    description: "In-memory data structure store used as database, cache, and message broker.",
    proficiency: "beginner",
    category: "Database"
  },
  {
    id: 10,
    name: "AWS",
    icon: <FaAws />,
    color: "#FF9900",
    description: "Cloud platform for hosting applications and services.",
    proficiency: "beginner",
    category: "Cloud"
  },
  {
    id: 11,
    name: "Azure",
    icon: <FaMicrosoft />,
    color: "#0078D4",
    description: "Microsoft's cloud computing service for building and managing applications.",
    proficiency: "beginner",
    category: "Cloud"
  },
  {
    id: 12,
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#E34F26",
    description: "Standard markup language for creating web pages and applications.",
    proficiency: "advanced",
    category: "Frontend"
  },
  {
    id: 13,
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    description: "Style sheet language for designing and laying out web pages.",
    proficiency: "advanced",
    category: "Frontend"
  },
  {
    id: 14,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    description: "Utility-first CSS framework for rapid UI development.",
    proficiency: "intermediate",
    category: "Frontend"
  },
  {
    id: 15,
    name: "REST API",
    icon: <FaServer />,
    color: "#4CAF50",
    description: "Architectural style for designing networked applications.",
    proficiency: "intermediate",
    category: "Backend"
  }
];

// Updated Technologies currently learning with real icons
const learningTechData = [
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    color: "#E535AB",
    description: "Query language for APIs and runtime for fulfilling queries with existing data."
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    description: "React framework for production with server-side rendering and static site generation."
  },
  {
    name: "React Native",
    icon: <SiReact />, // Use SiReact for React Native too
    color: "#61DAFB",
    description: "Framework for building native mobile applications using React."
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    description: "NoSQL database program that uses JSON-like documents with optional schemas."
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "#326CE5",
    description: "Open-source container orchestration system for automating software deployment and scaling."
  }
];

// Categorize tech stack with added All category
const categories = [
  "All",
  ...new Set(techStackData.map(tech => tech.category))
].sort((a, b) => a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b));

const TechStackSection = ({ themeMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTech, setFilteredTech] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  
  // Filter tech stack based on category and search query
  useEffect(() => {
    let filtered = selectedCategory === "All" 
      ? techStackData 
      : techStackData.filter(tech => tech.category === selectedCategory);
      
    if (searchQuery) {
      filtered = filtered.filter(tech => 
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tech.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredTech(filtered);
  }, [selectedCategory, searchQuery]);
  
  // Theme-specific styles with emerald/teal theme
  const sectionBg = themeMode === 'dark' 
    ? 'bg-gray-900/80' 
    : 'bg-gray-50/80';
  
  const filterBgActive = 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-600/20';
  const filterBgInactive = themeMode === 'dark'
    ? 'bg-gray-800 text-gray-400 hover:text-emerald-400 hover:bg-gray-800/70'
    : 'bg-white text-gray-600 border border-gray-200 hover:text-emerald-600 hover:bg-gray-100/80';
    
  const learningCardBg = themeMode === 'dark'
    ? 'bg-gray-800/50 backdrop-blur-md border border-emerald-800/30'
    : 'bg-white/60 backdrop-blur-md border border-emerald-200/60';
  
  const learningCardHeading = themeMode === 'dark'
    ? 'text-emerald-400'
    : 'text-emerald-600';
    
  const learningPillBg = themeMode === 'dark'
    ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-800/50'
    : 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    
  const searchBg = themeMode === 'dark'
    ? 'bg-gray-800/80 text-gray-300 border-gray-700 focus:border-emerald-500/50'
    : 'bg-white/90 text-gray-700 border-gray-300 focus:border-emerald-500/50';
  
  const noResultsBg = themeMode === 'dark'
    ? 'bg-gray-800/50 border-gray-700/50 text-gray-400'
    : 'bg-gray-50/50 border-gray-200/50 text-gray-500';
    
  const searchIconColor = themeMode === 'dark'
    ? 'text-emerald-500/70'
    : 'text-emerald-600/70';
  
  return (
    <section id="tech-stack" className={`py-16 md:py-24 ${sectionBg} relative overflow-hidden`}>
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${themeMode === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`}
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
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
            title="Tech Stack" 
            subtitle="Technologies and tools I *work with* daily" 
            themeMode={themeMode}
            accent="emerald"
          />
          
          {/* Search and filter controls */}
          <motion.div variants={fadeIn('up', 0.2)} className="mb-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              {/* Search toggle button */}
              <motion.button 
                onClick={() => setShowSearch(!showSearch)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  showSearch ? filterBgActive : filterBgInactive
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {showSearch ? 'Hide Search' : 'Search Tech'}
              </motion.button>
              
              {/* Search input */}
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="w-full md:max-w-md"
                  >
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${searchIconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search technologies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full py-2 pl-10 pr-4 rounded-full border ${searchBg} transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? filterBgActive
                      : filterBgInactive
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Tech icons grid with improved animation */}
          <AnimatePresence mode="wait">
            {filteredTech.length > 0 ? (
              <motion.div 
                key="tech-grid"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                variants={staggerContainer(0.05)}
                initial="hidden"
                animate="show"
              >
                {filteredTech.map((tech, index) => (
                  <motion.div key={tech.id} variants={fadeIn('up', 0.1)}>
                    <TechIcon
                      name={tech.name}
                      icon={tech.icon}
                      color={tech.color}
                      description={tech.description}
                      proficiency={tech.proficiency}
                      category={tech.category}
                      index={index}
                      themeMode={themeMode}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`py-16 px-6 my-8 rounded-xl border ${noResultsBg} text-center`}
              >
                <div className="inline-block mb-4 p-3 rounded-full bg-gray-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">No technologies found</h3>
                <p>Try changing your search or filter criteria</p>
                <motion.button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-4 px-4 py-2 rounded-full text-sm ${
                    themeMode === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Reset filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Learning next with enhanced styling */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className={`mt-16 ${learningCardBg} rounded-xl p-8 max-w-3xl mx-auto relative overflow-hidden`}
          >
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/20 blur-2xl"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/30 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${learningCardHeading}`}>Currently Learning</h3>
            </div>
            
            {/* Enhanced learning tech items */}
            <div className="flex flex-wrap gap-3">
              {learningTechData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, boxShadow: `0 4px 12px ${skill.color}25` }}
                  className={`
                    px-4 py-2 ${learningPillBg} rounded-full 
                    flex items-center gap-2 transition-all
                    cursor-pointer
                  `}
                  title={skill.description}
                >
                  <span className="text-lg" style={{ color: skill.color }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;