# OMNIDECK

An immersive, high-fidelity 3D interface designed to catalog the vast universe of Ben 10.
Omnideck blends clean glass-morphism data terminals with active, floating 3D canvas elements
to deliver a sleek, terminal-inspired database experience.

---

## 🔥 Key Visual Features

- **Background-Free 3D Models:** Alien lifeforms and Omnitrix assets float directly on the
  page grid over dynamic cosmic bubbles — completely stripped of clunky bounding boxes and
  rigid card designs.

- **Autonomous Floating/Breathing Engine:** Utilizing optimized performance loops, visual
  assets exhibit continuous, organic micro-movements independently without relying on mouse
  presence.

- **Dual-Spectrum Glow Typography:**
  - Main Section Heads feature a striking Yellow Neon Shadow Aura (`#eab308`).
  - Identity text nodes and primary command buttons maintain crisp, high-contrast white
    configurations.

- **Sci-Fi Terminal Glass Boxes:** Data descriptions use a subtle semi-transparent backdrop
  blend (`bg-black/40 backdrop-blur-md`) with thin, high-transparency green energy borders
  (`border-emerald-500/20`).

---

## 🛠️ Architecture & Core Components

**`ThreeMeshVisualizer.jsx`**
The foundational WebGL layer responsible for mounting image textures onto active, responsive
3D meshes that handle displacement and real-time canvas positioning.

**`Aliens.jsx` / `AlienCard.jsx`**
Maps raw project datasets into isolated, vertically streaming components. Designed cleanly
to avoid state collisions or Hook sequence rendering errors.

**`Omnitrix.jsx`**
A generation-selector device control panel that dynamically links generation data indices
(`Original Series`, `Alien Force`, `Ultimate Alien`) with responsive profile cards instantly.

---

## 🚀 Installation & Setup

1. Clone the Omnitrix terminal database:
```bash
   git clone https://github.com/your-username/omnideck.git
   cd omnideck
```

2. Install dependency nodes:
```bash
   npm install
```

3. Deploy local development server:
```bash
   npm run dev
```

---

## ⚙️ Core Animation Logic

The standalone floating effect is driven by continuous mathematical sine mapping via GSAP:

```js
gsap.to(containerRef.current, {
  y: -15,           // Real-time elevation lift
  rotationZ: 1,     // Subtle orbital roll
  duration: 2.5,    // Complete cycle duration
  repeat: -1,       // Infinite loop sequence
  yoyo: true,       // Seamless back-and-forth execution
  ease: "sine.inOut" // Organic inertia dampening
});
```

---

> Developed as an exploration of high-performance 3D visual data tracking. **It's Hero Time.**
