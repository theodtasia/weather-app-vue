<template>
  <div class="relative flex justify-center text-center">
    <button @click="handleCurrentDate" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 mr-2">
      Current Date
    </button>

    <button @click="toggleDropdown" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
      Select Date
    </button>

    <div v-if="isOpen" @click.prevent="closeDropdown" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></div>

    <div v-if="isOpen"  @click.prevent="closeDropdown" class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div class="py-1 space-y-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <BaseButtons :dates="dates" @date-click="handleDateClick" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtons from './BaseButtons.vue';

export default {
  components: {
    BaseButtons,
  },
  props: {
    dates: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    handleDateClick(date) {
      // Handle the selected date
      this.$emit('date-click', date);
      this.closeDropdown();
    },
    handleCurrentDate() {
      this.$emit('date-click', null);
    },
  },
};
</script>

<style scoped>
/* Add scoped styles for BaseDropdown component */
/* Adjust the spacing and hover effect */
.space-y-1 > * + * {
  margin-top: 1rem; /* Adjust the spacing between buttons */
}

.space-y-1 button:hover {
  background-color: #f4f5f7; /* Light gray hover effect */
}

/* Center the dropdown menu */
.origin-top-right {
  left: 50%;
  transform: translateX(-50%);
}
</style>
