import React, { useState } from 'react';
import { omnitrixData } from '../data/projectData';
import ThreeMeshVisualizer from './ThreeMeshVisualizer';

const Omnitrix = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Safe array length boundary checks
  const safeData = omnitrixData && omnitrixData.length > 0 ? omnitrixData : [];
  const activeDevice = safeData[activeIndex];

  // If data is initializing or completely missing, show a sleek sci-fi loader stream
  if (!activeDevice) {
    return (
      <div className="w-full py-24 text-center font-mono text-emerald-500 flex flex-col items-center justify-center space-y-4">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="tracking-widest uppercase text-xs">[ CODON LINK INITIALIZING... ]</p>
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-visible select-none bg-transparent">
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        
        {/* Unified Terminal Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white">
            OMNITRIX <span className="text-[#00ff00] drop-shadow-[0_0_20px_#00ff00]">Section</span>
          </h2>
          <div className="h-[2px] w-24 bg-emerald-500 mx-auto drop-shadow-[0_0_6px_#10b981] mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Selectors Column layout index matrix */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            {safeData.map((device, idx) => (
              <button
                key={device.id || idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 block relative group overflow-hidden ${
                  activeIndex === idx 
                    ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-md text-white' 
                    : 'bg-black/85 border-neutral-800 hover:border-emerald-500/40 text-neutral-400 hover:text-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                }`}
              >
                <span className="text-xs text-emerald-400/60 font-mono font-semibold block mb-1 uppercase tracking-wider">{device.generation}</span>
                <span className="text-lg font-bold block font-sans tracking-tight uppercase group-hover:text-emerald-400 transition-colors duration-300">{device.name}</span>
              </button>
            ))}
          </div>

          {/* Target Content Area - Completely stripped of outer background/borders */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch order-1 lg:order-2 bg-transparent border-0 p-0 shadow-none backdrop-blur-none">
            
            {/* Left Standalone Card: 3D Visualizer Window */}
            <div className="bg-black/85 border border-neutral-800 p-4 rounded-2xl backdrop-blur-md min-h-[350px] shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <ThreeMeshVisualizer key={activeDevice.id} imageSrc={activeDevice.imagePath} />
              </div>
            </div>
            
            {/* Right Standalone Card: Description Text Box */}
            <div className="bg-black/85 border border-neutral-800 p-8 rounded-2xl backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white font-sans">
                {activeDevice.name}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 font-mono leading-relaxed font-light">
                {activeDevice.capabilities}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Omnitrix;