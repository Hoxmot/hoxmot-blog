import { describe, it, expect } from 'vitest';
import { cleanSlug } from '../utils/slugUtils';

describe('Slug Utilities', () => {
  it('removes .md extension', () => {
    expect(cleanSlug('software/intro.md')).toBe('software/intro');
  });

  it('removes .mdx extension', () => {
    expect(cleanSlug('games/review.mdx')).toBe('games/review');
  });

  it('does nothing if no extension exists', () => {
    expect(cleanSlug('tech/article')).toBe('tech/article');
  });

  it('preserves dots inside filenames if they are not extensions', () => {
    // Edge case: "version-1.2.0.md" -> "version-1.2.0"
    expect(cleanSlug('tech/version-1.2.0.md')).toBe('tech/version-1.2.0');
  });
});
