import React from "react";
import { EXPERIENCE_DATA } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col gap-10 w-full scroll-mt-32">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-4">Work Experience</h2>
            
            <div className="relative border-l-2 border-slate-700/60 ml-4 md:ml-6">
                {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="mb-12 ml-8 md:ml-14 relative group">
                        {/* Timeline Dot */}
                        <span className="absolute -left-[45px] md:-left-[69px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-sky-500 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-900 transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.2)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] z-10">
                            <Briefcase size={20} className="md:w-6 md:h-6" />
                        </span>
                        
                        {/* Content Card */}
                        <div className="glass rounded-3xl p-6 md:p-8 border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] lg:w-3/4">
                            <span className="text-sky-400 font-semibold text-sm md:text-base tracking-wide bg-sky-500/10 w-fit px-4 py-1.5 rounded-full">{exp.period}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-3">{exp.title}</h3>
                            <h4 className="text-lg md:text-xl font-medium text-slate-300">{exp.company}</h4>
                            <p className="text-slate-400 leading-relaxed mt-3 text-sm md:text-base">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Experience