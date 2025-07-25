import type { Middleware } from 'onion-interceptor'
import { tap } from '@onion-interceptor/pipes'
import { isCancel } from 'axios'
import { t } from '@/locales'

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

let logout: () => void | void
const errorMap = new Map()

errorMap.set(401, (msg?: string) => {
  const res = msg || t('errors.unauthorized')

  // 登出操作确认弹窗（可带倒计时）
  logout?.()

  return res
})

function checkError(status: number, msg?: string) {
  const userStatus = useUserStore()
  logout = () => userStatus?.logout()
}
