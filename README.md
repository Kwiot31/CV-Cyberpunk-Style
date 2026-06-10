# CV — Cyberpunk Style

Interactive bilingual CV (PL/EN) with a green neon cyberpunk aesthetic.

**Live:** [kwiatu-dev.pl](https://kwiatu-dev.pl)

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS

## Features

- Bilingual UI (Polish / English) with language picker
- Sections: profile, tech stack, career, education, side projects (EdgePremium.pro)
- Canvas background animation (`FloatingLines`) with reduced-motion support
- Responsive layout for mobile and desktop
- Production build output in `dist/`

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

## Deploy

Build the project and upload the contents of `dist/` to your static host (e.g. GitHub Pages, Cloudflare Pages, nginx).

```bash
npm run build
```
