<template>
  <div
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="[themeStore.isDark ? 'bg-[#2E2E2E]' : 'bg-white']"
  >
    <div class="grid grid-cols-[1fr_2fr_2fr_2fr_1fr] items-center pt-4 pb-3 shadow-2xl border-b">
      <div></div>
      <div class="font-bold italic font-mono cursor-pointer">
        {&nbsp;&nbsp;Wagner_Brüggemann&nbsp;&nbsp;}
      </div>
      <NavItems :items="items" />
      <div class="flex justify-end items-end space-x-4">
        <ThemeSwitch />
        <DefaultButton>
          <template v-slot:text>
            <div>POR</div>
          </template>
          <template v-slot:after>
            <ArrowDown />
          </template>
        </DefaultButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types/Types'

import { ref, onMounted } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import DefaultButton from './ui/DefaultButton.vue'
import NavItems from './ui/NavItems.vue'
import ThemeSwitch from './ui/ThemeSwitch.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const items = ref<NavItem[]>([
  { id: 1, label: 'Início', active: true, targetId: 'home' },
  { id: 2, label: 'Portifólio', active: false, targetId: 'portifolio' },
  { id: 3, label: 'Sobre', active: false, targetId: 'about' },
  { id: 4, label: 'Contato', active: false, targetId: 'contact' },
])

const mounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 300)
})
</script>
