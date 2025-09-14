import Forecast from "./components/forecast/Forecast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <main className="w-full min-h-screen bg-neutral-900 mx-auto">
        <div className="container p-4 sm:py-16 sm:px-8 mx-auto">
          <Header />
          <Hero />
          <Forecast />
        </div>
      </main>
    </WeatherProvider>
  );
};

export default App;
