import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const publishedPosts = (posts: Post[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

export const normalizeTag = (tag: string) => tag.trim().toLowerCase().replace(/\s+/g, '-');

export function assertUniqueContent(posts: Post[]) {
  const slugs = new Set<string>();
  const tags = new Map<string, string>();

  for (const post of posts) {
    if (slugs.has(post.data.slug)) throw new Error(`Duplicate post slug: ${post.data.slug}`);
    slugs.add(post.data.slug);

    for (const label of post.data.tags) {
      const normalized = normalizeTag(label);
      const existing = tags.get(normalized);
      if (existing && existing !== label) {
        throw new Error(`Tag collision: "${existing}" and "${label}" both map to "${normalized}"`);
      }
      tags.set(normalized, label);
    }
  }
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
