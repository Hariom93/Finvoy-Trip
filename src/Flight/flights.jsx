import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * FlightResults.jsx
 * Full demo page with:
 * - Date row
 * - Sort popup
 * - Filter popup (price/duration/airlines/layover)
 * - Flight cards (mock data)
 * - Fare selection bottom-sheet (REGULAR / FLEXI)
 * - Continue button -> navigate to /review with selected flight+fare
 *
 * Tailwind classes are used for quick styling.
 */

const FlightResults = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // expects fromCity, toCity, date etc from previous page

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
  const [selectedLayover, setSelectedLayover] = useState(null); // "Non-stop" | "1 stop" | "2+"
  const [timeOfDay, setTimeOfDay] = useState([]); // e.g. ["morning","afternoon"]

 // Top of FlightResults component
const [activeDate, setActiveDate] = useState(1); // default active date index
const dates = ["Tue, 9 Dec", "Wed, 10 Dec", "Thu, 11 Dec", "Fri, 12 Dec"];
const prices = ["₹6,083", "₹6,135", "₹6,083", "₹6,083"]; // example prices
const [filterCount, setFilterCount] = useState(0); // counts active filters


  // mock data on mount
  useEffect(() => {
    const mock = [
      {
        id: "f1",
        airline: "IndiGo",
        departure: "06:55",
        arrival: "10:10",
        stops: "1 stop",
        durationHrs: 5.25,
        durationText: "5h 15m",
        price: 6135,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T06:55",
      },
      {
        id: "f2",
        airline: "IndiGo",
        departure: "21:15",
        arrival: "02:50",
        stops: "1 stop",
        durationHrs: 5.58,
        durationText: "5h 35m",
        price: 6135,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T21:15",
      },
      {
        id: "f3",
        airline: "Vistara",
        departure: "20:20",
        arrival: "02:35",
        stops: "1 stop",
        durationHrs: 6.25,
        durationText: "6h 15m",
        price: 6390,
        baggage: "7kg cabin, 15kg checkin",
        departureISO: "2024-12-10T20:20",
      },
      {
        id: "f4",
        airline: "Air India",
        departure: "09:00",
        arrival: "12:10",
        stops: "Non-stop",
        durationHrs: 3.16,
        durationText: "3h 10m",
        price: 7200,
        baggage: "7kg cabin, 20kg checkin",
        departureISO: "2024-12-10T09:00",
      },
      // add more if needed
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
        f = f.filter((fl) => fl.stops === "Non-stop");
      } else if (selectedLayover === "1 stop") {
        f = f.filter((fl) => fl.stops.includes("1 stop"));
      } else if (selectedLayover === "2+") {
        f = f.filter((fl) => fl.stops.includes("2"));
      }
    }

    // time of day (simple)
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

    setVisibleFlights(f);

    // compute filter count (for badge)
    let cnt = 0;
    if (priceMax < 15000) cnt++;
    if (durationMax < 10) cnt++;
    if (selectedAirlines.length > 0) cnt += selectedAirlines.length;
    if (selectedLayover) cnt++;
    if (timeOfDay.length > 0) cnt += timeOfDay.length;
    setFilterCount(cnt);
  }, [flights, priceMax, durationMax, selectedAirlines, selectedLayover, timeOfDay]);

  // Sorting
  const sortLowToHigh = () => {
    const sorted = [...visibleFlights].sort((a, b) => a.price - b.price);
    setVisibleFlights(sorted);
    setShowSort(false);
  };
  const sortHighToLow = () => {
    const sorted = [...visibleFlights].sort((a, b) => b.price - a.price);
    setVisibleFlights(sorted);
    setShowSort(false);
  };

  // Quick filter buttons
  const filterNonStop = () => {
    setVisibleFlights(flights.filter((f) => f.stops === "Non-stop"));
  };
  const filterOneStop = () => {
    setVisibleFlights(flights.filter((f) => f.stops.includes("1 stop")));
  };

  // toggle airline checkbox
  const toggleAirline = (air) => {
    setSelectedAirlines((prev) => (prev.includes(air) ? prev.filter((p) => p !== air) : [...prev, air]));
  };

  
  // open fare bottom-sheet for selected flight
  const openFare = (flight) => {
    setSelectedFlight(flight);
    setSelectedFare("regular");
    setShowFarePopup(true);
    // ensure bottom sheet starts scrolled to top
    window.scrollTo(0, 0);
  };

 const handleContinue = () => {
  navigate("/flightconf", { state: { flight: selectedFlight, fare: selectedFare } });
};

  // reset filters
  const resetFilters = () => {
    setPriceMax(15000);
    setDurationMax(10);
    setSelectedAirlines([]);
    setSelectedLayover(null);
    setTimeOfDay([]);
  };
  


  // airlines available in dataset
  const airlinesList = Array.from(new Set(flights.map((f) => f.airline)));

  return (
    <div className="p-3 pb-28 relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <IoIosArrowBack size={26} onClick={() => navigate(-1)} className="cursor-pointer" />
        <div className="flex-1">
          <div className="font-semibold">
            {state?.fromCity || "DEL"} → {state?.toCity || "BOM"}
          </div>
          <div className="text-sm text-gray-500">{state?.departureDate ? new Date(state.departureDate).toDateString() : "10 Dec • 1 • Economy"}</div>
        </div>
      </div>

      {/* Promo / Price Alerts */}
      <div className="mb-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3">
        <div className="font-semibold text-emerald-700">Flat 10% off + 3 months No Cost EMI</div>
        <div className="text-sm text-gray-600">Axis Credit Card offer</div>
      </div>
<div className="flex items-center gap-3 mb-3 overflow-x-auto text-center">
  {dates.map((d, idx) => (
    <div
      key={d}
      className={`flex-shrink-0 px-3 py-2 rounded cursor-pointer transition-all ${
        idx === activeDate
          ? "font-semibold border-b-2 border-black text-black"
          : "text-gray-500"
      }`}
      onClick={() => setActiveDate(idx)}
    >
      <div className="text-sm">{d.split(",")[0]}</div>
      <div className="text-xs">{d.split(",")[1]?.trim()}</div>
      <div className={`mt-1 ${idx === activeDate ? "text-lg" : "text-sm"}`}>
        {prices[idx]}
      </div>
    </div>
  ))}
</div>


      {/* Sort / Filter Buttons */}
      <div className="flex gap-3 mb-3">
        <button className="border px-4 py-2 rounded-full" onClick={() => setShowSort(true)}>Sort</button>
        <button className="border px-4 py-2 rounded-full flex items-center" onClick={() => setShowFilter(true)}>
          Filter <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-full text-sm">{filterCount}</span>
        </button>
        <button className="border px-4 py-2 rounded-full" onClick={filterNonStop}>Non-stop</button>
        <button className="border px-4 py-2 rounded-full" onClick={filterOneStop}>1 stop</button>
      </div>

      {/* Price Alert */}
      <div className="border rounded-xl p-3 my-2 bg-red-50 border-red-200">
        <div className="text-red-600 font-semibold">Current prices are in the higher range</div>
        <div className="text-gray-600 text-sm">Prices are likely to increase in the next few days. Book now</div>
      </div>

      {/* Flights list */}
      <div className="space-y-4 mt-3">
        {visibleFlights.length === 0 && <div className="text-center text-gray-500 py-8">No flights found with applied filters</div>}
        {visibleFlights.map((f) => (
          <div key={f.id} className="bg-white border rounded-xl p-4 shadow-sm cursor-pointer" onClick={() => openFare(f)}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center font-bold text-blue-700">✈</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{f.airline} <span className="text-xs text-gray-500">• {f.stops}</span></div>
                    <div className="text-sm text-gray-500">Flight No • class</div>
                  </div>
                  <div className="text-right font-semibold text-lg">₹{f.price}</div>
                </div>

                <div className="flex justify-between mt-3 items-center">
                  <div className="text-lg font-semibold">{f.departure}</div>
                  <div className="text-center text-sm text-gray-500">
                    <div>{f.durationText}</div>
                    <div className="text-xs">{f.stops}</div>
                  </div>
                  <div className="text-lg font-semibold">{f.arrival}</div>
                </div>

                <div className="text-sm text-green-600 mt-2">Get ₹220 off with CTDOM</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- Sort Bottom Sheet ---------------- */}
      {showSort && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-end">
          <div className="w-full bg-white rounded-t-2xl p-4 max-h-[60%]">
            <div className="flex justify-between items-center mb-3">
              <div className="font-semibold text-lg">Sort Flights</div>
              <IoClose size={22} className="cursor-pointer" onClick={() => setShowSort(false)} />
            </div>

            <button className="w-full border rounded-xl py-3 mb-2" onClick={sortLowToHigh}>Price: Low → High</button>
            <button className="w-full border rounded-xl py-3 mb-2" onClick={sortHighToLow}>Price: High → Low</button>
            <button className="w-full bg-gray-100 rounded-xl py-3" onClick={() => setShowSort(false)}>Close</button>
          </div>
        </div>
      )}

      {/* ---------------- Filter Bottom Sheet ---------------- */}
      {showFilter && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-end">
          <div className="w-full bg-white rounded-t-2xl p-4 max-h-[80%] overflow-y-auto">
            <div className="flex justify-between items-center mb-3">
              <div className="font-semibold text-lg">Filters</div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-gray-600" onClick={resetFilters}>Reset</button>
                <IoClose size={22} className="cursor-pointer" onClick={() => setShowFilter(false)} />
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">Max Price</div>
                <div className="text-sm text-gray-500">₹{priceMax}</div>
              </div>
              <input type="range" min="2000" max="15000" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} className="w-full" />
            </div>

            {/* Duration */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">Max Duration (hrs)</div>
                <div className="text-sm text-gray-500">{durationMax}h</div>
              </div>
              <input type="range" min="1" max="12" value={durationMax} onChange={(e) => setDurationMax(e.target.value)} className="w-full" />
            </div>

            {/* Airlines */}
            <div className="mb-4">
              <div className="font-medium mb-2">Airlines</div>
              <div className="grid grid-cols-2 gap-2">
                {airlinesList.map((air) => (
                  <label key={air} className="flex items-center gap-2 border p-2 rounded">
                    <input type="checkbox" checked={selectedAirlines.includes(air)} onChange={() => toggleAirline(air)} />
                    <span className="text-sm">{air}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Layover */}
            <div className="mb-4">
              <div className="font-medium mb-2">Layover</div>
              <div className="flex gap-2">
                <button className={`px-3 py-2 rounded border ${selectedLayover === "Non-stop" ? "bg-black text-white" : ""}`} onClick={() => setSelectedLayover("Non-stop")}>Non-stop</button>
                <button className={`px-3 py-2 rounded border ${selectedLayover === "1 stop" ? "bg-black text-white" : ""}`} onClick={() => setSelectedLayover("1 stop")}>1 stop</button>
                <button className={`px-3 py-2 rounded border ${selectedLayover === "2+" ? "bg-black text-white" : ""}`} onClick={() => setSelectedLayover("2+")}>2+ stops</button>
                <button className="px-3 py-2 rounded border" onClick={() => setSelectedLayover(null)}>Any</button>
              </div>
            </div>

            {/* Time of Day */}
            <div className="mb-6">
              <div className="font-medium mb-2">Departure Time</div>
              <div className="flex gap-2 flex-wrap">
                {["morning", "afternoon", "evening", "night"].map((t) => (
                  <button
                    key={t}
                    className={`px-3 py-2 rounded border ${timeOfDay.includes(t) ? "bg-black text-white" : ""}`}
                    onClick={() => setTimeOfDay((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-black text-white rounded-xl py-3" onClick={() => { setShowFilter(false); }}>Apply</button>
              <button className="flex-1 border rounded-xl py-3" onClick={() => { resetFilters(); }}>Reset</button>
            </div>

          </div>
        </div>
      )}

      {/* ---------------- Fare Bottom Sheet ---------------- */}
      {showFarePopup && selectedFlight && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-end">
          <div className="w-full bg-white rounded-t-2xl p-4 max-h-[85%] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-lg">{state?.fromCity || "DEL"} → {state?.toCity || "BOM"}</div>
              <IoClose size={22} className="cursor-pointer" onClick={() => setShowFarePopup(false)} />
            </div>

            {/* Fare option: Regular */}
            <div className="border rounded-xl p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">REGULAR</div>
                <button className={`px-3 py-1 rounded-full border ${selectedFare === "regular" ? "bg-black text-white" : ""}`} onClick={() => setSelectedFare("regular")}>
                  {selectedFare === "regular" ? "Selected" : "Select"}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold">₹{selectedFlight.price}</div>
                  <div className="text-sm text-green-600">Get ₹220 off with CTDOM</div>
                </div>
                <div className="text-sm text-gray-500">
                  <div>📅 Date change fee from ₹3399</div>
                  <div>❌ Cancellation fee from ₹4399</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-700">
                <div>🍽 Paid Meal</div>
                <div>💺 Paid Seat</div>
                <div>🎒 7 kg Cabin</div>
                <div>🧳 15 kg Check-in</div>
              </div>
            </div>

            {/* Fare option: Flexi */}
            <div className="border rounded-xl p-4 mb-40">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">FLEXI</div>
                <button className={`px-3 py-1 rounded-full border ${selectedFare === "flexi" ? "bg-black text-white" : ""}`} onClick={() => setSelectedFare("flexi")}>
                  {selectedFare === "flexi" ? "Selected" : "Select"}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold">₹{selectedFlight.price + 500}</div>
                  <div className="text-sm text-green-600">Get ₹220 off with CTDOM</div>
                </div>
                <div className="text-sm text-gray-500">
                  <div>📅 Date change from ₹400</div>
                  <div>✔ Free Cancellation</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-700">
                <div>🍴 Free Meal</div>
                <div>💺 Free Seat</div>
                <div>🎒 7 kg Cabin</div>
                <div>🧳 15 kg Check-in</div>
              </div>
            </div>

            {/* Continue Fixed Bottom */}
           <div className="fixed bottom-0 left-0 w-full bg-white p-4 pb-12 border-t shadow-lg z-50">
  <div className="flex items-center justify-between space-x-4">
    <div className="flex flex-col mb-8">
      <div className="font-semibold text-lg">
        ₹{selectedFlight.price}{selectedFare === "flexi" ? " +500" : ""}
      </div>
      <div className="text-sm text-green-600">Get ₹220 off with CTDOM</div>
    </div>
    <button
      className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition mb-4"
      onClick={handleContinue}
    >
      Continue
    </button>
  </div>
</div>


          </div>
        </div>
      )}
    </div>
  );
};

export default FlightResults;
