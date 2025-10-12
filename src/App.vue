<template>
  <div
    class="bg-[#2E2E2E] h-screen overflow-y-auto relative"
    :class="[themeStore.isDark ? 'bg-[#2E2E2E]' : 'bg-white']"
  >
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
</script>
