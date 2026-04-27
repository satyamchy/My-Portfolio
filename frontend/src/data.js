import { Code, Layout, Smartphone, Database, Server, PenTool, GitBranch, Globe, Award, Briefcase, GraduationCap, BarChart3, Cloud, Brain } from 'lucide-react';

export const HERO_DATA = {
    name: "Satyam Kumar",
    roles: ["Software & Data Engineer"],
    bio: "I build scalable software, dynamic user interfaces, and robust data pipelines.",
    cvLink: "/cv.pdf",
    githubLink: "https://www.github.com/satyamchy/",
    linkedinLink: "https://www.linkedin.com/in/satyam1354/",
    email: "satyamkr1354@gmail.com",
    phone: "+91 9693342101" // Add your real phone number here!
};

export const ABOUT_DATA = {
  title: "About Me",
  description1:
    "I’m a passionate engineer who enjoys building useful products with code and solving real-world problems through technology. My journey started with web development and gradually expanded into data engineering, cloud platforms, and AI-powered applications through hands-on projects and industry experience.",

  description2:
    "I have worked on frontend and backend development using modern JavaScript frameworks, while also gaining practical exposure to tools like Snowflake, Databricks, IICS, SQL, Power BI, and AWS during my internship. I enjoy learning new technologies, creating clean solutions, and continuously improving my skills with every project I build."
};

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: Layout,
    color: "emerald",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Responsive Web Design"
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "sky",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt",
      "Multer",
      "Cloudinary",
      "Java",
      "Python"
    ]
  },
  {
    category: "Data Engineering",
    icon: Database,
    color: "violet",
    skills: [
      "SQL",
      "Snowflake",
      "Databricks",
      "IICS",
      "dbt",
      "ETL Pipelines",
      "Data Transformation",
      "Power Query (M Language)",
      "Data Warehousing"
    ]
  },
  {
    category: "Analytics & BI",
    icon: BarChart3,
    color: "cyan",
    skills: [
      "Power BI",
      "Dashboard Development",
      "Power Automate",
      "Reporting Automation",
      "Data Visualization"
    ]
  },
  {
    category: "Cloud & Tools",
    icon: Cloud,
    color: "amber",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Linux / Ubuntu WSL",
      "Postman"
    ]
  },
  {
    category: "AI / ML (Learning & Projects)",
    icon: Brain,
    color: "rose",
    skills: [
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "NLP Basics",
      "Model Integration"
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Data Engineer Intern",
    company: "Innova Solutions",
    period: "2025 - 2026 (11 Months)",
    description:
      "Worked as a Data Engineer Intern in Hyderabad, contributing to enterprise data workflows, reporting solutions, and cloud-based analytics platforms. Gained hands-on experience in modern data engineering tools, automation, and business intelligence systems.",
    projects: [
      {
        name: "Power BI Reporting Solutions",
        detail:
          "Designed and developed interactive Power BI dashboards for business insights, KPI tracking, and performance monitoring. Improved decision-making through clear visual analytics."
      },
      {
        name: "Data Transformation Pipelines",
        detail:
          "Built and optimized ETL workflows using Power Query (M Language) to clean, transform, and process business data from multiple sources."
      },
      {
        name: "Power Automate Process Automation",
        detail:
          "Created automated workflows using Power Automate for notifications, approvals, and recurring business tasks, reducing manual operational effort."
      },
      {
        name: "Snowflake Cloud Data Warehouse",
        detail:
          "Worked with Snowflake for data storage, querying, and warehouse management. Assisted in handling scalable cloud-based analytical workloads."
      },
      {
        name: "Databricks & SQL Operations",
        detail:
          "Used SQL and Databricks for querying datasets, data analysis, and supporting large-scale processing requirements."
      },
      {
        name: "AWS Cloud Exposure",
        detail:
          "Gained practical exposure to AWS services for cloud infrastructure, storage, and deployment-related tasks within data workflows."
      }
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Personal Projects & Freelance",
    period: "2023 - Present",
    description:
      "Built modern full-stack applications with focus on scalable backend systems, responsive frontend experiences, and real-world problem solving.",
    projects: [
      {
        name: "Skill-Link",
        detail:
          "Developed a job-connect platform for village workers using Node.js, Express.js, EJS, JavaScript, and MongoDB with search by zip code and service type."
      },
      {
        name: "PulsePoint News",
        detail:
          "Built a full-stack AI-powered news platform with React and Node.js featuring summarization, sentiment analysis, recommendations, and fake news detection."
      },
      {
        name: "VidEssentials",
        detail:
          "Created a media-sharing web app using React, Express.js, bcrypt, and Cloudinary for secure authentication and media management."
      }
    ]
  }
];

export const EDUCATION_CERTS_DATA = {
    education: [
        {
            id: 1,
            title: "Bachelor of Engineering in Computer Science",
            institution: "Chitkara University",
            period: "2022 - 2026",
            description: "Graduated with honors. Coursework focused on Data Structures, Algorithms, Web Development, and Database Management."
        },
        {
            id: 2,
            title: "Trident Public School",
            institution: "CBSE",
            period: "2011 - 2019",
            description: "Completed secondary education with a focus on PCM (Physics, Chemistry, Mathematics)."
        },
        {
            id: 3,
            title: "City central high school",
            institution: "CBSE",
            period: "2020 - 2021",
            description: "Completed secondary education with a focus on subjects like science, social science, english, hindi and mathematics."
        }
    ],
    certifications: [
        {
            id: 1,
            title: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            date: "Aug 2023",
            link: "#"
        },
        {
            id: 2,
            title: "Advanced React Patterns",
            issuer: "Frontend Masters",
            date: "Feb 2023",
            link: "#"
        }
    ]
};

export const PROJECTS_DATA = [
    { 
        id: 1, 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", 
        name: "Skill Link", 
        description: "A comprehensive platform connecting freelancers with clients, featuring real-time chat and secure remote payment gateways.",
        github: "https://github.com/shambsinha/SkillLink", 
        live: "https://skill-link-3jtd.onrender.com/dashboard", 
        tech: ["React", "Node.js"] 
    },
    { 
        id: 2, 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", 
        name: "Streamsohere Platform", 
        description: "An advanced streaming dashboard interface that aggregates multiple live streams with low latency monitoring metrics.",
        github: "https://github.com/shambsinha/SkillLink", 
        live: "https://skill-link-3jtd.onrender.com/dashboard", 
        tech: ["Next.js", "Tailwind"] 
    },
    { 
        id: 3, 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
        name: "Interactive Portfolio", 
        description: "A dynamic, recruiter-ready developer portfolio heavily reliant on glassmorphism UI, centralized config files, and Tailwind animations.",
        github: "https://github.com/satyamchy/", 
        live: "https://skill-link-3jtd.onrender.com/dashboard", 
        tech: ["React", "Vite", "Tailwind"] 
    },
    { 
        id: 4, 
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", 
        name: "News Aggregator", 
        description: "An automated bot that retrieves global headline data via RESTful APIs and curates a customized daily digest.",
        github: "", 
        live: "", 
        tech: ["JavaScript", "API"] 
    }
];
