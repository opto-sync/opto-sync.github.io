import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://opto-sync.github.io',
  output: 'static',
  integrations: [sitemap()],
});
