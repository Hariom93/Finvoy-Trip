import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  IoIosArrowBack, 
  IoIosArrowForward,
  IoIosCheckmarkCircle,
  IoIosInformationCircle 
} from "react-icons/io";
import { 
  FiInfo, 
  FiCreditCard,
  FiShield
} from "react-icons/fi";
import { 
  MdFlight, 
  MdLocalOffer,
  MdEmojiEvents,
  MdPriceCheck,
  MdSecurity
} from "react-icons/md";
import { 
  FaRupeeSign, 
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaSuperpowers
} from "react-icons/fa";
import { 
  BsBagCheck, 
  BsClock,
  BsChevronRight
} from "react-icons/bs";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { TbPlaneInflight } from "react-icons/tb";

const Review = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { flight, fare, fromCity = "New Delhi", toCity = "Mumbai" } = state || {};
  
  const [showPriceBreakup, setShowPriceBreakup] = useState(false);
  const [showSuperCoinInfo, setShowSuperCoinInfo] = useState(false);

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">✈️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">No Flight Selected</h2>
          <p className="text-gray-600 mb-6">Please go back and select a flight to continue</p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-shadow"
            onClick={() => navigate(-1)}
          >
            ← Go Back to Flights
          </button>
        </div>
      </div>
    );
  }

  const fareType = fare === "flexi" ? "FLEXI PLUS" : "REGULAR";
  const totalAmount = fare === "flexi" ? flight.price + 500 : flight.price;
  const baseFare = Math.round(totalAmount * 0.85);
  const taxes = totalAmount - baseFare;
  const emiAmount = Math.round(totalAmount / 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-32">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <IoIosArrowBack size={20} className="lg:ml-0 ml-1 text-white" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-white font-bold text-lg truncate">
              {fromCity.split(",")[0]} → {toCity.split(",")[0]}
            </h1>
            <p className="text-blue-100 text-sm truncate">
              {flight.date || "10 Dec"} • 1 Traveller • Economy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-full">
              <FaRegUserCircle size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 sm:px-4 md:px-6 pt-4 space-y-3 md:space-y-4">
        {/* Flight Card - Premium */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <MdFlight size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{flight.airline}</h3>
                  <p className="text-gray-500 text-sm">{flight.flightNo || "AI-203"}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">₹{totalAmount}</div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${fare === "flexi" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                  {fareType}
                </div>
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div className="p-4">
            {/* Time and Duration Row */}
           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
               <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="p-1.5 bg-blue-100 rounded-full">
                    <GiAirplaneDeparture size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{flight.departure}</div>
                    <div className="text-xs text-gray-500">New Delhi (DEL)</div>
                  </div>
                </div>
              </div>

              <div className="text-center w-full md:flex-1 px-0 md:px-4">
                <div className="text-gray-600 text-sm">{flight.durationText || "5h 15m"}</div>
                <div className="flex items-center justify-center my-1 w-full gap-2 px-2 sm:px-4">
  <div className="flex-1 h-0.5 bg-blue-400"></div>

  <div>
    <div
      className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
        flight.stops === "Non-stop"
          ? "bg-green-100 text-green-700"
          : "bg-blue-100 text-blue-700"
      }`}
    >
      {flight.stops || "1 stop"}
    </div>
  </div>

  <div className="flex-1 h-0.5 bg-blue-400"></div>
</div>

                <div className="text-xs text-gray-500">
                  {flight.layoverTime ? `${flight.layoverTime} layover` : "Direct flight"}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{flight.arrival}</div>
                    <div className="text-xs text-gray-500">Mumbai (BOM)</div>
                  </div>
                  <div className="p-1.5 bg-purple-100 rounded-full">
                    <GiAirplaneArrival size={14} className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Airport Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="font-medium text-gray-700">Indira Gandhi Airport</div>
                <div className="text-gray-500 text-xs">Terminal 1 • International</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="font-medium text-gray-700">Chhatrapati Shivaji</div>
                <div className="text-gray-500 text-xs">Terminal 2 • Domestic</div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-gray-100 pt-3">
             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5">
                  <BsBagCheck size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{flight.baggage || "7kg cabin, 15kg checkin"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BsClock size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{flight.refundable ? "Refundable" : "Non-refundable"}</span>
                </div>
              </div>
             <div className="text-left sm:text-right">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{flight.rating || 4.2}</span>
                  <span className="text-gray-500 text-sm">({flight.totalReviews || "2.1k"})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fare Benefits Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${fare === "flexi" ? "bg-purple-100" : "bg-blue-100"}`}>
                <MdPriceCheck size={18} className={fare === "flexi" ? "text-purple-600" : "text-blue-600"} />
              </div>
              <h3 className="font-bold text-gray-800">{fareType} Benefits</h3>
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fare === "flexi" ? (
                <>
                  <div className="flex items-center gap-2">
                    <IoIosCheckmarkCircle size={18} className="text-green-500" />
                    <span className="text-sm text-gray-700">Free Cancellation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosCheckmarkCircle size={18} className="text-green-500" />
                    <span className="text-sm text-gray-700">Date Change (₹400)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosCheckmarkCircle size={18} className="text-green-500" />
                    <span className="text-sm text-gray-700">Free Meal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoIosCheckmarkCircle size={18} className="text-green-500" />
                    <span className="text-sm text-gray-700">Free Seat Selection</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-red-500">₹</span>
                    </div>
                    <span className="text-sm text-gray-700">Cancellation: ₹4,399</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-red-500">₹</span>
                    </div>
                    <span className="text-sm text-gray-700">Date Change: ₹3,399</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                      🍽
                    </div>
                    <span className="text-sm text-gray-700">Paid Meal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                      💺
                    </div>
                    <span className="text-sm text-gray-700">Paid Seat</span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <BsBagCheck size={12} />
              <span>{flight.baggage?.split(",")[0] || "7kg Cabin"}</span>
              <span>•</span>
              <span>{flight.baggage?.split(",")[1] || "15kg Check-in"}</span>
            </div>
          </div>
        </div>

        {/* SuperCoin Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg">
                  <FaSuperpowers size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Save more with</h3>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-orange-600">SuperCoin</span>
                    <button onClick={() => setShowSuperCoinInfo(!showSuperCoinInfo)}>
                      <IoIosInformationCircle size={16} className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Earn up to</div>
                <div className="text-lg font-bold text-orange-600">145 SuperCoins</div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-3">
              We couldn't find a Flipkart account associated with your mobile number.
            </div>
            
            <a
  href="https://www.flipkart.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block text-center py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg transition-shadow"
>
  Link your Flipkart account
</a>
            
            {showSuperCoinInfo && (
              <div className="mt-3 p-3 bg-white/50 rounded-lg border border-yellow-300">
                <p className="text-xs text-gray-600">
                  SuperCoins can be used for future bookings, shopping, and more. 
                  1 SuperCoin = ₹1 value.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div 
            className="p-4 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setShowPriceBreakup(!showPriceBreakup)}
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <FaRupeeSign size={14} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-800">Price breakup</h3>
            </div>
            <BsChevronRight size={16} className={`text-gray-500 transition-transform ${showPriceBreakup ? 'rotate-90' : ''}`} />
          </div>
          
          {showPriceBreakup && (
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Base Fare (1 traveller)</span>
                <span className="font-medium">₹{baseFare.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taxes & Surcharges</span>
                <span className="font-medium">₹{taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Fuel Charges</span>
                <span className="font-medium">₹418</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">GST</span>
                <span className="font-medium">₹180</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Amount</span>
                <span className="text-2xl font-bold text-gray-800">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          )}
          
          {/* EMI Option */}
          <div className="p-4 border-t border-gray-100 bg-blue-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <FiCreditCard size={14} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Pay in 3 interest-free EMIs</div>
                  <div className="text-xs text-gray-500">with your credit card</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">₹{emiAmount}/mo</div>
                <div className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">
                  View plans
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secure Booking Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-200 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <FiShield size={18} className="text-emerald-600" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-800 text-sm">Secure Booking</div>
              <div className="text-xs text-gray-600">
                Your payment is secured with 256-bit SSL encryption
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 lg:mb-0 mb-30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <MdLocalOffer size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-800 text-sm">Special Offers</div>
              <div className="text-xs text-gray-600">
                Get 10% instant discount on Axis Bank Cards
              </div>
            </div>
            <button className="text-purple-600 font-medium text-sm hover:text-purple-700">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Continue Button - Bottom */}
      <div className="fixed lg:bottom-0 bottom-18 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-white/90 backdrop-blur-sm border-t border-gray-200/50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-gray-500 text-sm">Total Amount</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">₹{totalAmount.toLocaleString()}</span>
                <span className="text-green-600 text-sm font-medium">
                  Save ₹{fare === "flexi" ? flight.discount + 500 : flight.discount} with CTDOM
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <MdSecurity size={12} />
                <span>Secure booking • Free cancellation • Best price</span>
              </div>
            </div>
            
            <button
              onClick={() => navigate("/seats", {
                state: {
                  flight,
                  fare,
                  fromCity,
                  toCity,
                  totalAmount
                }
              })}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-base md:text-lg rounded-xl hover:shadow-xl hover:scale-105 transition-all shadow-lg"
            >
              Continue to Seat Selection →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;