import React, { useState } from 'react';

export default function ThreeMeshVisualizer({ imageSrc }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculates smooth 2.5D tilt vectors based on the user's cursor positioning
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // Ranges from -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // Ranges from -0.5 to 0.5
    setMousePos({ x, y });
  };

  return (
    <div 
      className="w-full h-full min-h-[350px] flex items-center justify-center relative overflow-hidden p-6 select-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Interactive Graphic Plate Container */}
      <div
        className="w-full max-w-[240px] aspect-[3/4] rounded-xl border border-emerald-500/20 bg-neutral-900/40 backdrop-blur-md relative shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out flex items-center justify-center overflow-hidden group"
        style={{
          transform: isHovered 
            ? `rotateY(${mousePos.x * 30}deg) rotateX(${-mousePos.y * 30}deg) scale(1.03)` 
            : 'rotateY(0deg) rotateX(0deg) scale(1)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? '0 0 30px rgba(16, 185, 129, 0.2)' : 'none'
        }}
      >
        {/* Ambient Sci-Fi Scanner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* The Image Element */}
        <img 
          src={imageSrc} 
          alt="Alien Matrix Data Profile" 
          className="w-full h-full object-contain p-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Displays an clean glowing green error box if a specific folder is empty
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />

        {/* Fallback Graphic (Only displays if the local asset link is broken) */}
        <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-4 border-2 border-dashed border-emerald-500/20 rounded-xl bg-black/60">
          <div className="w-12 h-12 rounded-full border border-emerald-400/40 flex items-center justify-center animate-pulse mb-3">
            <span className="text-emerald-400 text-xs font-mono">!</span>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase opacity-60">
            Missing Asset
          </span>
          <span className="text-[9px] font-mono text-neutral-500 mt-1 max-w-[150px] truncate block">
            {imageSrc}
          </span>
        </div>
      </div>
    </div>
  );
}