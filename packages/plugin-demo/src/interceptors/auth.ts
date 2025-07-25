import type { Middleware } from 'onion-interceptor'
import { assign } from 'lodash-es'
import { useAuthStore } from '../stores/auth'

// function _getToken() {
//   return 'token'
// }

export const authInterceptor: Middleware = async function (ctx, next) {
  // const userStore = useUserStore()
  // const token = userStore.token
  // 使用 auth store 获取 token 状态
  const authStore = useAuthStore()
  const hasToken = authStore.hasToken
  const isTokenTimeout = authStore.isTokenTimeout

  // 只有当有token且token未过期时才添加Authorization头
  if (hasToken && !isTokenTimeout) {
    ctx.cfg!.headers = assign(ctx.cfg!.headers, {
      Authorization: `Bearer ${authStore.token}`,
    })
  }
  // const token = _getToken()
  // const timeout: boolean = _getTokenTimeout()
  // if (token && !timeout) {
  //   ctx.cfg!.headers = assign(ctx.cfg!.headers, {
  //     Authorization: `Bearer ${token}`,
  //   })
  // }

  await next()
}
