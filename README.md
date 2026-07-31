# Grass Roots Greater Manchester

A simple, responsive landing page for Grass Roots Greater Manchester. The site uses the supplied brand logo, a warm neutral palette, concise community-focused messaging, and direct email contact links.

## Technology

- TanStack Start and TanStack Router
- React 19 with TypeScript
- Tailwind CSS 4 and custom CSS
- Vite
- Netlify deployment adapter

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The Vite development server runs on port `3000`. For local Netlify emulation, use:

```bash
netlify dev --port 8889
```

## Project structure

- `src/routes/index.tsx` contains the landing page content and structure.
- `src/routes/__root.tsx` defines the document shell and page metadata.
- `src/styles.css` contains the visual system, responsive layout, and motion.
- `public/assets/` contains the supplied Grass Roots logo.
