import { useState } from "react";
import { Settings, ChevronDown, Check } from "lucide-react";

const UnitsMenu = () => {
  const [open, setOpen] = useState(false);

  const [system, setSystem] = useState("metric");
  const [temperature, setTemperature] = useState("Celsius (°C)");
  const [windSpeed, setWindSpeed] = useState("km/h");
  const [precipitation, setPrecipitation] = useState("Millimeters (mm)");

  return (
    <div className="relative inline-block text-left">
      {/* trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        <Settings size={16} /> Units <ChevronDown size={14} />
      </button>

      {/* dropdown content */}
      {open && (
        <div className="absolute right-0 mt-2 w-60 rounded-lg bg-gray-800 text-white shadow-lg border border-gray-700 z-50">
          <ul className="py-2 text-sm">
            {/* switch */}
            <li>
              <button
                onClick={() =>
                  setSystem(system === "metric" ? "imperial" : "metric")
                }
                className="w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Switch to {system === "metric" ? "Imperial" : "Metric"}
              </button>
            </li>

            <hr className="border-gray-700 my-1" />

            {/* temperature */}
            <li className="px-4 py-1 text-gray-400 text-xs">Temperature</li>
            <li>
              <button
                onClick={() => setTemperature("Celsius (°C)")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {temperature === "Celsius (°C)" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                Celsius (°C)
              </button>
            </li>
            <li>
              <button
                onClick={() => setTemperature("Fahrenheit (°F)")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {temperature === "Fahrenheit (°F)" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                Fahrenheit (°F)
              </button>
            </li>

            <hr className="border-gray-700 my-1" />

            {/* wind speed */}
            <li className="px-4 py-1 text-gray-400 text-xs">Wind Speed</li>
            <li>
              <button
                onClick={() => setWindSpeed("km/h")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {windSpeed === "km/h" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                km/h
              </button>
            </li>
            <li>
              <button
                onClick={() => setWindSpeed("mph")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {windSpeed === "mph" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                mph
              </button>
            </li>

            <hr className="border-gray-700 my-1" />

            {/* precipitation */}
            <li className="px-4 py-1 text-gray-400 text-xs">Precipitation</li>
            <li>
              <button
                onClick={() => setPrecipitation("Millimeters (mm)")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {precipitation === "Millimeters (mm)" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                Millimeters (mm)
              </button>
            </li>
            <li>
              <button
                onClick={() => setPrecipitation("Inches (in)")}
                className="w-full flex items-center px-4 py-2 hover:bg-gray-700"
              >
                {precipitation === "Inches (in)" && (
                  <Check size={16} className="mr-2 text-blue-400" />
                )}
                Inches (in)
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UnitsMenu;
