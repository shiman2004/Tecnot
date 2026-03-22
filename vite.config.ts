import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 ensures relative paths so JS/CSS load correctly on Cloudflare Pages
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',   // output folder
    assetsDir: 'assets' // JS/CSS go into assets/
  }
})