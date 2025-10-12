<template>
  <div class="w-full mt-30">
    <div class="flex w-full justify-center items-center mb-10 text-4xl">Sobre</div>
    <div class="flex justify-center items-center">
      <div class="text-xl p-10">
        <div class="max-w-95 mb-10">
          Olá, eu sou Wagner Brüggemann, um <strong>Desenvolvedor Backend</strong> com mais de
          <strong>4 anos de experiência</strong>. Com um forte foco no
          <strong>desenvolvimento</strong>, eu combino código de alta performance com as melhores
          práticas do mercado.
        </div>
        <div class="max-w-100">
          Sou especializado em aplicações <strong>Java</strong> com ambiente
          <strong>Spring</strong>, com foco em arquitetura limpa. Minha capacidade de adaptação aos
          diferentes cenários e expertise técnica me permitem transformar ideias em realidade.
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

const themeStore = useThemeStore()
</script>
