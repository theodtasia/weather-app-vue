<template>
  <div class="wa-base-buttons grid grid-cols-2 md:grid-cols-3 gap-4 shadow-lg p-8 mb-4 border-0 w-full">
    <CardItem
      v-for="(property, index) in weatherProperties"
      :key="index"
      :titleValue="property.value || -1"
      :titleUnit="property.unit"
      :label="property.label"
    />
  </div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
  components: {
    CardItem,
  },
  props: {
    weatherData: Object, 
  },
  data() {
    return {
      weatherProperties: [],
    };
  },
  watch: {
    weatherData: {
      handler: 'updateWeatherProperties',
      immediate: true, 
    },
  },
  methods: {
    updateWeatherProperties() {
    if (this.weatherData) {
      this.weatherProperties = [
        { label: 'Temperature', value: this.weatherData?.temp, unit: '°C' },
        { label: 'Feels Like', value: this.weatherData?.feels_like, unit: '°C' },
        { label: 'Wind Speed', value: this.weatherData?.wind_speed, unit: 'm/s' },
        { label: 'Wind Degree', value: this.weatherData?.wind_deg, unit: '°' },
        { label: 'Wind Gust', value: this.weatherData?.wind_gust, unit: 'm/s' },
        { label: 'Pressure', value: this.weatherData?.pressure, unit: 'hPa' },
        { label: 'Humidity', value: this.weatherData?.humidity, unit: '%' },
      ];
    }
  },
  getWeatherIconUrl(iconCode) {
      return `http://openweathermap.org/img/w/${iconCode}.png`;
    },
  calculateMeanTemperatures(data) {
      const meanTemperature = (data.day + data.night) / 2;
      data.mean = parseFloat(meanTemperature.toFixed(1));
      return data.mean;
  }, 
 },
};
</script>
