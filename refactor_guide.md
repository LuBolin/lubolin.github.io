# Bloin website: evidence-backed Astro migration guide

Status: implementation plan, not an implementation report  
Repository: `LuBolin/lubolin.github.io`  
Canonical site: `https://lubolin.github.io/`  
Reviewed against commit: `82d2b9f`

## 1. Outcome

Migrate the current Vite/TypeScript hash-routed site to an Astro static site while preserving its content, earthy visual identity, unusual personal details, and interactive experiments.

The migration succeeds only if it produces:

- real, crawlable static routes;
- build-time Markdown rendering with validated metadata;
- a responsive Bento tile system and homepage that point into dedicated pages;
- every post and project present at migration time without silent content loss;
- preserved Translation Telephone and Shangri-La routes, plus the homepage portal entrance;
- legacy URL compatibility;
- a reproducible GitHub Pages deployment; and
- no application server, database, CMS, or client UI framework.

This is an architectural migration and a homepage redesign, not a generic portfolio replacement or a rewrite of personal copy. Subsequent owner-directed iterations removed the pronunciation control and Translation Telephone homepage entry, replaced the illustrated navbar portal with a small homepage-only WebGL 2 shader entrance, updated Education to Year 4, and added a verified light/dark theme.

## 2. Decisions produced by the self-grill

These decisions replace the speculative or contradictory parts of the previous guide.

### Does this need Astro, or can Vite be repaired?

Astro stays. A repaired Vite router would not meet the required real routes, build-time blog, route metadata, RSS, and static content goals without rebuilding features Astro already provides.

### Should the repository be recreated from an Astro starter?

No. The repository is small and already contains the source material. Install Astro in place and add only the files the migration needs. Do not scaffold a second project and copy its incidental defaults back.

### Does Tailwind earn a dependency?

Yes. Astro + Tailwind CSS 4 is the chosen presentation stack. Use Tailwind for layout, spacing, responsive behavior, typography, focus states, and repeated card primitives. Keep custom CSS for the D-DIN font declarations, rendered article prose, WebGPU canvas, Three.js scene, and special animations where utilities would obscure the behavior.

Use Tailwind 4's CSS-first configuration through `@tailwindcss/vite`; do not add a legacy `@astrojs/tailwind` integration or a `tailwind.config.js` unless a concrete requirement cannot be expressed in CSS.

### Should the site use daisyUI because the reference site does?

No, not initially. The reference gets value from semantic themes and consistent card treatment, but this site needs only a small custom tile vocabulary and its existing earthy palette. Build those directly with Tailwind theme tokens and one Tile module. Add daisyUI only if implementation proves that several needed interactive modules would otherwise be reimplemented.

### Should posts use MDX?

Use Markdown for the existing blog and new prose-only posts. Add `@astrojs/mdx` only when a real post needs an imported Astro module or interactive embed that Markdown cannot express cleanly. The Post Collection may accept MDX later without changing route or query callers.

### Should the blog copy the reference site's separate Typecho application?

No. The reference separates an Astro homepage from a PHP/Typecho blog and manually mirrors article data onto the homepage. This repository already owns Markdown content and requires no authoring dashboard. Keep one Astro codebase: the Post Collection drives article routes, lists, tags, homepage previews, RSS, sitemap, and comments without a second CMS or mirrored article list.

### Should the homepage copy the reference site's size-named modules?

Copy the system, not its file structure. Use one deep `Tile.astro` module whose small interface selects a finite size and tone. Its implementation owns responsive spans, proportions, radius, shadow, padding, hover/focus treatment, and link semantics. Do not create separate `card_2x1.astro`, `card_2x2.astro`, and similar shallow wrappers.

### Is dark mode part of this migration?

Yes, after owner review. The default visual direction now uses the warmer, darker option-3 palette, with an equally muted light theme and a persistent sun/moon toggle. Both themes require visual verification.

### Does the site need React, Vue, Svelte, or Astro hydration directives?

No. Astro `client:*` directives hydrate UI-framework components; they are not the mechanism for running plain TypeScript. Use ordinary Astro `<script>` modules for pronunciation, Translation Telephone, the existing WebGPU custom element, and Shangri-La. Do not add a framework renderer.

### Should the WebGPU portal be rewritten as an island?

No. `<navbar-portal>` is already a framework-free custom element. Move and harden it, then import it from an Astro component script. Preserve the shaders and rendering rather than changing abstractions.

### Do blog posts need both a slug and a separate comment ID?

No. A second manually maintained identity can drift. Give every post an explicit, immutable `slug` matching its current filename, and derive the giscus term as `post:${slug}`. The slug is the route identity, legacy redirect identity, and comment identity.

This is especially important for `quotes-I-like`: current Astro glob loaders can normalize generated IDs, while the existing URL contains an uppercase `I`. An explicit slug prevents an accidental case-sensitive URL break on GitHub Pages.

### Should tags, RSS, sitemap, and comments be built before content parity?

No. First produce static pages and prove that every source entry renders. Add discovery and distribution features only after content parity. They must not block basic page migration.

### Does “preserve content” mean preserve broken markup and runtime defects?

