import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'stats.html',
    }),
  ],
  assetsInclude: ['**/*.gltf'],
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      '@splinetool/react-spline',
      '@splinetool/runtime',
    ],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  resolve: {
    alias: {
      'three': 'three',
      '@splinetool/runtime': '@splinetool/runtime',
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/three/, /node_modules/],
    },
  },
});