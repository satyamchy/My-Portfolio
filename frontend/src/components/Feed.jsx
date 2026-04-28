import React from 'react'
import { Download, Sparkles, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../data';

const Feed = () => {
    return (
        <section id="feed" className='flex flex-col-reverse md:flex-row justify-between w-full gap-16 md:gap-10 items-center min-h-[85vh] py-10'>
            
            {/* Left Column: Text & CTA */}
            <div className='flex flex-col items-center md:items-start text-center md:text-left lg:w-3/5 z-10'>
                
                {/* Premium Pulsing Availability Badge */}
                <div className="flex items-center gap-3 px-5 py-2 glass rounded-full border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 md:mb-8 w-fit shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="text-emerald-400 text-xs md:text-sm font-bold uppercase tracking-widest">Available for opportunities</span>
                </div>

                <h1 className='text-5xl md:text-7xl lg:text-8xl font-black mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 tracking-tight leading-tight'>
                    {HERO_DATA.name}
                </h1>
                
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400'>
                    {HERO_DATA.roles.join(" • ")}
                </h2>
                
                <p className='text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed'>
                    {HERO_DATA.bio}
                </p>
                
                <div className='flex flex-wrap gap-4 z-50'>
                    <div className="relative group inline-block z-50">
                        <button className='group/btn relative flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-emerald-500 text-slate-950 font-black text-sm md:text-base hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] overflow-hidden'>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                            <span className="relative z-10 flex items-center gap-2">
                               <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                               Download Resume
                               <ChevronDown size={18} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                            </span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-[220px] md:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                            <div className="glass rounded-2xl border border-slate-700/50 bg-slate-900/90 backdrop-blur-xl p-2 shadow-2xl flex flex-col gap-1">
                                {HERO_DATA.resumes?.map((resume, idx) => (
                                    <a key={idx} href={resume.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-emerald-500/20 hover:text-emerald-400 rounded-xl transition-colors">
                                        <Download size={16} />
                                        {resume.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <a href={HERO_DATA.linkedinLink} target="_blank" rel="noopener noreferrer" className='group relative flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-slate-800 text-emerald-400 font-black text-sm md:text-base hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-slate-700/50 overflow-hidden'>
                        <span className="relative z-10 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin group-hover:scale-110 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            LinkedIn
                        </span>
                    </a>
                </div>
            </div>

            {/* Right Column: Image with Premium Decorators */}
            <div className='relative flex justify-center lg:w-2/5'>
                {/* Glowing Background Blob */}
                <div className='absolute inset-0 bg-gradient-to-tr from-emerald-500 to-sky-500 rounded-full blur-[100px] opacity-40 flex items-center justify-center animate-pulse' style={{animationDuration: '4s'}}></div>
                
                <div className="relative group">
                    {/* Defaulting to a high-quality tech placeholder until you upload yours */}
                    <img 
                        className='relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 md:border-8 border-slate-900 shadow-2xl z-20 group-hover:scale-105 transition-transform duration-700 ease-in-out' 
                        src={HERO_DATA.image || 'https://images.unsplash.com/photo-1544256718-3bbed23ceb5c?auto=format&fit=crop&w=800&q=80'} 
                        alt={HERO_DATA.name} 
                    />
                    

                </div>
            </div>
        </section>
    )
}
export default Feed