import React from "react";
import { Github, ExternalLink } from 'lucide-react';

const ProjectContent = ({ item }) => {
    return (
        <div className="glass rounded-3xl overflow-hidden border-slate-700/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full bg-slate-800/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
            <div className="relative overflow-hidden w-full h-56 md:h-64 bg-slate-700">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={item.projectImage} 
                    alt={item.projectName} 
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                    {item.githubLink ? (
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]" title="View Source">
                            <Github size={24} />
                        </a>
                    ) : null}
                    {item.projectLink ? (
                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg" title="Live Demo">
                            <ExternalLink size={24} />
                        </a>
                    ) : null}
                </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{item.projectName}</h3>
                <div className="mt-4 flex gap-3 text-sm flex-wrap text-slate-300 mt-auto">
                    {/* Placeholder tags to make UI pop */}
                    <span className="px-4 py-1.5 glass rounded-full border-slate-600/50 text-emerald-400 font-semibold tracking-wide text-xs">React</span>
                    <span className="px-4 py-1.5 glass rounded-full border-slate-600/50 text-sky-400 font-semibold tracking-wide text-xs">Tailwind</span>
                </div>
            </div>
        </div>
    )
}
export default ProjectContent