import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeIn, staggerContainer } from '../../utils/animations';
import Button from '../common/Button';

const AboutSection = ({ themeMode }) => {
  // Define modern theme-specific styles
  const cardBg = themeMode === 'dark' 
    ? 'bg-gray-800/60 backdrop-blur-md border-gray-700/50' 
    : 'bg-white/80 backdrop-blur-md border-gray-200/70';
  
  const headingGradient = 'bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent';
  const accentGradient = 'bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent';
  
  const paragraphColor = themeMode === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const secondaryTextColor = themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  const cardStyles = `${cardBg} border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`;
  
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Subtle animated dots pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10 -z-10">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <SectionHeading
            title="About Me"
            subtitle="My Journey & Aspirations"
            themeMode={themeMode}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Profile Summary Card */}
              <motion.div
                variants={fadeIn("right", 0.2)}
                className={`${cardStyles} p-6 md:p-8 overflow-hidden`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-5">
                  <span className="inline-block p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">Who I Am</h3>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 bottom-0 top-0 w-1 bg-gradient-to-b from-emerald-500/20 via-teal-500/40 to-transparent"></div>
                  <p
                    className={`text-lg leading-relaxed ${paragraphColor} mb-4`}
                  >
                    I am a passionate{" "}
                    <span className={accentGradient}>
                      Junior Java Developer
                    </span>{" "}
                    focused on building backend applications using Spring Boot and REST APIs. I enjoy designing clean, maintainable systems and continuously improving my understanding of software architecture and best practices.
                  </p>
                  <p className={`${secondaryTextColor}`}>
                    I am currently strengthening my backend development skills through personal projects and hands-on experimentation with modern development tools and technologies.
                  </p>
                </div>
              </motion.div>

              {/* Status Card */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                className={`${cardStyles} p-6 md:p-8`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-5">
                  <span className="inline-block p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">Current Status</h3>
                </div>

                <div className="flex items-center mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      themeMode === "dark"
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    Available for opportunities
                  </span>
                </div>

                <p className={`text-xl leading-relaxed ${paragraphColor} mb-2`}>
                  Available for opportunities. Currently freelancing as a{" "}
                  <span className={headingGradient}>Backend Developer,</span>{" "}
                  gaining hands-on experience with Java and Spring Boot. Open to full-time or internship roles to grow further in backend development.
                </p>

                <div
                  className={`flex flex-wrap gap-2 mt-5 ${secondaryTextColor}`}
                >
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    Backend development
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    Building RESTful APIs
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    Integrating databases
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Job Seeking Card */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                className={`${cardStyles} p-6 md:p-8`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-5">
                  <span className="inline-block p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">Career Goals</h3>
                </div>

                <div className="pl-5 border-l-2 border-emerald-500/30">
                  <p
                    className={`text-lg leading-relaxed ${paragraphColor} mb-4`}
                  >
                    I am seeking{" "}
                    <span className="font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      an entry-level or internship opportunity
                    </span>{" "}
                    as a Java Backend Developer where I can contribute to real-world projects, strengthen my technical foundation, and grow under experienced mentorship.
                  </p>

                  <div className="mt-5">
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        themeMode === "dark"
                          ? "text-emerald-400"
                          : "text-emerald-600"
                      }`}
                    >
                      Ready to contribute:
                    </h4>
                    <ul className={`space-y-2 ${secondaryTextColor}`}>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Building and maintaining RESTful APIs using Spring Boot</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Designing and optimizing relational database schemas</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Writing clean, testable, and maintainable code following best practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Location & Availability Card */}
              <motion.div
                variants={fadeIn("left", 0.4)}
                className={`${cardStyles} p-6 md:p-8`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-5">
                  <span className="inline-block p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">Location</h3>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-32 h-32 rounded-lg overflow-hidden relative flex-shrink-0 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                    <img
                      src="https://www.sa-venues.com/attractionsga/gallery/gauteng/2b.jpg"
                      alt="South Africa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium z-20">
                      South Africa
                    </div>
                  </motion.div>

                  <div>
                    <p
                      className={`text-lg leading-relaxed ${paragraphColor} mb-3`}
                    >
                      Based in{" "}
                      <span className={headingGradient}>
                        Gauteng, South Africa
                      </span>
                      . Open to relocate anywhere in SA.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-md flex items-center ${
                          themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-3 w-3 mr-1 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Remote work
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-md flex items-center ${
                          themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-3 w-3 mr-1 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Hybrid
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-md flex items-center ${
                          themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-3 w-3 mr-1 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        On-site
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Philosophy Card - Full Width */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            className={`${cardStyles} p-6 md:p-8 mt-8`}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-6">
              <span className="inline-block p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold">My Philosophy</h3>
            </div>

            <div className="md:flex gap-8">
              <div className="md:w-2/3">
                <p className={`text-lg leading-relaxed ${paragraphColor} mb-6 relative`}>
                  <span className="text-4xl font-serif absolute -top-4 -left-2 opacity-20">"</span>
                   I believe in continuous learning and hands-on experience. Every project is an opportunity to grow my skills in software development.{' '}
                  <span className={`font-medium ${themeMode === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    I stay teachable, embrace challenges,
                  </span>{' '}
                  and focus on building practical applications that solve real problems with clean, efficient, and maintainable code.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    href="#projects"
                    variant="primary"
                    size="md"
                    themeMode={themeMode}
                    className="shadow-lg shadow-emerald-500/20"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    }
                  >
                    View My Projects
                  </Button>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="md"
                    themeMode={themeMode}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    }
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:w-1/3 relative mt-6 md:mt-0">
                <div
                  className={`absolute inset-0 rounded-xl ${
                    themeMode === "dark"
                      ? "bg-gradient-to-tr from-teal-900/40 to-emerald-900/40"
                      : "bg-gradient-to-tr from-teal-100 to-emerald-100"
                  }`}
                ></div>
                <motion.div
                  className="p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4
                    className={`text-lg font-semibold mb-4 ${
                      themeMode === "dark"
                        ? "text-emerald-400"
                        : "text-emerald-600"
                    }`}
                  >
                    Core Values
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Continuous Learning",
                      "Problem Solving",
                      "Clean Code",
                      "Adaptability",
                      "Attention to Detail",
                    ].map((value, index) => (
                      <motion.li
                        key={index}
                        className={`flex items-center ${paragraphColor}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 mr-2 ${
                            themeMode === "dark"
                              ? "text-emerald-400"
                              : "text-emerald-600"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {value}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Add CSS for the grid pattern */}
          <style>{`
            .bg-grid-pattern {
              background-image: radial-gradient(
                circle,
                currentColor 1px,
                transparent 1px
              );
              background-size: 24px 24px;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
