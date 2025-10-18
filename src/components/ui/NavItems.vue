<template>
  <div>
    <nav class="flex space-x-5 justify-center cursor-pointer">
      <a
        class="relative group hover:-translate-y-1 transition duration-300 ease-in-out p-2"
        v-for="item in navStore.navItems"
        :key="item.id"
        @click="emitEvent(item)"
      >
        <TextTranslator :attribute="item.label" />
        <span
          class="absolute left-0 bottom-[-10px] h-0.5 w-full origin-center transition-transform duration-200 ease-out"
          :class="[
            item.active ? 'scale-x-100' : 'scale-x-0',
            themeStore.isDark ? 'bg-white' : 'bg-black',
          ]"
        />
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted } from 'vue'
import type { NavItem } from '@/types/Types'
import { useThemeStore } from '@/stores/theme'
import { useNavStore } from '@/stores/navbar'
import TextTranslator from '@/components/ui/TextTranslator.vue'

const themeStore = useThemeStore()
const navStore = useNavStore()

const props = defineProps<{
  items: NavItem[]
}>()

const emit = defineEmits<{
  (e: 'click', item: NavItem): void
}>()

function emitEvent(item: NavItem) {
  emit('click', item)
  navStore.scrollTo(item)
}

onMounted(() => {
  navStore.setUp(props.items)
})
</script>
