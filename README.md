# Abdulrahman Amr | Personal Portfolio

[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](https://github.com/abdoamr99)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20|%20CSS3%20|%20Vanilla%20JS-blue?style=flat-square)](https://github.com/abdoamr99)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)](LICENSE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/abdo-amr-a712005c/)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-D14836?style=flat-square&logo=gmail)](mailto:Abdo.Amr712003@gmail.com)

A high-performance, responsive personal portfolio website engineered with zero external dependencies. Designed with a sleek developer aesthetic featuring real-time particle dynamics, code rain background effects, smooth scroll interactions, and a dual-theme architecture.

---

## Overview

This repository hosts the source code for the personal developer portfolio of **Abdulrahman Amr Sayed**, a .NET and Full-Stack Developer specializing in scalable backend architectures, RESTful APIs, and clean engineering practices.

The site is built with pure Vanilla Web technologies to maximize performance, maintain zero bundle overhead, and deliver an interactive user experience across all devices and screen sizes.

---

## Architectural Highlights

- **Zero-Dependency Core**: Built purely with semantic HTML5, modern CSS3, and native JavaScript (ES6+). No heavy frameworks, no build-step bottlenecks, sub-second load times.
- **Dynamic Canvas Particle Engine**: Custom interactive particle mesh network rendered dynamically on HTML5 Canvas with auto-resizing and responsive velocity calculations.
- **Matrix-Inspired Digital Rain**: Lightweight procedural character rain animation integrated into the background layer.
- **Dual-Theme Persistence**: Dark/Light mode switcher powered by CSS custom properties and client-side `localStorage` caching to remember visitor preferences.
- **Accessible & Responsive UX**: Skip-links for keyboard navigation, ARIA attributes, semantic structure, and fully responsive layouts down to mobile viewports.
- **Client-Side Form Validation**: Real-time validation layer for the contact form with custom error states and non-blocking toast notifications.

---

## Technical Stack

| Layer | Technologies / Techniques |
| :--- | :--- |
| **Structure** | Semantic HTML5, ARIA Roles, Mobile-First Viewport Configuration |
| **Styling** | Modern CSS3, CSS Custom Properties (Variables), Flexbox, CSS Grid, Keyframe Animations, Glassmorphism |
| **Interactivity** | Vanilla JavaScript (ES6+), HTML5 Canvas 2D Context, DOM Mutation, RequestAnimationFrame |
| **Typography** | Space Grotesk, IBM Plex Mono (Google Fonts) |
| **Assets** | Optimized SVG Icons, Hardware-Accelerated Transforms |

---

## Repository Structure

```text
Personal-Portfolio-Website/
|-- index.html        # Semantic site markup, accessibility anchors, and section layouts
|-- style.css         # Design system tokens, responsive grid layouts, animations, and theme styles
|-- script.js         # Canvas particle simulation, theme toggling, menu interaction, and validation
|-- profile.jpg       # Profile imagery asset
`-- README.md         # Technical documentation and project overview
```

---

## Sections Breakdown

1. **Hero Section**: Distinctive developer introduction, orbiting interactive graphic elements, call-to-action buttons, and live availability badge.
2. **Infinite Tech Ticker**: Continuous animated marquee showcasing core backend and frontend competencies.
3. **About Me**: Professional biography, academic background at Beni-Suef National University (AI Major), and certifications (Huawei HCIA-AI).
4. **Experience Timeline**: Career milestones including hands-on experience at Simple Solutions, DEPI (Digital Egypt Pioneers Initiative), ITI, and Creativa.
5. **Technical Skills Grid**: Modular categorizations spanning .NET Backend (C#, ASP.NET Core, EF Core, SQL Server), Frontend, Core CS & AI, and Tooling.
6. **Featured Projects**:
   - **Wasl (Transportation Platform)**: Phased management platform built with ASP.NET Core MVC, EF Core migrations, and Fluent API configurations.
   - **E-Commerce Web Platform**: Scalable backend with clean architecture, JWT authentication, and role-based access control.
   - **Student Record System**: Full CRUD REST API with a responsive Bootstrap frontend and filtered pagination.
   - **Expense & Financial Tracker**: Financial reporting engine with secure authentication and database persistence.
7. **Interactive Contact**: Direct communication channels (Email, LinkedIn, Phone, GitHub) alongside a client-validated messaging form.

---

## Getting Started

### Prerequisites

No package managers or external runtimes are required. You only need a modern web browser.

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abdoamr99/Personal-Portfolio-Website.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd Personal-Portfolio-Website
   ```

3. **Launch the site**:
   - **Option A (Direct)**: Open `index.html` directly in your web browser.
   - **Option B (Python Local Server)**:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - **Option C (VS Code Live Server)**: Right-click `index.html` and select **Open with Live Server**.

---

## Performance & Optimization

- **Zero Bundle Size**: No external JS/CSS dependencies or bundled libraries.
- **Hardware Acceleration**: Transitions and animations utilize `transform` and `opacity` properties to prevent costly layout reflows and repaints.
- **Optimized Event Loops**: Canvas animations leverage `requestAnimationFrame` for synchronized 60fps rendering without blocking the UI thread.

---

## Author & Contact

**Abdulrahman Amr Sayed**  
*.NET & Full-Stack Developer*

- **GitHub**: [github.com/abdoamr99](https://github.com/abdoamr99)
- **LinkedIn**: [linkedin.com/in/abdo-amr](https://www.linkedin.com/in/abdo-amr-a712005c/)
- **Email**: [Abdo.Amr712003@gmail.com](mailto:Abdo.Amr712003@gmail.com)
- **Location**: Beni Suef, Egypt

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

