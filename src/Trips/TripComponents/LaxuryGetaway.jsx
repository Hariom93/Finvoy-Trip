import React, { useState } from "react";

const destinations = [
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    places: [
      { name: "Burj Khalifa", price: "₹25,000", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75" },
      { name: "Palm Jumeirah", price: "₹30,000", image: "https://images.unsplash.com/photo-1580674281650-0d39f5683512" },
      { name: "Dubai Mall", price: "₹22,000", image: "https://images.unsplash.com/photo-1600359751551-678236fb6976" },
      { name: "Desert Safari", price: "₹18,000", image: "https://images.unsplash.com/photo-1543177593-06f2c9c5b2b6" },
      { name: "Dubai Marina", price: "₹28,000", image: "https://images.unsplash.com/photo-1591608516483-94217c7cc7bb" },
    ],
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    places: [
      { name: "Tokyo", price: "₹35,000", image: "https://images.unsplash.com/photo-1549693578-d683be217e58" },
      { name: "Kyoto", price: "₹32,000", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d" },
      { name: "Mount Fuji", price: "₹38,000", image: "https://images.unsplash.com/photo-1508154048109-de555266b50a" },
      { name: "Osaka", price: "₹30,000", image: "https://images.unsplash.com/photo-1586009150491-6b414f47ad3a" },
      { name: "Nara Park", price: "₹26,000", image: "https://images.unsplash.com/photo-1571894698646-0bb4a63c91e3" },
    ],
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    places: [
      { name: "Sydney", price: "₹40,000", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75" },
      { name: "Melbourne", price: "₹38,000", image: "https://images.unsplash.com/photo-1580674281650-0d39f5683512" },
      { name: "Gold Coast", price: "₹36,000", image: "https://images.unsplash.com/photo-1600359751551-678236fb6976" },
      { name: "Opera House", price: "₹42,000", image: "https://images.unsplash.com/photo-1543177593-06f2c9c5b2b6" },
      { name: "Blue Mountains", price: "₹30,000", image: "https://images.unsplash.com/photo-1591608516483-94217c7cc7bb" },
    ],
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac",
    places: [
      { name: "Marina Bay", price: "₹28,000", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75" },
      { name: "Sentosa", price: "₹26,000", image: "https://images.unsplash.com/photo-1580674281650-0d39f5683512" },
      { name: "Universal", price: "₹32,000", image: "https://images.unsplash.com/photo-1600359751551-678236fb6976" },
      { name: "Botanical Garden", price: "₹22,000", image: "https://images.unsplash.com/photo-1543177593-06f2c9c5b2b6" },
      { name: "Night Safari", price: "₹25,000", image: "https://images.unsplash.com/photo-1591608516483-94217c7cc7bb" },
    ],
  },
  {
    name: "Hong Kong",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    places: [
      { name: "Disneyland", price: "₹34,000", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75" },
      { name: "Victoria Peak", price: "₹28,000", image: "https://images.unsplash.com/photo-1580674281650-0d39f5683512" },
      { name: "Ocean Park", price: "₹30,000", image: "https://images.unsplash.com/photo-1600359751551-678236fb6976" },
      { name: "Skyline", price: "₹35,000", image: "https://images.unsplash.com/photo-1543177593-06f2c9c5b2b6" },
      { name: "Ngong Ping", price: "₹29,000", image: "https://images.unsplash.com/photo-1591608516483-94217c7cc7bb" },
    ],
  },
];

export default function LuxuryGetaway() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">

      {!selected ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-8">
            Luxury Destinations
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <img src={item.image} className="h-48 w-full object-cover" />
                <h2 className="text-xl font-bold text-center py-4">{item.name}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-400">
              {selected.name} Tour Places
            </h1>
            <button
              onClick={() => setSelected(null)}
              className="bg-red-500 px-4 py-2 rounded-lg text-sm"
            >
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selected.places.map((place, i) => (
              <div key={i} className="relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition">
                <img src={place.image} className="h-48 w-full object-cover" />

                {/* ✅ PRICE OVERLAY */}
                <span className="absolute top-2 left-2 bg-orange-500 text-black text-sm px-3 py-1 rounded-full font-bold">
                  Starting {place.price}
                </span>

                <h2 className="text-lg font-bold text-center py-3">
                  {place.name}
                </h2>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
