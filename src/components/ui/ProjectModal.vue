<template>
  <div class="flex w-full h-full" :class="[themeStore.isDark ? 'text-white' : 'text-black']">
    <div
      class="flex-1 overflow-auto md:overflow-hidden no-scrollbar md:rounded-l-2xl text-xl px-6 pt-8"
      :class="[themeStore.isDark ? 'bg-[#2E2E2E]' : 'bg-[#DCDCDC]']"
    >
      <div
        @click="close"
        class="block md:hidden absolute top-4 right-4 z-10 cursor-pointer rounded-full p-2 hover:bg-[#616161]"
      >
        <X />
      </div>
      <div class="flex justify-between mt-6 md:mt-0">
        <div>{{ project.company }}</div>
        <div>
          <a :href="project.companyLink" class="flex items-center">
            <div class="mr-2">
              <TextTranslator attribute="visit" />
            </div>
            <ArrowUpRightFromSquare class="w-5" />
          </a>
        </div>
      </div>
      <div class="flex justify-center text-4xl my-4">{{ project.title }}</div>
      <div class="flex flex-wrap space-x-1 justify-center">
        <TextChip
          class="text-white border-2"
          :class="[themeStore.isDark ? 'border-white' : 'border-black']"
          v-for="(tag, index) in project.tags"
          :key="index"
          >{{ tag }}</TextChip
        >
      </div>
      <div class="max-h-[60vh] flex flex-col mt-6 overflow-auto no-scrollbar">
        <div
          v-for="(item, index) in project.items"
          :key="index"
          class="overflow-auto no-scrollbar max-h-[40vh]"
        >
          <FlexibleSection
            class="text-white"
            :item="item"
            :shouldClose="openedIndex !== null && openedIndex !== index"
            @opened="onOpened(index)"
            @closed="onClosed(index)"
          />
        </div>
      </div>
      <div class="block md:hidden mt-6 mb-3">
        <div class="flex justify-center mb-6 text-2xl">
          <TextTranslator :attribute="project.imagesSectionTitle" />
        </div>
        <div
          class="flex justify-center items-center mb-3"
          v-for="(image, index) in project.images"
          :key="index"
        >
          <img
            class="w-120"
            :class="{ 'shadow-xl border-2 border-black': !themeStore.isDark }"
            :src="image"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden md:block relative flex-3 rounded-2xl bg-[#474747]"
      :class="[themeStore.isDark ? 'bg-[#474747]' : 'bg-white']"
    >
      <div
        @click="close"
        class="absolute top-4 right-4 z-10 cursor-pointer rounded-full p-2 hover:bg-[#616161]"
      >
        <X />
      </div>
      <div class="flex justify-center text-3xl pt-10 pb-5">
        <TextTranslator :attribute="project.imagesSectionTitle" />
      </div>
      <div class="grid-container">
        <div class="grid grid-cols-2 grid-rows-2 m-4">
          <div
            class="flex justify-center items-center"
            v-for="(image, index) in project.images"
            :key="index"
          >
            <img
              class="mb-5 w-120"
              :class="{ 'shadow-xl border-2 border-black': !themeStore.isDark }"
              :src="image"
            />
          </div>
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
import TextTranslator from '@/components/ui/TextTranslator.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

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

.grid-container {
  max-height: 70vh;
  overflow: auto;
  scrollbar-width: none;
}

.grid-container::-webkit-scrollbar {
  display: none;
}
</style>