No. Preserve meaning, copy, links, media, and visual character. Correct invalid fragment markup, missing closing anchors, unsafe interpolation, stale routing machinery, and resource leaks. Record factual copy that needs the owner’s judgment instead of guessing.

### Is the deployment a root GitHub Pages site?

Yes. GitHub currently identifies the repository as `LuBolin/lubolin.github.io`; Pages reports `https://lubolin.github.io/`, workflow deployment from `main`, and GitHub Discussions is already enabled. Configure Astro with `site: 'https://lubolin.github.io/'` and no `base`.

## 3. Canonical vocabulary

Use these terms consistently during the migration:

- **Static page**: an HTML page emitted at build time and addressable without a URL fragment.
- **Post slug**: the explicit, immutable case-sensitive string used in a post URL and giscus term.
- **Experiment**: a browser-side interactive feature that is isolated from ordinary content pages.
- **Portal**: the circular WebGL shader entrance that links to Shangri-La, with a still-image fallback.
- **Shangri-La**: the dedicated Three.js island scene, not the Portal itself.
- **Post Collection**: the open-ended, schema-validated source of blog entries; no page or test assumes a fixed entry count.
- **Project Collection**: the open-ended, schema-validated source of project entries; listing and homepage views query it rather than duplicating records.
- **Tile**: the reusable homepage module that hides responsive grid spans and common visual/interaction behavior behind a finite size-and-tone interface.
- **Tile size**: a desktop grid proportion such as `1x1`, `2x1`, `2x2`, `4x1`, or `4x2`; it is not a separate module or a promise of fixed pixels at every viewport.
- **Parity**: every source entry and all existing meaning, links, media, and behavior are present; identical DOM and CSS are not required.
- **Cutover**: the commit/merge that replaces the deployed hash router with Astro output.

## 4. Verified current state

### Toolchain and deployment

- Vite 7 and strict TypeScript build the current SPA.
- `marked` renders Markdown in the browser.
- `three` powers Shangri-La.
- `.github/workflows/deploy.yml` deploys `dist/` to GitHub Pages.
- The workflow’s final “Purge CDN Cache” step sleeps and POSTs to the Pages builds API; it is not a cache purge and must be removed.
- `.nojekyll` is currently at the repository root. Astro only copies files from `public/`, so it must move to `public/.nojekyll` before the old root file is removed.
- The checked-out `node_modules` is not a trustworthy baseline: `npm run build` currently cannot resolve `marked` even though `marked` is in `package.json` and the lockfile. Baseline verification must start with `npm ci`.

### Runtime architecture

```text
index.html
  -> src/main.ts
     -> fetch /pages/navbar.html
     -> inspect location.hash
     -> fetch an HTML fragment into <main>
     -> initialize blog or Shangri-La imperatively
```

`404.html` and `404.ts` convert direct paths into hash routes. The current site therefore exposes both root hash URLs such as `/#/about` and compatibility paths such as `/post/games-vs-toys`.

### Existing content inventory

Static/personal content:

- home photo (`self.jpg`);
- About copy;
- five contact methods;
- three friend links;
- Bloin branding, pronunciation audio, Rickroll easter egg, and navbar quote;
- favicon and D-DIN typography.

Project and post inventories are dynamic. At migration time, enumerate them directly from `public/pages/projects.html` and `public/blog/posts/*.md`, preserve every entry, and record a machine-readable parity manifest or comparison. Do not copy a count or name list into application logic, acceptance criteria, or tests.

After migration, adding a valid Project Collection entry must automatically add it to `/projects/` and make it eligible for homepage selection. Adding a valid published Post Collection entry must automatically add its article route, blog listing, tag relationships, RSS item, sitemap entry, legacy direct-post redirect, and homepage eligibility without editing route code.

Experiments:

- Translation Telephone, a browser client for `api.mymemory.translated.net`;
- the shader Portal entrance into Shangri-La and its still-image fallback;
- Shangri-La, a Three.js scene using `island_hunyuan3d.glb` and a remote Draco decoder.

### Defects that affect migration scope

These are migration concerns because copying them unchanged would fail parity or safety:

- `watcher.js` uses CommonJS in an ESM package, references `blog/posts` instead of `public/blog/posts`, and calls undeclared `chokidar`.
- Blog index and article bodies are injected with `innerHTML`; Markdown is parsed at runtime.
- Translation Telephone interpolates third-party translated text into `innerHTML`, creating an injection boundary.
- Contact markup has unclosed links; several fragments contain full document wrappers or invalid `<br>` markup.
- External `target="_blank"` links do not consistently use `rel="noopener noreferrer"`.
- The Portal has no useful unsupported-WebGPU fallback and does not pause when hidden.
- Shangri-La creates a new sun mesh and timer every animation frame, and its listeners/animation have no cleanup path in the SPA.
- The Draco decoder URL is pinned to Three `0.160.0` while the project uses Three `0.181.2`.
- `quotes-I-like` is dated `2002/06/18` and still requires owner review. About was updated to Year 4 at the owner’s request.
- The displayed project title “Don't make eye contanct” is an unambiguous typo; correct it while keeping the same project/link.

