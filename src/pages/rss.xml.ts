import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { assertUniqueContent, publishedPosts } from '../lib/content';

export async function GET(context: { site: URL }) {
  const allPosts = await getCollection('blog');
  assertUniqueContent(allPosts);
  return rss({
    title: "Bloin's blog",
    description: 'Notes about game design, programming, and other ideas.',
    site: context.site,
    items: publishedPosts(allPosts).map(({ data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.published,
      link: `/blog/${data.slug}/`,
      categories: data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
