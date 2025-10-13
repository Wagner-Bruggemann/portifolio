<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      @click.self="close"
    >
      <div
        class="dark:bg-gray-800 rounded-2xl shadow-lg transition-all"
        :class="[themeStore.isDark ? 'bg-[#2E2E2E]' : 'bg-white', sizes]"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useThemeStore } from '@/stores/theme'

defineProps<{ visible: boolean; sizes: string }>()
const themeStore = useThemeStore()
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
