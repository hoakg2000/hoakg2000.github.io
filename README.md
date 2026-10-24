# hoakg2000.github.io

Personal portfolio of Phạm Dương Hòa — bilingual (English / Tiếng Việt), light and dark themes.

**Stack:** Next.js (App Router, static export) · Tailwind CSS v4 · Framer Motion · Lucide · TypeScript

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # static site in ./out
```

## Editing content

All copy for both languages lives in `content/dictionary.ts`. The CV linked from the site is `public/PhamDuongHoa-CV.pdf`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes `out/` to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
