// BusPassPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  Bus, 
  Shield, 
  Percent, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle, 
  ChevronRight, 
  ArrowRight,
  Star,
  Award,
  Calendar,
  CreditCard,
  Smartphone,
  Search,
  Filter,
  Download,
  Share2,
  Info
} from 'lucide-react';

const Buspas = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPass, setSelectedPass] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const passes = [
    {
      id: 1,
      name: "Monthly Unlimited",
      price: "₹1,999",
      originalPrice: "₹2,499",
      discount: "20% OFF",
      validity: "30 days",
      rides: "Unlimited",
      popular: true,
      features: ["All routes", "Priority boarding", "Free cancellations", "Insurance cover"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      name: "Weekly Commuter",
      price: "₹699",
      originalPrice: "₹899",
      discount: "22% OFF",
      validity: "7 days",
      rides: "14 rides",
      popular: false,
      features: ["Selected routes", "Free WiFi", "Reserved seating"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      name: "Quarterly Saver",
      price: "₹5,499",
      originalPrice: "₹6,999",
      discount: "21% OFF",
      validity: "90 days",
      rides: "Unlimited",
      popular: true,
      features: ["All routes", "Priority boarding", "Lounge access", "Insurance cover", "Extra baggage"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      name: "Student Pass",
      price: "₹1,499",
      originalPrice: "₹1,999",
      discount: "25% OFF",
      validity: "30 days",
      rides: "Unlimited",
      popular: false,
      features: ["Valid ID required", "All routes", "Special student discounts"],
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Safe & Secure", desc: "Verified buses with safety protocols" },
    { icon: <Percent className="w-6 h-6" />, title: "Save Up to 25%", desc: "Compared to regular ticket prices" },
    { icon: <Clock className="w-6 h-6" />, title: "Unlimited Rides", desc: "Travel as much as you want" },
    { icon: <MapPin className="w-6 h-6" />, title: "Pan-India Routes", desc: "Valid across 5000+ routes" },
  ];

  const howItWorksSteps = [
    { step: 1, title: "Choose Your Pass", desc: "Select from monthly, weekly or custom passes" },
    { step: 2, title: "Complete Payment", desc: "Secure online payment with multiple options" },
    { step: 3, title: "Get Digital Pass", desc: "Receive pass instantly on email & WhatsApp" },
    { step: 4, title: "Start Traveling", desc: "Show digital pass while boarding the bus" },
  ];

  const routes = [
    { from: "Mumbai", to: "Pune", frequency: "Every 30 mins", duration: "3h 30m" },
    { from: "Delhi", to: "Jaipur", frequency: "Every hour", duration: "5h 15m" },
    { from: "Bangalore", to: "Chennai", frequency: "Every 45 mins", duration: "6h" },
    { from: "Hyderabad", to: "Goa", frequency: "Every 2 hours", duration: "12h" },
    { from: "Kolkata", to: "Patna", frequency: "Every 3 hours", duration: "8h 30m" },
  ];

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Finvoy-Trip</h1>
                <p className="text-gray-500 text-sm">Travel unlimited. Save unlimited.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
                <Search className="w-4 h-4" />
                <span>Search Routes</span>
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition">
                My Passes
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unlimited Bus Travel<br />One Single Pass
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Travel across India with our flexible bus passes. Save up to 25% compared to regular tickets.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="From City"
                      className="w-full outline-none text-gray-800"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-1 p-3 border-l border-gray-200">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="To City"
                      className="w-full outline-none text-gray-800"
                    />
                  </div>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Check Routes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className={`w-12 h-12 rounded-lg ${index === 0 ? 'bg-blue-100 text-blue-600' : 
                index === 1 ? 'bg-green-100 text-green-600' : 
                index === 2 ? 'bg-amber-100 text-amber-600' : 
                'bg-purple-100 text-purple-600'} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bus Passes */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Bus Pass</h2>
            <p className="text-gray-600">Select the pass that fits your travel needs</p>
          </div>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setActiveTab('all')}
            >
              All Passes
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'popular' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setActiveTab('popular')}
            >
              Most Popular
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {passes
            .filter(pass => activeTab === 'all' || (activeTab === 'popular' && pass.popular))
            .map((pass) => (
              <div 
                key={pass.id} 
                className={`bg-white rounded-2xl shadow-lg border-2 ${selectedPass === pass.id ? 'border-teal-500' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all cursor-pointer`}
                onClick={() => setSelectedPass(pass.id)}
              >
                {pass.popular && (
                  <div className="bg-teal-600 text-white px-4 py-2 text-center font-medium">
                    🎯 MOST POPULAR CHOICE
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{pass.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-3xl font-bold text-gray-800">{pass.price}</span>
                        <span className="text-gray-500 line-through">{pass.originalPrice}</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                          {pass.discount}
                        </span>
                      </div>
                    </div>
                    <div className={`${pass.bgColor} ${pass.borderColor} border p-3 rounded-lg`}>
                      <Bus className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{pass.validity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{pass.rides}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pass.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button className={`flex-1 ${selectedPass === pass.id ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} text-white py-3 rounded-lg font-medium transition flex items-center justify-center space-x-2`}>
                      <span>{selectedPass === pass.id ? 'Selected' : 'Select Pass'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 px-4 py-3 rounded-lg font-medium transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How FinvoyGlobal Bus Pass Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your pass in 4 simple steps and start traveling immediately</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Routes Covered</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-600">Route</th>
                  <th className="text-left p-4 font-medium text-gray-600">Frequency</th>
                  <th className="text-left p-4 font-medium text-gray-600">Duration</th>
                  <th className="text-left p-4 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Bus className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{route.from} → {route.to}</div>
                          <div className="text-sm text-gray-500">Multiple operators</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{route.frequency}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-medium">{route.duration}</div>
                    </td>
                    <td className="p-4">
                      <button className="text-teal-600 hover:text-teal-700 font-medium">
                        Check Availability
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is FinvoyGlobal Bus Pass?",
              a: "FinvoyGlobal Bus Pass is a subscription service that allows unlimited travel on select bus routes for a fixed period. You pay once and travel multiple times."
            },
            {
              q: "How do I use my bus pass?",
              a: "After purchase, you'll receive a digital pass. Show this pass when boarding any bus on your selected route. No need to book individual tickets."
            },
            {
              q: "Can I cancel or refund my pass?",
              a: "Yes, you can cancel within 24 hours for a full refund. After that, pro-rata refunds are available based on unused days."
            },
            {
              q: "Is the pass transferable?",
              a: "No, the pass is non-transferable and can only be used by the registered user. Photo ID verification may be required."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who save time and money with FinvoyGlobal Bus Pass
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Buy Now & Save 25%</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-bold">
              View All Plans
            </button>
          </div>
          <p className="mt-6 text-blue-100">⭐ 4.8/5 rating from 12,500+ travelers</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Bus className="w-8 h-8" />
                <span className="text-xl font-bold">Finvoy-Trip Bus</span>
              </div>
              <p className="text-gray-400">Travel smarter with unlimited bus passes across India.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">All Bus Passes</a></li>
                <li><a href="#" className="hover:text-white">Route Map</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Download App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Download App</h3>
              <div className="space-y-3">
                <button className="w-full bg-black hover:bg-gray-800 p-3 rounded-lg flex items-center justify-center space-x-3">
                  <Smartphone className="w-5 h-5" />
                  <span>Google Play</span>
                </button>
                <button className="w-full bg-black hover:bg-gray-800 p-3 rounded-lg flex items-center justify-center space-x-3">
                  <Smartphone className="w-5 h-5" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 FinvoyGlobal.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center">
      <div className="relative">
        {/* Animated Bus */}
        <div className="w-32 h-32 mb-8 relative">
          <div className="absolute inset-0 bg-teal-100 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Bus className="w-16 h-16 text-teal-600 animate-bounce" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Finvoy-Trip Bus Pass</h2>
          <p className="text-gray-600 mb-8">Getting the best travel deals for you...</p>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 animate-loadingBar"></div>
          </div>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buspas;