## 5. Target architecture

```text
src/content/blog/*.md
        -> src/content.config.ts
        -> getCollection('blog')
        -> static blog, post, tag, homepage, and RSS output

src/content/projects/*
        -> project collection
        -> projects page and homepage previews

src/layouts/BaseLayout.astro
        -> shared head, navigation, footer, and global styles

src/pages/**/*.astro|ts
        -> static pages and endpoints

src/experiments/*
        -> browser-only modules imported only by their owning page/component

public/*
        -> stable media, model, shader/font assets as intentionally chosen
```

Astro pages render HTML at build time. Ordinary cards and navigation ship no JavaScript. Client JavaScript is limited to:

- the root legacy-hash redirect;
- pronunciation;
- Portal WebGPU rendering;
- Shangri-La;
- Translation Telephone; and
- giscus on post pages when configured.

## 6. Target file map

The exact split may change slightly when code is ported, but do not add abstractions without a second consumer.

```text
astro.config.mjs
package.json
tsconfig.json
public/
  .nojekyll
  robots.txt
  assets/                         # retain stable existing URLs
  scenes/navbar_portal/*.wgsl     # stable shader assets, or move with module if imports prove cleaner
src/
  components/
    Header.astro
    Footer.astro
    Tile.astro
    Portal.astro
    Pronunciation.astro
    Giscus.astro
  content/
    blog/*.md
    projects/*.yaml
  content.config.ts
  experiments/
    portal.ts
    shangrila.ts
    translation-telephone.ts
  layouts/
    BaseLayout.astro
    PostLayout.astro
  pages/
    index.astro
    about.astro
    projects/index.astro
    blog/index.astro
    blog/[slug].astro
    tags/[tag].astro
    post/[slug].astro              # collection-derived legacy direct-path redirects
    contact.astro
    others.astro
    translation-telephone.astro
    shangrila.astro
    rss.xml.ts
    404.astro
  styles/
    global.css
    post.css
```

Do not create a module for a one-off block merely to make this tree match the plan. A page-local section can stay in its page. `Tile.astro` earns its seam because every homepage tile shares its layout and interaction invariants.

## 7. Routes and compatibility contract

Primary routes:

```text
/                              home
/about/                        About
/projects/                     all projects
/blog/                         published post index
/blog/<exact-post-slug>/       post
/tags/<normalized-tag>/        published posts with tag
/contact/                      contact and friends
/others/                       experiments index
/translation-telephone/        Translation Telephone
/shangrila/                    Three.js scene
/rss.xml                       published-post RSS
/sitemap output                actual filename emitted by the chosen Astro integration
/404.html                      static custom 404
```

Set `trailingSlash: 'always'` unless production verification shows GitHub Pages requires a different choice. All internal links must follow the configured form consistently.

### Legacy root hashes

Add one small inline script to `/`. It must run before normal page interaction and use `location.replace()`:

```text
/#/home                         -> /
/#/about                        -> /about/
/#/projects                     -> /projects/
/#/blog                         -> /blog/
/#/post/<slug>                  -> /blog/<slug>/
/#/contact                      -> /contact/
/#/others                       -> /others/
/#/translation-telephone        -> /translation-telephone/
/#/shangrila                    -> /shangrila/
```

Preserve the query string. Decode and validate the post slug rather than concatenating an arbitrary fragment into a URL.

### Legacy direct post paths

The current 404 handler makes `/post/<slug>` usable. Generate one redirect page for every published Post Collection entry through `getStaticPaths()`:

```text
/post/<published-slug>/ -> /blog/<same-slug>/
```

Because GitHub Pages cannot emit HTTP redirects, each compatibility page should contain a canonical link, a visible fallback link, a noindex directive, and a minimal `location.replace()` script. Do not create a catch-all redirect for unknown slugs. New published posts receive this compatibility page automatically.

## 8. Content models

### Blog

Use current Astro build-time Content Collections in `src/content.config.ts` with `glob()` and a Zod schema.

Required frontmatter:

```yaml
---
title: On games and toys
description: Is Minecraft creative mode a toy? Is Rubik's Cube a game?
published: 2025-08-18
tags:
  - Game Design
draft: false
slug: games-vs-toys
---
```

Schema:

```text
title        non-empty string
description  non-empty string
published    coerced date
tags         string array, default []
draft        boolean, default false
slug         non-empty string matching [A-Za-z0-9]+(?:-[A-Za-z0-9]+)*
updated      optional coerced date; add only when real data exists
```

Migration rules:

- `abstract` becomes `description`.
- `date` becomes ISO `published` without changing the represented calendar date.
- bracket-style tags become YAML arrays.
- `slug` exactly matches the current filename without `.md`, including `quotes-I-like` casing.
- body prose remains unchanged except for syntax required to render existing HTML/media safely.
- drafts are excluded from production index, tag, RSS, sitemap, and `getStaticPaths()` output.
- assert at build time that slugs are unique.

Do not add speculative `cover`, `featured`, or manually duplicated `commentId` fields. Add them later only when content uses them.

### Tags

