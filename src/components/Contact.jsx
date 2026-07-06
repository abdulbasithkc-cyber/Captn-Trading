import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Terminal, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 z-10 overflow-hidden bg-black/10">
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-cyber-cyan/3 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto grid md:grid-2 gap-16 items-start">
        
        {/* Left Column: Coordinates & Registry */}
        <div className="flex flex-col items-start text-left gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-cyber-cyan uppercase font-bold">
              [ COMMAND NODE ]
            </span>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent mb-2" />
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Headquarters Node
            </h2>
            <p className="text-zinc-500 text-sm font-light mt-2 max-w-md">
              Initialize a secure terminal connection with our trade desk to establish logistics or procurement sync pipelines.
            </p>
          </div>

          {/* Core Info Nodes */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ LOCATION_COORD ]</span>
                <span className="text-white text-sm font-medium mt-0.5">Manama Corporate District, Tower 4, Kingdom of Bahrain</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ DIRECT_LINE ]</span>
                <span className="text-white text-sm font-medium mt-0.5">+973 1720 0450</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ SYSTEM_EMAIL ]</span>
                <span className="text-white text-sm font-medium mt-0.5">sys@captntrading.com</span>
              </div>
            </div>
          </div>

          {/* Official Registry */}
          <div className="glass-panel border border-white/5 p-6 border-l-4 border-l-cyber-cyan w-full">
            <span className="font-mono text-[9px] text-cyber-cyan uppercase tracking-widest font-bold">[ CR_REGISTRY_RECORD ]</span>
            <p className="text-zinc-400 text-xs font-light leading-relaxed mt-2">
              NEXUS is legally registered with the Ministry of Industry and Commerce in the Kingdom of Bahrain. <strong>Commercial Registration Number: CR 140234-1</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Cybernetic Form */}
        <div className="glass-panel border border-white/5 p-8 md:p-10 w-full relative">
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center text-cyber-green shadow-[0_0_15px_rgba(57,255,136,0.15)]">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="text-xl font-bold text-white">Connection Established</h3>
              <p className="text-zinc-400 text-xs font-light max-w-sm leading-relaxed">
                Your parameters have been logged in the secure socket terminal. Sourcing coordinators will initiate a call shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-semibold"
              >
                Open New Socket
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Terminal size={14} className="text-cyber-cyan" />
                <span className="font-mono text-xs font-bold text-white tracking-widest">TRANSMIT_INQUIRY_LOG</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Operator Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-xs focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Verification Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="operator@company.com"
                  className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-xs focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Inquiry Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Land Causeway trucking schedule"
                  className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-xs focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Inquiry Description *</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Describe your material specs, volumes, and destination ports..."
                  className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-xs focus:outline-none focus:border-cyber-cyan transition-colors font-mono leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] text-white font-mono text-[10px] tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? 'Syncing...' : 'Transmit Parameters'} <Send size={10} />
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
