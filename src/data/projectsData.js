const projectsData = [
  {
    id: "together-as-one",
    title: "Together As One",
    shortDescription: "A community platform connecting people with water resources to those in need during South Africa's water crises.",
    description: `Together As One is a community-focused platform designed to address water crises in South Africa by connecting people who need water with those who have resources to share. The platform emerged as a grassroots response to water outages and shortages that affect many South African communities.
    
    The application enables residents with boreholes or other water sources to connect with neighbors experiencing water shortages, fostering community resilience and solidarity during infrastructure challenges.`,
    image: "https://sn-pcs.netlify.app/tao/home.png",
    technologies: ["React", "Tailwind CSS", "React Router", "Context API", "Responsive Design", "Netlify"],
    features: [
      "Water Sharing Network: Connects residents with water resources to those in need",
      "Location-Based Search: Find nearby water sharing points using location services",
      "Community Organization: Platform organized by region with specific local initiatives",
      "Educational Resources: Water conservation tips and community best practices",
      "Volunteer Coordination: Register to share water resources during outages"
    ],
    communities: [
      "Emfuleni", "Tshwane", "Cape Town", "Stellenbosch", 
      "Durban", "Pietermaritzburg", "East London", "Bloemfontein"
    ],
    coreValues: [
      "Community First: Building resilience through neighbor-to-neighbor support",
      "Safety & Trust: Creating a verified network of water providers",
      "Environmental Stewardship: Promoting responsible water usage",
      "Inclusive Access: Ensuring everyone has access to clean water"
    ],
    mission: "Together As One aims to transform crisis into opportunity by building community resilience through water solidarity, creating sustainable networks for resource sharing, and turning essential needs into bridges between community members.",
    impact: "The project combines practical technology solutions with community organizing to address a critical infrastructure challenge in a way that builds social cohesion rather than competition over scarce resources.",
    challenges: "The main challenge was designing an intuitive interface that would work for all community members regardless of technical proficiency, while ensuring the platform could effectively match those with resources to those in need based on proximity and availability.",
    learningOutcomes: "This project deepened my understanding of building applications with real social impact, balancing technical requirements with genuine community needs, and creating interfaces that work for diverse user groups.",
    githubUrl: "", // Leave blank if private
    demoUrl: "https://togetherasone.netlify.app/",
    featured: true,
    isNew: true,
    status: "completed",
    lastUpdated: "May 2025",
    codeSize: "8K+ lines",
    screenshots: [
      { image: "https://sn-pcs.netlify.app/tao/tao-about.png", caption: "About Page" },
      { image: "https://sn-pcs.netlify.app/tao/tao-find.png", caption: "Find Water Page" },
      { image: "https://sn-pcs.netlify.app/tao/tao-comms.png", caption: "Communities Page" },
      { image: "https://sn-pcs.netlify.app/tao/tao-tips.png", caption: "Find Water Map" }
    ],
    inProgress: false
  },
  {
    id: "repair-link-one",
    title: "RepairLink v1.0",
    shortDescription: "A full-stack repair service booking platform with separate dashboards for customers and providers.",
    description: `RepairLink v1.0 is a full-stack web application that connects customers with local repair service providers, allowing them to book and manage repair appointments easily. The platform streamlines communication between users and providers by offering clean, separate dashboards tailored to each role.

Built with Java (Spring Boot), MySQL, and React, RepairLink focuses on delivering a practical and intuitive experience for real-world booking scenarios. It uses secure, role-based access control to ensure users interact only with features relevant to their role.`,
    // This image is working fine
    image: "https://sn-pcs.netlify.app/repairlink/RepairLink.png",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Redis", "Tailwind CSS"],
    features: [
      "Role-based login system for customers and service providers",
      "Repair booking management with scheduling and status tracking",
      "Provider dashboard to manage service listings and view bookings",
      "Customer dashboard to create and monitor service requests",
      "Reviews system allowing customers to rate service providers",
      "JWT authentication to protect all endpoints",
      "RESTful APIs built with Spring Boot and MySQL",
      "Frontend UI using React and Tailwind CSS"
    ]    
    ,
    challenges: `A key challenge was implementing secure and smooth role-based navigation between the customer and service provider dashboards. I solved this by structuring my backend with Spring Security and using JWT tokens to dynamically determine the user's role during login, allowing clean access separation.

      Another challenge was designing the database schema to support booking flow and user-service relationships efficiently. By carefully planning the MySQL schema and using normalized relational tables, I ensured the system was scalable and easy to query for both dashboards.`,
    learningOutcomes: "This project helped me gain real-world experience in structuring a full-stack application, implementing secure role-based access, and building REST APIs that support real user workflows.",
    githubUrl: "https://github.com/Doc012/RepairLink",
    demoUrl: "https://ecommerce-demo.example.com",
    videoUrl: "https://www.youtube-nocookie.com/embed/Iqr3XIhSnUQ?si=52Zmo6JGGDJvRgAr",
    featured: true,
    isNew: false,
    status: "completed",
    lastUpdated: "April 2025",
    codeSize: "15K+ lines",
    screenshots: [
      { image: "https://sn-pcs.netlify.app/repairlink/homepage.png", caption: "Homepage" },
      { image: "https://sn-pcs.netlify.app/repairlink/services.png", caption: "Services Page" },
      { image: "https://sn-pcs.netlify.app/repairlink/customer.png", caption: "Customer Dashboard" },
      { image: "https://sn-pcs.netlify.app/repairlink/vendor.png", caption: "Vendor Dashboard" }
    ],
    inProgress: false
  },
  {
    id: "repair-link-two",
    title: "RepairLink v1.2",
    shortDescription: "Enhancing the platform with smarter scheduling, admin tools, and real-world communication features.",
    description: `RepairLink v1.2 is a major upgrade focused on improving the platform’s usability, admin functionality, and user communication. This version is all about enhancing real-world functionality with smarter scheduling, richer user experiences, and professional interactions across the platform.
  
  The update introduces an admin dashboard, better vendor insights, smarter time slot handling, and a more refined UI/UX throughout all dashboards. These improvements aim to make the platform more production-ready and scalable.`,
    image: "https://sn-pcs.netlify.app/repairlink/In%20Progress.png", // Replace with your actual image path
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Redis", "Tailwind CSS", "Cloudinary", "Google Maps API"],
    
    improvements: [
      "Adding an admin dashboard for system oversight and platform control✅",
      "Adding a dedicated reviews page for vendors to view customer feedback✅",
      "Enhancing vendor profiles with email and website details ✅",
      "Displaying only available time slots during booking (excluding booked times)",
      "Adding booking history pages for customers and vendors✅",
      "Improving UI/UX across all dashboards for better usability",
      "Refactoring and cleaning up frontend code for performance and maintainability"
    ],
    
    newFeatures: [
      "Enabling profile picture uploads using Cloudinary",
      "Integrating email confirmations for bookings and password events",
      "Adding SMS confirmations using a third-party SMS API",
      "Generating downloadable PDF receipts and confirmations",
      "Displaying nearby service providers in customer dashboard using Google Maps API"
    ],
    
    challenges: `As of now, I haven't encountered any technical challenges since development for v1.2 is still in the planning phase. However, I anticipate potential complexity when integrating third-party services like Cloudinary, SMS APIs, and PDF generation tools. I'm also preparing for the logic needed to filter and display only available time slots during booking, which will require efficient query design and backend coordination.`,

    learningOutcomes: "This version will helping me deepen my experience with third-party integrations, scalable service design, and user-centric UI enhancements.",
    
    githubUrl: "https://github.com/Doc012/RepairLink",
    demoUrl: "https://repairlink-v1-2.example.com",
    featured: true,
    isNew: true,
    status: "in-progress",
    lastUpdated: "May 2025",
    codeSize: "20K+ lines",
    screenshots: [
  
    ],
    inProgress: true
  },
  {
    id: "repair-link-three",
    title: "RepairLink v1.3",
    shortDescription: "Introducing real-time messaging and advanced user interaction tools to take the platform to the next level.",
    description: `RepairLink v1.3 is the next planned evolution of the platform, focused on enhancing communication between customers and service providers. This version aims to introduce a real-time messaging system, improve visibility into booking statuses, and bring advanced interactivity to the platform.
  
  The goal is to create a more connected experience by allowing direct chat within dashboards, tracking service provider availability in real time, and improving the way users engage before and after a booking.`,
    image: "https://sn-pcs.netlify.app/repairlink/Comming%20soon.png",
    technologies: [
      "Java", 
      "Spring Boot", 
      "WebSockets", 
      "React", 
      "MySQL", 
      "Redis", 
      "Cloudinary", 
      "Firebase Cloud Messaging", 
      "Twilio API", 
      "Google Maps API", 
      "OpenPDF"
    ],
    features: [
      "Real-time messaging between customers and service providers",
      "Service provider availability indicators (online/offline)",
      "Unread message badges and chat history",
      "Service request status updates with timestamps",
      "Dashboard notifications for incoming messages and bookings",
      "Optional email fallback for missed messages",
      "Push notifications via Firebase for important events",
      "SMS alerts for offline users using Twilio API",
      "PDF generation for chat summaries and booking reports",
      "Geolocation-based service sorting using Google Maps API"
    ],
    thirdPartyIntegrations: [
      {
        name: "Firebase Cloud Messaging (FCM)",
        purpose: "Push notifications for booking updates and real-time alerts"
      },
      {
        name: "Twilio API",
        purpose: "SMS alerts for unread messages or offline service providers"
      },
      {
        name: "Cloudinary",
        purpose: "Handling image uploads for user profiles and chat media"
      },
      {
        name: "Google Maps API",
        purpose: "Displaying nearby service providers and calculating distances"
      },
      {
        name: "OpenPDF or iText",
        purpose: "Generating downloadable PDF reports or chat summaries"
      }
    ],
    challenges: "The main anticipated challenge is implementing real-time messaging using WebSockets while ensuring message delivery is consistent, secure, and scalable. Proper session handling and user authentication in chat contexts will also require careful planning. Managing third-party integrations in a clean, modular architecture will also be essential for maintainability.",
    learningOutcomes: "This version is expected to expand my experience with real-time systems, WebSocket communication, and asynchronous data flow in modern web apps. It will also strengthen my skills in working with third-party APIs to create a more interactive and professional user experience.",
    featured: false,
    isNew: true,
    status: "upcoming",
    timeline: "Q3 2025",
    screenshots: [
      
    ],
    inProgress: false
  }
  
  
];

export default projectsData;