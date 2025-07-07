import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import vueRouter from 'unplugin-vue-router/vite'
import autoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // VueRouter必须在vue插件之前
    vueRouter(),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    autoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true,
      },
      // dts: true,
    }),
    components(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
