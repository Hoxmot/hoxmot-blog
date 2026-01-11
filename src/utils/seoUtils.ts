import { SITE_TITLE } from '../consts';

export const generateTitle = (title: string): string =>
  title === SITE_TITLE ? title : `${title} | ${SITE_TITLE}`;

export const generateImageURL = (imagePath: string, siteUrl: URL): URL =>
  new URL(imagePath, siteUrl);
