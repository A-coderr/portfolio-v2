# Anzhelika Kostyuk — Portfolio

Production portfolio built with Next.js, TypeScript, Tailwind CSS, and React Three Fiber.

**Live site:** _Add production URL after deployment_

## Technical Overview

- Next.js + React + TypeScript
- Tailwind CSS
- Three.js / React Three Fiber for selective interactive 3D
- Vitest + React Testing Library
- Dynamic project case-study routes
- Lightweight click-to-load YouTube embeds
- Centralized SEO, canonical URL, sitemap, robots, and social metadata
- Designed for Vercel deployment

## Quality

| Check | Result |
| --- | --- |
| Automated tests | 53 passing |
| Test files | 11 |
| Lint | Passing |
| Production build | Passing |
| TypeScript | Passing through Next.js build |
| Browser console | No known warnings or errors |

Testing focuses on user-visible behavior rather than implementation details or snapshot-heavy coverage.

## Architecture Notes

The portfolio is intentionally mostly static/server-rendered, with client-side JavaScript limited to features that require interaction.

Interactive 3D is used selectively to preserve visual identity without adding unnecessary runtime cost.

Project case studies share reusable layout patterns while retaining project-specific content.

The canonical production URL is centralized through `SITE_URL` for clean deployment and custom-domain configuration.

## Local Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm test
npm run lint
npm run build
```

## Deployment

Designed for Vercel.

For the final production domain:

```text
SITE_URL=https://your-domain.com
```

## License

Source code is available under the [MIT License](./LICENSE).

Personal branding, artwork, screenshots, third-party trademarks, and third-party logos are excluded unless otherwise stated.
