<template>
  <button
    @click="themeStore.switchTheme"
    class="relative p-1 rounded-full bg-white hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
  >
    <span
      class="flex p-1 items-center justify-center border border-black rounded-full"
      :class="[themeStore.isDark ? 'bg-white' : 'bg-[#EBEBEB]']"
    >
      <Sun v-if="themeStore.isDark" class="text-black" />
      <MoonStar v-else class="text-black" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { Sun, MoonStar } from 'lucide-vue-next'

const themeStore = useThemeStore()
</script>
