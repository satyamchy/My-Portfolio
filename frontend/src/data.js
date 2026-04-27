import { Code, Layout, Smartphone, Database, Server, PenTool, GitBranch, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';

export const HERO_DATA = {
    name: "Satyam Kumar",
    roles: ["Software & Data Engineer"],
    bio: "I build scalable software, dynamic user interfaces, and robust data pipelines.",
    cvLink: "/cv.pdf",
    githubLink: "https://www.github.com/satyam1354/",
    linkedinLink: "https://www.linkedin.com/in/satyam1354/",
    email: "satyamkr1354@gmail.com"
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
        description: "Developed modern web applications using React.js and Node.js. Optimized database queries and improved application load times by 40%."
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Freelance",
        period: "Jan 2022 - May 2023",
        description: "Designed and implemented responsive user interfaces for a variety of clients. Leveraged Tailwind CSS and Vite for rapid development and high performance."
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
        category: "Real-World Projects",
        items: [
            { id: 1, image: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", name: "Skill Link", github: "https://github.com/shambsinha/SkillLink", live: "https://skill-link-3jtd.onrender.com/dashboard", tech: ["React", "Node.js"] },
            { id: 2, image: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", name: "Streamsohere Platform", github: "https://github.com/shambsinha/SkillLink", live: "https://skill-link-3jtd.onrender.com/dashboard", tech: ["Next.js", "Tailwind"] }
        ]
    },
    {
        category: "Personal & Practice Projects",
        items: [
            { id: 3, image: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", name: "Interactive Portfolio", github: "https://github.com/shambsinha/SkillLink", live: "https://skill-link-3jtd.onrender.com/dashboard", tech: ["React", "Vite", "Tailwind"] },
            { id: 4, image: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", name: "News Aggregator", github: "", live: "", tech: ["JavaScript", "API"] }
        ]
    }
];
