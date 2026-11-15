import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: {
    // Browsers we support (also controls how modern CSS such as nesting is down-levelled)
    target: ['es2020', 'chrome100', 'firefox100', 'safari15'],
    sourcemap: false,
    rollupOptions: {
      output: {
        // React gets its own long-lived cacheable chunk. Framer Motion is split
        // automatically because its animation features load on demand (see main.jsx).
        manualChunks: { react: ['react', 'react-dom'] },
      },
    },
  },
});
