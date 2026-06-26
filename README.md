# Novia AI

**One platform. Every data workflow.**

Novia AI is a modern, high-performance web application designed for data teams. It provides a beautiful, state-of-the-art interface for showcasing AI-powered data discovery, pipeline management, and analytics features. Built with a focus on immersive aesthetics and fluid user experiences, Novia AI leverages the latest in web animation and 3D rendering.

## 🚀 Features

- **Immersive 3D Backgrounds:** Utilizes `ogl` to render lightweight, performant WebGL background layers that react to the user's presence.
- **Fluid Animations:** Powered by `gsap` and `animejs` for buttery-smooth page transitions, custom scrollbars, and interactive micro-animations.
- **Native CSS Stacking:** Features a pure CSS-based parallax stacking effect for feature cards, ensuring zero-jank scrolling and perfect rendering on all browsers.
- **Smooth Scrolling:** Integrated with `lenis` for a luxurious, momentum-based scrolling experience.
- **Modern UI Design:** Built with **Tailwind CSS v4** and customized with a rich, dark-themed design system featuring glassmorphism, dynamic gradients, and precision typography.
- **Responsive Layouts:** Fully optimized for mobile, tablet, and desktop viewports with a highly interactive Bento Grid and Accordion fallback.

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** 
  - [Anime.js (v4)](https://animejs.com/) for lightweight scroll timelines
  - [GSAP](https://gsap.com/) for complex sequencing
- **3D Graphics:** [OGL](https://github.com/oframe/ogl) for WebGL rendering
- **Scroll Engine:** [Lenis](https://lenis.studiofreight.com/)

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/novia-ai.git
   cd novia-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🏗️ Building for Production

To create a production-ready build, run:
```bash
npm run build
```
The optimized assets will be generated in the `dist` folder. You can preview the production build locally using:
```bash
npm run preview
```

## 🎨 Design System

Novia AI uses a carefully curated CSS custom property design system (`src/styles/globals.css`) that extends Tailwind CSS. 
- **Colors:** Deep teal/slate backgrounds (`#172B36`, `#114C5A`) with vibrant amber/orange accents (`#FFC801`, `#FF9932`).
- **Typography:** Inter (body text) and JetBrains Mono (display text).
- **Aesthetics:** Heavy use of backdrop-filters (glassmorphism), radial gradients, and fluid typography clamps.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
