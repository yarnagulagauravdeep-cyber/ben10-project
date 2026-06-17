Omnideck: Ben 10 3D Interface
Welcome to Omnideck, a high-performance, immersive web application designed to catalog the vast universe of Ben 10. Built with a focus on 3D interactivity, terminal-inspired aesthetics, and seamless user experience, Omnideck serves as the ultimate digital database for every transformation in the series.

🚀 Key Features
3D Interactive Interface: Experience a highly responsive 3D parallax engine that brings alien transformations to life with real-time mouse-tracking physics.

Immersive Hero Section: A "Hero Time" landing experience featuring dynamic background elements and a polished, glass-morphism terminal interface.

Alien Index: A streamlined, background-free cataloging system that utilizes smooth GSAP animations to create a "breathing" and floating effect for each character.

Omnitrix Data Hub: A dedicated section to explore the evolution of the Omnitrix, featuring a clean, responsive layout and high-fidelity 3D assets.

Tech-Driven Aesthetic: Built with a "dark mode" design language, neon green accents, and typography optimized for a sci-fi data terminal feel.

🛠 Tech Stack
Frontend: React.js

Animation: GSAP (GreenSock Animation Platform) for physics-based movement and infinite floating loops.

Styling: Tailwind CSS for responsive grid layouts and glass-morphism effects.

3D Visuals: Custom ThreeMeshVisualizer component for rendering and controlling 3D assets.

📂 Project Structure
src/components/: Contains modular UI components including Aliens.jsx, Omnitrix.jsx, and ThreeMeshVisualizer.jsx.

src/data/: Centralized data management for alien species and device generations.

assets/: Repository for high-resolution character renders and device imagery.

⚙️ Development Notes
State Management: Optimized with React Hooks to ensure zero-lag interactions when switching between alien profiles.

Animation Physics: Each 3D card utilizes perspective-based transforms (perspective(1000px)) to provide authentic depth when users interact with the interface.

This project is an ongoing exploration of bringing 3D web experiences to life. Feel free to explore the code, report issues, or suggest new features for the Omnitrix database!
