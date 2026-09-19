export interface WorkExperience {
  id: string;
  period: string;
  duration: string;
  company: string;
  role: string;
  tech: string;
  isCurrent?: boolean;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  image: string;
  images?: string[];
  accentBg?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  tags: string[];
  image?: string;
  slug: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Ananthu Krishna P",
    shortName: "ananthu.dev",
    firstName: "Ananthu",
    lastName: "Krishna",
    role: "Full Stack Developer",
    specialization: "MERN Stack Specialist",
    phone: "+91 9745756546",
    email: "ananthukrishnapilachery@gmail.com",
    address: "Pilachery House, Nanminda PO, Nanminda, Kozhikode, Kerala, India, 673613",
    location: "Kozhikode, Kerala, India",
    yearsOfExperience: "MERN Stack",
    totalWorkTime: "Active Developer",
    bioStatement: "Passionate MERN stack developer with hands-on experience in creating fast, responsive, and user-focused web applications with MongoDB, Express.js, React, and Node.js.",
    aboutIntro: "Hello! I'm Ananthu, I'm a full stack developer crafting modern, scalable, and user-focused web applications with the MERN stack.",
    aboutSubtext: "Core technologies, databases, APIs, and development tools I work with",
    portraitImage: "/assets/Portfolio.jpeg",
    personalSkills: [
      "Good Verbal & Written Communication",
      "Problem Solving",
      "Time Management",
      "Teamwork",
      "Adaptability",
      "Critical Thinking",
      "Good Listening"
    ],
    languages: [
      { name: "English", level: "Very Good Command" },
      { name: "Malayalam", level: "Native Speaker" },
      { name: "Hindi", level: "Working Knowledge" },
      { name: "Tamil", level: "Conversational Knowledge" }
    ],
    hobbies: ["Listening to Music", "Gaming", "Travelling"],
    education: [
      {
        year: "2024 MARCH",
        degree: "Bachelor Of Computer Science",
        institution: "Calicut University — Malabar College of Arts and Science Moodadi, Kerala",
        grade: "CGPA 5.7"
      },
      {
        year: "2021 MARCH",
        degree: "Higher Secondary School (Science)",
        institution: "Nanminda Higher Secondary School (Kerala Board of Public Examinations)",
        grade: "80%"
      },
      {
        year: "2019 MARCH",
        degree: "Secondary School (SSLC)",
        institution: "Nanminda Higher Secondary School (Kerala Board of Public Examinations)",
        grade: "88%"
      }
    ],
    certifications: [
      {
        title: "Full Stack Development (MERN) Training",
        issuer: "Aesthetix Edutech (NSDC-Approved)",
        description: "Mastered HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and API integration. Acquired hands-on experience in developing, deploying, and managing end-to-end web applications with a strong focus on performance and scalability."
      }
    ],
    credits: {
      devCredit: "Handcrafted by Ananthu /",
      designCredit: "Designed for Professional Impact /",
      techCredit: "Powered by Next.js & React",
      outroDesigner: "MERN Stack Engineer",
      outroYear: "Kerala, India 2026",
      outroDeveloper: "Website portfolio for Ananthu Krishna P"
    },
    socials: [
      { name: "Github", url: "https://github.com/Ananthu007-AK", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ananthu-krishna-01aa47271", icon: "linkedin" },
      { name: "WhatsApp", url: "https://wa.me/919745756546", icon: "whatsapp" },
      { name: "Phone", url: "tel:+919745756546", icon: "phone" },
      { name: "E-mail", url: "mailto:ananthukrishnapilachery@gmail.com", icon: "mail" },
    ]
  },

  skills: {
    frontend: {
      title: "Front-end",
      items: "React / HTML5 / CSS3 / JavaScript (ES6+) / Responsive UI / Vite / UI/UX Implementation / State Management"
    },
    styles: {
      title: "Styles & UI",
      items: "CSS3 / Modern Glassmorphism / TailwindCSS / Bootstrap / Responsive Flexbox & Grid / Micro-Animations"
    },
    backend: {
      title: "Back-end",
      items: "NodeJS / Express / RESTful API Development / Strapi / JWT Authentication / Bcrypt / Multer / Middleware"
    },
    devops: {
      title: "Databases & Tools",
      items: "MongoDB / Mongoose / SQL / Postman / Git / GitHub / Windows / WhatsApp Cloud API / WebSockets"
    }
  },

  workExperience: [
    {
      id: "zeros-and-ones",
      period: "2025 - Present",
      duration: "Ongoing",
      company: "Your Zeros and Ones",
      role: "Full Stack Developer Intern",
      tech: "Sudoreply (Omnichannel & WhatsApp SaaS) | Node.js, React 19, PostgreSQL, Redis",
      isCurrent: true
    },
    {
      id: "botx-automations",
      period: "2025 (Apr - Oct)",
      duration: "6 months",
      company: "Botx Automations Pvt. Ltd.",
      role: "Front-End Developer Intern",
      tech: "CityFresh (Import/Export & Logistics Platform + Admin Dashboard) | React, JS, HTML5 & CSS3",
    },
    {
      id: "aesthetix-edutech",
      period: "2024 - 2025",
      duration: "Intensive",
      company: "Aesthetix Edutech",
      role: "Full Stack MERN Trainee",
      tech: "NSDC-Approved End-to-End Web Development"
    },
    {
      id: "mcas-moodadi",
      period: "2021 - 2024",
      duration: "3 years",
      company: "Calicut University (MCAS)",
      role: "BSc Computer Science",
      tech: "Core Computer Science, DS & Web Fundamentals"
    }
  ] as WorkExperience[],

  featuredArticle: {
    id: "sudoreply-arch",
    title: "Building Sudoreply: Omnichannel & WhatsApp SaaS Platform",
    description: "Architecting Sudoreply — an enterprise-grade multi-tenant Omnichannel Customer Engagement & WhatsApp Commerce SaaS platform using Node.js, Express, React 19, PostgreSQL, Prisma, Redis, BullMQ, and Socket.IO.",
    image: "/assets/Sudoreply1.png",
    readTime: "6 min read",
    date: "Current Project"
  },

  projects: [
    {
      id: "sudoreply",
      title: "Sudoreply",
      subtitle: "Omnichannel & WhatsApp SaaS Platform",
      tags: ["React 19", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Socket.IO", "Tailwind CSS", "Meta Cloud API", "Razorpay", "Docker"],
      description: "Sudoreply is an enterprise-grade, multi-tenant Omnichannel Customer Engagement & WhatsApp Commerce SaaS platform. Built with Node.js, Express, React 19, Vite, PostgreSQL, Prisma, Redis, BullMQ, and Socket.IO, Sudoreply enables businesses to build visual drag-and-drop chatbot flows with ReactFlow, launch targeted Meta-approved WhatsApp broadcast campaigns, manage multi-agent live chat in real time, and process automated in-chat WhatsApp commerce orders with Razorpay payment integration.",
      image: "/assets/Sudoreply1.png",
      images: [
        "/assets/Sudoreply1.png",
        "/assets/Sudoreply2.png",
        "/assets/Sudoreply3.png"
      ],
      liveUrl: "https://github.com/Ananthu007-AK",
      githubUrl: "https://github.com/Ananthu007-AK",
      highlights: [
        "Visual drag-and-drop Chatbot Flow Builder engineered with ReactFlow for automated conversational logic, condition branching, and human-agent handoffs",
        "High-performance messaging & broadcast pipeline with BullMQ & Redis, processing thousands of Meta WhatsApp broadcast messages per minute with exponential backoff retries",
        "Automated WhatsApp Commerce & Payment workflows integrating Razorpay Partner OAuth and webhook idempotency for in-chat shopping carts and payment links",
        "Real-time multi-agent Shared Team Inbox powered by Socket.IO for live message sync, automated conversation assignment rules, and tag prioritization",
        "Multi-tenant database isolation using PostgreSQL 16 & Prisma ORM 6 with RBAC, JWT refresh token rotation, and AES-256-GCM encryption for stored merchant keys",
        "Microservices containerization using Docker & Docker Compose with automated Nginx reverse proxying"
      ]
    },
    {
      id: "luxewheels",
      title: "LuxeWheels",
      subtitle: "Premium Used Car Rental & Sales Marketplace",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer", "bcrypt"],
      description: "LuxeWheels is a comprehensive full-stack automotive platform for renting, buying, and selling premium vehicles. Built in a 4-week team sprint featuring secure JWT authentication with bcrypt password hashing, dynamic rental booking workflows, multi-image upload processing pipelines via Multer, and an administrative control panel.",
      image: "/assets/Luxewheels.png",
      accentBg: "#EDE8DF",
      liveUrl: "https://github.com/Ananthu007-AK",
      githubUrl: "https://github.com/Ananthu007-AK",
      highlights: [
        "Secure RESTful APIs with JWT role-based access control (Admin & Client dashboards)",
        "Image upload pipeline handling multi-view vehicle photos via Multer and cloud storage",
        "Interactive booking calendar with automated daily pricing and deposit calculator",
        "Robust Mongoose relational schemas for vehicle inventory, reservations, and users"
      ]
    },
    {
      id: "botx-automations",
      title: "CityFresh Platform",
      subtitle: "B2B Import/Export, Ship Chandler & Logistics Web App (Botx Automations)",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Admin Dashboard", "Responsive Design", "Botx Automations"],
      description: "CityFresh is a comprehensive B2B import/export, wholesale, clearance & forwarding, ship chandler, ship agent, and transportation logistics platform developed during my internship at Botx Automations Pvt. Ltd. (Kochi). Features international produce sourcing management, bulk availability for retailers & institutional buyers, smooth customs clearance documentation workflows, vessel provisions tracking, and a fully responsive admin control panel.",
      image: "/assets/cityfresh1.png",
      images: [
        "/assets/cityfresh1.png",
        "/assets/cityfresh2.png"
      ],
      liveUrl: "https://github.com/Ananthu007-AK",
      githubUrl: "https://github.com/Ananthu007-AK",
      highlights: [
        "Engineered an intuitive Admin Dashboard for tracking international import/export, cargo clearance, and ship chandler provisions",
        "Built responsive mobile & desktop web interfaces ensuring seamless UX across devices for global buyers and vessel agents",
        "Implemented modules for Clearance & Forwarding, Ship Agent services, port operations, crew assistance, and regulatory compliance",
        "Developed Wholesale & Retail distribution workflows with bulk pricing and automated logistics dispatch tracking",
        "Collaborated within an agile team at Botx Automations (Kochi) converting wireframes into performant, production-ready React modules"
      ]
    }
  ] as ShowcaseProject[],

  articles: [
    {
      id: "art-1",
      title: "Building Sudoreply: Omnichannel & WhatsApp SaaS Platform",
      description: "Architecting an enterprise multi-tenant Omnichannel SaaS with Node.js, Express, React 19, PostgreSQL, Prisma, Redis, BullMQ, Socket.IO, and WhatsApp Cloud APIs.",
      readTime: "6 min read",
      date: "Aug 2025",
      tags: ["Sudoreply", "React 19", "PostgreSQL", "Redis", "BullMQ"],
      image: "/assets/Sudoreply1.png",
      slug: "sudoreply-whatsapp-inbox"
    },
    {
      id: "art-2",
      title: "LuxeWheels: Secure Auth & Multer Pipelines in MERN",
      description: "Implementing role-based JWT access control, bcrypt hashing, and multi-part image uploads for an automotive marketplace.",
      readTime: "5 min read",
      date: "Jul 2025",
      tags: ["React", "Express", "Multer"],
      image: "/assets/Luxewheels.png",
      slug: "luxewheels-architecture"
    },
    {
      id: "art-3",
      title: "CityFresh: B2B Import/Export & Ship Chandler Architecture",
      description: "Designing responsive B2B trade platforms, customs clearance workflows, and admin dashboards with React.",
      readTime: "5 min read",
      date: "Jun 2025",
      tags: ["React", "B2B", "Logistics"],
      image: "/assets/cityfresh1.png",
      slug: "cityfresh-b2b-architecture"
    },
    {
      id: "art-4",
      title: "Mastering MongoDB & Mongoose Schema Relationships",
      description: "Structuring scalable databases, indexes, and aggregation pipelines in full-stack JavaScript applications.",
      readTime: "6 min read",
      date: "May 2025",
      tags: ["MongoDB", "Mongoose", "Database"],
      image: "/assets/gestat_dashboard.jpg",
      slug: "mongodb-mongoose-best-practices"
    }
  ] as ArticleItem[]
};
