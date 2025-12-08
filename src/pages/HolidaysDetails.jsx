// pages/HolidaysDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
} from "lucide-react";

// ⭐ SAMPLE DATA – MUST EXIST (Fixes undefined errors)
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

const HolidaysDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the destination data
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = destinationsData.find((d) => d.id === id);
      setDestination(data);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  const handleGoBack = () => {
    navigate("/holidays");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );

  if (!destination)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600">
        Destination not found 😢
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="relative h-96 w-full">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
            <button
              onClick={handleGoBack}
              className="flex items-center text-white hover:text-teal-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Holidays
            </button>

            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {destination.name}
            </h1>

            <div className="flex items-center mt-3 gap-4 text-white text-lg">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400" />
                {destination.rating}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" /> {destination.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-10">

        {/* Description */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-3">About {destination.name}</h2>
          <p className="text-gray-700 leading-relaxed">{destination.description}</p>
        </div>

        {/* Highlights */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Highlights</h2>
          <div className="flex flex-wrap gap-3">
            {destination.highlights.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5" /> +91 99999 88888
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5" /> support@finvoy.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysDetails;
