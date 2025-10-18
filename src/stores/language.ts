import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { Language } from '@/types/Types'
import { i18n } from '@/locales'

export const useLanguageStore = defineStore('languageStore', () => {
  const parseLanguage = (value: string | null): Language | null => {
    if (!value) return null
    const values = Object.values(Language) as string[]
    return values.includes(value) ? (value as Language) : null
  }

  const detectSystemLanguage = (): Language => {
    if (browserLang.startsWith('pt')) return Language.Portuguese
    if (browserLang.startsWith('en')) return Language.English
    return Language.English
  }

  const cachedLang = parseLanguage(localStorage.getItem('app-language'))
  const browserLang = navigator.language || navigator.languages[0] || 'en'
  const systemLang = ref<Language>(cachedLang ?? detectSystemLanguage())

  function setLanguage(lang: Language) {
    systemLang.value = lang
    localStorage.setItem('app-language', lang.toString())
  }

  watch(systemLang, (val) => {
    i18n.global.locale.value = val.toString()
  })

  return {
    systemLang,
    setLanguage,
  }
})
