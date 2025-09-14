import sun_icon from "../../assets/images/icon-sunny.webp";

const MainCard = () => {
  return (
    <div className="">
      <div className="custom-bg w-full h-50 rounded-xl flex items-center justify-center flex-col sm:flex-row sm:justify-around">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-neutral-0 font-medium">Berlin, Germany</p>
          <p className="text-neutral-200 text-sm font-medium">
            Thursday Aug 8,2025
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={sun_icon}
            alt="weather icon"
            className="w-[80px] h-[80px]"
          />
          <p className="text-neutral-0 font-medium italic text-5xl">68°</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
