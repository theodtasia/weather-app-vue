// weatherApi.js
import axios from 'axios';

const getWeatherData = async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric`;

  try {
    // Make the GET request using Axios
    const response = await axios.get(apiUrl);

    // Return the weather data
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching weather data:', error);
    throw new Error('Error fetching weather data. Please try again later.');
  }
};

export { getWeatherData };
