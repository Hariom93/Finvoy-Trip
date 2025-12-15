import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Star, MapPin, Calendar, Users, Clock, Tag, 
  ArrowLeft, Check, Shield, Heart, Share2,
  Plane, Home, Utensils, Wifi, Car,
  X, Send, Loader2, CheckCircle, User, Phone, Mail
} from "lucide-react";
import BackButton from "../components/Backbutton";

// ⭐ Simple Inquiry Form Component
const InquiryForm = ({ offer, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    travelDate: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, offer: offer.title });
      setLoading(false);
      setSubmitted(true);
      
      // Reset form and close after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelers: '2',
          travelDate: '',
          message: ''
        });
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="p-10">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent Successfully!</h3>
          <p className="text-gray-600">Our travel expert will contact you within 24 hours.</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-4">Enquire About: {offer.title}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 9876543210"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travelers
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full mt-3 py-2.5 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

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
  const [showInquiryForm, setShowInquiryForm] = useState(false); // NEW STATE

  useEffect(() => {
    // Effect to handle body scroll when popup is open
    if (showInquiryForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showInquiryForm]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundOffer = offerList.find(item => item.id === parseInt(id));
      setOffer(foundOffer);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleClosePopup = () => {
    setShowInquiryForm(false);
  };

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
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 ${showInquiryForm ? 'overflow-hidden' : ''}`}>
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
                      <button 
                        onClick={() => setShowInquiryForm(true)} // UPDATED THIS LINE
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                      >
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

      {/* Inquiry Form Modal - ADDED THIS SECTION */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="fixed inset-0 bg-black/40"
            onClick={handleClosePopup}
          />
          
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Travel Inquiry
                </h3>
                <p className="text-gray-600 text-sm">
                  {offer.title}, {offer.location}
                </p>
              </div>
              <button
                onClick={handleClosePopup}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            {/* Form Content */}
            <InquiryForm 
              offer={offer}
              onClose={handleClosePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
}