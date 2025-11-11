import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Keep root as default (do NOT set root: 'src')
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default, but keeps Vercel happy
  },
})
