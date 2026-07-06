import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowDown, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [glitchText, setGlitchText] = useState('NEXUS');
  const words = ['SECURE', 'NEXUS', 'SHIELD', 'CYBER'];

  useEffect(() => {
    let index = 0;
    let glitchInterval;
    
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      
      // Glitch simulation effect before text changes
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
      
      {/* 3D Wireframe Grid Graphic (Background of section) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
        <svg className="w-[85vw] h-[85vw] md:w-[50rem] md:h-[50rem] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="35" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="0.5" strokeDasharray="1 4" />
          <path d="M5,50 L95,50" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.2" />
          <path d="M50,5 L50,95" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.2" />
          <path d="M18.5,18.5 L81.5,81.5" stroke="rgba(0, 240, 255, 0.04)" strokeWidth="0.2" />
          <path d="M18.5,81.5 L81.5,18.5" stroke="rgba(0, 240, 255, 0.04)" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="w-full max-w-4xl text-center flex flex-col items-center gap-6 z-10">
        {/* Pulsing Badge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-green/20 bg-cyber-green/5 text-cyber-green text-xs font-mono font-semibold tracking-widest shadow-[0_0_15px_rgba(57,255,136,0.1)] mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
          [ SYSTEM ONLINE ]
        </motion.div>

        {/* Massive Headline */}
        <motion.h1 
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl"
        >
          Next-Gen Commerce Security Built For <span className="bg-gradient-to-r from-white via-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">{glitchText}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
        >
          Secure supply corridors, predictive global compliance routing, and automated factory auditing mapped into a single neural ledger interface.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a 
            href="#quote" 
            className="px-8 py-3.5 rounded-full bg-cyber-cyan text-black font-semibold text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Deploy Core
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-3.5 rounded-full bg-[#0a0a0f]/40 border border-white/10 hover:border-white/20 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:bg-[#0a0a0f]/60 flex items-center justify-center gap-2"
          >
            Sourcing Spec
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-zinc-600 font-mono text-[10px] tracking-widest"
        >
          <span>SCROLL</span>
          <ArrowDown size={14} className="text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
}
