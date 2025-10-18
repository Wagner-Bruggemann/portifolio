import { createI18n } from 'vue-i18n'
import { Language } from '@/types/Types'

export const i18n = createI18n({
  legacy: false,
  locale: (localStorage.getItem('app-language') as Language) || Language.Portuguese,
  fallbackLocale: Language.English,
})
