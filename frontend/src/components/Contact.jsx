import { Linkedin, Mail, Phone, ExternalLink, Github } from "lucide-react";
import React from "react";
import { HERO_DATA } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center text-center w-full mt-10 scroll-mt-32">
            <div className="glass w-full max-w-[1200px] rounded-[3rem] p-12 md:p-16 flex flex-col items-center border-slate-700/50 bg-slate-800/40 shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40"></div>
                
                <p className="text-emerald-400 font-semibold tracking-widest mb-4 uppercase text-sm">Need a developer?</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-10">Let's build something together!</h2>
                
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-2 z-10">
                    
                    {/* Phone */}
                    <a href={`tel:${HERO_DATA.phone}`} className="group flex flex-col items-center justify-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
                        <div className="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500 group-hover:text-slate-900 text-emerald-400 transition-colors">
                            <Phone size={28} />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="font-bold text-slate-200">Call Me</span>
                            <span className="text-sm text-slate-400 group-hover:text-emerald-300 transition-colors">{HERO_DATA.phone}</span>
                        </div>
                    </a>

                    {/* Email */}
                    <a href={`mailto:${HERO_DATA.email}`} className="group flex flex-col items-center justify-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-700/50 hover:border-sky-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)]">
                        <div className="p-4 bg-sky-500/10 rounded-full group-hover:bg-sky-500 group-hover:text-slate-900 text-sky-400 transition-colors">
                            <Mail size={28} />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="font-bold text-slate-200">Email Me</span>
                            <span className="text-sm text-slate-400 group-hover:text-sky-300 transition-colors break-all">Direct message</span>
                        </div>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href={HERO_DATA.linkedinLink} target='_blank' rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
                        <div className="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500 group-hover:text-slate-900 text-emerald-400 transition-colors relative">
                            <Linkedin size={28} />
                            <ExternalLink size={12} className="absolute top-0 right-0 m-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="font-bold text-slate-200">Connect</span>
                            <span className="text-sm text-slate-400 group-hover:text-emerald-300 transition-colors">LinkedIn</span>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a href={HERO_DATA.githubLink} target='_blank' rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-4 bg-slate-900/60 p-8 rounded-3xl border border-slate-700/50 hover:border-sky-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)]">
                        <div className="p-4 bg-sky-500/10 rounded-full group-hover:bg-sky-500 group-hover:text-slate-900 text-sky-400 transition-colors relative">
                            <Github size={28} />
                            <ExternalLink size={12} className="absolute top-0 right-0 m-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="font-bold text-slate-200">Codehub</span>
                            <span className="text-sm text-slate-400 group-hover:text-sky-300 transition-colors">GitHub</span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    )
}
export default Contact