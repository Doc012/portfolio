import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  href, 
  type = "button", 
  disabled = false, 
  onClick, 
  className = "",
  themeMode = "dark",
  withArrow = false,
  as, // Add as prop to allow rendering as different elements
  icon, // Add icon prop to handle icon buttons more easily
  fullWidth, // Extract fullWidth prop
  ...props 
}) => {
  // Define variants based on theme with emerald/teal colors
  const variants = {
    primary: themeMode === 'dark'
      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md shadow-emerald-700/20"
      : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md shadow-emerald-600/10",
    
    secondary: themeMode === 'dark'
      ? "bg-gray-800 hover:bg-gray-700 text-emerald-400 shadow-md shadow-gray-900/30"
      : "bg-gray-100 hover:bg-gray-200 text-emerald-700 shadow-sm shadow-gray-300/30",
    
    outline: themeMode === 'dark'
      ? "bg-transparent border border-emerald-500/70 hover:bg-emerald-500/10 text-emerald-400" 
      : "bg-transparent border border-emerald-600 hover:bg-emerald-50 text-emerald-700",
    
    ghost: themeMode === 'dark'
      ? "bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-emerald-400"
      : "bg-transparent hover:bg-gray-100/80 text-gray-700 hover:text-emerald-700",
    
    link: themeMode === 'dark'
      ? "bg-transparent p-0 text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline shadow-none transform-none"
      : "bg-transparent p-0 text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline shadow-none transform-none"
  };
  
  // Define sizes with improved spacing
  const sizes = {
    xs: "px-3 py-1 text-xs",
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
    xl: "px-10 py-4 text-xl"
  };
  
  // Base classes for all buttons with enhanced focus states
  const baseClasses = "rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center focus:outline-none";
  
  // Specialized focus ring based on variant
  const focusRing = variant === 'primary' 
    ? "focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500/70" 
    : variant === 'outline'
      ? "focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500/50"
      : variant === 'ghost' || variant === 'link'
        ? "focus:ring-0"
        : "focus:ring-2 focus:ring-offset-2 focus:ring-gray-500/50";
  
  // Disabled state with improved styling
  const disabledClasses = disabled 
    ? "opacity-60 cursor-not-allowed saturate-50"
    : "transform hover:-translate-y-0.5 active:translate-y-0";
    
  // Full width option
  const fullWidthClass = fullWidth ? "w-full" : "";
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${focusRing} ${disabledClasses} ${fullWidthClass} ${className}`;
  
  // Arrow icon for buttons that need it
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${
        themeMode === 'dark' ? 'text-emerald-300' : 'text-emerald-50'
      }`} 
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  // Button animations
  const buttonVariants = {
    hover: { 
      scale: disabled ? 1 : 1.03, 
      y: disabled ? 0 : -2,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: disabled ? 1 : 0.98,
      y: disabled ? 0 : 1
    },
    initial: {
      scale: 1,
      y: 0
    }
  };

  // Content to be rendered inside the button/link
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {withArrow && <ArrowIcon />}
    </>
  );

  // Extract Framer Motion specific props to avoid DOM warnings
  const motionProps = !disabled ? {
    initial: "initial",
    whileHover: "hover",
    whileTap: "tap",
    variants: buttonVariants,
  } : {};
  
  // Handle non-motion props separately
  const domProps = {
    className: `${buttonClasses} group`,
    ...(href && { href }),
    ...(!as && !href && { type, disabled, onClick }),
    ...props
  };

  // Remove any motion-specific props from regular props to avoid warnings
  delete domProps.initial;
  delete domProps.whileHover;
  delete domProps.whileTap;
  delete domProps.variants;
  delete domProps.fullWidth;

  // Determine which element to render
  const Component = as || (href ? motion.a : motion.button);

  // Render the appropriate component based on as, href, or default
  return (
    <Component 
      {...domProps}
      {...motionProps}
    >
      {content}
    </Component>
  );
};

// Add a special Pill variant
export const PillButton = (props) => (
  <Button {...props} className={`rounded-full ${props.className || ''}`} />
);

// Add an IconButton variant
export const IconButton = ({ 
  icon, 
  size = "md", 
  themeMode = "dark", 
  variant = "primary", 
  className = "",
  ...props 
}) => {
  // Define sizes specifically for icon buttons
  const iconSizes = {
    xs: "p-1.5 text-xs",
    sm: "p-2 text-sm",
    md: "p-2.5 text-base",
    lg: "p-3 text-lg",
    xl: "p-3.5 text-xl"
  };
  
  return (
    <Button 
      size={size}
      themeMode={themeMode}
      variant={variant}
      className={`${iconSizes[size]} ${className}`}
      icon={icon}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default Button;