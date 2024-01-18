<template>
  <div class="flex justify-center items-center mt-4 shadow-md otw-mx-4-em">
    <Line v-if="weeklyData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const { weeklyData } = defineProps(['weeklyData']);

const chartData = weeklyData
  ? {
      labels: weeklyData.map(day => getDayOfWeek(day.dt)),
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: '#f87979',
          data: weeklyData.map(day => day.temp.max),
        },
      ],
    }
  : null;

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  width: 600, 
  height: 400,
};

function getDayOfWeek(timestamp) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}
</script>
