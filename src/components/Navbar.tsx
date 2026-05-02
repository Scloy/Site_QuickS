'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-8 py-6 ${
          scrolled ? 'bg-ig-canvas/80 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
                 {/* Logo and Name */}
          <div className="flex items-center space-x-4 cursor-pointer group">
            <img 
             <img src="./Logo_QuickS.png" alt="QuickS Logo" style={{ height: '50px' }} />
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-sans font-bold text-ig-text tracking-tighter text-2xl group-hover:tracking-normal transition-all duration-300">
              QUICKS
            </span>
          </div>

          {/* Navigation - Centered Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-sans text-xs uppercase tracking-widest text-ig-text/70">
            <a href="#about" className="hover:text-ig-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-ig-text hover:after:w-full after:transition-all after:duration-300">Sobre</a>
            <a href="#services" className="hover:text-ig-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-ig-text hover:after:w-full after:transition-all after:duration-300">Serviços</a>
            <a href="#portfolio" className="hover:text-ig-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-ig-text hover:after:w-full after:transition-all after:duration-300">Portfólio</a>
            <a href="#contact" className="hover:text-ig-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-ig-text hover:after:w-full after:transition-all after:duration-300">Contato</a>
          </nav>

          {/* Action Button - Static Version */}
          <div className="hidden md:block">
             <button 
               className="font-sans text-xs uppercase tracking-widest text-ig-text hover:opacity-70 transition-opacity"
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Começar
             </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
