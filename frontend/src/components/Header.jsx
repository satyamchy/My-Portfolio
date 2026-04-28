import React, { useState } from 'react'
import { X, Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className='text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400'>
          Satyam
        </div>

        {/* Hamburger Button - Visible on Small Screens */}
        <button className='block md:hidden text-slate-200 hover:text-emerald-400 transition-colors' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu - Hidden on Small Screens */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-emerald-400 transition-colors duration-300">{link.name}</a>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Shown when `isOpen` is true */}
      {isOpen && (
        <div className='absolute top-[72px] right-4 w-56 glass rounded-2xl md:hidden flex flex-col items-start p-6 space-y-4 border border-white/10 shadow-2xl'>
          {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 font-medium w-full" onClick={() => setIsOpen(false)}>{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
export default Header