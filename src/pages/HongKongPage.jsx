import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaStar, FaTag, FaCalendarAlt, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";
import { motion, AnimatePresence } from "framer-motion";

// Inside component:
// Change for each page
const HongKongPage = () => {
  const navigate = useNavigate();
const destinationName = 'saudi-arabia'; 
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Mock API data
  const mockOffers = [
    {
      id: 1,
      title: "Luxury Hotel Package",
      description: "5-star accommodation with breakfast and city view",
      price: "$299",
      originalPrice: "$499",
      discount: "40% off",
      category: "hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 128,
      validity: "Valid until Dec 31, 2024",
      terms: "Free cancellation • Breakfast included",
    },
    {
      id: 2,
      title: "Flight + Hotel Combo",
      description: "Round trip flights with 4-night hotel stay",
      price: "$899",
      originalPrice: "$1299",
      discount: "30% off",
      category: "combo",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 245,
      validity: "Valid until Jan 15, 2025",
      terms: "Flexible dates • All inclusive",
    },
    {
      id: 3,
      title: "Hong Kong Disneyland Tickets",
      description: "1-day pass with express access",
      price: "$89",
      originalPrice: "$120",
      discount: "25% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 567,
      validity: "Valid for 6 months",
      terms: "Mobile ticket • Instant confirmation",

    },
    {
      id: 4,
      title: "Victoria Peak Tour",
      description: "Guided tour with tram tickets",
      price: "$45",
      originalPrice: "$65",
      discount: "30% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 189,
      validity: "Valid until Mar 31, 2025",
      terms: "English guide • Hotel pickup",
     
    },
    {
      id: 5,
      title: "Airport Transfer Service",
      description: "Private car transfer to city center",
      price: "$35",
      originalPrice: "$50",
      discount: "30% off",
      category: "transport",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      reviews: 92,
      validity: "Valid for booking 24 hours in advance",
      terms: "Meet & greet • 24/7 service",
     
    },
    {
      id: 6,
      title: "Shopping Voucher Package",
      description: "$200 shopping credit at premium outlets",
      price: "$150",
      originalPrice: "$200",
      discount: "25% off",
      category: "shopping",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.3,
      reviews: 76,
      validity: "Valid until Feb 28, 2025",
      terms: "Multiple stores • Tax free",
      
    }
  ];

  const categories = [
    { id: 'all', name: 'All Offers', count: 56 },
    { id: 'hotels', name: 'Hotels', count: 23 },
    { id: 'flights', name: 'Flights', count: 15 },
    { id: 'combo', name: 'Combo Deals', count: 8 },
    { id: 'activities', name: 'Activities', count: 12 },
    { id: 'tours', name: 'Tours', count: 18 },
    { id: 'transport', name: 'Transport', count: 9 },
    { id: 'shopping', name: 'Shopping', count: 7 }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchOffers = async () => {
      try {
        setLoading(true);
        // Using mock data for demonstration
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
    // Implement search functionality
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Hong Kong offers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Offers</h3>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section - Taller container */}
      <BackButton className="container mx-auto px-4 pt-6"/>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/30">
                <span className="font-medium">Hong Kong - Asia's World City</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Amazing Hong Kong <br />Deals & Offers
              </h1>
              <p className="text-xl lg:text-2xl opacity-95 mb-10 max-w-2xl font-light">
                Discover exclusive offers on hotels, flights, activities and more in vibrant Hong Kong
              </p>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl p-3 shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center px-6 py-4">
                  <FaSearch className="text-gray-400 mr-4 text-xl" />
                  <input
                    type="text"
                    placeholder="Search for hotels, flights, activities in Hong Kong..."
                    className="w-full outline-none text-gray-800 placeholder-gray-400 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:-translate-y-1"
                >
                  Search Hong Kong
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">56+</div>
                <div className="text-sm opacity-95">Exclusive Offers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">35%</div>
                <div className="text-sm opacity-95">Average Savings</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-sm opacity-95">Average Rating</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-95">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 lg:py-16">
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Browse Hong Kong Categories</h2>
            <div className="hidden lg:flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Most Popular</option>
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Categories Scrollable Tabs - Taller */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50'
                  }`}
                >
                  {category.name}
                  <span className={`ml-3 text-sm ${selectedCategory === category.id ? 'opacity-80' : 'text-gray-500'}`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredOffers.length} Hong Kong Offers Found
            </h3>
            <div className="lg:hidden">
              <button className="flex items-center text-gray-600 bg-white px-5 py-3 rounded-xl border">
                <FaFilter className="mr-3" />
                Filter & Sort
              </button>
            </div>
          </div>

          {/* Taller offer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Offer Image - Taller */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Discount Badge - Larger */}
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {offer.discount} OFF
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                    {offer.category}
                  </div>
                </div>

                {/* Offer Details - More padding */}
                <div className="p-7">
                  <div className="mb-5">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h4>
                    <p className="text-gray-600">{offer.description}</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-5">
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
                      <span className="ml-3 font-semibold text-gray-800">{offer.rating}</span>
                      <span className="ml-2 text-gray-500">({offer.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">{offer.price}</span>
                        <span className="ml-4 text-gray-500 line-through text-lg">{offer.originalPrice}</span>
                      </div>
                      <div className="text-sm text-blue-600 font-semibold mt-2">
                        Save ${parseInt(offer.originalPrice.replace('$', '')) - parseInt(offer.price.replace('$', ''))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {offer.validity}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-gray-600 mb-7 flex items-start">
                    <FaTag className="mr-3 mt-1 flex-shrink-0" />
                    <span>{offer.terms}</span>
                  </div>

                  {/* Action Buttons - Taller */}
                  <div className="flex space-x-4">
                    <a
                      onClick={() => navigate(`/detail/${destinationName}/${offer.id}`)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:from-blue-700 hover:to-purple-700"
                    >
                      Explore Now
                      <HiExternalLink className="ml-3" />
                    </a>
                    <button className="px-6 py-4 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Hong Kong Section - Taller */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-14 text-white mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">Why Visit Hong Kong?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-4xl mb-5">🏙️</div>
              <h4 className="text-xl font-semibold mb-4">Iconic Skyline</h4>
              <p className="opacity-90">Experience the world-famous Victoria Harbour skyline and Symphony of Lights show</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-4xl mb-5">🍜</div>
              <h4 className="text-xl font-semibold mb-4">Food Paradise</h4>
              <p className="opacity-90">From Michelin-starred restaurants to street food, savor diverse culinary delights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-4xl mb-5">🛍️</div>
              <h4 className="text-xl font-semibold mb-4">Shopping Haven</h4>
              <p className="opacity-90">Luxury malls, markets, and boutiques offering everything from fashion to electronics</p>
            </div>
          </div>
        </div>

        {/* CTA Section - Taller */}
        <div className="text-center py-16 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Ready to Explore Hong Kong?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Book your perfect Hong Kong trip with our exclusive offers and enjoy the best travel experience in Asia's World City
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Download Finvoy-GLobal App
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              View All Hong Kong Deals
            </button>
          </div>
        </div>
      </main>

      {/* Footer - Optional (commented out) */}
      {/* 
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-2xl font-bold">Finvoy-Gobal</h3>
              </div>
              <p className="text-gray-400">Your trusted travel partner for amazing deals and experiences.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Travel Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Flights</a></li>
                <li><a href="#" className="hover:text-white">Hotels</a></li>
                <li><a href="#" className="hover:text-white">Activities</a></li>
                <li><a href="#" className="hover:text-white">Car Rentals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <FaPhone className="mr-3" />
                  <span>+852 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <span>support@Finvoy-Gobal.com</span>
                </li>
                <li className="flex items-center">
                  <FaUser className="mr-3" />
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Finvoy-Gobal. All rights reserved. | Hong Kong Travel Offers</p>
          </div>
        </div>
      </footer>
      */}
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

export default HongKongPage;