<template>
  <div class="relative h-screen w-full mt-50">
    <img
      :src="themeStore.isDark ? DarkBackground : LightBackground"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="relative z-10 mt-40 flex justify-center text-black">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl mb-20">
          <TextTranslator attribute="contact" />
        </h1>
        <div class="flex justify-center items-center text-xl gap-x-20">
          <img class="w-1 h-90" :src="Decorador" alt="Decorador" />
          <div class="flex flex-col gap-y-10 cursor-pointer">
            <div
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Linkedin" alt="Linkedin" />
              LinkedIn
            </div>
            <div
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Whatsapp" alt="Whatsapp" />
              WhatsApp
            </div>
            <div
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Phone" alt="Phone" />
              +55 (48) 9 9997-6518
            </div>
            <div
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Map" alt="Map" />
              <div>
                <div>Sertão do Maruim, São José</div>
                <div>Santa Catarina, Brasil</div>
              </div>
            </div>
          </div>
          <img class="cursor-pointer" :src="Bussola" alt="Bussola" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DarkBackground from '@/assets/CONTACT_BACKGROUND.png'
import LightBackground from '@/assets/CONTACT_BACKGROUND_LIGHT.png'
import Bussola from '@/assets/BUSSOLA.png'
import Linkedin from '@/assets/LINKEDIN.png'
import Whatsapp from '@/assets/WHATSAPP.png'
import Phone from '@/assets/PHONE.png'
import Map from '@/assets/MAP.png'
import Seta from '@/assets/SETA_ITEM.png'
import Decorador from '@/assets/DECORADOR_LATERAL.png'
import { useThemeStore } from '@/stores/theme'
import TextTranslator from '@/components/ui/TextTranslator.vue'

const themeStore = useThemeStore()
</script>
