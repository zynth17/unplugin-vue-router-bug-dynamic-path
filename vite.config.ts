import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    vue(),

    VueRouter({ routesFolder: 'src/pages' }),
    Layouts({
      defaultLayout: 'default',
      layoutsDirs: 'layouts',
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
