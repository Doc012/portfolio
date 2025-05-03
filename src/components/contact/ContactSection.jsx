import { motion } from 'framer-motion';
import { SectionHeadingWithIcon } from '../common/SectionHeading';
import ContactForm from './ContactForm';
import SocialIcons from '../common/SocialIcons';
import { fadeIn, staggerContainer } from '../../utils/animations';
import resumePDF from '../../assets/SN_UPDATED.pdf';

const ContactSection = ({ themeMode }) => {
  // Theme-specific styles updated for emerald/teal theme
  const sectionBg = themeMode === 'dark'
    ? 'bg-gray-900'
    : 'bg-gray-50';
    
  const cardBg = themeMode === 'dark'
    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/70 backdrop-blur-sm border border-gray-200/70';
    
  const gradientHeading = themeMode === 'dark'
    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent';
  
  const labelColor = themeMode === 'dark'
    ? 'text-gray-300'
    : 'text-gray-600';
    
  const valueColor = themeMode === 'dark'
    ? 'text-white'
    : 'text-gray-800';
    
  const iconBgColors = {
    email: themeMode === 'dark' ? 'bg-emerald-900/40' : 'bg-emerald-100',
    phone: themeMode === 'dark' ? 'bg-teal-900/40' : 'bg-teal-100',
    location: themeMode === 'dark' ? 'bg-emerald-900/30' : 'bg-emerald-50',
    availability: themeMode === 'dark' ? 'bg-teal-900/30' : 'bg-teal-50'
  };
  
  const iconColors = {
    email: themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
    phone: themeMode === 'dark' ? 'text-teal-400' : 'text-teal-600',
    location: themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
    availability: themeMode === 'dark' ? 'text-teal-400' : 'text-teal-600'
  };
  
  const linkHoverColor = themeMode === 'dark'
    ? 'hover:text-emerald-400'
    : 'hover:text-emerald-600';
    
  const resumeBtnBg = themeMode === 'dark'
    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white'
    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white';
    
  const backgroundPattern = themeMode === 'dark'
    ? 'opacity-10'
    : 'opacity-5';

  return (
    <section id="contact" className={`py-16 md:py-24 ${sectionBg} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
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
          className="max-w-6xl mx-auto"
        >
          <SectionHeadingWithIcon 
            title="Contact Me" 
            subtitle="Let's connect and discuss *opportunities*"
            themeMode={themeMode}
            accent="emerald"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            iconBackground="emerald"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
            {/* Contact Info */}
            <motion.div 
              variants={fadeIn('right', 0.2)}
              className="lg:col-span-2 space-y-8"
            >
              <div className={`${cardBg} rounded-xl p-8 shadow-lg h-full relative overflow-hidden`}>
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 rounded-full blur-2xl"></div>
                
                <h3 className={`text-2xl font-bold mb-6 ${gradientHeading} relative z-10`}>
                  Contact Details
                </h3>
                
                {/* Contact Information */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${iconBgColors.email} flex items-center justify-center shadow-sm`}>
                      <motion.svg 
                        whileHover={{ rotate: 15 }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${iconColors.email}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </motion.svg>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${labelColor}`}>Email</p>
                      <a 
                        href="mailto:sphashepherd@gmail.com" 
                        className={`text-base ${valueColor} ${linkHoverColor} transition-colors group flex items-center`}
                      >
                        sphashepherd@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${iconBgColors.phone} flex items-center justify-center shadow-sm`}>
                      <motion.svg 
                        whileHover={{ rotate: 15 }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${iconColors.phone}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </motion.svg>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${labelColor}`}>Phone</p>
                      <a 
                        href="tel:+27718171153" 
                        className={`text-base ${valueColor} ${linkHoverColor} transition-colors group flex items-center`}
                      >
                        +27 71 817 1153
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${iconBgColors.location} flex items-center justify-center shadow-sm`}>
                      <motion.svg 
                        whileHover={{ rotate: 15 }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${iconColors.location}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </motion.svg>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${labelColor}`}>Location</p>
                      <p className={`text-base ${valueColor}`}>
                        South Africa (Willing to relocate)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${iconBgColors.availability} flex items-center justify-center shadow-sm`}>
                      <motion.svg 
                        whileHover={{ rotate: 15 }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${iconColors.availability}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </motion.svg>
                    </div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${labelColor}`}>Availability</p>
                      <p className={`text-base ${valueColor}`}>
                        Open to junior developer positions
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 relative z-10">
                  <p className={`text-sm font-medium ${labelColor} mb-4`}>Connect with me on social media</p>
                  <SocialIcons withText size="md" themeMode={themeMode} />
                </div>
                
                {/* QR code section removed */}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              variants={fadeIn('left', 0.2)}
              className="lg:col-span-3"
            >
              <ContactForm themeMode={themeMode} />
            </motion.div>
          </div>

          {/* Resume download */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="text-center mt-16"
          >
            <p className={themeMode === 'dark' ? 'text-gray-400 mb-3' : 'text-gray-600 mb-3'}>
              Want to review my qualifications?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href={resumePDF}
                download="Spha_Shepherd_Resume.pdf"
                className={`inline-flex items-center px-6 py-3 rounded-full ${resumeBtnBg} font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-emerald-500/10`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <button 
                onClick={() => document.getElementById('resumeViewerTrigger')?.click()}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg
                  ${themeMode === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:shadow-emerald-500/5' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-emerald-500/5'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </button>
            </div>
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            variants={fadeIn('up', 2)}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className={`rounded-xl overflow-hidden ${cardBg} shadow-lg`}>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${gradientHeading} mb-6`}>Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className={`font-semibold mb-2 ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>What types of projects are you looking for?</h4>
                    <p className={themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      I'm interested in full-stack web development projects, especially those using Java, Spring Boot, and React.
                      I'm always eager to learn new technologies and frameworks.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold mb-2 ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Are you available for remote work?</h4>
                    <p className={themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Yes, I'm available for remote work and also open to relocating for the right opportunity.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold mb-2 ${themeMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>How quickly do you respond to inquiries?</h4>
                    <p className={themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      I typically respond to all messages within 24-48 hours. For urgent matters, phone is the fastest way to reach me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Map or additional visual element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className={`absolute inset-0 -z-20 ${backgroundPattern}`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0wLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMTcgMTdjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0wLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMTkgNTFjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0wLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMC0xN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6TTIgNTFjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0wLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMC0xN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-fixed"></div>
      </motion.div>
    </section>
  );
};

export default ContactSection;