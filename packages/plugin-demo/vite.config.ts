import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // VueRouter必须在vue插件之前
    VueRouter(),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true,
      },
      // dts: true,
    }),
    Components(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
