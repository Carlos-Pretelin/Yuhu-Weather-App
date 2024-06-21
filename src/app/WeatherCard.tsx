import React from "react";

const WeatherCard = ({ cityData }: any) => {
  const handleWeatherPicture = (weatherType: any) => {
    switch (weatherType) {
      case "Sunny":
        return "🌞";
      case "Cloudy":
        return "https://ssl.gstatic.com/onebox/weather/64/cloudy.png";
      case "Partly cloudy":
        return "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png";
      case "Rain In Vicinity":
        return "🌦️";
      case "Overcast":
        return "💨";
      default:
        return cityData["current"].weather_icons[0]  
    }
  };
  const formatRegionString = (regionString: string) => {
    const splitedString = regionString.split("/");
    const newString = splitedString.join(", ").replace("_", " ");
    console.log(newString);
    return newString;
  };

  console.log("WCARD", cityData);
  return (
    <>
      <div className="main-container font-mono text-white w-2/3 h-96 max-w-xl bg-base-300 rounded-lg shadow-lg overflow-hidden">
        <div className="top flex justify-between flex-row h-2/5 w-full bg-neutral p-5">
          <div className="left flex items-center justify-around w-4/12 h-full bg-base-100 rounded-lg shadow-md p-2">
            <img
              className="w-2/5 h-3/5 object-cover"
              src={cityData["current"].weather_icons[0]}
              alt="weather type icon"
            />
            <div className="flex flex-row">
            <p className="text-4xl font-bold">
              {cityData["current"].temperature}°
            </p>
            <p className="text-2xl font-bold">
              C
            </p>
            </div>
          </div>
          <div className="right w-6/12 h-full bg-base-100 rounded-lg shadow-md p-2 flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">Weather</p>
            <p className="text-md">{cityData["current"].weather_descriptions}</p>
            <p className="text-sm">
              Observation Time: {cityData["current"].observation_time}
            </p>
          </div>
        </div>

        <div className="bottom flex h-3/5 w-full bg-base-200 p-7 rounded-b-lg shadow-md">
          <div className="w-full h-full flex flex-col justify-evenly">
            <p className="text-3xl font-bold">{cityData["request"].query}</p>
            <p className="text-sm">Time Zone: {formatRegionString(cityData["location"].timezone_id).split("")}</p>
            <p className="text-sm">Probability of precipitation: {cityData["current"].precip}%</p>
            <p className="text-sm">Humidity: {cityData["current"].humidity}%</p>
            <p className="text-sm">
              Wind Speed: {cityData["current"].wind_speed} km/h
            </p>
            <p className="text-sm">
              Pressure: {cityData["current"].pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
