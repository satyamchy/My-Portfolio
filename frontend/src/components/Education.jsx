import React from "react";
import { EDUCATION_CERTS_DATA } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="flex flex-col gap-16 w-full scroll-mt-32">
            
            {/* Education Sub-section */}
            <div className="flex flex-col gap-10">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-2">Education</h2>
                <div className="relative border-l-2 border-slate-700/60 ml-4 md:ml-6">
                    {EDUCATION_CERTS_DATA.education.map((edu) => (
                        <div key={edu.id} className="mb-12 ml-8 md:ml-14 relative group">
                            {/* Timeline Dot */}
                            <span className="absolute -left-[45px] md:-left-[69px] top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] z-10">
                                <GraduationCap size={20} className="md:w-6 md:h-6" />
                            </span>
                            
                            {/* Content Card */}
                            <div className="glass rounded-3xl p-6 md:p-8 border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] lg:w-3/4">
                                <span className="text-emerald-400 font-semibold text-sm md:text-base tracking-wide bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full">{edu.period}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-3">{edu.title}</h3>
                                <h4 className="text-lg md:text-xl font-medium text-slate-300">{edu.institution}</h4>
                                <p className="text-slate-400 leading-relaxed mt-3 text-sm md:text-base">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Sub-section */}
            <div className="flex flex-col gap-8">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Licenses & Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {EDUCATION_CERTS_DATA.certifications.map((cert) => (
                        <div key={cert.id} className="glass rounded-3xl p-6 md:p-8 border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                                <Award size={24} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold text-slate-100">{cert.title}</h4>
                                <p className="text-slate-300 font-medium">{cert.issuer}</p>
                                <p className="text-slate-400 text-sm mt-1 mb-3">Issued: {cert.date}</p>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 hover:underline w-fit">
                                    View Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Education
