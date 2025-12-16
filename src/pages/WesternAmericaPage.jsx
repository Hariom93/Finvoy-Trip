import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaStar, FaTag, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTree, FaWater, FaMountain, FaSun, FaCamera, FaCar } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

// Inside component:
 // Change for each page
const WesternAmericaPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const navigate = useNavigate();
  const destinationName = 'Wastern-America';
  // Mock API data for Western Australia
  const mockOffers = [
    {
      id: 1,
      title: "Perth Luxury Hotel Stay",
      description: "5-star accommodation in Perth CBD with Swan River views",
      price: "$329",
      originalPrice: "$549",
      discount: "40% off",
      category: "hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 189,
      validity: "Valid until Dec 31, 2024",
      terms: "Free cancellation • Breakfast included • River view",
      bookingLink: "https://www.cleartrip.com/hotels/details/perth-luxury"
    },
    {
      id: 2,
      title: "Rottnest Island Adventure",
      description: "Ferry tickets + bike rental + snorkeling gear",
      price: "$89",
      originalPrice: "$135",
      discount: "34% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 342,
      validity: "Valid for 12 months",
      terms: "Quokka spotting • All equipment • Flexible dates",
      bookingLink: "https://www.cleartrip.com/activities/rottnest-island"
    },
    {
      id: 3,
      title: "Margaret River Wine Tour",
      description: "Full-day wine tasting at 5 premium vineyards",
      price: "$145",
      originalPrice: "$220",
      discount: "34% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 267,
      validity: "Valid until Mar 31, 2025",
      terms: "Lunch included • Hotel pickup • Wine tasting",
      bookingLink: "https://www.cleartrip.com/tours/margaret-river"
    },
    {
      id: 4,
      title: "Perth to Broome Flight",
      description: "Return flights with 23kg baggage allowance",
      price: "$399",
      originalPrice: "$650",
      discount: "38% off",
      category: "flights",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 156,
      validity: "Travel until Jun 2025",
      terms: "Flexible dates • Free changes • 23kg baggage",
      bookingLink: "https://www.cleartrip.com/flights/perth-broome"
    },
    {
      id: 5,
      title: "4WD Kimberley Adventure",
      description: "7-day guided 4WD tour through the Kimberley",
      price: "$2,499",
      originalPrice: "$3,800",
      discount: "34% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89,
      validity: "Apr - Oct 2025 season",
      terms: "All meals • Camping gear • Expert guide",
      bookingLink: "https://www.cleartrip.com/tours/kimberley-4wd"
    },
    {
      id: 6,
      title: "Ningaloo Reef Snorkeling",
      description: "Whale shark swimming experience + gear",
      price: "$395",
      originalPrice: "$580",
      discount: "32% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 423,
      validity: "Mar - Aug 2025 season",
      terms: "Certified guides • All equipment • Photos included",
      bookingLink: "https://www.cleartrip.com/activities/ningaloo-reef"
    },
    {
      id: 7,
      title: "Perth Car Rental Package",
      description: "7-day SUV rental with unlimited kilometers",
      price: "$299",
      originalPrice: "$450",
      discount: "33% off",
      category: "transport",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 134,
      validity: "Valid for 6 months",
      terms: "Unlimited km • Full insurance • Free cancellation",
      bookingLink: "https://www.cleartrip.com/transport/perth-car-rental"
    },
    {
      id: 8,
      title: "Pinnacles Desert Tour",
      description: "Day tour from Perth with stargazing option",
      price: "$125",
      originalPrice: "$185",
      discount: "32% off",
      category: "tours",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 278,
      validity: "Valid until Dec 2025",
      terms: "Hotel pickup • Dinner included • Guide",
      bookingLink: "https://www.cleartrip.com/tours/pinnacles-desert"
    },
    {
      id: 9,
      title: "Busselton Jetty Experience",
      description: "Underwater observatory + train ride + lunch",
      price: "$65",
      originalPrice: "$95",
      discount: "31% off",
      category: "activities",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 189,
      validity: "Valid for 12 months",
      terms: "Family friendly • Accessible • Photos allowed",
      bookingLink: "https://www.cleartrip.com/activities/busselton-jetty"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Offers', count: 42, icon: <FaMapMarkerAlt /> },
    { id: 'hotels', name: 'Hotels', count: 15, icon: <FaUser /> },
    { id: 'flights', name: 'Flights', count: 8, icon: <FaSun /> },
    { id: 'tours', name: 'Tours', count: 12, icon: <FaCamera /> },
    { id: 'activities', name: 'Activities', count: 10, icon: <FaTree /> },
    { id: 'transport', name: 'Transport', count: 7, icon: <FaCar /> }
  ];

  const regions = [
    { name: 'Perth & Surrounds', count: 18 },
    { name: 'Margaret River', count: 9 },
    { name: 'Kimberley', count: 6 },
    { name: 'Ningaloo Coast', count: 5 },
    { name: 'Esperance', count: 4 }
  ];

  const experiences = [
    { icon: <FaTree />, title: 'Wilderness', desc: 'Ancient landscapes & national parks' },
    { icon: <FaWater />, title: 'Coastal', desc: 'Pristine beaches & marine life' },
    { icon: <FaMountain />, title: 'Adventure', desc: '4WD tours & outdoor activities' },
    { icon: <FaSun />, title: 'Relaxation', desc: 'Wine regions & luxury retreats' }
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading Western Australia offers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50 flex items-center justify-center">
            
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Offers</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
      {/* Hero Section */}
      <div>
              <BackButton className="container mx-auto px-4 pt-6"/>
              </div>
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-sm font-medium">Western Australia</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Discover Wild <br />Western Australia
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-2xl">
                From rugged outback to pristine coastline, experience the ultimate Australian adventure
              </p>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center px-6 py-4">
                  <FaSearch className="text-gray-400 mr-4 text-xl" />
                  <input
                    type="text"
                    placeholder="Search hotels, tours, activities in WA..."
                    className="w-full outline-none text-gray-800 placeholder-gray-400 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:-translate-y-1"
                >
                  Search Western Australia
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold">42+</div>
                <div className="text-sm opacity-90">Exclusive Offers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm opacity-90">Average Savings</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Experience Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience Western Australia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-3xl text-amber-600 mb-3 flex justify-center">{exp.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-gray-600 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regions Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore by Region</h2>
          <div className="flex flex-wrap gap-3">
            {regions.map((region, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full font-medium hover:bg-amber-50 hover:border-amber-300 transition-colors"
              >
                {region.name}
                <span className="ml-2 text-sm text-gray-500">({region.count})</span>
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
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-amber-50'
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
              {filteredOffers.length} Western Australia Offers Found
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
              <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Offer Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
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
                      <div className="text-sm text-amber-600 font-semibold mt-1">
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
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:from-emerald-700 hover:to-teal-700"
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

        {/* Why Western Australia Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Why Western Australia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">🏜️</div>
              <h4 className="text-xl font-semibold mb-3">Vast Wilderness</h4>
              <p className="opacity-90">Explore the rugged Kimberley, ancient Pinnacles Desert, and stunning national parks covering ⅓ of Australia's landmass.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">🐋</div>
              <h4 className="text-xl font-semibold mb-3">Marine Paradise</h4>
              <p className="opacity-90">Swim with whale sharks at Ningaloo Reef, one of the world's largest fringing coral reefs and a UNESCO World Heritage site.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-4xl mb-4">🍷</div>
              <h4 className="text-xl font-semibold mb-3">Wine & Dine</h4>
              <p className="opacity-90">Discover Margaret River's world-class wineries, gourmet food trails, and fresh local produce in a stunning coastal setting.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready for Your WA Adventure?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            From the red earth of the outback to the turquoise waters of the coast, Western Australia offers unforgettable experiences. Book your adventure today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Download WA Travel Guide
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              View All WA Deals
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
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">WA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Western Australia</h3>
                  <p className="text-amber-400 font-medium">Cleartrip Exclusive Offers</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your gateway to Western Australia's most spectacular experiences. Book with confidence for the adventure of a lifetime.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Popular Destinations</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline">Perth City</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Margaret River</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Broome & Kimberley</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Ningaloo Reef</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Rottnest Island</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Travel Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white hover:underline">4WD Tours</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Wildlife Experiences</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Wine Tours</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Adventure Activities</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Luxury Accommodation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Contact & Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <FaPhone className="mr-3 mt-1 text-amber-400" />
                  <div>
                    <div className="font-medium">WA Travel Experts</div>
                    <div>+61 8 1234 5678</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="mr-3 mt-1 text-amber-400" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div>wa@cleartrip.com</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUser className="mr-3 mt-1 text-amber-400" />
                  <div>
                    <div className="font-medium">Local Experts</div>
                    <div>WA-based travel consultants</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="mb-4">
              <span className="text-gray-400">Partnered with:</span>
              <div className="flex justify-center gap-6 mt-2">
                <span className="text-gray-300">Tourism Western Australia</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">Australian Tourism</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">Ecotourism Australia</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Cleartrip. All rights reserved. | Western Australia Travel Offers | ABN: 12 345 678 901
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default WesternAmericaPage;