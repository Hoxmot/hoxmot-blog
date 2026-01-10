import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../../../consts';
import type { APIContext } from 'astro';

export async function getStaticPaths() {
  const categories = ['software', 'games', 'tech'];
  return categories.map((category) => ({
    params: { category },
  }));
}

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('site is not defined in astro.config.mjs');
  }

  const category = context.params.category;
  const posts = await getCollection('blog');
  const filteredPosts = posts.filter((post) => post.data.category === category);

  return rss({
    title: `${category?.charAt(0).toUpperCase() + category!.slice(1)} - ${SITE_TITLE}`,
    description: `Latest ${category} articles from ${SITE_TITLE}`,
    site: context.site,
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
