import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Globe, Cpu } from 'lucide-react';

export default function About() {
  const [terminalLines, setTerminalLines] = useState([]);
  
  const consoleScript = [
    { text: "NEXUS Core Sourcing OS v4.12.0", delay: 100 },
    { text: "---------------------------------", delay: 100 },
    { text: "> initializing neural trade modules...", delay: 300 },
    { text: "> verifying GCC customs clearance protocols...", delay: 400 },
    { text: "> check King Fahd Causeway telemetry... [OK]", delay: 500 },
    { text: "> check Khalifa Port container tracking... [ACTIVE]", delay: 400 },
    { text: "> loading verified factory audits database...", delay: 600 },
    { text: "> compiled 182 approved supply checkpoints.", delay: 300 },
    { text: "> smart contract validation locks: ENGAGED", delay: 500 },
    { text: "> NEXUS core operating: SECURE", delay: 200 }
  ];

  useEffect(() => {
    let currentLine = 0;
    const addNextLine = () => {
      if (currentLine < consoleScript.length) {
        const lineText = consoleScript[currentLine].text;
        const nextDelay = consoleScript[currentLine].delay;
        setTerminalLines(prev => [...prev, lineText]);
        currentLine++;
        setTimeout(addNextLine, nextDelay);
      }
    };
    
    // Auto start log lines compiling
    const startTimeout = setTimeout(addNextLine, 500);
    return () => clearTimeout(startTimeout);
  }, []);

  const stats = [
    { label: 'Years Active', value: '12+', icon: <ShieldCheck size={16} className="text-cyber-green" /> },
    { label: 'GCC Nodes', value: '50+', icon: <Globe size={16} className="text-cyber-cyan" /> },
    { label: 'Total Audits', value: '1,200+', icon: <Cpu size={16} className="text-cyber-cyan" /> },
    { label: 'Platform Uptime', value: '99.99%', icon: <Server size={16} className="text-cyber-green" /> }
  ];

  return (
    <section id="about" className="relative py-24 px-4 z-10 border-t border-white/5 bg-[#07070b]/40 backdrop-blur-3xl overflow-hidden">
      
      {/* Glow orb for styling */}
      <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#8b5cf6]/4 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto grid md:grid-2 gap-16 items-center">
        
        {/* Left Column: Fake Terminal Window */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full font-mono text-xs text-left"
        >
          {/* Terminal Title Bar */}
          <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[10px] text-zinc-500 font-medium">terminal@nexus-core:~</span>
            <div className="w-10" />
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 min-h-[17.5rem] bg-[#050508]/80 text-zinc-300 flex flex-col gap-2 max-h-[22rem] overflow-y-auto font-mono leading-relaxed">
            {terminalLines.map((line, idx) => {
              const isOk = line.includes("[OK]");
              const isActive = line.includes("[ACTIVE]");
              const isTitle = line.includes("NEXUS Core");
              
              let textColor = "text-zinc-300";
              if (isOk || isActive) textColor = "text-cyber-green font-bold";
              if (isTitle) textColor = "text-cyber-cyan font-bold";
              if (line.startsWith(">")) textColor = "text-zinc-400";
              
              return (
                <div key={idx} className={`${textColor} font-mono`}>
                  {line}
                </div>
              );
            })}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="inline-block w-1.5 h-4 bg-cyber-cyan ml-1 align-middle"
            />
          </div>
        </motion.div>

        {/* Right Column: About Narrative Copy */}
        <div className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-cyber-cyan uppercase font-bold">
              [ SECURE PLATFORM ]
            </span>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              A Trade Operating System built for Modern Enterprise
            </h2>
          </div>

          <p className="text-zinc-400 font-light leading-relaxed">
            NEXUS merges general trading with blockchain-inspired compliance tracking and automated routing models. We specialize in routing material containers over causeway networks and through ports, removing border custom friction.
          </p>
          <p className="text-zinc-400 font-light leading-relaxed">
            By auditing manufacturing centers directly and automating custom pre-filing procedures, NEXUS delivers absolute traceability, standard conformity compliance, and risk mitigation for GCC bulk purchasing groups.
          </p>

          {/* Stat chips Grid */}
          <div className="grid grid-2 gap-4 mt-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel border border-white/5 rounded-xl p-3.5 flex items-center gap-3 hover:border-cyber-cyan/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-md font-extrabold text-white">{stat.value}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-medium">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
