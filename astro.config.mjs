import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable strict mode for better error checking
  site: 'https://meinom.github.io',
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
