import { describe, it, expect, beforeEach } from 'vitest';
import { SOCIAL_LINKS, NAV_LINKS, SITE_TITLE } from '../consts';

describe('Configuration Data', () => {
  it('should have the correct site title', () => {
    expect(SITE_TITLE).toBe('Hoxmot Blog');
  });

  describe('should have valid social links', () => {
    let skipCurrentTest: () => never;

    beforeEach(({ skip }) => {
      skipCurrentTest = skip;
    });

    it.each([
      { link: SOCIAL_LINKS.twitter, domain: 'twitter.com' },
      { link: SOCIAL_LINKS.github, domain: 'github.com' },
      { link: SOCIAL_LINKS.discord, domain: 'discord' },
      { link: SOCIAL_LINKS.bluesky, domain: 'bsky' },
      { link: SOCIAL_LINKS.mastodon, domain: 'mastodon' },
      { link: SOCIAL_LINKS.linkedin, domain: 'linkedin' },
      { link: SOCIAL_LINKS.tiktok, domain: 'tiktok.com' },
      { link: SOCIAL_LINKS.instagram, domain: 'instagram.com' },
    ])('should have valid social link for $domain', ({ link, domain }) => {
      if (!link) {
        skipCurrentTest();
      }
      expect(link).toContain(domain);
    });
  });

  it('should have the correct navigation structure', () => {
    expect(NAV_LINKS).toHaveLength(4);
    expect(NAV_LINKS[0].text).toBe('Software');
    expect(NAV_LINKS[1].text).toBe('Games');
    expect(NAV_LINKS[2].text).toBe('Tech');
    expect(NAV_LINKS[3].text).toBe('About');
  });
});
