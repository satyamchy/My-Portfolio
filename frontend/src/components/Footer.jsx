import React from "react";
import { HERO_DATA } from '../data';

const Footer = () => {
    return (
        <footer className="w-full py-10 mt-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-8">
                    {HERO_DATA.name.split(" ")[0]}
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-slate-400 font-medium tracking-wide text-sm md:text-base">
                    <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                    <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
                    <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
                    <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
                </div>
                <p className="mt-12 text-slate-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} {HERO_DATA.name}. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer