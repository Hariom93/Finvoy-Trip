import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const Review = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { flight, fare } = state || {};

  if (!flight) {
    return (
      <div className="p-4 text-center">
        <p>No flight selected. Please go back and select a flight.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 pb-32">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <IoIosArrowBack
          size={26}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <div className="flex-1">
          <div className="font-semibold text-[17px]">
            {state?.fromCity || "New Delhi"} → {state?.toCity || "Mumbai"}
          </div>
          <div className="text-sm text-gray-500">
            {flight.date || "10 Dec"} • 1 Traveller • Economy
          </div>
        </div>
      </div>

      {/* Flight Card */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <div className="font-semibold text-[16px]">{flight.airline}</div>
            <div className="text-xs text-gray-500">{flight.flightNo}</div>
          </div>

          <div className="text-lg font-semibold">₹{flight.price}</div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div>
            <div className="text-lg font-bold">{flight.departure}</div>
            <div className="text-xs text-gray-500">
              New Delhi<br />Indira Gandhi Airport (T1)
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-500">{flight.durationText}</div>
            <div className="text-sm text-gray-500">{flight.stops}</div>
          </div>

          <div>
            <div className="text-lg font-bold">{flight.arrival}</div>
            <div className="text-xs text-gray-500">
              Mumbai<br />Chhatrapati Shivaji Airport (T2)
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-2">
          Baggage: {flight.baggage}
        </div>
      </div>

      {/* Fare Details */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="font-semibold text-[15px] mb-2">
          {fare.toUpperCase()} Fare Details
        </div>

        {fare === "regular" ? (
          <div className="text-sm text-gray-600 leading-relaxed">
            Cancellation fee from ₹4399 <br />
            Date change fee from ₹3399 <br />
            Paid Meal • Paid Seat <br />
            7 kg Cabin • 15 kg Check-in
          </div>
        ) : (
          <div className="text-sm text-gray-600 leading-relaxed">
            Free Cancellation <br />
            Date change from ₹400 <br />
            Free Meal • Free Seat <br />
            7 kg Cabin • 15 kg Check-in
          </div>
        )}
      </div>

      {/* ⭐ SuperCoin Section -- (image जैसा same) */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="font-semibold text-[15px]">Save more with</span>
          <span className="text-blue-600 font-semibold">SuperCoin</span>
          <FiInfo size={16} className="text-gray-500" />
        </div>

        <div className="text-sm text-gray-600">
          We couldn’t find a Flipkart account associated with your mobile number.
        </div>
      </div>

      {/* 💰 Price Breakup Section */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="font-semibold text-[15px] mb-4">Price breakup</div>

        <div className="flex justify-between text-sm mb-2">
          <span>Base Fare (1 traveller)</span>
          <span>₹5,239</span>
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span>Taxes</span>
          <span>₹896</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between text-[16px] font-semibold mt-2">
          <span>Total</span>
          <span>₹6,135</span>
        </div>
      </div>

      {/* EMI Box */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-medium">Pay in 3 interest free EMIs</span>
            <br />
            <span className="text-gray-500 text-xs">with your credit card</span>
          </div>
          <div className="text-right text-sm">
            ₹2,045/mo <br />
            <span className="text-blue-600 text-xs cursor-pointer">
              View plans
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Continue Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t shadow-lg mb-14">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[18px] font-semibold">₹6,135</div>
         <button
  className="bg-orange-500 text-white px-6 py-2 rounded-xl text-[16px] hover:bg-orange-600 transition"
  onClick={() =>
  navigate("/seats", {
    state: {
      flight,
      fare,
      fromCity: state?.fromCity,
      toCity: state?.toCity,
    },
  })
}

>
  Continue
</button>

        </div>

        <div className="text-blue-600 text-xs cursor-pointer">View breakup</div>
      </div>
    </div>
  );
};

export default Review;
