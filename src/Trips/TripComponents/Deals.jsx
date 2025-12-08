import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  {
    id: 1,
    title: "Thailand",
    subtitle: "Land of smiles and shores",
    price: "₹10,999",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Dubai",
    subtitle: "City of gold and deserts",
    price: "₹15,999",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

  },
  {
    id: 3,
    title: "Switzerland",
    subtitle: "Land of mountains and lakes",
    price: "₹25,999",
         image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

  },
];

export default function Deals() {
  const [current, setCurrent] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto relative p-4">
      <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={destinations[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={destinations[current].image}
              alt={destinations[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 rounded-xl">
              <h1 className="text-4xl font-bold text-white">
                {destinations[current].title}
              </h1>
              <p className="text-white mt-2">{destinations[current].subtitle}</p>
              <p className="text-white mt-2 font-semibold">
                Starting per person {destinations[current].price}
              </p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
                Explore Destinations
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Small overlay card (next destination) */}
        <div className="absolute bottom-4 right-4 w-28 h-20 rounded-xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src={destinations[(current + 1) % destinations.length].image}
            alt={destinations[(current + 1) % destinations.length].title}
            className="w-full h-full object-cover"
            onClick={() =>
              setCurrent((prev) => (prev + 1) % destinations.length)
            }
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-semibold text-sm">
            {destinations[(current + 1) % destinations.length].title}
          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {destinations.map((dest, index) => (
          <span
            key={dest.id}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
