import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  Plane,
  Hotel,
  UtensilsCrossed,
  Shield,
  Heart,
  Share2,
  ChevronRight,
  BookOpen,
  Globe,
  CloudSun,
  Wallet,
  UserCheck,
  Wifi,
  Coffee,
  Camera,
  Umbrella,
  Compass,
  Mountain,
  Sun,
  Moon,
  Award,
  CheckCircle,
  X,
  Loader2,
  Send,
  Phone,
  Mail,
  User,
} from "lucide-react";

// ⭐ Enhanced destination data with comprehensive details
const popularDestinations = [
  {
    id: "delhi",
    city: "Delhi",
    code: "DEL",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    landmark: "India Gate",
    country: "India",
    rating: 4.7,
    reviews: 2458,
    description: "Historic capital with Mughal heritage and modern marvels",
    longDescription: "Delhi, India's capital territory, is a massive metropolitan area in the country's north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.",
    price: "₹12,999",
    duration: "4D/3N",
    season: "October to March",
    temperature: "15°C - 25°C",
    currency: "Indian Rupee (₹)",
    language: "Hindi, English",
    timezone: "IST (UTC+5:30)",
    highlights: [
      { icon: <Award className="w-5 h-5" />, text: "UNESCO Heritage Sites" },
      { icon: <Camera className="w-5 h-5" />, text: "Photogenic Architecture" },
      { icon: <UtensilsCrossed className="w-5 h-5" />, text: "Street Food Paradise" },
      { icon: <Compass className="w-5 h-5" />, text: "Cultural Diversity" }
    ],
    attractions: [
      "Red Fort", "Qutub Minar", "Humayun's Tomb", "Lotus Temple", "Akshardham Temple"
    ],
    experiences: [
      "Heritage walk in Old Delhi",
      "Food tour in Chandni Chowk",
      "Evening light show at India Gate",
      "Shopping at Dilli Haat"
    ],
    bestFor: ["History Buffs", "Food Lovers", "Photographers", "Cultural Explorers"],
    tags: ["Heritage", "Food", "Shopping", "Cultural"],
    inclusions: [
      "3 Nights Hotel Stay",
      "Daily Breakfast",
      "Airport Transfers",
      "City Tour with Guide",
      "Metro Card"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "3-5 Days" },
      { label: "Visa", value: "Required for foreigners" },
      { label: "Best Time", value: "Oct-Mar" },
      { label: "Budget", value: "Mid-range" }
    ]
  },
  {
    id: "mumbai",
    city: "Mumbai",
    code: "BOM",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    landmark: "Chhatrapati Shivaji Terminus",
    country: "India",
    rating: 4.6,
    reviews: 3215,
    description: "City of dreams with colonial architecture and Bollywood glamour",
    longDescription: "Mumbai, previously known as Bombay, is one of India's most populous and cosmopolitan cities. It's the center of India's booming film industry, Bollywood, and features stunning colonial architecture, bustling markets, and vibrant nightlife. From the iconic Gateway of India to Marine Drive's Queen's Necklace, Mumbai is a city of contrasts where luxury meets street life.",
    price: "₹15,999",
    duration: "5D/4N",
    season: "November to February",
    temperature: "20°C - 30°C",
    currency: "Indian Rupee (₹)",
    language: "Marathi, Hindi, English",
    timezone: "IST (UTC+5:30)",
    highlights: [
      { icon: <Camera className="w-5 h-5" />, text: "Bollywood Experience" },
      { icon: <Coffee className="w-5 h-5" />, text: "Cafe Culture" },
      { icon: <Umbrella className="w-5 h-5" />, text: "Marine Drive Views" },
      { icon: <Compass className="w-5 h-5" />, text: "Street Life" }
    ],
    attractions: [
      "Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach", "Siddhivinayak Temple"
    ],
    experiences: [
      "Bollywood studio tour",
      "Dabbawala experience",
      "Street food crawl",
      "Sunset at Marine Drive"
    ],
    bestFor: ["Bollywood Fans", "Foodies", "Shopaholics", "Urban Explorers"],
    tags: ["Bollywood", "Beaches", "Shopping", "Nightlife"],
    inclusions: [
      "4 Nights Hotel Stay",
      "Daily Breakfast",
      "Local Transport Pass",
      "Bollywood Tour",
      "Elephanta Caves Tickets"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "4-6 Days" },
      { label: "Visa", value: "Required for foreigners" },
      { label: "Best Time", value: "Nov-Feb" },
      { label: "Budget", value: "Mid-range to High" }
    ]
  },
  {
    id: "bangalore",
    city: "Bangalore",
    code: "BLR",
    image: "https://media.istockphoto.com/id/2224221889/photo/beautiful-view-of-bangalore-skyline-cityscape-at-the-night.webp",
    landmark: "Vidhana Soudha",
    country: "India",
    rating: 4.5,
    reviews: 1892,
    description: "Garden City & India's Silicon Valley",
    longDescription: "Bengaluru, also known as Bangalore, is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England's Windsor Castle, and Tipu Sultan's Summer Palace, an 18th-century teak structure.",
    price: "₹10,999",
    duration: "3D/2N",
    season: "Year-round",
    temperature: "15°C - 35°C",
    currency: "Indian Rupee (₹)",
    language: "Kannada, English",
    timezone: "IST (UTC+5:30)",
    highlights: [
      { icon: <Wifi className="w-5 h-5" />, text: "Tech Hub" },
      { icon: <Coffee className="w-5 h-5" />, text: "Pub Capital" },
      { icon: <Umbrella className="w-5 h-5" />, text: "Garden City" },
      { icon: <Compass className="w-5 h-5" />, text: "Startup Scene" }
    ],
    attractions: [
      "Lalbagh Botanical Garden", "Bangalore Palace", "Cubbon Park", "ISKCON Temple", "UB City"
    ],
    experiences: [
      "Microbrewery tour",
      "Tech park visit",
      "Shopping at Commercial Street",
      "South Indian food trail"
    ],
    bestFor: ["Tech Enthusiasts", "Food Lovers", "Nature Lovers", "Party Goers"],
    tags: ["Tech", "Gardens", "Food", "Nightlife"],
    inclusions: [
      "2 Nights Hotel Stay",
      "Daily Breakfast",
      "City Tour",
      "Pub Crawl",
      "Shopping Vouchers"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "2-3 Days" },
      { label: "Visa", value: "Required for foreigners" },
      { label: "Best Time", value: "Sep-Feb" },
      { label: "Budget", value: "Mid-range" }
    ]
  },
  {
    id: "goa",
    city: "Goa",
    code: "GOI",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    landmark: "Baga Beach",
    country: "India",
    rating: 4.8,
    reviews: 4562,
    description: "Sun, sand, and Portuguese heritage",
    longDescription: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    price: "₹8,999",
    duration: "5D/4N",
    season: "November to February",
    temperature: "20°C - 33°C",
    currency: "Indian Rupee (₹)",
    language: "Konkani, English",
    timezone: "IST (UTC+5:30)",
    highlights: [
      { icon: <Sun className="w-5 h-5" />, text: "Beach Paradise" },
      { icon: <Coffee className="w-5 h-5" />, text: "Nightlife Hub" },
      { icon: <Compass className="w-5 h-5" />, text: "Portuguese Heritage" },
      { icon: <UtensilsCrossed className="w-5 h-5" />, text: "Seafood Delights" }
    ],
    attractions: [
      "Calangute Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Fort Aguada", "Anjuna Flea Market"
    ],
    experiences: [
      "Water sports at Baga",
      "Sunset cruise",
      "Portuguese heritage walk",
      "Beach shack hopping"
    ],
    bestFor: ["Beach Lovers", "Party Animals", "History Buffs", "Foodies"],
    tags: ["Beach", "Party", "Heritage", "Adventure"],
    inclusions: [
      "4 Nights Beach Resort",
      "Daily Breakfast",
      "Water Sports Package",
      "Sunset Cruise",
      "Heritage Tour"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "5-7 Days" },
      { label: "Visa", value: "Required for foreigners" },
      { label: "Best Time", value: "Nov-Feb" },
      { label: "Budget", value: "Budget to Luxury" }
    ]
  },
  {
    id: "dubai",
    city: "Dubai",
    code: "DXB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    landmark: "Burj Khalifa",
    country: "UAE",
    rating: 4.9,
    reviews: 5678,
    description: "Futuristic city rising from the desert",
    longDescription: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
    price: "₹49,999",
    duration: "6D/5N",
    season: "November to March",
    temperature: "20°C - 35°C",
    currency: "UAE Dirham (AED)",
    language: "Arabic, English",
    timezone: "GST (UTC+4)",
    highlights: [
      { icon: <Award className="w-5 h-5" />, text: "World Records" },
      { icon: <Hotel className="w-5 h-5" />, text: "Luxury Hotels" },
      { icon: <Compass className="w-5 h-5" />, text: "Desert Adventures" },
      { icon: <Camera className="w-5 h-5" />, text: "Modern Architecture" }
    ],
    attractions: [
      "Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Fountain", "Dubai Frame"
    ],
    experiences: [
      "Desert safari with dune bashing",
      "Burj Khalifa observation deck",
      "Shopping at Dubai Mall",
      "Luxury yacht cruise"
    ],
    bestFor: ["Luxury Travelers", "Shoppers", "Adventure Seekers", "Families"],
    tags: ["Luxury", "Shopping", "Modern", "Family"],
    inclusions: [
      "5 Nights Hotel Stay",
      "Daily Breakfast",
      "Burj Khalifa Tickets",
      "Desert Safari",
      "Shopping Discounts"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "5-7 Days" },
      { label: "Visa", value: "On arrival for Indians" },
      { label: "Best Time", value: "Nov-Mar" },
      { label: "Budget", value: "High-end" }
    ]
  },
  {
    id: "singapore",
    city: "Singapore",
    code: "SIN",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    landmark: "Marina Bay Sands",
    country: "Singapore",
    rating: 4.8,
    reviews: 4321,
    description: "Garden city with futuristic architecture",
    longDescription: "Singapore is a global financial center with a tropical climate and multicultural population. Its colonial core centers on the Padang, a cricket field since the 1830s and now flanked by grand buildings such as City Hall. Singapore is also known for eclectic street food, served in hawker centers such as Tiong Bahru and Maxwell Road.",
    price: "₹54,999",
    duration: "5D/4N",
    season: "Year-round",
    temperature: "25°C - 32°C",
    currency: "Singapore Dollar (SGD)",
    language: "English, Malay, Mandarin, Tamil",
    timezone: "SGT (UTC+8)",
    highlights: [
      { icon: <Award className="w-5 h-5" />, text: "Cleanest City" },
      { icon: <Camera className="w-5 h-5" />, text: "Skyline Views" },
      { icon: <UtensilsCrossed className="w-5 h-5" />, text: "Hawker Food" },
      { icon: <Compass className="w-5 h-5" />, text: "Multi-cultural" }
    ],
    attractions: [
      "Gardens by the Bay", "Sentosa Island", "Universal Studios", "Orchard Road", "Chinatown"
    ],
    experiences: [
      "Night Safari",
      "Singapore Flyer ride",
      "Food tour in hawker centers",
      "Shopping on Orchard Road"
    ],
    bestFor: ["Families", "Foodies", "Shoppers", "Urban Explorers"],
    tags: ["Clean", "Family", "Food", "Modern"],
    inclusions: [
      "4 Nights Hotel Stay",
      "Daily Breakfast",
      "Universal Studios Ticket",
      "Gardens by the Bay Entry",
      "Airport Transfers"
    ],
    quickFacts: [
      { label: "Ideal Duration", value: "4-6 Days" },
      { label: "Visa", value: "Required" },
      { label: "Best Time", value: "Feb-Apr" },
      { label: "Budget", value: "Mid-range to High" }
    ]
  }
];
import BackButton from "../../components/Backbutton";
// ⭐ Enhanced Inquiry Form Component
const InquiryForm = ({ destination, onClose }) => {
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
      console.log('Form submitted:', { ...formData, destination });
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 2 seconds
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
          <h3 className="text-xl font-bold mb-4">Plan Your Trip to {destination}</h3>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Travelers
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
                  Preferred Travel Date
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
                Additional Requirements (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific requirements or special requests..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-4 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full mt-3 py-3 text-gray-600 hover:text-gray-800 font-medium transition"
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

// ⭐ Main Component
export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  const dest = popularDestinations.find((item) => item.id === id);

  if (!dest)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Header - Responsive */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm"
      >
              <BackButton className="container mx-auto px-4 pt-6"/>

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 sm:p-2.5 rounded-full transition ${isFavorite ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
              </button>
              <button className="p-2 sm:p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div> */}
      </motion.div>

      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8"
        >
          <img
            src={dest.image}
            alt={dest.city}
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Book Now Button on Hero Image */}
          {/* <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setShowInquiry(true)}
            className="absolute bottom-1 left-54 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Book Now</span>
          </motion.button> */}

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {dest.code}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-bold">{dest.rating}</span>
                    <span className="ml-1 opacity-90 text-sm">({dest.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{dest.city}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-base sm:text-lg">{dest.country}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-base sm:text-lg">{dest.duration}</span>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold mb-1">{dest.price}</div>
                <div className="text-sm opacity-90">Starting from</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
                About {dest.city}
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{dest.longDescription}</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center">
                  <CloudSun className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                  <span>Season: {dest.season}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                  <span>Language: {dest.language.split(',')[0]}</span>
                </div>
                <div className="flex items-center">
                  <Wallet className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                  <span>Currency: {dest.currency}</span>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {dest.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg sm:rounded-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center mr-3 sm:mr-4 shadow-sm flex-shrink-0">
                      <span className="text-blue-500">{highlight.icon}</span>
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Attractions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Must-Visit Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {dest.attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{attraction}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experiences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Unique Experiences</h2>
              <div className="space-y-3 sm:space-y-4">
                {dest.experiences.map((experience, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0">
                      <span className="text-blue-600 text-xs sm:text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">{experience}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Facts Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Facts</h3>
              <div className="space-y-3 sm:space-y-4">
                {dest.quickFacts.map((fact, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 text-sm sm:text-base">{fact.label}</span>
                    <span className="font-semibold text-sm sm:text-base">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Package Includes</h3>
              <div className="space-y-2 sm:space-y-3">
                {dest.inclusions.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Best For Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Perfect For</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {dest.bestFor.map((type, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-100"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-xl"
            >
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Ready to Explore?</h3>
                <p className="opacity-90 text-sm sm:text-base">Customize your perfect trip to {dest.city}</p>
              </div>
              <button
                onClick={() => setShowInquiry(true)}
                className="w-full py-2.5 sm:py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition flex items-center justify-center text-sm sm:text-base"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Your Trip
              </button>
              <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm opacity-90">
                <div className="flex items-center justify-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Secure Booking • 24/7 Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden mt-8"
        >
          <button
            onClick={() => setShowInquiry(true)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition"
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Book Trip to {dest.city}
          </button>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setShowInquiry(true)}
        className="fixed bottom-6 right-4 sm:right-6 z-40 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b px-4 sm:px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Plan Your Trip
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dest.city}, {dest.country}
                  </p>
                </div>
                <button
                  onClick={() => setShowInquiry(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <InquiryForm destination={dest.city} onClose={() => setShowInquiry(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}