import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ❌ path kerak emas
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // shu yerda portni berasan
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
