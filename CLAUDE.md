# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

Single-page marketing/landing site for Rally, an iOS dating app. Built with React 19 + Vite + Tailwind CSS v3, deployed as a static site (likely Firebase Hosting).

**Routing:** Uses `HashRouter` (not `BrowserRouter`) — required for static hosting compatibility. All routes are hash-based (`/#/about`, `/#/faq`, etc.).

**App shell** ([src/App.jsx](src/App.jsx)): `Layout` component wraps all routes with `<Navbar>` + `<Footer>`. `<PreorderSection>` (the App Store CTA section with QR code) renders on all pages *except* `/` — the Home page includes its own instance inline at the bottom.

**Pages:** Home, About, FAQ, Privacy, Terms — all in [src/pages/](src/pages/).

**Firebase** ([src/firebase.js](src/firebase.js)): Initialized via `VITE_FIREBASE_*` env vars. Used for backend features (e.g., waitlist/pre-order submissions). Config requires a `.env` file with those variables.

## Styling conventions

- **Dark theme:** Deep navy background (`#1e3a8a`), white/blue-tinted text, `text-blue-*` palette throughout.
- **Font:** Plus Jakarta Sans loaded externally; applied globally in [src/index.css](src/index.css).
- **Custom utility classes** defined in [src/index.css](src/index.css):
  - `.glass-nav`, `.glass-card`, `.glass-dark` — frosted-glass effects
  - `.text-display`, `.text-display-sm`, `.text-heading` — fluid type scale using `clamp()`
  - `.animate-slide-up`, `.animate-fade-in`, `.animate-float`, `.animate-marquee`, `.animate-swipe-left`, `.animate-swipe-right` — custom keyframe animations
- Inline `style` props are used frequently for one-off `clamp()` font sizes and animation delays — this is intentional, not a bug.
- Responsive breakpoints follow Tailwind defaults; `md:` is the main desktop breakpoint.
- Padding pattern: `px-5 sm:px-8 md:px-14 lg:px-20` is the standard section horizontal padding used across all sections.
