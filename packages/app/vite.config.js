import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: path.resolve('../../docs')
    // Template for index.html
    // index: path.resolve('../../docs/index.html') //之前是'../dist/index.html'
  }
});
