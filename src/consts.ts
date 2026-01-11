export const SITE_TITLE = 'Hoxmot Blog';
export const SITE_DESCRIPTION = 'Software development, video games, and tech.';

/**
 * Feature flag for comments section
 */
export const SHOW_COMMENTS = true;

/**
 * Centralized Category Definitions
 */
export const CATEGORIES = [
  { title: 'Software Development', slug: 'software', navLabel: 'Software' },
  { title: 'Video Games', slug: 'games', navLabel: 'Games' },
  { title: 'Tech & Gear', slug: 'tech', navLabel: 'Tech' },
] as const;

type SupportedSocials = 'twitter' | 'discord' | 'bluesky' | 'mastodon' | 'linkedin';
/**
 * A list of all the social media I'm using.
 *
 * If the link is undefined, the icon for it in the footer won't be displayed.
 */
export const SOCIAL_LINKS: Record<SupportedSocials, string | undefined> = {
  twitter: 'https://twitter.com/hoxmot',
  discord: undefined,
  bluesky: 'https://bsky.app/profile/hoxmot.bsky.social',
  mastodon: undefined,
  linkedin: undefined,
};

export const NAV_LINKS = [
  ...CATEGORIES.map((category) => ({
    text: category.navLabel,
    href: `/category/${category.slug}`,
  })),
  { text: 'About', href: '/about' },
];
