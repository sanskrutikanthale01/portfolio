import { ProjectItem, ExperienceItem, SkillGroup, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Sanskruti Kanthale",
  title: "Full-Stack Software Engineer",
  focus: "Cross-Platform Mobile (React Native) · Web (React.js) · Backend (Node.js) · End-to-End Production Engineering",
  location: "Pune, Maharashtra, India",
  availability: "Available for Remote Engineering Roles, High-Impact Contracts & Product Development",
  email: "sanskrutikanthale01@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanskruti-kanthale",
  github: "https://github.com/sanskruti-kanthale",
  portfolio: "https://sanskrutikanthale.dev",
  stats: [
    { label: "Full Product Lifecycle", value: "Mobile + Web + Backend" },
    { label: "Production Releases", value: "Play Store & App Store" },
    { label: "Cloud & Deployments", value: "DigitalOcean VPS & PM2" },
    { label: "Engineering Rigor", value: "Agile, Git & Jest TDD" }
  ],
  bioHighlights: [
    "Full-Stack Software Engineer delivering complete digital products from requirement analysis and architectural design to backend development, frontend/mobile implementation, automated testing, and cloud release.",
    "Specialized in React Native (Expo/EAS, native bridges), modern React.js/TypeScript SPAs, and robust Node.js/Express REST APIs with MongoDB.",
    "Practices disciplined software delivery: Agile/Scrum ceremonies, Git trunk/branch workflows, code reviews, automated unit testing with Jest, and zero-downtime server deployments."
  ]
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "aquacrm",
    title: "AquaCRM",
    tagline: "End-to-End Enterprise CRM & Service Lifecycle Platform with Scheduled WhatsApp Engine",
    category: "fullstack",
    type: "flagship",
    role: "Full-Stack Product Engineer (End-to-End Architecture & Deployment)",
    platforms: ["Web Application (SPA)", "Cloud VPS (DigitalOcean)"],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Baileys",
      "Node-Cron",
      "DigitalOcean VPS",
      "Ubuntu",
      "Nginx",
      "PM2"
    ],
    metrics: [
      { label: "Lifecycle Scope", value: "Frontend + Backend + Cloud" },
      { label: "Automation", value: "90-Day Auto Rollover Engine" },
      { label: "Deployment", value: "DigitalOcean + Nginx + PM2" }
    ],
    overview: "AquaCRM is an end-to-end service lifecycle automation and CRM platform built for water purifier dealerships, RO/UV maintenance providers, and appliance rental businesses. It eliminates lost revenue by replacing manual paper records with automated recurring maintenance tracking, contract lifecycle workflows, and automated communication.",
    architectureHighlights: [
      {
        title: "Full-Stack System Architecture & API Design",
        description: "Architected both layers from the ground up: modular React/TypeScript frontend with RTK Query state management, backed by scalable Node.js/Express REST APIs and indexed MongoDB schemas with server-side pagination."
      },
      {
        title: "90-Day Recurring Service Engine & Cron Scheduling",
        description: "Engineered a stateful recurring maintenance engine with historical service date alignment, eliminating false overdue alerts after bulk Excel migrations and automatically rolling cycles upon completion."
      },
      {
        title: "WhatsApp Automation Queue with Resilient Throttling",
        description: "Integrated WhatsApp multi-device connectivity using Baileys with QR pairing, background message queues, quiet-hour protection, rate limits, and automatic retry handling."
      },
      {
        title: "Production VPS Infrastructure & Web Server Deployment",
        description: "Configured an Ubuntu Linux VPS on DigitalOcean, established Nginx as a reverse proxy with SSL termination, configured PM2 for process clustering and automatic restarts, and connected MongoDB Atlas for managed storage."
      }
    ],
    engineeringValue: "Demonstrates complete full-stack product ownership: problem framing, database architecture, backend automation, responsive web UI, and Linux cloud deployment.",
    businessApplication: "Commercial RO dealerships, home appliance AMC enterprises, and equipment rental businesses."
  },
  {
    id: "werelegion",
    title: "WeReligion",
    tagline: "AI-Powered Spiritual & Astrology Platform with Bidirectional Native Bridge Architecture",
    category: "mobile",
    type: "flagship",
    role: "Mobile Application Engineer / React Native Engineer",
    platforms: ["Android", "iOS"],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Native WebView",
      "AppsFlyer",
      "CleverTap",
      "PostHog",
      "EAS Build",
      "Google Play Console",
      "Apple App Store"
    ],
    metrics: [
      { label: "Production Stores", value: "Google Play + App Store" },
      { label: "Architecture", value: "Type-Safe Native Bridge" },
      { label: "Analytics SDKs", value: "AppsFlyer + CleverTap" }
    ],
    overview: "WeReligion is an AI-powered spiritual and astrology ecosystem offering personalized Kundli charts, auspicious timings, and conversational AI guidance via Sira AI. Built on a hybrid architecture bridging an existing React web ecosystem with native iOS/Android hardware through a high-performance React Native/Expo shell.",
    architectureHighlights: [
      {
        title: "Bidirectional Type-Safe Bridge Architecture",
        description: "Architected a type-safe JavaScript message protocol connecting the embedded React SPA with native mobile runtime, handling SPA route synchronization, downloads, sharing intents, and lifecycle synchronization."
      },
      {
        title: "Native File Streams & Android SAF / iOS File Handlers",
        description: "Implemented authenticated file download pipelines for PDF Kundli reports, integrating Android Storage Access Framework (SAF) and native iOS document share sheets."
      },
      {
        title: "Enterprise Attribution & Event Telemetry SDKs",
        description: "Integrated native AppsFlyer and CleverTap SDKs for install attribution, user identity synchronization, deep-linking, and product tracking with PostHog."
      },
      {
        title: "End-to-End Store Release Engineering & CI/CD",
        description: "Configured Expo EAS build workflows, managed Android JKS keystores and iOS provisioning profiles, and spearheaded production approvals on both Google Play Store and Apple App Store."
      }
    ],
    engineeringValue: "Delivered a reusable, cross-platform hybrid mobile architecture enabling the business to rapidly deploy native features without duplicating core web application investments."
  },
  {
    id: "footsol",
    title: "Footsol (Vissco Healthcare)",
    tagline: "In-Clinic Diagnostic Biomechanical Assessment Platform with In-App CameraX Engine",
    category: "mobile",
    type: "flagship",
    role: "Lead Mobile Application Engineer (Architecture, Debugging & Delivery)",
    platforms: ["Android", "iOS"],
    technologies: [
      "Flutter",
      "Dart",
      "CameraX",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "AiSensy WhatsApp API",
      "AWS SES",
      "Gradle"
    ],
    metrics: [
      { label: "Crash Resolution", value: "Zero Camera Crashes" },
      { label: "Cloud Dispatch", value: "WhatsApp + AWS SES" },
      { label: "Testing", value: "Multi-OEM Device Verified" }
    ],
    overview: "Footsol is an in-clinic diagnostic assessment application developed for Vissco Healthcare. Clinical staff record biomechanical alignment imagery, calculate pressure metrics, generate diagnostic PDF reports, and automate medical report delivery directly to patients.",
    architectureHighlights: [
      {
        title: "In-App CameraX Architecture & Memory Optimization",
        description: "Diagnosed and resolved critical crashes on Samsung, Vivo, and Oppo devices caused by external camera intents by developing an in-app CameraX engine with hardware-level memory constraints."
      },
      {
        title: "Authentication Hardening & Play Integrity Compliance",
        description: "Resolved fragile Firebase Phone Authentication failures across modern Android OS versions by hardening Play Integrity checks, normalizing phone formats, and managing SMS verification lifecycles."
      },
      {
        title: "Automated Multi-Channel Report Delivery",
        description: "Refactored asynchronous data handling to preserve immutable customer request states, integrating AiSensy WhatsApp API and AWS SES for automated patient diagnostic delivery."
      },
      {
        title: "Agile Stakeholder Collaboration & Physical Device Testing",
        description: "Coordinated technical demos with Vissco Healthcare stakeholders, managed testing sprints on physical devices, and resolved edge cases across multiple hardware revisions."
      }
    ],
    engineeringValue: "Rescued a high-profile healthcare mobile platform through deep native debugging, memory optimization, and reliable cloud messaging, delivering a stabilized medical diagnostic tool used in live clinics."
  },
  {
    id: "delivery-recovery",
    title: "Failed Delivery Recovery Automation Engine",
    tagline: "Resilient Event-Driven Backend Microservice with ACID Transactions & Docker CI/CD",
    category: "backend",
    type: "flagship",
    role: "Backend Architect & Systems Engineer",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Docker Compose",
      "n8n",
      "Jest",
      "GitHub Actions",
      "HMAC Webhook Auth"
    ],
    metrics: [
      { label: "Data Integrity", value: "MongoDB Multi-Doc ACID" },
      { label: "Automated Testing", value: "Jest Integration Suite" },
      { label: "Security", value: "HMAC Signed Webhooks" }
    ],
    overview: "An automated enterprise backend service designed to salvage failed delivery attempts via automated heuristic decisions, multi-stage escalations, customer notifications, and background recovery actions. Demonstrates production backend engineering, transaction management, event processing, and defensive application architecture.",
    architectureHighlights: [
      {
        title: "HMAC Webhook Ingestion with Strict Idempotency",
        description: "Constructed secure, high-concurrency webhook ingestion points with payload signature verification, Joi schema validation, correlation-ID request tracing, and idempotency locks preventing duplicate execution."
      },
      {
        title: "Multi-Document ACID Transactions in MongoDB",
        description: "Enforced strict transactional integrity across orders, recovery attempts, and notifications using replica-set MongoDB sessions to eliminate race conditions, double-triggers, and out-of-order events."
      },
      {
        title: "Automated Testing with Jest (TDD)",
        description: "Authored comprehensive Jest unit and integration tests covering retry limit thresholds, HMAC signature failures, and transactional rollbacks."
      },
      {
        title: "Containerization & CI/CD Automation",
        description: "Dockerized the application and MongoDB replica-set environment with Docker Compose; configured GitHub Actions pipelines for automated linting, testing, and container build validation."
      }
    ],
    engineeringValue: "Demonstrates defensive backend systems design, transactional integrity, idempotent event processing, and automated CI/CD pipelines."
  },
  {
    id: "mintgro",
    title: "MintGro Mobile",
    tagline: "Enterprise Field Operations & Job-Card ERP Cross-Platform Application",
    category: "mobile",
    type: "client",
    role: "React Native / Mobile Application Engineer",
    platforms: ["Android", "iOS"],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Native WebView",
      "Expo Router",
      "EAS",
      "Google Play Console",
      "Apple App Store"
    ],
    metrics: [
      { label: "Capability", value: "Native Doc Streaming" },
      { label: "Deployments", value: "EAS Multi-Environment" },
      { label: "Integration", value: "Enterprise ERP Sync" }
    ],
    overview: "MintGro Mobile connects enterprise field technicians and service managers with their centralized cloud ERP. Enables real-time job-card management, inventory updates, quote generation, and on-site document signatures without duplicating business logic.",
    architectureHighlights: [
      {
        title: "Hybrid ERP Synchronization Bridge",
        description: "Bridged cloud ERP modules with native device hardware, supporting single-page navigation synchronizations, Android hardware back-button handling, and offline alerts."
      },
      {
        title: "Authenticated Document Stream & Share Engine",
        description: "Architected authenticated file streaming for high-volume PDF, CSV, and XLSX job-cards, converting Base64 and Blob responses directly into native device share sheets."
      },
      {
        title: "Enterprise Release Engineering & CI/CD",
        description: "Engineered EAS build pipelines, managed keystore provisioning, and facilitated deployment across both Google Play Store and Apple App Store."
      }
    ],
    engineeringValue: "Enabled frictionless field-worker mobility for enterprise clients while preserving existing web ERP codebases, cutting development cost and time-to-market."
  },
  {
    id: "coddle",
    title: "Coddle Sleep Coach",
    tagline: "Adaptive Infant Sleep Science & EWMA Predictive Mobile Application",
    category: "mobile",
    type: "independent",
    role: "Mobile Application Architect",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "AsyncStorage",
      "Day.js",
      "Jest"
    ],
    metrics: [
      { label: "Algorithm", value: "EWMA Learning Model" },
      { label: "Architecture", value: "Local-First Offline" },
      { label: "Testing", value: "DST & Boundary Unit Tests" }
    ],
    overview: "Coddle is an intelligent pediatric sleep-coaching app utilizing an Exponentially Weighted Moving Average (EWMA) statistical model to learn sleep patterns, dynamically calibrating wake windows and nap durations.",
    architectureHighlights: [
      {
        title: "EWMA Dynamic Wake Window Estimator",
        description: "Implemented an algorithmic statistical model that continuously recalibrates sleep predictions as historical sessions are recorded, scoring confidence based on recency."
      },
      {
        title: "Defensive Chronobiology & DST Handling",
        description: "Solved subtle temporal calculation anomalies across Daylight Saving Time boundaries and localized timezone offsets using Day.js."
      },
      {
        title: "Local-First Persistent State & Unit Testing",
        description: "Implemented modular state stores using Zustand with versioned AsyncStorage migrations; validated schedule generation consistency with Jest unit tests."
      }
    ],
    engineeringValue: "Demonstrates advanced algorithm-driven mobile design, rigorous chronological edge-case testing, and clean local-first architecture."
  },
  {
    id: "nordiqo",
    title: "Nordiqo",
    tagline: "International Multi-Currency Financial Tracking & Banking Sync App",
    category: "mobile",
    type: "client",
    role: "Full-Stack / Mobile Engineer",
    platforms: ["Android", "iOS"],
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "REST APIs",
      "Kreditz Banking API",
      "Context API"
    ],
    metrics: [
      { label: "Markets", value: "Denmark & Norway" },
      { label: "Localization", value: "Danish · Norwegian · English" },
      { label: "Banking", value: "Kreditz API Integration" }
    ],
    overview: "International personal finance tracking application deployed for Scandinavian markets, synchronizing live banking data with multi-currency income and expense analytics.",
    architectureHighlights: [
      {
        title: "Open Banking Integration (Kreditz)",
        description: "Implemented secure banking data synchronization with recurring background polling jobs built on Node.js."
      },
      {
        title: "Multi-Language Localization Engine",
        description: "Delivered regional user experiences supporting Danish, Norwegian, and English with localized currency and date formatting."
      }
    ],
    engineeringValue: "Showcases expertise in fintech compliance, third-party open-banking API consumption, and international multi-locale production releases."
  },
  {
    id: "sharkpocket",
    title: "SharkPocket",
    tagline: "Real-Time Gaming Wallet & Identity Verification Platform",
    category: "fullstack",
    type: "client",
    role: "Full-Stack / React Native Developer",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Reanimated",
      "REST APIs",
      "Razorpay",
      "PhonePe"
    ],
    metrics: [
      { label: "Fintech", value: "Dual Gateway (PhonePe/Razorpay)" },
      { label: "Verification", value: "Automated Aadhaar/PAN KYC" }
    ],
    overview: "High-concurrency gaming reward wallet platform handling real-time balance operations, KYC verification, ticket purchases, and withdrawal lifecycles.",
    architectureHighlights: [
      {
        title: "Dual Payment Gateway Orchestration",
        description: "Engineered resilient checkout flows with automatic fallback between Razorpay and PhonePe for zero transaction drops."
      },
      {
        title: "Identity & Bank Account Verification (KYC)",
        description: "Integrated real-time government identity and bank account verification workflows for fraud prevention."
      }
    ],
    engineeringValue: "Demonstrates production experience with payment gateway reconciliation, KYC compliance, and fluid micro-interactions with Reanimated."
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "diginnovators",
    company: "Diginnovators",
    role: "Software Developer",
    period: "September 2026 – Present",
    badge: "Current Role",
    location: "Pune, India (Hybrid)",
    summary: "Contributing to full-stack web and mobile application engineering, backend REST services, and product releases within an Agile/Scrum delivery environment.",
    responsibilities: [
      "Architect and ship production features across cross-platform mobile apps (React Native) and modern web SPAs (React.js).",
      "Develop and maintain secure backend REST APIs and microservice integrations using Node.js, Express, and MongoDB.",
      "Collaborate in cross-functional Agile sprints: daily standups, sprint planning, Jira task estimation, and peer code reviews via Git pull requests.",
      "Implement unit testing with Jest and assist in continuous integration (CI/CD) and staging deployments.",
      "Investigate technical bugs, optimize client bundle sizes and API response times, and support release submission."
    ],
    technologies: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Agile / Scrum", "Git / GitHub", "Jest", "CI/CD"]
  },
  {
    id: "bestpeers",
    company: "BestPeers InfoSystem Pvt. Ltd.",
    role: "React Native Developer",
    period: "June 2025 – December 2025",
    location: "Indore / Pune, India",
    summary: "Engineered scalable mobile features and component libraries within a structured software development team.",
    responsibilities: [
      "Developed mobile application screens and reusable component hierarchies using React Native and TypeScript.",
      "Collaborated with backend engineers to integrate REST APIs and ensure resilient state transitions via Redux Toolkit.",
      "Managed feature branching, pull request reviews, and merge conflicts using Git and Bitbucket.",
      "Debugged cross-device issues across various physical Android and iOS handsets."
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Git", "Bitbucket", "Agile"]
  },
  {
    id: "salonista",
    company: "Salonista (BeautyTech)",
    role: "Mobile Application Developer (Project Engagement)",
    period: "Contract / Project-Based",
    location: "Dubai, UAE (Remote)",
    summary: "Contributed to mobile architecture and appointment booking engine for an on-demand beauty services platform in the UAE market.",
    responsibilities: [
      "Designed modular application navigation and screens using React Native, Expo, and Expo Router.",
      "Participated in client sprint walkthroughs and requirement discussions to define booking schedules and provider availability flows.",
      "Evaluated regional payment gateway requirements and compliance for seamless UAE transactions."
    ],
    technologies: ["React Native", "Expo", "Expo Router", "TypeScript", "Client Collaboration", "Payment Integration"]
  },
  {
    id: "samyotech",
    company: "Samyotech Software Solutions",
    role: "Full-Stack Developer",
    period: "June 2024 – May 2025",
    location: "India",
    summary: "Engineered full-stack web and mobile systems across multiple client products from concept to production deployment.",
    responsibilities: [
      "Translated UI/UX designs and business specifications into responsive React.js web interfaces and React Native mobile apps.",
      "Built backend services, REST APIs, and authentication workflows using Node.js, Express.js, and MongoDB.",
      "Integrated third-party payment gateways (Razorpay, PhonePe) and KYC verification services.",
      "Used Jira, Bitbucket, and Slack to manage sprint tasks, track defects, and coordinate production deployments."
    ],
    technologies: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Payment Gateways", "Postman", "Git / Jira"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Full-Stack Web & Backend Engineering",
    summary: "Scalable REST APIs, transactional database design, and responsive web SPAs",
    skills: [
      { name: "Node.js & Express.js", level: "Production" },
      { name: "React.js (18+) & Vite", level: "Production" },
      { name: "MongoDB & Mongoose (ACID)", level: "Production" },
      { name: "TypeScript & ES6+ JavaScript", level: "Production" },
      { name: "REST API Architecture & Postman", level: "Production" },
      { name: "JWT Authentication & Role RBAC", level: "Production" },
      { name: "Redux Toolkit & RTK Query", level: "Production" },
      { name: "Zustand & Context API", level: "Production" },
      { name: "Tailwind CSS & Material UI", level: "Production" },
      { name: "Cron Jobs & Queue Scheduling", level: "Production" }
    ]
  },
  {
    category: "Cross-Platform Mobile Engineering",
    summary: "Single-codebase Android & iOS apps with native hardware bridges and store releases",
    skills: [
      { name: "React Native & Expo", level: "Production" },
      { name: "Expo Application Services (EAS)", level: "Production" },
      { name: "Expo Router Navigation", level: "Production" },
      { name: "Bidirectional Native-Web Bridges", level: "Advanced" },
      { name: "Android SAF & iOS File Handlers", level: "Production" },
      { name: "Firebase Auth & Cloud Messaging", level: "Production" },
      { name: "Google Play Store Deployment", level: "Production" },
      { name: "Apple App Store Deployment", level: "Production" },
      { name: "Flutter & In-App CameraX", level: "Advanced" }
    ]
  },
  {
    category: "DevOps, Cloud Hosting & Deployments",
    summary: "Linux server provisioning, reverse proxies, process management, and CI/CD",
    skills: [
      { name: "DigitalOcean Linux VPS (Ubuntu)", level: "Production" },
      { name: "Nginx Reverse Proxy & SSL", level: "Production" },
      { name: "PM2 Process Clustering", level: "Production" },
      { name: "Docker & Docker Compose", level: "Advanced" },
      { name: "GitHub Actions CI/CD", level: "Production" },
      { name: "MongoDB Atlas Managed Cloud", level: "Production" },
      { name: "Mobile Keystore & Provisioning", level: "Production" }
    ]
  },
  {
    category: "Testing, Agile Delivery & Integrations",
    summary: "Rigorous quality assurance, version control workflows, and third-party SDKs",
    skills: [
      { name: "Jest (Unit & Integration Testing)", level: "Production" },
      { name: "Test-Driven Development (TDD)", level: "Advanced" },
      { name: "Git & GitHub / Bitbucket (PRs)", level: "Production" },
      { name: "Agile / Scrum (Standups, Sprints)", level: "Production" },
      { name: "Client & Stakeholder Walkthroughs", level: "Production" },
      { name: "Jira & Confluence Management", level: "Production" },
      { name: "PhonePe & Razorpay Gateways", level: "Production" },
      { name: "AppsFlyer & CleverTap SDKs", level: "Production" },
      { name: "PostHog & n8n Workflows", level: "Advanced" }
    ]
  }
];

