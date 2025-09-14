import DailyCards from "./DailyCards";
import MainCard from "./MainCard";
import Sidebar from "./Sidebar";
import SubCards from "./SubCards";
import { useWeather } from "../../context/WeatherContext";

const SkeletonCard = () => (
  <div className="w-full h-40 bg-neutral-700 rounded-xl animate-pulse"></div>
);

const Forecast = () => {
  const { error, loading } = useWeather();

  return (
    <main className="p-4 max-w-6xl mx-auto mt-8">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6">
          {/* main content skeletons */}
          <div className="flex flex-col gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          {/* sidebar skeleton */}
          <SkeletonCard />
        </div>
      ) : error ? (
        <div className="text-center font-medium text-base">
          {error.type === "API_ERROR" ? (
            <p className="text-red-400">⚠️ API error: {error.message}</p>
          ) : error.type === "NO_RESULTS" ? (
            <p className="text-neutral-0">No results found for your search.</p>
          ) : (
            <p className="text-neutral-0">
              Something went wrong. Try again later.
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6">
          {/* main content */}
          <div className="flex flex-col gap-6">
            <MainCard />
            <SubCards />
            <DailyCards />
          </div>

          {/* sidebar */}
          <Sidebar />
        </div>
      )}
    </main>
  );
};

export default Forecast;
