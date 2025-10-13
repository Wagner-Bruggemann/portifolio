<template>
  <div class="flex w-full h-full text-white">
    <div class="flex-1 rounded-l-2xl text-xl bg-[#2E2E2E] px-6 pt-8">
      <div class="flex justify-between">
        <div>{{ project.company }}</div>
        <div>
          <a :href="project.companyLink" class="flex items-center">
            <div class="mr-2">Visitar</div>
            <ArrowUpRightFromSquare class="w-5" />
          </a>
        </div>
      </div>
      <div class="flex justify-center text-4xl my-4">{{ project.title }}</div>
      <div class="flex flex-wrap space-x-1 justify-center">
        <TextChip v-for="(tag, index) in project.tags" :key="index">{{ tag }}</TextChip>
      </div>
      <div class="max-h-[50vh] flex flex-col mt-6 overflow-auto no-scrollbar">
        <div
          v-for="(item, index) in project.items"
          :key="index"
          class="overflow-auto no-scrollbar max-h-[40vh]"
        >
          <FlexibleSection
            :item="item"
            :shouldClose="openedIndex !== null && openedIndex !== index"
            @opened="onOpened(index)"
            @closed="onClosed(index)"
          />
        </div>
      </div>
    </div>
    <div class="relative flex-3 rounded-2xl bg-[#474747]">
      <div
        @click="close"
        class="absolute top-4 right-4 z-10 cursor-pointer rounded-full p-2 hover:bg-[#616161]"
      >
        <X />
      </div>
      <div class="flex justify-center text-3xl pt-10 pb-5">
        {{ project.imagesSectionTitle }}
      </div>
      <div class="grid grid-cols-2 grid-rows-2 m-4">
        <div
          class="flex justify-center items-center overflow-y-auto"
          v-for="(image, index) in project.images"
          :key="index"
        >
          <img class="mb-5 w-120" :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { Project } from '@/types/Types'
import FlexibleSection from './FlexibleSection.vue'
import TextChip from './TextChip.vue'
import { ArrowUpRightFromSquare, X } from 'lucide-vue-next'

defineProps<{ project: Project }>()
const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const openedIndex = ref<number | null>(null)

function onOpened(index: number) {
  openedIndex.value = index
}

function onClosed(index: number) {
  if (openedIndex.value === index) openedIndex.value = null
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE e Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
