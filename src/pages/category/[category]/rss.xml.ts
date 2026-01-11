import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, CATEGORIES } from '../../../consts';
import type { APIContext } from 'astro';
import { cleanSlug } from '../../../utils/slugUtils';

export const getStaticPaths = async () =>
  CATEGORIES.map((category) => ({
    params: { category: category.slug },
  }));

export const GET = async (context: APIContext) => {
  if (!context.site) {
    throw new Error('site is not defined in astro.config.mjs');
  }

  const category = context.params.category;
  const posts = await getCollection('blog');
  const filteredPosts = posts.filter((post) => post.data.category === category);
  const categoryTitle = CATEGORIES.find((c) => c.slug === category)?.title || category;

  return rss({
    title: `${categoryTitle} - ${SITE_TITLE}`,
    description: `Latest ${category} articles from ${SITE_TITLE}`,
    site: context.site,
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${cleanSlug(post.id)}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
