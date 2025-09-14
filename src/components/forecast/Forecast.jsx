import DailyCards from "./DailyCards";
import MainCard from "./MainCard";
import Sidebar from "./Sidebar";
import SubCards from "./SubCards";

const Forecast = () => {
  return (
    <main className="p-4 max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6">
        {/* Main content */}
        <div className="flex flex-col gap-6">
          <MainCard />
          <SubCards />
          <DailyCards />
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </main>
  );
};

export default Forecast;
