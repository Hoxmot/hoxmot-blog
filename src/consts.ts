export const SITE_TITLE = 'Hoxmot Blog';
export const SITE_DESCRIPTION = 'Software development, video games, and tech.';

/**
 * Feature flag for comments section
 */
export const SHOW_COMMENTS = true;

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
  { text: 'Software', href: '/category/software' },
  { text: 'Games', href: '/category/games' },
  { text: 'Tech', href: '/category/tech' },
  { text: 'About', href: '/about' },
];
