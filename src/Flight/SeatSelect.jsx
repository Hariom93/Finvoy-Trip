import { useState } from "react";
import { 
  IoIosArrowBack, 
  IoIosArrowForward,
  IoIosCheckmarkCircle,
  IoIosCloseCircle 
} from "react-icons/io";
import { 
  FiShield, 
  FiPackage,
  FiCoffee,
  FiCheck,
  FiPlus
} from "react-icons/fi";
import { 
  MdFlight, 
  MdLocalOffer,
  MdLuggage,
  MdRestaurant,
  MdAirlineSeatReclineExtra
} from "react-icons/md";
import { 
  FaRupeeSign, 
  FaRegHeart,
  FaRegCalendarAlt,
  FaChair
} from "react-icons/fa";
import { 
  BsClock,
  BsChevronRight,
  BsShieldCheck
} from "react-icons/bs";
import { GiAirplane } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";

// ---------------- SEAT TYPE LOGIC ----------------
function seatType(row, seatLetter, bookedSeats) {
  const seatID = `${row}${seatLetter}`;

  if (bookedSeats.includes(seatID)) {
    return { type: "booked", price: null };
  }

  if (row <= 5) return { type: "free", price: 0 };
  if (row <= 10) return { type: "paid150", price: 150 };
  if (row <= 20) return { type: "paid200", price: 200 };

  return { type: "paid350", price: 350 };
}

const seatColors = {
  free: "bg-gradient-to-br from-green-400 to-emerald-500",
  paid150: "bg-gradient-to-br from-blue-400 to-blue-500",
  paid200: "bg-gradient-to-br from-indigo-400 to-purple-500",
  paid350: "bg-gradient-to-br from-purple-500 to-pink-500",
  booked: "bg-gradient-to-br from-gray-300 to-gray-400",
};

const seatLabels = {
  free: "Free",
  paid150: "₹150",
  paid200: "₹200",
  paid350: "₹350",
  booked: "Booked"
};

