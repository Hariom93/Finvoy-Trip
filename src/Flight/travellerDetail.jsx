import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaRupeeSign } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import "./travellerDetail.css"; // Custom CSS file

export default function TravellerDetails() {
  // ---------------------- STATES ----------------------
  const [adult, setAdult] = useState(null);
  const [contact, setContact] = useState({
    email: "",
    mobile: "",
  });
  const [gst, setGst] = useState({
    company: "",
    gstNumber: "",
  });
  const navigate = useNavigate();

  // Animation states
  const [showAdultPopup, setShowAdultPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showGstPopup, setShowGstPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [popupAnimation, setPopupAnimation] = useState("");

  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount })
      });

      const order = await res.json();

      const options = {
        key: "9XW8mbc1OZz0qySu9fr6WnIQ",
        amount: order.amount,
        currency: "INR",
        name: "Finvoy Travels",
        description: "Flight Booking Payment",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          navigate("/booking-confirmed", {
            state: { paymentDetails: response }
          });
        },
        prefill: {
          name: travellerName,
          email: travellerEmail,
          contact: travellerMobile,
        },
        theme: {
          color: "#ff5b00",
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  const { state } = useLocation();
  const totalAmount = state?.price || 6135;
  const travellerName = adult?.first + " " + adult?.last;
  const travellerEmail = contact?.email;
  const travellerMobile = contact?.mobile;

  // Adult form temp states
  const [tempAdult, setTempAdult] = useState({
    first: "",
    last: "",
    gender: "",
    age: "",
  });

  // Contact temp
  const [tempContact, setTempContact] = useState({
    email: "",
    mobile: "",
  });

  // GST temp
  const [tempGst, setTempGst] = useState({
    company: "",
    gstNumber: "",
  });

  // Popup handlers with animations
  const openAdultPopup = () => {
    setPopupAnimation("slideInRight");
    setShowAdultPopup(true);
  };

  const openContactPopup = () => {
    setPopupAnimation("slideInLeft");
    setShowContactPopup(true);
  };

  const openGstPopup = () => {
    setPopupAnimation("slideInTop");
    setShowGstPopup(true);
  };

  const closePopup = () => {
    setPopupAnimation("slideOut");
    setTimeout(() => {
      setShowAdultPopup(false);
      setShowContactPopup(false);
      setShowGstPopup(false);
      setShowReviewPopup(false);
    }, 300);
  };

  // ---------------------- SAVE FUNCTIONS ----------------------
  const saveAdult = () => {
    if (!tempAdult.first || !tempAdult.last || !tempAdult.gender || !tempAdult.age) {
      alert("Please fill all adult details");
      return;
    }
    setAdult(tempAdult);
    closePopup();
  };

  const saveContact = () => {
    if (!tempContact.email || !tempContact.mobile) {
      alert("Please fill both email and mobile");
      return;
    }
    setContact(tempContact);
    closePopup();
  };

  const saveGst = () => {
    if (!tempGst.company || !tempGst.gstNumber) {
      alert("Please fill both company name and GST number");
      return;
    }
    setGst(tempGst);
    closePopup();
  };

  const openReviewPopup = () => {
    if (!adult) {
      alert("Please add adult details first");
      return;
    }
    if (!contact.email || !contact.mobile) {
      alert("Please add contact information");
      return;
    }
    setPopupAnimation("fadeIn");
    setShowReviewPopup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 p-2 md:p-4 pb-28 md:pb-32 relative overflow-hidden">
      
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-30 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full translate-y-64 -translate-x-64 opacity-30 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full opacity-20 hidden md:block"></div>

      {/* Floating Icons - Adjusted for mobile */}
      <div className="absolute top-4 md:top-10 right-4 md:right-10 animate-bounce hidden sm:block">
        <GiIndiaGate className="text-orange-300 text-2xl md:text-4xl" />
      </div>
      <div className="absolute bottom-20 md:bottom-32 left-4 md:left-10 animate-pulse hidden sm:block">
        <FaRupeeSign className="text-green-300 text-2xl md:text-4xl" />
      </div>

      {/* -------- Header -------- */}
      <div className="relative z-10 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 p-3 md:p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl shadow-xl">
       <IoIosArrowBack
  size={24}
  onClick={() => navigate(-1)}
  className="
    block
    cursor-pointer
    text-white
    hover:text-blue-200
    p-2
    rounded-full
    bg-white/20
    backdrop-blur-sm
    flex-shrink-0
    z-50
  "
/>
        <div className="flex-1 min-w-0 ml-2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white truncate">Complete Your Journey ✈️</h2>
          <p className="text-blue-100 text-xs md:text-sm truncate">Add traveller details to continue</p>
        </div>
        <div className="hidden md:flex gap-2 ml-auto">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      {/* -------- Main Cards Container -------- */}
      <div className="relative z-10 space-y-4 md:space-y-6 max-w-2xl mx-auto px-2 sm:px-4">

        {/* Adult Card - Gradient */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-purple-100 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <FaUser className="text-white text-base md:text-lg lg:text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">Traveller Profile</h3>
                <p className="text-xs md:text-sm text-gray-600 truncate">
                  {adult ? "✓ Profile complete" : "Who's flying?"}
                </p>
              </div>
            </div>
            <button
              onClick={openAdultPopup}
              className="group relative px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 overflow-hidden touch-target w-full sm:w-auto mt-2 sm:mt-0"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                {adult ? "✏️ Edit" : "➕ Add"}
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {adult && (
            <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl md:rounded-2xl border border-purple-200 animate-slideDown">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                    {adult.first.charAt(0)}{adult.last.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base lg:text-lg font-bold text-gray-800 break-words">
                    {adult.first} {adult.last}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-purple-700 border border-purple-200">
                      {adult.gender}
                    </span>
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-pink-700 border border-pink-200">
                      {adult.age} years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Card - Gradient */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-blue-100 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <div className="flex gap-0.5 md:gap-1">
                  <FaEnvelope className="text-white text-sm md:text-base lg:text-lg" />
                  <FaPhone className="text-white text-sm md:text-base lg:text-lg" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">Contact Details</h3>
                <p className="text-xs md:text-sm text-gray-600 truncate">Updates will be sent here</p>
              </div>
            </div>
            <button
              onClick={openContactPopup}
              className="group relative px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 overflow-hidden touch-target w-full sm:w-auto mt-2 sm:mt-0"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                {contact.email ? "✏️ Edit" : "📞 Add"}
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
            {contact.email ? (
              <div className="p-3 md:p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl md:rounded-2xl border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xs md:text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-800 truncate text-xs md:text-sm lg:text-base">{contact.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3 md:p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl md:rounded-2xl border border-dashed border-blue-300 text-center">
                <p className="text-gray-400 text-xs md:text-sm">✉️ Add Email</p>
              </div>
            )}

            {contact.mobile ? (
              <div className="p-3 md:p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl md:rounded-2xl border border-cyan-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xs md:text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-gray-600">Mobile</p>
                    <p className="font-semibold text-gray-800 truncate text-xs md:text-sm lg:text-base">{contact.mobile}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3 md:p-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-xl md:rounded-2xl border border-dashed border-cyan-300 text-center">
                <p className="text-gray-400 text-xs md:text-sm">📱 Add Mobile</p>
              </div>
            )}
          </div>
        </div>

        {/* GST Card - Gradient */}
        <div className="mb-20 md:mb-16 bg-gradient-to-r from-green-50 via-white to-emerald-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-green-100 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <FaBuilding className="text-white text-base md:text-lg lg:text-xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">GST Details</h3>
                <p className="text-xs md:text-sm text-gray-600 truncate">
                  {gst.company ? "✓ Tax benefits applied" : "Save up to 18%"}
                </p>
              </div>
            </div>
            <button
              onClick={openGstPopup}
              className={`group relative px-4 md:px-6 py-2.5 md:py-3 font-semibold rounded-lg md:rounded-xl shadow-lg transition-all duration-300 overflow-hidden touch-target w-full sm:w-auto mt-2 sm:mt-0 text-sm md:text-base ${
                gst.company
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              } text-white`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {gst.company ? "✏️ Edit GST" : "💰 Add GST"}
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {gst.company ? (
            <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl md:rounded-2xl border border-green-200">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-white text-sm" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm md:text-base truncate">{gst.company}</h4>
                    <p className="text-xs md:text-sm text-gray-600 font-mono truncate">{gst.gstNumber}</p>
                  </div>
                </div>
                <span className="px-2.5 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs md:text-sm font-bold animate-pulse whitespace-nowrap mt-2 xs:mt-0">
                  ✅ GST Active
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl md:rounded-2xl border border-amber-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">₹</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-amber-800 text-sm md:text-base">Add GST for Tax Benefits!</p>
                  <p className="text-xs md:text-sm text-amber-600">
                    Save ₹{Math.round(totalAmount * 0.18)} on this booking
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* -------- Continue Footer -------- */}
      {!showAdultPopup && !showContactPopup && !showGstPopup && !showReviewPopup && (
        <div className="sticky md:fixed bottom-0 left-0 right-0 z-40">
          <div className="bg-gradient-to-t from-white via-white/95 to-white/90 backdrop-blur-xl border-t border-gray-200/50 p-3 md:p-4 shadow-2xl">
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <div className="w-full md:w-auto">
                <div className="flex flex-wrap items-baseline gap-1.5 md:gap-2">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{totalAmount.toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 line-through">₹7,490</p>
                  <span className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold">
                    SAVE 18%
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium mt-0.5 md:mt-1 flex items-center gap-1">
                  <span>📊 View detailed breakup</span>
                  <span className="text-base md:text-lg">→</span>
                </button>
              </div>

              <button
                onClick={openReviewPopup}
                disabled={!adult || !contact.email || !contact.mobile}
                className={`group relative px-4 md:px-6 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base lg:text-lg shadow-xl transition-all duration-300 overflow-hidden w-full md:w-auto touch-target min-h-[44px] flex items-center justify-center ${
                  !adult || !contact.email || !contact.mobile
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:shadow-2xl hover:scale-105"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                  ✈️ Continue
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------
                        RESPONSIVE FORMS WITH BETTER MOBILE UX
      --------------------------------------------------------- */}

      {/* Adult Popup - Responsive Form */}
      {showAdultPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${popupAnimation === 'slideOut' ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            onClick={closePopup}
          ></div>
          
          <div className={`relative w-full max-w-md bg-gradient-to-br from-white to-purple-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl border border-purple-200 overflow-hidden max-h-[90vh] overflow-y-auto ${
            popupAnimation === 'slideInRight' ? 'animate-slideInRight md:animate-slideInRight' : 
            popupAnimation === 'slideOut' ? 'animate-slideOutRight md:animate-slideOutRight' : ''
          }`}>
            {/* Decorative header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 md:p-5 lg:p-6 relative">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <IoClose 
                  size={22} 
                  onClick={closePopup}
                  className="cursor-pointer text-white hover:text-purple-200 transition-colors touch-target p-1"
                />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">Add Traveller</h2>
              <p className="text-purple-100 text-center mt-1 text-xs md:text-sm">Complete profile details</p>
            </div>

            <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4 lg:space-y-5">
              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full p-3 md:p-3.5 lg:p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-purple-500 focus:ring-2 md:focus:ring-4 focus:ring-purple-200 outline-none transition-all text-sm md:text-base"
                  value={tempAdult.first}
                  onChange={(e) => setTempAdult({ ...tempAdult, first: e.target.value })}
                />
              </div>

              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full p-3 md:p-3.5 lg:p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-pink-500 focus:ring-2 md:focus:ring-4 focus:ring-pink-200 outline-none transition-all text-sm md:text-base"
                  value={tempAdult.last}
                  onChange={(e) => setTempAdult({ ...tempAdult, last: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Gender</label>
                  <select
                    className="w-full p-3 md:p-3.5 lg:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                    value={tempAdult.gender}
                    onChange={(e) => setTempAdult({ ...tempAdult, gender: e.target.value })}
                  >
                    <option value="" className="text-gray-400 text-sm">Select</option>
                    <option value="Male" className="text-sm">👨 Male</option>
                    <option value="Female" className="text-sm">👩 Female</option>
                    <option value="Other" className="text-sm">🌈 Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    min="12"
                    max="120"
                    className="w-full p-3 md:p-3.5 lg:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-cyan-500 focus:ring-2 md:focus:ring-4 focus:ring-cyan-200 outline-none transition-all text-sm md:text-base"
                    value={tempAdult.age}
                    onChange={(e) => setTempAdult({ ...tempAdult, age: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 pt-0">
              <button
                onClick={saveAdult}
                className="w-full py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm md:text-base lg:text-lg rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] touch-target min-h-[44px]"
              >
                ✅ Save Traveller
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup - Responsive Form */}
      {showContactPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${popupAnimation === 'slideOut' ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            onClick={closePopup}
          ></div>
          
          <div className={`relative w-full max-w-md bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl border border-blue-200 overflow-hidden max-h-[90vh] overflow-y-auto ${
            popupAnimation === 'slideInLeft' ? 'animate-slideInLeft md:animate-slideInLeft' : 
            popupAnimation === 'slideOut' ? 'animate-slideOutLeft md:animate-slideOutLeft' : ''
          }`}>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 md:p-5 lg:p-6 relative">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <IoClose 
                  size={22} 
                  onClick={closePopup}
                  className="cursor-pointer text-white hover:text-blue-200 transition-colors touch-target p-1"
                />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">Contact Details</h2>
              <p className="text-blue-100 text-center mt-1 text-xs md:text-sm">For booking updates</p>
            </div>

            <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4 lg:space-y-6">
              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 md:p-3.5 lg:p-4 pl-9 md:pl-10 lg:pl-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-blue-500 focus:ring-2 md:focus:ring-4 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                    value={tempContact.email}
                    onChange={(e) => setTempContact({ ...tempContact, email: e.target.value })}
                  />
                  <FaEnvelope className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-sm" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Mobile Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-3 md:p-3.5 lg:p-4 pl-9 md:pl-10 lg:pl-12 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-cyan-500 focus:ring-2 md:focus:ring-4 focus:ring-cyan-200 outline-none transition-all text-sm md:text-base"
                    value={tempContact.mobile}
                    onChange={(e) => setTempContact({ ...tempContact, mobile: e.target.value })}
                  />
                  <FaPhone className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-sky-200">
                <p className="text-xs md:text-sm text-blue-700">
                  📧 We'll send e-ticket and booking confirmation to these contact details
                </p>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 pt-0">
              <button
                onClick={saveContact}
                className="w-full py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm md:text-base lg:text-lg rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] touch-target min-h-[44px]"
              >
                📱 Save Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GST Popup - Responsive Form */}
      {showGstPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${popupAnimation === 'slideOut' ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            onClick={closePopup}
          ></div>
          
          <div className={`relative w-full max-w-md bg-gradient-to-br from-white to-green-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl border border-green-200 overflow-hidden max-h-[90vh] overflow-y-auto ${
            popupAnimation === 'slideInTop' ? 'animate-slideInTop md:animate-slideInTop' : 
            popupAnimation === 'slideOut' ? 'animate-slideOutTop md:animate-slideOutTop' : ''
          }`}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 md:p-5 lg:p-6 relative">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <IoClose 
                  size={22} 
                  onClick={closePopup}
                  className="cursor-pointer text-white hover:text-green-200 transition-colors touch-target p-1"
                />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">GST Details</h2>
              <p className="text-green-100 text-center mt-1 text-xs md:text-sm">Save on business travel</p>
            </div>

            <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4 lg:space-y-6">
              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Company Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full p-3 md:p-3.5 lg:p-4 pl-9 md:pl-10 lg:pl-12 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-green-500 focus:ring-2 md:focus:ring-4 focus:ring-green-200 outline-none transition-all text-sm md:text-base"
                    value={tempGst.company}
                    onChange={(e) => setTempGst({ ...tempGst, company: e.target.value })}
                  />
                  <FaBuilding className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-green-400 text-sm" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">GST Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="27ABCDE1234F1Z5"
                    className="w-full p-3 md:p-3.5 lg:p-4 pl-9 md:pl-10 lg:pl-12 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-lg md:rounded-xl lg:rounded-2xl focus:border-emerald-500 focus:ring-2 md:focus:ring-4 focus:ring-emerald-200 outline-none transition-all text-sm md:text-base"
                    value={tempGst.gstNumber}
                    onChange={(e) => setTempGst({ ...tempGst, gstNumber: e.target.value })}
                  />
                  <span className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 font-bold text-xs md:text-sm">GST</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-emerald-200">
                <h4 className="font-bold text-green-800 mb-1.5 md:mb-2 text-sm md:text-base">💰 Tax Benefits</h4>
                <ul className="space-y-1 md:space-y-1.5 lg:space-y-2 text-xs md:text-sm text-green-700">
                  <li className="flex items-center gap-1.5 md:gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                    Save ₹{Math.round(totalAmount * 0.18)} on this booking
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                    Input tax credit available
                  </li>
                  <li className="flex items-center gap-1.5 md:gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                    Compliant with tax regulations
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 pt-0">
              <button
                onClick={saveGst}
                className="w-full py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-sm md:text-base lg:text-lg rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-[1.02] touch-target min-h-[44px]"
              >
                💰 Save GST Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Popup - Responsive */}
      {showReviewPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-md ${popupAnimation === 'slideOut' ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            onClick={closePopup}
          ></div>
          
          <div className={`relative w-full max-w-2xl bg-gradient-to-br from-white via-blue-50 to-orange-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-3xl border border-gray-200/50 overflow-hidden max-h-[90vh] overflow-y-auto ${
            popupAnimation === 'fadeIn' ? 'animate-scaleIn' : 
            popupAnimation === 'slideOut' ? 'animate-scaleOut' : ''
          }`}>
            {/* Animated header */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-5 md:p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <IoClose 
                  size={22} 
                  onClick={closePopup}
                  className="cursor-pointer text-white hover:text-orange-200 transition-colors touch-target p-1"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">Ready to Fly! ✈️</h2>
                <p className="text-orange-100 text-xs md:text-sm lg:text-base">Review your trip details</p>
              </div>
              
              {/* Animated plane */}
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white rounded-full animate-planeMove"></div>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4 lg:space-y-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
              {/* Flight Details */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl lg:rounded-2xl border border-blue-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2.5 md:gap-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-base md:text-lg lg:text-xl text-gray-800">✈️ Delhi → Mumbai</h3>
                    <div className="mt-1.5 md:mt-2 space-y-0.5 md:space-y-1">
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">📅 Wed, 10 Dec • 21:15 - 02:50</p>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">⏱️ 5h 35m • 🛑 1 stop</p>
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-1.5 lg:gap-2 mt-2 md:mt-3">
                      <span className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium">IndiGo</span>
                      <span className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">Economy</span>
                      <span className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium">Regular</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₹{totalAmount.toLocaleString()}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">Total fare</p>
                  </div>
                </div>
              </div>

              {/* Traveller Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-purple-200">
                  <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">👤 Traveller</h4>
                  {adult && (
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm md:text-base">
                          {adult.first.charAt(0)}{adult.last.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm md:text-base truncate">{adult.first} {adult.last}</p>
                        <p className="text-xs md:text-sm text-gray-600">{adult.gender}, {adult.age} years</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">📞 Contact</h4>
                  <div className="space-y-1 md:space-y-1.5 lg:space-y-2">
                    <p className="text-xs md:text-sm text-gray-600 truncate">Email: {contact.email}</p>
                    <p className="text-xs md:text-sm text-gray-600">Mobile: {contact.mobile}</p>
                  </div>
                </div>
              </div>

              {/* GST Details if added */}
              {gst.company && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl border border-green-200">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1.5 md:gap-2">
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">🏢 GST Applied</h4>
                      <p className="text-xs md:text-sm text-gray-600 truncate">{gst.company}</p>
                    </div>
                    <span className="px-2 md:px-2.5 lg:px-3 py-0.5 md:py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs md:text-sm font-bold whitespace-nowrap mt-1 xs:mt-0">
                      SAVING ₹{Math.round(totalAmount * 0.18)}
                    </span>
                  </div>
                </div>
              )}

              {/* Final Price */}
              <div className="bg-white p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl lg:rounded-2xl border shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-3">
                  <div>
                    <p className="text-base md:text-lg lg:text-2xl font-bold text-gray-800">Total Amount</p>
                    <p className="text-gray-500 text-xs md:text-sm">Inclusive of all taxes</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ₹{totalAmount.toLocaleString()}
                    </p>
                    <p className="text-xs md:text-sm text-green-600 font-medium">✓ Best price guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 pt-0">
              <button
                onClick={handlePayment}
                className="w-full py-3 md:py-4 lg:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-base md:text-lg lg:text-xl rounded-lg md:rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-3xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden touch-target min-h-[44px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 lg:gap-3">
                  💳 Proceed to Payment
                  <span className="group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              <p className="text-center text-gray-500 text-xs md:text-sm mt-2 md:mt-3">
                🔒 Secure payment • 100% refundable • No hidden charges
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}