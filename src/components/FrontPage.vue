<template>
  <div class="pt-50 grid grid-cols-[1fr_5fr] mb-40">
    <div class="pr-10 text-xl">
      <img :src="LightHomeIcon" class="w-20" />
      <div>Olá, eu sou</div>
      <div>Wagner</div>
      <div>Brüggemann</div>
    </div>
    <div>
      <div class="relative text-8xl z-0 mt-20">
        <div class="z-10">Desenvolvedor</div>
        <div class="z-10">Backend</div>
        <img
          class="absolute left-74 -bottom-23 -z-5"
          :src="themeStore.isDark ? DarkHexagons : LightHexagons"
        />
      </div>
      <div class="p-5 pt-30 flex items-center space-x-3">
        <DefaultButton>
          <template v-slot:text>
            <div>CONTATO</div>
          </template>
          <template v-slot:after>
            <ArrowRight />
          </template>
        </DefaultButton>
        <DefaultButton>
          <template v-slot:text>
            <div>CURRÍCULO</div>
          </template>
        </DefaultButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LightHomeIcon from '@/assets/ICON_HOME_LIGHT.png'
import DarkHexagons from '@/assets/HEXAGONS.png'
import LightHexagons from '@/assets/HEXAGONS_LIGHT.png'
import { ArrowRight } from 'lucide-vue-next'
import DefaultButton from './ui/DefaultButton.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>
