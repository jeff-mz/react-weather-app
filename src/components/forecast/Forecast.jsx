// import DailyCards from "./DailyCards";
// import MainCard from "./MainCard";
// import Sidebar from "./Sidebar";
// import SubCards from "./SubCards";

// const Forecast = () => {
//   return (
//     <section className="w-full my-16 flex flex-row justify-between">
//       <div className=" w-full flex flex-col">
//         <MainCard />
//         <SubCards />
//         <DailyCards />
//       </div>
//       <Sidebar />
//     </section>
//   );
// };

// export default Forecast;

import React from "react";

const Forecast = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6">
        {/* Main content */}
        <div className="bg-gray-800 h-64 rounded-xl flex items-center justify-center text-white">
          Main Content
        </div>

        {/* Sidebar */}
        <div className="bg-gray-700 h-64 rounded-xl flex items-center justify-center text-white">
          Sidebar
        </div>
      </div>
    </div>
  );
};

export default Forecast;
