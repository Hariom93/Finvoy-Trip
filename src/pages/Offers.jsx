import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronRight, FiCopy, FiTag, FiClock, FiPercent } from "react-icons/fi";
import BackButton from "../components/BackButton";

export default function Offers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Flights");
  const [copiedCode, setCopiedCode] = useState(null);

  const tabs = [
    { id: "Flights", icon: "✈️", count: 4 },
    { id: "Hotels", icon: "🏨", count: 8 },
    { id: "Buses", icon: "🚌", count: 6 },
    { id: "Train", icon: "🚆", count: 3 },
    { id: "All", icon: "🎯", count: 21 },
  ];

  const offers = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800",
      title: "Get 12% Instant Discount on Flights",
      code: "CTFKAXIS",
      tab: "Flights",
      gradient: "from-blue-500 to-cyan-400",
      expiry: "Ends in 2 days",
      discount: "12% OFF",
      description: "Use code on flight bookings above ₹5,000",
      usage: "12,345 used",
      isFavorite: true
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800",
      title: "Unlimited* Flat 12% off on Hotels",
      code: "CTFKSBIC",
      tab: "Hotels",
      gradient: "from-purple-500 to-pink-400",
      expiry: "Valid till 20 Dec",
      discount: "12% OFF",
      description: "Applicable on all hotel bookings",
      usage: "8,921 used",
      isFavorite: false
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800",
      title: "Up to ₹5,000 Cashback on Flights",
      code: "CTUPI",
      tab: "Flights",
      gradient: "from-emerald-500 to-teal-400",
      expiry: "Valid till 31 Dec",
      discount: "₹5,000",
      description: "Minimum booking of ₹15,000 required",
      usage: "5,432 used",
      isFavorite: true
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800",
      title: "EMI Available | No Cost EMI",
      code: "HDFCEMI",
      tab: "Flights",
      gradient: "from-amber-500 to-orange-400",
      expiry: "Valid till 25 Dec",
      discount: "No Cost EMI",
      description: "On HDFC Bank credit cards",
      usage: "3,210 used",
      isFavorite: false
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      title: "Flat ₹800 off on Bus Bookings",
      code: "BUS800",
      tab: "Buses",
      gradient: "from-red-500 to-rose-400",
      expiry: "Ends today",
      discount: "₹800 OFF",
      description: "On bus tickets above ₹1,500",
      usage: "2,987 used",
      isFavorite: true
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?auto=format&fit=crop&w=800",
      title: "Extra 10% off on Weekend Hotels",
      code: "WEEKEND10",
      tab: "Hotels",
      gradient: "from-indigo-500 to-blue-400",
      expiry: "Weekends only",
      discount: "10% OFF",
      description: "Friday to Sunday bookings",
      usage: "4,567 used",
      isFavorite: false
    },
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredOffers = offers.filter(offer => 
    activeTab === "All" ? true : offer.tab === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 pb-18 pt-10 via-white to-blue-50/30">
      {/* Top Navigation Bar */}
      <BackButton className="container mx-auto px-4 pt-6"/>

      <div className=" top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Exclusive Offers
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Amazing deals waiting for you
              </p>
            </div>
            <button className="relative p-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all">
              <FiSearch className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">🎁 Active Offers</h3>
              <p className="text-sm text-gray-600 mt-1">{offers.length} deals available</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">₹12,450</div>
              <p className="text-sm text-gray-600">Total savings possible</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap
                  transition-all duration-300 transform
                  ${activeTab === tab.id 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30" 
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }
                `}
              >
                <span className="text-sm">{tab.icon}</span>
                <span>{tab.id}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id 
                    ? "bg-white/20" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Tab Indicator */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8"
          />
        </AnimatePresence>

        {/* Offers Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/offer-details/${offer.code}`)}
                >
                  {/* Offer Card */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                    {/* Image with Gradient Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={offer.img}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Discount Badge */}
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${offer.gradient} text-white font-bold py-2 px-4 rounded-2xl shadow-lg`}>
                        {offer.discount}
                      </div>
                      
                      {/* Favorite Button */}
                      <button 
                        className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle favorite toggle
                        }}
                      >
                        <svg className={`w-5 h-5 ${offer.isFavorite ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                             viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </button>
                      
                      {/* Expiry Timer */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FiClock className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">{offer.expiry}</span>
                          </div>
                          <div className="text-white/80 text-xs">
                            {offer.usage}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {offer.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4">
                        {offer.description}
                      </p>

                      {/* Coupon Section */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-4 border border-gray-200/50">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FiTag className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-600">Promo Code</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyCode(offer.code);
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            {copiedCode === offer.code ? (
                              <>
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-600 text-sm">Copied!</span>
                              </>
                            ) : (
                              <>
                                <FiCopy className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-600 text-sm">Copy</span>
                              </>
                            )}
                          </motion.button>
                        </div>
                        
                        {/* Code Display */}
                        <div className="bg-white border-2 border-dashed border-blue-200 rounded-xl p-4 text-center relative">
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-t-lg" />
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-b-lg" />
                          <div className="text-2xl font-black text-gray-900 tracking-wider mb-1">
                            {offer.code}
                          </div>
                          <div className="text-xs text-gray-500">
                            Click to copy code
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/offer-details/${offer.code}`);
                        }}
                        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                      >
                        View Details
                        <FiChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredOffers.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <FiPercent className="w-16 h-16 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No offers found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              There are no offers available for {activeTab} at the moment. Check back later for new deals!
            </p>
            <button 
              onClick={() => setActiveTab("All")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              View All Offers
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-center text-white mx-4 md:mx-0"
>
  <h3 className="text-xl md:text-2xl font-bold mb-3">Want More Offers?</h3>
  <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm md:text-base px-2">
    Subscribe to our newsletter and get exclusive deals delivered to your inbox
  </p>
  
  {/* Responsive input/button layout */}
  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
    />
    <button className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-sm md:text-base">
      Subscribe Now
    </button>
  </div>
  
  {/* Privacy notice */}
  <p className="text-blue-200/70 text-xs mt-4">
    No spam. Unsubscribe anytime.
  </p>
</motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-25 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}