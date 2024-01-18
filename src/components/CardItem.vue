<template>
    <div class="card rounded-lg border border-slate-400	pt-2 px-4">
      <div class="flex">
        <div class="bg-white font-bold text-lg sm:text-3xl">{{ titleValue != -1 ? titleValue: '-' }}</div>
        <div class="bg-white font-bold text-lg sm:text-xl md:pt-2">{{ titleUnit }}</div>
      </div>
      <div class="text-sm md:text-lg">{{ label }}</div>
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
  
<style scoped>

</style>
  