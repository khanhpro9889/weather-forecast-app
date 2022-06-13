import {useState} from 'react'
import axios from '../../axios-config';

const KEY = '276ce588c76147d797e131715221206';
const BASE_URL = 'http://api.weatherapi.com/v1';

export default function useWeather() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeather = async (cityName) => {
    setIsError(false);
    setIsLoading(true);
    const forecast = await axios.get(`${BASE_URL}/forecast.json?key=${KEY}&q=${cityName}&days=5`);
    setIsLoading(false);
    console.log(forecast)
    if (forecast.message) {
        return setIsError(true);
    }
    return forecast;
  }

  return {
    getWeather,
    isLoading,
    isError,
  }
}
