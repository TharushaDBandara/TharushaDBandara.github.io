import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/', // Set base for GitHub Pages user site
      build: {
        rollupOptions: {
          external: ['react', 'react-dom'], // Use external React from CDN
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            },
            format: 'umd', // UMD format works better with externals
            name: 'Portfolio', // Global name for UMD
            entryFileNames: 'assets/portfolio.js',
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
