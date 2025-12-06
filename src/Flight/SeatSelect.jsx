import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
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
  free: "bg-green-200",
  paid150: "bg-blue-200",
  paid200: "bg-indigo-300",
  paid350: "bg-purple-300",
  booked: "bg-gray-300 text-red-500 font-bold",
};

// ---------------- SINGLE SEAT BOX ----------------

function Seat({ seat, row, seatLetter, selected, setSelected }) {
  const seatID = `${row}${seatLetter}`;
  const isSelected = selected === seatID;
  const color = seatColors[seat.type];

  if (seat.type === "booked") {
    return (
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
        ❌
      </div>
    );
  }

  return (
    <button
      className={`w-9 h-9 rounded-lg flex items-center justify-center border 
        ${isSelected ? "bg-green-600 text-white" : color}`}
      onClick={() => setSelected(seatID)}
    >
      {seatLetter}
    </button>
  );
}

// ---------------- FULL SEAT MAP ----------------

function SeatMap() {
  const [selected, setSelected] = useState(null);

  const bookedSeats = ["3B", "7F", "9C", "14A", "22F"]; // API se aayega

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
    <div>
      {rows.map((r) => (
        <div key={r.row} className="flex items-center gap-6 my-2">
          
          {/* LEFT 3 seats */}
          <div className="flex gap-2">
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

          {/* Row Number */}
          <div className="w-6 text-center font-bold">{r.row}</div>

          {/* RIGHT 3 seats */}
          <div className="flex gap-2">
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

        </div>
      ))}
    </div>
  );
}

// ---------------- MAIN PAGE ----------------

export default function SeatSelection() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const flightDetails = state?.flightDetails || {
    from: "DEL",
    to: "NAG",
    date: "12 Mar 2025",
    price: 6135,
  };

  const [activeTab, setActiveTab] = useState("seat");
  const [activeSector, setActiveSector] = useState("1");

  function BaggageSelection() {
  const [selectedBag, setSelectedBag] = useState(null);

  const baggageOptions = [
    {
      id: 1,
      kg: 3,
      price: 1700,
      icon: "🧳",
    },
    {
      id: 2,
      kg: 5,
      price: 2600,
      icon: "🎒",
    },
    {
      id: 3,
      kg: 10,
      price: 4300,
      icon: "💼",
    },
    {
      id: 4,
      kg: 15,
      price: 6400,
      icon: "🧷",
    },
  ];

  return (
    <div className="flex flex-col gap-4">

      {baggageOptions.map((bag) => (
        <div
          key={bag.id}
          className="flex items-center gap-4 bg-white p-3 rounded-xl shadow"
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-xl bg-orange-100 flex items-center justify-center text-4xl">
            {bag.icon}
          </div>

          {/* Details */}
          <div className="flex-1">
            <p className="font-semibold">Additional {bag.kg} KG</p>
            <p className="font-bold mt-1">₹{bag.price}</p>
          </div>

          {/* Add button */}
          <button
            onClick={() => setSelectedBag(bag.id)}
            className={`px-4 py-2 rounded-xl border ${
              selectedBag === bag.id
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            {selectedBag === bag.id ? "Added" : "Add"}
          </button>
        </div>
      ))}

      {/* Bottom Bar */}
      <div className="mt-4 text-gray-700 font-medium">
        Additional baggage: {selectedBag ? baggageOptions.find(b => b.id === selectedBag).kg : 0} kg
      </div>
    </div>
  );
}

  function MealSelection() {
  const [filter, setFilter] = useState("all");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const meals = [
    {
      id: 1,
      name: "Jain Special + Beverage",
      price: 400,
      type: "veg",
      img: ".Jain.png",
    },
    {
      id: 2,
      name: "Paneer Tikka Sandwich + Beverage",
      price: 400,
      type: "veg",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "6E Eats choice of the day (Non-Veg) + Beverage",
      price: 400,
      type: "nonveg",
      img: "https://via.placeholder.com/100",
    },
  ];

  const filteredMeals =
    filter === "all" ? meals : meals.filter((m) => m.type === filter);

  return (
    <div>

      {/* FILTER TABS */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded-full border ${
            filter === "all" ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("veg")}
          className={`px-4 py-1 rounded-full border flex items-center gap-1 ${
            filter === "veg" ? "bg-green-600 text-white" : "bg-gray-100"
          }`}
        >
          🟢 Veg
        </button>

        <button
          onClick={() => setFilter("nonveg")}
          className={`px-4 py-1 rounded-full border flex items-center gap-1 ${
            filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-100"
          }`}
        >
          🔴 Non-Veg
        </button>
      </div>

      {/* MEAL LIST */}
      <div className="flex flex-col gap-4">
        {filteredMeals.map((meal) => (
          <div key={meal.id} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow">

            {/* Image */}
            <img src={meal.img} className="w-20 h-20 rounded-lg" />

            {/* Details */}
            <div className="flex-1">
              <p className="font-semibold">{meal.name}</p>
              <p className="font-bold mt-1">₹{meal.price}</p>
            </div>

            {/* Add Button */}
            <button
              onClick={() => setSelectedMeal(meal.id)}
              className={`px-4 py-2 rounded-xl border ${
                selectedMeal === meal.id
                  ? "bg-green-600 text-white"
                  : "bg-white"
              }`}
            >
              {selectedMeal === meal.id ? "Added" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

  return (
    <div className="p-4 pb-28">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
<IoIosArrowBack
          size={26}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />        <h1 className="text-xl font-bold">Add-ons</h1>
      </div>

      {/* TOP TABS */}
      <div className="flex justify-around mb-4">
        {["seat", "meal", "baggage", "insurance"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center ${
              activeTab === tab ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              activeTab === tab ? "bg-blue-100" : ""
            }`}>
              {tab === "seat" && "💺"}
              {tab === "meal" && "🍽️"}
              {tab === "baggage" && "🧳"}
              {tab === "insurance" && "❤️"}
            </div>
            <span className="capitalize text-sm mt-1">{tab}</span>
          </button>
        ))}
      </div>

      {/* SECTOR TABS */}
      <div className="flex gap-4 mb-3 mt-2">
        <button
          onClick={() => setActiveSector("1")}
          className={`px-4 py-2 rounded-xl ${
            activeSector === "1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {flightDetails.from} → {flightDetails.to}
        </button>

        <button
          onClick={() => setActiveSector("2")}
          className={`px-4 py-2 rounded-xl ${
            activeSector === "2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          NAG → BOM
        </button>
      </div>

      {/* PRICE LEGEND */}
      <div className="flex gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-green-200 rounded"></div>Free</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-blue-200 rounded"></div>₹150</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-indigo-300 rounded"></div>₹200</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-purple-300 rounded"></div>₹350</div>
      </div>

      {/* MAIN CONTENT */}
      {activeTab === "seat" && <SeatMap />}
      {activeTab === "meal" && <MealSelection />}
{activeTab === "baggage" && <BaggageSelection />}
      {activeTab === "insurance" && <div>Insurance Coming Soon...</div>}

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">₹{flightDetails.price}</div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-xl text-[16px]">
            Continue
          </button>
        </div>
      </div>

    </div>
  );
}
