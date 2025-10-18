<template>
  <span v-html="translated"></span>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  attribute: string
  params?: Record<string, string | number>
}

const props = defineProps<Props>()
const { t } = useI18n()

const translated = computed(() => t(props.attribute, props.params ?? {}))
</script>
