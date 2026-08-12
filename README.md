# Bloin

Bloin's static personal site, built with Astro, Tailwind CSS 4, and Three.js.

## Local development

Use Node 22 (the same major is pinned in `.nvmrc` and GitHub Actions), then:

```sh
npm ci
npm run dev
```

Useful checks:

```sh
npm run check
npm run build
npm run preview
```

`npm run build` type-checks the Astro source, builds `dist/`, then verifies required routes, compatibility redirects, RSS/sitemap output, stable assets, and root-relative links.

## Content

- Blog posts live in `src/content/blog/*.md` and require an explicit stable `slug`.
- Markdown supports responsive layouts with `::::columns` and nested `:::column` blocks. Use the longer outer fence so nested columns parse correctly.
- Projects live in `src/content/projects/*.yaml`. The homepage's selected work is controlled by the `selectedProjectIds` list near the top of `src/pages/index.astro`; reorder, add, or remove IDs there.
- Add as many selected projects as you like—the homepage row scrolls horizontally after four cards on desktop or two on mobile.
- A project `url` may be external (`https://...`) or an internal site path such as `/blog/aesthetic-driven-innovation/`. Internal links stay in the same tab; external links open a new tab.
- Draft posts do not produce post, tag, RSS, sitemap, or legacy redirect output.
- Changing a published post slug changes both its URL and giscus discussion identity.

The homepage keeps old hash URLs working, and each published post also emits a `/post/<slug>/` compatibility page.

## Optional comments

Post pages remain complete without giscus. To enable it, install/authorize the giscus app for GitHub Discussions, choose the `General` category (or update `Giscus.astro` consistently), and provide:

```sh
PUBLIC_GISCUS_REPO_ID=...
PUBLIC_GISCUS_CATEGORY_ID=...
```

Copy `.env.example` to `.env` for local use. The configured mapping is `specific` with the term `post:<slug>`.

## Experiments and third parties

- Translation Telephone uses the public MyMemory API and is subject to its quota and availability. `?translation-test=stabilize` and `?translation-test=error` exercise its deterministic local diagnostic states.
- The homepage portal uses a small WebGL 2 shader with a still-image fallback and pauses when hidden or reduced motion is requested.
- Shangri-La loads Three.js only on its route. `?model=failure` intentionally exercises its readable model-load failure state.
- The D-DIN font remains remote for parity; system fallbacks are declared.

## Deployment

Pushes to `main` run the GitHub Pages workflow, which installs with `npm ci`, runs the verified build, and uploads `dist/`. This migration does not deploy automatically from feature branches.

Canonical production URL: https://lubolin.github.io/

## Owner review

- `quotes-I-like` still uses the legacy date `2002-06-18`; confirm whether that date is intentional.
- `public/assets/models/lighthouse_island.fbx` is retained as an unused-asset candidate pending an explicit deletion decision.

Also visit [Bacen](https://bacenl.github.io/) and [BlazeChron](https://blazechron.github.io/).
