import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import packages from "../Data/packagesData";
import {
  ChevronLeft,
  ChevronRight,
  Plane,
  Car,
  MapPin,
  Sun,
  Hotel,
  Navigation,
} from "lucide-react";
import {
  FaSearch,
  FaPlane,
  FaHotel,
  FaCar,
  FaTrain,
  FaBus,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaGooglePlay,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { HiLocationMarker, HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/logo.png";
import coinLogo from "../assets/supercoins-chip-icon.webp";
// Quick Booking
import Img1 from "../assets/flightsss.avif";
import Img2 from "../assets/holi.avif";
import Img3 from "../assets/Taxi.jpg";
import Img4 from "../assets/Hotal.avif";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// Airline Logos
import indigo from "../assets/IndigoLogo_transparent.png";
import malaysia from "../assets/malaysiaLogo_transparent.png";
import airindia from "../assets/AirindiaLogo_transparent.png";
import airexpress from "../assets/AirindiaexpressLogo_transparent.png";
import airasia from "../assets/AirAsiaLogo_transparent.png";
import vietjet from "../assets/VietjetthaiLogo_transparent.png";
import spicejet from "../assets/SpicejetLogo_transparent.png";
import akasa from "../assets/AkasaLogo_transparent.png";

// Slider Images
import GatwayImg1 from "../assets/GatwayImg.jpg";
import GatwayImg2 from "../assets/GatwayImg2.jpg";
import GatwayImg3 from "../assets/GatwayImg3.jpg";

export default function MainHome() {
  const [startX, setStartX] = useState(null);
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [ismobilpop, setismobilpop] = useState(false);

  // Lock body scroll when popup open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  const airlines = [
    indigo,
    malaysia,
    airindia,
    airexpress,
    airasia,
    vietjet,
    spicejet,
    akasa,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Air Travel",
      subtitle: "Fly to your dream destinations",
      icon: <Plane className="w-8 h-8 text-white" />,
      category: "air",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Taxi Services",
      subtitle: "Reliable rides anywhere, anytime",
      icon: <Car className="w-8 h-8 text-white" />,
      category: "taxi",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Holidays",
      subtitle: "Perfect getaways for every season",
      icon: <Sun className="w-8 h-8 text-white" />,
      category: "holidays",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Hotel Stays",
      subtitle: "Luxurious accommodations worldwide",
      icon: <Hotel className="w-8 h-8 text-white" />,
      category: "hotels",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Travel Guides",
      subtitle: "Expert recommendations & tips",
      icon: <Navigation className="w-8 h-8 text-white" />,
      category: "guides",
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay, slides.length]);

  const nextSlidee = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlidee = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const images = [
    {
      img: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80",
      link: "/hongkong",
      label: "Hong Kong",
    },
    {
      img: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/saudi",
      label: "Saudi Arabia",
    },
    {
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      link: "/western-america",
      label: "Western America",
    },
  ];

  const popularDestinations = [
    // Delhi
    {
      id: "delhi", // ✅ added ID
      city: "Delhi",
      code: "DEL",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "India Gate",
      country: "India",
    },

    // Mumbai
    {
      id: "mumbai", // ✅ added ID
      city: "Mumbai",
      code: "BOM",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Chhatrapati Shivaji Terminus",
      country: "India",
    },

    // Bangalore
    {
      id: "bangalore", // ✅ added ID
      city: "Bangalore",
      code: "BLR",
      image:
        "https://media.istockphoto.com/id/2224221889/photo/beautiful-view-of-bangalore-skyline-cityscape-at-the-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVsHeF5XPJ_1XB2H6dclrDDHpR2Nlr6xncdeQD7JByI=",
      landmark: "Vidhana Soudha",
      country: "India",
    },

    // Goa
    {
      id: "goa", // ✅ added ID
      city: "Goa",
      code: "GOI",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Baga Beach",
      country: "India",
    },

    // Dubai
    {
      id: "dubai", // ✅ added ID
      city: "Dubai",
      code: "DXB",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Burj Khalifa",
      country: "UAE",
    },

    // Singapore
    {
      id: "singapore", // ✅ added ID
      city: "Singapore",
      code: "SIN",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Marina Bay Sands",
      country: "Singapore",
    },
  ];

  const trendingHotels = [
    {
      name: "Taj Mahal Palace",
      location: "Mumbai",
      rating: 4.8,
      reviews: 2345,
      price: "₹12,999",
      originalPrice: "₹18,999",
      discount: "31%",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      name: "The Leela Palace",
      location: "Bangalore",
      rating: 4.7,
      reviews: 1890,
      price: "₹10,499",
      originalPrice: "₹15,499",
      discount: "32%",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    },
    {
      name: "ITC Grand Chola",
      location: "Chennai",
      rating: 4.9,
      reviews: 3120,
      price: "₹14,999",
      originalPrice: "₹22,999",
      discount: "35%",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
    },
    {
      name: "The Oberoi Udaivilas",
      location: "Udaipur",
      rating: 4.9,
      reviews: 2789,
      price: "₹24,999",
      originalPrice: "₹34,999",
      discount: "29%",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
    },
  ];

  const travelCategories = [
    {
      icon: <FaPlane />,
      title: "Flights",
      description: "Domestic & International",
      color: "from-blue-500 to-purple-500",
      link: "/flight",
    },
    {
      icon: <FaHotel />,
      title: "Hotels",
      description: "Best Price Guarantee",
      color: "from-green-500 to-teal-500",
      link: "/hotels",
    },
    {
      icon: <FaTrain />,
      title: "Trains",
      description: "IRCTC Authorized",
      color: "from-orange-500 to-red-500",
      link: "/trains",
    },
    {
      icon: <FaBus />,
      title: "Buses",
      description: "AC & Sleeper Buses",
      color: "from-purple-500 to-pink-500",
      link: "/buses",
    },
    {
      icon: <FaCar />,
      title: "Cabs",
      description: "Outstation & Local",
      color: "from-indigo-500 to-blue-500",
      link: "/cabs",
    },
  ];

  const offers = [
    {
      title: "Up to 25% OFF",
      description: "On International Flights",
      code: "INTFLY25",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "FLAT ₹2,000 OFF",
      description: "On Hotel Bookings",
      code: "HOTEL2K",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Up to 30% OFF",
      description: "On Bus Tickets",
      code: "BUS30",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      title: "₹1,500 CASHBACK",
      description: "On First Train Booking",
      code: "TRAIN15",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const travelBoxes = [
    { img: Img1, name: "Flights", text: "Up to 25% off", link: "/flight" },
    { img: Img2, name: "Holidays", text: "Plan your trip", link: "/holidays" },
    { img: Img3, name: "Taxi Booking", text: "Plan your trip", link: "/taxi" },
    {
      img: Img4,
      name: "Hotels Booking",
      text: "Plan your trip",
      link: "/hotal",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!startX) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setStartX(null);
  };

  const handleMouseStart = (e) => setStartX(e.clientX);
  const handleMouseEnd = (e) => {
    if (!startX) return;
    const diff = startX - e.clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setStartX(null);
  };
  return (
    <div className="min-h-screen sm:pb-18 lg:pb-0 bg-gray-50 ">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-col items-center justify-center bg-white shadow-sm h-20">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Finvoy Global Logo"
                className=" h-24 sm:h-15 md:h-18 lg:h-20 xl:h-24 w-auto"
              />
            </div>

            {/* Super Coins */}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Holidays
              </a>
              <a
                href="/account"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Account
              </a>
              <a
                href="/offers"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Offers
              </a>
              <a
                href="/work"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                About Us
              </a>

              <button
                onClick={() => setShowPopup(false)}
                className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <HiOutlineUserCircle className="text-gray-600 text-xl" />
                <p
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="font-medium"
                >
                  Login/Sign up
                </p>
              </button>
              {showPopup && (
                <AnimatePresence>
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* BACKDROP */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                      onClick={() => setShowPopup(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />

                    {/* POPUP CARD - ADJUSTED FOR 1180PX */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.95, opacity: 0, y: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[500px] overflow-hidden z-10 mx-auto"
                      style={{ maxHeight: "90vh", overflowY: "auto" }}
                    >
                      {/* HEADER */}
                      <div className="bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-4 sticky top-0 z-10">
                        <div className="flex items-center justify-between">
                          <div className="pr-4">
                            <h2 className="text-lg font-bold text-white">
                              Travel Inquiry
                            </h2>
                            <p className="text-blue-100 text-xs mt-0.5">
                              Let us help plan your perfect trip
                            </p>
                          </div>
                          <button
                            onClick={() => setShowPopup(false)}
                            className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            aria-label="Close"
                          >
                            <X size={16} className="text-white" />
                          </button>
                        </div>
                      </div>

                      {/* FORM */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Handle form submission here
                          console.log("Form submitted");
                          setShowPopup(false);
                        }}
                        className="p-5"
                      >
                        <div className="space-y-3.5">
                          {/* COMPACT FORM FIELDS */}
                          <div className="grid grid-cols-1 gap-3.5">
                            {/* NAME FIELD */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="John Doe"
                              />
                            </div>

                            {/* EMAIL FIELD */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="john@example.com"
                              />
                            </div>

                            {/* PHONE FIELD */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>

                          {/* COMPACT DATE PICKERS */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                End Date
                              </label>
                              <input
                                type="date"
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                              />
                            </div>
                          </div>

                          {/* MESSAGE FIELD - COMPACT */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Your Message *
                            </label>
                            <textarea
                              rows="3"
                              required
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                              placeholder="Tell us about your travel plans..."
                            />
                          </div>

                          {/* COMPACT TRAVEL TYPE */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Travel Type
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Leisure",
                                "Business",
                                "Family",
                                "Adventure",
                              ].map((type) => (
                                <label
                                  key={type}
                                  className="inline-flex items-center space-x-1.5 cursor-pointer px-2.5 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                                >
                                  <input
                                    type="radio"
                                    name="travelType"
                                    value={type.toLowerCase()}
                                    className="text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="text-xs font-medium text-gray-700">
                                    {type}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* COMPACT BUDGET FIELD */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Estimated Budget
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                                $
                              </span>
                              <input
                                type="number"
                                min="0"
                                className="w-full pl-8 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="5000"
                              />
                            </div>
                          </div>

                          {/* TRAVELERS SELECT */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Number of Travelers
                            </label>
                            <select className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                              <option value="">Select number</option>
                              <option value="1">1 Traveler</option>
                              <option value="2">2 Travelers</option>
                              <option value="3">3 Travelers</option>
                              <option value="4">4 Travelers</option>
                              <option value="5+">5+ Travelers</option>
                            </select>
                          </div>

                          {/* SUBMIT BUTTON - COMPACT */}
                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold text-sm py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg mt-2"
                          >
                            Submit Inquiry
                          </button>

                          {/* FOOTER TEXT - COMPACT */}
                          <p className="text-center text-xs text-gray-500 pt-1.5">
                            We respect your privacy. Your information will never
                            be shared.
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden w-full absolute top-full left-0 bg-white border-t border-gray-200 px-4 shadow-lg z-50
  transition-all duration-400 ease-in-out
  ${
    isMobileMenuOpen
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-4 invisible"
  }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Holidays
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Support
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Blog
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/login");
                }}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg w-full justify-center hover:bg-blue-700 transition-all duration-200"
              >
                <HiOutlineUserCircle className="text-xl" />
                <span className="font-medium">Login / Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Box */}
        {visible && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 m-4 max-w-4xl mx-auto shadow-lg">
            <button
              onClick={() => setVisible(false)}
              className="float-right text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close welcome message"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 text-2xl">✈️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Welcome to Finvoy-Gobal!
                </h2>
                <p className="text-gray-700">
                  Save big with our exclusive offers, amazing deals, and earn
                  Supercoins on every booking!
                </p>
              </div>
            </div>
          </div>
        )}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Explore Travel Options
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the best in air travel, taxi services, holiday
                packages, and more. Your perfect journey starts here.
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative">
              {/* Main Slider */}
              <div className="relative h-[150px] sm:h-[220px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].color} opacity-80`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      <div className="max-w-2xl">
                        <div className="flex items-center space-x-4 mb-4"> 
                          <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            {slides[currentSlide].category.toUpperCase()}
                          </span>
                        </div>
                        <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                          <MapPin className="w-5 h-5" />
                          <span
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Book Now
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlidee}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlidee}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Autoplay Toggle */}
                <button
                  onClick={() => setAutoplay(!autoplay)}
                  className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-colors duration-300"
                >
                  {autoplay ? "Pause" : "Play"} Autoplay
                </button>
              </div>

              {/* Thumbnail Slider */}
              {/* <div className="mt-6 flex justify-center space-x-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                    className={`relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentSlide === index
                        ? "ring-2 ring-blue-500 ring-offset-2 scale-110"
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${slide.color} opacity-60`}
                    />

                    
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-8 h-1 rounded-full ${
                          currentSlide === index ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div> */}

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats/Features Below Slider */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 font-medium">Destinations</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-medium">Taxi Service</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-700 font-medium">Hotels</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-700 font-medium">Happy Travelers</div>
              </div>
            </div> */}
          </div>
        </section>
        {/* Quick Travel Boxes */}
        <section className="py-8 transition-all duration-300 md:py-12">
          <div className="container mx-auto px-4 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Quick Bookings
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 transition-all duration-300 ease-out lg:grid-cols-4 gap-4 md:gap-6">
              {travelBoxes.map((item, index) => (
                <NavLink key={index} to={item.link}>
                  <div
                    className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center 
                         border border-gray-100
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:scale-[1.03]
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                         hover:border-blue-200
                         hover:bg-gradient-to-b hover:from-white hover:to-blue-50"
                  >
                    {/* Image */}
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 
                      rounded-full flex items-center justify-center
                      transition-transform duration-500 ease-out
                      group-hover:scale-110 group-hover:-translate-y-1"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Text */}
                    <h3
                      className="text-base md:text-lg font-bold text-gray-900 mb-1 
                      transition-colors duration-300 group-hover:text-blue-600"
                    >
                      {item.name}
                    </h3>

                    <p
                      className="text-blue-600 font-semibold text-sm md:text-base 
                     transition-opacity duration-300 group-hover:opacity-90"
                    >
                      {item.text}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Categories */}

        {/* Popular Destinations */}
        <section className="py-8 md:py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Popular Destinations
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {popularDestinations.map((dest, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/destinations/${dest.id}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white">
                      <h4 className="font-bold text-sm md:text-lg">
                        {dest.city}
                      </h4>
                      <p className="text-xs md:text-sm">{dest.code}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Airline Partners */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
              Airline Partners
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
                {airlines.map((logo, index) => (
                  <div
                    key={index}
                    className="
              flex items-center justify-center
              transition-transform duration-300
              opacity-0 animate-fadeIn
            "
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <img
                      src={logo}
                      alt={`Airline ${index + 1}`}
                      className="
              mix-blend-multiply
                w-full 
                h-24 md:h-32 
                object-contain
              
              "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Slider Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Getaways Curated For You
              </h2>
              <div className="hidden md:flex space-x-4">
                <button
                  onClick={prevSlide}
                  className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-50 transition-colors"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-50 transition-colors"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-xl md:rounded-3xl shadow-xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseStart}
              onMouseUp={handleMouseEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full flex-shrink-0 cursor-pointer"
                    onClick={() => navigate(item.link)}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-48 md:h-64 lg:h-96 object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg md:rounded-2xl p-3 md:p-6 inline-block">
                          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                            {item.label}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base mb-3 md:mb-4">
                            Discover amazing deals and experiences
                          </p>
                          <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors">
                            Explore Now →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      current === i
                        ? "bg-white w-4 md:w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offers & Deals */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Exclusive Offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className={`${offer.color} rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    {offer.title}
                  </h3>
                  <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">
                    {offer.description}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 inline-block">
                    <p className="font-mono font-bold text-xs md:text-sm">
                      Use Code: {offer.code}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/exclusiveoffer")}
                    className="mt-4 md:mt-6 bg-white text-gray-900 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors w-full"
                  >
                    Explore Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-3xl p-6 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                About Finvoy-Gobal
              </h2>
              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Launched in July 2006,{" "}
                  <strong className="text-gray-900">
                    Finvoy-Gobal Pvt Ltd
                  </strong>
                  , a Flipkart company, has emerged as India's fastest-growing
                  online travel technology company. In April 2021, Flipkart
                  acquired a majority stake in Finvoy-Global.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Finvoy-Global recently emerged as the no. 2 OTA player as per
                  a study by VIDEC. With an aggressive plan to emerge as a
                  leading innovator in the industry, Finvoy-Global is on its way
                  to revolutionize travel experiences across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white pt-12 md:pt-16">
        {/* Glow Divider */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />

        <div className="container mx-auto px-4">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-5">
                <img src={logo} alt="Finvoy Trip" className="h-29  w-auto " />
                <span className="text-2xl   font-extrabold tracking-wide">
                  Finvoy<span className="text-blue-500">Global</span>
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                Your trusted travel partner for unbeatable deals and
                unforgettable experiences across India and the world.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaFacebookF />,
                    color: "text-blue-400",
                    url: "https://www.facebook.com/yourprofile",
                  },
                  {
                    icon: <FaInstagram />,
                    color: "text-pink-500",
                    url: "https://www.instagram.com/yourprofile",
                  },
                  {
                    icon: <FaTwitter />,
                    color: "text-sky-400",
                    url: "https://twitter.com/yourprofile",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    color: "text-blue-600",
                    url: "https://www.linkedin.com/in/yourprofile",
                  },
                  {
                    icon: <IoLogoWhatsapp />,
                    color: "text-green-600",
                    url: "https://wa.me/919999999999", // WhatsApp number
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.1 }}
                    href={item.url}
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center  transition ${item.color}`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {[
              {
                title: "Products",
                links: [
                  "Flights",
                  "Hotels",
                  "Trains",
                  "Buses",
                  "Cabs",
                  "Holidays",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Finvoy for Business"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                  "Refund Policy",
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 pb-6">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2006–2025 Finvoy Trip Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* addding flotin button  */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-25 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
}
