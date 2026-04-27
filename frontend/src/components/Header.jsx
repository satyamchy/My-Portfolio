import React, { useState } from 'react'
import {X, Menu} from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className='text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400'>
            Satya
          </div>
    
          {/* Hamburger Button - Visible on Small Screens */}
          <button className='block md:hidden text-slate-200 hover:text-emerald-400 transition-colors' onClick={()=> setIsOpen(!isOpen)}>
             {isOpen? <X size={28} /> :<Menu size={28}/> }
          </button>
    
          {/* Desktop Menu - Hidden on Small Screens */}
          <div className="hidden md:flex space-x-8 text-lg font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">Contact</a>
          </div>
      </div>

      {/* Mobile Menu - Shown when `isOpen` is true */}
      { isOpen && (
        <div className='absolute top-[72px] right-4 w-48 glass rounded-2xl md:hidden flex flex-col items-start p-6 space-y-4 border border-white/10 shadow-2xl'>
          <a href='#about' className="text-slate-300 hover:text-emerald-400 font-medium w-full" onClick={() => setIsOpen(false)}>About</a>
          <a href='#experience' className="text-slate-300 hover:text-emerald-400 font-medium w-full" onClick={() => setIsOpen(false)}>Experience</a>
          <a href='#projects' className="text-slate-300 hover:text-emerald-400 font-medium w-full" onClick={() => setIsOpen(false)}>Projects</a>
          <a href='#contact' className="text-slate-300 hover:text-emerald-400 font-medium w-full" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}
export default Header