import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import Button from '../common/Button';
import resumePDF from '../../assets/SN_UPDATED.pdf';

const ContactForm = ({ themeMode }) => {
  // Existing state and refs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const resumeViewerRef = useRef(null);
  
  // New state and refs for resizing
  const [dialogHeight, setDialogHeight] = useState('80vh');
  const dialogRef = useRef(null);

  // Update the resizing state to include more information
  const [resizing, setResizing] = useState({
    active: false,
    isTopHandle: false,
    startY: 0,
    startHeight: 0
  });

  // First, let's simplify the resize functions to be more robust
  const handleResizeStart = (e) => {
    e.preventDefault();
    
    // Store which handle was clicked (top or bottom)
    const isTopHandle = e.currentTarget.dataset.position === 'top';
    
    setResizing({
      active: true,
      isTopHandle,
      startY: e.type.includes('touch') ? e.touches[0].clientY : e.clientY,
      startHeight: dialogRef.current.clientHeight
    });
    
    // Change cursor style
    document.body.style.cursor = 'ns-resize';
  };

  // Simplify this to a single resize handler for both mouse and touch
  const handleResize = (e) => {
    if (!resizing.active) return;
    
    // Prevent default to stop text selection while resizing
    e.preventDefault();
    
    const currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const deltaY = currentY - resizing.startY;
    
    // If resizing from top, we need to both adjust height and reposition
    // If resizing from bottom, we just adjust height
    let newHeight;
    
    if (resizing.isTopHandle) {
      // When dragging from top, deltaY positive (dragging down) makes dialog shorter
      newHeight = resizing.startHeight - deltaY;
    } else {
      // When dragging from bottom, deltaY positive (dragging down) makes dialog taller
      newHeight = resizing.startHeight + deltaY;
    }
    
    // Minimum and maximum height constraints
    const minHeight = 300; 
    const maxHeight = window.innerHeight * 0.9;
    
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      setDialogHeight(`${newHeight}px`);
    }
  };

  // Update handleResizeEnd
  const handleResizeEnd = () => {
    setResizing({
      active: false,
      isTopHandle: false,
      startY: 0,
      startHeight: 0
    });
    document.body.style.cursor = '';
  };

  // Update useEffect to add/remove event listeners when the component mounts/unmounts
  useEffect(() => {
    // Add event listeners for mouse and touch events
    const moveHandler = (e) => handleResize(e);
    const endHandler = () => handleResizeEnd();
    
    if (resizing.active) {
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('touchmove', moveHandler);
      window.addEventListener('mouseup', endHandler);
      window.addEventListener('touchend', endHandler);
    }
    
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('mouseup', endHandler);
      window.removeEventListener('touchend', endHandler);
    };
  }, [resizing.active]);

  // Existing styling and handlers
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/70 backdrop-blur-sm border border-gray-200/70';
    
  const titleClass = `text-2xl font-bold mb-6 bg-gradient-to-r ${
    themeMode === 'dark' 
      ? 'from-emerald-400 to-teal-500' 
      : 'from-emerald-500 to-teal-600'
  } bg-clip-text text-transparent`;
  
  const labelClass = themeMode === 'dark'
    ? 'block text-sm font-medium text-gray-300 mb-1'
    : 'block text-sm font-medium text-gray-600 mb-1';
    
  const inputClass = themeMode === 'dark'
    ? 'w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-gray-400'
    : 'w-full px-4 py-2 bg-gray-100/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-gray-800 placeholder-gray-400';

  // Notice message styles
  const noticeClass = themeMode === 'dark'
    ? 'mb-6 p-4 bg-amber-800/20 border border-amber-700/30 rounded-lg text-amber-400'
    : 'mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700';
    
  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim()) errors.email = "Please enter your email";
    if (!formData.subject.trim()) errors.subject = "Please enter a subject";
    if (!formData.message.trim()) errors.message = "Please enter your message";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Mailto link that pre-fills email fields
  const createMailtoLink = () => {
    // Return empty if form validation fails
    if (!validateForm()) {
      return '#';
    }
    
    const subject = encodeURIComponent(formData.subject || 'Website Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    return `mailto:sphashepherd@gmail.com?subject=${subject}&body=${body}`;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      window.location.href = createMailtoLink();
    }
  };

  // Update toggleResumeDialog for better initial positioning
  const toggleResumeDialog = () => {
    setShowResumeDialog(!showResumeDialog);
    
    // Reset height when opening
    if (!showResumeDialog) {
      // Adjust initial height to ensure it's visible
      const windowHeight = window.innerHeight;
      const safeHeight = Math.min(windowHeight * 0.75, 650);
      setDialogHeight(`${safeHeight}px`);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Exit fullscreen mode when closing
      if (isFullscreen) {
        setIsFullscreen(false);
      }
    }
  };

  // Error text style
  const errorTextClass = themeMode === 'dark'
    ? 'text-red-400 text-xs mt-1'
    : 'text-red-500 text-xs mt-1';
    
  // Input error style
  const inputErrorClass = themeMode === 'dark'
    ? 'border-red-500/50 focus:ring-red-500/50'
    : 'border-red-400 focus:ring-red-500/50';

  // First, add a new state to track fullscreen mode
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Add a function to toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <motion.div 
        className={`${cardBg} rounded-xl p-4 md:p-8 shadow-lg`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className={titleClass}>
            Get In Touch
          </h2>

          {/* Notice about form - simplified for mobile */}
          <div className={noticeClass}>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <p className="text-sm sm:text-base">This form helps compose an email. Your default email app will open with your message.</p>
            </div>
          </div>

          {/* Make the form more mobile-friendly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${inputClass} ${formErrors.name ? inputErrorClass : ''}`}
                placeholder="John Doe"
                required
              />
              {formErrors.name && <p className={errorTextClass}>{formErrors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${inputClass} ${formErrors.email ? inputErrorClass : ''}`}
                placeholder="john@example.com"
                required
              />
              {formErrors.email && <p className={errorTextClass}>{formErrors.email}</p>}
            </div>
          </div>

          {/* Subject Input */}
          <div className="mb-6">
            <label htmlFor="subject" className={labelClass}>
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`${inputClass} ${formErrors.subject ? inputErrorClass : ''}`}
              placeholder="Job Opportunity, Project Inquiry, etc."
              required
            />
            {formErrors.subject && <p className={errorTextClass}>{formErrors.subject}</p>}
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`${inputClass} ${formErrors.message ? inputErrorClass : ''}`}
              placeholder="Your message here..."
              required
            />
            {formErrors.message && <p className={errorTextClass}>{formErrors.message}</p>}
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            themeMode={themeMode}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Send Message
          </Button>
          
          {/* Direct contact info - improved for mobile */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a 
              href="mailto:sphashepherd@gmail.com" 
              className={`flex items-center ${themeMode === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm sm:text-base">sphashepherd@gmail.com</span>
            </a>
            
            <a 
              href="tel:+27718171153" 
              className={`flex items-center ${themeMode === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm sm:text-base">+27 71 817 1153</span>
            </a>
          </div>
        </form>
      </motion.div>

      {/* Hidden button for triggering the resume viewer from ContactSection */}
      <button 
        id="resumeViewerTrigger"
        ref={resumeViewerRef}
        className="hidden"
        onClick={toggleResumeDialog}
      />

      {/* PDF Resume Viewer Dialog - Responsive version */}
      <AnimatePresence>
        {showResumeDialog && (
          // Fixed overlay with responsive padding
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={toggleResumeDialog}
            ></div>
            
            {/* MOBILE LAYOUT - Only visible on small screens */}
            <div 
              className={`relative z-10 flex flex-col sm:hidden w-full h-full ${themeMode === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl overflow-hidden`}
            >
              {/* Mobile Header */}
              <div className={`p-3 flex justify-between items-center border-b ${themeMode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center">
                  <h2 className={`text-lg font-bold ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Resume
                  </h2>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Download button - mobile */}
                  <a 
                    href={resumePDF}
                    download="Spha_Shepherd_Resume.pdf"
                    className={`flex items-center px-2 py-1.5 rounded-lg text-xs font-medium
                      ${themeMode === 'dark' 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'}
                      transition-colors`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    Download
                  </a>
                  
                  {/* Close button - mobile */}
                  <button
                    onClick={toggleResumeDialog}
                    className={`p-2 rounded-full ${themeMode === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    aria-label="Close dialog"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* PDF Content - mobile with improved fallback */}
              <div className="flex-grow overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="h-full w-full flex flex-col">
                  {/* First attempt: Try with object tag */}
                  <object 
                    data={resumePDF} 
                    type="application/pdf" 
                    className="w-full h-full"
                    aria-label="Resume PDF"
                  >
                    {/* Second attempt: If object fails, try with iframe inside the fallback content */}
                    <div className="w-full h-full">
                      <iframe
                        src={resumePDF}
                        className="w-full h-full border-0"
                        title="Resume PDF Fallback"
                        style={{ display: 'block' }}
                        onError={() => {
                          // This will run if iframe also fails
                          document.getElementById('pdfFallbackMsg').style.display = 'flex';
                        }}
                      />
                      
                      {/* Ultimate fallback: Show message with download link */}
                      <div 
                        id="pdfFallbackMsg"
                        className="absolute inset-0 flex-col items-center justify-center hidden bg-gray-100 dark:bg-gray-800 p-4 text-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className={`text-lg font-medium ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Unable to display PDF directly
                        </p>
                        <p className={`text-sm ${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                          Please download to view the resume
                        </p>
                        <a 
                          href={resumePDF}
                          download="Spha_Shepherd_Resume.pdf"
                          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                            ${themeMode === 'dark' 
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                              : 'bg-emerald-500 hover:bg-emerald-600 text-white'}
                            transition-colors mx-auto`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                          </svg>
                          Download PDF
                        </a>
                        <p className={`text-xs ${themeMode === 'dark' ? 'text-gray-500' : 'text-gray-400'} mt-4`}>
                          Mobile browsers sometimes limit PDF viewing capabilities
                        </p>
                      </div>
                    </div>
                  </object>
                </div>
              </div>
            </div>

            {/* DESKTOP LAYOUT - Hidden on small screens */}
            <div 
              ref={dialogRef}
              style={{ height: isFullscreen ? '100vh' : dialogHeight, maxHeight: isFullscreen ? '100vh' : '90vh' }}
              className={`relative z-10 flex flex-col rounded-xl ${themeMode === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl overflow-hidden
                hidden sm:flex
                ${isFullscreen ? 
                  'fixed inset-0 w-full max-w-full rounded-none' : 
                  'w-full max-w-[1000px]'}`}
            >
              {/* Only show resize handles when not in fullscreen */}
              {!isFullscreen && (
                <div 
                  data-position="top"
                  className={`absolute left-0 right-0 top-0 h-4 cursor-ns-resize z-20 flex items-center justify-center ${themeMode === 'dark' ? 'hover:bg-emerald-800/30' : 'hover:bg-emerald-100'}`}
                  onMouseDown={handleResizeStart}
                  onTouchStart={handleResizeStart}
                >
                  <div className={`w-16 h-1 rounded-full ${themeMode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                </div>
              )}

              {/* Header - desktop */}
              <div className={`p-4 pt-6 flex justify-between items-center border-b ${themeMode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full ${themeMode === 'dark' ? 'bg-emerald-600' : 'bg-emerald-500'} flex items-center justify-center mr-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className={`text-xl sm:text-2xl font-bold ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Resume
                  </h2>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={toggleFullscreen}
                    className={`flex items-center px-3 py-2 rounded-lg border text-sm font-medium
                      ${themeMode === 'dark' 
                        ? 'border-gray-600 hover:bg-gray-800 text-gray-300' 
                        : 'border-gray-300 hover:bg-gray-50 text-gray-600'}
                      transition-colors`}
                  >
                    {isFullscreen ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Exit Fullscreen
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                        View Fullscreen
                      </>
                    )}
                  </button>
                  
                  <a 
                    href={resumePDF}
                    download="Spha_Shepherd_Resume.pdf"
                    className={`flex items-center px-3 py-2 rounded-lg border text-sm font-medium
                      ${themeMode === 'dark' 
                        ? 'border-gray-600 hover:bg-gray-800 text-gray-300' 
                        : 'border-gray-300 hover:bg-gray-50 text-gray-600'}
                      transition-colors`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    Download PDF
                  </a>
                  <button
                    onClick={toggleResumeDialog}
                    className={`p-2 rounded-full ${themeMode === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    aria-label="Close dialog"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* PDF Content - desktop */}
              <div className="flex-grow overflow-hidden">
                {/* Resize hint */}
                <div className={`absolute top-2 left-4 z-20 px-3 py-1.5 rounded-md text-xs font-medium bg-opacity-90 animate-pulse pointer-events-none ${
                  themeMode === 'dark' 
                    ? 'bg-gray-800 text-emerald-400 border border-emerald-800/50' 
                    : 'bg-white text-emerald-600 border border-emerald-200 shadow-sm'
                }`}>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Drag edges to resize
                  </div>
                </div>
                
                {/* PDF Viewer - desktop uses iframe for better interactions */}
                <iframe 
                  src={resumePDF} 
                  className="w-full h-full border-0"
                  title="Resume PDF"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Footer - desktop */}
              <div className={`p-4 border-t ${themeMode === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
                <span className={`text-sm ${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Last updated: April 2025</span>
                
                <button 
                  onClick={toggleResumeDialog}
                  className={`px-4 py-2 rounded-lg text-sm font-medium
                    ${themeMode === 'dark' 
                      ? 'border border-gray-600 hover:bg-gray-800 text-gray-300' 
                      : 'border border-gray-300 hover:bg-gray-50 text-gray-600'}
                    transition-colors`}
                >
                  Close
                </button>
              </div>
              
              {/* Only show bottom resize handle when not in fullscreen */}
              {!isFullscreen && (
                <div 
                  data-position="bottom"
                  className={`absolute left-0 right-0 bottom-0 h-4 cursor-ns-resize z-20 flex items-center justify-center ${themeMode === 'dark' ? 'hover:bg-emerald-800/30' : 'hover:bg-emerald-100'}`}
                  onMouseDown={handleResizeStart}
                  onTouchStart={handleResizeStart}
                >
                  <div className={`w-16 h-1 rounded-full ${themeMode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;