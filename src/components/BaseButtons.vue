<template>
  <button
    v-for="date in dates"
    :key="date"
    @click="handleDateClick(date)"
    class="wa=base-buttons border p-2 m-1 shadow-md rounded-md focus:outline-none focus:ring-indigo-500"
  >
    {{ formatDate(date) }}
  </button>
</template>

<script>
export default {
  props: {
    dates: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDateClick(date) {
      this.$emit('date-click', date);
    },
    formatDate(date) {
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      return new Date(date * 1000).toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
button:hover {
  background-color: #e5e7eb; 
}
</style>
