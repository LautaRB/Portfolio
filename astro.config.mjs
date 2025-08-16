// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import 'dotenv/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components/',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@services': '/src/services',
        '@helpers': '/src/helpers',
        '@ts': '/src/ts',
        '@': '/src',
      },
    },
  },
});