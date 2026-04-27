import React from 'react'
import { Github, Linkedin, Download } from 'lucide-react';

const Feed = () => {
    return (
        <section id="feed" className='flex flex-col md:flex-row justify-center w-full gap-12 md:gap-24 items-center min-h-[75vh]'>
            <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200'></div>
                <img className='relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-slate-800 shadow-2xl z-10' src='https://th.bing.com/th/id/OIP.jLv_icdTuHq11XytJiZ4RQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="Satyam Kumar" />
            </div>

            <div className='text-center md:text-left flex flex-col items-center md:items-start'>
                <p className='text-emerald-400 font-semibold tracking-widest mb-2 uppercase text-sm'>Hello I'm</p>
                <h1 className='text-5xl md:text-7xl font-extrabold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500'>
                    Satyam Kumar
                </h1>
                <h2 className='text-xl md:text-3xl font-medium text-slate-400 mb-10'>
                    Frontend Developer
                </h2>
                
                <div className='flex gap-4 mb-10'>
                    <a href='/cv.pdf' className='group flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]'>
                        <span>Download CV</span>
                        <Download size={18} className="group-hover:animate-bounce" />
                    </a>
                    <a href='#contact' className='flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 border border-slate-700/50 text-slate-100 font-bold hover:border-emerald-500/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300'>
                        <span>Contact Info</span>
                    </a>
                </div>
                
                <div className='flex gap-5 items-center'>
                    <a href='https://www.github.com/satyam1354/' target='_blank' rel='noreferrer' className='p-3.5 rounded-full bg-slate-800/50 hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300 text-slate-400 border border-slate-700/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]'>
                        <Github size={22} />
                    </a>
                    <a href='https://www.linkedin.com/in/satyam1354/' target='_blank' rel="noopener noreferrer" className='p-3.5 rounded-full bg-slate-800/50 hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300 text-slate-400 border border-slate-700/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]'>
                        <Linkedin size={22} />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Feed