import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@services', replacement: '/src/services/' },
      { find: '@entities', replacement: '/src/entities/' },
      { find: '@types', replacement: '/src/types/' },
      { find: '@store', replacement: '/src/store/' },
      { find: '@components', replacement: '/src/components/' },
      { find: '@pages', replacement: '/src/pages/' },
      { find: '@routes', replacement: '/src/routes/' },
      { find: '@assets', replacement: '/src/assets/' },
    ],
  }
})
