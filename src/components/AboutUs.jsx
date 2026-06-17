import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function AboutUs() {
  useEffect(() => {
    gsap.fromTo('.about-content-deck', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    // FIX: Changed min-h-screen to full width, changed background to transparent, and removed localized backdrop div layers
    <div className="w-full relative overflow-visible py-12 px-6 md:px-16 select-none flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-8 about-content-deck">
        
        {/* Structural Section Header */}
        <div className="space-y-3">
        
          <h2 className="text-4xl md:text-5xl mb-5 font-black tracking-tighter uppercase">
            Refer the info <span className="text-[#00ff00] drop-shadow-[0_0_20px_#00ff00]">BELOW</span>
          </h2>
          <div className="h-[2px] w-24 bg-emerald-500 mx-auto drop-shadow-[0_0_6px_#10b981] mt-2" />
        </div>

        {/* Text Body Panels */}
        <div className="bg-black/85 border border-neutral-800 rounded-2xl p-6 md:p-10 space-y-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <p className="text-sm md:text-base text-neutral-300 font-mono leading-relaxed">
            <span className="text-[#00ff00] font-bold block mb-2">PROJECT OVERVIEW:</span>
            The Omnitrix Device Matrix Repository is an authorized decentralized monitoring deck tethered directly to the primary Codon Stream. This interface tracks intergalactic genetic anomalies, logs advanced extra-terrestrial lifeform specifications, and calibrates real-time 3D system mesh projections across standard Earth defense sectors. All visual analytics and signature data streams are verified via secure Plumber network protocols to maintain system lock integrity.
          </p>

          {/* Social Links Sub-Matrix Section */}
          <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap gap-4 items-center font-mono text-xs">
            <span className="text-neutral-500 uppercase tracking-widest font-bold">External Nodes:</span>
            
            {/* GitHub Link Node */}
            <a 
              href="https://github.com/yarnagulagauravdeep-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-md text-neutral-300 hover:text-[#00ff00] hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] group"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            
          </div>
            
        </div>

      </div>
    </div>
  );
}