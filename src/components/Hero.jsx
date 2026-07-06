import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Terminal, ArrowDown, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState('SYSTEM');
  const words = ['NEXUS', 'AI_CORE', 'SECURITY', 'LOGISTICS'];

  useEffect(() => {
    let index = 0;
    let glitchInterval;
    
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      let iterations = 0;
      const targetWord = words[index];
      const randomChars = "01<>[]{}-+%%**";
      
      if (glitchInterval) clearInterval(glitchInterval);
      
      glitchInterval = setInterval(() => {
        const nextText = targetWord.split("").map((char, idx) => {
          if (idx < iterations) return targetWord[idx];
          return randomChars[Math.floor(Math.random() * randomChars.length)];
        }).join("");
        
        setGlitchText(nextText);
        
        iterations += 1/3;
        if (iterations >= targetWord.length + 1) {
          clearInterval(glitchInterval);
          setGlitchText(targetWord);
        }
      }, 30);
      
    }, 4000);

    return () => {
      clearInterval(interval);
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden z-10">
      
      {/* Aurora Radial Light Overlay (Vibrant Apple-style background blur) */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[30vw] rounded-full bg-gradient-to-r from-cyber-cyan/10 via-cyber-purple/5 to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-2 gap-12 items-center z-10">
        
        {/* Left Side: Content & Actions */}
        <div className="flex flex-col items-start text-left gap-6">
          {/* Status Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5 text-cyber-cyan text-[10px] font-mono tracking-widest uppercase font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse-status" />
            [ NEXUS OS ONLINE ]
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            An AI Operating System for <span className="bg-gradient-to-r from-white via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">{glitchText}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-md sm:text-lg font-light leading-relaxed max-w-xl"
          >
            Deploy holographic secure sourcing models, predictive customs compliance clearing, and causeway transit logistics logs inside a single unified dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full bg-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] text-black font-mono uppercase tracking-wider text-xs font-extrabold flex items-center justify-center gap-2 group transition-all duration-300"
            >
              Deploy Node
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-white font-mono uppercase tracking-wider text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            >
              OS Diagnostics
            </a>
          </motion.div>
        </div>

        {/* Right Side: Concentric JARVIS Hologram AI Core */}
        <div className="relative flex items-center justify-center min-h-[22rem] sm:min-h-[30rem] w-full">
          {/* Hologram rings container */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Outer concentric spinning ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/15 animate-spin-slow" />
            
            {/* Inner reverse concentric ring */}
            <div className="absolute inset-6 rounded-full border border-dashed border-cyber-purple/20 animate-spin-reverse-slow" />

            {/* Glowing tech grid background inside circles */}
            <div className="absolute inset-12 rounded-full bg-radial-[circle,rgba(0,240,255,0.02)_0%,transparent_70%] border border-white/5 flex items-center justify-center">
              <svg className="w-full h-full opacity-35" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(0,240,255,0.1)" strokeWidth="0.5" strokeDasharray="1 3" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(0,240,255,0.08)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(0,240,255,0.08)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Pulsing AI core */}
            <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.15)] animate-pulse">
              <Cpu size={32} className="text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
            </div>

            {/* Floating Statistic 1 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 glass-panel border border-white/5 px-4 py-2.5 flex flex-col items-start gap-0.5"
            >
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ SOURCED_PRODUCTS ]</span>
              <span className="font-mono text-sm font-bold text-cyber-cyan">150+ BATCHES</span>
            </motion.div>

            {/* Floating Statistic 2 */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute bottom-6 -left-4 glass-panel border border-white/5 px-4 py-2.5 flex flex-col items-start gap-0.5"
            >
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ ROUTING_PRECISION ]</span>
              <span className="font-mono text-sm font-bold text-cyber-green">99.9% UPTIME</span>
            </motion.div>

            {/* Floating Statistic 3 */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-8 right-6 glass-panel border border-white/5 px-4 py-2.5 flex flex-col items-start gap-0.5"
            >
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ SYNC_LATENCY ]</span>
              <span className="font-mono text-sm font-bold text-cyber-purple">&lt; 350MS</span>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-zinc-600 font-mono text-[9px] tracking-widest"
        >
          <span>MONITOR SYSTEM</span>
          <ArrowDown size={12} className="text-zinc-500" />
        </motion.div>
      </div>

    </section>
  );
}
