import { useEffect } from "react";
import sun_icon from "../../assets/images/icon-sunny.webp";
import cloud_icon from "../../assets/images/icon-partly-cloudy.webp";
import rain_icon from "../../assets/images/icon-rain.webp";
import snow_icon from "../../assets/images/icon-snow.webp";
import overcast_icon from "../../assets/images/icon-overcast.webp";
import { useWeather } from "../../context/WeatherContext";

const MainCard = () => {
  const { query, location, weather, loading, error } = useWeather();

  useEffect(() => {
    console.log("information:", query, location, weather, loading, error);
  }, [query, location, weather, loading, error]);

  const getWeatherIcon = (code) => {
    if (code === 0) return sun_icon; // Clear sky
    if ([1, 2, 3].includes(code)) return cloud_icon; // Mainly clear, partly cloudy, overcast
    if ([45, 48].includes(code)) return cloud_icon; // Fog
    if ([51, 53, 55, 56, 57].includes(code)) return rain_icon; // Drizzle
    if ([61, 63, 65, 66, 67].includes(code)) return rain_icon; // Rain
    if ([71, 73, 75, 77, 85, 86].includes(code)) return snow_icon; // Snow
    if ([95, 96, 99].includes(code)) return thunder_icon; // Thunderstorm
    return sun_icon; // fallback
  };

  return (
    <div>
      <div className="custom-bg w-full h-50 rounded-xl flex items-center justify-center flex-col sm:flex-row sm:justify-around">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-neutral-0 font-medium">
            {location
              ? `${location.name}, ${location.countryName}`
              : "Loading..."}
          </p>
          <p className="text-neutral-200 text-sm font-medium">
            {weather && weather.current_weather
              ? new Date(weather.current_weather.time).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )
              : "Loading date..."}
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={
              weather && weather.current_weather
                ? getWeatherIcon(weather.current_weather.weathercode)
                : sun_icon
            }
            alt="weather icon"
            className="w-[80px] h-[80px] weather-icon   "
          />
          <p className="text-neutral-0 font-medium italic text-5xl">
            {weather && weather.current_weather
              ? `${weather.current_weather.temperature}°`
              : "--°"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
