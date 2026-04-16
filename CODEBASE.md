# Portfolio Codebase Documentation

## Overview

This is **Dhruv Gorasiya's personal portfolio website** — a modern, interactive single-page application built with React. It showcases professional experience, technical skills, and project work with a focus on Machine Learning, AI, and full-stack development. The design uses glassmorphism, animated particles, and smooth Framer Motion transitions throughout.

**Live URL:** https://my-portfolio-e5ea5.web.app

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 18.2.0 |
| Styling | Tailwind CSS 3.3.3, SASS 1.69.5 |
| Animation | Framer Motion 10.18.0, tsparticles 2.12.0 |
| Icons | FontAwesome 6, React Icons 4.11.0 |
| Backend | Firebase 10.5.2 (Firestore + Hosting) |
| Build | React Scripts 5.0.1 |

---

## Folder Structure

```
portfolio/
├── public/                        # Static HTML shell
├── src/
│   ├── assets/                    # Images, icons, resume PDF
│   │   ├── img/
│   │   │   ├── hero.png           # Profile photo (hero section)
│   │   │   ├── about.png          # Profile photo (about section)
│   │   │   ├── contact-img.svg    # Contact section illustration
│   │   │   ├── Leaf.png           # Decorative leaf (about section)
│   │   │   ├── leaf2.png          # Decorative leaf variant
│   │   │   ├── django.png         # Technology logo
│   │   │   ├── mongodb.png        # Technology logo
│   │   │   ├── nodejs.png         # Technology logo
│   │   │   └── Project/           # Project thumbnail images
│   │   ├── dhruv_gorasiya_Resume.pdf
│   │   └── index.js               # Barrel exports for all assets
│   │
│   ├── components/                # Reusable, stateless UI components
│   │   ├── HeroTypeWritter.jsx    # Typewriter animation for job titles
│   │   ├── HomeSocialLinks.jsx    # Animated social media icon link
│   │   ├── MenuItem.jsx           # Single navigation link item
│   │   ├── ServiceCard.jsx        # Stat card (currently unused)
│   │   ├── SkillCard.jsx          # Skill row with proficiency bar
│   │   └── index.js               # Barrel exports
│   │
│   ├── containers/                # Page sections (stateful, layout-level)
│   │   ├── App.jsx                # Root component — composes all sections
│   │   ├── Header.jsx             # Fixed top navigation bar
│   │   ├── Home.jsx               # Hero/landing section
│   │   ├── About.jsx              # Bio and background section
│   │   ├── Experience.jsx         # Work experience timeline
│   │   ├── Skills.jsx             # Skills with 3D rotating cube
│   │   ├── Projects.jsx           # Project cards grid
│   │   ├── Contact.jsx            # Contact form with Firebase
│   │   ├── ParticlesContainer.jsx # Animated background particles
│   │   ├── Alert.jsx              # Toast notification component
│   │   ├── ServiceCount.jsx       # Stat counters (currently unused)
│   │   ├── index.scss             # 3D cube animation styles
│   │   └── index.js               # Barrel exports
│   │
│   ├── config/
│   │   └── firebase.config.js     # Firebase app init + Firestore export
│   │
│   ├── utils/
│   │   └── helper.js              # All static content data (skills, projects, experience, nav)
│   │
│   ├── index.js                   # React DOM entry point
│   └── index.css                  # Global styles, animations, design tokens
│
├── tailwind.config.js             # Custom color palette and theme
├── firebase.json                  # Firebase Hosting config
├── .firebaserc                    # Firebase project binding
└── package.json
```

---

## Architecture

The app is a **single-page application with no client-side routing**. All sections live on one scrollable page. `App.jsx` is the top-level component that stacks every section vertically and renders the fixed `Header` and `ParticlesContainer` behind all content.

### Data Flow

All portfolio content (skills, projects, experience entries, nav items, social links) is stored as plain JavaScript arrays and objects in `src/utils/helper.js`. Components import and map over this data — there is no API fetching for content. The only live backend call is the Firebase Firestore write triggered when the contact form is submitted.

```
helper.js (static data)
    └──> imported by containers (Experience, Skills, Projects, etc.)
         └──> rendered as JSX

Contact form
    └──> Firebase Firestore write (collection: "messages")
         └──> Alert component shows success/error toast
```

---

## Sections & Components

### `App.jsx` — Root
Composes the full page. Renders `ParticlesContainer` as a fixed background, then `Header`, followed by all page sections in order: Home → About → Experience → Skills → Projects → Contact. Contains a footer with social links.

### `Header.jsx` — Navigation
Fixed top bar showing the site name and navigation links. Uses `MenuItem` for each link. Links are smooth-scroll anchors to section IDs.

### `Home.jsx` — Hero Section
- Full-screen landing with profile image
- `HeroTypeWritter` cycles through job titles (Software Engineer, ML Engineer, etc.)
- Two CTA buttons: download resume (PDF) and view projects
- `HomeSocialLinks` renders animated GitHub, LinkedIn, and email icons

### `About.jsx` — Biography
Personal bio describing background in ML/AI and software engineering. Includes decorative leaf images and a tag cloud of interest areas.

### `Experience.jsx` — Work Timeline
Vertical timeline of 4 positions rendered from `helper.js` data:

