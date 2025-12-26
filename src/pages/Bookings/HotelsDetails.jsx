// HotelDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../../components/BackButton';
import { 
  ArrowLeft,
  Star,
  MapPin,
  Wifi,
  Coffee,
  Car,
  Dumbbell,
  Users,
  Check,
  Calendar,
  Phone,
  Mail,
  Globe,
  Shield,
  Heart,
  X,
  User,
  MessageCircle
} from 'lucide-react';

// Hotel data (same as before)
const hotels = [
    {
      id: 1,
      name: "Grand Marina Bay",
      location: "Singapore",
      rating: 4.8,
      price: 299,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d",
        "https://images.unsplash.com/photo-1559599189-fe84dea4eb79",
        "https://images.unsplash.com/photo-1560448070-c6b5a81d1e25"
      ],
      amenities: ["wifi", "pool", "spa", "gym"],
      description: "Luxury waterfront hotel with panoramic city views and world-class amenities.",
      highlights: [
        "Sea-facing luxury rooms",
        "Infinity swimming pool",
        "24/7 room service",
        "Free high-speed WiFi"
      ],
      reviews: [
        { name: "John Doe", rating: 5, date: "12 Aug 2024", comment: "Amazing stay!" },
        { name: "Emily Smith", rating: 4.5, date: "03 Sep 2024", comment: "Beautiful view." }
      ],
      address: "12 Marina Blvd, Singapore",
      contact: "+65 9876 5432",
      email: "info@grandmarinabay.com",
      policies: [
        "Check-in after 2 PM",
        "No smoking",
        "Pets not allowed",
        "Free cancellation within 48 hours"
      ],
      trending: true,
      sustainable: true
    },
  
    {
      id: 2,
      name: "Alpine Retreat Lodge",
      location: "Swiss Alps",
      rating: 4.9,
      price: 450,
      images: [
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      ],
      amenities: ["wifi", "fireplace", "spa", "ski"],
      description: "Mountain resort offering ski-in/ski-out access and cozy alpine accommodations.",
      highlights: [
        "Ski-in / Ski-out access",
        "Fireplace luxury rooms",
        "Mountain spa retreat",
        "Panoramic alpine views"
      ],
      reviews: [
        { name: "Lukas Meier", rating: 5, date: "18 Jan 2024", comment: "Perfect winter getaway!" },
        { name: "Anna Keller", rating: 4.8, date: "02 Feb 2024", comment: "Cozy and beautiful." }
      ],
      address: "Alpine Road 45, Swiss Alps",
      contact: "+41 44 123 4567",
      email: "info@alpineretreat.com",
      policies: [
        "Check-in after 3 PM",
        "Ski equipment storage available",
        "No pets",
        "Free cancellation within 72 hours"
      ],
      trending: true,
      sustainable: true
    },
  
    {
      id: 3,
      name: "Urban Oasis Tower",
      location: "Tokyo",
      rating: 4.7,
      price: 320,
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        "https://images.unsplash.com/photo-1560067174-89447a5b65df"
      ],
      amenities: ["wifi", "gym", "bar", "concierge"],
      description: "Modern high-rise in the heart of Tokyo with cutting-edge design and technology.",
      highlights: [
        "Central Tokyo location",
        "Rooftop city views",
        "24/7 concierge",
        "Smart room technology"
      ],
      reviews: [
        { name: "Kenji Sato", rating: 4.8, date: "10 Oct 2024", comment: "Perfect city hotel." },
        { name: "Maria Lopez", rating: 4.5, date: "21 Nov 2024", comment: "Great location!" }
      ],
      address: "5-2 Shinjuku, Tokyo",
      contact: "+81 3 1234 5678",
      email: "contact@urbanoasis.jp",
      policies: [
        "Check-in after 2 PM",
        "No smoking",
        "ID required at check-in",
        "Free WiFi"
      ],
      trending: false,
      sustainable: true
    },
  
    {
      id: 4,
      name: "Desert Mirage Resort",
      location: "Dubai",
      rating: 4.6,
      price: 380,
      images: [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
      ],
      amenities: ["wifi", "pool", "spa", "golf"],
      description: "Luxury desert resort featuring private villas and exclusive desert experiences.",
      highlights: [
        "Private desert villas",
        "Luxury spa treatments",
        "Championship golf course",
        "Desert safari tours"
      ],
      reviews: [
        { name: "Ahmed Ali", rating: 4.7, date: "05 Mar 2024", comment: "Absolutely luxurious!" },
        { name: "Sarah Khan", rating: 4.5, date: "22 Apr 2024", comment: "Unique desert stay." }
      ],
      address: "Al Badayer Desert, Dubai",
      contact: "+971 4 987 6543",
      email: "info@desertmirage.ae",
      policies: [
        "Check-in after 3 PM",
        "Resort dress code",
        "No outside food",
        "Free cancellation within 48 hours"
      ],
      trending: true,
      sustainable: false
    },
  
    {
      id: 5,
      name: "Historic Grand Plaza",
      location: "Paris",
      rating: 4.5,
      price: 275,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1522156373667-4c7234bbd804"
      ],
      amenities: ["wifi", "restaurant", "concierge", "historic"],
      description: "Restored 19th-century hotel blending historic charm with modern luxury.",
      highlights: [
        "Historic architecture",
        "Central Paris location",
        "Fine dining restaurant",
        "Classic French interiors"
      ],
      reviews: [
        { name: "Pierre Dubois", rating: 4.6, date: "15 Jun 2024", comment: "Very charming hotel." },
        { name: "Laura Rossi", rating: 4.4, date: "02 Jul 2024", comment: "Loved the history." }
      ],
      address: "18 Rue de Rivoli, Paris",
      contact: "+33 1 2345 6789",
      email: "contact@grandplaza.fr",
      policies: [
        "Check-in after 2 PM",
        "Historic property rules apply",
        "No pets",
        "Free cancellation within 24 hours"
      ],
      trending: false,
      sustainable: true
    },
  
    {
      id: 6,
      name: "Oceanfront Paradise",
      location: "Bali",
      rating: 4.9,
      price: 220,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
        "https://images.unsplash.com/photo-1519821172141-b5d8f6b3a4d8",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
      ],
      amenities: ["wifi", "beach", "spa", "yoga"],
      description: "Tropical beachfront resort with private villas and wellness-focused amenities.",
      highlights: [
        "Private beach access",
        "Daily yoga sessions",
        "Ocean-view villas",
        "Holistic spa treatments"
      ],
      reviews: [
        { name: "Made Wirawan", rating: 5, date: "08 May 2024", comment: "Pure paradise!" },
        { name: "Sophie Brown", rating: 4.9, date: "19 Jun 2024", comment: "Perfect relaxation spot." }
      ],
      address: "Jl. Pantai Sunset, Bali",
      contact: "+62 361 998877",
      email: "hello@oceanfrontbali.com",
      policies: [
        "Check-in after 2 PM",
        "Beach safety rules apply",
        "Pets not allowed",
        "Free cancellation within 48 hours"
      ],
      trending: true,
      sustainable: true
    }
];

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // State for contact form popup
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hotel = hotels.find(h => h.id === parseInt(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel not found</h2>
          <button
            onClick={() => navigate('/hotels')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Hotels
          </button>
        </div>
      </div>
    );
  }

  const amenitiesIcons = {
    wifi: <Wifi className="w-5 h-5" />,
    pool: "🏊",
    spa: "♨️",
    gym: <Dumbbell className="w-5 h-5" />,
    restaurant: "🍽️",
    bar: "🍸",
    concierge: "🛎️",
    parking: <Car className="w-5 h-5" />,
    breakfast: <Coffee className="w-5 h-5" />,
    fireplace: "🔥",
    ski: "⛷️",
    historic: "🏛️",
    beach: "🏖️",
    yoga: "🧘"
  };

  const calculateTotal = () => {
    // Assuming 3 nights stay
    const nights = checkInDate && checkOutDate ? 
      Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 3;
    const roomTotal = hotel.price * nights;
    const serviceFee = 45.00;
    const tax = 32.10;
    return (roomTotal + serviceFee + tax).toFixed(2);
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
      console.log('Hotel booking submitted:', { name, email, phone });
      
      // Send to WhatsApp (change this to your admin number)
      const adminWhatsAppNumber = "919876543210"; // Your admin's WhatsApp number
      
      // Calculate nights
      const nights = checkInDate && checkOutDate ? 
        Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 3;
      
      const message = `🏨 *New Hotel Booking Request* 🏨

📋 *Guest Details:*
• Name: ${name}
${email ? `• Email: ${email}` : ''}
${phone ? `• Phone: +91 ${phone}` : ''}

🏨 *Hotel Details:*
• Hotel: ${hotel.name}
• Location: ${hotel.location}
• Rating: ${hotel.rating} ⭐
• Address: ${hotel.address}
• Hotel Phone: ${hotel.contact}

📅 *Booking Details:*
• Check-in: ${checkInDate || "Not specified"}
• Check-out: ${checkOutDate || "Not specified"}
• Nights: ${nights}
• Guests: ${guests}

💰 *Price Summary:*
• Room Rate: $${hotel.price}/night
• Nights: ${nights}
• Room Total: $${(hotel.price * nights).toFixed(2)}
• Service Fee: $45.00
• Tax: $32.10
• *Total Amount: $${calculateTotal()}*

⭐ *Hotel Highlights:*
${hotel.highlights.map(h => `• ${h}`).join('\n')}

📅 *Submitted on:* ${new Date().toLocaleString()}

_This booking request was sent via Finvoy-Global Hotel App_`;

      const whatsappURL = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
      
      // Close popup after sending
      setShowContactPopup(false);
      setIsSubmitting(false);
      
      // Show success message
      alert("✅ Hotel booking request sent!\n\nYour booking details have been sent to our admin team via WhatsApp. You'll be contacted shortly to confirm your reservation.");
      
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <BackButton className="container mx-auto px-4 pt-6"/>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hotel Header */}
          <div className="mb-8 pt-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="mr-4">{hotel.location}</span>
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-bold text-gray-800">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {hotel.trending && (
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Trending
                    </span>
                  )}
                  {hotel.sustainable && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Eco-Friendly
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-800">${hotel.price}</div>
                <div className="text-gray-600">per night</div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              <div className="lg:col-span-2">
                <div className="h-64 md:h-96 rounded-2xl overflow-hidden">
                  <img
                    src={hotel.images[selectedImage]}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {hotel.images.slice(1, 5).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`h-32 rounded-xl overflow-hidden transition-all ${
                      selectedImage === index + 1 ? 'ring-2 ring-blue-500' : 'hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt={`${hotel.name} ${index + 2}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                      <span className="text-xl">{amenitiesIcons[amenity] || "✓"}</span>
                      <span className="font-medium text-gray-700 capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Guest Reviews</h2>
                <div className="space-y-6">
                  {hotel.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-bold">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking & Info */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Stay</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in / Check-out</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                      />
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                    <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                      <button 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold text-gray-700">-</span>
                      </button>
                      <span className="flex-1 text-center font-medium">
                        {guests} {guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                      <button 
                        onClick={() => setGuests(guests + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold text-gray-700">+</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Price Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>${hotel.price} × 3 nights</span>
                      <span>${(hotel.price * 3).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service fee</span>
                      <span>$45.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>$32.10</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleBookNow}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Book Now
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Free cancellation up to 48 hours before check-in
                </div>
              </div>

              {/* Hotel Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hotel Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-gray-700">Address</div>
                      <div className="text-gray-600">{hotel.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium text-gray-700">Phone</div>
                      <div className="text-gray-600">{hotel.contact}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium text-gray-700">Email</div>
                      <div className="text-gray-600">{hotel.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium text-gray-700">Website</div>
                      <div className="text-gray-600">www.grandmarinabay.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hotel Policies</h3>
                <ul className="space-y-2">
                  {hotel.policies.map((policy, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{policy}</span>
                    </li>
                  ))}
                </ul>
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
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden"
      >
        {/* Header (Fixed) */}
        <div className="flex items-center justify-between p-6 border-b">
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

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600">
              Please provide your contact details. We'll contact you to confirm your hotel booking.
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
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
            />
          </div>

          {/* Booking Summary */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">Booking Summary</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Hotel:</span>
                <span>{hotel.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span>{hotel.location}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total:</span>
                <span className="text-blue-600">${calculateTotal()}</span>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmContact}
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            {isSubmitting ? "Sending..." : "Confirm & Send"}
          </button>

          <p className="mt-4 text-xs text-gray-500 text-center">
            Your booking request will be sent via WhatsApp
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default HotelDetails;