export const FREELANCE_SERVICES: ServiceItem[] = [
  {
    title: "End-to-End Product Engineering (Concept to Release)",
    tagline: "Turnkey software solutions: web, mobile, backend & cloud",
    description: "Complete product delivery for startups and businesses. I architect the database, build the backend REST APIs, craft responsive web/mobile interfaces, configure automated tests, and deploy to production cloud and app stores.",
    deliverables: [
      "Full-stack architecture with React/React Native, Node.js & MongoDB",
      "Deployment to DigitalOcean VPS (Nginx, PM2, SSL) or cloud hosting",
      "Google Play Store and Apple App Store production submission",
      "Agile sprint delivery with transparent milestones and code reviews"
    ],
    suitableFor: "Startups, founders, and businesses needing a dependable engineer to take a product from idea to live launch."
  },
  {
    title: "Cross-Platform Mobile App Engineering",
    tagline: "High-performance iOS & Android apps from single codebase",
    description: "Full lifecycle development with React Native and Expo. From clean architecture and native SDK integrations to guaranteed App Store and Google Play approvals.",
    deliverables: [
      "Native iOS & Android builds with Expo EAS",
      "Offline-first data synchronization and local storage",
      "Push notification and biometric authentication integration",
      "Submission to Apple App Store & Google Play Console"
    ],
    suitableFor: "Startups and businesses looking to launch mobile apps fast without sacrificing native performance."
  },
  {
    title: "Backend API & Cloud Deployment Engineering",
    tagline: "High-performance Node.js REST services & database engines",
    description: "Design and implement scalable backend systems from scratch or modernize existing APIs. Enforcing schema validation, ACID transactions, role-based security, and event-driven architectures.",
    deliverables: [
      "Production-ready Node.js & Express REST APIs with Postman documentation",
      "MongoDB database modeling, indexing, and transactional operations",
      "Automated unit testing with Jest and CI/CD pipelines",
      "Linux server deployment with Nginx, SSL, and PM2 clustering"
    ],
    suitableFor: "Growing tech companies and SaaS platforms needing robust backend systems."
  },
  {
    title: "Business Automation & Custom CRM Solutions",
    tagline: "Eliminate repetitive operations with tailored workflows",
    description: "Custom internal tools, automated customer reminder systems, WhatsApp alerts, and scheduled billing recurring engines that save hundreds of operational hours.",
    deliverables: [
      "Custom lifecycle management dashboards (leads, AMC, billing)",
      "Automated WhatsApp & Email notifications (alerts, invoices)",
      "Bulk Excel/CSV data ingestion and cleaning engines",
      "Self-healing cron jobs and queue processing"
    ],
    suitableFor: "Growing businesses, equipment dealers, and service providers losing revenue to manual tracking."
  }
];

