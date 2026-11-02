# Anjum Ulazim — Portfolio

A recruiter-focused portfolio for AI Engineer Anjum Ulazim. Built with Next.js App Router, TypeScript, Tailwind CSS, and Vercel Analytics.

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

Connect this repository to a Vercel project using the Next.js preset. The deployment URL is detected automatically for metadata. When a permanent domain is chosen, set `NEXT_PUBLIC_SITE_URL` to its full `https://` URL for stable canonical links and sitemap entries. Enable Web Analytics in the Vercel dashboard to see traffic data from the included Analytics component.
