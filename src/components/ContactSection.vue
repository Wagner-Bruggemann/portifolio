<template>
  <div class="relative h-screen w-full mt-50">
    <img
      :src="themeStore.isDark ? DarkBackground : LightBackground"
      alt="Background"
      class="absolute inset-0 h-[1100px] md:w-full md:h-full object-cover z-0"
    />
    <div class="relative z-10 mt-40 flex justify-center text-black">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl mb-20">
          <TextTranslator attribute="contact" />
        </h1>
        <div class="flex justify-center items-center text-xl gap-x-20">
          <img class="hidden md:block w-1 h-90" :src="Decorador" alt="Decorador" />
          <div class="flex flex-col mx-10 md:mx-0 gap-y-10 cursor-pointer">
            <div
              @click="redirectLinkedin"
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="hidden md:block w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Linkedin" alt="Linkedin" />
              LinkedIn
            </div>
            <div
              @click="redirectWhatsapp"
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="hidden md:block w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Whatsapp" alt="Whatsapp" />
              WhatsApp
            </div>
            <div class="relative flex items-center gap-5">
              <transition name="fade">
                <div
                  v-if="showPhoneTooltip"
                  class="absolute -top-10 left-30 ml-3 px-3 py-1 bg-black text-white text-sm rounded-lg shadow-md"
                >
                  Copiado 📋
                </div>
              </transition>
              <div
                @click="copyPhoneNumber"
                class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
              >
                <img class="hidden md:block w-3" :src="Seta" alt="Seta" />
                <img class="w-15" :src="Phone" alt="Phone" />
                +55 (48) 9 9997-6518
              </div>
            </div>
            <div
              @click="goToMaps"
              class="flex items-center gap-5 hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <img class="hidden md:block w-3" :src="Seta" alt="Seta" />
              <img class="w-15" :src="Map" alt="Map" />
              <div>
                <div>Sertão do Maruim, São José</div>
                <div>Santa Catarina, Brasil</div>
              </div>
            </div>
            <img
              @click="goToMaps"
              class="block md:hidden cursor-pointer"
              :src="Bussola"
              alt="Bussola"
            />
          </div>
          <img
            @click="goToMaps"
            class="hidden md:block cursor-pointer"
            :src="Bussola"
            alt="Bussola"
          />
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
import { ref } from 'vue'

const themeStore = useThemeStore()
const showPhoneTooltip = ref(false)

function redirectLinkedin() {
  window.open('https://www.linkedin.com/in/wagner-bruggemann', '_blank')
}

function redirectWhatsapp() {
  const phone = '5548999776518'
  const message = 'Olá, vi seu portfólio e gostaria de conversar!'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

function copyPhoneNumber() {
  const phoneNumber = '+55 48 99977-6518'
  navigator.clipboard.writeText(phoneNumber).then(() => {
    showPhoneTooltip.value = true
    setTimeout(() => (showPhoneTooltip.value = false), 2000)
  })
}

function goToMaps() {
  window.open('https://maps.app.goo.gl/Huv9sTEv1igQxoP3A', '_blank')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
