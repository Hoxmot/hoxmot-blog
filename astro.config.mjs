import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://hoxmot.eu';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind(),
    sitemap({
      // 1. Exclude the 404 page from the sitemap
      filter: (page) => page !== `${SITE_URL}/404`,

      // 2. Customize Priority and Change Frequency based on URL structure
      serialize(item) {
        if (item.url === `${SITE_URL}/`) {
          // Homepage updates when new posts drop (approx bi-weekly)
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          // Articles rarely change after publishing
          item.changefreq = 'monthly';
          item.priority = 0.9;
        } else if (item.url.includes('/category/')) {
          // Category pages update when new posts are added
          item.changefreq = 'weekly';
          item.priority = 0.7;
        } else {
          // Static pages like "About" change rarely
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
  build: {
    format: 'file',
  },
});
