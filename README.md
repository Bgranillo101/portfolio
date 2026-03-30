# Brandon Granillo — Portfolio

Personal portfolio website built with Next.js 15, showcasing my work in embedded systems, digital design, and systems engineering.

**Live site:** [bgranillo101.github.io/portfolio](https://bgranillo101.github.io/portfolio/)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D | React Three Fiber + Drei |
| Icons | Lucide React |
| Theme | next-themes (dark/light toggle) |
| Fonts | Space Grotesk, Inter, JetBrains Mono |

## Features

- Animated 3D hero element (torus knot with distort material)
- Dark/light theme with persistent toggle
- Bento grid project layout
- Auto-scrolling carousels for languages, skills, and class schedule
- Floating gradient orbs and mesh background graphics
- Scroll-triggered reveal animations
- Glassmorphism navigation with mobile drawer
- Fully responsive design

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, theme provider
  page.tsx          Home page composing all sections
  globals.css       Design tokens, utilities, animations
components/
  Nav.tsx           Sticky nav with theme toggle
  Hero.tsx          Hero section with 3D scene
  HeroScene.tsx     React Three Fiber canvas
  About.tsx         Bio and stats
  Education.tsx     ASU degree and coursework
  Experience.tsx    Timeline with work history
  Projects.tsx      Bento grid project cards
  Skills.tsx        Three auto-scrolling carousels
  Carousel.tsx      Reusable infinite scroll component
  Lifestyle.tsx     Activities and photo grid
  Contact.tsx       CTA with social links
  Footer.tsx        Copyright and links
  SectionReveal.tsx Framer Motion scroll animations
  ThemeProvider.tsx  Dark/light mode context
  BackgroundGraphics.tsx  Floating orbs and mesh gradients
lib/
  data.ts           All portfolio content as typed objects
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or push to GitHub and connect the repo to [vercel.com](https://vercel.com).

## License

MIT
