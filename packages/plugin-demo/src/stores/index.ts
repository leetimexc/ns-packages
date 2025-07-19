import type { App } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const store = createPinia()

export function initStore(app: App) {
  // pinia本地化插件
  store.use(
    createPersistedState({
      key: (id) => `store:${id}`,
    }),
  )
  app.use(store)
}

export * from './counter'
