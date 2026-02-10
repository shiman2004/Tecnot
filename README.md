# TECNOT Landing Page

Premium, responsive landing page for TECNOT - AI-powered clinical documentation platform.

## Features

✨ **Dark Teal Design System** - Deep charcoal backgrounds with glowing teal accents
🎨 **Custom Typography** - Outfit for headings, DM Sans for body
⚡ **Smooth Animations** - Staggered fade-ups, floating elements, and cinematic transitions
📱 **Fully Responsive** - Optimized for all screens from mobile to 4K
🎯 **7 Polished Sections** - Navbar, Hero, App Showcase, Features, How It Works, Trust, CTA/Footer

## Tech Stack

- React 18 + TypeScript
- Vite
- CSS Modules with CSS Variables
- No external CSS frameworks

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Colors
- Primary: `hsl(170, 40%, 51%)` - Teal
- Background: `hsl(210, 20%, 6%)` - Deep charcoal
- Surface: `hsl(210, 18%, 10%)` - Elevated surface

### Typography
- Headings: Outfit (800 weight)
- Body: DM Sans (500 weight)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1400px
- XL: > 1400px

## Project Structure

```
src/
├── components/
│   └── landing/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── AppShowcase.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── TrustSection.tsx
│       └── CTAFooter.tsx
├── pages/
│   └── Index.tsx
├── index.css (Design system)
├── App.tsx
└── main.tsx
```

## Key Components

### Navbar
Glassmorphism navigation with scroll-triggered backdrop blur

### Hero
Animated gradient orbs, floating app mockup, stats bar

### App Showcase
Tabbed interface showing: Recording, SOAP Generation, Patient Dashboard

### Features
6-card grid with hover effects and staggered animations

### How It Works
4-step vertical timeline with animated SVG line

### Trust Section
Key stats with large teal numbers, trust badges

### CTA Footer
Email capture form, full footer with links

## License

© 2026 TECNOT. IIT SDGP Team 49.
