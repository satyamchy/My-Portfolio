import React from "react";
import { SKILLS_DATA } from '../data';

const Skills = () => {
    // Helper to map color to actual tailwind classes since dynamic concatenation often fails PurgeCSS
    const getColorClasses = (color) => {
        if (color === 'sky') return { bg: 'bg-sky-500/10', text: 'text-sky-400' };
        return { bg: 'bg-emerald-500/10', text: 'text-emerald-400' };
    };

    return (
        <section id="skills" className="flex flex-col gap-8 w-full scroll-mt-32">
            <div className="flex flex-col gap-2">
                <p className="text-emerald-400 font-semibold tracking-widest uppercase text-sm">What I do Best</p>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {SKILLS_DATA.map((category, idx) => {
                    const Icon = category.icon;
                    const styles = getColorClasses(category.color);
                    return (
                        <div key={idx} className="glass rounded-3xl p-8 flex flex-col gap-5 border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
                            <div className="flex items-center gap-4 border-b border-slate-700/50 pb-4">
                                <div className={`p-4 ${styles.bg} w-fit rounded-2xl`}>
                                    <Icon size={28} className={styles.text} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-100">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-4 py-2 glass rounded-full border-slate-600/50 text-slate-300 text-sm font-medium hover:text-emerald-400 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Skills
