import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import coinLogo from "../assets/supercoins-chip-icon.webp";
import Img1 from "../assets/Img1.jpg"; // replace with your Flights image
import Img2 from "../assets/Img2.webp"; // replace with your Holidays image
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MainHome() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <img src={logo} alt="Logo" className="h-24" />

        <div className="border border-gray-300 flex gap-2 rounded-full text-sm px-3 py-1">
          <img src={coinLogo} className="h-5" alt="Coin Logo" />
          <p>0</p>
        </div>
      </div>

      {/* Welcome Box */}
      {visible && (
        <div className="bg-blue-100 border border-gray-300 rounded-lg p-4 relative w-full max-w-md mx-auto mt-6 shadow-md">
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <h2 className="text-gray-800 font-semibold text-lg mb-1">
            Welcome to Cleartrip
          </h2>
          <p className="text-gray-600 text-sm">
            Save big with our offers, deals and supercoins!
          </p>
        </div>
      )}

      {/* Travel Boxes */}
      <div className="flex flex-wrap gap-4 p-4 mt-6 justify-center">
        {/* Flights Box */}
        <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
          <img src={Img1} alt="Flights" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold">Flights</h3>
          <p className="text-gray-400 text-sm mt-1">Up to 25% off</p>
        </div>

        {/* Holidays Box */}
        <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
          <img src={Img2} alt="Holidays" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold">Holidays</h3>
          <p className="text-gray-400 text-sm mt-1">Plan your trip</p>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </>
  );
}