Current tags are ASCII. Normalize with a small local function: trim, lowercase, replace runs of spaces with `-`. Before generating pages, create a map from normalized slug to display labels and fail the build if two distinct labels collide. Do not add a slugification package for the current data.

### Projects

Define a second build-time Astro Content Collection using one YAML file per project. This makes a project an independently validated content entry and prevents the projects page, homepage, and tests from depending on a fixed inventory.

Example:

```yaml
title: Dan - 丹
url: https://bolin8621.itch.io/dan
image: /assets/images/projects/dan.png
imageAlt: Dan
tags:
  - Game
  - Godot
description:
  - Single player top down shooter rogue-lite.
context: Made for NM4260, NUS.
featuredOrder: 1
```

Schema:

```text
title          non-empty string
url            external URL or root-relative site path
image          root-relative asset path
imageAlt       non-empty string
tags           string array, default []
description    non-empty string array
context        optional string
result         optional string
featuredOrder  optional non-negative integer
```

The collection entry ID is the stable project identity. Assert unique IDs and `featuredOrder` values. The projects page renders every entry; homepage previews select entries with `featuredOrder` and sort ascending in a horizontal overflow row. Adding or curating projects requires changing only project metadata, not duplicating content. Project destinations may be external URLs or internal routes such as blog posts.

Preserve all current titles, URLs, images, tags, descriptions, course/jam context, and results. Render structured text as text, not injected HTML.

## 9. Design and page requirements

### Visual identity

Install Tailwind CSS 4 through `@tailwindcss/vite`, import it once in the global stylesheet, and expose the existing colors as Tailwind theme tokens:

```css
@import "tailwindcss";

@theme {
  --color-primary: #43766c;    /* recognizable green */
  --color-background: #f8fae5; /* warm cream */
  --color-surface: #f5f5f5;
  --color-text: #76453b;       /* brown */
  --color-accent: #b19470;     /* tan */
  --font-sans: "D-DIN", Verdana, sans-serif;
}
```

Add derived hover/focus/border/muted tokens only when used. Preserve D-DIN with system fallbacks. Do not download or redistribute font files without checking licensing; retaining the current remote font source is acceptable for parity, with self-hosting a separate decision.

Measure font transfer and rendering during browser verification. If the remote font is a material bottleneck and its license permits redistribution, prefer self-hosted WOFF2. Do not add `fontmin` or subset only against today's text: posts and projects are open-ended, so a static character subset can silently omit glyphs added later. Any future subset step must scan all collection content on every build and preserve dependable fallbacks.

Use Tailwind utilities for the Bento CSS Grid, spacing, responsive breakpoints, and ordinary component states. Use width-based breakpoints, not device orientation. Keep article typography and experiment-specific canvas/animation rules in explicit CSS. Preserve visible focus states and honor `prefers-reduced-motion`.

Do not copy the reference site's daisyUI dependency, dark theme, hard-coded `rem` widths, or custom breakpoint set merely because they exist. Start with Tailwind's default breakpoints and a fluid max-width grid. Add a custom breakpoint only when screenshots demonstrate a real layout failure between the defaults.

### Tile system

The Bento look depends on consistent modules more than elaborate styling. The homepage uses a four-unit desktop grid with a shared gap and a finite set of tile proportions. On narrow screens, tiles default to full width in DOM reading order; wider breakpoints map each size to explicit column/row spans.

`Tile.astro` is the seam. Its interface should remain approximately:

```ts
type TileSize = '1x1' | '2x1' | '2x2' | '4x1' | '4x2';
type TileTone = 'surface' | 'primary' | 'accent';

type Props = {
  size: TileSize;
  tone?: TileTone;
  href?: string;
};
```

The implementation owns:

- a static lookup from each size/tone to complete Tailwind class strings;
- responsive column/row spans and minimum proportions;
- shared radius, border, shadow, padding, overflow, and transition rules;
- correct `<a>` versus non-link container semantics;
- hover, focus-visible, and reduced-motion behavior; and
- a content slot with no knowledge of projects, posts, or experiments.

Keep Tailwind class names literal in the lookup; do not build names such as `` `col-span-${n}` `` dynamically because Tailwind may not generate them. Callers choose a supported variant and provide content—they must not repeat span, radius, shadow, or link-state classes.

Visual/media tiles can enforce an aspect ratio. Text-heavy tiles use the same grid spans but must grow rather than clip or shrink important content. Long collections belong on dedicated pages; homepage tiles show a bounded preview and a clear link.

Responsive behavior may change presentation rather than merely shrink it—for example, a bounded post/project preview may use horizontal scroll snapping on a narrow screen and a grid above a breakpoint—but only if browser testing shows this is clearer than normal stacking. DOM order must remain logical in either presentation.

### Shared layout and navigation

`BaseLayout.astro` owns:

- language, charset, viewport, title, description, canonical, favicon, Open Graph basics;
- header navigation using ordinary anchors;
- a skip link and semantic `<main>`;
- footer with the existing quote if it still fits; and
- global styles.

Recommended navigation: Bloin, Projects, Blog, About, with Contact retained if space permits. Use `aria-current="page"` for the active route. Do not reproduce hash navigation or runtime HTML fetching.

