<template>
  <div class="w-full mt-30">
    <div class="flex w-full justify-center items-center mb-10 text-4xl">
      <TextTranslator attribute="about" />
    </div>
    <div class="flex justify-center items-center">
      <div class="text-xl p-10">
        <div class="max-w-100 mb-10">
          <TextTranslator attribute="about_hello" />
        </div>
        <div class="max-w-100">
          <TextTranslator attribute="java_specialist" />
        </div>
        <div class="border rounded-4xl py-2 px-6 mt-10">
          <div class="font-bold italic font-mono">public Dev getDev {</div>
          <div class="font-bold italic font-mono">
            &nbsp;&nbsp;&nbsp;&nbsp;return new WagnerBruggemann();
          </div>
          <div class="font-bold italic font-mono">}</div>
        </div>
      </div>
      <div>
        <img
          class="h-[705px]"
          :src="themeStore.isDark ? DarkAboutImage : LightAboutImage"
          alt="Sobre"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DarkAboutImage from '@/assets/ABOUT.png'
import LightAboutImage from '@/assets/ABOUT_LIGHT.png'
import { useThemeStore } from '@/stores/theme'
import TextTranslator from '@/components/ui/TextTranslator.vue'

const themeStore = useThemeStore()
</script>
