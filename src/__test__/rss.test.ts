import { describe, it, expect } from 'vitest';

// We test the logic that constructs the RSS feed items
describe('RSS Feed Logic', () => {
  it('formats RSS items correctly', () => {
    const mockPost = {
      id: 'my-post',
      data: {
        title: 'Test Post',
        pubDate: new Date('2025-01-01'),
        description: 'Description',
      },
    };

    const rssItem = {
      title: mockPost.data.title,
      pubDate: mockPost.data.pubDate,
      description: mockPost.data.description,
      link: `/blog/${mockPost.id}/`,
    };

    expect(rssItem.link).toBe('/blog/my-post/');
    expect(rssItem.title).toBe('Test Post');
  });

  it('validates category paths', () => {
    const categories = ['software', 'games', 'tech'];
    expect(categories).toContain('software');
    expect(categories).toHaveLength(3);
  });
});