### Homepage

The homepage is an overview, not the only page:

1. Hero: `self.jpg`, Bloin, concise existing-source introduction, pronunciation.
2. About preview linking to `/about/`.
3. Projects selected and ordered by Project Collection metadata.
4. A small configurable latest-post preview queried from the Post Collection.
5. Portal tile linking to `/shangrila/` in both WebGPU and fallback states.
6. Lab tile linking to `/others/`.
7. Contact/social tile with immediately usable links.

Do not invent biography, skills, or claims not supported by current content.

The page composes content-specific markup inside `Tile.astro`; it does not duplicate the tile shell classes. Create a specialized module such as `ProjectTile.astro` only after the same content shape is used in more than one caller and the deletion test shows real layout/semantic complexity would otherwise spread.

### Dedicated pages

- About preserves current copy and flags the education year for review.
- Projects renders every valid Project Collection entry.
- Blog is a readable list ordered by `published` descending.
- Post pages use a calm readable column and support the Markdown constructs already present, including raw image markup and the Piecepack PDF link.
- Contact preserves all five contact methods and three friends.
- Others lists Translation Telephone and Shangri-La/Portal where appropriate.
- 404 provides useful navigation and does not recreate the SPA.

External new-tab links require `rel="noopener noreferrer"`. Mail links do not need a new tab.

## 10. Interactive feature contracts

### Pronunciation

Preserve `Bloin.mp3` and the every-third-click Rickroll behavior unless the owner explicitly retires the joke. Use a real `<button>` with an accessible name and call `audio.play()` from the user gesture. Handle a rejected play promise without breaking the page.

### Portal

Keep the custom element and WGSL output. During the move:

- guard custom-element registration;
- show a styled fallback before initialization and when `navigator.gpu`, adapter, device, or context setup fails;
- keep the entire tile as a normal link to `/shangrila/`;
- size the canvas at device pixel ratio with integer dimensions;
- recreate/destroy the multisample texture safely on resize;
- pause frames while offscreen, while `document.hidden`, and for reduced motion;
- cancel frames, disconnect observers, destroy owned GPU resources, and remove listeners on disconnect.

Do not load Three.js in the Portal tile.

### Shangri-La

Load the Three.js module only on `/shangrila/`. A plain Astro `<script>` import is sufficient.

Parity requirements:

- current GLB model, orbit-like drag, zoom, sky/day cycle, lighting, and full-page presentation work;
- resize updates renderer and camera;
- the route provides a visible way back to the site;
- failure to load WebGL/model/decoder produces a readable fallback.

Required defect fixes while porting:

- reuse one sun mesh instead of allocating a mesh plus timer every frame;
- match the Draco decoder to the installed Three version or ship compatible decoder assets locally;
- set an intentional capped pixel ratio;
- keep listeners and animation scoped to the page and dispose renderer, geometries/materials owned by the scene, loaders where applicable, and listeners on teardown.

Do not redesign the model, controls, or day cycle during the framework migration.

### Translation Telephone

Preserve the current language options, loop-count bounds, alternating translations, progress output, clear action, and MyMemory API behavior.

Move inline handlers into a page-owned module. Treat every API string as untrusted: construct result nodes and assign translated text with `textContent`; never interpolate it into `innerHTML`. Validate non-empty input, distinct languages, loop count, response status, and error shapes. Disable duplicate submissions while a run is active and use an `AbortController` so a new run or page exit can cancel outstanding requests.

Document that this experiment depends on a third-party public API and its quota/availability.

### giscus

GitHub Discussions is already enabled. Remaining manual setup is installing/authorizing the giscus app, choosing a category, and obtaining repository/category IDs.

Render giscus only when both public configuration values are present. Configure:

```text
repo     = LuBolin/lubolin.github.io
mapping  = specific
term     = post:<slug>
```

The page must still build and remain usable without giscus configuration. Load the script only on an individual post page. Document that changing a post slug after comments exist also changes its discussion identity.

## 11. SEO, feeds, and assets

- Set Astro `site` to the verified canonical origin.
- Each page supplies title, description, canonical URL, and basic Open Graph data through the shared layout.
- Generate RSS from published posts only.
- Use the official sitemap integration after primary routes exist; validate the actual emitted sitemap filename instead of assuming it.
- Add `public/robots.txt` referencing the emitted sitemap URL.
- Build `src/pages/404.astro` to `404.html`.
- Move `.nojekyll` to `public/.nojekyll` so it appears in `dist/`.
- Retain stable `/assets/...` URLs, especially the Piecepack images/PDF and project images.
- Remove unused assets only after a reference scan and visual parity review. Do not delete the FBX model merely because the current scene uses the GLB; flag it as a candidate first.

## 12. Dependency policy

Required direct dependencies should be limited to what is actually used:

- Astro;
- Tailwind CSS 4 and `@tailwindcss/vite`;
- Three.js;
- official Astro check/RSS/sitemap packages needed by implemented scripts/features; and
- existing TypeScript/WebGPU/Three types required by the source.

