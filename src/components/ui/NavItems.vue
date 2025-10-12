<template>
  <div>
    <nav class="flex space-x-5 justify-center cursor-pointer">
      <a
        class="relative group hover:-translate-y-1 transition duration-300 ease-in-out p-2"
        v-for="item in navItems"
        :key="item.id"
        @click="emitEvent(item)"
      >
        {{ item.label }}
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
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import type { NavItem } from '@/types/Types'
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()

const props = defineProps<{
  items: NavItem[]
}>()

const emit = defineEmits<{
  (e: 'click', item: NavItem): void
}>()

const navItems = ref<NavItem[]>([])

function getScrollableParent(el: HTMLElement | null): HTMLElement | null {
  while (el && el !== document.body) {
    const style = getComputedStyle(el)
    const overflowY = style.overflowY
    const canScroll =
      (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
      el.scrollHeight > el.clientHeight
    if (canScroll) return el
    el = el.parentElement
  }
  return null
}

function emitEvent(item: NavItem) {
  navItems.value = props.items.map((i) => ({
    ...i,
    active: i.id === item.id,
  }))
  emit('click', item)

  const section = document.getElementById(item.targetId)
  if (!section) return

  const scrollParent = getScrollableParent(section)
  if (!scrollParent) return

  const offset = 120
  const parentRect = scrollParent.getBoundingClientRect()
  const sectionRect = section.getBoundingClientRect()

  const relativeTop = Math.max(
    0,
    scrollParent.scrollTop + (sectionRect.top - parentRect.top) - offset,
  )

  console.log(relativeTop)
  scrollParent.scrollTo({
    top: relativeTop,
    behavior: 'smooth',
  })
}

onMounted(() => {
  navItems.value = props.items
})
</script>
