import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Star, MapPin, Calendar, Users, Clock, Tag, 
  ArrowLeft, Check, Shield, Heart, Share2,
  Plane, Home, Utensils, Wifi, Car
} from "lucide-react";
import BackButton from "../components/Backbutton";

// Import the same offer list (or fetch from API)
const offerList = [
    {
      id: 1,
      title: "Dubai Luxury Experience",
      description: "Experience the grandeur of Dubai with luxury stays and desert safaris. Includes Burj Khalifa visit, desert dune bashing, and yacht cruise.",
      code: "DUBAI20",
      discount: "20% OFF",
      originalPrice: "₹89,999",
      discountedPrice: "₹71,999",
      duration: "5 Days / 4 Nights",
      location: "Dubai, UAE",
      category: "Luxury",
      rating: 4.8,
      reviews: 124,
      groupSize: "2-4 People",
      validity: "Valid till 30 Dec 2024",
      bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
      highlights: ["Burj Khalifa Access", "Desert Safari", "Yacht Tour", "5-Star Hotel"]
    },
    {
      id: 2,
      title: "Singapore Winter Escape",
      description: "Winter special package covering Gardens by the Bay, Sentosa Island, and Universal Studios. Perfect for family vacations.",
      code: "SG10K",
      discount: "₹10,000 OFF",
      originalPrice: "₹65,999",
      discountedPrice: "₹55,999",
      duration: "6 Days / 5 Nights",
      location: "Singapore",
      category: "Family",
      rating: 4.9,
      reviews: 98,
      groupSize: "Up to 4 People",
      validity: "Valid till 15 Jan 2025",
      bg: "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400",
      image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800",
      highlights: ["Universal Studios", "Marina Bay", "Night Safari", "City Tour"]
    },
    {
      id: 3,
      title: "Hong Kong Adventure",
      description: "Explore the vibrant city of Hong Kong with Disneyland, Victoria Peak, and amazing street food experiences.",
      code: "HKSPECIAL",
      discount: "Special Deal",
      originalPrice: "₹54,999",
      discountedPrice: "₹49,499",
      duration: "4 Days / 3 Nights",
      location: "Hong Kong",
      category: "Adventure",
      rating: 4.7,
      reviews: 87,
      groupSize: "2-6 People",
      validity: "Valid till 20 Mar 2025",
      bg: "bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400",
      image: "https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?auto=format&fit=crop&w=800",
      highlights: ["Disneyland", "Victoria Peak", "Star Ferry", "Shopping"]
    },
    {
      id: 4,
      title: "Goa Beach Paradise",
      description: "Weekend getaway to beautiful Goa beaches with water sports, nightlife, and Portuguese heritage sites.",
      code: "GOAWKD",
      discount: "Weekend Offer",
      originalPrice: "₹24,999",
      discountedPrice: "₹19,999",
      duration: "3 Days / 2 Nights",
      location: "Goa, India",
      category: "Beach",
      rating: 4.6,
      reviews: 156,
      groupSize: "2-8 People",
      validity: "Weekends Only",
      bg: "bg-gradient-to-br from-emerald-600 via-green-500 to-lime-400",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800",
      highlights: ["Beach Hopping", "Water Sports", "Nightlife", "Heritage Sites"]
    },
    {
      id: 5,
      title: "Swiss Alps Retreat",
      description: "Breathtaking Swiss Alps experience with mountain railways, lake Geneva, and chocolate factory visits.",
      code: "SWISS25",
      discount: "25% OFF",
      originalPrice: "₹1,24,999",
      discountedPrice: "₹93,749",
      duration: "7 Days / 6 Nights",
      location: "Switzerland",
      category: "Mountain",
      rating: 4.9,
      reviews: 67,
      groupSize: "2-4 People",
      validity: "Valid till 28 Feb 2025",
      bg: "bg-gradient-to-br from-sky-600 via-blue-500 to-indigo-400",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800",
      highlights: ["Alpine Views", "Lake Geneva", "Train Rides", "Cheese Tour"]
    },
    {
      id: 6,  
      title: "Bali Tropical Getaway",
      description: "Tropical paradise with rice terraces, temples, beaches, and cultural performances.",
      code: "BALIMAGIC",
      discount: "15% OFF",
      originalPrice: "₹44,999",
      discountedPrice: "₹38,249",
      duration: "5 Days / 4 Nights",
      location: "Bali, Indonesia",
      category: "Tropical",
      rating: 4.8,
      reviews: 203,
      groupSize: "2-6 People",
      validity: "Valid till 30 Apr 2025",
      bg: "bg-gradient-to-br from-amber-600 via-orange-500 to-red-400",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800",
      highlights: ["Temples", "Rice Terraces", "Beaches", "Spa & Wellness"]
    }
  ];

