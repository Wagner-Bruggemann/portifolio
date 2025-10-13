import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { NavItem } from '@/types/Types'

export const useNavStore = defineStore('navStore', () => {
  const navItems = ref<NavItem[]>([])

  function setUp(items: NavItem[]) {
    navItems.value = items
  }

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

  function scrollTo(item: NavItem) {
    navItems.value = navItems.value.map((i) => ({
      ...i,
      active: i.id === item.id,
    }))

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

    scrollParent.scrollTo({
      top: relativeTop,
      behavior: 'smooth',
    })
  }

  return { setUp, scrollTo, navItems }
})
