import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { AiOutlineSwap } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";

const FlightSearch = () => {
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

  // ⭐ Auto select return date = departure + 10 days
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
    <div className="p-4">
      {/* Header */}
       <IoIosArrowBack
                size={26}
                onClick={() => navigate(-1)}
                className="cursor-pointer"
              />

      {/* Main Card */}
      <div className="p-5 rounded-3xl space-y-4 ">

        {/* One-way / Round trip */}
        <div className="flex rounded-full bg-gray-200 p-1 text-center">
          <button
            className={`flex-1 py-2 rounded-full font-semibold ${
              tripType === "oneway" ? "bg-white shadow" : "text-gray-500"
            }`}
            onClick={() => handleTripType("oneway")}
          >
            One way
          </button>

          <button
            className={`flex-1 py-2 rounded-full font-semibold ${
              tripType === "round" ? "bg-white shadow" : "text-gray-500"
            }`}
            onClick={() => handleTripType("round")}
          >
            Round trip
          </button>
        </div>

        {/* From - To */}
        <div className="flex justify-between items-center">
          <div onClick={() => setOpenSelector("from")} className="cursor-pointer flex-1">
            <p className="text-gray-400 text-xs">From</p>
            <p className="font-semibold text-lg">{fromCity}</p>
          </div>

          <div
            className="p-2 border rounded-full border-orange-400 cursor-pointer mx-2"
            onClick={handleSwap}
          >
            <AiOutlineSwap size={24} className="text-orange-500" />
          </div>

          <div onClick={() => setOpenSelector("to")} className="cursor-pointer flex-1 text-right">
            <p className="text-gray-400 text-xs">To</p>
            <p className="font-semibold text-lg">{toCity}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex justify-between gap-2">
          <div onClick={() => setOpenSelector("departure")} className="flex-1 cursor-pointer">
            <p className="text-gray-400 text-xs">Departure</p>
            <p className="font-medium text-lg">{departureDate.toLocaleDateString()}</p>
          </div>

          {tripType === "round" && (
            <div onClick={() => setOpenSelector("return")} className="flex-1 cursor-pointer text-right">
              <p className="text-gray-400 text-xs">Return</p>
              <p className="font-medium text-lg">
                {returnDate ? returnDate.toLocaleDateString() : "Select"}
              </p>
            </div>
          )}
        </div>

        {/* Travellers & Class */}
        <div onClick={() => setOpenSelector("travellers")} className="cursor-pointer">
          <p className="text-gray-400 text-xs">Travellers & Class</p>
          <p className="font-medium mt-1">{travellers} Adult, {travelClass}</p>
        </div>

        {/* ⭐ Special fares (NO POPUP NOW - Direct select here) */}
        <div className="flex gap-3 overflow-x-auto mt-1">
          {["Senior citizen", "Student", "Armed forces"].map((fare) => (
            <span
              key={fare}
              onClick={() => setSpecialFare(fare === specialFare ? null : fare)}
              className={`border px-3 py-1 rounded-full text-sm cursor-pointer ${
                specialFare === fare ? "bg-orange-200 border-orange-500" : ""
              }`}
            >
              {fare}
            </span>
          ))}
        </div>

        {/* Extra savings */}
        <div className="border p-3 rounded-xl flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={extraSavings}
            onChange={() => setExtraSavings(!extraSavings)}
          />
          <div>
            <p className="font-medium">Unlock 10% extra savings</p>
            <p className="text-gray-400 text-xs">
              Business fares by FinvoyGlobal for Work
            </p>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-orange-500 text-white py-3 rounded-2xl font-semibold text-lg"
        >
          Search flights
        </button>
      </div>

      {/* Bottom Sheet */}
      {openSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end z-[999]">
          <div className="w-full max-h-[75%] bg-white p-4 rounded-t-3xl overflow-y-auto">

            <div className="flex justify-end mb-2">
              <IoIosClose size={34} onClick={() => setOpenSelector(null)} className="cursor-pointer" />
            </div>

            {/* City Selector */}
            {(openSelector === "from" || openSelector === "to") && (
              <>
                <input
                  type="text"
                  placeholder="Enter City/Airport"
                  className="w-full p-3 border rounded-xl mb-4 text-lg"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <div className="space-y-2">
                  {filteredCities.map((city, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectCity(city)}
                      className="p-3 border-b cursor-pointer text-lg"
                    >
                      {city}
                    </div>
                  ))}
                  {filteredCities.length === 0 && (
                    <p className="text-gray-400 p-3">No city found</p>
                  )}
                </div>
              </>
            )}

            {/* Date Picker (fixed UI) */}
            {(openSelector === "departure" || openSelector === "return") && (
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <DatePicker
                  selected={openSelector === "departure" ? departureDate : returnDate}
                  onChange={(d) => {
                    openSelector === "departure"
                      ? setDepartureDate(d)
                      : setReturnDate(d);
                  }}
                  inline
                />
              </div>
            )}

            {/* Travellers */}
            {openSelector === "travellers" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <p className="w-32">Adults</p>
                  <input
                    type="number"
                    min={1}
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="w-20 border p-1 rounded"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <p className="w-32">Class</p>
                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
