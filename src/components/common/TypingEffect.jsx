import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ 
  texts = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayAfterType = 1500,
  className = '',
  cursorColor = 'text-purple-400' 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const typing = setTimeout(() => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentText.substring(0, currentText.length - 1));
        
        // If all text is deleted, start typing the next text
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        // Typing text
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        // If all text is typed, start deleting after delay
        if (currentText === currentFullText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterType);
          return;
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(typing);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayAfterType]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div>{currentText}</div>
      <motion.span
        className={`inline-block w-1 h-6 ${cursorColor} ml-1`}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </div>
  );
};

export default TypingEffect;