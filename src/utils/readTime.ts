const WORDS_PER_MINUTE = 200;

/**
 * Calculates the estimated reading time for a given text.
 * @param content The raw text content of the article
 * @returns formatted string like "5 min read"
 */
export const getReadingTime = (content: string): string => {
  if (!content) return '1 min read';

  // Strip HTML tags if any (basic cleanup)
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
  const numberOfWords = clean.split(/\s/g).length;
  const minutes = Math.ceil(numberOfWords / WORDS_PER_MINUTE);

  return `${minutes} min read`;
};
