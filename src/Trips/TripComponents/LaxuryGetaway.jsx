import React, { useState } from "react";

const LuxuryGetaway = () => {
  const destinations = [
    // ✅ DUBAI
    {
      id: 1,
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      places: [
        {
          name: "Burj Khalifa",
          price: "₹18,499",
          duration: "2 Days / 1 Night",
          description: "World’s tallest building with stunning skyline views.",
          image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75",
        },
        {
          name: "Palm Jumeirah",
          price: "₹22,999",
          duration: "3 Days / 2 Nights",
          description: "Luxury island with 5-star resorts and beaches.",
          image: "https://images.unsplash.com/photo-1580674281650-0d39f5683512",
        },
        {
          name: "Dubai Mall",
          price: "₹14,999",
          duration: "Full Day Tour",
          description: "World’s biggest shopping mall with attractions.",
          image: "https://images.unsplash.com/photo-1600359751551-678236fb6976",
        },
        {
          name: "Desert Safari",
          price: "₹16,499",
          duration: "Evening Tour",
          description: "Dune bashing, camel rides & BBQ dinner.",
          image: "https://images.unsplash.com/photo-1543177593-06f2c9c5b2b6",
        },
        {
          name: "Dubai Marina",
          price: "₹19,999",
          duration: "2 Days / 1 Night",
          description: "Luxury yachts, cafes & night skyline views.",
          image: "https://images.unsplash.com/photo-1591608516483-94217c7cc7bb",
        },
      ],
    },

    // ✅ JAPAN
    {
      id: 2,
      name: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      places: [
        {
          name: "Tokyo",
          price: "₹65,999",
          duration: "4 Days / 3 Nights",
          description: "Modern city with temples & neon nightlife.",
          image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
        },
        {
          name: "Kyoto",
          price: "₹58,499",
          duration: "3 Days / 2 Nights",
          description: "Historic temples and cherry blossoms.",
          image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
        },
        {
          name: "Mount Fuji",
          price: "₹72,999",
          duration: "2 Day Excursion",
          description: "Japan’s highest and most scenic mountain.",
          image: "https://images.unsplash.com/photo-1508154048109-de555266b50a",
        },
        {
          name: "Osaka",
          price: "₹55,999",
          duration: "3 Days / 2 Nights",
          description: "Street food, castles & nightlife.",
          image: "https://images.unsplash.com/photo-1586009150491-6b414f47ad3a",
        },
        {
          name: "Nara Park",
          price: "₹49,999",
          duration: "1 Day Trip",
          description: "Famous deer park and ancient temples.",
          image: "https://images.unsplash.com/photo-1571894698646-0bb4a63c91e3",
        },
      ],
    },

    // ✅ AUSTRALIA
    {
      id: 3,
      name: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
      places: [
        {
          name: "Sydney Opera House",
          price: "₹78,999",
          duration: "3 Days / 2 Nights",
          description: "Iconic performing arts centre.",
          image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75",
        },
        {
          name: "Great Barrier Reef",
          price: "₹89,999",
          duration: "Full Day",
          description: "World’s largest coral reef system.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
          name: "Melbourne",
          price: "₹62,999",
          duration: "3 Days / 2 Nights",
          description: "Café culture & street art capital.",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        },
        {
          name: "Gold Coast",
          price: "₹74,999",
          duration: "2 Days / 1 Night",
          description: "Famous beaches & theme parks.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
          name: "Blue Mountains",
          price: "₹54,999",
          duration: "1 Day Trip",
          description: "Scenic mountains & waterfalls.",
          image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
        },
      ],
    },

    // ✅ SINGAPORE
    {
      id: 4,
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      places: [
        {
          name: "Marina Bay Sands",
          price: "₹45,999",
          duration: "2 Days / 1 Night",
          description: "Sky pool & luxury hotel.",
          image: "https://images.unsplash.com/photo-1504712598893-24159a89200e",
        },
        {
          name: "Sentosa Island",
          price: "₹39,999",
          duration: "Full Day",
          description: "Beach, theme parks & cable car.",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
          name: "Gardens By The Bay",
          price: "₹28,999",
          duration: "Half Day",
          description: "Futuristic garden domes.",
          image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
        },
        {
          name: "Universal Studios",
          price: "₹49,999",
          duration: "Full Day",
          description: "World-class theme park.",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
          name: "Merlion Park",
          price: "₹19,999",
          duration: "Half Day",
          description: "Famous Singapore landmark.",
          image: "https://images.unsplash.com/photo-1504712598893-24159a89200e",
        },
      ],
    },

    // ✅ HONG KONG
    {
      id: 5,
      name: "Hong Kong",
      image: "https://images.unsplash.com/photo-1539603114212-ca6c3d76fd4f",
      places: [
        {
          name: "Victoria Peak",
          price: "₹39,999",
          duration: "Half Day",
          description: "Best skyline viewpoint.",
          image: "https://images.unsplash.com/photo-1504712598893-24159a89200e",
        },
        {
          name: "Hong Kong Disneyland",
          price: "₹69,999",
          duration: "Full Day",
          description: "Magical Disney theme park.",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
          name: "Lantau Island",
          price: "₹49,999",
          duration: "1 Day",
          description: "Big Buddha & cable car.",
          image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        },
        {
          name: "Star Ferry",
          price: "₹19,999",
          duration: "Evening Ride",
          description: "Harbour cruise experience.",
          image: "https://images.unsplash.com/photo-1504712598893-24159a89200e",
        },
        {
          name: "Temple Street Night Market",
          price: "₹24,999",
          duration: "Night Tour",
          description: "Best street shopping & food.",
          image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        },
      ],
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen text-white p-4 md:p-6">

      {/* ✅ HOME PAGE */}
      {!selectedDestination && (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-400">
            Luxury Destinations
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedDestination(item)}
                className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <img src={item.image} className="h-52 w-full object-cover" />
                <h2 className="text-xl font-bold text-center py-4">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ✅ INNER DETAIL PAGE */}
      {selectedDestination && (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-400">
              {selectedDestination.name} Tour Packages
            </h1>

            <button
              onClick={() => setSelectedDestination(null)}
              className="bg-red-500 px-5 py-2 rounded-lg"
            >
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedDestination.places.map((place, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
              >
                <div className="relative">
                  <img src={place.image} className="h-48 w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-orange-500 text-black px-3 py-1 rounded-lg text-sm font-bold">
                    {place.price}
                  </span>
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-bold mb-1">{place.name}</h2>
                  <p className="text-sm text-gray-400 mb-2">
                    {place.description}
                  </p>
                  <p className="text-sm font-semibold text-green-400">
                    Duration: {place.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LuxuryGetaway;
