import type { Router } from 'vue-router'

export function initPageGuard(router: Router) {
  const loadedPage = new Map<string, boolean>()

  router.beforeEach(async (to) => {
    to.meta.loaded = loadedPage.has(to.path)
    return true
  })

  router.afterEach((to) => {
    loadedPage.set(to.path, true)
  })
}
