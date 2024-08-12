import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@channelwill/hooks': path.resolve(__dirname, 'packages'),
    },
  },
  publicDir: 'assets',
});
