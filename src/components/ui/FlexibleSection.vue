<template>
  <div @click="switchState">
    <div
      class="bg-[#4C6781] mt-1 px-2 py-1 flex justify-between items-center cursor-pointer"
      :class="[isOpened ? 'rounded-t-xl' : 'rounded-xl']"
    >
      {{ item.title }}
      <ChevronUp v-if="isOpened" />
      <ChevronDown v-else />
    </div>
    <transition name="expand">
      <div v-if="isOpened" class="bg-white p-4" :class="[isOpened ? 'rounded-b-xl' : 'rounded-xl']">
        <ul :key="index" v-for="(section, index) in item.sections" class="text-black text-sm py-1">
          <li>
            {{ '- ' + section }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
import type { Item } from '@/types/Types'
import { ChevronUp } from 'lucide-vue-next'
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<{ item: Item; shouldClose: boolean }>()
const emit = defineEmits<{
  (e: 'opened'): void
  (e: 'closed'): void
}>()

const isOpened = ref<boolean>(false)

function switchState() {
  isOpened.value = !isOpened.value
  if (isOpened.value) emit('opened')
  if (!isOpened.value) emit('closed')
}

watch(
  () => props.shouldClose,
  (newVal) => {
    if (newVal && isOpened.value) {
      isOpened.value = false
      emit('closed')
    }
  },
)
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s ease;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>
