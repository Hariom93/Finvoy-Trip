import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const navigate = useNavigate();

  const tabs = ["Flights", "Hotels", "Buses"];
  const [activeTab, setActiveTab] = useState("Flights");

  const offers = [
    {
      img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&q=60&w=800",
      title: "Get 12% off on Flights",
      code: "CTFKAXIS",
      tab: "Flights",
    },
    {
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&q=60&w=800",
      title: "Unlimited* Flat 12% off",
      code: "CTFKSBIC",
      tab: "Flights",
    },
    {
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&q=60&w=800",
      title: "Up to ₹5,000 off on Flights",
      code: "CTUPI",
      tab: "Flights",
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&q=60&w=800",
      title: "Up to ₹5,000 off on Flights",
      code: "HDFCEMI",
      tab: "Flights",
    },
  ];

  return (
    <div className="p-4 pb-24">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold px-5">Deals & offers</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-5 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border text-sm transition
              ${activeTab === tab ? "bg-black text-white border-black" : "border-gray-300"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* OFFER GRID — 2 Cards Per Row */}
      <div className="grid grid-cols-2 gap-4">

        {offers
          .filter((offer) => offer.tab === activeTab)
          .map((offer, index) => (
            <div
              key={index}
              onClick={() => navigate(`/offer-details/${offer.code}`)}
              className="bg-white rounded-xl shadow cursor-pointer overflow-hidden"
            >

              {/* Small Image */}
              <img
                src={offer.img}
                className="w-full h-28 object-cover"
                alt="offer"
              />

              {/* Title */}
              <div className="px-2 pt-2">
                <p className="text-[13px] font-medium leading-tight">
                  {offer.title}
                </p>
              </div>

              {/* Coupon Code with Coupon Shape */}
              <div className="bg-white px-2 pb-3">
                <div className="
                  bg-gray-100 
                  border 
                  rounded-lg 
                  text-center 
                  text-xs 
                  py-2 
                  font-semibold
                  mt-2
                ">
                  {offer.code}
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}
