<template>
  <div class="relative p-4 max-w-full">
    <div class="overflow-auto overflow-x-hidden">
      <div class="flex flex-nowrap snap-x snap-mandatory space-x-4">
        <div v-for="(project, index) in projects" :key="index">
          <ProjectCard
            @click="openModal(project)"
            :image="project.mainImage"
            :project="project.title"
            :company="project.company"
            :tags="project.tags"
            :class="[
              'w-xl shrink-0 cursor-pointer transition-all duration-500 ease-in-out transform',
              project.active ? 'opacity-100 scale-100' : 'opacity-30 scale-95 blur-[1px]',
            ]"
            @mouseenter="activate(index)"
            :ref="(element) => (cards[index] = element as ComponentPublicInstance)"
          />
          <DefaultModal
            class=""
            sizes="w-3/4 h-3/4"
            :visible="project.opened"
            @close="closeModal(project)"
          >
            <ProjectModal @close="closeModal(project)" :project="project" />
          </DefaultModal>
        </div>
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
import DefaultModal from './ui/DefaultModal.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { nextTick, ref, type ComponentPublicInstance } from 'vue'
import { projects as staticProjects } from '@/data/projects.js'
import ProjectModal from './ui/ProjectModal.vue'
import type { Project } from '@/types/Types'

const cards = ref<(ComponentPublicInstance | null)[]>([])
const projects = ref(staticProjects.map((p: Project) => ({ ...p })))

function openModal(project: Project) {
  project.opened = true
}

function closeModal(project: Project) {
  project.opened = false
}

function activate(index: number) {
  projects.value.forEach((project: Project) => (project.active = false))
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
