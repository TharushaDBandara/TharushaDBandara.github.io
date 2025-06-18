import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/', // Set base for GitHub Pages user site
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined,
            format: 'iife', // Change to IIFE format to avoid ES module MIME type issues
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name].[ext]'
          }
        },
        assetsDir: 'assets',
        outDir: 'dist',
        target: 'es2015' // Lower target for better compatibility
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
