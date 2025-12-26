// TaxiDetails.jsx - Complete with contact form popup
import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from "../../components/BackButton.jsx";
import { 
  ArrowLeft,
  Star,
  MapPin,
  Car,
  Users,
  Check,
  Calendar,
  Phone,
  Shield,
  Heart,
  Clock,
  CreditCard,
  Wifi,
  Coffee,
  Battery,
  X,
  Mail,
  User,
  MessageCircle
} from 'lucide-react';


// useEffect(() => {
//     if (showContactPopup) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => (document.body.style.overflow = "auto");
//   }, [showContactPopup]);


const TaxiDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // State for simple contact form
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Complete Taxi Data
  const rides = [
    {
      id: 1,
      name: "Economy",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200",
      price: 2.5,
      time: "5 min",
      capacity: 4,
      features: ["AC", "Standard", "Affordable"],
      color: "from-blue-400 to-blue-600",
      tag: "Most Popular",
      driver: {
        name: "John Smith",
        rating: 4.9,
        rides: 1250,
        car: "Toyota Camry 2023",
        license: "FG-TAXI-001",
        phone: "+1 (555) 123-4567"
      },
      amenities: ["AC", "Phone Charger", "GPS", "Child Seat Available", "Luggage Space"],
      description: "Reliable and affordable ride for everyday travel. Perfect for city commutes and short trips.",
      highlights: [
        "Fuel efficient",
        "Clean and comfortable",
        "Professional driver",
        "Real-time tracking",
        "Cashless payment"
      ],
      safety: [
        "Sanitized daily",
        "Driver mask required",
        "Contactless ride",
        "Safety partitions",
        "24/7 support"
      ]
    },
    {
      id: 2,
      name: "Comfort",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200",
      price: 3.5,
      time: "8 min",
      capacity: 4,
      features: ["AC", "Extra Space", "Phone Charger"],
      color: "from-green-400 to-green-600",
      tag: "Best Value",
      driver: {
        name: "Michael Chen",
        rating: 4.8,
        rides: 980,
        car: "Honda Accord 2022",
        license: "FG-TAXI-002",
        phone: "+1 (555) 234-5678"
      },
      amenities: ["AC", "Extra Legroom", "Phone Charger", "USB Ports", "Bottled Water"],
      description: "Enhanced comfort with extra space and premium features. Ideal for business trips or family travel.",
      highlights: [
        "Spacious interior",
        "Premium comfort",
        "Entertainment system",
        "Climate control",
        "Priority service"
      ],
      safety: [
        "Deep cleaning",
        "Health screened driver",
        "Safety kit included",
        "Emergency button",
        "GPS tracking"
      ]
    },
    {
      id: 3,
      name: "Business",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200",
      price: 5.0,
      time: "3 min",
      capacity: 3,
      features: ["Premium AC", "Free WiFi", "Water Bottle"],
      color: "from-purple-400 to-purple-600",
      tag: "Fast Arrival",
      driver: {
        name: "David Johnson",
        rating: 4.9,
        rides: 750,
        car: "BMW 5 Series 2023",
        license: "FG-TAXI-003",
        phone: "+1 (555) 345-6789"
      },
      amenities: ["WiFi", "Water Bottle", "Newspaper", "Phone Charger", "Workspace"],
      description: "Premium business class service with WiFi and refreshments. Perfect for executives and important meetings.",
      highlights: [
        "Free high-speed WiFi",
        "Complimentary refreshments",
        "Professional chauffeur",
        "On-time guarantee",
        "Concierge service"
      ],
      safety: [
        "Executive sanitization",
        "Health certificate",
        "Privacy screen",
        "Secure luggage",
        "Dedicated support"
      ]
    },
    {
      id: 4,
      name: "SUV",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200",
      price: 6.0,
      time: "10 min",
      capacity: 6,
      features: ["Spacious", "Luggage Space", "Family"],
      color: "from-orange-400 to-orange-600",
      tag: "Group Travel",
      driver: {
        name: "Robert Williams",
        rating: 4.7,
        rides: 640,
        car: "Toyota Fortuner 2023",
        license: "FG-TAXI-004",
        phone: "+1 (555) 456-7890"
      },
      amenities: ["AC", "Large Luggage Space", "Child Seat", "Phone Charger", "GPS Navigation"],
      description: "Perfect choice for families and group travel with ample space and comfort.",
      highlights: [
        "Spacious seating",
        "Ideal for long trips",
        "Family-friendly",
        "Extra luggage capacity",
        "Smooth suspension"
      ],
      safety: [
        "Daily vehicle inspection",
        "First aid kit",
        "GPS tracking",
        "Emergency assistance",
        "Sanitized interiors"
      ]
    },
    {
      id: 5,
      name: "Luxury",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200",
      price: 10.0,
      time: "15 min",
      capacity: 3,
      features: ["Chauffeur", "Premium Interior", "Refreshments"],
      color: "from-yellow-400 to-red-600",
      tag: "VIP Experience",
      driver: {
        name: "Alexander Brown",
        rating: 5.0,
        rides: 420,
        car: "Mercedes-Benz S-Class 2023",
        license: "FG-TAXI-005",
        phone: "+1 (555) 567-8901"
      },
      amenities: ["Premium AC", "Leather Seats", "Refreshments", "Ambient Lighting", "WiFi"],
      description: "Ultra-luxury ride designed for VIPs, special occasions, and premium comfort.",
      highlights: [
        "Elite chauffeur service",
        "Luxury interior",
        "Complimentary refreshments",
        "Silent & smooth ride",
        "Priority pickup"
      ],
      safety: [
        "Luxury sanitization",
        "Professional certified driver",
        "Privacy glass",
        "Secure payment",
        "24/7 concierge support"
      ]
    },
    {
      id: 6,
      name: "Executive",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200",
      price: 15.0,
      time: "20 min",
      capacity: 4,
      features: ["Executive", "Privacy Glass", "Concierge"],
      color: "from-gray-700 to-black",
      tag: "Premium Service",
      driver: {
        name: "Daniel Martinez",
        rating: 4.9,
        rides: 310,
        car: "Audi A8 L 2023",
        license: "FG-TAXI-006",
        phone: "+1 (555) 678-9012"
      },
      amenities: ["Executive Seating", "Privacy Glass", "WiFi", "Charging Ports", "Work Desk"],
      description: "Top-tier executive service offering privacy, comfort, and premium professionalism.",
      highlights: [
        "Business-class comfort",
        "Confidential travel",
        "On-demand concierge",
        "Smooth executive ride",
        "Premium support"
      ],
      safety: [
        "Enhanced privacy protection",
        "Security-trained driver",
        "Live GPS monitoring",
        "Emergency response system",
        "Sanitized executive cabin"
      ]
    }
  ];

  const taxi = rides.find(t => t.id === parseInt(id));

  if (!taxi) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Taxi not found</h2>
          <button
            onClick={() => navigate('/taxi')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Taxis
          </button>
        </div>
      </div>
    );
  }

  const calculateFare = () => {
    const baseFare = taxi.price * 10;
    const serviceFee = 2.50;
    const tax = 1.80;
    return (baseFare + serviceFee + tax).toFixed(2);
  };

  const handleBookNow = () => {
    setShowContactPopup(true);
    setName('');
    setEmail('');
    setPhone('');
    setIsSubmitting(false);
  };

  const handleConfirmContact = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim() && !phone.trim()) {
      alert("Please enter either email or phone number");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Contact submitted:', { name, email, phone });
      
      // Send to WhatsApp (change this to your admin number)
      const adminWhatsAppNumber = "919876543210"; // Your admin's WhatsApp number
      const message = `🚕 *New Taxi Booking Request* 🚕

📋 *Customer Details:*
• Name: ${name}
${email ? `• Email: ${email}` : ''}
${phone ? `• Phone: +91 ${phone}` : ''}

🚖 *Taxi Details:*
• Type: ${taxi.name}
• Driver: ${taxi.driver.name}
• Car: ${taxi.driver.car}
• Driver Phone: ${taxi.driver.phone}
• Rating: ${taxi.driver.rating} ⭐

📍 *Trip Details:*
• Pickup: ${pickup || "Not specified"}
• Destination: ${dropoff || "Not specified"}
• Date: ${date || "Not specified"}
• Time: ${time || "Not specified"}
• Passengers: ${passengers}

💰 *Fare Estimate:*
• Base Fare: $${(taxi.price * 10).toFixed(2)}
• Service Fee: $2.50
• Tax: $1.80
• *Total: $${calculateFare()}*

📅 *Submitted on:* ${new Date().toLocaleString()}

_This booking request was sent via Finvoy-Global Taxi App_`;

      const whatsappURL = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
      
      // Close popup after sending
      setShowContactPopup(false);
      setIsSubmitting(false);
      
      // Show success message
      alert("✅ Booking request sent to admin!\n\nYour booking details have been sent to our admin team via WhatsApp. You'll be contacted shortly to confirm your ride.");
      
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-gray-50 to-blue-50">
      {/* Header */}
      <BackButton className="container mx-auto px-4 pt-6"/>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Taxi Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{taxi.name} Class</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="mr-4">Available Now</span>
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-bold text-gray-800">{taxi.driver.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {taxi.tag && (
                    <span className={`px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${taxi.color}`}>
                      {taxi.tag}
                    </span>
                  )}
                  <span className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    ETA: {taxi.time}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-800">${taxi.price}</div>
                <div className="text-gray-600">per km</div>
              </div>
            </div>

            {/* Taxi Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-64 md:h-96">
              <img
                src={taxi.image}
                alt={taxi.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-xl">
                <div className="font-bold">{taxi.driver.car}</div>
                <div className="text-sm">License: {taxi.driver.license}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{taxi.description}</p>
                
                {/* Driver Info */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Your Driver</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                      {taxi.driver.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-800 text-lg">{taxi.driver.name}</div>
                      <div className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="mr-4">{taxi.driver.rating} • {taxi.driver.rides}+ rides</span>
                        <Phone className="w-4 h-4 mr-1" />
                        <span>{taxi.driver.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {taxi.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Features */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    Safety Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {taxi.safety.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                    <input
                      type="text"
                      placeholder="Enter pickup address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <input
                        type="time"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                      <button 
                        onClick={() => setPassengers(Math.max(1, passengers - 1))}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold text-gray-700">-</span>
                      </button>
                      <span className="flex-1 text-center font-medium">
                        {passengers} {passengers === 1 ? 'Person' : 'People'}
                      </span>
                      <button 
                        onClick={() => setPassengers(passengers + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold text-gray-700">+</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Fare Estimate</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Fare (10 km)</span>
                      <span>${(taxi.price * 10).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service Fee</span>
                      <span>$2.50</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>$1.80</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${calculateFare()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Continue to Book
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Your ride is protected by Finvoy-Global
                </div>
              </div>

              {/* Taxi Features */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {taxi.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        {amenity === 'WiFi' && <Wifi className="w-4 h-4 text-blue-600" />}
                        {amenity === 'Phone Charger' && <Battery className="w-4 h-4 text-blue-600" />}
                        {amenity === 'Water Bottle' && <Coffee className="w-4 h-4 text-blue-600" />}
                        {amenity === 'Refreshments' && <Coffee className="w-4 h-4 text-blue-600" />}
                        {amenity === 'AC' && <span className="text-blue-600">❄️</span>}
                        {amenity === 'Premium AC' && <span className="text-blue-600">❄️</span>}
                        {!['WiFi', 'Phone Charger', 'Water Bottle', 'Refreshments', 'AC', 'Premium AC'].includes(amenity) && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simple Contact Form Popup */}
      <AnimatePresence>
      {showContactPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          {/* Popup Box */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            {/* Header (Sticky) */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Contact Details
              </h2>
              <button
                onClick={() => setShowContactPopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Intro */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  Please provide your contact details. We'll contact you to
                  confirm your booking.
                </p>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 000-000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                />
                <p className="text-xs text-gray-500 mt-1">
                  * Email or phone is required
                </p>
              </div>

              {/* Booking Summary */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Booking Summary
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Taxi:</span>
                    <span className="font-medium">{taxi?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fare:</span>
                    <span className="font-medium">₹{calculateFare()}</span>
                  </div>
                  {pickup && (
                    <div className="flex justify-between">
                      <span>Pickup:</span>
                      <span className="truncate max-w-[150px]">{pickup}</span>
                    </div>
                  )}
                  {dropoff && (
                    <div className="flex justify-between">
                      <span>Drop:</span>
                      <span className="truncate max-w-[150px]">{dropoff}</span>
                    </div>
                  )}
                  {date && (
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{date}</span>
                    </div>
                  )}
                  {time && (
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{time}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Button */}
              <button
                onClick={handleConfirmContact}
                disabled={!name || (!email && !phone) || isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Confirm & Send"}
              </button>

              {/* Note */}
              <div className="mt-4 text-xs text-gray-500 text-center">
                <Shield className="w-3 h-3 inline mr-1" />
                Your booking will be sent to admin via WhatsApp
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </div>
  );
};

export default TaxiDetails;