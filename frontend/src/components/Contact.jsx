import { Linkedin, Mail, ArrowRight } from "lucide-react";
import React from "react";
import { HERO_DATA } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center text-center w-full mt-10 scroll-mt-32">
            <div className="glass w-full max-w-4xl rounded-[3rem] p-12 md:p-20 flex flex-col items-center border-slate-700/50 bg-gradient-to-b from-slate-800/80 to-slate-900/80 shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
                
                <p className="text-emerald-400 font-semibold tracking-widest mb-4 uppercase text-sm">Need a developer?</p>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-8">Let's work together!</h2>
                
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl justify-center mt-4 z-10">
                    <a href={`mailto:${HERO_DATA.email}`} className="group flex flex-1 items-center justify-center gap-3 bg-emerald-500 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                        <Mail size={22} />
                        <span>Email Me</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a href={HERO_DATA.linkedinLink} target='_blank' rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-3 bg-slate-800 text-slate-100 px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1">
                        <Linkedin size={22} className="text-sky-400" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Contact