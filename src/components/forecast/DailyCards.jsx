import React from "react";

const DailyCards = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-black rounded-xl w-18 h-24 flex items-center justify-center text-white"
          >
            Box {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCards;
