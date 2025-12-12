// pages/DestinationDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ⭐ Your destination data
const popularDestinations = [
  {
    id: "delhi",
    city: "Delhi",
    code: "DEL",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    landmark: "India Gate",
    country: "India",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    code: "BOM",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    landmark: "Chhatrapati Shivaji Terminus",
    country: "India",
  },
  {
    id: "bangalore",
    city: "Bangalore",
    code: "BLR",
    image:
      "https://media.istockphoto.com/id/2224221889/photo/beautiful-view-of-bangalore-skyline-cityscape-at-the-night.webp",
    landmark: "Vidhana Soudha",
    country: "India",
  },
  {
    id: "goa",
    city: "Goa",
    code: "GOI",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    landmark: "Baga Beach",
    country: "India",
  },
  {
    id: "dubai",
    city: "Dubai",
    code: "DXB",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    landmark: "Burj Khalifa",
    country: "UAE",
  },
  {
    id: "singapore",
    city: "Singapore",
    code: "SIN",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    landmark: "Marina Bay Sands",
    country: "Singapore",
  },
];

// ⭐ Main Component
export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dest = popularDestinations.find((item) => item.id === id);

  if (!dest)
    return (
      <h1 className="text-center mt-20 text-2xl font-bold">
        Destination Not Found
      </h1>
    );

  return (
    <div className="p-4 sm:p-6 md:max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={dest.image}
          alt={dest.city}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-xl"
        />
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{dest.city}</h1>
        <p className="text-gray-600 text-lg">{dest.landmark}</p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-white p-5 rounded-2xl shadow-lg mt-6 border border-gray-100"
      >
        <div className="flex justify-between text-lg mb-2">
          <span className="font-semibold">City Code:</span>
          <span>{dest.code}</span>
        </div>

        <div className="flex justify-between text-lg">
          <span className="font-semibold">Country:</span>
          <span>{dest.country}</span>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-8"
      >
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-lg shadow-md hover:shadow-xl transition">
          Book Trip to {dest.city}
        </button>
      </motion.div>
    </div>
  );
}
