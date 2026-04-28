import React from "react";
import { PROJECTS_DATA } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col gap-10 w-full scroll-mt-32">
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b border-slate-700/50 pb-6 mb-2">
                <p className="text-emerald-400 font-semibold tracking-widest mb-2 uppercase text-sm">Browse my recent</p>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Projects Portfolio</h2>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b border-slate-700/50 pb-6 mb-8 mt-12">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Deployed Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.slice(0, 3).map(item => (
                    <div key={item.id} className="glass rounded-3xl overflow-hidden border-slate-700/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full bg-slate-800/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] max-w-[450px] mx-auto w-full">
                        <div className="relative overflow-hidden w-full h-56 bg-slate-700 shrink-0">
                            <img 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                src={item.image} 
                                alt={item.name} 
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                                {item.github ? (
                                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]" title="View Source">
                                        <Github size={24} />
                                    </a>
                                ) : null}
                                {item.live ? (
                                    <a href={item.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg" title="Live Demo">
                                        <ExternalLink size={24} />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-2xl font-bold text-slate-100 mb-3">{item.name}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-700/50 flex gap-3 flex-wrap text-sm text-slate-300">
                                {item.tech.map((techName, tIdx) => (
                                    <span key={tIdx} className={`px-4 py-1.5 glass rounded-full border-slate-600/50 font-semibold tracking-wide text-xs ${tIdx % 2 === 0 ? 'text-emerald-400' : 'text-sky-400'}`}>
                                        {techName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b border-slate-700/50 pb-6 mb-8 mt-16">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Sample Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.slice(3).map(item => (
                    <div key={item.id} className="glass rounded-3xl overflow-hidden border-slate-700/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full bg-slate-800/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] max-w-[450px] mx-auto w-full">
                        <div className="relative overflow-hidden w-full h-56 bg-slate-700 shrink-0">
                            <img 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                src={item.image} 
                                alt={item.name} 
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                                {item.github ? (
                                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]" title="View Source">
                                        <Github size={24} />
                                    </a>
                                ) : null}
                                {item.live ? (
                                    <a href={item.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg" title="Live Demo">
                                        <ExternalLink size={24} />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-2xl font-bold text-slate-100 mb-3">{item.name}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-700/50 flex gap-3 flex-wrap text-sm text-slate-300">
                                {item.tech.map((techName, tIdx) => (
                                    <span key={tIdx} className={`px-4 py-1.5 glass rounded-full border-slate-600/50 font-semibold tracking-wide text-xs ${tIdx % 2 === 0 ? 'text-emerald-400' : 'text-sky-400'}`}>
                                        {techName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects