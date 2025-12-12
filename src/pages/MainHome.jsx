import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import packages from "../Data/packagesData";
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
  FaChevronLeft
} from "react-icons/fa";
import { HiLocationMarker, HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/logo.png";
import coinLogo from "../assets/supercoins-chip-icon.webp";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.webp";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

// Airline Logos
import indigo from "../assets/IndigoLogo.webp";
import malaysia from "../assets/malaysiaLogo.webp";
import airindia from "../assets/AirindiaLogo.webp";
import airexpress from "../assets/AirindiaexpressLogo.webp";
import airasia from "../assets/AirAsiaLogo.webp";
import vietjet from "../assets/VietjetthaiLogo.webp";
import spicejet from "../assets/SpicejetLogo.webp";
import akasa from "../assets/AkasaLogo.jpg";

// Slider Images
import GatwayImg1 from "../assets/GatwayImg.jpg";
import GatwayImg2 from "../assets/GatwayImg2.jpg";
import GatwayImg3 from "../assets/GatwayImg3.jpg";

export default function MainHome() {
  const [startX, setStartX] = useState(null);
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('round');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const airlines = [indigo, malaysia, airindia, airexpress, airasia, vietjet, spicejet, akasa];

  const images = [
    { 
      img: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80", 
      link: "/hongkong", 
      label: "Hong Kong" 
    },
    { 
      img: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      link: "/saudi", 
      label: "Saudi Arabia" 
    },
    { 
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80", 
      link: "/western-america", 
      label: "Western America" 
    },
  ];

  const popularDestinations = [
    // Delhi
    { 
      id: "delhi",   // ✅ added ID
      city: "Delhi",
      code: "DEL",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "India Gate",
      country: "India"
    },
  
    // Mumbai
    { 
      id: "mumbai",  // ✅ added ID
      city: "Mumbai",
      code: "BOM",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Chhatrapati Shivaji Terminus",
      country: "India"
    },
  
    // Bangalore
    { 
      id: "bangalore", // ✅ added ID
      city: "Bangalore",
      code: "BLR",
      image: "https://media.istockphoto.com/id/2224221889/photo/beautiful-view-of-bangalore-skyline-cityscape-at-the-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVsHeF5XPJ_1XB2H6dclrDDHpR2Nlr6xncdeQD7JByI=",
      landmark: "Vidhana Soudha",
      country: "India"
    },
  
    // Goa
    { 
      id: "goa",  // ✅ added ID
      city: "Goa",
      code: "GOI",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Baga Beach",
      country: "India"
    },
  
    // Dubai
    { 
      id: "dubai", // ✅ added ID
      city: "Dubai",
      code: "DXB",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Burj Khalifa",
      country: "UAE"
    },
  
    // Singapore
    { 
      id: "singapore", // ✅ added ID
      city: "Singapore",
      code: "SIN",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      landmark: "Marina Bay Sands",
      country: "Singapore"
    },
  ];
  

  const trendingHotels = [
    {
      name: 'Taj Mahal Palace',
      location: 'Mumbai',
      rating: 4.8,
      reviews: 2345,
      price: '₹12,999',
      originalPrice: '₹18,999',
      discount: '31%',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      name: 'The Leela Palace',
      location: 'Bangalore',
      rating: 4.7,
      reviews: 1890,
      price: '₹10,499',
      originalPrice: '₹15,499',
      discount: '32%',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop'
    },
    {
      name: 'ITC Grand Chola',
      location: 'Chennai',
      rating: 4.9,
      reviews: 3120,
      price: '₹14,999',
      originalPrice: '₹22,999',
      discount: '35%',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop'
    },
    {
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur',
      rating: 4.9,
      reviews: 2789,
      price: '₹24,999',
      originalPrice: '₹34,999',
      discount: '29%',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop'
    },
  ];

  const travelCategories = [
    { icon: <FaPlane />, title: 'Flights', description: 'Domestic & International', color: 'from-blue-500 to-purple-500', link: '/flight' },
    { icon: <FaHotel />, title: 'Hotels', description: 'Best Price Guarantee', color: 'from-green-500 to-teal-500', link: '/hotels' },
    { icon: <FaTrain />, title: 'Trains', description: 'IRCTC Authorized', color: 'from-orange-500 to-red-500', link: '/trains' },
    { icon: <FaBus />, title: 'Buses', description: 'AC & Sleeper Buses', color: 'from-purple-500 to-pink-500', link: '/buses' },
    { icon: <FaCar />, title: 'Cabs', description: 'Outstation & Local', color: 'from-indigo-500 to-blue-500', link: '/cabs' },
  ];

  const offers = [
    { title: 'Up to 25% OFF', description: 'On International Flights', code: 'INTFLY25', color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { title: 'FLAT ₹2,000 OFF', description: 'On Hotel Bookings', code: 'HOTEL2K', color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { title: 'Up to 30% OFF', description: 'On Bus Tickets', code: 'BUS30', color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { title: '₹1,500 CASHBACK', description: 'On First Train Booking', code: 'TRAIN15', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  ];

  const travelBoxes = [
    { img: Img1, name: "Flights", text: "Up to 25% off", link: "/flight" },
    { img: Img2, name: "Holidays", text: "Plan your trip", link: "/holiday" }
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
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-18">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Cleartrip Logo" className="h-20 w-auto md:h-22 sm:h-18 " />
              <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Finvoy-Trip</h1>
            </div>

            {/* Super Coins */}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">My Trips</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Support</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Blog</a>
              <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                <HiOutlineUserCircle className="text-gray-600 text-xl" />
                <span className="font-medium">Login / Sign up</span>
              </button>
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
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">My Trips</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Support</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2">Blog</a>
                <button className="flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-lg w-full justify-center">
                  <HiOutlineUserCircle className="text-gray-600 text-xl" />
                  <span className="font-medium">Login / Sign up</span>
                </button>
              </div>
            </div>
          )}
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to FInvoy-Trip!</h2>
                <p className="text-gray-700">
                  Save big with our exclusive offers, amazing deals, and earn Supercoins on every booking!
                </p>
              </div>
            </div>
          </div>
        )}

 {/* Quick Travel Boxes */}
 <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Quick Bookings
            </h2>
            <div className="flex justify-center gap-4 md:gap-6">
              {travelBoxes.map((item, index) => (
                <NavLink key={index} to={item.link}>
                  <div className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 text-center hover:-translate-y-1 border border-gray-100 w-40 md:w-48">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4  rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-16 h-16 md:w-16 md:h-16 object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{item.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm md:text-base">{item.text}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Destinations</h2>
              <button className="text-blue-600 font-semibold flex items-center text-sm md:text-base">
                View All <FaChevronRight className="ml-1 md:ml-2" />
              </button>
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
                      <h4 className="font-bold text-sm md:text-lg">{dest.city}</h4>
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
                w-full 
                h-24 md:h-32 
                object-contain
                transition-all duration-300
                hover:scale-110 hover:grayscale-0
                filter grayscale
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Getaways Curated For You</h2>
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
                          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{item.label}</h3>
                          <p className="text-white/90 text-sm md:text-base mb-3 md:mb-4">Discover amazing deals and experiences</p>
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
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${current === i ? 'bg-white w-4 md:w-8' : 'bg-white/50 hover:bg-white/80'}`}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Exclusive Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className={`${offer.color} rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{offer.title}</h3>
                  <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">{offer.description}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 inline-block">
                    <p className="font-mono font-bold text-xs md:text-sm">Use Code: {offer.code}</p>
                  </div>
                  <button className="mt-4 md:mt-6 bg-white text-gray-900 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors w-full">
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
                About Finvoy-Trip
              </h2>
              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Launched in July 2006, <strong className="text-gray-900">Finvoy-Trip Pvt Ltd</strong>, a Flipkart company, has emerged as India's fastest-growing online travel technology company. In April 2021, Flipkart acquired a majority stake in Cleartrip.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cleartrip recently emerged as the no. 2 OTA player as per a study by VIDEC. With an aggressive plan to emerge as a leading innovator in the industry, Cleartrip is on its way to revolutionize travel experiences across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-8 md:pt-12 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <img src={logo} alt="Cleartrip" className="h-8 md:h-10 w-auto filter brightness-0 invert" />
                <span className="text-xl md:text-2xl font-bold">Finvoy-Trip</span>
              </div>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                Your trusted travel partner for amazing deals and experiences across India and beyond.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                {['Flights', 'Hotels', 'Trains', 'Buses', 'Cabs', 'Holidays'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Cleartrip for Business'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-6 md:my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-xs md:text-sm">
                © 2006–2025 Cleartrip Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                Covid-19 lockdown refund procedure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/visa.svg" alt="Visa" className="h-6 md:h-8" />
              <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/mastercard.svg" alt="Mastercard" className="h-6 md:h-8" />
              <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/rupay.svg" alt="RuPay" className="h-6 md:h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}