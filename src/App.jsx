import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Omnitrix from './components/Omnitrix';
import Aliens from './components/Aliens';
import AboutUs from './components/AboutUs';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.app-wrapper',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="app-wrapper bg-black text-white min-h-screen relative font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Custom keyframe tracks with wide displacement so bubbles swim completely across the viewports */}
      <style>{`
        @keyframes driftTrackAlpha {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(6vw, -5vh) scale(1.1); }
          66% { transform: translate(-4vw, 6vh) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes driftTrackBeta {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-8vw, 7vh) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes driftTrackGamma {
          0% { transform: translate(0px, 0px) scale(0.9); }
          40% { transform: translate(7vw, 5vh) scale(1.08); }
          80% { transform: translate(-5vw, -6vh) scale(0.85); }
          100% { transform: translate(0px, 0px) scale(0.9); }
        }
        @keyframes driftTrackDelta {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(5vw, -8vh) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      {/* ================= THE HIGH-DENSITY CONTINUOUS CODON STREAM BACKDROP ================= */}
      <div className="fixed inset-0 z-0 bg-[#000300] pointer-events-none overflow-hidden">
        
        {/* CRT Scanline Display Mask Filter */}
        <div className="absolute inset-0 z-30 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] bg-[size:100%_4px,3px_100%]" />
        
        {/* Matrix Digital Micro-Particle Dust Grid Overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.02] bg-[radial-gradient(#00ff00_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Dynamic Bubble Stream Layer — Opacity boosted to 85% for high visibility */}
        <div className="absolute inset-0 z-0 mix-blend-screen opacity-85">
          
          {/* Bubble 1: Massive Upper Left Base Pool (Home Area) */}
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_35%_35%,#39ff14_0%,#00ff00_15%,#003b00_45%,#000000_75%,transparent_100%)]" 
            style={{ animation: 'driftTrackAlpha 18s infinite ease-in-out' }}
          />

          {/* Bubble 2: Upper Right Floating Pod (Home/Omnitrix Transition) */}
          <div 
            className="absolute top-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,#00ff00_0%,#002b00_40%,#000000_70%,transparent_100%)]" 
            style={{ animation: 'driftTrackBeta 22s infinite ease-in-out' }}
          />

          {/* Bubble 3: Mid-Left Floating Core (Omnitrix Area) */}
          <div 
            className="absolute top-[30%] left-[-8%] w-[48vw] h-[48vw] rounded-full bg-[radial-gradient(circle_at_40%_40%,#39ff14_0%,#004d00_35%,#000900_65%,transparent_100%)]" 
            style={{ animation: 'driftTrackGamma 16s infinite ease-in-out 1s' }}
          />

          {/* Bubble 4: Central Active Orb (Perfectly placed behind main console text spaces) */}
          <div 
            className="absolute top-[45%] left-[35%] w-[32vw] h-[32vw] rounded-full bg-[radial-gradient(circle_at_center,#39ff14_0%,#00ff00_10%,#003a00_50%,transparent_85%)] opacity-60 blur-[15px]" 
            style={{ animation: 'driftTrackBeta 14s infinite ease-in-out 3s' }}
          />

          {/* Bubble 5: Middle Right Dynamic Fluid Node (Omnitrix/Aliens Break) */}
          <div 
            className="absolute top-[55%] right-[-12%] w-[42vw] h-[42vw] rounded-full bg-[radial-gradient(circle_at_center,#00ff00_5%,#002e00_45%,#000000_75%,transparent_100%)]" 
            style={{ animation: 'driftTrackDelta 20s infinite ease-in-out 0.5s' }}
          />

          {/* Bubble 6: Lower Left Floating Cell (Aliens Area) */}
          <div 
            className="absolute top-[70%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,#39ff14_0%,#004700_50%,transparent_80%)] opacity-65 blur-[12px]" 
            style={{ animation: 'driftTrackAlpha 15s infinite ease-in-out 2s' }}
          />

          {/* Bubble 7: Center-Lower Spacing Pod (Aliens/About Us Transition) */}
          <div 
            className="absolute bottom-[20%] left-[40%] w-[28vw] h-[28vw] rounded-full bg-[radial-gradient(circle_at_center,#00ff00_0%,#003c00_55%,transparent_90%)] opacity-70 blur-[10px]" 
            style={{ animation: 'driftTrackGamma 13s infinite ease-in-out 0.7s' }}
          />

          {/* Bubble 8: Right Side Lower Anchor (About Us Area) */}
          <div 
            className="absolute bottom-[5%] right-[-8%] w-[46vw] h-[46vw] rounded-full bg-[radial-gradient(circle_at_center,#39ff14_0%,#004000_45%,#000000_70%,transparent_100%)]" 
            style={{ animation: 'driftTrackDelta 24s infinite ease-in-out 1.5s' }}
          />

          {/* Bubble 9: Deep Core Footing Pool (Absolute Base Footer) */}
          <div 
            className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,#00ff00_0%,#002800_40%,#000000_80%,transparent_100%)]" 
            style={{ animation: 'driftTrackAlpha 26s infinite ease-in-out' }}
          />

        </div>

        {/* Relaxed center vignette to let all 9 bubbles shine through without getting dark-masked */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.6)_80%,#000000_98%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>
      {/* ================================================================================= */}

      <Navbar />

      <main className="relative z-10 w-full">
        <section id="home" className="w-full min-h-screen flex items-center justify-center bg-transparent">
          <Home />
        </section>
        
        <section id="omnitrix" className="w-full py-16 flex items-center justify-center bg-transparent">
          <Omnitrix />
        </section>
        
        <section id="aliens" className="w-full py-16 flex items-center justify-center bg-transparent">
          <Aliens />
        </section>
        
        <section id="about" className="w-full py-16 flex items-center justify-center bg-transparent">
          <AboutUs />
        </section>
      </main>
    </div>
  );
}

export default App;