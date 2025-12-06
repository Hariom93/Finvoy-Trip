import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyTrips() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Active", icon: "💳", path: "/active" },
    { title: "Flight", icon: "✈️", path: "/flight" },
   
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-24 px-4">
      {/* HEADER */}
      <h2 className="text-2xl font-semibold pt-8 px-4">My Trips</h2>

      {/* MENU SECTION */}
      <div className="flex gap-6 overflow-x-auto mt-4 pb-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            // onClick={() => navigate(item.path)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow
                ${index === 0 ? "bg-black text-white" : "bg-gray-200"}
              `}
            >
              {item.icon}
            </div>
            <p className="text-sm mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* EMPTY TRIP AREA */}
      <div className="mt-10 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7658/7658978.png"
          className="w-52 mx-auto"
          alt="No Trips"
        />

        <h3 className="text-2xl font-semibold mt-6">No upcoming trip... for now!</h3>

        <p className="text-gray-600 mt-2">
          Time to dust off the bags and start planning your next adventure
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white px-8 py-3 rounded-xl text-lg"
        >
          Start Searching
        </button>
      </div>

     
    </div>
  );
}
