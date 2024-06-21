"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import { fetchData } from "@/utils/utils";
import WeatherCard from "./WeatherCard";
import { defaultCityData } from "@/utils/utils";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [cityData, setCityData] = useState(defaultCityData);

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    //console.log("value:", value)
  };

  const getCityData = async () => {
    // const data = await fetchData(`http://api.weatherstack.com/current?access_key=6e2c322af135808741980494c619e695&query=${inputValue}`);
    const data = await fetchData(`/api/weather?city=${inputValue}`);
    if (data) {
      setCityData(data);
      console.log("DATA: ", data["location"]);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <input
          className="p-3 mr-1 rounded-xl"
          placeholder={"Search for a City!"}
          type="text"
          onChange={onInputValueChange}
        />
        <button className="btn" onClick={getCityData}>
          Check
        </button>
      </div>

      <WeatherCard cityData={cityData} />
    </main>
  );
}
