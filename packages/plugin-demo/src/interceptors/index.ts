import { authInterceptor } from './auth'
import { errorInterceptor } from './error'

export const interceptors = [errorInterceptor, authInterceptor]
