<template>
  <div
    class="relative flex flex-col justify-center items-center [font-family:Montserrat]"
    :class="[themeStore.isDark ? 'text-white ' : 'text-black text-shadow-white']"
  >
    <NavBar class="fixed top-0 left-0 w-full z-50" />
    <FrontPage id="home" />
    <PortifolioCarrousel id="portfolio" />
    <div class="h-1 w-4/5" :class="[themeStore.isDark ? 'bg-white' : 'bg-[#636363]']"></div>
    <ToolsSection />
    <AboutSection id="about" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FrontPage from '@/components/FrontPage.vue'
import NavBar from '@/components/NavBar.vue'
import PortifolioCarrousel from '@/components/PortifolioCarrousel.vue'
import ToolsSection from '@/components/ToolsSection.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>
