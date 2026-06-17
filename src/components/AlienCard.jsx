import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ThreeMeshVisualizer from './ThreeMeshVisualizer';

const AlienCard = ({ alien, onAnalyze }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Continuous "Floating/Breathing" animation
    gsap.to(containerRef.current, {
      y: -20,             // Float up and down
      rotationZ: 1,       // Subtle tilt
      duration: 3,        // Speed of the float
      repeat: -1,         // Infinite loop
      yoyo: true,         // Smooth back-and-forth
      ease: "sine.inOut"  // Natural organic motion
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      // REMOVED all background, border, and shadow classes for the "no background" look
      className="flex flex-col items-center justify-between transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-full">
        {/* Transparent Visualizer Wrapper */}
        <div className="mb-4 min-h-[250px] flex items-center justify-center">
          <ThreeMeshVisualizer imageSrc={alien.imagePath} />
        </div>
        
        {/* Info Area */}
        <div className="flex flex-col items-center text-center mb-2">
          <h3 className="text-xl font-bold uppercase tracking-tight text-white">{alien.name}</h3>
        </div>
        
        {/* Glass Description Box */}
        <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 p-6 rounded-2xl">
          <p className="text-neutral-200 font-mono text-sm leading-relaxed text-center">
            {alien.description}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => onAnalyze(alien)}
        className="mt-5 w-full py-2.5 bg-transparent border border-emerald-500/30 hover:border-[#00ff00] text-neutral-300 hover:text-[#00ff00] text-xs font-mono font-bold tracking-widest rounded transition-all duration-300 uppercase"
      >
        Analyze Profile
      </button>
    </div>
  );
};

export default AlienCard;