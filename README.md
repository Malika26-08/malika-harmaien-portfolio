# Malika Harmaien — AI Engineer Portfolio

A premium, recruiter-facing personal portfolio built from scratch with React,
Vite, Tailwind CSS v4 and Framer Motion. All copy, credentials and project
details are sourced from Malika's resume, certificates and stated facts —
nothing invented.

## Stack

- **React 19 + Vite** — component structure, fast dev/build
- **Tailwind CSS v4** (CSS-first `@theme` tokens) — design system
- **Framer Motion** — one restrained scroll-reveal pattern + a single hero
  load-in sequence; fully disabled under `prefers-reduced-motion`
- **@fontsource** (Fraunces + Space Grotesk) — self-hosted fonts, no
  external font requests at runtime
- **lucide-react** — UI icons (GitHub/LinkedIn marks are hand-drawn SVGs in
  `src/components/BrandIcons.jsx` for crisp, dependency-free brand marks)

No backend, no CMS — content lives in one plain JS file.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Production build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to check it
```

`dist/` is a fully static site — upload it as-is to any static host.

## Deployment

Any static host works. Two common options:

**Netlify / Vercel (recommended, zero-config)**
1. Push this folder to a GitHub repo.
2. Import the repo in Netlify or Vercel.
3. Build command: `npm run build` — Output directory: `dist`.
4. Deploy. Point your custom domain (or use the free subdomain) and put
   that link on LinkedIn/resume.

**Any static file host**
1. Run `npm run build`.
2. Upload the contents of `dist/` to your host (Netlify Drop, GitHub Pages,
   S3 + CloudFront, etc.).

## Updating content later

Everything text/link-related lives in **`src/data/content.js`** — no
component code needs to change for routine updates:

- **Projects** — edit the `projects` array. Each entry has `github`, `live`,
  `api` (optional) links, a `tech` list, and `what`/`built` copy. Add a new
  project by copying an existing object; give it a unique `slug` and an
  `index`.
- **Journey / internships** — edit the `journey` array (chronological).
- **Certifications** — edit the `certifications` array. Each entry points to
  a PDF under `public/assets/certificates/`. To add a new certificate: drop
  the PDF in that folder and add a matching entry with `title`, `issuer`,
  `period`, `credentialId`, `issued`, and `file` (the `/assets/...` path).
- **Achievements** — edit the `achievements` array (kept to what's verified).
- **Skills / focus areas** — edit `skills` and `focusAreas`.
- **Résumé** — replace `public/assets/resume/Malika-Harmaien-Resume.pdf`
  with the new file (keep the same filename, or update `resumeUrl` in
  `content.js` if you rename it).
- **Photo** — replace the files in `public/assets/photo/` (`malika-
  portrait.jpg` and `.webp`, both cropped to a 4:5 portrait) and keep the
  same filenames, or update `profile.photo` in `content.js`.

After editing, just run `npm run build` again (or redeploy — most hosts
rebuild automatically on push).

## What's intentionally not included

A few things from the original brief weren't in the supplied materials, so
nothing was invented for them:

- **A live GitHub repository link for the Model Monitoring project** — the
  brief confirmed there isn't a public repo for it; it's presented as
  research (with the actual IJSRED publication certificate) instead of a
  code project.
- **PR/pull-request analysis as a CodeOrbit AI feature** — mentioned as
  possibly planned but not confirmed complete, so it's left out of the
  project description entirely rather than guessed at.
- **A specific DOI or article URL for the IJSRED paper** — the certificate
  references the journal's site (ijsred.com) generally, which is what's
  linked; no specific article URL was supplied.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), a "skip to
  work" link, and visible focus rings throughout.
- All motion respects `prefers-reduced-motion` (see
  `src/hooks/useReducedMotion.js`) — content renders in its final state
  with no transform/opacity animation when the setting is on.
- Fonts and the hero portrait are self-hosted/optimized; the one oversized
  certificate scan was recompressed from ~14 MB to ~260 KB without losing
  legibility.
- No client-side routing, no unnecessary dependencies — the whole bundle is
  a single-page static build.