export default function ExclusiveOfferDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundOffer = offerList.find(item => item.id === parseInt(id));
      setOffer(foundOffer);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Offer Not Found</h1>
        <p className="text-gray-600 mb-8">The travel offer you're looking for doesn't exist or has expired.</p>
        <button
          onClick={() => navigate('/offers')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
        >
          Browse All Offers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Back Button Header */}
      <div className="container mx-auto px-4 pt-10">
      <BackButton className="container mx-auto px-4 pt-6"/>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-80 md:h-96">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-6 left-6">
              <div className={`${offer.bg} text-white px-4 py-2 rounded-full font-bold shadow-lg`}>
                {offer.discount}
              </div>
            </div>

            {/* Favorite & Share */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition hover:scale-110">
                <Heart className="text-red-500" size={20} />
              </button>
              <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition hover:scale-110">
                <Share2 className="text-blue-600" size={20} />
              </button>
            </div>

            {/* Title & Location */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{offer.title}</h1>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span className="text-lg">{offer.location}</span>
                <div className="ml-6 flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="fill-yellow-400 text-yellow-400 mr-1" size={16} />
                  <span className="font-bold">{offer.rating}</span>
                  <span className="ml-1">({offer.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl">
                <Calendar className="text-blue-600 mb-2" size={24} />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-bold text-lg">{offer.duration}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <Users className="text-purple-600 mb-2" size={24} />
                <div className="text-sm text-gray-600">Group Size</div>
                <div className="font-bold text-lg">{offer.groupSize}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <Clock className="text-green-600 mb-2" size={24} />
                <div className="text-sm text-gray-600">Validity</div>
                <div className="font-bold text-lg">{offer.validity}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <Tag className="text-orange-600 mb-2" size={24} />
                <div className="text-sm text-gray-600">Category</div>
                <div className="font-bold text-lg">{offer.category}</div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2">
                {/* Description */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Package</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {offer.detailedDescription || offer.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Package Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {offer.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <Check className="text-green-600 mr-3" size={20} />
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Itinerary */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                  <div className="space-y-4">
                    {offer.itinerary?.map((day, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-xl border-2 ${selectedDay === idx ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                        onClick={() => setSelectedDay(idx)}
                      >
                        <div className="flex items-center cursor-pointer">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${selectedDay === idx ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                            <span className="font-bold">{day.day}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{day.title}</h4>
                            <p className="text-gray-600">{day.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Inclusions */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {offer.inclusions?.map((item, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="text-green-600 mr-3">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 rounded-2xl p-6 shadow-xl">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-gray-900">
                          {offer.discountedPrice}
                        </span>
                        <span className="text-lg text-gray-500 line-through ml-3">
                          {offer.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">per person on twin sharing</div>
                      
                      {/* Promo Code */}
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl mb-6">
                        <div className="text-sm mb-1">USE PROMO CODE</div>
                        <div className="font-mono text-2xl font-bold">{offer.code}</div>
                        <div className="text-sm opacity-90 mt-1">Save {offer.discount}</div>
                      </div>
                    </div>

                    {/* Booking Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Travel Dates
                        </label>
                        <input
                          type="date"
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Travelers
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>1 Traveler</option>
                          <option>2 Travelers</option>
                          <option>3 Travelers</option>
                          <option>4 Travelers</option>
                        </select>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      Enquire now
                      </button>
                      <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition">
                        Add to Cart
                      </button>
                      <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition flex items-center justify-center">
                        <Heart className="mr-2" size={20} />
                        Save for Later
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-center text-gray-600 mb-3">
                        <Shield className="mr-2 text-green-600" />
                        <span className="font-medium">Secure Booking</span>
                      </div>
                      <div className="text-center text-sm text-gray-500">
                        24/7 Customer Support • Best Price Guarantee • Easy Cancellation
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-3">Important Notes</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {offer.terms?.map((term, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3"></div>
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Offers (Optional) */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerList
            .filter(item => item.id !== offer.id && item.category === offer.category)
            .slice(0, 3)
            .map(related => (
              <div
                key={related.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate(`/offers/${related.id}`)}
              >
                <img src={related.image} alt={related.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{related.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{related.discountedPrice}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-800">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}