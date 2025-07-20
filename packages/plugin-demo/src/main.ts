import App from './App.vue'
import { initRouter } from '@/router'
import { initStore } from '@/stores'
import { initLocale } from '@/locales'

function bootstrap() {
  const app = createApp(App)

  initRouter(app)

  initStore(app)

  initLocale(app)

  app.mount('#app')
}

bootstrap()
