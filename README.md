# Pavlo Pikalov — Portfolio

Personal portfolio site for **Pavlo Pikalov**, Technical Project Manager. Built with React, Vite, and SCSS modules. Mobile-first, accessible, and SEO-friendly.

**Live site:** [https://pavlopikalov.github.io/](https://pavlopikalov.github.io/)

---

## For hiring managers and reviewers

You do **not** need to install anything to review this portfolio.

| What you want | What to do |
|---------------|------------|
| View the site | Open the [live link](https://pavlopikalov.github.io/) in any browser |
| Download the CV | On the site, use the CV link, or open [`public/cv.pdf`](public/cv.pdf) in this repo |
| See the source code | Browse files on [GitHub](https://github.com/PavloPikalov/PavloPikalov.github.io) — no setup required |
| Contact Pavlo | Use the [Contact](https://pavlopikalov.github.io/contact) page or [LinkedIn](https://linkedin.com/in/pavlo-p-33577a19b) |

The site includes Home, Projects, About, and Contact sections. Pages are designed to work on phone, tablet, and desktop.

---

## For developers — run locally

Use these steps if you want to run the project on your own computer.

### 1. Install Node.js (one-time)

Download and install **Node.js 20 LTS** from [https://nodejs.org](https://nodejs.org).

To confirm it worked, open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
node --version
npm --version
```

You should see version numbers (for example `v20.x.x`).

### 2. Get the project

**Option A — Download ZIP (no Git required)**

1. Go to [https://github.com/PavloPikalov/PavloPikalov.github.io](https://github.com/PavloPikalov/PavloPikalov.github.io)
2. Click **Code** → **Download ZIP**
3. Unzip the folder and open Terminal in that folder

**Option B — Clone with Git**

```bash
git clone https://github.com/PavloPikalov/PavloPikalov.github.io.git
cd PavloPikalov.github.io
```

### 3. Install dependencies

From the project folder:

```bash
npm install
```

This downloads the libraries the app needs. It may take a minute the first time.

### 4. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually [http://localhost:5173/](http://localhost:5173/)).

Press `Ctrl+C` in the terminal to stop the server.

### 5. Other useful commands

| Command | Purpose |
|---------|---------|
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally at [http://localhost:4173/](http://localhost:4173/) |

---

## Deployment (automatic)

Pushing to the **`production`** branch triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

### One-time GitHub setup (repository owner)

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `production` — the workflow runs automatically

After a successful run, the site updates at the live URL above (usually within 1–2 minutes).

### Manual deploy (optional)

```bash
npm run deploy
```

This builds locally and pushes the `dist/` folder to the `gh-pages` branch using the `gh-pages` package. Prefer the GitHub Actions workflow when possible.

---

## Project structure

```
├── public/              Static files (CV, favicon, etc.)
├── src/
│   ├── components/      Reusable UI (Header, Hero, Modal, …)
│   ├── pages/           Route pages (Home, Projects, About, Contact)
│   ├── hooks/           Shared React hooks
│   ├── assets/          Images and media
│   ├── App.jsx          App shell and routing
│   └── main.jsx         Entry point
├── index.html           HTML shell and SEO meta
├── vite.config.js       Vite config (base path for GitHub Pages)
└── package.json         Dependencies and scripts
```

---

## Tech stack

- **React 18** — UI
- **Vite 5** — dev server and build tool
- **React Router** — client-side routing
- **SCSS modules** — scoped component styles (`.module.scss`)
- **GitHub Pages** — hosting

---

## Conventions

- **Styles:** One `.module.scss` file per component; mobile-first breakpoints at `768px`
- **Accessibility:** Semantic HTML, ARIA where needed, keyboard-friendly navigation
- **Routing:** User-site repo (`username.github.io`) is served at `/` — Vite `base` is `'/'` and `BrowserRouter` has no basename
- **SEO:** Page title and meta tags in `index.html`; meaningful headings and alt text in components

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `command not found: npm` | Install Node.js from [nodejs.org](https://nodejs.org) and restart the terminal |
| Blank page on live site | In GitHub **Settings → Pages**, set source to **GitHub Actions** (not “Deploy from branch”), then re-run the deploy workflow |
| Old `/PortfolioPM2026/` URL 404 | Repo was renamed to `PavloPikalov.github.io` — use [https://pavlopikalov.github.io/](https://pavlopikalov.github.io/) instead |
| `npm install` fails | Use Node 20+, delete `node_modules`, run `npm install` again |
| Deploy workflow fails | In repo **Settings → Pages**, set source to **GitHub Actions** |
| Page refresh 404 on live site | Workflow copies `index.html` to `404.html` for SPA routing — redeploy if missing |

---

## License

Private portfolio project. Contact the author before reusing content or assets.
