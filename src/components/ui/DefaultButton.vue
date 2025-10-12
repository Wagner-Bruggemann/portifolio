<template>
  <button
    class="flex space-x-3 border border-b-5 px-4 py-2 rounded-xl hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
  >
    <slot name="before"></slot>
    <slot name="text"></slot>
    <slot name="after"></slot>
  </button>
</template>

<script lang="ts" setup></script>
