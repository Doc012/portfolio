const techStackData = [
  // Backend Technologies
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "#f89820",
    description: "My primary backend language. I use Java for building robust server-side applications with strong type safety and performance.",
    proficiency: "intermediate",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    icon: "🍃",
    color: "#6db33f",
    description: "I use Spring Boot to create production-ready Java applications with minimal configuration, focusing on REST APIs and microservices.",
    proficiency: "intermediate",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "spring-security",
    name: "Spring Security",
    icon: "🔒",
    color: "#6db33f",
    description: "Implementing authentication and authorization in my Java applications with role-based access control and JWT tokens.",
    proficiency: "beginner",
    category: "Backend",
    yearStarted: 2022
  },
  {
    id: "hibernate",
    name: "Hibernate",
    icon: "📝",
    color: "#bcae79",
    description: "Using Hibernate ORM for database interactions, entity mappings, and transaction management in Java applications.",
    proficiency: "intermediate",
    category: "Backend",
    yearStarted: 2022
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
    description: "Designing relational database schemas, writing optimized queries, and managing data persistence for applications.",
    proficiency: "intermediate",
    category: "Database",
    yearStarted: 2022
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
    description: "Containerizing applications for consistent development, testing, and deployment environments.",
    proficiency: "beginner",
    category: "DevOps",
    yearStarted: 2023
  },
  {
    id: "aws",
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    description: "Using cloud services like EC2, S3, and RDS for deploying and scaling web applications.",
    proficiency: "beginner",
    category: "Cloud",
    yearStarted: 2023
  },
  {
    id: "azure",
    name: "Azure",
    icon: "🌩️",
    color: "#0078D4",
    description: "Exploring Microsoft's cloud platform for application hosting and integration with other Microsoft services.",
    proficiency: "beginner",
    category: "Cloud",
    yearStarted: 2023
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