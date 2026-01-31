import { defineCollection, z } from 'astro:content';
import { ALLOWED_TAGS, CATEGORIES } from '../consts';

// Extract slugs from the centralized configuration for validation
// Casting as [string, ...string[]] to satisfy Zod's non-empty array requirement
const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

// Export schema for testing
export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  category: z.enum(categorySlugs),
  tags: z.array(z.enum(ALLOWED_TAGS)).optional(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

// New collection for static pages (About, etc.)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, pages };
