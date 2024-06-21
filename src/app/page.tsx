"use client";
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { defaultCityData } from "@/utils";
import { useWeather } from "./hooks/useWeather";

export default function Home() {
  const [city, setCity] = useState("");
  const {loading, weatherData, fetchWeather} = useWeather(defaultCityData);

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
  };

  return (
    <main className="flex flex-col lg:max-w-[720px] w-full mx-auto mt-[60px]">
      <div className="flex mt-[20px]">
        <input
          className="p-3 w-full mr-1 rounded-xl"
          placeholder={"Search for a City!"}
          type="text"
          onChange={onInputValueChange}
        />
        <button className="btn" onClick={() => fetchWeather(city)}>
          Check
        </button>
      </div>
      <WeatherCard data={weatherData} loading={loading} />
    </main>
  );
}
