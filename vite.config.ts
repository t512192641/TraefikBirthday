import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['gray-matter'],
  },
  define: {
    'process.env': {},
    'Buffer': ['buffer', 'Buffer'],
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