| Role | Company | Period |
|------|---------|--------|
| Software Engineering Intern | Weaviate | Aug 2025 – Present |
| Founder & CTO | Twinly | Mar 2025 – Jul 2025 |
| Research Assistant (ML) | CSULB | Aug 2023 – Jun 2024 |
| CS Tutor | CSULB | Aug 2023 – Dec 2023 |

Each entry shows role, company, duration, location, and bullet-point responsibilities.

### `Skills.jsx` — Technical Skills
Two-column layout:
- **Left**: 3D rotating cube (CSS/SCSS) showing 6 technology logos, animating on a 12-second cycle
- **Right**: `SkillCard` list grouped by proficiency level (Expert → Advanced → Intermediate → Learning), each with an animated fill bar

### `Projects.jsx` — Project Grid
10 project cards, each with:
- Thumbnail image
- Project name and description
- Tech stack tags
- GitHub link

| Project | Description |
|---------|-------------|
| FraudShield | Real-time ML fraud detection |
| OptiLearn | Genetic algorithm course scheduler |
| BrightMind | AI adaptive tutoring system |
| SchedulEase | Smart event scheduling tool |
| Chatbot | GPT-4 + Pinecone domain chatbot |
| BeachEvents | CSULB campus events mobile app |
| Keylogger | Security keystroke capture tool |
| Fridge Helper | Food expiry management app |
| Pokemon | CLI battle game |
| AirBrush | OpenCV hand-gesture painting |

### `Contact.jsx` — Contact Form
Form with first name, last name, email, and message fields. On submit, writes to Firebase Firestore collection `"messages"` and triggers an `Alert` toast.

### `ParticlesContainer.jsx` — Background
Renders 80 animated white particles using `react-tsparticles`. Particles repel from the cursor on hover and collide with each other, creating a living background effect behind all content.

### `Alert.jsx` — Toast Notification
Animated slide-in toast with a color-coded status (success / warning / danger) and a 4-second auto-dismiss progress bar. Triggered by the contact form submission result.

---

## Reusable Components

### `HeroTypeWritter.jsx`
Accepts a `words` array and `speed` (ms per character). Cycles through words with a blinking cursor, deleting and retyping each word in sequence.

### `HomeSocialLinks.jsx`
Renders a single social link icon. Accepts `data` (icon component, URL, color) and `index` for staggered Framer Motion entrance animations. Icons blur and scale on hover.

### `MenuItem.jsx`
Single navigation anchor. Accepts a `menu` object (icon, name, URI) and `index` for staggered animation.

### `SkillCard.jsx`
A skill row with:
- Skill name
- Animated progress bar (width driven by `proficiency` prop)
- Color theming per skill
- Slide-in animation triggered when scrolled into view

---

## Design System

### Color Palette (`tailwind.config.js`)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#00FFAA` | Accent highlights, links |
| `secondary` | `#00FF60` | Secondary accents |
| `textLight` | `#a7a7a7` | Body text, descriptions |
| `bgPrimary` | `#020010` | Page background (deep dark purple) |

### Visual Design Language
- **Glassmorphism**: All cards use `backdrop-blur-[12px]` with semi-transparent dark backgrounds and subtle border highlights
- **Gradient Text**: Section headings use an animated 8-second looping gradient fill
- **Dark Theme**: Near-black background (`#020010`) throughout
- **Particle Layer**: Full-viewport tsparticles canvas sits behind all content at `z-index: 0`
- **Font**: Inter (weights 300–700) loaded from Google Fonts

### Animations
| Effect | Implementation |
|--------|---------------|
| Page section entrances | Framer Motion `variants` with staggered children |
| Typewriter text | Custom `HeroTypeWritter` component with `setInterval` |
| 3D rotating skill cube | Pure CSS `@keyframes` rotation in `index.scss` |
| Skill bar fills | Framer Motion width animation on viewport entry |
| Particle background | tsparticles physics engine |
| Toast dismiss bar | CSS transition on width over 4 seconds |

---

## Firebase Integration

**Project ID:** `my-portfolio-e5ea5`

| Feature | Details |
|---------|---------|
| Hosting | Deployed at `https://my-portfolio-e5ea5.web.app` |
| Firestore | Stores contact form submissions in collection `messages` |
| Message schema | `{ firstname, lastname, email, message }` |

Config lives in `src/config/firebase.config.js`. The `addDoc` call in `Contact.jsx` is the only place the app writes to Firebase.

---

## Static Data (`src/utils/helper.js`)

All portfolio content is defined here as exported arrays:

| Export | Used By | Contains |
|--------|---------|---------|
| `menuItems` | Header | Nav link names, icons, anchor IDs |
| `socialLinks` | Home, App footer | GitHub, LinkedIn, email URLs + icons |
| `skills` | Skills | Skill name, color, proficiency level |
| `experiences` | Experience | Role, company, dates, bullet points |
| `projects` | Projects | Name, description, image, tech tags, GitHub URL |

To update any portfolio content, edit only this file — no component changes needed.

---

## Scripts

```bash
npm start       # Start dev server at localhost:3000
npm run build   # Production build to /build
npm test        # Run Jest test suite
npm run eject   # Eject CRA config (irreversible)
```

## Deployment

```bash
npm run build
firebase deploy
```

Deploys to Firebase Hosting. Configuration in `firebase.json` points the public directory to `build/` and enables single-page app rewrites.
