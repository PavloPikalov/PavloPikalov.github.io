# My Portfolio (Vite + React)

This repository is a starter scaffold for a personal portfolio built with React and SCSS modules (mobile-first, accessible, semantic).

Getting started

1. Install dependencies

```bash
npm install
```

2. Run in development

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Deploy to GitHub Pages

- Install `gh-pages` (already in devDependencies). Set the `repository` field in `package.json` to your GitHub repo URL.
- Push the repo, then run:

```bash
npm run deploy
```

Notes & Best Practices
- All component styles use SCSS modules (`.module.scss`) and are isolated per component.
- Mobile-first layout with media queries at `@media (min-width: 768px)` for tablet/desktop.
- Semantic HTML and accessible attributes are used across components.

Next steps
- Replace placeholder content, add project images to `public/` and update `src/pages/Projects` sample data.
- Optionally add GitHub Actions for CI and automatic deploys.
