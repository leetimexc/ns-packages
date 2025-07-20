import type { App } from 'vue'
import type { LanguagesType } from './types'
import { i18n, loadLocaleMessages } from './i18n'

// import antdEnLocale from 'ant-design-vue/es/locale/en_US'
// import antdZhLocale from 'ant-design-vue/es/locale/zh_CN'

// import dayjs from 'dayjs'

// const antdLocaleMap = new Map<string, any>([
//   ['en-US', antdEnLocale],
//   ['zh-CN', antdZhLocale],
// ])

// const dayjsLocaleMap = new Map<string, any>([
//   ['en-US', async () => await import('dayjs/locale/en')],
//   ['zh-CN', async () => await import('dayjs/locale/zh-cn')],
// ])

// async function loadAntdLocale(lang: LanguagesType) {
//   const locale = antdLocaleMap.get(lang)
//   if (locale) {
//     i18n.global.setLocaleMessage(lang, locale)
//   }
// }
// async function loadDayjsLocale(lang: LanguagesType) {
//   const locale = dayjsLocaleMap.get(lang)
//   if (locale) {
//     dayjs.locale(await locale())
//   }
// }

// export async function loadMessages(lang: LanguagesType) {
//   await Promise.all([loadAntdLocale(lang), loadDayjsLocale(lang), loadLocaleMessages(lang)])
// }

export async function initLocale(app: App, defaultLang: LanguagesType = 'zh-CN') {
  app.use(i18n)
  await loadLocaleMessages(defaultLang) // 本地化
  // await loadMessages(defaultLang) // 处理一些第三方库的本地化
}

export const t = i18n.global.t as (key: string, ...args: unknown[]) => string

export default initLocale
