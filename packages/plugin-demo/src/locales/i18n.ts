import type { LanguagesType } from './types'

import { createI18n } from 'vue-i18n'
import { each } from 'lodash-es'

import zhCN from './langs/zh-CN'
import enUS from './langs/en-US'

const loadedLangs = new Set<string>()

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  globalInjection: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

const modules = import.meta.glob('./langs/*.json')
const loadLocaleMap = loadLocaleMap(modules)

function loadLocaleMap(modules: Record<string, () => Promise<unknown>>) {
  const result: Record<string, () => Promise<{ default: Record<string, string> }>> = {}

  each(modules, (loadLocale, path) => {
    const key = path.match(/([\w-]*)\.(yaml|yml|json)/)?.[1]
    if (!key) return
    result[key] = loadLocale as () => Promise<{ default: Record<string, string> }>
  })

  return result
}

export function setI18nLanguage(lang: LanguagesType) {
  i18n.global.locale.value = lang
}

export async function loadLocaleMessages(lang: LanguagesType) {
  if (unref(i18n.global.locale.value) === lang || loadedLangs.has(lang)) {
    return setI18nLanguage(lang)
  }
  const messages = await localesMap[lang]?.()
  if (!messages?.default) {
    i18n.global.setLocaleMessage(lang, messages.default)
  }

  loadedLangs.add(lang)
  return setI18nLanguage(lang)
}
