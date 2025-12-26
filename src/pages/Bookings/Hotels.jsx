import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Star, 
  Wifi, 
  Coffee, 
  Car, 
  Dumbbell,
  MapPin,
  Filter,
  ChevronRight,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [issearch, setisSearch] = useState(false);
  const [guests, setGuests] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: [50, 500],
    rating: 0,
    amenities: []
  });

  const navigate=useNavigate()

  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Grand Marina Bay..",
      location: "Singapore",
      rating: 4.8,
      price: 299,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      amenities: ["wifi", "pool", "spa","gym"],
      description: "Luxury waterfront hotel with panoramic city views and world-class amenities.",
      trending: true,
      sustainable: true
    },
    {
      id: 2,
      name: "Alpine Retreat Lodge",
      location: "Swiss Alps",
      rating: 4.9,
      price: 450,
      image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=800",
      amenities: ["wifi", "fireplace", "spa", "ski"],
      description: "Mountain resort offering ski-in/ski-out access and cozy alpine accommodations.",
      trending: true,
      sustainable: true
    },
    {
      id: 3,
      name: "Urban Oasis Tower",
      location: "Tokyo",
      rating: 4.7,
      price: 320,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800",
      amenities: ["wifi", "gym", "bar", "concierge"],
      description: "Modern high-rise in the heart of Tokyo with cutting-edge design and technology.",
      trending: false,
      sustainable: true
    },
    {
      id: 4,
      name: "Desert Mirage Resort",
      location: "Dubai",
      rating: 4.6,
      price: 380,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800",
      amenities: ["wifi", "pool", "spa", "golf"],
      description: "Luxury desert resort featuring private villas and exclusive desert experiences.",
      trending: true,
      sustainable: false
    },
    {
      id: 5,
      name: "Historic Grand Plaza",
      location: "Paris",
      rating: 4.5,
      price: 275,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      amenities: ["wifi", "restaurant", "concierge", "historic"],
      description: "Restored 19th-century hotel blending historic charm with modern luxury.",
      trending: false,
      sustainable: true
    },
    {
      id: 6,
      name: "Oceanfront Paradise",
      location: "Bali",
      rating: 4.9,
      price: 220,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800",
      amenities: ["wifi", "beach", "spa", "yoga"],
      description: "Tropical beachfront resort with private villas and wellness-focused amenities.",
      trending: true,
      sustainable: true
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, label: "Free WiFi", value: "wifi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Breakfast", value: "breakfast" },
    { icon: <Car className="w-5 h-5" />, label: "Parking", value: "parking" },
    { icon: <Dumbbell className="w-5 h-5" />, label: "Gym", value: "gym" },
    { icon: "🏊", label: "Pool", value: "pool" },
    { icon: "♨️", label: "Spa", value: "spa" },
    { icon: "🍽️", label: "Restaurant", value: "restaurant" }
  ];

  const destinations = [
    { name: "Singapore", icon: "🇸🇬" },
    { name: "Tokyo", icon: "🇯🇵" },
    { name: "Paris", icon: "🇫🇷" },
    { name: "Dubai", icon: "🇦🇪" },
    { name: "Bali", icon: "🇮🇩" },
    { name: "Swiss Alps", icon: "🇨🇭" }
  ];

  // Filter hotels based on search and filters
  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1];
    const matchesRating = hotel.rating >= filters.rating;
    const matchesAmenities = filters.amenities.length === 0 || 
                           filters.amenities.every(amenity => hotel.amenities.includes(amenity));
    
    return matchesSearch && matchesPrice && matchesRating && matchesAmenities;
  });

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <BackButton className="container mx-auto px-4 pt-6"/>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="absolute inset-0  bg-black opacity-10"></div>
         <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Luxury Stays
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Experience world-class accommodations with Finvoy-Global
          </p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6  shadow-2xl max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:flex  lg:items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="flex items-center text-gray-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-2 ">
                <label className="flex items-center text-gray-600 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Check-in / Check-out
                </label>
                <div className="flex space-x-2">
                  <input
                    type="date"
                    className="w-full px-2 py-3 text-black rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="w-full px-2 py-3 text-black rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </div>
              </div>     
              <div className="flex justify-end lg:pt-6  items-center">
                {
                    issearch ? (
                    <div className={`w-full bg-gradient-to-r from-blue-600 to-purple-600  transform transition-all duration-300 ease-in-out rounded-xl p-[2px]
                            ${issearch ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                        <div className={`flex items-center bg-white rounded-xl px-4 py-3 `}>
                          <Search className="w-5 h-5 text-gray-500 mr-2" />
                      
                          <input
                            type="text"
                            placeholder="Search Hotels"
                            onFocus={() => {
                                setisSearch(true);
                            }}
                            className="w-full outline-none text-gray-800 font-semibold placeholder-gray-500"
                          />
                        </div>
                      </div>
                      ):(<button
                      onClick={()=>setisSearch(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                        <Search className="w-5 h-5 mr-2" />
                        Search Hotels
                      </button>)
                }
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h2>
                <button 
                  onClick={() => setFilters({
                    priceRange: [50, 500],
                    rating: 0,
                    amenities: []
                  })}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Reset all
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                    }))}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}+</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Minimum Rating</h3>
                <div className="flex space-x-2">
                  {[4, 4.5, 4.8].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        rating: prev.rating === rating ? 0 : rating
                      }))}
                      className={`flex-1 py-2 rounded-lg transition-colors ${
                        filters.rating === rating 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {rating}+
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Amenities</h3>
                <div className="space-y-2">
                  {amenities.map((amenity) => (
                    <button
                      key={amenity.value}
                      onClick={() => handleAmenityToggle(amenity.value)}
                      className={`flex items-center w-full p-3 rounded-xl transition-all ${
                        filters.amenities.includes(amenity.value)
                          ? 'bg-blue-50 border-2 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <span className="mr-3">{amenity.icon}</span>
                      <span className="font-medium text-gray-700">{amenity.label}</span>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                          filters.amenities.includes(amenity.value)
                            ? 'bg-blue-500 border-blue-500'
                            : 'bg-white border-gray-300'
                        }`}>
                          {filters.amenities.includes(amenity.value) && (
                            <ChevronRight className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Destinations */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Popular Destinations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {destinations.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => setSearchQuery(dest.name)}
                      className="bg-gradient-to-br from-gray-50 to-blue-50 p-3 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{dest.icon}</span>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {dest.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Hotels Grid */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-3/4"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Luxury Hotels & Resorts
                </h2>
                <p className="text-gray-600">
                  {filteredHotels.length} properties found
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Secure Booking</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Global Coverage</span>
                </div>
              </div>
            </div>

            {/* Hotels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredHotels.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  variants={itemVariants}
                  whileHover="hover"
                  custom={cardHoverVariants}
                  className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                >
                  {/* Hotel Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {hotel.trending && (
                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                      {hotel.sustainable && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Eco-Friendly
                        </span>
                      )}
                    </div>
                    
                    {/* Price */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl">
                      <div className="text-2xl font-bold text-gray-800">${hotel.price}</div>
                      <div className="text-xs text-gray-600">per night</div>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {hotel.location}
                        </div>
                      </div>
                      <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-bold text-gray-800">{hotel.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => {
                            setSelectedHotel(hotel);      // existing logic
                            navigate(`/hotel/${hotel.id}`); // navigation
                          }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-2 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                            setSelectedHotel(hotel);      // existing logic
                            navigate(`/hotel/${hotel.id}`); // navigation
                          }}
                      className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                        Book Now
                      </button>
                    </div>
               </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredHotels.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🏨</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  No hotels found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your filters or search criteria
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      priceRange: [50, 500],
                      rating: 0,
                      amenities: []
                    });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Book With Finvoy-Global?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Exclusive Deals",
                description: "Access member-only rates and special offers unavailable elsewhere"
              },
              {
                icon: "🛡️",
                title: "Price Guarantee",
                description: "We'll match any lower price you find within 24 hours of booking"
              },
              {
                icon: "🌟",
                title: "Premium Support",
                description: "24/7 dedicated customer service for all your travel needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Add this modal for hotel details */}
      {selectedHotel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedHotel(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedHotel.name}</h2>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    {selectedHotel.location}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img
                  src={selectedHotel.image}
                  alt={selectedHotel.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600">{selectedHotel.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold text-gray-800">${selectedHotel.price}</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hotels;