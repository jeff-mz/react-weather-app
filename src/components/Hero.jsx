import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center text-neutral-0 font-bold text-5xl sm:text-6xl py-12 leading-[1.3] font-feature w-[300px] sm:w-full">
        How&apos;s the sky looking today?
      </h1>

      {/* search bar */}
      <form className="w-full flex flex-col sm:flex-row items-center max-w-lg mx-auto">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full p-0 m0">
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
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-[15px] rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 text-neutral-400 placeholder:text-neutral-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a place..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-1/4 mt-2 sm:mt-0 py-2.5 sm:py-2 px-2  ms-0 sm:ms-2.5 text-base font-medium text-neutral-200 bg-blue-700 rounded-xl border border-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;
