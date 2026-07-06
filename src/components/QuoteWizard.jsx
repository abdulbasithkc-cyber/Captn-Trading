import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, ChevronLeft, Package, Sparkles } from 'lucide-react';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedModule, setSelectedModule] = useState('');
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    specifications: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    companyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modules = [
    { id: 'wholesale', title: 'Wholesale Supply', desc: 'Buffer storage and GCC distribution.' },
    { id: 'sourcing', title: 'Global Sourcing', desc: 'Direct audited manufacturer corridor.' },
    { id: 'logistics', title: 'Logistics & Customs', desc: 'Clearance filings and causeway routes.' },
    { id: 'agency', title: 'Brand Agency OS', desc: 'Representing and warehousing assets.' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !selectedModule) {
      alert('Please choose a sourcing module to proceed.');
      return;
    }
    if (step === 2 && (!formData.productName || !formData.quantity)) {
      alert('Please specify the product and volume.');
      return;
    }
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientEmail || !formData.clientPhone) {
      alert('Please enter your contact details.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="quote" className="relative py-24 px-4 z-10 overflow-hidden bg-black/10">
      
      {/* Background ambient spots */}
      <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyber-purple/4 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <span className="font-mono text-xs tracking-widest text-cyber-cyan uppercase font-bold">
            [ DEPLOY LOG CORRIDOR ]
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent mb-2" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Deploy OS Core
          </h2>
          <p className="text-zinc-500 text-sm max-w-md font-light mt-2">
            Initialize your sourcing specifications, custom clearances, or wholesale supply contracts in our trade database.
          </p>
        </div>

        {/* Wizard Progress Line */}
        {!isSubmitted && (
          <div className="relative mb-10 w-full max-w-md mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-cyber-cyan -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            <div className="relative flex justify-between z-10">
              {[1, 2, 3].map((num) => (
                <div 
                  key={num}
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs border transition-all duration-300 ${
                    num < step 
                      ? 'bg-cyber-cyan border-cyber-cyan text-black shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                      : num === step
                        ? 'bg-[#0a0a0f] border-cyber-cyan text-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'bg-[#0a0a0f] border-white/10 text-zinc-600'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Main Card Panel */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 md:p-12 relative">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success Screen */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center gap-6 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center text-cyber-green shadow-[0_0_20px_rgba(57,255,136,0.2)]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Core Sourcing Log Transmitted
                </h3>
                <p className="text-zinc-400 font-light text-sm max-w-lg leading-relaxed">
                  Your parameters have been successfully written to the database. Sourcing handlers will compile quotes, audit regional custom paths, and contact your terminal within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setSelectedModule('');
                    setFormData({
                      productName: '',
                      quantity: '',
                      specifications: '',
                      clientName: '',
                      clientEmail: '',
                      clientPhone: '',
                      companyName: ''
                    });
                    setIsSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-white font-medium text-xs backdrop-blur-md transition-all"
                >
                  Transcribe New Parameters
                </button>
              </motion.div>
            ) : (
              /* Form Steps */
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-3">
                      [01_SELECT_MODULE] Sourcing Category
                    </h3>
                    <div className="grid sm:grid-2 gap-4">
                      {modules.map((m) => (
                        <div 
                          key={m.id}
                          onClick={() => setSelectedModule(m.id)}
                          className={`glass-panel border rounded-2xl p-5 text-left cursor-pointer transition-all duration-300 flex flex-col gap-2 relative ${
                            selectedModule === m.id 
                              ? 'border-cyber-cyan/50 bg-cyber-cyan/[0.03] shadow-[0_0_15px_rgba(0,240,255,0.06)]' 
                              : 'border-white/5 hover:border-white/10'
                          }`}
                        >
                          <h4 className="text-md font-bold text-white">{m.title}</h4>
                          <p className="text-zinc-400 text-xs font-light">{m.desc}</p>
                          {selectedModule === m.id && (
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,240,255,0.5)] animate-pulse" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-5 text-left">
                    <h3 className="text-xl font-bold text-white mb-2 border-b border-white/5 pb-3">
                      [02_SPEC_PARAMETERS] Material Specs
                    </h3>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Product Name or Material Grade *</label>
                      <input 
                        type="text" 
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="e.g., Basmati Grains / Deformed Rebars Grade 60"
                        className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Target Tonnage or Container Count *</label>
                      <input 
                        type="text" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 500 Metric Tons / 4 FCL containers"
                        className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Blueprints & Packaging Specifications</label>
                      <textarea 
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe special packaging terms (e.g., 25kg bags), custom port release parameters, or target factory parameters..."
                        className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-5 text-left">
                    <h3 className="text-xl font-bold text-white mb-2 border-b border-white/5 pb-3">
                      [03_VERIFY_OPERATOR] Transmission Node
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Operator Name *</label>
                      <input 
                        type="text" 
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                      />
                    </div>

                    <div className="grid sm:grid-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Verification Email *</label>
                        <input 
                          type="email" 
                          name="clientEmail"
                          value={formData.clientEmail}
                          onChange={handleInputChange}
                          placeholder="operator@company.com"
                          className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">WhatsApp Node / Tel *</label>
                        <input 
                          type="tel" 
                          name="clientPhone"
                          value={formData.clientPhone}
                          onChange={handleInputChange}
                          placeholder="+973 3333 4444"
                          className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase">Registered Company Name</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Nexus Sourcing Ltd"
                        className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
                  {step > 1 ? (
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2.5 rounded-full bg-cyber-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-black font-bold text-xs transition-all flex items-center gap-1.5 ml-auto"
                    >
                      Continue <ChevronRight size={14} />
                    </button>
                  ) : (
                    <button 
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-7 py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white font-bold text-xs transition-all flex items-center gap-2 ml-auto"
                    >
                      {isSubmitting ? 'Transmitting Core...' : 'Transmit Specs'} <Send size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
