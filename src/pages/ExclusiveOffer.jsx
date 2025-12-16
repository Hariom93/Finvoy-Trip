import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Calendar, Users, ArrowRight, Clock, Tag } from "lucide-react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

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

export default function ExclusiveOffer() {
  const navigate = useNavigate();

  const viewDetails = (offerId) => {
    navigate(`/offers/${offerId}`);
  };

  const bookNow = (offerId, e) => {
    e.stopPropagation();
    navigate(`/exclusiveofferfdetails/${offerId}?action=book`);
  };

  return (
    <div className="py-12 px-4 md:px-10 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <BackButton className="container mx-auto px-4 pt-6" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
          <Tag className="inline-block mr-2" size={20} />
          Limited Time Offers
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Exclusive Travel Deals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover amazing offers on premium travel packages. Book now and create unforgettable memories!
        </p>
      </motion.div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offerList.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => viewDetails(offer.id)}
          >
            {/* Offer Badge */}
            <div className="relative">
              <div className={`${offer.bg} h-2 w-full`} />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <span className="font-bold text-gray-900">{offer.discount}</span>
              </div>
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                <span className="font-semibold">{offer.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-900">{offer.title}</h2>
                <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                  <Star className="fill-yellow-400 text-yellow-400 mr-1" size={16} />
                  <span className="font-bold">{offer.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({offer.reviews})</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{offer.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {offer.highlights.slice(0, 3).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{offer.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{offer.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">{offer.groupSize}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{offer.validity}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">
                      {offer.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <div className="mt-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-lg">
                    <p className="text-sm font-mono font-bold text-purple-700">
                      Use Code: <span className="text-lg">{offer.code}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => viewDetails(offer.id)}
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center group"
                >
                  View Details
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button
                  onClick={(e) => bookNow(offer.id, e)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Enquire now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="mb-6 opacity-90">Tell us your preferences and we'll create a personalized itinerary just for you!</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
            Get Custom Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
}