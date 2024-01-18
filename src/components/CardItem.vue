<template>
    <div class="wa-card-item rounded-lg border border-slate-400	pt-2 px-4 mt-8">
      <div class="wa-card-item-container flex">
        <div class="bg-white font-bold text-lg sm:text-3xl">{{ titleValue != -1 ? titleValue: '-' }}</div>
        <div class="bg-white font-bold text-lg sm:text-xl md:pt-2">{{ titleUnit }}</div>
      </div>
      <div class="wa-card-item--label text-sm md:text-lg">{{ label }}</div>
    </div>
</template>
  
<script setup>
  defineProps({
    label: {
      type: String,
      required: true
    },
    titleValue: {
      type: Number,
      required: true
    },
    titleUnit: {
      type: String,
      default: '',
    }
  })
</script>
  