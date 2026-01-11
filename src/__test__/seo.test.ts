import { describe, it, expect } from 'vitest';
import { generateTitle } from '../utils/seoUtils';
import { SITE_TITLE } from '../consts';

describe('SEO Utilities', () => {
  it('returns the site title as-is if the page title matches', () => {
    const result = generateTitle(SITE_TITLE);
    expect(result).toBe(SITE_TITLE);
  });

  it('appends the site title to a page title', () => {
    const pageTitle = 'My Awesome Article';
    const result = generateTitle(pageTitle);
    expect(result).toBe(`${pageTitle} | ${SITE_TITLE}`);
  });
});
