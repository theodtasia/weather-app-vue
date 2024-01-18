<template>
  <div class="wa=temperature-container bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
    <div>
      <span class="wa-temperature-container--value text-2xl md:text-6xl font-bold block">{{ temperature }}°C</span>
      <p class="wa-temperature-container--title text-md sm:text-xl">{{ title }} - {{ description }}</p>
    </div>
    <img class="wa-temperature-container--icon w-20 h-20 md:w-48 md:h-48" v-if="icon" :src="icon" alt="Weather Icon"/>
  </div>
</template>

<script>
export default {
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
