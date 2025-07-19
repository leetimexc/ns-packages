import type { Router } from 'vue-router'
import { router } from '../index'

import { initPermissionGuard } from './permission'
import { initProgressGuard } from './progress'
import { initPageGuard } from './page'

export function initRouterGuard(router: Router) {
  // initPageGuard
  initPageGuard(router)

  //initPermissionGuard
  initPermissionGuard(router)

  // initProgressGuard
  initProgressGuard(router)
}
