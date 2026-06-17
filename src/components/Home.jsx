import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // 1. Core Interface Entry Sequence Timeline
    const tl = gsap.timeline();
    tl.fromTo('.alien-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' })
      .fromTo('.alien-readout', { opacity: 0, scale: 0.95 }, { opacity: 0.9, scale: 1, duration: 0.5 }, '-=0.4')
      .fromTo('.transformation-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2')
      .fromTo('.hero-large-image-container', { scale: 0.75, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power4.out' }, '-=0.8');

    // 2. Base Idle Float Loop (Runs subtly in the background)
    gsap.fromTo('.hero-3d-floater',
      { y: -10 },
      { 
        y: 10, 
        duration: 4, 
        ease: 'sine.inOut', 
        yoyo: true, 
        repeat: -1 
      }
    );
  }, []);

  // 3. 3D Mathematical Parallax Tracking Engine
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const card = imageRef.current;
    const box = card.getBoundingClientRect();
    
    // Find the absolute center coordinate of the image asset box
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    
    // Calculate cursor distance from the center point (-1 to 1 scale)
    const rotateY = ((e.clientX - centerX) / (box.width / 2)) * 25;  // Max 25 degrees Y rotation
    const rotateX = ((centerY - e.clientY) / (box.height / 2)) * 25; // Max 25 degrees X rotation

    // Inject 3D perspective matrix configurations directly into the element style layer
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    card.style.filter = `drop-shadow(${rotateY * -1}px ${rotateX}px 35px rgba(0, 255, 0, 0.4))`;
  };

  // Reset the 3D matrix structure smoothly back to normal when cursor leaves the area
  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    const card = imageRef.current;
    
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.filter = `drop-shadow(0px 0px 25px rgba(0, 255, 0, 0.2))`;
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full relative overflow-visible flex items-center justify-center pt-24 pb-12 px-6 md:px-16 select-none bg-transparent"
    >
      {/* Main UI Console Interface Content Deck */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Control Console Terminal */}
        <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">

          {/* Heavy Franchise Main Header */}
          <h1 className="alien-title text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
            IT'S HERO <br />
            <span className="text-[#00ff00] drop-shadow-[0_0_30px_#00ff00] font-black tracking-tight">
              TIME
            </span>
          </h1>

          {/* Classic Terminal Text Box */}
          <p className="alien-readout text-sm md:text-base text-neutral-200 font-mono leading-relaxed max-w-xl bg-black/85 border border-green-500/30 p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-md">
            <span className="text-[#00ff00] font-bold block mb-1">Tennyson's Overview</span>
            Ben 10 is an animated science-fiction action cartoon that follows Ben Tennyson, a 10-year-old boy who discovers the Omnitrix, a powerful alien device attached to his wrist. The Omnitrix allows him to transform into different alien species, each with unique abilities and powers.
          </p>

          {/* Interactive Core Button */}
          <div className="transformation-btn pt-2">
            <button 
              onClick={() => {
                 document.getElementById('omnitrix')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                className="relative group px-10 py-4 bg-[#00ff00] text-black font-mono text-sm tracking-widest font-black font-bold uppercase rounded-4xl shadow-[0_0_35px_rgba(0,255,0,0.5)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_50px_#ffffff]"
             >
               Engage Omnitrix Devices
            </button>
          </div>
        </div>

        {/* Right Graphical Viewport - INTERACTIVE 3D PARALLAX IMAGE RIG */}
        <div 
          className="hero-large-image-container lg:col-span-6 flex items-center justify-center order-1 lg:order-2 w-full min-h-[450px] md:min-h-[550px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-3d-floater w-full flex items-center justify-center">
            <img 
              ref={imageRef}
              src="/assets/benforce.png" 
              alt="Omnitrix Core Transformation Grid" 
              className="w-full max-w-[500px] lg:max-w-[520px] h-full object-contain pointer-events-none transition-transform duration-200 ease-out will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0px 0px 25px rgba(0, 255, 0, 0.2))',
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}