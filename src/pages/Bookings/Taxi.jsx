import React, { useState } from "react";
import { motion } from "framer-motion";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
const Taxi = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedRide, setSelectedRide] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const navigate=useNavigate()
  // Image URLs for different ride types
 const rideImages = {
    economy:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    comfort:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    business:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    suv: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Black SUV
    luxury:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
 executive: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&q=80"
    
    };

  const rides = [
    {
      id: 1,
      name: "Economy",
      image: rideImages.economy,
      price: 2.5,
      time: "5 min",
      capacity: 4,
      features: ["AC", "Standard", "Affordable"],
      color: "from-blue-400 to-blue-600",
      tag: "Most Popular",
    },
    {
      id: 2,
      name: "Comfort",
      image: rideImages.comfort,
      price: 3.5,
      time: "8 min",
      capacity: 4,
      features: ["AC", "Extra Space", "Phone Charger"],
      color: "from-green-400 to-green-600",
      tag: "Best Value",
    },
    {
      id: 3,
      name: "Business",
      image: rideImages.business,
      price: 5.0,
      time: "3 min",
      capacity: 3,
      features: ["Premium AC", "Free WiFi", "Water Bottle"],
      color: "from-purple-400 to-purple-600",
      tag: "Fast Arrival",
    },
    {
      id: 4,
      name: "SUV",
      image: rideImages.suv,
      price: 6.0,
      time: "10 min",
      capacity: 6,
      features: ["Spacious", "Luggage Space", "Family"],
      color: "from-orange-400 to-orange-600",
      tag: "Group Travel",
    },
    {
      id: 5,
      name: "Luxury",
      image: rideImages.luxury,
      price: 10.0,
      time: "15 min",
      capacity: 3,
      features: ["Chauffeur", "Premium Interior", "Refreshments"],
      color: "from-yellow-400 to-red-600",
      tag: "VIP Experience",
    },
    {
      id: 6,
      name: "Executive",
      image: rideImages.vip,
      price: 15.0,
      time: "20 min",
      capacity: 4,
      features: ["Executive", "Privacy Glass", "Concierge"],
      color: "from-gray-700 to-black",
      tag: "Premium Service",
    },
  ];

  const popularDestinations = [
    {
      name: "Airport",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400",
      time: "45 min",
      price: "$35+",
    },
    {
      name: "Downtown",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400",
      time: "25 min",
      price: "$20+",
    },
    {
      name: "Railway Station",
      image:
        "https://images.unsplash.com/photo-1583676369613-21e0830ed217?auto=format&fit=crop&w=400",
      time: "30 min",
      price: "$25+",
    },
    {
      name: "Shopping Mall",
      image:
        "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=400",
      time: "20 min",
      price: "$15+",
    },
    {
      name: "Hospital",
      image:
        "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?auto=format&fit=crop&w=400",
      time: "15 min",
      price: "$12+",
    },
    {
      name: "University",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400",
      time: "35 min",
      price: "$28+",
    },
  ];

  const handleBookNow = (ride) => {
    setSelectedRide(ride);
    setBookingStep(2);
  };

  const handleConfirm = () => {
    setBookingStep(3);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 pb-10  via-white to-blue-50">
      {/* Hero Section */}
      <BackButton className="container mx-auto px-4 pt-6" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pt-3 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-1 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Taxi Service
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Experience luxury travel with Finvoy-Global's premium fleet
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {[
                { number: "4.9⭐", label: "Rating" },
                { number: "10K+", label: "Happy Riders" },
                { number: "24/7", label: "Service" },
                { number: "5min", label: "Avg. Arrival" },
              ].map((stat, index) => (
                <div key={index} className="text-center px-4">
                  <div className="text-2xl md:text-3xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Booking Form */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="relative -mt-12 px-4"
      >
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Form Inputs */}
              <div className="lg:col-span-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pickup */}
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700 text-sm font-semibold uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your location"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropoff */}
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700 text-sm font-semibold uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      Destination
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Date & Time */}
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700 text-sm font-semibold uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-1">
                      <input
                        type="date"
                        className="w-full px-2 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <input
                        type="time"
                        className="w-full px-2 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700 text-sm font-semibold uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h-6m0 0V8a3 3 0 00-6 0v1"
                          />
                        </svg>
                      </div>
                      Passengers
                    </label>
                    <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200 px-4 py-3">
                      <button
                        onClick={() =>
                          setPassengers(Math.max(1, passengers - 1))
                        }
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all active:scale-95"
                      >
                        <span className="text-xl font-bold text-gray-700">
                          -
                        </span>
                      </button>
                      <span className="flex-1 text-center font-semibold text-gray-800 text-lg">
                        {passengers} {passengers === 1 ? "Person" : "People"}
                      </span>
                      <button
                        onClick={() => setPassengers(passengers + 1)}
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all active:scale-95"
                      >
                        <span className="text-xl font-bold text-gray-700">
                          +
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="flex items-end w-full">
                    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-[2px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                      <div className="flex items-center bg-white rounded-xl px-4 py-4">
                        <svg
                          className="w-5 h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>

                        <input
                          type="text"
                          placeholder="Find Available Rides"
                          className="w-full outline-none text-gray-800 font-bold placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Booking Section */}
              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Quick Book
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Popular destinations with instant booking
                  </p>
                  <div className="space-y-3">
                    {popularDestinations.slice(0, 3).map((dest, index) => (
                      <button
                        key={index}
                        onClick={() => setDropoff(dest.name)}
                        className="w-full flex items-center p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                          <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${dest.image})` }}
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-gray-800 group-hover:text-blue-600">
                            {dest.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {dest.time}
                          </div>
                        </div>
                        <div className="font-bold text-blue-600">
                          {dest.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Available Rides Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Premium Ride
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our luxury fleet with professional drivers and premium
              amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rides.map((ride, index) => (
              <motion.div
                key={ride.id}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Ride Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${ride.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Tag */}
                  {ride.tag && (
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${ride.color}`}
                      >
                        {ride.tag}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800">
                      ${ride.price}
                    </div>
                    <div className="text-xs text-gray-600">per km</div>
                  </div>
                </div>

                {/* Ride Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {ride.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        ETA: {ride.time} •
                        <svg
                          className="w-4 h-4 mx-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h-6m0 0V8a3 3 0 00-6 0v1"
                          />
                        </svg>
                        {ride.capacity} seats
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Premium ride with professional chauffeur and luxury
                    amenities
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ride.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => {
                        handleBookNow(ride)
                        navigate(`/taxi/${ride.id}`)
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                    Book This Ride
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-blue-600">Finvoy-Global</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium taxi service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Safe & Secure",
                description:
                  "Verified drivers, real-time tracking, and 24/7 support",
                icon: "🛡️",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Premium Fleet",
                description: "Luxury vehicles with top-notch amenities",
                icon: "🚗",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Quick Service",
                description: "Average 5-minute arrival time guaranteed",
                icon: "⚡",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Best Price",
                description: "Competitive rates with no hidden charges",
                icon: "💰",
                color: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Journey?{" "}
            <span className="text-[#F54900]">Finvoy-Global</span>
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            for exclusive offers and faster booking
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Book your Ride
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
              📞 Call: 1-800-FINVOY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxi;
