# Project Guide

## Overview

This repository contains a single-page marketing site for Grass Roots Greater Manchester. It is built with TanStack Start, React, TypeScript, Vite, and Tailwind CSS, and is configured for deployment on Netlify.

## Architecture

- `src/router.tsx` initializes the generated TanStack Router route tree.
- `src/routes/__root.tsx` owns the HTML shell, global stylesheet import, and SEO metadata.
- `src/routes/index.tsx` is the main landing page route.
- `src/styles.css` contains global design tokens, layout rules, responsive breakpoints, and animations.
- `public/assets/` stores static brand assets served from the site root.
- `netlify.toml` defines the Netlify build and publish settings.

## Conventions

- Use TypeScript and React function components.
- Keep route components in `src/routes/` and follow TanStack Router file-based routing conventions.
- Use the `@/` alias for imports from `src/` when it improves readability.
- Keep shared palette and spacing values as CSS custom properties in `src/styles.css`.
- Preserve accessible focus states, semantic landmarks, descriptive image alt text, and reduced-motion support.
- Use kebab-case for static asset filenames and PascalCase for reusable React components.
- Avoid adding JavaScript for interactions that HTML and CSS can handle reliably.

## Design decisions

The design intentionally uses warm neutral tones, botanical green, and restrained terracotta pulled from the supplied logo. The hero is asymmetric to give the logo a prominent editorial treatment while retaining a clear contact action. Contact links currently use `hello@grassrootsgm.org`; update every occurrence in `src/routes/index.tsx` if the final address differs.

## Commands

- `pnpm dev` starts the Vite development server.
- `pnpm build` creates the production build.

Do not commit generated output from `dist/`, `.netlify/`, or `.tanstack/`.
