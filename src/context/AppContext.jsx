import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Theme state (light/dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Active section for navbar/scrollspy
  const [activeSection, setActiveSection] = useState('home');
  
  // Screen size detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Loading state - Keeping this state but removing the UI
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal state for project details, contact form success, etc.
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    data: null
  });

  // Scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Form submission status
  const [formSubmission, setFormSubmission] = useState({
    status: null, // 'idle', 'submitting', 'success', 'error'
    message: null
  });
  
  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  // Open modal with type and data
  const openModal = (type, data = null) => {
    setModalState({
      isOpen: true,
      type,
      data
    });
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null
    });
    // Restore body scroll
    document.body.style.overflow = 'auto';
  };
  
  // Form submission handler
  const handleFormSubmission = async (formData, type = 'contact') => {
    setFormSubmission({
      status: 'submitting',
      message: 'Sending your message...'
    });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setFormSubmission({
        status: 'success',
        message: type === 'contact' 
          ? 'Thank you! Your message has been sent successfully.' 
          : 'Your submission has been received.'
      });
      
      // Reset after delay
      setTimeout(() => {
        setFormSubmission({
          status: 'idle',
          message: null
        });
      }, 3000);
      
      return { success: true };
    } catch (error) {
      setFormSubmission({
        status: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
      
      return { success: false, error };
    }
  };
  
  // Update scroll progress
  const updateScrollProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    setScrollProgress(scrolled);
  };
  
  // Detect active section based on scroll position
  const detectActiveSection = () => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    
    if (sections.length === 0) return;
    
    // Get the vertical center of the viewport
    const viewportMiddle = window.innerHeight / 2;
    
    // Sort sections by their distance from the center of the viewport
    const sectionsByDistance = sections.map(section => {
      const rect = section.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;
      const distanceToMiddle = Math.abs(middle - viewportMiddle);
      return { id: section.id, distance: distanceToMiddle };
    });
    
    // Sort by distance (closest first)
    sectionsByDistance.sort((a, b) => a.distance - b.distance);
    
    // The closest section is the active one
    const closestSection = sectionsByDistance[0].id;
    
    // Only update if it's different
    if (closestSection !== activeSection) {
      setActiveSection(closestSection);
    }
  };
  
  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Adjust this to match your navbar height
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Also update the active section directly for immediate feedback
      setActiveSection(sectionId);
    }
  };
  
  // Set up event listeners
  useEffect(() => {
    // Check if is mobile on mount
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial checks
    checkIfMobile();
    updateScrollProgress();
    detectActiveSection();
    
    // Set up listeners
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('scroll', detectActiveSection);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Clean up listeners
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('scroll', detectActiveSection);
      clearTimeout(timer);
    };
  }, []);
  
  // Apply theme to the document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Context value
  const value = {
    isDarkMode,
    toggleTheme,
    activeSection,
    setActiveSection,
    isMobile,
    isLoading,
    setIsLoading, // Export this to control loading state from App.jsx
    modalState,
    openModal,
    closeModal,
    scrollProgress,
    setScrollProgress,
    formSubmission,
    handleFormSubmission,
    scrollToSection,
    themeMode: isDarkMode ? 'dark' : 'light'
  };
  
  // Return children directly without conditional rendering
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;