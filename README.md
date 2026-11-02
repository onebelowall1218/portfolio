# Anjum Ulazim — Portfolio

A recruiter-focused portfolio for AI Engineer Anjum Ulazim. Built with Next.js App Router, TypeScript, Tailwind CSS, and Vercel Analytics. Live at [anjum-ulazim.vercel.app](https://anjum-ulazim.vercel.app).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Content updates

Edit `src/lib/site.ts` for projects, selected work, contact information, and public links. Homepage copy is in `src/app/page.tsx`. Project pages are generated from the same project data.

The portfolio intentionally uses only public-facing descriptions of SimplAI work. Do not copy Jira tickets, internal links, customer names, or unpublished implementation details into this repository. Project metrics should stay attached to their specific source project. The two diffusion projects are separate implementations.

The downloadable CVs are in `public/resumes/`. Replace them when resume content or employment dates change.

## Vercel

This repository is connected to the `anjum-ulazim` Vercel project. Production deploys from `main` to `https://anjum-ulazim.vercel.app`. The Production environment variable `NEXT_PUBLIC_SITE_URL` is set to that URL for stable canonical links and sitemap entries. Web Analytics is enabled in the Vercel dashboard and the Analytics component is included in the app.
