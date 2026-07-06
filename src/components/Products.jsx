import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Filter, Eye, X, Send, ShieldCheck } from 'lucide-react';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filters = [
    { label: 'All Databases', value: 'all' },
    { label: 'FMCG Food', value: 'fmcg' },
    { label: 'Steel & Construction', value: 'construction' },
    { label: 'Industrial Spares', value: 'industrial' },
    { label: 'Silicon Relays', value: 'electronics' }
  ];

  const productsList = [
    {
      id: 1,
      title: "Basmati Grains (Grade-A)",
      category: "fmcg",
      desc: "Premium long-grain sorted grains. Moisture locked, polished packaging for wholesale distribution.",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "1006.3020",
        composition: "Avg length 8.35mm, max moisture 12%",
        origin: "Audited farms, Northern Punjab",
        packaging: "20kg/50kg high-density bags",
        compliance: "GCC food authority cleared"
      }
    },
    {
      id: 2,
      title: "Deformed Steel Rebar",
      category: "construction",
      desc: "High-yield deformed reinforcing steel bars (ASTM A615 Grade 60) perfect for core structural foundations.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "7214.2000",
        composition: "ASTM A615 Grade 60 carbon steel",
        origin: "Certified structural furnaces, GCC",
        packaging: "2-Ton bundles, custom cut dimensions",
        compliance: "Civil defense approval certified"
      }
    },
    {
      id: 3,
      title: "Ordinary Portland Cement",
      category: "construction",
      desc: "High-grade cement (OPC CEM I Grade 42.5/52.5) matching EN-197-1 compliance specs.",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "2523.2900",
        composition: "OPC CEM I 42.5N / 52.5R",
        origin: "GCC licensed clinker plants",
        packaging: "Bulk vessels / 50kg bags",
        compliance: "Gulf standard GSO EN 197-1"
      }
    },
    {
      id: 4,
      title: "High-Pressure Gate Valves",
      category: "industrial",
      desc: "API 6D certified forged cast steel gate and ball valves designed for oil, water, and gas pipelines.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "8481.8080",
        composition: "ASTM A216 WCB Cast Steel, API 6D",
        origin: "Premium industrial fabricators",
        packaging: "Custom seaworthy wooden crates",
        compliance: "API 6D, fire-safe certified"
      }
    },
    {
      id: 5,
      title: "Semiconductors & Relays",
      category: "electronics",
      desc: "Solid-state electronic relays, logic gate ICs, and custom PCB boards sourced from technology fabricators.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "8542.3100",
        composition: "Logic gate arrays, solid-state switches",
        origin: "East Asia technology centers",
        packaging: "Antistatic vacuum packaging",
        compliance: "RoHS compliance certified"
      }
    },
    {
      id: 6,
      title: "Luxury Hospitality Linens",
      category: "fmcg",
      desc: "100% combed Egyptian cotton towels and bedsheets, pre-treated for heavy laundry cycling.",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
      specs: {
        hsCode: "6302.3100",
        composition: "100% Egyptian Cotton, 300+ Thread Count",
        origin: "Certified textile weaving mills",
        packaging: "Shrink-wrapped wholesale packs",
        compliance: "Oeko-Tex Standard 100 cleared"
      }
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="relative py-24 px-4 z-10 overflow-hidden bg-black/15">
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-cyber-cyan/3 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <span className="font-mono text-xs tracking-widest text-cyber-cyan uppercase font-bold">
            [ INVENTORY SPEC ]
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent mb-2" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Database Catalog
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl mt-2 font-light">
            Audit specific material compositions, HS codes, packaging parameters, and compliance records directly.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-cyber-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-white/5 text-zinc-500 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-3 gap-6">
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              layout
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel border border-white/5 overflow-hidden flex flex-col hover:border-cyber-cyan/25 hover:shadow-[0_0_20px_rgba(0,240,255,0.06)] transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 font-mono text-[8px] bg-cyber-cyan/15 border border-cyber-cyan/20 px-2 py-0.5 rounded text-cyber-cyan tracking-widest uppercase">
                  {prod.category}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow gap-4 text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="text-md font-bold text-white tracking-tight group-hover:text-cyber-cyan transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] font-light leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="mt-2 w-full py-2.5 rounded-xl border border-white/5 bg-white/3 hover:bg-white/5 text-white font-mono text-[10px] tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5 transition-colors group/btn"
                >
                  <Eye size={12} className="text-cyber-cyan group-hover/btn:scale-110 transition-transform" />
                  Examine Spec Logs
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Spec Sheet overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="glass-panel border border-cyber-cyan/20 w-full max-w-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col"
            >
              {/* Modal Title bar */}
              <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-cyber-cyan" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">DATABASE_FILE_{selectedProduct.id}</span>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{selectedProduct.title}</h3>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ SPEC_SHEET_DECRYPTED ]</span>
                </div>

                {/* Specs list */}
                <div className="flex flex-col gap-3 font-mono text-xs">
                  <div className="grid grid-cols-[110px_1fr] border-b border-white/5 pb-2">
                    <span className="text-zinc-500">HS CUSTOM CODE:</span>
                    <span className="text-cyber-cyan font-bold">{selectedProduct.specs.hsCode}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] border-b border-white/5 pb-2">
                    <span className="text-zinc-500">COMPOSITION:</span>
                    <span className="text-white">{selectedProduct.specs.composition}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] border-b border-white/5 pb-2">
                    <span className="text-zinc-500">CORRIDOR ORIGIN:</span>
                    <span className="text-white">{selectedProduct.specs.origin}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] border-b border-white/5 pb-2">
                    <span className="text-zinc-500">PACKING SYSTEM:</span>
                    <span className="text-white">{selectedProduct.specs.packaging}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] border-b border-white/5 pb-2">
                    <span className="text-zinc-500">CERTIFICATE REQ:</span>
                    <span className="text-cyber-green flex items-center gap-1">
                      <ShieldCheck size={12} /> {selectedProduct.specs.compliance}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-4 mt-4">
                  <a 
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-grow py-3 rounded-xl bg-cyber-cyan text-black font-mono text-[10px] tracking-wider uppercase font-bold flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                  >
                    Deploy spec Inquiry <Send size={10} />
                  </a>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-semibold transition-colors"
                  >
                    Close Log
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
