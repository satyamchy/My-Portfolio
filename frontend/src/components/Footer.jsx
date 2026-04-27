import React from "react";
const Footer = () => {
    return (
        <footer className="w-full py-10 mt-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-8">
                    Satya
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-slate-400 font-medium tracking-wide text-sm md:text-base">
                    <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                    <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
                </div>
                <p className="mt-12 text-slate-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Satyam Kumar. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer