import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';
import { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = ({ themeMode }) => {
  const currentYear = new Date().getFullYear();
  
  // Map social icons to React components
  const getSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <FaGithub />;
      case 'linkedin':
        return <FaLinkedinIn />;
      case 'mail':
        return <FaEnvelope />;
      default:
        return null;
    }
  };
  
  // Modern theme-specific styles
  const footerBg = themeMode === 'dark' 
    ? 'bg-gray-900 border-gray-800'
    : 'bg-gray-50 border-gray-200';
  
  const nameGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600';
  
  const linkHoverColor = themeMode === 'dark'
    ? 'hover:text-emerald-400'
    : 'hover:text-emerald-600';
    
  const socialIconBg = themeMode === 'dark'
    ? 'bg-gray-800 hover:bg-emerald-800/40 text-gray-300 hover:text-emerald-400'
    : 'bg-gray-200 hover:bg-emerald-100 text-gray-600 hover:text-emerald-700';
    
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <footer className={`${footerBg} border-t relative`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${themeMode === 'dark' ? 'bg-emerald-900/5' : 'bg-emerald-100/30'} blur-3xl`}></div>
        <div className={`absolute -bottom-16 -left-16 w-40 h-40 rounded-full ${themeMode === 'dark' ? 'bg-teal-900/5' : 'bg-teal-100/30'} blur-3xl`}></div>
      </div>
      
      {/* Newsletter signup */}
      <div className={`border-b ${themeMode === 'dark' ? 'border-gray-800/80' : 'border-gray-200/80'}`}>
        <div className="container mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 md:p-8 rounded-2xl ${themeMode === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-7/12 mb-6 lg:mb-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Stay updated with my latest projects
                </h3>
                <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm currently building my newsletter. Keep an eye out for this feature coming soon!
                </p>
              </div>
              <div className="lg:w-5/12 lg:flex-shrink-0 lg:pl-6">
                <div className="flex items-center">
                  <button
                    disabled={true}
                    className={`flex-1 px-4 py-2.5 rounded-l-lg border ${themeMode === 'dark' ? 'bg-gray-700/60 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-500'} focus:outline-none`}
                  >
                    Coming Soon
                  </button>
                  <button
                    disabled={true}
                    className={`px-5 py-2.5 rounded-r-lg font-medium ${themeMode === 'dark' ? 'bg-gray-700 text-gray-400 border border-gray-600' : 'bg-gray-200 text-gray-500 border border-gray-300'}`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10"
        >
          {/* Brand/Logo section */}
          <motion.div 
            variants={itemAnimation}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className={`text-2xl md:text-3xl font-bold ${nameGradient} mb-3`}>
              Siphamandla Ngcepe
            </h2>
            <p className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left`}>
              Building digital experiences with modern web technologies
            </p>
            
            <motion.div 
              className="mt-6 flex items-center"
              variants={itemAnimation}
            >
              <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${themeMode === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'} mr-2`}></div>
              <p className={`text-sm ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Available for new opportunities
              </p>
            </motion.div>
            
            {/* Direct contact info */}
            <div className={`mt-6 flex flex-col space-y-2 text-sm ${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <a 
                href="mailto:sphashepherd@gmail.com" 
                className={`flex items-center ${linkHoverColor} transition-colors`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                sphashepherd@gmail.com
              </a>
              <a 
                href="tel:+27718171153" 
                className={`flex items-center ${linkHoverColor} transition-colors`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +27 71 817 1153
              </a>
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className={`${themeMode === 'dark' ? 'text-white' : 'text-gray-800'} font-semibold mb-4`}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Tech Stack', href: '#tech-stack' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Journey', href: '#journey' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a 
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'} 
                    ${linkHoverColor} transition-all flex items-center`}
                >
                  <motion.span 
                    className={`opacity-0 mr-1 text-xs ${themeMode === 'dark' ? 'text-emerald-500' : 'text-emerald-600'}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ›
                  </motion.span>
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Additional Links */}
            <h3 className={`${themeMode === 'dark' ? 'text-white' : 'text-gray-800'} font-semibold mt-6 mb-4`}>Resources</h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Resume', href: '/resume.pdf' }
              ].map((link) => (
                <motion.a 
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('#') ? '' : '_blank'}
                  rel={link.href.startsWith('#') ? '' : 'noopener noreferrer'}
                  whileHover={{ x: 5 }}
                  className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'} 
                    ${linkHoverColor} transition-all flex items-center`}
                >
                  <motion.span 
                    className={`opacity-0 mr-1 text-xs ${themeMode === 'dark' ? 'text-emerald-500' : 'text-emerald-600'}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ›
                  </motion.span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Connect */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className={`${themeMode === 'dark' ? 'text-white' : 'text-gray-800'} font-semibold mb-4`}>Connect With Me</h3>
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -3 }}
                  className={`p-2.5 rounded-full transition-all ${socialIconBg}`}
                  aria-label={social.name}
                  style={{ color: themeMode === 'dark' ? undefined : social.color + '80' }}
                >
                  <span className="text-lg">
                    {getSocialIcon(social.icon)}
                  </span>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemAnimation}
              className={`mt-6 p-4 rounded-lg ${themeMode === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-white/80 border border-gray-200/80'} 
                text-sm ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <p>Have a project in mind?</p>
              <a 
                href="#contact" 
                className={`font-medium ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'} 
                  hover:underline`}
              >
                Let's collaborate →
              </a>
            </motion.div>
            
            {/* Tech Stack Badge */}
            <motion.div
              variants={itemAnimation}
              className="mt-6"
            >
              <div className={`flex flex-wrap items-center gap-2 p-3 rounded-lg ${themeMode === 'dark' ? 'bg-gray-800/40' : 'bg-gray-100/60'}`}>
                <span className={`text-xs px-2 py-1 rounded ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Backend</span>
                <span className={`text-xs px-2 py-1 rounded ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Frontend</span>
                <span className={`text-xs px-2 py-1 rounded ${themeMode === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Fullstack</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Copyright section - simplified without scroll to top button */}
        <div className={`mt-12 pt-6 ${themeMode === 'dark' ? 'border-gray-800' : 'border-gray-200'} border-t`}>
          <motion.div
            variants={itemAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className={`${themeMode === 'dark' ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
              © {currentYear} Siphamandla Ngcepe. All rights reserved.
            </p>
            <motion.p 
              className={`${themeMode === 'dark' ? 'text-gray-600' : 'text-gray-500'} text-xs mt-2 flex items-center justify-center`}
              whileHover={{ scale: 1.02 }}
            >
              Built with 
              <span role="img" aria-label="heart" className="text-red-500 mx-1">
                ❤️
              </span> 
              using React and Tailwind CSS
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;