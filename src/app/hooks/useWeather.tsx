import React, { useCallback, useState } from "react";
import { fetchData } from "@/utils";

interface UseWeather {
  loading: boolean;
  weatherData: any;
  error: string | null
  fetchWeather: (val: string) => any
}

export const useWeather = (defaultCityData: any): UseWeather => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //Loading default data because the API has a 250 requests limit per month
  const [weatherData, setWeatherData] = useState(defaultCityData);

  const fetchWeather = useCallback( async (value: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchData(`/api/weather?city=${value}`);

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to fetch weather data. Please try again.");
      console.log("ERROR ERROR ")
    }
  }, []);

  return {
    loading,
    weatherData,
    error,
    fetchWeather
  };
};
