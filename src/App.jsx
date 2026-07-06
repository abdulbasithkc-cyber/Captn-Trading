import React, { useEffect } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import QuoteWizard from './components/QuoteWizard';
import Footer from './components/Footer';

function App() {
  // Setup cursor spotlight glow coordinates variables
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-400 font-sans selection:bg-cyber-cyan/30 selection:text-white antialiased overflow-x-hidden">
      {/* Background Graphic Layer */}
      <BackgroundEffects />

      {/* Desktop Spotlight Mouse Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 hidden md:block" 
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.04), transparent 80%)'
        }}
      />

      {/* Main OS Navigation HUD */}
      <Navbar />

      {/* Sections Wrapper */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <QuoteWizard />
      </main>

      {/* OS Footer */}
      <Footer />
    </div>
  );
}

export default App;
