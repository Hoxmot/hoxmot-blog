export const SITE_TITLE = 'Hoxmot Blog';
export const SITE_DESCRIPTION = 'Software development, video games, and tech.';

export function generateTitle(title: string): string {
  return title === SITE_TITLE ? title : `${title} | ${SITE_TITLE}`;
}

export function generateImageURL(imagePath: string, siteUrl: URL): URL {
  return new URL(imagePath, siteUrl);
}
