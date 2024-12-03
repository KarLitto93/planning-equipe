import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/planning-equipe/',
  plugins: [
    react({
      include: ["**/*.tsx", "**/*.ts"],
    }),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
    })
  ],
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/x-date-pickers', '@emotion/styled', '@emotion/react'],
          'utils-vendor': ['dayjs', 'lodash'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Augmente la limite d'avertissement à 1000kb
  }
});