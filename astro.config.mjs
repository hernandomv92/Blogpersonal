import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://hernandomv92.github.io',
	base: '/BlogPersonal',
	integrations: [mdx(), sitemap()],
});
