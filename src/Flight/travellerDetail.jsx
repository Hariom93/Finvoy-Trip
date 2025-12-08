import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

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

const handlePayment = async () => {
  try {
    // 1) Create order from backend
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount }) 
    });

    const order = await res.json();

    // 2) Razorpay payment options
    const options = {
      key: "9XW8mbc1OZz0qySu9fr6WnIQ", // test key
      amount: order.amount,
      currency: "INR",
      name: "Finvoy Travels",
      description: "Flight Booking Payment",

      order_id: order.id,

      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);

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

// Previous page se amount receive
const totalAmount = state?.price || 0;

// Traveller Details
const travellerName = adult?.first + " " + adult?.last;
const travellerEmail = contact?.email;
const travellerMobile = contact?.mobile;

  const [showAdultPopup, setShowAdultPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showGstPopup, setShowGstPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

const saveReview = () => {
  setShowReviewPopup(true);
};

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

  // ---------------------- SAVE FUNCTIONS ----------------------

  const saveAdult = () => {
    setAdult(tempAdult);
    setShowAdultPopup(false);
  };

  const saveContact = () => {
    setContact(tempContact);
    setShowContactPopup(false);
  };

  const saveGst = () => {
    setGst(tempGst);
    setShowGstPopup(false);
  };
  


  return (
    <div className="min-h-screen bg-white p-4 pb-32">

      {/* -------- Header -------- */}
      <div className="flex items-center gap-3 mb-4">
         <IoIosArrowBack
                  size={26}
                  onClick={() => navigate(-1)}
                  className="cursor-pointer"
                />
        <h2 className="text-xl font-semibold">Who's travelling?</h2>
      </div>

      {/* -------- Adults Section -------- */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-lg font-semibold">Adults (0/1 added)</h3>
        <button
          onClick={() => setShowAdultPopup(true)}
          className="border px-4 py-1 rounded-lg"
        >
          Add adult
        </button>
      </div>

      {adult && (
        <div className="mt-3 flex items-start gap-3">
          <input type="radio" defaultChecked />
          <div>
            <p className="font-medium">
              {adult.first} {adult.last}
            </p>
            <p className="text-gray-500 text-sm">{adult.gender}</p>
          </div>
        </div>
      )}

      {/* -------- Contact Section -------- */}
      <div className="flex justify-between items-center mt-8">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <button
          onClick={() => setShowContactPopup(true)}
          className="border px-4 py-1 rounded-lg"
        >
          Edit
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-3">
        Booking updates will be shared here
      </p>

      {contact.email && (
        <div className="mb-1">📧 {contact.email}</div>
      )}
      {contact.mobile && (
        <div className="mb-1">📞 {contact.mobile}</div>
      )}

      {/* -------- GST Section -------- */}
      <div className="flex justify-between items-center mt-8">
        <h3 className="text-lg font-semibold">GST number</h3>
        <button
          onClick={() => setShowGstPopup(true)}
          className="border px-4 py-1 rounded-lg"
        >
          Add GST
        </button>
      </div>

      <div className="bg-orange-50 text-gray-700 text-sm p-3 rounded-lg mt-3">
        <b>NOTE:</b> Use GST number to avail GST benefits & additional savings
      </div>

      {/* -------- Continue Footer -------- */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">₹6,135</p>
            <p className="text-blue-500 text-sm cursor-pointer">View breakup</p>
          </div>

          <button
            onClick={() => setShowReviewPopup(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Continue
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------
                        POPUPS BELOW
      --------------------------------------------------------- */}

      {/* ---------------- Adult Popup ---------------- */}
      {showAdultPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-center z-50">
          <div className="bg-white w-full rounded-t-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Adult</h2>
              <IoClose size={28} onClick={() => setShowAdultPopup(false)} />
            </div>

            <input
              type="text"
              placeholder="First name"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempAdult({ ...tempAdult, first: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Last name"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempAdult({ ...tempAdult, last: e.target.value })
              }
            />

            <select
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempAdult({ ...tempAdult, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
              type="number"
              placeholder="Age"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempAdult({ ...tempAdult, age: e.target.value })
              }
            />

            <button
              onClick={saveAdult}
              className="w-full bg-orange-500 text-white py-3 mt-2 rounded-xl font-semibold mb-15"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* ---------------- Contact Popup ---------------- */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-center z-50">
          <div className="bg-white w-full rounded-t-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Edit Contact Info</h2>
              <IoClose size={28} onClick={() => setShowContactPopup(false)} />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempContact({ ...tempContact, email: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Mobile Number"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempContact({ ...tempContact, mobile: e.target.value })
              }
            />

            <button
              onClick={saveContact}
              className="w-full bg-orange-500 text-white py-3 mt-2 rounded-xl font-semibold mb-15"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* ---------------- GST Popup ---------------- */}
      {showGstPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-center z-50">
          <div className="bg-white w-full rounded-t-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add GST</h2>
              <IoClose size={28} onClick={() => setShowGstPopup(false)} />
            </div>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempGst({ ...tempGst, company: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="GST Number"
              className="w-full border p-3 rounded-lg mb-3"
              onChange={(e) =>
                setTempGst({ ...tempGst, gstNumber: e.target.value })
              }
            />

            <button
              onClick={saveGst}
              className="w-full bg-orange-500 text-white py-3 mt-2 rounded-xl font-semibold mb-15"
            >
              Save
            </button>
          </div>
        </div>
      )}

{!
  (showAdultPopup ||
   showContactPopup ||
   showGstPopup ||
   showReviewPopup)
  && (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-xl z-50 mb-18">
      <div className="flex items-center justify-between">

        {/* Left Side : Price */}
        <div>
          <p className="text-xl font-semibold">₹6,135</p>
          <p className="text-blue-500 text-sm cursor-pointer">View breakup</p>
        </div>

        {/* Right Side : Continue Button */}
        <button
          onClick={saveReview}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Continue
        </button>

      </div>
    </div>
)}


      {/* ---------------- Review Continue Popup ---------------- */}
{showReviewPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-center z-50">
    <div className="bg-white w-full rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Review your trip</h2>
        <IoClose size={28} onClick={() => setShowReviewPopup(false)} />
      </div>

      {/* Trip Card */}
      <div className="border p-4 rounded-xl mb-4 shadow-sm">
        <h3 className="font-semibold text-lg">New Delhi to Mumbai</h3>
        <p className="text-sm text-gray-600">Wed, 10 Dec • 21:15 - 02:50</p>
        <p className="text-sm text-gray-600">(5h 35m, 1 stop)</p>
        <p className="text-sm mt-2">IndiGo • ECONOMY • REGULAR</p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Travellers</h3>
      {adult && (
        <p className="mb-4">{adult.first} {adult.last}</p>
      )}

      <h3 className="text-lg font-semibold mb-2">Inclusions</h3>

      <div className="border rounded-xl p-4 shadow-sm">
        <p className="font-medium">Seat</p>
        <p className="text-gray-600">5E</p>
      </div>

     <button
  onClick={handlePayment}
  className="w-full bg-blue-600 text-white p-3 rounded-lg mt-5 mb-15"
>
  Proceed to Payment
</button>


    </div>
  </div>
)}

    </div>
  );
}
