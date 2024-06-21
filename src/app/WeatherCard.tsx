import React from "react";

const WeatherCard = ({ cityData }: any) => {
  const handleWeatherPicture = (weatherType: any) => {
    switch (weatherType) {
      case "Sunny":
        return "🌞";
      case "Cloudy":
        return "☁️";
      case "Partly cloudy":
        return "⛅";
      case "Rain In Vicinity":
        return "🌦️";
      case "Overcast":
        return "💨";
    }
  };

  console.log("WCARD", cityData);
  return (
    <div className="card bg-accent">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className=""
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title">{cityData["location"].name}</h2>
          <p>Temperature: {cityData["current"].temperature} °C</p>
          <p>
            Weather: {cityData["current"].weather_descriptions[0]}{" "}
            {handleWeatherPicture(cityData["current"].weather_descriptions[0])}
          </p>
          <p>Humidity: {cityData["current"].humidity} %</p>
          <p>Wind Speed: {cityData["current"].wind_speed} m/s</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
