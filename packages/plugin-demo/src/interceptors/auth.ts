import type { Middleware } from 'onion-interceptor'
import { assign } from 'lodash-es'

function _getToken() {
  return 'token'
}

export const authInterceptor: Middleware = async function (ctx, next) {
  // const userStore = useUserStore()
  // const token = userStore.token
  const token = _getToken()
  if (token) {
    ctx.cfg!.headers = assign(ctx.cfg!.headers, {
      Authorization: `Bearer ${token}`,
    })
  }

  await next()
}
