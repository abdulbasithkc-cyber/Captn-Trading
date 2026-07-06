import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldAlert, PackageCheck, Route, Radio, Layers } from 'lucide-react';

export default function Services() {
  const modules = [
    {
      title: "Predictive Sourcing Engine",
      desc: "Auditing global manufacturing centers directly, matching structural spec sheets, and verifying quality conformity certificates.",
      icon: <Search size={22} />,
      accent: "top-right"
    },
    {
      title: "Automated Customs clearance",
      desc: "Submitting digital tariff entries and pre-filing HS classifications to route containers through GCC port channels with zero delay.",
      icon: <ShieldAlert size={22} />,
      accent: "top-left"
    },
    {
      title: "Buffer Storage corridors",
      desc: "Operating spacious secure holding warehouses in Bahrain to distribute materials directly to regional procurement units.",
      icon: <PackageCheck size={22} />,
      accent: "bottom-right"
    },
    {
      title: "Freight Logistics Routing",
      desc: "Consolidating container loads (FCL/LCL) across highwaycauseway networks, marine shipping lanes, and air freight pipelines.",
      icon: <Route size={22} />,
      accent: "bottom-left"
    },
    {
      title: "Brand Agency OS",
      desc: "Partnering with global brands to establish GCC trade anchors, coordinating localized inventory supply channels.",
      icon: <Radio size={22} />,
      accent: "top-right"
    },
    {
      title: "Enterprise Procurement",
      desc: "Syncing purchasing contracts directly with audited manufacturers, managing volume pricing and currency lockups.",
      icon: <Layers size={22} />,
      accent: "bottom-right"
    }
  ];

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="services" className="relative py-24 px-4 z-10 overflow-hidden bg-black/25">
      
      {/* Ambient decorative glowing spot */}
      <div className="absolute bottom-[10%] left-[-5%] w-[25rem] h-[25rem] rounded-full bg-cyber-cyan/3 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-16 animate-on-scroll">
          <span className="font-mono text-xs tracking-widest text-cyber-purple uppercase font-bold">
            [ SYSTEM CAPABILITIES ]
          </span>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-purple to-transparent mb-2" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Integrated OS Modules
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl font-light mt-2">
            Configure and deploy optimized supply, compliance, and auditing parameters directly into your enterprise pipeline.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-3 gap-6">
          {modules.map((mod, idx) => (
            <motion.div 
              key={mod.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateX: 1.5, 
                rotateY: -1.5,
                borderColor: 'rgba(0, 240, 255, 0.25)',
                boxShadow: '0 0 25px rgba(0, 240, 255, 0.1)'
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-panel border border-white/5 rounded-2xl p-8 text-left relative flex flex-col gap-5 hover:border-cyber-cyan/30 hover:bg-[#0c0c14]/70 transition-all duration-300 group cursor-default"
            >
              {/* Glowing Corner Accents (Cyber Style) */}
              {mod.accent === 'top-right' && (
                <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t-2 border-r-2 border-cyber-cyan/40 group-hover:border-cyber-cyan transition-colors" />
              )}
              {mod.accent === 'top-left' && (
                <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t-2 border-l-2 border-cyber-cyan/40 group-hover:border-cyber-cyan transition-colors" />
              )}
              {mod.accent === 'bottom-right' && (
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b-2 border-r-2 border-cyber-cyan/40 group-hover:border-cyber-cyan transition-colors" />
              )}
              {mod.accent === 'bottom-left' && (
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b-2 border-l-2 border-cyber-cyan/40 group-hover:border-cyber-cyan transition-colors" />
              )}

              {/* Icon Container with glowing spot */}
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan group-hover:text-cyber-green group-hover:border-cyber-green/30 group-hover:shadow-[0_0_15px_rgba(57,255,136,0.15)] transition-all duration-300">
                {mod.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyber-cyan transition-colors">
                  {mod.title}
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {mod.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
