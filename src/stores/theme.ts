import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Theme } from '@/types/Types'

export const useThemeStore = defineStore('themeStore', () => {
  const theme = ref<Theme>(Theme.Dark)

  function switchTheme() {
    theme.value = theme.value === Theme.Dark ? Theme.Light : Theme.Dark
  }

  const isDark = computed(() => theme.value === Theme.Dark)

  return { isDark, switchTheme }
})
