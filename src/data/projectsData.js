const projectsData = [
  {
    id: "farmsa",
    title: "FarmSA",
    shortDescription: "A production-ready agriculture marketplace connecting South African farmers, buyers, vendors, and delivery services.",
    description: `FarmSA is a scalable web platform designed to transform South African agriculture. It connects verified farmers, buyers, vendors, and delivery providers, supporting real-world transactions and professional networking.

FarmSA features a dynamic marketplace, interactive maps for farmer discovery, robust privacy controls, and SEO-optimized public pages. The platform is built for real users and products, with a modern, mobile-friendly UI and secure data handling.

Key goals include empowering farmers, streamlining agricultural commerce, and making advanced digital tools accessible to all participants in the food system.

Currently, FarmSA is in active development, focusing on integrating real-time data, expanding the marketplace, and refining user experience for all stakeholders.`,
    image: "https://sn-pcs.netlify.app/farmsa-home.png",
    technologies: [
      "React", "Firebase", "Firestore", "Tailwind CSS", "React Router v6", "React Helmet Async", "Leaflet", "Node.js"
    ],
    features: [
      "Verified farmer and vendor profiles with certification badges",
      "Marketplace for buying and selling farm products",
      "Interactive map for farmer discovery",
      "Dynamic SEO meta tags for each public page",
      "Privacy controls for user contact information",
      "Mobile-friendly responsive design"
    ],
    challenges: "Aligning real user/product data, handling certification errors, and balancing privacy with communication features required careful refactoring and testing.",
    learningOutcomes: "I deepened my experience in production deployment, real-world data integration, privacy-first design, and scalable React architecture.",
  githubUrl: "", // Private repo, available upon request
  demoUrl: "https://farmsa.co.za", // Live web app
    featured: true,
    isNew: true,
    status: "in-progress",
    lastUpdated: "August 2025",
    codeSize: "25K+ lines",
    screenshots: [
      { image: "https://sn-pcs.netlify.app/farmsa-long-home.png", caption: "Home Page" },
      { image: "https://sn-pcs.netlify.app/farmsa-market.png", caption: "Marketplace" },
      { image: "https://sn-pcs.netlify.app/agrilearn.png", caption: "AgriLearn" },
      { image: "https://sn-pcs.netlify.app/farmsa-sponsors.png", caption: "Sponsors" }
    ],
  inProgress: true,
  note: "The FarmSA repository is private but can be shared upon request."
  },
  {
    id: "repair-link",
    title: "RepairLink",
    shortDescription: "A complete platform for booking, managing, and reviewing repair services with secure dashboards for customers and vendors.",
    description: `RepairLink is a full-stack web application designed to connect customers with local repair service providers. The platform features secure, role-based dashboards for both customers and vendors, allowing users to book, manage, and review repair services with ease.

Key features include:
- Role-based login and access control
- Service booking and scheduling
- Vendor management dashboard
- Customer dashboard for service requests
- Reviews and ratings system
- JWT authentication for secure endpoints
- RESTful APIs built with Spring Boot and MySQL
- Modern frontend with React and Tailwind CSS

RepairLink streamlines the entire repair process, from discovery to booking to feedback, making it easy for users to find trusted providers and for vendors to manage their business. The project is now complete and deployed, with a scalable backend and a polished, responsive UI.`,
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
    ],
    challenges: "Implementing secure role-based navigation and designing a scalable database schema for booking and user-service relationships.",
    learningOutcomes: "Gained real-world experience in full-stack architecture, secure authentication, and building REST APIs for production workflows.",
    githubUrl: "https://github.com/Doc012/RepairLink",
  demoUrl: "https://repairlinkdemo.netlify.app/", // Live web app
    featured: true,
    isNew: false,
    status: "completed",
    lastUpdated: "May 2025",
    codeSize: "20K+ lines",
    screenshots: [
      { image: "https://sn-pcs.netlify.app/repairlink/homepage.png", caption: "Homepage" },
      { image: "https://sn-pcs.netlify.app/repairlink/services.png", caption: "Services Page" },
      { image: "https://sn-pcs.netlify.app/repairlink/customer.png", caption: "Customer Dashboard" },
      { image: "https://sn-pcs.netlify.app/repairlink/vendor.png", caption: "Vendor Dashboard" }
    ],
    inProgress: false
  },
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
  demoUrl: "https://togetherasone.netlify.app", // Live web app
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
  }
];

export default projectsData;