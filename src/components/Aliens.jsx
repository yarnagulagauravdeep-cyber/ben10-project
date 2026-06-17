import React, { useRef } from 'react';
import { alienData } from '../data/projectData';
import ThreeMeshVisualizer from './ThreeMeshVisualizer';

const AlienRow = ({ alien }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const box = container.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    const rotateY = ((e.clientX - centerX) / (box.width / 2)) * 10;
    const rotateX = ((centerY - e.clientY) / (box.height / 2)) * 10;

    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 last:mb-0">
      {/* 3D Visualizer */}
      <div 
        className="lg:col-span-5 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={containerRef} className="w-full max-w-[350px] transition-transform duration-200 ease-out will-change-transform">
          <ThreeMeshVisualizer imageSrc={alien.imagePath} />
        </div>
      </div>

      {/* Terminal Info: Normal white title, no glow */}
      <div className="lg:col-span-7 space-y-4">
        <h3 className="text-6xl font-black uppercase tracking-tighter text-white">
          {alien.name}
        </h3>
        <div className="bg-black/40 backdrop-blur-md border border-emerald-500/20 p-8 rounded-2xl">
          <p className="text-neutral-200 font-mono text-base leading-relaxed">
            {alien.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Aliens = () => {
  return (
    <div id="aliens" className="w-full max-w-7xl mx-auto py-24 px-8 relative z-10 select-none">
      <div className="text-left mb-24">
        {/* Yellow Glowing Header */}
        <h2 className="text-5xl font-black uppercase text-white mb-4 ">
          ALIEN <span className="text-[#00ff00] drop-shadow-[0_0_20px_#00ff00]">Section</span>
        </h2>
        <div className="h-[2px] w-24 bg-yellow-500 drop-shadow-[0_0_6px_#eab308]" />
      </div>

      {alienData.map((alien, idx) => (
        <AlienRow key={alien.id || idx} alien={alien} />
      ))}
    </div>
  );
};

export default Aliens;