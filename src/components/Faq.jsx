import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How does NEXUS pre-file customs compliance?",
      a: "We integrate directly with ports and border customs databases. By pre-entering HS classification codes and duty-exemption credentials before cargo vessels arrive at Khalifa Bin Salman Port, we avoid demurrages and release shipments in hours."
    },
    {
      q: "What is your LCL container cargo consolidation program?",
      a: "For industrial relators or smaller electronics batches, we run LCL consolidation. We merge smaller crates into a single Full Container Load (FCL) at strategic hubs, significantly reducing shipping overhead costs."
    },
    {
      q: "How does the factory audit lock operate?",
      a: "We dispatch independent inspectors (like SGS or Bureau Veritas) to run physical audits on plant operations. We verify ISO quality sheets, environmental certifications, and chemical material grades before authorizing a purchase."
    },
    {
      q: "What is the typical lead time for King Fahd Causeway routing?",
      a: "Once cargo clears custom borders in Bahrain, overland transit trailer shipping over the causeway directly to Dammam and Eastern Province sites takes less than 6 hours under normal lane conditions."
    }
  ];

  return (
    <section id="faq" className="relative py-24 px-4 z-10 overflow-hidden bg-[#07070b]/30 border-t border-b border-white/5">
      <div className="absolute top-[30%] left-[-15%] w-[35rem] h-[35rem] rounded-full bg-cyber-purple/3 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="font-mono text-xs tracking-widest text-cyber-purple uppercase font-bold">
            [ ARCHIVE LOGS ]
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-purple to-transparent mb-2" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            System Parameters FAQ
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mt-2 font-light">
            Answers concerning custom pre-filing procedures, container buffers, and supply line setups.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index}
                className={`glass-panel border transition-all duration-300 ${
                  isOpen ? 'border-cyber-cyan/35 shadow-[0_0_20px_rgba(0,240,255,0.04)] bg-[#0b0b0f]/75' : 'border-white/5'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle size={16} className={`flex-shrink-0 transition-colors ${isOpen ? 'text-cyber-cyan' : 'text-zinc-500'}`} />
                    <h3 className="text-sm font-bold text-white tracking-tight">{faq.q}</h3>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyber-cyan' : ''}`} 
                  />
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-zinc-400 text-xs font-light leading-relaxed border-t border-white/5 pr-12">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
