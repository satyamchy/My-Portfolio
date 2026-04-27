import React, { useState } from "react";
import { ChevronsDown } from 'lucide-react';
import ProjectContent from "./ProjectContent";

const Projects = () => {
    const projects = [
        { key: 1, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 2, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Portfolio Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 3, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "streamsohere Website", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" },
        { key: 4, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "news Website", githubLink: "", projectLink: "" },
        { key: 9, projectImage: "https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", projectName: "Skill Link", githubLink: "https://github.com/shambsinha/SkillLink", projectLink: "https://skill-link-3jtd.onrender.com/dashboard" }
    ];

    const [visibleProjects, setVisibleProjects] = useState(3);
    const loadMoreProjects = () => {
        setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    }

    return (
        <section id="projects" className="flex flex-col gap-8 w-full scroll-mt-32">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-emerald-400 font-semibold tracking-widest mb-2 uppercase text-sm">Browse my recent</p>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-4">Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.slice(0, visibleProjects).map(item => {
                        return <ProjectContent key={item.key} item={item} />
                    })
                }
            </div>
            
            {
                visibleProjects < projects.length && (
                    <div className="flex justify-center mt-6">
                        <button onClick={loadMoreProjects} className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 text-slate-100 font-semibold hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300 shadow-md">
                            Load More <ChevronsDown className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                )
            }
            {
                visibleProjects === projects.length && (
                    <div className="text-center font-bold text-slate-500 mt-6 bg-slate-800/30 py-3 rounded-xl border border-slate-700/50">No more projects to show at the moment.</div>
                )
            }
        </section>
    )
}
export default Projects