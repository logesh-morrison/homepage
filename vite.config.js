import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/homepage",
  plugins: [react()],
  build: {
    outDir: 'build', // Change output folder to 'build'
  },
})
