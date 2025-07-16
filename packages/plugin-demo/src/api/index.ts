import { type ApiConfig, Api } from './Api'
import { OnionInterceptor } from 'onion-interceptor'
import { interceptors } from '@/interceptors'
import objectHash from 'object-hash'

const DEFAULT = {
  baseUrl: '/',
}

const apis: Map<string, Api> = new Map()

export function createApi(config: ApiConfig = DEFAULT) {
  const hash = objectHash(config)

  if (apis.has(hash)) {
    return apis.get(hash)!
  }

  const api = new Api(config)

  const onion = new OnionInterceptor(api.instance)
  onion.use(...interceptors)

  apis.set(hash, api)

  return api
  // 自定义
  // api.instance.interceptors.request.use()
  // api.instance.interceptors.response.use()
}
export const api = createApi()