Remove direct Vite, `marked`, `@types/marked`, and the post watcher when no source imports or script uses them. Do not add a UI framework, legacy Astro Tailwind integration, daisyUI, MDX integration, masonry package, icon font/CDN, separate YAML parser, font-subsetting tool, or slug package until a requirement in this guide proves it necessary.

Use simple inline SVGs or text labels for the small icon set. Ask before adding any other production dependency.

## 13. Implementation sequence

Work on a `codex/refactor-astro` branch (or another user-approved branch). Keep commits small enough to review and keep the branch buildable after each phase where practical.

### Phase 0 — Clean baseline and evidence capture

1. Run `npm ci`, then `npm run build`; record the real clean-install result.
2. Run the current development site and capture the baseline routes using the visual-verification viewport matrix in §14. Store the screenshots with route, viewport, state, and `baseline` in each filename.
3. Generate the baseline project/post inventory from the source files, then record contact/friend links, asset URLs, hash routes, `/post/<slug>` behavior, pronunciation easter egg, Portal states, Translation Telephone flow, and Shangri-La controls.
4. Record console/network failures separately from intended behavior.
5. Do not change production files in this phase.

### Phase 1 — Astro shell and deployment-safe foundation

1. Install Astro, Tailwind CSS 4, `@tailwindcss/vite`, and check dependencies in place; update scripts.
2. Add `astro.config.mjs` with the Tailwind Vite plugin, verified `site`, static output, and consistent trailing slashes.
3. Extend an Astro strict TypeScript config while retaining WebGPU types.
4. Add `BaseLayout.astro`, the CSS-first Tailwind theme/global stylesheet, header, footer, and a minimal `/`.
5. Move `.nojekyll` to `public/.nojekyll`.
6. Adapt the workflow, remove the fake purge step, pin the Node major used locally/CI, and keep Pages permissions/environment.
7. Make `npm run check` and `npm run build` pass before migrating content.

Do not delete the Vite implementation until its replacement routes pass parity checks; Git history is not a substitute for side-by-side verification during this phase.

### Phase 2 — Static content parity

1. Define the Project Collection schema and migrate every project into its own validated entry.
2. Migrate About, Projects, Contact, and Others to semantic Astro pages.
3. Correct invalid markup and the confirmed project-title typo; do not rewrite personal prose.
4. Preserve asset URLs and test every external/internal link.
5. Build the dedicated pages before the Bento homepage so homepage cards can consume real sources.

### Phase 3 — Blog parity

1. Move every existing Markdown post to `src/content/blog/`.
2. Normalize frontmatter and add exact explicit slugs.
3. Add the content collection and schema.
4. Generate the published index and post routes from the collection.
5. Verify each body, embedded image, PDF, slug casing, metadata, and date order.
6. Only after parity, add tag routes, RSS, and latest-post homepage query.

### Phase 4 — Experiments

Migrate one feature at a time in this order:

1. pronunciation;
2. Translation Telephone, including safe DOM rendering;
3. Portal custom element plus fallback/lifecycle handling;
4. Shangri-La plus the per-frame allocation and decoder corrections.

Each module belongs only to the page/component that needs it. Confirm normal pages do not download Three.js, the GLB, WGSL, Translation Telephone code, or giscus.

### Phase 5 — Bento homepage

1. Implement `Tile.astro` with the finite size/tone interface and literal Tailwind class maps.
2. Compose the homepage from Tile instances and the already migrated project/post collections.
3. Verify that callers do not repeat tile shell, span, radius, shadow, or link-state classes.
4. Test alignment, content overflow, keyboard order, stacking, and any deliberate scroll-snap presentation using the full visual-verification matrix in §14.
5. Preserve the green/cream identity and personal details before adding polish.

### Phase 6 — Compatibility, comments, and distribution

1. Add root hash redirects and collection-derived `/post/<slug>` redirect pages.
2. Add optional giscus rendering and documentation.
3. Add sitemap, robots, canonical/Open Graph metadata, RSS, and 404.
4. Update README with architecture, adding posts/projects, immutable slugs, experiments, commands, deployment, and giscus setup.

### Phase 7 — Remove replaced code and cut over

After parity and route checks, remove:

```text
index.html
404.html
404.ts
vite.config.ts
vite-env.d.ts
watcher.js
src/main.ts
src/blog.ts
src/navbar.ts
old HTML fragments and CSS that have no remaining consumer
public/blog/posts.json
old package dependencies/scripts with no consumer
```

Keep assets and old styles until a reference scan proves they are unused. Review the deletion list in the diff; do not bulk-delete `public/`.

## 14. Verification

### Commands

The final `package.json` must expose:

```text
npm run dev
npm run check      # astro check
npm run build      # check, then astro build
npm run preview
```

Run clean-install verification before cutover:

```text
npm ci
npm run check
npm run build
npm run preview
```

### Output assertions

Inspect `dist/` and assert:

- `.nojekyll`, `404.html`, `robots.txt`, RSS, sitemap, and favicon exist;
- each primary route has its own HTML containing its real content;
- the set of emitted post pages exactly matches the set of published Post Collection entries;
- the projects page contains every valid Project Collection entry;
- the exact `quotes-I-like` path exists;
- all known legacy direct-post pages exist;
- no HTML references `/src/main.ts`, `/blog/posts.json`, old fragments, or runtime `marked`;
- normal pages do not include Three.js/model/giscus bundles; and
- internal asset references resolve.

