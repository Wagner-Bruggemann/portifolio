<template>
  <div class="pt-50 md:grid md:grid-cols-[1fr_5fr] mb-40">
    <section class="flex justify-center md:block">
      <div class="md:pr-10 text-xl">
        <div class="flex flex-col items-center md:block">
          <img :src="LightHomeIcon" class="w-30 md:w-20" />
          <div>
            <TextTranslator attribute="hello_im" />
          </div>
          <div>Wagner</div>
          <div>Brüggemann</div>
        </div>
      </div>
    </section>
    <section>
      <div
        v-if="langStore.systemLang == Language.Portuguese"
        class="relative text-5xl text-shadow-sm text-shadow-gray-900 text md:text-8xl z-0 mt-30 md:mt-20"
      >
        <div>
          <div class="z-10"><TextTranslator attribute="developer" /></div>
          <div class="z-10"><TextTranslator attribute="backend" /></div>
        </div>
        <img
          class="absolute left-2 md:left-74 -bottom-19 md:-bottom-23 -z-5"
          :src="themeStore.isDark ? DarkHexagons : LightHexagons"
        />
      </div>
      <div
        v-else
        class="relative text-5xl text-shadow-sm text-shadow-gray-900 md:text-8xl z-0 mt-30 md:mt-20 pl-2 md:pl-20"
      >
        <div>
          <div class="z-10"><TextTranslator attribute="backend" /></div>
          <div class="z-10"><TextTranslator attribute="developer" /></div>
        </div>
        <img
          class="absolute md:left-74 -bottom-19 md:-bottom-23 -z-5"
          :src="themeStore.isDark ? DarkHexagons : LightHexagons"
        />
      </div>
      <div class="p-5 pt-30 flex items-center space-x-3">
        <DefaultButton @click="navStore.scrollTo(contact)">
          <template v-slot:text>
            <div><TextTranslator attribute="contact_uppercase" /></div>
          </template>
          <template v-slot:after>
            <ArrowRight />
          </template>
        </DefaultButton>
        <DefaultButton>
          <template v-slot:text>
            <div><TextTranslator attribute="curriculum" /></div>
          </template>
        </DefaultButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LightHomeIcon from '@/assets/ICON_HOME_LIGHT.png'
import DarkHexagons from '@/assets/HEXAGONS.png'
import LightHexagons from '@/assets/HEXAGONS_LIGHT.png'
import { ArrowRight } from 'lucide-vue-next'
import DefaultButton from './ui/DefaultButton.vue'
import { useThemeStore } from '@/stores/theme'
import { useNavStore } from '@/stores/navbar'
import type { NavItem } from '@/types/Types'
import TextTranslator from '@/components/ui/TextTranslator.vue'
import { Language } from '@/types/Types'
import { useLanguageStore } from '@/stores/language'

const langStore = useLanguageStore()
const themeStore = useThemeStore()
const navStore = useNavStore()

const contact: NavItem = { id: 4, label: 'Contato', active: false, targetId: 'contact' }
</script>
