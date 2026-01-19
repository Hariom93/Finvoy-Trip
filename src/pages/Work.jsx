import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiCalendar, 
  FiMapPin, 
  FiUsers, 
  FiFilter,
  FiStar,
  FiClock,
  FiTrendingUp,
  FiHeart,
  FiEye,
  FiExternalLink,
  FiCode,
  FiGlobe,
  FiShield,
  FiCheck,
  FiMessageCircle,
  FiAward
} from "react-icons/fi";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filters = [
    { id: "all", label: "All Features", count: 8 },
    { id: "search", label: "Flight Search", count: 3 },
    { id: "booking", label: "Booking System", count: 2 },
    { id: "payment", label: "Payment", count: 1 },
    { id: "mobile", label: "Mobile App", count: 2 },
  ];

  const features = [
    {
      id: 1,
      title: "Smart Flight Search",
      category: "search",
      description: "Intelligent flight search with filters, sorting, and real-time results",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=800"
      ],
      liveUrl: "https://demo.FinvoyGlobal.com/search",
      githubUrl: "https://github.com/finvoy/flight-search",
      stats: { users: "50K+", rating: 4.8, uptime: "99.9%" },
      highlights: [
        "Real-time price updates",
        "Multi-city search",
        "Flexible date calendar",
        "Airline filters"
      ]
    },
    {
      id: 2,
      title: "One-Click Booking",
      category: "booking",
      description: "Seamless booking flow with passenger details and seat selection",
      technologies: ["Next.js", "Stripe", "Redux", "Node.js"],
      images: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
      ],
      liveUrl: "https://demo.FinvoyGlobal.com/booking",
      githubUrl: "https://github.com/finvoy/booking-system",
      stats: { users: "100K+", rating: 4.9, uptime: "99.8%" },
      highlights: [
        "Instant confirmation",
        "Multiple payment options",
        "E-ticket generation",
        "Booking management"
      ]
    },
    {
      id: 3,
      title: "Mobile Booking App",
      category: "mobile",
      description: "Native mobile app for iOS and Android with push notifications",
      technologies: ["React Native", "Firebase", "Apple Pay", "Google Pay"],
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
      ],
      liveUrl: "https://apps.apple.com/finvoy",
      githubUrl: "https://github.com/finvoy/mobile-app",
      stats: { users: "200K+", rating: 4.7, uptime: "99.7%" },
      highlights: [
        "Offline booking",
        "Mobile boarding passes",
        "Flight status alerts",
        "Biometric login"
      ]
    },
    {
      id: 4,
      title: "Payment Gateway",
      category: "payment",
      description: "Secure payment processing with multiple currency support",
      technologies: ["Node.js", "Stripe API", "Razorpay", "WebSockets"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
      ],
      liveUrl: "https://demo.FinvoyGlobal.com/payment",
      githubUrl: "https://github.com/finvoy/payment-gateway",
      stats: { users: "150K+", rating: 4.8, uptime: "99.95%" },
      highlights: [
        "PCI DSS compliant",
        "Instant refunds",
        "Currency conversion",
        "Fraud detection"
      ]
    },
    {
      id: 5,
      title: "Flight Status Tracker",
      category: "search",
      description: "Real-time flight tracking with delay predictions and notifications",
      technologies: ["Socket.io", "Redis", "Maps API", "Push Notifications"],
      images: [
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800",
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800"
      ],
      liveUrl: "https://demo.FinvoyGlobal.com/tracker",
      githubUrl: "https://github.com/finvoy/flight-tracker",
      stats: { users: "75K+", rating: 4.6, uptime: "99.9%" },
      highlights: [
        "Live flight maps",
        "Delay predictions",
        "Gate change alerts",
        "Weather integration"
      ]
    },
    {
      id: 6,
      title: "Admin Dashboard",
      category: "booking",
      description: "Comprehensive dashboard for managing bookings, users, and analytics",
      technologies: ["React Admin", "Chart.js", "PostgreSQL", "Express"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      ],
      liveUrl: "https://admin.FinvoyGlobal.com",
      githubUrl: "https://github.com/finvoy/admin-dashboard",
      stats: { users: "500+", rating: 4.9, uptime: "99.99%" },
      highlights: [
        "Real-time analytics",
        "Bulk operations",
        "User management",
        "Revenue reports"
      ]
    },
  ];

  const filteredFeatures = features.filter(feature => 
    activeFilter === "all" ? true : feature.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 pb-18 via-white to-blue-50/20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Finvoy-Trip Flight Platform
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 mb-6"
            >
              Modern flight booking system with real-time search, secure payments, and mobile app
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FiStar className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FiUsers className="w-5 h-5 text-green-300" />
                <span className="font-medium">500K+ Users</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FiShield className="w-5 h-5 text-emerald-300" />
                <span className="font-medium">100% Secure</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Platform Features</h2>
            <div className="text-gray-600 text-sm">
              Showing {filteredFeatures.length} of {features.length} features
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap
                  transition-all duration-300
                  ${activeFilter === filter.id 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }
                `}
              >
                {filter.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter.id 
                    ? "bg-white/20" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setActiveProject(feature.id)}
              >
                {/* Feature Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                  {/* Images */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.images[0]}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {filters.find(f => f.id === feature.category)?.label}
                    </div>
                    
                    {/* Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                          <FiStar className="w-3 h-3 text-yellow-300" />
                          <span className="text-white text-xs">{feature.stats.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                          <FiUsers className="w-3 h-3 text-blue-300" />
                          <span className="text-white text-xs">{feature.stats.users}</span>
                        </div>
                      </div>
                      <div className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-lg">
                        {feature.stats.uptime} Uptime
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {feature.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {feature.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {feature.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FiCheck className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(feature.liveUrl, '_blank');
                        }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <FiEye className="w-4 h-4" />
                        View Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(feature.githubUrl, '_blank');
                        }}
                        className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <FiCode className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Bookings", value: "1.2M+", icon: "✈️" },
              { label: "Active Users", value: "500K+", icon: "👥" },
              { label: "Airlines", value: "150+", icon: "🏢" },
              { label: "Countries", value: "85+", icon: "🌍" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-center text-white"
        >
          <FiAward className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Travel Booking?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Finvoy-Trip's flight booking platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button - Removed FiChevronRight to fix error */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 z-40 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}