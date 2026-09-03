# Portfolio V2

A professional software engineering portfolio built to showcase my work across web development, interactive 3D, and game development.

The project is being designed and developed from the ground up with an emphasis on clean architecture, accessibility, responsive design, testing, performance, and intentional interaction.

> **Status:** Active development

## About

This is the second major version of my personal portfolio.

Rather than functioning as a traditional résumé-style website, Portfolio V2 is structured around technical case studies that explain the problems I worked on, the systems I built, the engineering decisions involved, and the results of the work.

The portfolio is designed around three connected areas of my software engineering work:

- Software engineering and web applications
- Unity/C# game development
- Interactive 3D experiences and tools

Featured work will include projects such as:

- **Neon Chaser** — Unity/C# racing game and gameplay systems
- **Digital Asset Management Platform** — professional full-stack and interactive 3D platform work
- **SKIF Karate Canada** — production website designed, developed, deployed, and maintained end-to-end
- **Portfolio V1** — previous React and React Three Fiber portfolio

## Tech Stack

### Core

- Next.js
- React
- TypeScript
- Tailwind CSS

### Design

- Figma
- Geist Sans
- Geist Mono

### Planned Interactive 3D

- Three.js
- React Three Fiber
- Drei

Interactive 3D dependencies will be introduced only where they provide meaningful value to the experience.

### Quality

The project is being developed with:

- ESLint
- automated component testing
- accessibility-focused implementation
- responsive design
- reduced-motion support
- GitHub Actions CI
- pull-request based development

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages and global styles
├── components/
│   ├── hero/             # Hero and interactive systems visual
│   ├── layout/           # Navigation and shared layout components
│   ├── project/          # Project presentation components
│   └── ui/               # Reusable UI primitives
├── data/                 # Portfolio and project content
└── lib/                  # Shared utilities
```

The structure will evolve as additional case studies and interactive features are added.

## Getting Started

### Requirements

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/A-coderr/portfolio-v2.git
cd portfolio-v2
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint.

Once the automated testing foundation is added:

```bash
npm test
npm run test:watch
```

will run the project's automated tests.

## Engineering Principles

This project is intentionally being treated as a production-quality software project rather than only a visual portfolio.

Development follows several core principles:

- Prefer clear, reusable components over large page-level implementations.
- Keep portfolio content separate from presentation where practical.
- Use TypeScript for application code.
- Prioritize semantic HTML and accessibility.
- Respect `prefers-reduced-motion`.
- Add animation only when it improves communication or interaction.
- Avoid unnecessary dependencies.
- Test meaningful user-facing behavior rather than implementation details.
- Use comments to explain non-obvious intent or architectural decisions, not obvious code.
- Keep significant development work tied to GitHub issues and feature branches.
- Run tests, linting, and production builds before merging significant changes.

## Development Workflow

Significant work follows a lightweight issue-based workflow:

```text
GitHub Issue
    ↓
Feature Branch
    ↓
Implementation
    ↓
Tests + Lint + Build
    ↓
Pull Request
    ↓
Review
    ↓
Merge to main
```

Example branch names:

```text
feature/hero-foundation
feature/selected-work
feature/neon-chaser-case-study
fix/mobile-navigation
```

## Design Direction

The visual identity combines professional software engineering with interactive and game-development influences.

The design system uses:

- dark graphite surfaces
- strong editorial typography
- restrained coral accents
- technical metadata using monospace typography
- generous spacing
- subtle interaction
- project media as the primary visual content

The goal is to create an interface that feels technically sophisticated without becoming a generic developer template, SaaS landing page, or gaming website.

## Current Roadmap

### Foundation

- [x] Initialize Next.js project
- [x] Configure Git repository
- [x] Establish initial design direction
- [x] Build initial hero foundation
- [ ] Add automated testing foundation
- [ ] Add GitHub Actions CI
- [ ] Complete responsive hero review

### Homepage

- [ ] Selected Work
- [ ] Neon Chaser featured project
- [ ] VARLab project presentation
- [ ] SKIF Karate Canada project presentation
- [ ] Engineering in Practice
- [ ] Capabilities
- [ ] Experience
- [ ] About
- [ ] Contact

### Case Studies

- [ ] Neon Chaser
- [ ] Digital Asset Management Platform
- [ ] SKIF Karate Canada
- [ ] Portfolio V1

### Interactive Experience

- [ ] Prototype interactive 3D hero
- [ ] Implement reduced-motion fallback
- [ ] Optimize WebGL performance
- [ ] Validate mobile performance

### Launch

- [ ] Cross-browser QA
- [ ] Accessibility review
- [ ] Performance audit
- [ ] SEO and social metadata
- [ ] Production deployment

## Project Management

Development tasks, enhancements, bugs, and technical work are tracked through GitHub Issues and the **Portfolio V2** GitHub Project.

The board follows:

```text
Backlog → Ready → In Progress → Review → Done
```

## Author

**Anzhelika Kostyuk**

Software Developer focused on web applications, interactive 3D, and Unity/C# game development.

- GitHub: [A-coderr](https://github.com/A-coderr)
- LinkedIn: Add final LinkedIn URL here

## License

This repository contains the source code for my personal portfolio.

A formal license has not yet been selected.
