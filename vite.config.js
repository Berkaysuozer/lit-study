import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8001,
    open: false,
    host: true
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: 'index.html'
    }
  }
}); 