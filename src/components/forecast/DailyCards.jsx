const DailyCards = () => {
  return (
    <div className="py-0 sm:py-2">
      <p className="font-medium text-neutral-0 text-base my-6">
        Daily forecast
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
        {Array.from({ length: 7 }).map((_, idx) => (
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

export default DailyCards;
