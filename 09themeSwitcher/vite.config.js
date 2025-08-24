import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class', // 👈 dark mode enabled
  theme: {
    extend: {
      colors: {
        brand: '#4f46e5',
      },
    },
  },
  plugins: [react(), tailwindcss()],
})