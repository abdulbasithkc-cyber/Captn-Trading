import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Products', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`w-full max-w-5xl rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
            scrolled 
              ? 'bg-[#0a0a0f]/60 backdrop-blur-2xl border border-cyber-cyan/20 shadow-[0_0_20px_rgba(0,240,255,0.06)]' 
              : 'bg-[#0a0a0f]/35 backdrop-blur-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-semibold tracking-wider group">
            <div className="w-8 h-8 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.15)] group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all">
              <Terminal size={14} />
            </div>
            <span className="font-mono text-md font-bold tracking-widest group-hover:text-cyber-cyan transition-colors">NEXUS</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyber-cyan transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Trigger */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-green"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#0a0a0f] rounded-full group-hover:bg-opacity-0">
                Deploy Node
              </span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-4 right-4 z-40 glass-panel border border-cyber-cyan/15 rounded-2xl p-6 lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white text-sm font-mono uppercase tracking-wider font-semibold transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-green text-white text-xs font-mono uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            >
              Deploy Node
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