export const ENGINEERING_APPROACH = [
  {
    step: "01",
    title: "Understand the Business & User Context",
    description: "Translate real-world operational challenges and product visions into clean, functional technical specifications before writing code."
  },
  {
    step: "02",
    title: "Design Modular, Maintainable Architecture",
    description: "Structure modular component hierarchies, strict TypeScript contracts, type-safe API schemas, and normalized database models."
  },
  {
    step: "03",
    title: "Develop with Testing & Error Handling",
    description: "Engineer features defensively with Jest test validation, input schemas, robust error boundaries, and graceful fallback handling."
  },
  {
    step: "04",
    title: "Agile Sprints & Git Collaboration",
    description: "Deliver iteratively using Git feature branches, pull request reviews, sprint milestones, and transparent communication."
  },
  {
    step: "05",
    title: "Deploy to Production & Support",
    description: "Own release engineering: Linux VPS setup, Nginx reverse proxying, SSL, App Store/Play Store submissions, and ongoing monitoring."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Vocation (B.Voc) — Mass Communication",
    institution: "Savitribai Phule Pune University",
    period: "2019 – 2022",
    summary: "Built strong foundation in user psychology, communication strategy, and structured problem framing."
  },
  {
    degree: "ITEP Specialized Program — Full-Stack & Mobile Development",
    institution: "Infobeans Foundation",
    period: "2023 – 2024",
    summary: "Intensive training in MERN Stack engineering, React Native architecture, state management, and production coding practices."
  }
];
