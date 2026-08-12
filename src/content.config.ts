import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slug = z.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    published: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    slug,
    updated: z.coerce.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    url: z.union([z.url(), z.string().startsWith('/')]),
    image: image(),
    imageAlt: z.string().min(1),
    tags: z.array(z.string()).default([]),
    description: z.array(z.string().min(1)).min(1),
    context: z.string().optional(),
    result: z.string().optional(),
  }),
});

export const collections = { blog, projects };
