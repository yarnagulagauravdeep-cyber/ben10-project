import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.3 }
    );
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      ref={containerRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-emerald-500/10 px-8 py-4 flex justify-between items-center"
    >
      <div 
        onClick={(e) => scrollToSection(e, 'home')}
        className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500  p-1 cursor-pointer drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]"
      >
        OMNIDECK
      </div>

      <div className="flex gap-8 text-md font-mono font-bold uppercase tracking-widest">
        {[
          { label: 'Home', id: 'home' },
          { label: 'Omnitrix', id: 'omnitrix' },
          { label: 'Aliens', id: 'aliens' },
          { label: 'About Us', id: 'about' }
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-white/70 hover:text-emerald-400 transition-colors duration-300 relative py-2 block group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full drop-shadow-[0_0_4px_#10b981]" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;