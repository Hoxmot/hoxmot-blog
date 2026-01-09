import { describe, it, expect } from 'vitest';
import { SOCIAL_LINKS, NAV_LINKS, SITE_TITLE } from '../consts';

describe('Configuration Data', () => {
  it('should have the correct site title', () => {
    expect(SITE_TITLE).toBe('Hoxmot Blog');
  });

  it('should have valid social links', () => {
    expect(SOCIAL_LINKS.twitter).toContain('twitter.com');
    expect(SOCIAL_LINKS.discord).toContain('discord');
    expect(SOCIAL_LINKS.bluesky).toContain('bsky');
    expect(SOCIAL_LINKS.mastodon).toContain('mastodon');
  });

  it('should have the correct navigation structure', () => {
    expect(NAV_LINKS).toHaveLength(4);
    expect(NAV_LINKS[0].text).toBe('Software');
    expect(NAV_LINKS[1].text).toBe('Games');
    expect(NAV_LINKS[2].text).toBe('Tech');
    expect(NAV_LINKS[3].text).toBe('About');
  });
});
