import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose, IoFilter, IoSwapVertical } from "react-icons/io5";
import { 
  MdFlight, 
  MdOutlineLocalAirport, 
  MdAccessTime, 
  MdPriceChange,
  MdLuggage
} from "react-icons/md";
import { FaUserFriends, FaRupeeSign } from "react-icons/fa";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { BsClock, BsBagCheck } from "react-icons/bs";
import { TbPlaneInflight } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const flights = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Flights (mock)
  const [flights, setFlights] = useState([]);
  const [visibleFlights, setVisibleFlights] = useState([]);

  // UI states
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showFarePopup, setShowFarePopup] = useState(false);

  // Selected flight + fare
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedFare, setSelectedFare] = useState("regular");

  // Filter states
  const [priceMax, setPriceMax] = useState(15000);
  const [durationMax, setDurationMax] = useState(10);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedLayover, setSelectedLayover] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState([]);
  const [baggageFilter, setBaggageFilter] = useState(null);

  // Date tabs
  const [activeDate, setActiveDate] = useState(1);
  const dates = [
    { day: "Tue", date: "9 Dec", price: "₹6,083", isCheapest: false },
    { day: "Wed", date: "10 Dec", price: "₹6,135", isCheapest: true },
    { day: "Thu", date: "11 Dec", price: "₹6,083", isCheapest: false },
    { day: "Fri", date: "12 Dec", price: "₹6,083", isCheapest: false },
  ];

  const [filterCount, setFilterCount] = useState(0);

  // mock data on mount
  useEffect(() => {
    const mock = [
      {
        id: "f1",
        airline: "IndiGo",
        airlineCode: "6E",
        departure: "06:55",
        arrival: "10:10",
        stops: "1 stop",
        stopsCount: 1,
        durationHrs: 5.25,
        durationText: "5h 15m",
        price: 6135,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T06:55",
        layoverTime: "1h 20m",
        via: ["HYD"],
        aircraft: "Airbus A320neo",
        rating: 4.2,
        totalReviews: "2.1k",
        refundable: true,
        discount: 220,
        amenities: ["meal", "seat", "entertainment"],
      },
      {
        id: "f2",
        airline: "IndiGo",
        airlineCode: "6E",
        departure: "21:15",
        arrival: "02:50",
        stops: "1 stop",
        stopsCount: 1,
        durationHrs: 5.58,
        durationText: "5h 35m",
        price: 6135,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T21:15",
        layoverTime: "2h 15m",
        via: ["BLR"],
        aircraft: "Airbus A321neo",
        rating: 4.0,
        totalReviews: "1.8k",
        refundable: false,
        discount: 180,
        amenities: ["meal"],
      },
      {
        id: "f3",
        airline: "Vistara",
        airlineCode: "UK",
        departure: "20:20",
        arrival: "02:35",
        stops: "1 stop",
        stopsCount: 1,
        durationHrs: 6.25,
        durationText: "6h 15m",
        price: 6390,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T20:20",
        layoverTime: "1h 45m",
        via: ["MAA"],
        aircraft: "Boeing 737",
        rating: 4.5,
        totalReviews: "3.2k",
        refundable: true,
        discount: 300,
        amenities: ["meal", "seat", "entertainment", "priority"],
      },
      {
        id: "f4",
        airline: "Air India",
        airlineCode: "AI",
        departure: "09:00",
        arrival: "12:10",
        stops: "Non-stop",
        stopsCount: 0,
        durationHrs: 3.16,
        durationText: "3h 10m",
        price: 7200,
        baggage: "7kg cabin, 20kg checkin",
        departureISO: "2024-12-10T09:00",
        layoverTime: null,
        via: [],
        aircraft: "Airbus A320",
        rating: 3.8,
        totalReviews: "2.5k",
        refundable: true,
        discount: 400,
        amenities: ["meal", "seat", "lounge"],
      },
      {
        id: "f5",
        airline: "SpiceJet",
        airlineCode: "SG",
        departure: "14:30",
        arrival: "16:45",
        stops: "Non-stop",
        stopsCount: 0,
        durationHrs: 2.25,
        durationText: "2h 15m",
        price: 5450,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T14:30",
        layoverTime: null,
        via: [],
        aircraft: "Boeing 737",
        rating: 3.9,
        totalReviews: "1.9k",
        refundable: false,
        discount: 150,
        amenities: ["meal"],
      },
    ];
    setFlights(mock);
    setVisibleFlights(mock);
  }, []);

  // Apply current filters to flights
  useEffect(() => {
    let f = flights.slice();

    // price filter
    f = f.filter((fl) => fl.price <= Number(priceMax));

    // duration filter
    f = f.filter((fl) => fl.durationHrs <= Number(durationMax));

    // airlines filter
    if (selectedAirlines.length > 0) {
      f = f.filter((fl) => selectedAirlines.includes(fl.airline));
    }

    // layover
    if (selectedLayover) {
      if (selectedLayover === "Non-stop") {
        f = f.filter((fl) => fl.stopsCount === 0);
      } else if (selectedLayover === "1 stop") {
        f = f.filter((fl) => fl.stopsCount === 1);
      } else if (selectedLayover === "2+") {
        f = f.filter((fl) => fl.stopsCount >= 2);
      }
    }

    // time of day
    if (timeOfDay.length > 0) {
      f = f.filter((fl) => {
        const hour = new Date(fl.departureISO).getHours();
        const checks = {
          morning: hour >= 5 && hour < 12,
          afternoon: hour >= 12 && hour < 17,
          evening: hour >= 17 && hour < 21,
          night: hour >= 21 || hour < 5,
        };
        return timeOfDay.some((t) => checks[t]);
      });
    }

    // baggage filter
    if (baggageFilter === "20kg+") {
      f = f.filter((fl) => fl.baggage.includes("20kg"));
    }

    setVisibleFlights(f);

    // compute filter count
    let cnt = 0;
    if (priceMax < 15000) cnt++;
    if (durationMax < 10) cnt++;
    if (selectedAirlines.length > 0) cnt += selectedAirlines.length;
    if (selectedLayover) cnt++;
    if (timeOfDay.length > 0) cnt += timeOfDay.length;
    if (baggageFilter) cnt++;
    setFilterCount(cnt);
  }, [flights, priceMax, durationMax, selectedAirlines, selectedLayover, timeOfDay, baggageFilter]);

  // Sorting functions
  const applySort = (type) => {
    let sorted = [...visibleFlights];
    switch(type) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        sorted.sort((a, b) => a.durationHrs - b.durationHrs);
        break;
      case "departure":
        sorted.sort((a, b) => new Date(a.departureISO) - new Date(b.departureISO));
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }
    setVisibleFlights(sorted);
    setShowSort(false);
  };

  // Quick filter buttons
  const filterNonStop = () => {
    setSelectedLayover("Non-stop");
    setShowFilter(true);
  };
  
  const filterOneStop = () => {
    setSelectedLayover("1 stop");
    setShowFilter(true);
  };

  const filterCheapest = () => {
    const cheapest = Math.min(...flights.map(f => f.price));
    setVisibleFlights(flights.filter(f => f.price === cheapest));
  };

  const toggleAirline = (air) => {
    setSelectedAirlines((prev) => 
      prev.includes(air) ? prev.filter((p) => p !== air) : [...prev, air]
    );
  };

  const openFare = (flight) => {
    setSelectedFlight(flight);
    setSelectedFare("regular");
    setShowFarePopup(true);
    // Prevent body scroll when popup opens
    document.body.style.overflow = 'hidden';
  };

  const closeFarePopup = () => {
    setShowFarePopup(false);
    document.body.style.overflow = 'auto';
  };

  const handleContinue = () => {
    navigate("/flightconf", { 
      state: { 
        flight: selectedFlight, 
        fare: selectedFare,
        originalState: state
      } 
    });
  };

  const resetFilters = () => {
    setPriceMax(15000);
    setDurationMax(10);
    setSelectedAirlines([]);
    setSelectedLayover(null);
    setTimeOfDay([]);
    setBaggageFilter(null);
    setVisibleFlights(flights);
  };

  const airlinesList = Array.from(new Set(flights.map((f) => f.airline)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-28">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button 
            className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition flex-shrink-0"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack size={20} className="lg:ml-0 ml-1 text-white" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-white font-bold text-base md:text-lg truncate">
              {state?.fromCity?.split(",")[0] || "DEL"} → {state?.toCity?.split(",")[0] || "BOM"}
            </div>
            <div className="text-blue-100 text-xs md:text-sm truncate">
              {state?.departureDate ? new Date(state.departureDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : "Wed, 10 Dec"} • 
              {state?.travellers || "1"} Adult • {state?.travelClass || "Economy"}
            </div>
          </div>
          <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
            <FaUserFriends size={16} className="text-white" />
          </div>
        </div>

        {/* Date tabs - Responsive */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {dates.map((item, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 sm:py-3 rounded-xl md:rounded-2xl cursor-pointer transition-all min-w-[80px] sm:min-w-[100px] ${
                idx === activeDate
                  ? "bg-white shadow-lg"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
              onClick={() => setActiveDate(idx)}
            >
              <div className={`text-xs sm:text-sm font-medium ${idx === activeDate ? "text-gray-700" : "text-white"}`}>
                {item.day}
              </div>
              <div className={`text-xs ${idx === activeDate ? "text-gray-500" : "text-blue-100"}`}>
                {item.date}
              </div>
              <div className={`font-bold mt-1 ${idx === activeDate ? "text-blue-600 text-sm sm:text-base md:text-lg" : "text-white text-xs sm:text-sm"}`}>
                {item.price}
              </div>
              {item.isCheapest && (
                <div className="text-[10px] sm:text-xs bg-green-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full mt-1">
                  Cheapest
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mx-3 sm:mx-4 md:mx-6 mt-4 mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-white/20 p-1.5 md:p-2 rounded-full flex-shrink-0">
              <FaRupeeSign size={16} className="text-white md:text-base" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm md:text-base lg:text-lg truncate">Flat 10% off + 3 months No Cost EMI</div>
              <div className="text-emerald-100 text-xs md:text-sm">Axis Credit Card offer • T&C apply</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons Row - Responsive */}
      <div className="px-3 sm:px-4 md:px-6 mb-4 md:mb-6">
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          <button 
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex-shrink-0 min-h-[40px]"
            onClick={() => setShowSort(true)}
          >
            <IoSwapVertical size={14} className="md:text-base" />
            <span className="font-medium text-xs md:text-sm">Sort</span>
          </button>
          
          <button 
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex-shrink-0 min-h-[40px]"
            onClick={() => setShowFilter(true)}
          >
            <IoFilter size={14} className="md:text-base" />
            <span className="font-medium text-xs md:text-sm">Filter</span>
            {filterCount > 0 && (
              <span className="bg-red-500 text-white text-[10px] md:text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                {filterCount}
              </span>
            )}
          </button>
          
          <button 
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex-shrink-0 min-h-[40px]"
            onClick={filterNonStop}
          >
            <TbPlaneInflight size={14} className="md:text-base" />
            <span className="font-medium text-xs md:text-sm">Non-stop</span>
          </button>
          
          <button 
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex-shrink-0 min-h-[40px]"
            onClick={filterOneStop}
          >
            <MdOutlineLocalAirport size={14} className="md:text-base" />
            <span className="font-medium text-xs md:text-sm">1 stop</span>
          </button>
          
          <button 
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex-shrink-0 min-h-[40px]"
            onClick={filterCheapest}
          >
            <MdPriceChange size={14} className="md:text-base" />
            <span className="font-medium text-xs md:text-sm">Cheapest</span>
          </button>
        </div>
      </div>

      {/* Price Alert */}
      <div className="mx-3 sm:mx-4 md:mx-6 mb-4 md:mb-6">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl md:rounded-2xl p-3 md:p-4">
          <div className="flex items-start gap-2 md:gap-3">
            <div className="bg-orange-100 p-1.5 md:p-2 rounded-full flex-shrink-0">
              <MdPriceChange size={16} className="text-orange-600 md:text-base" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-orange-700 font-bold text-sm md:text-base">Prices are rising! ⚠️</div>
              <div className="text-gray-600 text-xs md:text-sm">Book now to lock in current rates. Prices likely to increase by 12% in 24 hours.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="px-3 sm:px-4 md:px-6 mb-3 md:mb-4">
        <div className="text-gray-700">
          <span className="font-bold text-base md:text-lg">{visibleFlights.length}</span> flights found • 
          <span className="text-gray-500 text-xs md:text-sm ml-2">Sorted by: Recommended</span>
        </div>
      </div>

      {/* Flights List - Responsive Cards */}
      <div className="px-3 sm:px-4 md:px-6 space-y-3 md:space-y-4 pb-20">
        {visibleFlights.length === 0 ? (
          <div className="text-center py-8 md:py-12">
            <div className="text-gray-400 text-4xl md:text-5xl mb-3 md:mb-4">✈️</div>
            <div className="text-gray-600 font-medium text-base md:text-lg">No flights found</div>
            <div className="text-gray-400 text-sm md:text-sm">Try adjusting your filters</div>
            <button 
              onClick={resetFilters}
              className="mt-3 md:mt-4 px-4 md:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm md:text-base"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          visibleFlights.map((flight) => (
            <div 
              key={flight.id} 
              className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openFare(flight)}
            >
              {/* Flight Header */}
              <div className="p-3 md:p-4 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MdFlight size={18} className="text-white md:text-xl" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-800 text-sm md:text-base truncate">{flight.airline}</div>
                      <div className="text-gray-500 text-xs md:text-sm truncate">{flight.aircraft}</div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">₹{flight.price}</div>
                    <div className="text-green-600 text-xs md:text-sm font-medium">Save ₹{flight.discount} with CTDOM</div>
                  </div>
                </div>
              </div>

              {/* Flight Details - Responsive Layout */}
              <div className="p-3 md:p-4">
                <div className="flex flex-col xs:flex-row items-center justify-between gap-3 md:gap-4">
                  {/* Departure */}
                  <div className="text-center w-full xs:w-auto">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">{flight.departure}</div>
                    <div className="text-gray-500 text-xs md:text-sm">DEL</div>
                  </div>
                  
                  {/* Duration and Stops */}
                  <div className="flex-1 w-full xs:w-auto">
                    <div className="text-center mb-2">
                      <div className="text-gray-600 text-xs md:text-sm">{flight.durationText}</div>
                      <div className="flex items-center justify-center mt-1">
                        <div className="w-12 md:w-16 h-0.5 bg-blue-400"></div>
                        <div className="mx-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            flight.stopsCount === 0 
                              ? "bg-green-100 text-green-700" 
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {flight.stops}
                          </div>
                        </div>
                        <div className="w-12 md:w-16 h-0.5 bg-blue-400"></div>
                      </div>
                      {flight.stopsCount > 0 && (
                        <div className="text-gray-500 text-xs mt-1 truncate">Via {flight.via.join(", ")} • {flight.layoverTime} layover</div>
                      )}
                    </div>
                  </div>
                  
                  {/* Arrival */}
                  <div className="text-center w-full xs:w-auto">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">{flight.arrival}</div>
                    <div className="text-gray-500 text-xs md:text-sm">BOM</div>
                  </div>
                </div>

                {/* Amenities & Rating - Responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 md:pt-4 border-t border-gray-100 mt-3 md:mt-4">
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      <BsClock size={12} className="text-gray-400 md:text-sm" />
                      <span className="text-gray-600 text-xs md:text-sm">{flight.refundable ? "Refundable" : "Non-refundable"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsBagCheck size={12} className="text-gray-400 md:text-sm" />
                      <span className="text-gray-600 text-xs md:text-sm truncate">{flight.baggage}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-yellow-500 text-sm">★</div>
                    <span className="font-medium text-sm md:text-base">{flight.rating}</span>
                    <span className="text-gray-500 text-xs md:text-sm">({flight.totalReviews})</span>
                  </div>
                </div>
              </div>

              {/* Quick View Footer */}
              <div className="bg-gray-50 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between">
                <div className="text-blue-600 text-xs md:text-sm font-medium">View Fare Options</div>
                <IoIosArrowForward size={16} className="text-blue-600 md:text-base" />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sort Modal - Responsive */}
      {showSort && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto animate-slideUp">
            <div className="p-4 md:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg md:text-xl font-bold text-gray-800">Sort Flights</div>
                  <div className="text-gray-500 text-xs md:text-sm">Choose your preferred sorting</div>
                </div>
                <button 
                  onClick={() => setShowSort(false)}
                  className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <IoClose size={20} className="text-gray-500 md:text-xl" />
                </button>
              </div>
            </div>
            
            <div className="p-3 md:p-4 space-y-1 md:space-y-2">
              {[
                { id: "recommended", label: "Recommended", desc: "Best overall flights" },
                { id: "price-low", label: "Price: Low to High", desc: "Cheapest first" },
                { id: "price-high", label: "Price: High to Low", desc: "Most expensive first" },
                { id: "duration", label: "Duration: Shortest", desc: "Quickest flights" },
                { id: "departure", label: "Departure Time", desc: "Earliest first" },
                { id: "rating", label: "Airline Rating", desc: "Highest rated first" },
              ].map((sort) => (
                <button
                  key={sort.id}
                  onClick={() => applySort(sort.id)}
                  className="w-full text-left p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200"
                >
                  <div className="font-medium text-gray-800 text-sm md:text-base">{sort.label}</div>
                  <div className="text-gray-500 text-xs md:text-sm">{sort.desc}</div>
                </button>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <button 
                onClick={() => setShowSort(false)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg md:rounded-xl font-medium transition-colors text-sm md:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal - Responsive */}
      {showFilter && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto animate-slideUp">
            <div className="p-4 md:p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg md:text-2xl font-bold text-gray-800">Filters</div>
                  <div className="text-gray-500 text-xs md:text-sm">Customize your search</div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={resetFilters}
                    className="px-3 md:px-4 py-1.5 md:py-2 text-blue-600 hover:bg-blue-50 rounded-full transition text-sm md:text-base"
                  >
                    Reset All
                  </button>
                  <button 
                    onClick={() => setShowFilter(false)}
                    className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <IoClose size={20} className="text-gray-500 md:text-xl" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Price Range */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-xl md:rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base flex items-center gap-2">
                      <FaRupeeSign size={14} className="md:text-base" />
                      Max Price
                    </div>
                    <div className="text-gray-500 text-xs md:text-sm">Adjust your budget</div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600">₹{priceMax.toLocaleString()}</div>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="15000" 
                  step="500"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="w-full h-1.5 md:h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-slider"
                />
                <div className="flex justify-between text-gray-500 text-xs md:text-sm mt-2">
                  <span>₹2,000</span>
                  <span>₹15,000</span>
                </div>
              </div>

              {/* Duration */}
              <div className="bg-gray-50 p-4 md:p-5 rounded-xl md:rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base flex items-center gap-2">
                      <MdAccessTime size={16} className="md:text-base" />
                      Max Duration
                    </div>
                    <div className="text-gray-500 text-xs md:text-sm">Maximum flight time</div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600">{durationMax}h</div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={durationMax}
                  onChange={(e) => setDurationMax(e.target.value)}
                  className="w-full h-1.5 md:h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-slider"
                />
                <div className="flex justify-between text-gray-500 text-xs md:text-sm mt-2">
                  <span>1h</span>
                  <span>12h</span>
                </div>
              </div>

              {/* Airlines */}
              <div>
                <div className="font-bold text-gray-800 text-sm md:text-base mb-2 md:mb-3">Airlines</div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {airlinesList.map((airline) => (
                    <label 
                      key={airline}
                      className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl border cursor-pointer transition-all ${
                        selectedAirlines.includes(airline)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 rounded"
                        checked={selectedAirlines.includes(airline)}
                        onChange={() => toggleAirline(airline)}
                      />
                      <span className="font-medium text-xs md:text-sm">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Layover */}
              <div>
                <div className="font-bold text-gray-800 text-sm md:text-base mb-2 md:mb-3">Layover</div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {["Non-stop", "1 stop", "2+ stops"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedLayover(selectedLayover === type ? null : type)}
                      className={`px-3 md:px-4 py-1.5 md:py-2.5 rounded-full border transition-all text-xs md:text-sm ${
                        selectedLayover === type
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time of Day */}
              <div>
                <div className="font-bold text-gray-800 text-sm md:text-base mb-2 md:mb-3">Departure Time</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
                  {[
                    { id: "morning", label: "🌅 Morning", time: "5AM - 12PM" },
                    { id: "afternoon", label: "☀️ Afternoon", time: "12PM - 5PM" },
                    { id: "evening", label: "🌆 Evening", time: "5PM - 9PM" },
                    { id: "night", label: "🌙 Night", time: "9PM - 5AM" },
                  ].map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setTimeOfDay(prev => 
                        prev.includes(time.id) 
                          ? prev.filter(t => t !== time.id)
                          : [...prev, time.id]
                      )}
                      className={`p-2 md:p-3 rounded-lg md:rounded-xl border transition-all text-left ${
                        timeOfDay.includes(time.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-medium text-xs md:text-sm">{time.label.split(" ")[1]}</div>
                      <div className="text-gray-500 text-xs">{time.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 border-t border-gray-100 sticky bottom-0 bg-white">
              <button 
                onClick={() => setShowFilter(false)}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm md:text-lg rounded-lg md:rounded-xl hover:shadow-lg transition-shadow"
              >
                Apply Filters ({filterCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fare Selection Modal - Responsive */}
      {showFarePopup && selectedFlight && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto animate-slideUp">
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-base md:text-xl truncate">
                    {state?.fromCity?.split(",")[0] || "DEL"} → {state?.toCity?.split(",")[0] || "BOM"}
                  </div>
                  <div className="text-blue-100 text-xs md:text-sm truncate">
                    {selectedFlight.airline} • {selectedFlight.departure} - {selectedFlight.arrival} • {selectedFlight.stops}
                  </div>
                </div>
                <button 
                  onClick={closeFarePopup}
                  className="p-1.5 md:p-2 hover:bg-white/20 rounded-full transition flex-shrink-0 ml-2"
                >
                  <IoClose size={20} className="text-white md:text-xl" />
                </button>
              </div>
            </div>

            {/* Fare Options */}
            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              {/* Regular Fare */}
              <div className={`border-2 rounded-xl md:rounded-2xl p-3 md:p-4 transition-all ${
                selectedFare === "regular" ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                  <div>
                    <div className="font-bold text-gray-800 text-base md:text-lg">REGULAR</div>
                    <div className="text-gray-500 text-xs md:text-sm">Standard economy fare</div>
                  </div>
                  <button 
                    onClick={() => setSelectedFare("regular")}
                    className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                      selectedFare === "regular"
                        ? "bg-blue-600 text-white"
                        : "border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {selectedFare === "regular" ? "SELECTED" : "SELECT"}
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-3">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800">₹{selectedFlight.price}</div>
                    <div className="text-green-600 font-medium text-xs md:text-sm">Save ₹{selectedFlight.discount} with CTDOM</div>
                  </div>
                  <div className="text-left md:text-right text-xs md:text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                      Date change: ₹3,399
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                      Cancellation: ₹4,399
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🍽</div>
                    <span className="truncate">Paid Meal</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">💺</div>
                    <span className="truncate">Paid Seat</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🎒</div>
                    <span className="truncate">7kg Cabin</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🧳</div>
                    <span className="truncate">15kg Check-in</span>
                  </div>
                </div>
              </div>

              {/* Flexi Fare */}
              <div className={`border-2 rounded-xl md:rounded-2xl p-3 md:p-4 transition-all ${
                selectedFare === "flexi" ? "border-purple-500 bg-purple-50" : "border-gray-200"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2">
                  <div>
                    <div className="font-bold text-gray-800 text-base md:text-lg">FLEXI PLUS</div>
                    <div className="text-gray-500 text-xs md:text-sm">Premium flexible fare</div>
                  </div>
                  <div className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full flex-shrink-0">
                    RECOMMENDED
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-3">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800">₹{selectedFlight.price + 500}</div>
                    <div className="text-green-600 font-medium text-xs md:text-sm">Save ₹{selectedFlight.discount} with CTDOM</div>
                  </div>
                  <button 
                    onClick={() => setSelectedFare("flexi")}
                    className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                      selectedFare === "flexi"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "border border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {selectedFare === "flexi" ? "SELECTED" : "SELECT"}
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm mb-3 md:mb-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🍴</div>
                    <span className="truncate">Free Meal</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">💺</div>
                    <span className="truncate">Free Seat</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🎒</div>
                    <span className="truncate">7kg Cabin</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🧳</div>
                    <span className="truncate">15kg Check-in</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                  <div className="flex items-center gap-1.5 md:gap-2 text-green-700 font-medium text-xs md:text-sm mb-1">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
                    Free Date Change (from ₹400)
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-green-700 font-medium text-xs md:text-sm">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
                    Free Cancellation
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Footer - Fixed at bottom */}
            <div className="p-4 md:p-6 border-t border-gray-100 bg-white sticky bottom-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 md:mb-4">
                <div>
                  <div className="text-gray-500 text-xs md:text-sm">Total Price</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    ₹{selectedFare === "flexi" ? selectedFlight.price + 500 : selectedFlight.price}
                  </div>
                  <div className="text-green-600 text-xs md:text-sm">Get ₹{selectedFlight.discount} off with CTDOM</div>
                </div>
                <button 
                  onClick={handleContinue}
                  className=" mb-10 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm md:text-lg rounded-lg md:rounded-xl hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                >
                  Continue →
                </button>
              </div>
              <div className="text-center text-gray-500 text-xs md:text-sm">
                <span className="text-green-500">✓</span> Free cancellation • <span className="text-green-500">✓</span> Best price guarantee • <span className="text-green-500">✓</span> Secure booking
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className=" fixed bottom-20 md:bottom-24 right-3 md:right-4 bg-white p-2.5 md:p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow z-40"
      >
        <IoIosArrowBack size={16} className="lg:ml-0 ml-0.5 transform rotate-90 md:text-base" />
      </button>

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .range-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: #d1d5db;
          outline: none;
        }
        
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .range-slider {
            height: 4px;
          }
          
          .range-slider::-webkit-slider-thumb {
            width: 18px;
            height: 18px;
          }
          
          .range-slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default flights;