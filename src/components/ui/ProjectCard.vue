<template>
  <div
    class="p-4 rounded-2xl shadow-2xl"
    :class="[themeStore.isDark ? 'bg-[#545454]' : 'bg-[#E8E7E7]']"
  >
    <img class="mb-5" :src="props.image" />
    <div class="text-2xl">{{ props.project }}</div>
    <div class="mb-15">{{ props.company }}</div>
    <div class="flex space-x-2">
      <TextChip v-for="(chip, index) in chips" :key="index">{{ chip }}</TextChip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import TextChip from '@/components/ui/TextChip.vue'
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()

const props = defineProps<{
  image: string
  project: string
  company: string
  chips: string[]
}>()
</script>
