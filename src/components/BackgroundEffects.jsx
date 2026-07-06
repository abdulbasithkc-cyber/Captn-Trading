import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Matrix rainfall characters
    const chars = "01<>[]{}-+%%**#@!$()x".split("");
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    // Adjust columns on window resize
    const resizeObserver = new ResizeObserver(() => {
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    });
    resizeObserver.observe(canvas);

    const draw = () => {
      // Trail effect with very low opacity to clear the canvas slowly
      ctx.fillStyle = 'rgba(3, 3, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 240, 255, 0.08)'; // Neon Cyan, low opacity
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drops to top randomly after crossing viewport height
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    // Begin loop
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Obsidian Space Base */}
      <div className="absolute inset-0 bg-[#030305]" />

      {/* Hexagon Pattern or Cyber Grid */}
      <div className="cyber-grid absolute inset-0 opacity-70" />
      
      {/* Subtle Matrix Canvas Rainfall */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50 z-1" />

      {/* Noise Texture layer */}
      <div className="noise-overlay absolute inset-0" />
      
      {/* Scanline Grid Overlay */}
      <div className="scanlines absolute inset-0" />

      {/* Slowly Drifting Holographic Radial Ambient Glows */}
      <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] md:w-[40rem] md:h-[40rem] rounded-full bg-[#00f0ff]/6 blur-[130px] md:blur-[180px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[55vw] h-[55vw] md:w-[45rem] md:h-[45rem] rounded-full bg-[#8b5cf6]/5 blur-[140px] md:blur-[200px] animate-float-medium" />
    </div>
  );
}
