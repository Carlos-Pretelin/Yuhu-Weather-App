import React from "react";
import { formatRegionString } from "@/utils";

const WeatherCard = ({ data, loading }: any) => {
  return (
    <div className="main-container font-mono text-white w-full h-auto bg-base-300 rounded-lg shadow-lg overflow-hidden mt-[20px]">
      <div className="top flex flex-col justify-between h-2/5 w-full bg-neutral p-5 sm:flex-row gap-5 items-center ">
        {loading ? (
          <div className="flex flex-row gap-4 w-4/12 h-full bg-base-100 rounded-lg shadow-md p-4">
            <div className="skeleton w-[100px] h-[100px]"></div>
            <div className="skeleton w-[100px] h-[100px]"></div>
          </div>
        ) : (
          <div className="left flex items-center justify-around w-4/5 h-[130px] bg-base-100 rounded-lg shadow-md p-2 sm:w-1/3 sm:mb-[10px]">
            <img
              className="w-2/5 h-3/5"
              src={data["current"].weather_icons[0]}
              alt="weather type icon"
            />
            <div className="flex flex-row">
              <p className="text-4xl font-bold">
                {data["current"].temperature}°
              </p>
              <p className="text-2xl font-bold">C</p>
            </div>
          </div>
        )}

        <div className="right w-4/5 h-[130px] bg-base-100 rounded-lg shadow-md p-2 flex flex-col justify-center items-center sm:w-1/2 ">
          {loading ? (
            <div className="flex flex-col gap-6 w-full p-5">
              <div className="skeleton h-4 w-4/5 "></div>
              <div className="skeleton h-4 w-3/5"></div>
            </div>
          ) : (
            <>
              {" "}
              <p className="text-lg font-semibold">Weather</p>
              <p className="text-md">{data["current"].weather_descriptions}</p>
              <p className="text-sm">
                Observation Time: {data["current"].observation_time}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="bottom flex h-3/5 w-full bg-base-200 p-7 rounded-b-lg shadow-md">
        {loading ? (
          <div className="flex flex-col gap-6 w-full">
            <div className="skeleton h-4 w-4/5 "></div>
            <div className="skeleton h-4 w-3/5"></div>
            <div className="skeleton h-4 w-2/5"></div>
            <div className="skeleton h-4 w-2/5"></div>
            <div className="skeleton h-4 w-1/5"></div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-evenly">
            <p className="text-3xl font-bold">{data["request"].query}</p>
            <p className="text-sm">
              Time Zone:{" "}
              {formatRegionString(data["location"].timezone_id).split("")}
            </p>
            <p className="text-sm">
              Probability of precipitation: {data["current"].precip}%
            </p>
            <p className="text-sm">Humidity: {data["current"].humidity}%</p>
            <p className="text-sm">
              Wind Speed: {data["current"].wind_speed} km/h
            </p>
            <p className="text-sm">Pressure: {data["current"].pressure} hPa</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
