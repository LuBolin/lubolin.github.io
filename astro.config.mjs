import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { markdownLayoutDirectives } from './src/lib/markdown-layouts.js';

export default defineConfig({
  site: 'https://lubolin.github.io',
  trailingSlash: 'always',
  markdown: {
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [markdownLayoutDirectives],
    }),
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/post/') && !page.includes('/translation-telephone/') && !page.endsWith('/404.html'),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
