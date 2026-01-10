import { describe, it, expect, vi } from 'vitest';
import { z } from 'zod';

// Mock astro:content so we can import the config file without errors
// This replaces the virtual module with a version that uses standard Zod
vi.mock('astro:content', () => ({
  defineCollection: (config: unknown) => config,
  z: z,
}));

// Import the ACTUAL schema from the config
// This import will now work because of the mock above
import { blogSchema } from '../content/config';

describe('Content Schema Validation', () => {
  it('accepts a valid blog post object', () => {
    const validPost = {
      title: 'Test Post',
      description: 'A test description',
      pubDate: '2025-01-01',
      category: 'software',
    };
    const result = blogSchema.safeParse(validPost);
    expect(result.success).toBe(true);
  });

  it('rejects an invalid category', () => {
    const invalidPost = {
      title: 'Bad Category Post',
      description: 'This should fail',
      pubDate: '2025-01-01',
      category: 'cooking', // Not in enum
    };
    const result = blogSchema.safeParse(invalidPost);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('Invalid enum value');
    }
  });

  it('coerces string dates to Date objects', () => {
    const post = {
      title: 'Date Test',
      description: 'Checking date coercion',
      pubDate: '2025-05-20', // String input
      category: 'tech',
    };
    const result = blogSchema.parse(post);
    expect(result.pubDate).toBeInstanceOf(Date);
    expect(result.pubDate.getFullYear()).toBe(2025);
  });
});
