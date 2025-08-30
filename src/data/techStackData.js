const techStackData = [
  // Backend Technologies
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "#f89820",
    description: "Expert in Java for building enterprise-grade backend applications. Experienced with advanced concepts, design patterns, and performance optimization.",
    proficiency: "advanced",
    category: "Backend",
    yearStarted: 2021
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    icon: "🍃",
    color: "#6db33f",
    description: "Highly proficient in Spring Boot for creating production-ready microservices. Expert in REST API development, auto-configuration, and dependency injection.",
    proficiency: "advanced",
    category: "Backend",
    yearStarted: 2021
  },
  {
    id: "spring-security",
    name: "Spring Security",
    icon: "🔒",
    color: "#6db33f",
    description: "Implementing robust authentication and authorization systems with JWT, role-based access control, and OAuth2 integration.",
    proficiency: "intermediate",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "hibernate",
    name: "Hibernate",
    icon: "📝",
    color: "#bcae79",
    description: "Advanced knowledge of Hibernate ORM for complex database operations, custom queries, and performance tuning in enterprise applications.",
    proficiency: "advanced",
    category: "Backend",
    yearStarted: 2021
  },
  {
    id: "kafka",
    name: "Apache Kafka",
    icon: "📢",
    color: "#231F20",
    description: "Expert in building event-driven microservices with Kafka for asynchronous message processing, notifications, and real-time data streaming.",
    proficiency: "intermediate",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "microservices",
    name: "Microservices",
    icon: "🔗",
    color: "#4CAF50",
    description: "Architecting and implementing scalable microservices using Spring Boot, with focus on service discovery, API gateways, and inter-service communication.",
    proficiency: "advanced",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    icon: "🔌",
    color: "#FF5722",
    description: "Designing and developing RESTful APIs with proper HTTP methods, status codes, and documentation. Expert in API versioning and error handling.",
    proficiency: "advanced",
    category: "Backend",
    yearStarted: 2021
  },

  // Frontend Technologies
  {
    id: "javascript",
    name: "JavaScript",
    icon: "📜",
    color: "#F0DB4F",
    description: "My core language for frontend development. I use modern ES6+ features for creating interactive user interfaces.",
    proficiency: "intermediate",
    category: "Frontend",
    yearStarted: 2021
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "📘",
    color: "#3178c6",
    description: "I'm learning TypeScript for adding type safety to JavaScript projects, making code more maintainable and catching errors earlier.",
    proficiency: "beginner",
    category: "Frontend",
    yearStarted: 2023
  },
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    color: "#61dafb",
    description: "My primary frontend library for building component-based UIs with a focus on reusability and state management.",
    proficiency: "intermediate",
    category: "Frontend",
    yearStarted: 2022
  },
  {
    id: "redux",
    name: "Redux",
    icon: "🔄",
    color: "#764abc",
    description: "State management for larger React applications, using actions and reducers for predictable state updates.",
    proficiency: "beginner",
    category: "Frontend",
    yearStarted: 2023
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    color: "#E34F26",
    description: "Creating semantic, accessible, and well-structured markup for web applications.",
    proficiency: "advanced",
    category: "Frontend",
    yearStarted: 2021
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    color: "#1572B6",
    description: "Styling web applications with a focus on responsive design, animations, and modern layout techniques like Grid and Flexbox.",
    proficiency: "advanced",
    category: "Frontend",
    yearStarted: 2021
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🌊",
    color: "#06B6D4",
    description: "Using utility classes to rapidly build custom designs without leaving HTML, focusing on responsive and mobile-first approach.",
    proficiency: "intermediate",
    category: "Frontend",
    yearStarted: 2022
  },

  // Database Technologies
  {
    id: "mysql",
    name: "MySQL",
    icon: "🐬",
    color: "#4479A1",
    description: "Advanced MySQL expertise including database design, query optimization, indexing strategies, and performance tuning. Reduced response times by 40% in production systems.",
    proficiency: "advanced",
    category: "Database",
    yearStarted: 2021
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    description: "Using PostgreSQL for advanced data types, complex queries, and database functions in production applications.",
    proficiency: "beginner",
    category: "Database",
    yearStarted: 2023
  },
  {
    id: "redis",
    name: "Redis",
    icon: "⚡",
    color: "#DC382D",
    description: "Implementing caching strategies, session storage, and message queues with this in-memory data structure store.",
    proficiency: "beginner",
    category: "Database",
    yearStarted: 2023
  },

  // DevOps & Tools
  {
    id: "git",
    name: "Git",
    icon: "📊",
    color: "#F05032",
    description: "Version control for all my projects, with branching strategies, code reviews, and collaborative workflows.",
    proficiency: "intermediate",
    category: "DevOps",
    yearStarted: 2021
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    description: "Experienced in containerizing Java applications with Docker for deployment readiness and scalable infrastructure management.",
    proficiency: "intermediate",
    category: "DevOps",
    yearStarted: 2022
  },
  {
    id: "aws",
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    description: "Deploying and managing applications on AWS cloud services including EC2, RDS, and implementing CI/CD pipelines.",
    proficiency: "intermediate",
    category: "Cloud",
    yearStarted: 2022
  },
  {
    id: "azure",
    name: "Azure",
    icon: "🌩️",
    color: "#0078D4",
    description: "Experience with Microsoft Azure cloud platform for application hosting and integration with enterprise systems.",
    proficiency: "intermediate",
    category: "Cloud",
    yearStarted: 2022
  },
  {
    id: "maven",
    name: "Maven",
    icon: "🔧",
    color: "#C71A36",
    description: "Expert in Maven for project build automation, dependency management, and multi-module project structuring in Java applications.",
    proficiency: "advanced",
    category: "DevOps",
    yearStarted: 2021
  },

  // Testing
  {
    id: "junit",
    name: "JUnit",
    icon: "🧪",
    color: "#25A162",
    description: "Writing unit tests for Java applications to ensure code quality and prevent regressions.",
    proficiency: "intermediate",
    category: "Testing",
    yearStarted: 2022
  },
  {
    id: "jest",
    name: "Jest",
    icon: "🃏",
    color: "#C21325",
    description: "Testing React components and JavaScript functions with snapshot testing and mocks.",
    proficiency: "beginner",
    category: "Testing",
    yearStarted: 2023
  }
];

// Currently learning / planning to learn
export const learningNext = [
  {
    name: "GraphQL",
    icon: "🔍",
    category: "Backend"
  },
  {
    name: "Next.js",
    icon: "⏭️",
    category: "Frontend"
  },
  {
    name: "MongoDB",
    icon: "🍃",
    category: "Database"
  },
  {
    name: "React Native",
    icon: "📱",
    category: "Mobile"
  },
  {
    name: "Kubernetes",
    icon: "⚙️",
    category: "DevOps"
  }
];

export default techStackData;