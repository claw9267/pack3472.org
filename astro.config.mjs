import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pack3472.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
