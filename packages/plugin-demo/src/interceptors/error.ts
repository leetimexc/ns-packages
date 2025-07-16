import type { Middleware } from 'onion-interceptor'
import { tap } from '@onion-interceptor/pipes'
import { isCancel } from 'axios'

export const errorInterceptor: Middleware = async function (ctx, next) {
  await next(
    tap(
      (ctx) => {
        const code = ctx.res?.data.code
        if (code !== 0) {
          // TODO: 处理错误
        }
      },
      (err) => {
        if (isCancel(err)) {
          return err
        }
        // TODO: 处理错误
      },
    ),
  )
}
