// pages/DestinationDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from "../components/Backbutton"; 

import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Check,
  X,
  Heart,
  Share2
} from 'lucide-react';

const HolidayDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const destinationsData = [
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1245,
      description: 'Modern marvel with cultural heritage',
      longDescription: 'Abu Dhabi, the capital of the United Arab Emirates, sits off the mainland on an island in the Persian (Arabian) Gulf. Its focus on oil exports and commerce is reflected by the skyline\'s modern towers and shopping megacenters such as Abu Dhabi and Marina malls.',
      price: '₹35,999',
      originalPrice: '₹42,999',
      discount: '16% OFF',
      duration: '5D/4N',
      category: ['city', 'luxury'],
      season: 'winter',
      highlights: ['Sheikh Zayed Mosque', 'Ferrari World', 'Desert Safari'],
      tags: ['Family', 'Luxury', 'Cultural'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹35,999',
          features: ['Return flights', '4-star hotel', 'Daily breakfast', 'City tour']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹49,999',
          features: ['Return flights', '5-star hotel', 'All meals', 'Desert safari', 'Theme park tickets']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹65,999',
          features: ['Business class flights', 'Luxury resort', 'Private tours', 'Personal guide', 'All activities included']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival & City Orientation', description: 'Arrive at Abu Dhabi International Airport, transfer to hotel, evening city tour' },
        { day: 2, title: 'Cultural Exploration', description: 'Visit Sheikh Zayed Grand Mosque, Heritage Village, and Emirates Palace' },
        { day: 3, title: 'Adventure Day', description: 'Desert safari with dune bashing, camel ride, and traditional dinner' },
        { day: 4, title: 'Modern Attractions', description: 'Ferrari World and Yas Marina Circuit experience' },
        { day: 5, title: 'Departure', description: 'Last minute shopping at malls, transfer to airport' }
      ],
      inclusions: [
        'Return economy class flights',
        '4 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Sightseeing as per itinerary',
        'All applicable taxes'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees',
        'Personal expenses',
        'Meals not mentioned',
        'Optional activities'
      ],
      bestTime: 'November to March',
      visa: 'Required for Indian passport holders'
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
      rating: 4.9,
      reviews: 2567,
      description: 'Tropical paradise with overwater villas',
      longDescription: 'The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It\'s known for its beaches, blue lagoons and extensive reefs.',
      price: '₹89,999',
      originalPrice: '₹1,05,999',
      discount: '15% OFF',
      duration: '7D/6N',
      category: ['beach', 'luxury'],
      season: 'summer',
      highlights: ['Overwater Bungalows', 'Snorkeling', 'Sunset Cruises'],
      tags: ['Honeymoon', 'Luxury', 'Romantic'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹89,999',
          features: ['Return flights', 'Water villa', 'Daily breakfast', 'Island transfers']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹1,25,999',
          features: ['Return flights', 'Luxury water villa', 'All meals', 'Spa sessions', 'Water activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Paradise', description: 'Arrive at Male International Airport, speedboat transfer to resort, check-in and relax' },
        { day: 2, title: 'Island Exploration', description: 'Snorkeling, beach relaxation, sunset cruise' },
        { day: 3, title: 'Water Activities', description: 'Scuba diving, dolphin watching, water sports' },
        { day: 4, title: 'Spa & Relaxation', description: 'Spa treatments, private beach dinner' },
        { day: 5, title: 'Local Island Visit', description: 'Visit local island, cultural experience, shopping' },
        { day: 6, title: 'Free Day', description: 'Enjoy resort amenities at your leisure' },
        { day: 7, title: 'Departure', description: 'Last morning at the beach, transfer to airport' }
      ],
      inclusions: [
        'Return economy class flights',
        '6 nights accommodation in water villa',
        'Daily breakfast',
        'Airport and speedboat transfers',
        'Complimentary snorkeling gear'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional excursions'
      ],
      bestTime: 'November to April',
      visa: 'On arrival for Indian passport holders'
    },
    // Add more destinations here...
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundDestination = destinationsData.find(dest => dest.id === id);
      setDestination(foundDestination);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading destination details...</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Destination Not Found</h2>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/holiday')}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
       <BackButton/>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden mt-4">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">{destination.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 mr-1" />
                <span className="text-xl font-bold">{destination.rating}</span>
                <span className="ml-1">({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-8 right-8 flex space-x-3">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-full backdrop-blur-sm ${isFavorite ? 'bg-red-500/20 text-red-500' : 'bg-white/20 text-white hover:bg-white/30'}`}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500' : ''}`} />
          </button>
          <button className="p-3 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About {destination.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{destination.longDescription}</p>
              
              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
              <div className="space-y-6">
                {destination.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                        Day {day.day}
                      </div>
                      {index < destination.itinerary.length - 1 && (
                        <div className="w-1 h-full bg-teal-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Starting from</div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-800">{destination.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{destination.originalPrice}</span>
                  <span className="ml-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {destination.discount}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{destination.duration}</span>
                </div>
              </div>

              {/* Package Selection */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Select Package</h3>
                <div className="space-y-3">
                  {destination.packages.map((pkg, index) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedPackage === index
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-gray-200 hover:border-teal-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{pkg.name}</span>
                        <span className="font-bold text-gray-800">{pkg.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-shadow">
                Book Now
              </button>

              {/* Inclusions/Exclusions */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Inclusions
                  </h4>
                  <ul className="space-y-1">
                    {destination.inclusions.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    Exclusions
                  </h4>
                  <ul className="space-y-1">
                    {destination.exclusions.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4">Travel Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Best Time to Visit:</span>
                  <span className="font-medium">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Visa Requirements:</span>
                  <span className="font-medium">{destination.visa}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Flight Duration:</span>
                  <span className="font-medium">3-4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayDetails;