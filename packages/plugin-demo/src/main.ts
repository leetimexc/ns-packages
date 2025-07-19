import App from './App.vue'
import { initRouter } from '@/router'
import { initStore } from '@/stores'

function bootstrap() {
  const app = createApp(App)

  initRouter(app)

  initStore(app)

  // initLocale(app)

  app.mount('#app')
}

bootstrap()
