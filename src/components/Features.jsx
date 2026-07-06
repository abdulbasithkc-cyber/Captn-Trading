import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Truck } from 'lucide-react';

export default function Features() {
  const list = [
    {
      title: "Predictive Compliance Router",
      desc: "Pre-files customs records and matches HS tariff codes in Bahrain's Bayan database, bypassing port bottlenecks.",
      icon: <Cpu size={20} />,
      color: "from-cyber-cyan to-transparent",
      graphic: (
        <svg className="w-full h-12 opacity-40" viewBox="0 0 100 40">
          <path d="M10,20 L35,20 L50,10 L65,30 L90,20" fill="none" stroke="var(--color-cyber-cyan)" strokeWidth="1" />
          <circle cx="50" cy="10" r="2" fill="var(--color-cyber-cyan)" className="animate-ping" />
          <circle cx="65" cy="30" r="2" fill="var(--color-cyber-cyan)" />
        </svg>
      )
    },
    {
      title: "SGS Conformity Lock",
      desc: "Enforces strict chemical, metallurgical, and structural quality criteria before cargo containers are cleared for loading.",
      icon: <ShieldCheck size={20} />,
      color: "from-cyber-green to-transparent",
      graphic: (
        <svg className="w-full h-12 opacity-40" viewBox="0 0 100 40">
          <circle cx="50" cy="20" r="15" fill="none" stroke="var(--color-cyber-green)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M42,20 L48,25 L58,15" fill="none" stroke="var(--color-cyber-green)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Duty-Free Optimizations",
      desc: "Routes logistics dynamically through regional free zones, eliminating cargo overheads and retail import duties.",
      icon: <Zap size={20} />,
      color: "from-cyber-purple to-transparent",
      graphic: (
        <svg className="w-full h-12 opacity-40" viewBox="0 0 100 40">
          <rect x="25" y="10" width="50" height="20" rx="3" fill="none" stroke="var(--color-cyber-purple)" strokeWidth="1" />
          <line x1="10" y1="20" x2="90" y2="20" stroke="var(--color-cyber-purple)" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "Causeway Express trucking",
      desc: "Organizes overland truck transport over the King Fahd Causeway to deliver materials into Dammam and Riyadh under 6 hours.",
      icon: <Truck size={20} />,
      color: "from-cyber-cyan to-transparent",
      graphic: (
        <svg className="w-full h-12 opacity-40" viewBox="0 0 100 40">
          <path d="M10,30 C20,10 40,10 50,30 C60,10 80,10 90,30" fill="none" stroke="var(--color-cyber-cyan)" strokeWidth="1" />
          <circle cx="30" cy="20" r="1.5" fill="var(--color-cyber-cyan)" />
          <circle cx="70" cy="20" r="1.5" fill="var(--color-cyber-cyan)" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="relative py-24 px-4 z-10 overflow-hidden bg-[#07070b]/30 border-t border-b border-white/5">
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-cyber-purple/3 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="font-mono text-xs tracking-widest text-cyber-cyan uppercase font-bold">
            [ SECURED CHANNELS ]
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent mb-2" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Platform Safeguards
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl mt-2 font-light">
            We wrap physical commodity importing inside automated digital parameters to mitigate shipping delay risks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-2 gap-8">
          {list.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel border border-white/5 p-8 text-left hover:border-cyber-cyan/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.05)] transition-all duration-300 flex flex-col gap-6 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan group-hover:text-cyber-green group-hover:border-cyber-green/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyber-cyan transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-zinc-500">[ NODE_{idx+1} ]</span>
              </div>

              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {item.desc}
              </p>

              {/* Mini Interactive Vector Diagram */}
              <div className="w-full bg-[#050508]/60 rounded-xl p-3 border border-white/5 flex items-center justify-center">
                {item.graphic}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
