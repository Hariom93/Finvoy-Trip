import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaStar, FaTag, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaMosque, FaUtensils, FaLandmark, FaUmbrellaBeach, FaMountain, FaCar } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";
import { motion, AnimatePresence } from "framer-motion";

// Inside component:
 // Change for each page
const SaudiPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const navigate = useNavigate();
  const destinationName = 'saudi-arabia';
  // Mock API data for Saudi Arabia
  const mockOffers = [
    {
      id: 1,
      title: "Riyadh Luxury Hotel Package",
      description: "5-star accommodation in Riyadh with desert views and spa access",
      price: "$279",
      originalPrice: "$450",
      discount: "38% off",
      category: "hotels",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 234,
      validity: "Valid until Dec 31, 2024",
      terms: "Free cancellation • Breakfast included • Spa access",
    },
    {
      id: 2,
      title: "Jeddah Corniche Hotel Stay",
      description: "Beachfront accommodation with Red Sea views in Jeddah",
      price: "$229",
      originalPrice: "$380",
      discount: "39% off",
      category: "hotels",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 189,
      validity: "Valid until Mar 31, 2025",
      terms: "Sea view • Free parking • Family friendly",
    },
    {
      id: 3,
      title: "Makkah & Madinah Spiritual Tour",
      description: "5-day guided pilgrimage tour with accommodation and transport",
      price: "$899",
      originalPrice: "$1,450",
      discount: "38% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 567,
      validity: "Valid for Umrah season 2025",
      terms: "Guided tours • Accommodation • Transportation included",
    },
    {
      id: 4,
      title: "AlUla Desert Experience",
      description: "2-day tour of historical AlUla with Hegra visit and desert camp",
      price: "$450",
      originalPrice: "$750",
      discount: "40% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 278,
      validity: "Valid until Apr 30, 2025",
      terms: "Desert camp • Guide • Meals included",
    },
    {
      id: 5,
      title: "Riyadh to Jeddah Flight",
      description: "Return flights with 30kg baggage allowance",
      price: "$249",
      originalPrice: "$420",
      discount: "40% off",
      category: "flights",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 145,
      validity: "Travel until Jun 2025",
      terms: "Flexible dates • Free changes • 30kg baggage",
    },
    {
      id: 6,
      title: "Red Sea Diving Package",
      description: "Scuba diving experience in Jeddah with equipment and guide",
      price: "$189",
      originalPrice: "$320",
      discount: "41% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 198,
      validity: "Valid for 12 months",
      terms: "Certified guide • Equipment • Photos included",
    },
    {
      id: 7,
      title: "Saudi Traditional Dinner Experience",
      description: "Authentic Saudi cuisine with cultural performance in Riyadh",
      price: "$85",
      originalPrice: "$150",
      discount: "43% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 167,
      validity: "Valid until Dec 2025",
      terms: "Dinner included • Cultural show • Hotel pickup",
    },
    {
      id: 8,
      title: "Car Rental Package - 7 Days",
      description: "SUV rental with unlimited kilometers across Saudi Arabia",
      price: "$299",
      originalPrice: "$520",
      discount: "42% off",
      category: "transport",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 123,
      validity: "Valid for 6 months",
      terms: "Unlimited km • Full insurance • Free cancellation",
    },
    {
      id: 9,
      title: "Diriyah Historical Tour",
      description: "Full-day tour of Diriyah UNESCO site with guide",
      price: "$95",
      originalPrice: "$165",
      discount: "42% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 189,
      validity: "Valid for 12 months",
      terms: "Expert guide • Entrance fees • Transportation",
    }
  ];

  const categories = [
    { id: 'all', name: 'All Offers', count: 58, icon: <FaMapMarkerAlt /> },
    { id: 'hotels', name: 'Hotels', count: 22, icon: <FaUser /> },
    { id: 'flights', name: 'Flights', count: 12, icon: <FaCar /> },
    { id: 'tours', name: 'Tours', count: 15, icon: <FaLandmark /> },
    { id: 'activities', name: 'Activities', count: 11, icon: <FaUtensils /> },
    { id: 'transport', name: 'Transport', count: 8, icon: <FaCar /> }
  ];

  const cities = [
    { name: 'Riyadh', count: 18 },
    { name: 'Jeddah', count: 14 },
    { name: 'Makkah', count: 12 },
    { name: 'Madinah', count: 10 },
    { name: 'AlUla', count: 6 },
    { name: 'Abha', count: 5 }
  ];

  const experiences = [
    { icon: <FaMosque />, title: 'Spiritual Journey', desc: 'Umrah packages & religious sites' },
    { icon: <FaLandmark />, title: 'Historical Sites', desc: 'UNESCO heritage & ancient ruins' },
    { icon: <FaUmbrellaBeach />, title: 'Coastal Escape', desc: 'Red Sea beaches & diving' },
    { icon: <FaMountain />, title: 'Desert Adventure', desc: 'Desert camps & safari tours' }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchOffers = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setOffers(mockOffers);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load offers. Please try again.');
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || offer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sand-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-700 font-semibold">Loading Saudi Arabia offers...</p>
          <p className="text-gray-500 text-sm mt-2">Discover the Kingdom's treasures</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sand-50 to-amber-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Offers</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-amber-50">
      {/* Hero Section with Saudi Theme */}
      <BackButton className="container mx-auto px-4 pt-6"/>
      <div className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 text-white relative overflow-hidden">
        {/* Arabic Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/30">
                <FaMapMarkerAlt className="mr-3" />
                <span className="font-medium">Saudi Arabia Revamp - Exclusive Offers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Experience the New <br />Saudi Arabia
              </h1>
              <p className="text-xl lg:text-2xl opacity-95 mb-8 max-w-2xl font-light">
                Discover ancient heritage, modern marvels, and authentic Arabian hospitality in the Kingdom's transformation
              </p>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl p-3 shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center px-6 py-4">
                  <FaSearch className="text-gray-400 mr-4 text-xl" />
                  <input
                    type="text"
                    placeholder="Search hotels, Umrah packages, tours in Saudi Arabia..."
                    className="w-full outline-none text-gray-800 placeholder-gray-400 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:-translate-y-1"
                >
                  Explore Saudi Arabia
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">58+</div>
                <div className="text-sm opacity-95">Exclusive Offers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm opacity-95">Average Savings</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm opacity-95">Average Rating</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-95">Arabic Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Experience Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Saudi Experiences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="text-3xl text-green-700 mb-4 flex justify-center">{exp.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{exp.title}</h3>
                <p className="text-gray-600 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cities Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Saudi Cities</h2>
          <div className="flex flex-wrap gap-3">
            {cities.map((city, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full font-medium hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-colors"
              >
                {city.name}
                <span className="ml-2 text-sm text-gray-500">({city.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            <div className="hidden lg:flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="popular">Most Popular</option>
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Categories Scrollable Tabs */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-3 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-4 rounded-xl font-medium whitespace-nowrap transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                  <span className={`ml-2 text-sm ${selectedCategory === category.id ? 'opacity-80' : 'text-gray-500'}`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredOffers.length} Saudi Arabia Offers Found
            </h3>
            <div className="lg:hidden">
              <button className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg border">
                <FaFilter className="mr-2" />
                Filter & Sort
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                {/* Offer Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {offer.discount} OFF
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {offer.category}
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h4>
                    <p className="text-gray-600 text-sm">{offer.description}</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${
                            i < Math.floor(offer.rating) 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-semibold text-gray-800">{offer.rating}</span>
                      <span className="ml-1 text-gray-500">({offer.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{offer.price}</span>
                        <span className="ml-3 text-gray-500 line-through text-lg">{offer.originalPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold mt-1">
                        Save ${parseInt(offer.originalPrice.replace('$', '')) - parseInt(offer.price.replace('$', ''))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {offer.validity}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-gray-600 mb-6 flex items-start">
                    <FaTag className="mr-2 mt-1 flex-shrink-0" />
                    <span>{offer.terms}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                    onClick={() => navigate(`/detail/${destinationName}/${offer.id}`)}
                      
                      className="flex-1 bg-gradient-to-r from-green-700 to-emerald-700 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:from-green-800 hover:to-emerald-800"
                    >
                      Explore Now
                      <HiExternalLink className="ml-2" />
                    </a>
                    <button className="px-5 py-4 border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Saudi Arabia Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-16 relative overflow-hidden">
          {/* Arabic Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff'/%3E%3C/svg%3E")`,
              backgroundSize: '200px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Discover Saudi Arabia's Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🕌</div>
                <h4 className="text-xl font-semibold mb-3">Spiritual Heritage</h4>
                <p className="opacity-90">Experience the sacred sites of Makkah and Madinah, with modern facilities enhancing the pilgrimage experience.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🏜️</div>
                <h4 className="text-xl font-semibold mb-3">Vision 2030 Projects</h4>
                <p className="opacity-90">Witness NEOM, Red Sea Project, and Qiddiya - visionary developments transforming tourism in the Kingdom.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-xl font-semibold mb-3">Ancient History</h4>
                <p className="opacity-90">Explore UNESCO sites like AlUla's Hegra, Diriyah's mud-brick architecture, and ancient trade routes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 px-4">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-2 rounded-full mb-6">
              <span className="font-semibold">Special Offer</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore Saudi Arabia?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              From ancient heritage sites to modern megaprojects, Saudi Arabia offers unique experiences. Book your journey to discover the Kingdom's rich culture and transformation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-green-700 to-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Book Umrah Package
            </button>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              View All Saudi Deals
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🇸🇦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Saudi Arabia</h3>
                  <p className="text-green-400 font-medium">Vision 2030 - Tourism Revamp</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for discovering Saudi Arabia's transformation. Experience authentic Arabian hospitality with our exclusive offers.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-300">Popular Cities</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline">Riyadh (Capital)</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Jeddah (Red Sea)</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Makkah (Holy City)</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Madinah (Prophet's City)</a></li>
                <li><a href="#" className="hover:text-white hover:underline">AlUla (Historical)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-300">Special Experiences</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline">Umrah Packages</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Desert Safaris</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Red Sea Diving</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Cultural Tours</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Shopping Festivals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-300">Contact in Saudi</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <FaPhone className="mr-3 mt-1 text-green-400" />
                  <div>
                    <div className="font-medium">Saudi Support</div>
                    <div>+966 11 123 4567</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="mr-3 mt-1 text-green-400" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div>ksa@Finvoy-Global.com</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUser className="mr-3 mt-1 text-green-400" />
                  <div>
                    <div className="font-medium">Arabic Speakers</div>
                    <div>Local Saudi experts</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="mb-4">
              <span className="text-gray-400">In partnership with:</span>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <span className="text-gray-300">Saudi Tourism Authority</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">Vision 2030</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">Ministry of Hajj</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Finvoy-Global
              . All rights reserved. | Saudi Arabia Tourism Revamp | Part of Saudi Vision 2030
            </p>
          </div>
        </div>
      </footer> */}
        <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-22 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 z-40 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default SaudiPage;
