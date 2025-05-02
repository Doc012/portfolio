import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Modal = ({ isOpen, onClose, title, children, size = 'md', themeMode, fullHeight = false }) => {
  const modalRef = useRef();
  
  // Theme-specific styles
  const overlayBg = themeMode === 'dark' 
    ? 'bg-gray-900/80 backdrop-blur-sm' 
    : 'bg-gray-700/50 backdrop-blur-sm';
    
  const modalBg = themeMode === 'dark'
    ? 'bg-gray-800 border border-gray-700'
    : 'bg-white border border-gray-200';
    
  const titleColor = themeMode === 'dark'
    ? 'text-white'
    : 'text-gray-800';
    
  const closeButtonColor = themeMode === 'dark'
    ? 'text-gray-400 hover:text-white'
    : 'text-gray-600 hover:text-gray-900';
  
  // Size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
    full: 'max-w-full mx-4'
  };
  
  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      // Restore body scroll when modal closes
      if (isOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, onClose]);
  
  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayBg}`}
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
            className={`${modalBg} ${sizeClasses[size]} w-full rounded-lg shadow-xl overflow-hidden`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
              <h3 className={`text-xl font-bold ${titleColor}`}>{title}</h3>
              <button
                onClick={onClose}
                className={`p-1 rounded-full ${closeButtonColor} focus:outline-none`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {children}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 border-t border-gray-800">
              <Button
                variant="ghost"
                size="md"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;