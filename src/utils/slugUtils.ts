/**
 * Removes the file extension (e.g., .md, .mdx) from a content collection ID
 * to create a clean URL slug.
 * * @param id - The content collection entry ID (e.g. "software/intro.md")
 * @returns The clean slug (e.g. "software/intro")
 */
export const cleanSlug = (id: string): string =>
  // Regex matches the last dot and subsequent characters at the end of the string
  id.replace(/\.[^/.]+$/, '');
