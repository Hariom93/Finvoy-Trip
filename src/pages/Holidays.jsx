// pages/DestinationsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Filter,
  Star,
  Calendar,
  Users,
  Plane,
  Hotel,
  UtensilsCrossed,
  Mountain,
  Sun,
  Snowflake,
  Palette,
  Castle,
  TreePine,
  Waves,
  Camera,
  Loader,
  Sparkles
} from 'lucide-react';
const Holidays = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setDestinations(destinationsData);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const destinationsData = [
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1245,
      description: 'Modern marvel with cultural heritage',
      price: '₹35,999',
      originalPrice: '₹42,999',
      discount: '16% OFF',
      duration: '5D/4N',
      category: ['city', 'luxury'],
      season: 'winter',
      highlights: ['Sheikh Zayed Mosque', 'Ferrari World', 'Desert Safari'],
      tags: ['Family', 'Luxury', 'Cultural']
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
      rating: 4.9,
      reviews: 2567,
      description: 'Tropical paradise with overwater villas',
      price: '₹89,999',
      originalPrice: '₹1,05,999',
      discount: '15% OFF',
      duration: '7D/6N',
      category: ['beach', 'luxury'],
      season: 'summer',
      highlights: ['Overwater Bungalows', 'Snorkeling', 'Sunset Cruises'],
      tags: ['Honeymoon', 'Luxury', 'Romantic']
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps',
      country: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w-800&auto=format&fit=crop',
      rating: 4.7,
      reviews: 1876,
      description: 'Majestic mountains and alpine beauty',
      price: '₹1,25,999',
      originalPrice: '₹1,45,999',
      discount: '14% OFF',
      duration: '8D/7N',
      category: ['mountain', 'adventure'],
      season: 'winter',
      highlights: ['Jungfraujoch', 'Lake Geneva', 'Matterhorn'],
      tags: ['Adventure', 'Family', 'Scenic']
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w-800&auto=format&fit=crop',
      rating: 4.6,
      reviews: 3124,
      description: 'Island of Gods with rich culture',
      price: '₹28,999',
      originalPrice: '₹34,999',
      discount: '17% OFF',
      duration: '6D/5N',
      category: ['beach', 'cultural'],
      season: 'summer',
      highlights: ['Ubud Temples', 'Rice Terraces', 'Beach Clubs'],
      tags: ['Budget', 'Cultural', 'Nature']
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w-800&auto=format&fit=crop',
      rating: 4.5,
      reviews: 2890,
      description: 'City of love and lights',
      price: '₹68,999',
      originalPrice: '₹79,999',
      discount: '14% OFF',
      duration: '6D/5N',
      category: ['city', 'cultural'],
      season: 'spring',
      highlights: ['Eiffel Tower', 'Louvre', 'Seine River Cruise'],
      tags: ['Romantic', 'Cultural', 'Luxury']
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop',
      rating: 4.7,
      reviews: 1987,
      description: 'Futuristic city in the desert',
      price: '₹45,999',
      originalPrice: '₹52,999',
      discount: '13% OFF',
      duration: '5D/4N',
      category: ['city', 'luxury'],
      season: 'winter',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall'],
      tags: ['Luxury', 'Family', 'Modern']
    },
    {
      id: 'goa',
      name: 'Goa',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop',
      rating: 4.4,
      reviews: 1876,
      description: 'Beach paradise with Portuguese heritage',
      price: '₹18,999',
      originalPrice: '₹22,999',
      discount: '17% OFF',
      duration: '5D/4N',
      category: ['beach', 'cultural'],
      season: 'winter',
      highlights: ['Beaches', 'Portuguese Churches', 'Night Markets'],
      tags: ['Budget', 'Beach', 'Party']
    },
    {
      id: 'thailand',
      name: 'Phuket',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&auto=format&fit=crop',
      rating: 4.6,
      reviews: 2345,
      description: 'Tropical islands and vibrant nightlife',
      price: '₹32,999',
      originalPrice: '₹38,999',
      discount: '15% OFF',
      duration: '6D/5N',
      category: ['beach', 'adventure'],
      season: 'summer',
      highlights: ['Phi Phi Islands', 'James Bond Island', 'Nightlife'],
      tags: ['Adventure', 'Beach', 'Party']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: <MapPin className="w-4 h-4" />, count: 8 },
    { id: 'beach', name: 'Beach', icon: <Waves className="w-4 h-4" />, count: 4 },
    { id: 'mountain', name: 'Mountains', icon: <Mountain className="w-4 h-4" />, count: 1 },
    { id: 'city', name: 'City', icon: <Castle className="w-4 h-4" />, count: 3 },
    { id: 'cultural', name: 'Cultural', icon: <Palette className="w-4 h-4" />, count: 4 },
    { id: 'luxury', name: 'Luxury', icon: <Sparkles className="w-4 h-4" />, count: 3 },
    { id: 'adventure', name: 'Adventure', icon: <TreePine className="w-4 h-4" />, count: 2 }
  ];

  const seasons = [
    { id: 'all', name: 'All Seasons', icon: <Calendar className="w-4 h-4" /> },
    { id: 'summer', name: 'Summer', icon: <Sun className="w-4 h-4" /> },
    { id: 'winter', name: 'Winter', icon: <Snowflake className="w-4 h-4" /> },
    { id: 'spring', name: 'Spring', icon: <TreePine className="w-4 h-4" /> }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category.includes(selectedCategory);
    const matchesSeason = selectedSeason === 'all' || destination.season === selectedSeason;
    
    return matchesSearch && matchesCategory && matchesSeason;
  });


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Discover Amazing <span className="text-yellow-300">Holiday Destinations</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore handpicked destinations with curated packages for your perfect vacation
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-3">
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      className="w-full outline-none text-gray-800 placeholder-gray-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-1 p-3 border-l border-gray-200">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <select className="w-full outline-none text-gray-800 bg-transparent">
                      <option>Any Region</option>
                      <option>Asia</option>
                      <option>Europe</option>
                      <option>Middle East</option>
                    </select>
                  </div>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
            <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-xl font-medium flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id ? 'bg-teal-500' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
          
          {/* Seasons */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Best Time to Visit</h3>
            <div className="flex flex-wrap gap-3">
              {seasons.map(season => (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season.id)}
                  className={`px-4 py-2.5 rounded-lg font-medium flex items-center space-x-2 ${
                    selectedSeason === season.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {season.icon}
                  <span>{season.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
            <p className="text-gray-600">{filteredDestinations.length} destinations found</p>
          </div>
          
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No destinations found</h3>
              <p className="text-gray-500">Try changing your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations.map(destination => (
                <Link 
                  key={destination.id}
                  to={`/destination/${destination.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {destination.discount}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                      <div className="flex items-center text-white/90">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{destination.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="font-bold text-gray-800 ml-1">{destination.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({destination.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{destination.price}</div>
                        <div className="text-gray-500 line-through text-sm">{destination.originalPrice}</div>
                      </div>
                      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Finvoy-Trip?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Best Flights</h3>
              <p className="text-gray-600 text-sm">Direct & convenient flight options</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Premium Stays</h3>
              <p className="text-gray-600 text-sm">4-star+ hotels with breakfast</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Food Included</h3>
              <p className="text-gray-600 text-sm">Daily meals with local cuisine</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Photo Tours</h3>
              <p className="text-gray-600 text-sm">Professional photography tours</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Holidays;