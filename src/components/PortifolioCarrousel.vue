<template>
  <div class="relative p-4 max-w-full">
    <div class="overflow-auto overflow-x-hidden">
      <div class="flex flex-nowrap snap-x snap-mandatory space-x-4">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.image"
          :project="project.project"
          :company="project.company"
          :chips="project.chips"
          :class="[
            'w-xl shrink-0 cursor-pointer transition-all duration-500 ease-in-out transform',
            project.active ? 'opacity-100 scale-100' : 'opacity-30 scale-95 blur-[1px]',
          ]"
          @mouseenter="activate(index)"
          :ref="(element) => (cards[index] = element as ComponentPublicInstance)"
        />
      </div>
    </div>
    <div class="flex justify-center gap-2 p-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :class="[
          'w-5 h-2 bg-[#8ABEEB] rounded-full cursor-pointer transition-all',
          { ['w-20 h-2 bg-[#2993EF]']: project.active },
        ]"
        @click="activate(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, type ComponentPublicInstance } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SansysImg from '@/assets/SANSYS.png'

const projects = ref([
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: true,
  },
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: false,
  },
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: false,
  },
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: false,
  },
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: false,
  },
  {
    image: SansysImg,
    project: 'Sansys Water',
    company: 'Veolia - J-Tech',
    chips: ['BACKEND', 'JAVA'],
    active: false,
  },
])

const cards = ref<(ComponentPublicInstance | null)[]>([])

function activate(index: number) {
  projects.value.forEach((project) => (project.active = false))
  projects.value[index].active = true
  nextTick(() => {
    const card = cards.value[index]
    card?.$el.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  })
}
</script>
