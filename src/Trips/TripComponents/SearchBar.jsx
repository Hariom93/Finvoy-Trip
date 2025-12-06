import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationData from "../DestinationData";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPackages = DestinationData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-4 py-5 flex flex-col items-center">

      {/* SEARCH BAR */}
      <div className="flex items-center bg-white rounded-full p-1 w-full max-w-xl shadow-md mb-10">
        <input
          type="text"
          placeholder="Name your escape"
          className="w-full px-5 py-3 rounded-full outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
          Search
        </button>
      </div>

      {/* HEADING */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Trending Destinations
      </h1>

      {/* CAROUSEL CONTAINER */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex space-x-6 scrollbar-hide px-4">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => navigate(`/package/${pkg.id}`)}
            className="flex-shrink-0 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[420px] rounded-[30px] overflow-hidden shadow-xl relative snap-center cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* TOP TEXT */}
            <div className="absolute top-6 left-6 text-white z-10">
              <h2 className="text-2xl font-bold">{pkg.title}</h2>
              <p className="text-sm">{pkg.tagline}</p>
            </div>

            {/* BOTTOM PRICE */}
            <div className="absolute bottom-6 left-6 text-white font-bold text-lg z-10">
              Starting ₹ {pkg.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
