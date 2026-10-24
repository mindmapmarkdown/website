import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mindmapmarkdown.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
