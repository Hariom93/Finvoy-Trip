// pages/DestinationDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  UtensilsCrossed,
  Wifi,
  Car,
  Shield,
  Heart,
  Share2,
  Phone,
  Mail,
  CheckCircle,
  X,
  ChevronRight,
  Plane,
  Hotel,
  Camera,
  Mountain,
  Waves,
  Castle,
  Palette,
  Sparkles
} from 'lucide-react';

const HolidayDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    adults: 2,
    children: 0,
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const data = destinationsData.find(dest => dest.id === id);
      setDestination(data);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [id]);

  const destinationsData = [
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      description: 'Discover the perfect blend of tradition and modernity in Abu Dhabi, where centuries-old heritage meets breathtaking contemporary architecture.',
      detailedDescription: 'Abu Dhabi, the capital of the United Arab Emirates, sits off the mainland on an island in the Persian Gulf. Its focus on oil exports and commerce is reflected by the skyline\'s modern towers and shopping megacenters such as Abu Dhabi Mall. Cultural sites include the huge Sheikh Zayed Grand Mosque, with crystal chandeliers and room for 41,000 worshipers.',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=800&auto=format&fit=crop'
      ],
      rating: 4.8,
      reviews: 1245,
      duration: '5 Days / 4 Nights',
      bestTime: 'October to April',
      packages: [
        {
          id: 1,
          name: 'Basic Package',
          description: 'Perfect for budget travelers',
          price: '₹35,999',
          originalPrice: '₹42,999',
          discount: '16% OFF',
          includes: ['Return flights', '3-star hotel', 'Breakfast only', 'City tour'],
          excludes: ['Lunch & Dinner', 'Desert Safari', 'Theme Parks']
        },
        {
          id: 2,
          name: 'Premium Package',
          description: 'Most popular choice',
          price: '₹49,999',
          originalPrice: '₹58,999',
          discount: '15% OFF',
          includes: ['Return flights', '4-star hotel', 'All meals', 'City tour', 'Desert Safari', 'Ferrari World ticket'],
          excludes: ['Luxury transfers', 'Private guide']
        },
        {
          id: 3,
          name: 'Luxury Package',
          description: 'Ultimate luxury experience',
          price: '₹75,999',
          originalPrice: '₹89,999',
          discount: '16% OFF',
          includes: ['Business class flights', '5-star hotel', 'All meals', 'Private city tour', 'Desert Safari', 'All theme park tickets', 'Luxury transfers', 'Private guide'],
          excludes: ['None - All inclusive']
        }
      ],
      highlights: [
        'Sheikh Zayed Grand Mosque',
        'Ferrari World Abu Dhabi',
        'Yas Marina Circuit',
        'Emirates Palace',
        'Louvre Abu Dhabi',
        'Desert Safari with BBQ Dinner'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Abu Dhabi',
          activities: ['Airport pickup', 'Hotel check-in', 'Evening at Corniche Beach', 'Dinner at local restaurant']
        },
        {
          day: 2,
          title: 'City Exploration',
          activities: ['Sheikh Zayed Grand Mosque', 'Emirates Palace', 'Heritage Village', 'Dhow Cruise Dinner']
        },
        {
          day: 3,
          title: 'Adventure Day',
          activities: ['Desert Safari with dune bashing', 'Camel ride', 'BBQ dinner under stars', 'Cultural show']
        },
        {
          day: 4,
          title: 'Modern Attractions',
          activities: ['Ferrari World', 'Yas Waterworld', 'Yas Mall shopping', 'Evening at Yas Marina']
        },
        {
          day: 5,
          title: 'Departure',
          activities: ['Last minute shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        'Return flight tickets',
        '4 nights hotel accommodation',
        'Daily breakfast',
        'All transfers & sightseeing',
        'Desert Safari with dinner',
        'Ferrari World tickets',
        'Professional guide',
        'Travel insurance'
      ],
      exclusions: [
        'Visa charges',
        'Lunch & dinner (unless specified)',
        'Personal expenses',
        'Tips & gratuities',
        'Anything not mentioned in inclusions'
      ],
      facilities: ['Free WiFi', 'Swimming Pool', 'Spa & Gym', 'Restaurant', 'Airport Transfers', '24/7 Support'],
      tags: ['Family', 'Luxury', 'Cultural', 'Adventure'],
      category: 'city',
      season: 'winter'
    }
  ];

  const handleBookNow = () => {
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingData.adults} adults and ${bookingData.children} children!`);
    setShowBookingModal(false);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h2>
        <Link to="/" className="text-teal-600 hover:text-teal-700 font-medium">
          ← Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Link to="/" className="hover:text-teal-300 flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Destinations
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">{destination.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
                <span className="text-xl">{destination.rating} ({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <p className="text-gray-700 text-lg mb-6">{destination.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-800">{destination.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-800">{destination.bestTime}</div>
                  <div className="text-sm text-gray-600">Best Time</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-800">Family & Couples</div>
                  <div className="text-sm text-gray-600">Perfect For</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-800">COVID Safe</div>
                  <div className="text-sm text-gray-600">Travel Protocol</div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {destination.images.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img src={img} alt={`${destination.name} ${index + 1}`} className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About {destination.name}</h2>
              <p className="text-gray-700 leading-relaxed">{destination.detailedDescription}</p>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {destination.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-teal-500 pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold mr-4">
                        Day {day.day}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{day.title}</h3>
                    </div>
                    <ul className="space-y-2 ml-14">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight className="w-4 h-4 text-teal-500 mr-3" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Packages & Booking */}
          <div className="space-y-8">
            {/* Packages */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Package</h2>
              <div className="space-y-4 mb-8">
                {destination.packages.map((pkg, index) => (
                  <div 
                    key={pkg.id}
                    onClick={() => setSelectedPackage(index)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedPackage === index 
                        ? 'border-teal-500 bg-teal-50' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800">{pkg.name}</h3>
                        <p className="text-gray-600 text-sm">{pkg.description}</p>
                      </div>
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {pkg.discount}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-2xl font-bold text-gray-800">{pkg.price}</div>
                      <div className="text-gray-500 line-through text-sm">{pkg.originalPrice}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Includes:</div>
                      {pkg.includes.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </div>
                      ))}
                      {pkg.includes.length > 3 && (
                        <div className="text-teal-600 text-sm">+ {pkg.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Package Price</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {destination.packages[selectedPackage].price}
                  </span>
                </div>
                <button
                  onClick={handleBookNow}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg"
                >
                  Book Now
                </button>
                <button className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 py-3 rounded-xl font-medium">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">What's Included</h3>
              <div className="space-y-2 mb-6">
                {destination.inclusions.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="font-bold text-gray-800 mb-4">What's Not Included</h3>
              <div className="space-y-2">
                {destination.exclusions.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <X className="w-4 h-4 text-red-500 mr-3" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Facilities & Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {destination.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                    <span className="text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Book {destination.name}</h3>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleBookingSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Dates
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={bookingData.startDate}
                        onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                        required
                      />
                      <input
                        type="date"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={bookingData.endDate}
                        onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travelers
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          value={bookingData.adults}
                          onChange={(e) => setBookingData({...bookingData, adults: e.target.value})}
                        >
                          {[1,2,3,4,5,6].map(num => (
                            <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          value={bookingData.children}
                          onChange={(e) => setBookingData({...bookingData, children: e.target.value})}
                        >
                          {[0,1,2,3,4].map(num => (
                            <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Package</span>
                    <span className="font-bold">{destination.packages[selectedPackage].name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Price</span>
                    <span className="text-xl font-bold text-gray-800">
                      {destination.packages[selectedPackage].price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    *Prices are per person based on double occupancy
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 rounded-lg font-bold"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidayDetails;