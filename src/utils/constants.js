/**
 * Constants used throughout the application
 */

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '#home', icon: 'home' },
  { name: 'About Me', href: '#about', icon: 'user' },
  { name: 'Journey', href: '#journey', icon: 'map' },
  { name: 'Tech Stack', href: '#tech-stack', icon: 'code' },
  { name: 'Projects', href: '#projects', icon: 'briefcase' },
  { name: 'Contact', href: '#contact', icon: 'mail' },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Doc012',
    icon: 'github',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/siphamandla-ngcepe-a690ab20b',
    icon: 'linkedin',
    color: '#0077B5'
  },
  {
    name: 'Email',
    url: 'sphashepherd@gmail.com',
    icon: 'mail',
    color: '#D44638'
  }
];

// Contact form fields
export const CONTACT_FORM_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Job Opportunity', required: true },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'I would like to discuss...', required: true },
];

// Site metadata
export const SITE_METADATA = {
  title: 'Siphamandla Ngcepe - Software Developer Portfolio',
  description: 'Siphamandla Ngcepe is an aspiring full-stack Java developer showcasing projects, skills, and professional journey.',
  author: 'Siphamandla Ngcepe',
  siteUrl: 'https://your-portfolio-url.com',
  twitterHandle: '@yourtwitterhandle',
  keywords: 'Java Developer, Full Stack Developer, Web Developer, Portfolio, React, Spring Boot'
};

// Theme settings
export const THEME = {
  colors: {
    primary: {
      light: '#6d28d9',
      main: '#5b21b6',
      dark: '#4c1d95'
    },
    secondary: {
      light: '#3b82f6',
      main: '#2563eb',
      dark: '#1d4ed8'
    },
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    background: {
      light: '#f9fafb',
      main: '#f3f4f6',
      dark: '#111827'
    }
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  animation: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s'
  }
};

// Project categories
export const PROJECT_CATEGORIES = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'Mobile',
  'API',
  'React',
  'Java'
];

// Tech stack categories
export const TECH_CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
  'Cloud',
  'Testing'
];

// Frontend routes
export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAILS: '/projects/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
  RESUME: '/resume',
  NOT_FOUND: '/404'
};

// Email service keys (replace with your actual service)
export const EMAIL_SERVICE = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  USER_ID: 'YOUR_USER_ID'
};