<template>
  <div
    ref="dropdownRef"
    @click="toggleDropdown"
    class="active:bg-gray-400 rounded-full p-2 relative"
  >
    <Menu />
  </div>

  <transition name="expand">
    <div
      v-if="isOpened"
      class="absolute left-0 -bottom-35 w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 z-50 overflow-hidden"
    >
      <ul
        class="text-black dark:text-zinc-100 text-sm divide-y divide-zinc-100 dark:divide-zinc-800"
      >
        <li
          v-for="item in items"
          :key="item.id"
          @click="selectOption(item)"
          class="px-4 py-2 cursor-pointer transition-colors"
        >
          <TextTranslator :attribute="item.label" />
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types/Types'

import { Menu } from 'lucide-vue-next'
import { useNavStore } from '@/stores/navbar'
import TextTranslator from '@/components/ui/TextTranslator.vue'
import { ref, defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue'

defineProps<{
  items: NavItem[]
}>()

const emit = defineEmits<{
  (e: 'click', item: NavItem): void
}>()

const navStore = useNavStore()

const isOpened = ref<boolean>(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggleDropdown() {
  isOpened.value = !isOpened.value
}

function selectOption(item: NavItem) {
  isOpened.value = false
  emitEvent(item)
}

function emitEvent(item: NavItem) {
  emit('click', item)
  navStore.scrollTo(item)
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpened.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.2s ease;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
