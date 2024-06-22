"use client";
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { defaultCityData } from "@/utils";
import { useWeather } from "./hooks/useWeather";

export default function Home() {
  const [city, setCity] = useState("");
  const { loading, weatherData, error, fetchWeather } =
    useWeather(defaultCityData);
  const [inputError, setInputError] = useState<boolean>(false);

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    setInputError(false);
  };

  const handleEmptyInputValue = () => {
    if (!city) {
      setInputError(true);
    } else {
      fetchWeather(city);
    }
  };

  return (
    <main className="flex flex-col lg:max-w-[720px] w-full mx-auto mt-[60px]">
      <h1 className="text-5xl mb-[15px]">YUHU Interview Weather App</h1>
      {inputError && (
        <p className="text-red-500 mt-4">
          ERROR: campo vacío, ingresa el nombre de una ciudad!
        </p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="flex mt-[20px]">

        <input
          id="cityInput"
          className="p-3 w-full mr-1 rounded-xl"
          placeholder={"Search for a City!"}
          type="text"
          onChange={onInputValueChange}
        />
        <button className="btn" onClick={() => handleEmptyInputValue()}>
          Search
        </button>
      </div>
      <WeatherCard data={weatherData} loading={loading} />
      <p className="text-sm mt-[20px]">By Carlos Pretelin</p>
    </main>
  );
}
