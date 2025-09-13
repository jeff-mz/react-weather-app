import React from "react";

const SubCards = () => {
  return (
    <div className="py-4 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-black rounded-xl h-24 flex items-center justify-center text-white"
          >
            Box {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCards;
