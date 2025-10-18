<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      class="flex space-x-3 border border-b-5 px-4 py-2 rounded-xl transition duration-300 ease-in-out cursor-pointer"
      @click="toggleDropdown"
    >
      <div>
        <div>{{ selectedLabel }}</div>
      </div>
      <div>
        <ArrowUp v-if="isOpened" class="transition-transform" />
        <ArrowDown v-else class="transition-transform" />
      </div>
    </button>
    <transition name="expand">
      <div
        v-if="isOpened"
        class="absolute left-0 w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 z-50 overflow-hidden"
      >
        <ul
          class="text-black dark:text-zinc-100 text-sm divide-y divide-zinc-100 dark:divide-zinc-800"
        >
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="px-4 py-2 hover:bg-gray-800 hover:text-white cursor-pointer transition-colors"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
import { ArrowUp } from 'lucide-vue-next'
import { useLanguageStore } from '@/stores/language'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Language } from '@/types/Types'

const languageStore = useLanguageStore()

const isOpened = ref<boolean>(false)
const selectedLabel = ref('POR')
const dropdownRef = ref<HTMLElement | null>(null)

const options = [
  { value: 'portuguese', label: 'POR' },
  { value: 'english', label: 'EN' },
]
function toggleDropdown() {
  isOpened.value = !isOpened.value
}

function selectOption(option: { value: string; label: string }) {
  selectedLabel.value = option.label
  isOpened.value = false
  const lang = Object.values(Language).includes(option.value as Language)
    ? (option.value as Language)
    : Language.Portuguese
  languageStore.setLanguage(lang)
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
