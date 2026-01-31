import { defineCollection, z } from 'astro:content';

// Export schema for testing
export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  category: z.enum(['software', 'games', 'tech']),
  tags: z.array(z.string()).optional(),
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
