import type { Router } from 'vue-router'

export function initPermissionGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    const token = localStorage.getItem('token')

    if (to.name === 'login' && token) {
      next('/HomePage')
      return
    }

    // 其他的一些访问权限判断
    // if('...'){
    //   nextTick('...')
    //   return
    // }

    next()
  })
}
