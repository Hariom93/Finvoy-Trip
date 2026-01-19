import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { 
  AiOutlineSwap, 
  AiOutlineUser, 
  AiOutlineCalendar,
  AiOutlineFlag,
  AiOutlineCrown,
  AiOutlineRocket,
  AiOutlineArrowRight
} from "react-icons/ai";
import { MdFlight, MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";

const FlightDetails = () => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [fromCity, setFromCity] = useState("New Delhi");
  const [toCity, setToCity] = useState("Mumbai");
  const [openSelector, setOpenSelector] = useState(null);
  const [cities, setCities] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);

  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const [specialFare, setSpecialFare] = useState(null);
  const [extraSavings, setExtraSavings] = useState(false);

  useEffect(() => {
    fetch("https://mocki.io/v1/cebe5f98-7c36-4e0f-a0b7-9f9f6e7cbe6b")
      .then((res) => res.json())
      .then((data) => setCities(data.cities))
      .catch(() => {
        setCities([
          "Mumbai, IN",
          "New Delhi, IN",
          "Kolkata, IN",
          "Chennai, IN",
          "Goa, IN",
          "Dubai, AE",
          "Kathmandu, NP",
          "Hyderabad, IN",
          "Bangalore, IN",
        ]);
      });
  }, []);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectCity = (city) => {
    openSelector === "from" ? setFromCity(city) : setToCity(city);
    setOpenSelector(null);
    setSearchText("");
  };

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleTripType = (type) => {
    setTripType(type);

    if (type === "round") {
      const nextDate = new Date(departureDate);
      nextDate.setDate(nextDate.getDate() + 10);
      setReturnDate(nextDate);
    } else {
      setReturnDate(null);
    }
  };

  const handleSearch = () => {
    navigate("/results", {
      state: {
        tripType,
        fromCity,
        toCity,
        departureDate,
        returnDate: tripType === "round" ? returnDate : null,
        travellers,
        travelClass,
        specialFare,
        extraSavings,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-3 md:p-4 lg:p-6">
      {/* Header with gradient */}
      <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-white p-1.5 md:p-2 rounded-full shadow-md cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate(-1)}>
            <IoIosArrowBack size={18} className="text-gray-700 md:text-base" />
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="p-1.5 md:p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl">
              <MdFlight size={18} className="text-white md:text-base" />
            </div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Finvoy-Global
            </h1>
          </div>
        </div>
        <div className="p-1.5 md:p-2 bg-white rounded-full shadow">
          <GiWorld size={18} className="text-blue-500 md:text-base" />
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-blue-100 space-y-4 md:space-y-5 lg:space-y-6">
        {/* Trip type with animated pills */}
        <div className="relative">
          <div className="flex rounded-full bg-gradient-to-r from-gray-100 to-blue-100 p-1 md:p-1.5 text-center overflow-hidden">
            <div 
              className={`absolute top-1 md:top-1.5 bottom-1 md:bottom-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-md transition-all duration-300 ${
                tripType === "oneway" 
                  ? "left-1 md:left-1.5 right-1/2" 
                  : "left-1/2 right-1 md:right-1.5"
              }`}
            ></div>
            <button
              className={`flex-1 py-2 md:py-3 rounded-full font-bold z-10 transition-all duration-300 text-sm md:text-base ${
                tripType === "oneway" ? "text-white" : "text-gray-600"
              }`}
              onClick={() => handleTripType("oneway")}
            >
              One way
            </button>
            <button
              className={`flex-1 py-2 md:py-3 rounded-full font-bold z-10 transition-all duration-300 text-sm md:text-base ${
                tripType === "round" ? "text-white" : "text-gray-600"
              }`}
              onClick={() => handleTripType("round")}
            >
              Round trip
            </button>
          </div>
        </div>

        {/* From-To card with flight path visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between ml-3 md:ml-4 space-y-3 sm:space-y-0">
            <div onClick={() => setOpenSelector("from")} className="cursor-pointer flex-1 w-full sm:w-auto">
              <div className="flex items-center gap-2 md:gap-3 mb-1">
                <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                  <AiOutlineFlag size={14} className="text-white md:text-base" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">FROM</p>
                  <p className="font-bold text-base md:text-lg lg:text-xl text-gray-800 truncate">{fromCity.split(",")[0]}</p>
                </div>
              </div>
            </div>

            <div className="mt-3 relative w-full sm:w-auto order-first sm:order-none sm:mx-2 md:mx-3">
          
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 md:p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={handleSwap}
              >
                <AiOutlineSwap size={16} className="text-white md:text-base" />
              </div>
            </div>

            <div onClick={() => setOpenSelector("to")} className="cursor-pointer flex-1 w-full sm:w-auto text-left sm:text-right">
              <div className="flex items-center gap-2 md:gap-3 mb-1 justify-start sm:justify-end">
                <div className="text-left sm:text-right">
                  <p className="text-gray-400 text-xs font-medium">TO</p>
                  <p className="font-bold text-base md:text-lg lg:text-xl text-gray-800 truncate">{toCity.split(",")[0]}</p>
                </div>
                <div className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                  <AiOutlineFlag size={14} className="text-white md:text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dates card */}
        <div className={`bg-gradient-to-r from-white to-blue-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-blue-100 shadow-sm flex ${tripType === "round" ? "flex-col sm:flex-row" : "justify-between"} gap-3 md:gap-4`}>
          <div 
            onClick={() => setOpenSelector("departure")} 
            className={`cursor-pointer hover:bg-blue-50 p-2.5 md:p-3 rounded-lg md:rounded-xl transition-colors ${tripType === "round" ? "w-full" : "flex-1"}`}
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl">
                <AiOutlineCalendar size={14} className="text-white md:text-base" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">DEPARTURE</p>
                <p className="font-bold text-sm md:text-base lg:text-lg text-gray-800">
                  {departureDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          {tripType === "round" && (
            <div 
              onClick={() => setOpenSelector("return")} 
              className={`cursor-pointer hover:bg-blue-50 p-2.5 md:p-3 rounded-lg md:rounded-xl transition-colors ${tripType === "round" ? "w-full" : "flex-1"} text-left sm:text-right`}
            >
              <div className="flex items-center gap-2 md:gap-3 justify-start sm:justify-end">
                <div className="text-left sm:text-right">
                  <p className="text-gray-400 text-xs font-medium">RETURN</p>
                  <p className="font-bold text-sm md:text-base lg:text-lg text-gray-800">
                    {returnDate ? returnDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : "Select"}
                  </p>
                </div>
                <div className="p-1.5 md:p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg md:rounded-xl">
                  <AiOutlineCalendar size={14} className="text-white md:text-base" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Travellers & Class card */}
        <div 
          onClick={() => setOpenSelector("travellers")} 
          className="bg-gradient-to-r from-white to-amber-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-amber-100 shadow-sm cursor-pointer hover:bg-amber-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-1.5 md:p-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg md:rounded-xl">
                <AiOutlineUser size={14} className="text-white md:text-base" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">TRAVELLERS & CLASS</p>
                <p className="font-bold text-sm md:text-base lg:text-lg text-gray-800 truncate">{travellers} Adult, {travelClass}</p>
              </div>
            </div>
            <div className="p-1.5 md:p-2 bg-amber-100 rounded-full">
              <MdAirlineSeatReclineNormal size={14} className="text-amber-600 md:text-base" />
            </div>
          </div>
        </div>

        {/* Special fares card */}
        <div className="bg-gradient-to-r from-white to-purple-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-purple-100 shadow-sm">
          <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
            <AiOutlineCrown size={16} className="text-purple-500 md:text-base" />
            <p className="font-bold text-gray-700 text-sm md:text-base">Special Fares</p>
          </div>
          
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { label: "Senior citizen", icon: "👴", color: "from-purple-500 to-purple-600" },
              { label: "Student", icon: "🎓", color: "from-blue-500 to-blue-600" },
              { label: "Armed forces", icon: "🛡️", color: "from-green-500 to-green-600" }
            ].map((fare) => (
              <div
                key={fare.label}
                onClick={() => setSpecialFare(fare.label === specialFare ? null : fare.label)}
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl cursor-pointer transition-all flex-shrink-0 min-w-max ${
                  specialFare === fare.label 
                    ? `bg-gradient-to-r ${fare.color} text-white shadow-md transform scale-105` 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-base md:text-lg">{fare.icon}</span>
                <span className="font-medium text-xs md:text-sm">{fare.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra savings card */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-emerald-100 shadow-sm">
          <div className="flex items-start gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg md:rounded-xl">
              <AiOutlineRocket size={14} className="text-white md:text-base" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                <input
                  type="checkbox"
                  id="extraSavings"
                  checked={extraSavings}
                  onChange={() => setExtraSavings(!extraSavings)}
                  className="w-4 h-4 md:w-5 md:h-5 rounded accent-emerald-500"
                />
                <label htmlFor="extraSavings" className="font-bold text-gray-700 text-sm md:text-base cursor-pointer">
                  Unlock 10% Extra Savings
                </label>
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-bold">
                  EXCLUSIVE
                </span>
              </div>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                Business fares by Finvoy-Global for Work with premium benefits
              </p>
            </div>
          </div>
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="mb-20 w-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-300 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
        >
          <span>Search Flights</span>
          <AiOutlineArrowRight size={18} className="animate-pulse md:text-base" />
        </button>
      </div>

      {/* Bottom Sheet with glassmorphism effect */}
      {openSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-end z-[999] backdrop-blur-sm p-0 md:p-4">
          <div className="w-full md:max-w-2xl lg:max-w-3xl md:rounded-2xl max-h-[85vh] md:max-h-[80vh] bg-gradient-to-b from-white to-blue-50 p-4 md:p-5 lg:p-6 rounded-t-2xl md:rounded-t-3xl overflow-y-auto shadow-2xl border-t md:border border-blue-100">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {openSelector === "from" && "Select Departure City"}
                {openSelector === "to" && "Select Destination City"}
                {openSelector === "departure" && "Select Departure Date"}
                {openSelector === "return" && "Select Return Date"}
                {openSelector === "travellers" && "Travellers & Class"}
              </h2>
              <div 
                className="p-1.5 md:p-2 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setOpenSelector(null)}
              >
                <IoIosClose size={24} className="text-gray-600 md:text-base" />
              </div>
            </div>

            {/* City Selector */}
            {(openSelector === "from" || openSelector === "to") && (
              <>
                <div className="relative mb-4 md:mb-6">
                  <input
                    type="text"
                    placeholder="Enter city or airport..."
                    className="w-full p-3 md:p-4 pl-10 md:pl-12 border-2 border-blue-200 rounded-xl md:rounded-2xl bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base md:text-lg"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    autoFocus
                  />
                  <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                    <GiWorld size={18} className="text-blue-500 md:text-base" />
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2 max-h-[60vh] overflow-y-auto">
                  {filteredCities.map((city, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectCity(city)}
                      className="p-3 md:p-4 border-b border-blue-100 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-white rounded-lg md:rounded-xl transition-all flex items-center gap-2 md:gap-3"
                    >
                      <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md md:rounded-lg">
                        <MdFlight size={14} className="text-white md:text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 text-sm md:text-base truncate">{city.split(",")[0]}</p>
                        <p className="text-gray-500 text-xs md:text-sm">{city.split(",")[1]}</p>
                      </div>
                    </div>
                  ))}
                  {filteredCities.length === 0 && (
                    <div className="text-center py-6 md:py-10">
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                        <GiWorld size={20} className="text-gray-400 md:text-base" />
                      </div>
                      <p className="text-gray-400 text-base md:text-lg">No city found</p>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Date Picker with custom styling */}
            {(openSelector === "departure" || openSelector === "return") && (
              <div className="bg-gradient-to-br from-white to-blue-50 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg border border-blue-200">
                <DatePicker
                  selected={openSelector === "departure" ? departureDate : returnDate}
                  onChange={(d) => {
                    openSelector === "departure"
                      ? setDepartureDate(d)
                      : setReturnDate(d);
                  }}
                  inline
                  calendarClassName="custom-calendar"
                />
              </div>
            )}

            {/* Travellers with improved design */}
            {openSelector === "travellers" && (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-r from-white to-blue-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl">
                        <AiOutlineUser size={16} className="text-white md:text-base" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 text-sm md:text-base">Adults</p>
                        <p className="text-gray-500 text-xs md:text-sm">12 years and above</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <button 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-gray-100 to-blue-100 flex items-center justify-center font-bold text-gray-700 hover:shadow-md transition-shadow text-sm md:text-base"
                        onClick={() => travellers > 1 && setTravellers(travellers - 1)}
                      >
                        -
                      </button>
                      <span className="text-xl md:text-2xl font-bold w-8 md:w-10 text-center">{travellers}</span>
                      <button 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center font-bold text-white hover:shadow-md transition-shadow text-sm md:text-base"
                        onClick={() => setTravellers(travellers + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white to-amber-50 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl border border-amber-200">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg md:rounded-xl">
                      <MdAirlineSeatReclineNormal size={16} className="text-white md:text-base" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm md:text-base">Travel Class</p>
                      <p className="text-gray-500 text-xs md:text-sm">Select your preferred cabin class</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                    {["Economy", "Business", "First Class"].map((cls) => (
                      <div
                        key={cls}
                        onClick={() => setTravelClass(cls)}
                        className={`p-3 md:p-4 rounded-lg md:rounded-xl border text-center cursor-pointer transition-all ${
                          travelClass === cls
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-md transform scale-105"
                            : "bg-white border-gray-200 hover:border-amber-300"
                        }`}
                      >
                        <p className="font-medium text-sm md:text-base">{cls}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add custom CSS for date picker and responsive styles */}
      <style>
        {`
          .custom-calendar .react-datepicker {
            font-family: inherit;
            border: none;
            background: transparent;
            width: 100%;
          }
          .custom-calendar .react-datepicker__header {
            background: linear-gradient(to right, #3b82f6, #8b5cf6);
            border: none;
            border-radius: 10px 10px 0 0;
          }
          .custom-calendar .react-datepicker__current-month,
          .custom-calendar .react-datepicker__day-name {
            color: white;
          }
          .custom-calendar .react-datepicker__day--selected {
            background: linear-gradient(to right, #f97316, #ef4444);
            border-radius: 8px;
          }
          .custom-calendar .react-datepicker__day:hover {
            background-color: #dbeafe;
            border-radius: 8px;
          }
          .custom-calendar .react-datepicker__day--keyboard-selected {
            background-color: #bfdbfe;
          }
          .custom-calendar .react-datepicker__month-container {
            width: 100%;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Responsive date picker */
          @media (max-width: 640px) {
            .custom-calendar .react-datepicker__day {
              width: 2rem;
              line-height: 2rem;
              margin: 0.1rem;
              font-size: 0.9rem;
            }
            .custom-calendar .react-datepicker__month-container {
              float: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlightDetails;