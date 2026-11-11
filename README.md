# Mohamed Waleed Elmogy — Editorial Portfolio

A responsive, editorial-style personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and next-themes.

## Included pages

- `/` — Homepage
- `/about` — Personal introduction and education
- `/projects` — DiagnoLink and Supermarket Sales Analysis
- `/notes` — Planned technical writing topics
- `/skills` — Technical toolkit
- `/experience` — Experience, education, training, certificates
- `/contact` — Email, LinkedIn, GitHub

## Design direction

Editorial light theme with optional dark mode:
- Warm off-white paper background and charcoal ink
- Serif display headings and restrained sans-serif interface text
- Thin dividers, generous whitespace, quiet accent color
- Responsive navigation and mobile menu
- Small, purposeful hover transitions
- No stock imagery or fabricated testimonials

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Customize your content

Most portfolio content lives in `lib/site.ts`. Update:
- `site` for your name, contact details, and profile links
- `projects` for project descriptions, outcomes, and repository links
- `experience`, `education`, `skills`, and `certificates` for your CV details
- `notes` as you publish real articles

All content currently included is based on the supplied CV. The notes page is intentionally marked as planned content.

## Deploy

Recommended: import the project into Vercel and deploy with the default Next.js settings.

Before publishing:
1. Verify your email, phone, LinkedIn, and GitHub links.
2. Add repository/demo URLs for projects where available.
3. Add a real favicon and social preview image.
4. Review the project accuracy and public contact details.
5. Add a privacy notice if analytics or contact forms are introduced.

## Notes

This is a source-code starter implementation. It has not been deployed to a public URL.
