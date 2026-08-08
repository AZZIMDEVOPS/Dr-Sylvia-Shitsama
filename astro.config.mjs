// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://drsylviashitsama.com',
  output: 'static',
  server: {
    port: 4000,
    host: '127.0.0.1'
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