Use a small build-output/link-check script only if existing commands cannot make these assertions clearly. Prefer Node standard library; do not add a test framework for static file checks.

### Visual verification is mandatory

Passing type checks and producing screenshots are not sufficient by themselves. The implementing agent must open the production preview in a real browser, capture the required screenshots, inspect the rendered images, and record concrete observations. A screenshot that was never visually examined is not verification.

Final visual verification must use `npm run preview` against the built `dist/`, not only the Astro development server. Baseline captures use the current site before migration. Production Pages receives a smaller final smoke pass after deployment.

Store evidence outside production assets, for example:

```text
artifacts/visual-verification/
  baseline/home-375x812-default.png
  candidate/home-375x812-default.png
  candidate/home-1440x900-keyboard-focus.png
  candidate/shangrila-1280x720-loaded.png
  observations.md
```

Do not commit the evidence directory unless the user requests it; provide clickable paths in the final report. Screenshot filenames must identify build (`baseline` or `candidate`), route, CSS viewport, and state.

### Viewport and aspect-ratio matrix

Use exact CSS viewport dimensions. The homepage must be captured and manually inspected at every required viewport:

| Viewport | Approximate ratio | Purpose |
|---|---:|---|
| 320×568 | 9:16 | minimum narrow phone / overflow pressure |
| 375×812 | tall phone | primary mobile layout |
| 430×932 | tall large phone | wider mobile wrapping |
| 768×1024 | 3:4 portrait | portrait tablet |
| 1024×768 | 4:3 landscape | landscape tablet / short height |
| 1280×720 | 16:9 | short desktop/laptop viewport |
| 1440×900 | 16:10 | primary desktop layout |
| 1920×1080 | 16:9 | large desktop scaling |
| 2560×1080 | 21:9 | ultrawide max-width and empty-space behavior |

These are layout probes, not device emulation claims. Keep browser zoom at 100% for the matrix, then perform one additional 200% text/zoom inspection on the homepage, navigation, blog index, and a representative post to catch clipping and reflow problems.

### Route coverage

Capture and inspect:

- the homepage at the full matrix;
- About, Projects, Blog, Contact, Others, and 404 at 375×812, 768×1024, 1280×720, 1440×900, and 2560×1080;
- one short post, one long post, and every distinct post-content shape present at build time (for example images/PDF links, tables, blockquotes, lists, and code) at mobile and desktop widths;
- project listing states containing the longest title, longest description, largest tag set, missing optional metadata, and each supported image aspect behavior;
- Translation Telephone at phone portrait, tablet portrait, short landscape, and desktop in initial, loading, success, validation-error, and API-error states;
- Portal in WebGPU-rendered, unsupported/forced-fallback, reduced-motion, offscreen-resume, and keyboard-focus states;
- Shangri-La at phone portrait, short landscape, desktop, and ultrawide in loading, loaded, model-failure, and exit-focus states;
- giscus configured and unconfigured post layouts at mobile and desktop; and
- representative legacy hash and collection-derived direct-post redirects, verifying both the transition and destination rendering.

Select content examples from current collection data at verification time; do not encode filenames or collection counts in the test. When one entry covers several edge characteristics, one screenshot may satisfy them together. Record which entry was selected and why.

### Required visual inspection

For each applicable screenshot/state, inspect and record:

- no horizontal overflow, clipped text, unintended internal scrollbar, or content hidden behind fixed/sticky UI;
- tile edges, gaps, proportions, radii, and shadows align as a coherent system;
- the Bento DOM reading order remains logical when its visual spans change;
- text remains readable without awkward orphaned headings, crushed columns, or overlong measures;
- images preserve intended crop/focal point, do not stretch, and have useful fallbacks/alt text;
- navigation, skip link, focus rings, active state, buttons, and full-tile links are visually apparent;
- green/cream/tan/brown tokens remain consistent and foreground/background contrast is usable;
- page max-width behaves deliberately on ultrawide screens instead of stretching cards or prose indefinitely;
- short-height landscape viewports do not lose navigation or critical actions below fixed layers;
- loading, empty, error, unsupported, reduced-motion, and unconfigured states look intentional;
- fonts finish loading without destructive layout shift and fallback glyphs are acceptable; and
- experiment canvases match their containers after resize/orientation changes.

Use browser measurements such as `scrollWidth <= clientWidth` and console/network logs as supporting evidence, but never substitute them for looking at the screenshots.

### Baseline comparison and iteration rule

Place baseline and candidate captures side by side for preserved pages/features. Pixel equality is not expected because the homepage is being redesigned. Compare content presence, visual identity, focal images, typography character, and interaction affordances.

If inspection finds a defect, fix it, rebuild, recapture the affected viewport plus its nearest breakpoint neighbors, and inspect again. Do not keep a stale screenshot as proof after its code changes. A visual verification pass is complete only when every identified defect is fixed or explicitly documented as an accepted limitation.

