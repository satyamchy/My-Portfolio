import { Code, Layout, Smartphone, Database, Server, PenTool, GitBranch, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';

export const HERO_DATA = {
    name: "Satyam Kumar",
    roles: ["Software & Data Engineer"],
    bio: "I build scalable software, dynamic user interfaces, and robust data pipelines.",
    cvLink: "/cv.pdf",
    githubLink: "https://www.github.com/satyamchy/",
    linkedinLink: "https://www.linkedin.com/in/satyam1354/",
    email: "satyamkr1354@gmail.com",
    phone: "+91 9876543210" // Add your real phone number here!
};

export const ABOUT_DATA = {
    title: "About Me",
    description1: "I am a passionate Software and Data Engineer with a strong foundation in modern web technologies and data architecture. My journey is fueled by an insatiable curiosity and a drive to solve complex problems through code.",
    description2: "I specialize in creating seamless, scalable, and beautifully designed user experiences, while also ensuring the backend systems and data pipelines are robust and efficient. Let's build something amazing together!"
};

export const SKILLS_DATA = [
    {
        category: "Frontend Development",
        icon: Layout,
        color: "emerald",
        skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
        category: "Backend & Data",
        icon: Server,
        color: "sky",
        skills: ["Node.js", "Express", "Python", "SQL", "MongoDB"]
    },
    {
        category: "Tools & DevOps",
        icon: GitBranch,
        color: "emerald",
        skills: ["Git & GitHub", "Docker", "Vite", "Postman", "Linux"]
    }
];

export const EXPERIENCE_DATA = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Tech Innovators Inc.",
        period: "June 2023 - Present",
        description: "Served as a core member of the platform engineering team, focused on creating scalable web interfaces and robust internal tools.",
        projects: [
            {
                name: "Internal Analytics Dashboard",
                detail: "Developed a modern web application using React.js and Node.js. Optimized database queries which improved application load times by 40%."
            },
            {
                name: "Automated Reporting Pipeline",
                detail: "Created Python scripts to generate end-of-week client reports automatically, reducing manual HR workload by 15 hours a week."
            }
        ]
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Freelance",
        period: "Jan 2022 - May 2023",
        description: "Designed and implemented responsive user interfaces for a variety of clients.",
        projects: [
            {
                name: "E-Commerce Storefront",
                detail: "Leveraged Tailwind CSS and Vite to build a rapid e-commerce UI that scaled to 10k unique daily visitors."
            }
        ]
    }
];

export const EDUCATION_CERTS_DATA = {
    education: [
        {
            id: 1,
            title: "B.Tech in Computer Science",
            institution: "University of Technology",
            period: "2019 - 2023",
            description: "Graduated with honors. Coursework focused on Data Structures, Algorithms, Web Development, and Database Management."
        },
        {
            id: 2,
            title: "City central high school",
            institution: "High School",
            period: "2011 - 2019",
            description: "Completed secondary education with a focus on science and mathematics."
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
