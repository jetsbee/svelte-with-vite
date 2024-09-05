import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: (assetInfo) => /\.css$/.test(assetInfo.name ?? "") ? `[name].1234[extname]`: `[name]-[hash][extname]`,
      }
    }
  },
  plugins: [svelte()],
})
