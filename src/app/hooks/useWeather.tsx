import React, { useState } from "react";
import { fetchData } from "@/utils";

interface UseWeather {
  loading: boolean;
  weatherData: any;
  fetchWeather: (val: string) => any
}

export const useWeather = (defaultCityData: any): UseWeather => {
  const [loading, setLoading] = useState(false);

  //Loading default data because the API has a 250 requests limit per month
  const [weatherData, setWeatherData] = useState(defaultCityData);

  const fetchWeather = async (value: string) => {
    setLoading(true);

    try {
      const data = await fetchData(`/api/weather?city=${value}`);

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return {
    loading,
    weatherData,
    fetchWeather
  };
};
