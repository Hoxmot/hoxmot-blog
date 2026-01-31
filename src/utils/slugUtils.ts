/**
 * Removes the file extension (e.g., .md, .mdx) from a content collection ID
 * to create a clean URL slug.
 * * @param id - The content collection entry ID (e.g. "software/intro.md")
 * @returns The clean slug (e.g. "software/intro")
 */
export const cleanSlug = (id: string): string => id.replace(/\.[^/.]+$/, '');

/**
 * Converts a string into a URL-friendly slug.
 * e.g., "Software Development" -> "software-development"
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
};
