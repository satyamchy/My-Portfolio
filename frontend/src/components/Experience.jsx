import React from "react";
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
    // Dynamic array for easy updates
    const experiences = [
        {
            id: 1,
            type: "education", 
            title: "City central high school",
            period: "2011-2019",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis unde culpa, veniam ad mollitia laboriosam. Voluptatum distinctio quae voluptatibus voluptates voluptate ut dolor nam, veniam ratione enim qui soluta!"
        },
        {
            id: 2,
            type: "education",
            title: "City central high school",
            period: "2011-2019",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis unde culpa, veniam ad mollitia laboriosam. Voluptatum distinctio quae voluptatibus voluptates voluptate ut dolor nam, veniam ratione enim qui soluta!"
        },
        {
            id: 3,
            type: "education",
            title: "City central high school",
            period: "2011-2019",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis unde culpa, veniam ad mollitia laboriosam. Voluptatum distinctio quae voluptatibus voluptates voluptate ut dolor nam, veniam ratione enim qui soluta!"
        }
    ];

    return (
        <section id="experience" className="flex flex-col gap-10 w-full scroll-mt-32">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-4">Experience & Education</h2>
            
            <div className="relative border-l-2 border-slate-700/60 ml-4 md:ml-6">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="mb-12 ml-8 md:ml-14 relative group">
                        {/* Timeline Dot */}
                        <span className="absolute -left-[45px] md:-left-[69px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] z-10">
                            {exp.type === 'education' ? <GraduationCap size={20} className="md:w-6 md:h-6" /> : <Briefcase size={20} className="md:w-6 md:h-6" />}
                        </span>
                        
                        {/* Content Card */}
                        <div className="glass rounded-3xl p-6 md:p-8 border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                            <span className="text-emerald-400 font-semibold text-sm md:text-base tracking-wide bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full">{exp.period}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-3">{exp.title}</h3>
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