import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState(""); // city/country input
  const [location, setLocation] = useState(null); // { lat, lon }
  const [weather, setWeather] = useState(null); // fetched data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    query,
    setQuery,
    location,
    setLocation,
    weather,
    setWeather,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
