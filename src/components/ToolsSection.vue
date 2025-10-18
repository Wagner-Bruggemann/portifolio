<template>
  <div class="w-full mt-20">
    <div class="flex w-full justify-center items-center mb-10 text-2xl">
      <TextTranslator attribute="toolbox" />
    </div>
    <div
      class="relative w-full overflow-hidden group pb-5"
      :class="[themeStore.isDark ? '' : 'shadow-xl shadow-gray-100']"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <div
        class="flex w-max h-45 items-end space-x-8 animate-marquee"
        :style="{ animationPlayState: isPaused ? 'paused' : 'running' }"
      >
        <div
          v-for="(tool, index) in [...tools, ...tools]"
          :key="index"
          class="flex-shrink-0 hover:-translate-y-6 transition duration-300 ease-in-out"
        >
          <img :src="tool.image" :alt="tool.label" />
          <div
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded border border-b-4 text-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            :class="[
              themeStore.isDark
                ? 'bg-[#5A5A5A] border-white text-white'
                : 'border-black text-black',
            ]"
          >
            {{ tool.label }}
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 pt-20 flex justify-center items-center space-x-3">
      <DefaultButton @click="navStore.scrollTo(contact)">
        <template v-slot:text>
          <div><TextTranslator attribute="contact_uppercase" /></div>
        </template>
        <template v-slot:after>
          <ArrowRight />
        </template>
      </DefaultButton>
      <a href="https://www.linkedin.com/in/wagner-bruggemann">
        <DefaultButton>
          <template v-slot:text>
            <div>LINKEDIN</div>
          </template>
        </DefaultButton>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Java from '@/assets/BOX_JAVA.png'
import Dbeaver from '@/assets/BOX_DBEAVER.png'
import JavaScript from '@/assets/BOX_JAVASCRIPT.png'
import Eclipse from '@/assets/BOX_ECLIPSE.png'
import Figma from '@/assets/BOX_FIGMA.png'
import Flutter from '@/assets/BOX_FLUTTER.png'
import Intellij from '@/assets/BOX_INTELLIJ.png'
import Kafka from '@/assets/BOX_KAFKA.png'
import MySql from '@/assets/BOX_MYSQL.png'
import Postgresql from '@/assets/BOX_POSTGRESQL.png'
import Python from '@/assets/BOX_PYTHON.png'
import React from '@/assets/BOX_REACT.png'
import Rust from '@/assets/BOX_RUST.png'
import Spring from '@/assets/BOX_SPRING.png'
import TypeScript from '@/assets/BOX_TYPESCRIPT.png'
import Vue from '@/assets/BOX_VUE.png'

import LightJava from '@/assets/BOX_JAVA_LIGHT.png'
import LightDbeaver from '@/assets/BOX_DBEAVER_LIGHT.png'
import LightJavaScript from '@/assets/BOX_JAVASCRIPT_LIGHT.png'
import LightEclipse from '@/assets/BOX_ECLIPSE_LIGHT.png'
import LightFigma from '@/assets/BOX_FIGMA_LIGHT.png'
import LightFlutter from '@/assets/BOX_FLUTTER_LIGHT.png'
import LightIntellij from '@/assets/BOX_INTELLIJ_LIGHT.png'
import LightKafka from '@/assets/BOX_KAFKA_LIGHT.png'
import LightMySql from '@/assets/BOX_MYSQL_LIGHT.png'
import LightPostgresql from '@/assets/BOX_POSTGRESQL_LIGHT.png'
import LightPython from '@/assets/BOX_PYTHON_LIGHT.png'
import LightReact from '@/assets/BOX_REACT_LIGHT.png'
import LightRust from '@/assets/BOX_RUST_LIGHT.png'
import LightSpring from '@/assets/BOX_SPRING_LIGHT.png'
import LightTypeScript from '@/assets/BOX_TYPESCRIPT_LIGHT.png'
import LightVue from '@/assets/BOX_VUE_LIGHT.png'

import DefaultButton from './ui/DefaultButton.vue'
import { ArrowRight } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme'
import { useNavStore } from '@/stores/navbar'
import type { NavItem } from '@/types/Types'
import TextTranslator from '@/components/ui/TextTranslator.vue'

const themeStore = useThemeStore()
const navStore = useNavStore()

const contact: NavItem = { id: 4, label: 'Contato', active: false, targetId: 'contact' }

const darkVersionTools = ref([
  { image: Java, label: 'Java' },
  { image: Dbeaver, label: 'Dbeaver' },
  { image: JavaScript, label: 'JavaScript' },
  { image: Eclipse, label: 'Eclipse' },
  { image: Figma, label: 'Figma' },
  { image: Flutter, label: 'Flutter' },
  { image: Intellij, label: 'Intellij' },
  { image: Kafka, label: 'Kafka' },
  { image: MySql, label: 'MySql' },
  { image: Postgresql, label: 'Postgresql' },
  { image: Python, label: 'Python' },
  { image: React, label: 'React' },
  { image: Rust, label: 'Rust' },
  { image: Spring, label: 'Spring' },
  { image: TypeScript, label: 'TypeScript' },
  { image: Vue, label: 'Vue' },
])

const lightVersionTools = ref([
  { image: LightJava, label: 'Java' },
  { image: LightDbeaver, label: 'Dbeaver' },
  { image: LightJavaScript, label: 'JavaScript' },
  { image: LightEclipse, label: 'Eclipse' },
  { image: LightFigma, label: 'Figma' },
  { image: LightFlutter, label: 'Flutter' },
  { image: LightIntellij, label: 'Intellij' },
  { image: LightKafka, label: 'Kafka' },
  { image: LightMySql, label: 'MySql' },
  { image: LightPostgresql, label: 'Postgresql' },
  { image: LightPython, label: 'Python' },
  { image: LightReact, label: 'React' },
  { image: LightRust, label: 'Rust' },
  { image: LightSpring, label: 'Spring' },
  { image: LightTypeScript, label: 'TypeScript' },
  { image: LightVue, label: 'Vue' },
])

const tools = computed(() => (themeStore.isDark ? darkVersionTools.value : lightVersionTools.value))

const isPaused = ref(false)
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 17s linear infinite;
}

.group:hover .animate-marquee,
.group:active .animate-marquee {
  animation-play-state: paused;
}
</style>
