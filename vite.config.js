import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        score: resolve(__dirname, 'score.html'),
        casestudies: resolve(__dirname, 'casestudies.html'),
        aiServices: resolve(__dirname, 'ai-services.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
