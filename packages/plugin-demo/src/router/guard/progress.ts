import type { Router } from 'vue-router'
import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

export function initProgressGuard(router: Router) {
  router.beforeEach(async (to) => {
    if (!to.meta.loaded) {
      NProgress.start()
    }
    return true
  })

  router.afterEach(async () => {
    NProgress.done()
    return true
  })
}
