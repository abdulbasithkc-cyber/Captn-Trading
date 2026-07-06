import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#050508]" />
      
      {/* Cyber Grid */}
      <div className="cyber-grid absolute inset-0 opacity-80" />
      
      {/* Scanline Grid Overlay */}
      <div className="scanlines absolute inset-0" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-[20%] left-[15%] w-[45vw] h-[45vw] md:w-[35rem] md:h-[35rem] rounded-full bg-[#00f0ff]/8 blur-[120px] md:blur-[160px] animate-float-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] md:w-[40rem] md:h-[40rem] rounded-full bg-[#8b5cf6]/6 blur-[130px] md:blur-[180px] animate-float-medium" />
    </div>
  );
}
