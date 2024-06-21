export  const fetchData = async (url: string): Promise<any> => {
    try {
      const req = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await req.json();
      return data;
    } catch(error) {
      console.error("Error fetching data", error);
    }
  };


  export const defaultCityData = {
    "request": {
        "type": "City",
        "query": "Mexico City, Mexico",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Mexico City",
        "country": "Mexico",
        "region": "The Federal District",
        "lat": "19.429",
        "lon": "-99.128",
        "timezone_id": "America/Mexico_City",
        "localtime": "2024-06-21 10:30",
        "localtime_epoch": 1718965800,
        "utc_offset": "-6.0"
    },
    "current": {
        "observation_time": "04:30 PM",
        "temperature": 20,
        "weather_code": 116,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 15,
        "wind_degree": 350,
        "wind_dir": "N",
        "pressure": 1023,
        "precip": 0.6,
        "humidity": 68,
        "cloudcover": 75,
        "feelslike": 20,
        "uv_index": 4,
        "visibility": 13,
        "is_day": "yes"
    }
}