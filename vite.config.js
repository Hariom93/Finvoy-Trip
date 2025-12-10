import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'], // lucide-react ke source map error ke liye
  },
  css: {
    // Tailwind ke liye koi special config agar chahiye to
    preprocessorOptions: {},
  },
});