// ---------------- SINGLE SEAT BOX ----------------
function Seat({ seat, row, seatLetter, selected, setSelected }) {
  const seatID = `${row}${seatLetter}`;
  const isSelected = selected === seatID;
  const color = seatColors[seat.type];

  if (seat.type === "booked") {
    return (
      <div className="relative group">
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${color} cursor-not-allowed`}>
          <span className="text-white text-xs md:text-sm">✗</span>
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Booked
        </div>
      </div>
    );
  }

  return (
    <button
      className={`relative group w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
        isSelected 
          ? "bg-gradient-to-br from-orange-500 to-red-500 text-white ring-2 ring-orange-400 ring-offset-1 scale-110" 
          : `${color} text-white hover:scale-105`
      }`}
      onClick={() => setSelected(seatID)}
    >
      <span className="font-semibold text-xs md:text-sm">{seatLetter}</span>
      
      {isSelected && (
        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center">
          <FiCheck size={8} className="text-white" />
        </div>
      )}

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Row {row} • {seatLabels[seat.type]}
      </div>
    </button>
  );
}

// ---------------- SEAT MAP COMPONENT ----------------
function SeatMap() {
  const [selected, setSelected] = useState(null);

  const bookedSeats = ["3B", "7F", "9C", "14A", "22F", "5D", "12C", "18E", "25B", "29F"];
  const lettersLeft = ["A", "B", "C"];
  const lettersRight = ["D", "E", "F"];

  const generateRows = () => {
    const rows = [];
    for (let row = 1; row <= 31; row++) {
      rows.push({
        row,
        left: lettersLeft.map((l) => seatType(row, l, bookedSeats)),
        right: lettersRight.map((l) => seatType(row, l, bookedSeats)),
      });
    }
    return rows;
  };

  const rows = generateRows();

  return (
    <div className="overflow-x-auto">
      {/* Airplane Structure */}
      <div className="relative mb-4">
        {/* Cockpit */}
        <div className="w-16 h-8 bg-gray-800 rounded-t-full mx-auto mb-2"></div>
        
        {/* Cabin */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-xl p-4 border-2 border-gray-200">
          {/* Seat Map Container */}
          <div className="flex flex-col items-center max-h-[400px] overflow-y-auto pr-2">
            {/* Exit Signs */}
            <div className="flex justify-between w-full mb-2 px-4">
              <div className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">EXIT</div>
              <div className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">EXIT</div>
            </div>

            {/* Seats Grid */}
            <div className="grid grid-cols-10 gap-2 md:gap-3">
              {rows.map((r) => (
                <div key={r.row} className="flex items-center gap-1 md:gap-2 col-span-10">
                  {/* Left Section */}
                  <div className="flex gap-1 md:gap-2">
                    {["A", "B", "C"].map((letter, i) => (
                      <Seat
                        key={letter}
                        seat={r.left[i]}
                        row={r.row}
                        seatLetter={letter}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ))}
                  </div>

                  {/* Aisle */}
                  <div className="w-8 md:w-12 h-8 bg-gray-200 rounded-lg flex items-center justify-center mx-1">
                    <span className="text-gray-500 text-xs font-bold">←→</span>
                  </div>

                  {/* Right Section */}
                  <div className="flex gap-1 md:gap-2">
                    {["D", "E", "F"].map((letter, i) => (
                      <Seat
                        key={letter}
                        seat={r.right[i]}
                        row={r.row}
                        seatLetter={letter}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ))}
                  </div>

                  {/* Row Number */}
                  <div className="w-6 text-center font-bold text-gray-700 text-sm">{r.row}</div>
                </div>
              ))}
            </div>

            {/* Exit Signs Bottom */}
            <div className="flex justify-between w-full mt-2 px-4">
              <div className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">EXIT</div>
              <div className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">EXIT</div>
            </div>
          </div>
        </div>

        {/* Tail */}
        <div className="w-8 h-12 bg-gray-800 rounded-b-full mx-auto mt-2"></div>
      </div>

      {/* Selected Seat Info */}
      {selected && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Selected Seat</div>
              <div className="text-xl font-bold text-gray-800">{selected}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Price</div>
              <div className="text-xl font-bold text-emerald-600">
                ₹{(() => {
                  const row = parseInt(selected.slice(0, -1));
                  if (row <= 5) return 0;
                  if (row <= 10) return 150;
                  if (row <= 20) return 200;
                  return 350;
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------- MAIN PAGE ----------------
export default function SeatSelection() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const flightDetails = state?.flight || {
    airline: "IndiGo",
    from: "DEL",
    to: "BOM",
    departure: "06:55",
    arrival: "10:10",
    date: "12 Mar 2025",
    price: 6135,
  };

  const [activeTab, setActiveTab] = useState("seat");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedBag, setSelectedBag] = useState(null);
  const [insuranceAdded, setInsuranceAdded] = useState(false);

  // ---------------- MEAL SELECTION ----------------
  const MealSelection = () => {
    const [filter, setFilter] = useState("all");

    const meals = [
      {
        id: 1,
        name: "Jain Special Thali",
        description: "Vegetarian Jain meal with fresh vegetables",
        price: 450,
        type: "veg",
        icon: "🥗",
        popular: true,
      },
      {
        id: 2,
        name: "Paneer Tikka Sandwich",
        description: "Grilled paneer sandwich with mint chutney",
        price: 400,
        type: "veg",
        icon: "🥪",
        popular: false,
      },
      {
        id: 3,
        name: "Chicken Biryani Combo",
        description: "Hyderabadi chicken biryani with raita",
        price: 550,
        type: "nonveg",
        icon: "🍗",
        popular: true,
      },
      {
        id: 4,
        name: "Continental Breakfast",
        description: "Eggs, toast, fruits, and juice",
        price: 500,
        type: "nonveg",
        icon: "🍳",
        popular: false,
      },
      {
        id: 5,
        name: "Veg Fried Rice",
        description: "Chinese style vegetable fried rice",
        price: 420,
        type: "veg",
        icon: "🍚",
        popular: false,
      },
      {
        id: 6,
        name: "Fish Curry Meal",
        description: "Traditional fish curry with rice",
        price: 600,
        type: "nonveg",
        icon: "🐟",
        popular: false,
      },
    ];

    const filteredMeals = filter === "all" ? meals : meals.filter(m => m.type === filter);

    return (
      <div className="space-y-4">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full font-medium transition-all flex-shrink-0 ${
              filter === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Meals
          </button>
          <button
            onClick={() => setFilter("veg")}
            className={`px-4 py-2 rounded-full font-medium transition-all flex-shrink-0 flex items-center gap-2 ${
              filter === "veg"
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>🥗</span> Veg
          </button>
          <button
            onClick={() => setFilter("nonveg")}
            className={`px-4 py-2 rounded-full font-medium transition-all flex-shrink-0 flex items-center gap-2 ${
              filter === "nonveg"
                ? "bg-gradient-to-r from-red-500 to-orange-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>🍗</span> Non-Veg
          </button>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredMeals.map((meal) => (
            <div
              key={meal.id}
              className={`bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow ${
                selectedMeal === meal.id ? "border-orange-500 ring-1 ring-orange-500" : "border-gray-200"
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{meal.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-800">{meal.name}</h3>
                      <p className="text-gray-600 text-sm">{meal.description}</p>
                    </div>
                  </div>
                  {meal.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xl font-bold text-gray-800">₹{meal.price}</div>
                  <button
                    onClick={() => setSelectedMeal(meal.id === selectedMeal ? null : meal.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedMeal === meal.id
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                    }`}
                  >
                    {selectedMeal === meal.id ? (
                      <span className="flex items-center gap-2">
                        <FiCheck size={16} /> Added
                      </span>
                    ) : (
                      "Add Meal"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ---------------- BAGGAGE SELECTION ----------------
  const BaggageSelection = () => {
    const baggageOptions = [
      {
        id: 1,
        kg: 5,
        price: 1200,
        icon: "🎒",
        description: "Additional 5kg check-in baggage",
      },
      {
        id: 2,
        kg: 10,
        price: 2200,
        icon: "🧳",
        description: "Additional 10kg check-in baggage",
        popular: true,
      },
      {
        id: 3,
        kg: 15,
        price: 3200,
        icon: "💼",
        description: "Additional 15kg check-in baggage",
      },
      {
        id: 4,
        kg: 20,
        price: 4500,
        icon: "🧷",
        description: "Additional 20kg check-in baggage",
      },
      {
        id: 5,
        kg: 25,
        price: 5800,
        icon: "📦",
        description: "Additional 25kg check-in baggage",
      },
      {
        id: 6,
        kg: 30,
        price: 7000,
        icon: "🚚",
        description: "Additional 30kg check-in baggage",
      },
    ];

    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <MdLuggage size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Baggage Allowance</h3>
              <p className="text-gray-600 text-sm">Base: 7kg cabin + 15kg check-in</p>
            </div>
          </div>
        </div>

        {/* Baggage Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {baggageOptions.map((bag) => (
            <div
              key={bag.id}
              className={`bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all ${
                selectedBag === bag.id ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-200"
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-4xl">{bag.icon}</div>
                  {bag.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <h3 className="font-bold text-gray-800 text-lg">+{bag.kg} KG</h3>
                <p className="text-gray-600 text-sm mb-3">{bag.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xl font-bold text-gray-800">₹{bag.price}</div>
                    <div className="text-gray-500 text-xs">Additional</div>
                  </div>
                  <button
                    onClick={() => setSelectedBag(bag.id === selectedBag ? null : bag.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedBag === bag.id
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                    }`}
                  >
                    {selectedBag === bag.id ? "Added" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ---------------- INSURANCE SECTION ----------------
  const InsuranceSection = () => {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <BsShieldCheck size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">Travel Insurance</h3>
              <p className="text-gray-600 text-sm">Protect your journey for just ₹139</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-800">₹139</div>
              <div className="text-gray-500 text-xs">per traveler</div>
            </div>
          </div>
        </div>

        {/* Insurance Card */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">digiT</span>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-gray-800">digit Travel Insurance</h2>
                  <p className="text-gray-600 text-sm">Comprehensive coverage for your trip</p>
                </div>
              </div>
              
              <button
                onClick={() => setInsuranceAdded(!insuranceAdded)}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all ${
                  insuranceAdded
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                }`}
              >
                {insuranceAdded ? (
                  <span className="flex items-center gap-2">
                    <FiCheck size={18} /> Added
                  </span>
                ) : (
                  "Add Insurance"
                )}
              </button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {[
                { icon: "✈️", label: "Flight Delay", value: "₹2,500* for 2+ hrs" },
                { icon: "🎒", label: "Baggage Loss", value: "₹15,000* coverage" },
                { icon: "🩺", label: "Medical Emergency", value: "₹1 Lakh* coverage" },
                { icon: "🏨", label: "Trip Cancellation", value: "₹10,000* coverage" },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <div className="font-medium text-gray-800 text-sm">{benefit.label}</div>
                  <div className="text-gray-600 text-xs">{benefit.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-32">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <IoIosArrowBack size={20} className="lg:ml-0 ml-1 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white font-bold text-lg">Customize Your Trip</h1>
            <p className="text-blue-100 text-sm">Add extras for a better journey</p>
          </div>
        </div>

        {/* Flight Info */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <MdFlight size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold">
                  {flightDetails.from} → {flightDetails.to}
                </div>
                <div className="text-blue-100 text-sm">
                  {flightDetails.departure} • {flightDetails.date}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-bold">₹{flightDetails.price}</div>
              <div className="text-blue-100 text-xs">Base Fare</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 sm:px-4 md:px-6 pt-4 space-y-4">
        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { id: "seat", label: "Seat", icon: "💺" },
            { id: "meal", label: "Meal", icon: "🍽️" },
            { id: "baggage", label: "Baggage", icon: "🧳" },
            { id: "insurance", label: "Insurance", icon: "🛡️" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
              {activeTab === tab.id && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
          {/* Seat Legend */}
          {activeTab === "seat" && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-4 justify-center mb-4">
                {Object.entries(seatLabels).map(([type, label]) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded ${seatColors[type]}`}></div>
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
              <SeatMap />
            </div>
          )}

          {activeTab === "meal" && <MealSelection />}
          {activeTab === "baggage" && <BaggageSelection />}
          {activeTab === "insurance" && <InsuranceSection />}
        </div>

        {/* Selected Items Summary */}
        <div className="lg:mb-0 mb-35 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-4">
          <h3 className="font-bold text-gray-800 mb-3">Selected Add-ons</h3>
          <div className="space-y-2">
            {selectedMeal && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Meal Selection</span>
                <span className="font-bold text-gray-800">₹450</span>
              </div>
            )}
            {selectedBag && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Additional Baggage</span>
                <span className="font-bold text-gray-800">₹2,200</span>
              </div>
            )}
            {insuranceAdded && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Travel Insurance</span>
                <span className="font-bold text-gray-800">₹139</span>
              </div>
            )}
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">Total Add-ons</span>
              <span className="text-xl font-bold text-blue-600">₹2,789</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed lg:bottom-0 bottom-18 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-white/90 backdrop-blur-sm border-t border-gray-200/50 shadow-2xl z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-gray-500 text-sm">Total Amount</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">
                  ₹{flightDetails.price + 2789}
                </span>
                <span className="text-green-600 text-sm font-medium">
                  Base: ₹{flightDetails.price} + Add-ons: ₹2,789
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <FiCheck className="text-green-500" />
                <span>Customizable • Free cancellation • Secure payment</span>
              </div>
            </div>
            
            <button
              onClick={() => {
                if (activeTab === "seat") setActiveTab("meal");
                else if (activeTab === "meal") setActiveTab("baggage");
                else if (activeTab === "baggage") setActiveTab("insurance");
                else navigate("/traveller-details", { state: { ...state, flight: flightDetails } });
              }}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-base md:text-lg rounded-xl hover:shadow-xl hover:scale-105 transition-all shadow-lg"
            >
              {activeTab === "insurance" ? "Continue to Traveller Details →" : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}