Do not claim a viewport, WebGPU state, failure state, or production Pages state was verified if the environment could not actually render and inspect it.

### Production verification

Deploy the branch through a safe preview mechanism if available; otherwise merge only after local production preview passes. After the Pages workflow completes, check canonical URLs, asset loading, direct navigation/refresh, 404 behavior, RSS/sitemap, and one legacy URL on `https://lubolin.github.io/`.

Capture and inspect production screenshots of the homepage at 375×812, 1280×720, 1440×900, and 2560×1080, plus one representative content page and each interactive experiment at an applicable viewport. These are smoke checks for deployment-only differences such as paths, fonts, headers, and asset loading; they do not replace the complete local production-preview matrix.

## 15. Acceptance checklist

Architecture:

- [ ] Astro emits a static site; no adapter/server runtime exists.
- [ ] Normal navigation uses real links and needs no client router.
- [ ] Astro and Tailwind CSS 4 are configured through `@tailwindcss/vite`; no legacy Tailwind integration exists.
- [ ] No React/Vue/Svelte renderer is present without a separately approved reason.
- [ ] No Typecho, second blog application, or manually mirrored homepage article list exists.
- [ ] No daisyUI, MDX, dark-mode system, or font-subsetting tool exists unless separately justified by implemented content.
- [ ] One Tile module owns the supported Bento sizes, tones, responsive spans, shell styling, and link semantics.
- [ ] Homepage callers do not reconstruct the Tile implementation with ad hoc utility strings.
- [ ] Old router, runtime Markdown, watcher, and generated post JSON are removed.
- [ ] Clean `npm ci`, check, and build pass.

Content:

- [ ] Every baseline project is represented in the Project Collection with its title, description, tags, image, URL, context, and result.
- [ ] Every baseline post body and exact existing slug is represented in the Post Collection.
- [ ] Adding a valid project entry requires no projects-page code change.
- [ ] Adding a valid published post requires no blog, route, tag, RSS, sitemap, redirect, or homepage-query code change.
- [ ] About, five contact links, three friends, Others, photo, favicon, quote, and audio survive.
- [ ] Education year and `quotes-I-like` date are reported for owner review, not guessed.

Routes and discovery:

- [ ] All primary static routes, tags, RSS, sitemap, robots, and 404 work.
- [ ] All nine known root hash forms redirect correctly.
- [ ] Every published Post Collection entry has a working `/post/<slug>` compatibility path.
- [ ] Canonical and Open Graph metadata use the verified root origin.

Experiments and safety:

- [ ] Pronunciation and every-third-click easter egg work from an accessible button.
- [ ] Translation Telephone preserves behavior and never injects API text as HTML.
- [ ] Portal renders or shows a clickable fallback and stops unnecessary animation.
- [ ] Shangri-La preserves behavior without allocating a sun mesh/timer every frame.
- [ ] Third-party/API/model failures have visible fallbacks.
- [ ] New-tab links use safe relationship attributes.

Visual evidence:

- [ ] Baseline and candidate screenshot sets use traceable route/viewport/state filenames.
- [ ] The homepage was captured and personally inspected at every required resolution and aspect ratio.
- [ ] Dedicated pages, content edge cases, interactive states, error/fallback states, and 200% zoom were captured and inspected as specified.
- [ ] Candidate screenshots came from a fresh production build served by `npm run preview`.
- [ ] Baseline and candidate images were compared side by side for preserved content and identity.
- [ ] Every visual defect found during inspection was fixed and recaptured, or recorded as an accepted limitation.
- [ ] The final report links the screenshot evidence and names the entry chosen for each data-derived edge case.
- [ ] No visual state or viewport is reported as verified unless it was actually rendered and examined.

Deployment:

- [ ] `public/.nojekyll` appears in `dist/`.
- [ ] GitHub Actions deploys `dist/` with pinned Node and no fake purge step.
- [ ] Production direct loads and refreshes work at `https://lubolin.github.io/`.
- [ ] GitHub Pages is not cut over until parity, output, browser, and compatibility checks pass.

## 16. Required final migration report

When implementation is complete, report only verified facts:

1. old versus new architecture;
2. baseline-to-collection parity results for posts and projects, generated from the source inventories;
3. homepage structure and shared data sources;
4. legacy hash/direct-post mapping results;
5. pronunciation, Portal, Shangri-La, and Translation Telephone status;
6. giscus configuration status and genuine manual steps;
7. content items requiring owner review;
8. actual `npm ci`, check, build, output, browser, and production results;
9. clickable screenshot-evidence paths, inspected viewport/state coverage, selected data edge cases, observations, and recapture history; and
10. any remaining gaps that prevent declaring the migration complete.

## 17. Version-sensitive implementation references

Recheck these official sources immediately before implementation because Astro conventions can change:

- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro components and client scripts: https://docs.astro.build/en/basics/astro-components/
- Astro styling and Tailwind guidance: https://docs.astro.build/en/guides/styling/
- Astro GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Astro pages and custom 404: https://docs.astro.build/en/basics/astro-pages/
- giscus configuration: https://giscus.app/
