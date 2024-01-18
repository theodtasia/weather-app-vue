<template>
  <div class="wa-weather-app w-full my-4">
    <div class="wa-weather-app--temperature-box p-8 shadow-md">
      <div class="shadow-md py-4 mb-4">
        <BaseDropdown :dates="dates" @date-click="handleDateClick" />
      </div>
      <TemperatureContainer
        v-if="weatherData"
        :temperature="selectedDateData.temp"
        :title="selectedDateData.weather[0].main"
        :description="selectedDateData.weather[0].description"
        :icon="'http://openweathermap.org/img/w/' + selectedDateData.weather[0].icon + '.png'"
      />
    </div>
    <CardsWrapper v-if="weatherData" :weatherData="selectedDateData" />
    <WeatherChart v-if="weatherData" :weeklyData="weatherData.daily" />
  </div>
</template>

<script>
import BaseDropdown from './BaseDropdown.vue';
import TemperatureContainer from './TemperatureContainer.vue';
import CardsWrapper from './CardsWrapper.vue';
import WeatherChart from './WeatherChart.vue';
import { getWeatherData } from './api/weatherApi.js';

export default {
  components: {
    TemperatureContainer,
    CardsWrapper,
    WeatherChart,
    BaseDropdown,
  },
  data() {
    return {
      weatherData: null,
      errorMessage: '',
      dates: [],
      selectedFutureDate: null,
      selectedDateData: null,
    };
  },
  watch: {
    selectedFutureDate: 'updateSelectedDateData',
  },
  mounted() {
    this.getWeatherData();
  },
  methods: {
    handleDateClick(selectedDate) {
      this.selectedFutureDate = selectedDate;
    },
    async getWeatherData() {
      try {
        this.weatherData = await getWeatherData();
        this.dates = this.weatherData.daily.map(day => day.dt);
        this.updateSelectedDateData();
      } catch (error) {
        this.errorMessage = 'Error fetching weather data';
      }
    },
    getDateData(timestamp) {
      return this.weatherData.daily.find(day => day.dt === timestamp);
    },
    calculateMeanTemperatures(data) {
      if (data && typeof data === 'object' && data.day && data.night) {
        const meanTemperature = (data.day + data.night) / 2;
        data.mean = parseFloat(meanTemperature.toFixed(1));
        return data.mean;
      } else {
        // Handle the case where data is not as expected
        return null;
      }
    },
    updateSelectedDateData() {
      if (this.selectedFutureDate && this.weatherData) {
        const selectedDateData = this.getDateData(this.selectedFutureDate);

        if (selectedDateData) {
          this.selectedDateData = selectedDateData;
          this.selectedDateData.temp = this.calculateMeanTemperatures(selectedDateData.temp);
          this.selectedDateData.feels_like = this.calculateMeanTemperatures(selectedDateData.feels_like);
        }
      } else {
        this.selectedDateData = this.weatherData?.current || null;
      }
    },
  },
};
</script>
