// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jans.ng',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  // Old addresses from the previous site keep working.
  redirects: {
    '/practice-areas': '/expertise/',
    '/team': '/partners/',
    '/team/afolabi-ogunsanya': '/partners/afolabi-ogunsanya/',
    '/team/simisola-idowu': '/partners/simisola-idowu/',
    '/team/olujimi-adewole': '/partners/olujimi-adewole/',
    '/team/ortega-opako': '/partners/ortega-opako/',
  },
});
