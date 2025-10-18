<template>
  <div
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="[themeStore.isDark ? 'bg-[#2E2E2E]' : 'bg-white']"
  >
    <div class="grid grid-cols-[1fr_2fr_2fr_2fr_1fr] items-center pt-4 pb-3 shadow-2xl border-b">
      <div></div>
      <div class="font-bold italic font-mono cursor-pointer">
        <a href="https://www.linkedin.com/in/wagner-bruggemann">
          {&nbsp;&nbsp;Wagner_Brüggemann&nbsp;&nbsp;}
        </a>
      </div>
      <NavItems :items="items" />
      <div class="flex justify-end items-end space-x-4">
        <ThemeSwitch />
        <SelectButton></SelectButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types/Types'

import { ref, onMounted } from 'vue'
import NavItems from './ui/NavItems.vue'
import ThemeSwitch from './ui/ThemeSwitch.vue'
import { useThemeStore } from '@/stores/theme'
import SelectButton from '@/components/ui/SelectButton.vue'

const themeStore = useThemeStore()

const items = ref<NavItem[]>([
  { id: 1, label: 'home', active: true, targetId: 'home' },
  { id: 2, label: 'portfolio', active: false, targetId: 'portfolio' },
  { id: 3, label: 'about', active: false, targetId: 'about' },
  { id: 4, label: 'contact', active: false, targetId: 'contact' },
])

const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 300)
})
</script>
