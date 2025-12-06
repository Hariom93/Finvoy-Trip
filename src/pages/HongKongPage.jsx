import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaStar, FaTag, FaCalendarAlt, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const HongKongPage = () => {
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
      bookingLink: "https://www.cleartrip.com/hotels/details/1"
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
      bookingLink: "https://www.cleartrip.com/combo/2"
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
      bookingLink: "https://www.cleartrip.com/activities/3"
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
      bookingLink: "https://www.cleartrip.com/tours/4"
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
      bookingLink: "https://www.cleartrip.com/transport/5"
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
      bookingLink: "https://www.cleartrip.com/shopping/6"
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Now starts at the top since navbar is removed */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Amazing Hong Kong Deals
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover exclusive offers on hotels, flights, activities and more in Hong Kong
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-xl p-2 shadow-xl">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center px-4 py-3">
                  <FaSearch className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for hotels, flights, activities..."
                    className="w-full outline-none text-gray-800 placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Search Offers
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2">
                <FaFilter className="text-gray-500" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-1 text-gray-700"
                >
                  <option value="popular">Most Popular</option>
                  <option value="discount">Highest Discount</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Categories Scrollable Tabs */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredOffers.length} Offers Found
            </h3>
            <div className="lg:hidden">
              <button className="flex items-center text-gray-600">
                <FaFilter className="mr-2" />
                Filter & Sort
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Offer Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount} OFF
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{offer.title}</h4>
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                      {offer.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
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
                      <span className="ml-2 text-gray-700 font-semibold">{offer.rating}</span>
                      <span className="ml-1 text-gray-500">({offer.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{offer.price}</span>
                      <span className="ml-2 text-gray-500 line-through">{offer.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {offer.validity}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-gray-600 mb-6 flex items-center">
                    <FaTag className="mr-2" />
                    {offer.terms}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={offer.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      Book Now
                      <HiExternalLink className="ml-2" />
                    </a>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Hong Kong Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Hong Kong?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl mb-4">🏙️</div>
              <h4 className="text-xl font-semibold mb-2">Iconic Skyline</h4>
              <p className="opacity-90">Experience the world-famous Victoria Harbour skyline and Symphony of Lights</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl mb-4">🍜</div>
              <h4 className="text-xl font-semibold mb-2">Food Paradise</h4>
              <p className="opacity-90">From Michelin-starred restaurants to street food, savor diverse culinary delights</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <div className="text-3xl mb-4">🛍️</div>
              <h4 className="text-xl font-semibold mb-2">Shopping Haven</h4>
              <p className="opacity-90">Luxury malls, markets, and boutiques offering everything from fashion to electronics</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Hong Kong?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your perfect Hong Kong trip with our exclusive offers and enjoy the best travel experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300">
              Download Cleartrip App
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300">
              View All Hong Kong Deals
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-2xl font-bold">Cleartrip</h3>
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
                  <span>support@cleartrip.com</span>
                </li>
                <li className="flex items-center">
                  <FaUser className="mr-3" />
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Cleartrip. All rights reserved. | Hong Kong Travel Offers</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HongKongPage;