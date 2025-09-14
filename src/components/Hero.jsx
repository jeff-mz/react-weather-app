import { useWeather } from "../context/WeatherContext";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const Hero = () => {
  const { query, setQuery, setLocation, setWeather, setLoading, setError } =
    useWeather();
  const GEO_API_KEY = "42465fc222f1b153998ca740045a1de9";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      // 1️⃣ Get coordinates from OpenWeather Geocoding API
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${GEO_API_KEY}`
      );
      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        setLoading(false);
        setError("Location not found");
        console.log("No location found");
        return;
      }

      const { lat, lon, name, country } = geoData[0];
      const countryName = countries.getName(country, "en");

      // Save location in context
      setLocation({ lat, lon, name, country, countryName });

      // console.log("✅ Location Info:");
      // console.log("City:", name);
      // console.log("Country Code:", country);
      // console.log("Country Name:", countryName);
      // console.log("Latitude:", lat);
      // console.log("Longitude:", lon);

      // 2️⃣ Fetch weather from Open-Meteo
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      // Save weather in context (optional, if you want to use it elsewhere)
      setWeather(weatherData);

      // console.log("✅ Weather Info:");
      // console.log(weatherData);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch weather");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center text-neutral-0 font-bold text-5xl sm:text-6xl py-12 leading-[1.3] font-feature w-[300px] sm:w-full">
        How&apos;s the sky looking today?
      </h1>

      {/* Search bar */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row items-center max-w-lg mx-auto"
      >
        <label htmlFor="city-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[10px]">
            <svg
              className="w-4 h-4 me-2 text-neutral-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="city-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-[15px] rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 text-neutral-400 placeholder:text-neutral-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a place..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-1/4 mt-2 sm:mt-0 py-2.5 sm:py-2 px-2 ms-0 sm:ms-2.5 text-base font-medium text-neutral-200 bg-blue-700 rounded-xl border border-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;
