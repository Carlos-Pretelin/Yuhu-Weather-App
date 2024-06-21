"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { fetchData } from "@/utils/utils";
import WeatherCard from "./WeatherCard";
import { defaultCityData } from "@/utils/utils";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [cityData, setCityData] = useState(defaultCityData);
  const [isLoading, setIsLoading] = useState(false)

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const getCityData = async () => {
    setIsLoading(true)
    const data = await fetchData(`/api/weather?city=${inputValue}`);
    if (data) {
      setCityData(data);
      setIsLoading(false)
      console.log("DATA: ", data["location"]);
    }
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
        <button className="btn" onClick={getCityData}>
          Check
        </button>
      </div>
      <WeatherCard cityData={cityData} isLoading={isLoading} />
    </main>
  );
}
