import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-4xl glass-panel rounded-full px-6 py-3 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-semibold tracking-wider group">
            <div className="w-8 h-8 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)] group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Terminal size={16} />
            </div>
            <span className="font-mono text-lg font-bold group-hover:text-cyber-cyan transition-colors">NEXUS</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-cyan transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#quote" 
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-cyber-cyan to-cyber-purple group-hover:from-cyber-cyan group-hover:to-cyber-purple hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#0a0a0f] rounded-full group-hover:bg-opacity-0">
                Get Started
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white text-md font-medium transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#quote" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white text-sm font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
