import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaStar, FaCalendarAlt, FaTag, FaMapMarkerAlt, FaUser, 
  FaPhone, FaEnvelope, FaCheck, FaTimes, FaArrowLeft, 
  FaShareAlt, FaHeart, FaBed, FaSwimmingPool, FaWifi,
  FaCar, FaUtensils, FaDumbbell, FaParking, FaUmbrellaBeach,
  FaMountain, FaCity, FaShoppingBag, FaLandmark, FaMosque,
  FaPlane, FaTrain, FaBus, FaChevronLeft, FaChevronRight,
  FaUsers, FaSpinner
} from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const DetailCard = () => {
  const { id, destination } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [offerDetails, setOfferDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '1',
    packageType: 'standard',
    specialRequests: '',
    agreeTerms: false
  });
  const [bookingErrors, setBookingErrors] = useState({});
  const [isSubmittingBooking, setIsSubmittingBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Destination-specific data
  const destinationData = {
    'saudi-arabia': {
      theme: {
        primary: 'from-green-800 to-emerald-800',
        secondary: 'from-amber-500 to-yellow-600',
        bg: 'from-sand-50 to-amber-50'
      },
      contact: {
        phone: '+966 11 123 4567',
        email: 'ksa@Finvoy-Gobal.com',
        support: 'Arabic speaking agents available',
        timezone: 'Arabian Standard Time (GMT+3)'
      },
      culturalTips: [
        'Dress modestly in public areas',
        'Respect prayer times',
        'Avoid public displays of affection',
        'Familiarize with local customs'
      ],
      popularAttractions: ['AlUla', 'Makkah', 'Madinah', 'Riyadh Diriyah', 'Red Sea']
    },
    'hongkong': {
      theme: {
        primary: 'from-purple-800 to-pink-700',
        secondary: 'from-red-500 to-orange-500',
        bg: 'from-blue-50 to-purple-50'
      },
      contact: {
        phone: '+852 1234 5678',
        email: 'hk@Finvoy-Gobal.com',
        support: 'Cantonese & Mandarin speaking agents',
        timezone: 'Hong Kong Time (GMT+8)'
      },
      culturalTips: [
        'Use both hands when exchanging business cards',
        'Avoid giving clocks as gifts',
        'Tipping is not customary',
        'Learn basic Cantonese phrases'
      ],
      popularAttractions: ['Victoria Peak', 'Star Ferry', 'Lantau Island', 'Temple Street', 'Disneyland']
    },
    'western-america': {
      theme: {
        primary: 'from-blue-800 to-indigo-800',
        secondary: 'from-orange-500 to-red-500',
        bg: 'from-gray-50 to-blue-50'
      },
      contact: {
        phone: '+1 800 123 4567',
        email: 'usa@Finvoy-Gobal.com',
        support: 'English speaking agents 24/7',
        timezone: 'Pacific Time (GMT-8)'
      },
      culturalTips: [
        'Tip 15-20% at restaurants',
        'Respect personal space',
        'Be punctual for appointments',
        'Use formal titles in business'
      ],
      popularAttractions: ['Grand Canyon', 'Yosemite', 'Las Vegas Strip', 'San Francisco', 'Hollywood']
    }
  };

  // All offers data
  const allOffers = {
    'saudi-arabia': [
      {
        id: 1,
        title: "Riyadh Luxury Hotel Package",
        description: "5-star accommodation in Riyadh with desert views and spa access. Experience the epitome of luxury in the heart of Saudi Arabia's capital. This package includes exclusive access to premium facilities and personalized services.",
        price: "$279",
        originalPrice: "$450",
        discount: "38% off",
        category: "hotels",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.8,
        reviews: 234,
        validity: "Valid until Dec 31, 2024",
        terms: "Free cancellation • Breakfast included • Spa access • Airport transfer • Welcome drink",
        bookingLink: "https://www.Finvoy-Gobal.com/hotels/details/riyadh-luxury",
        location: "Riyadh, Saudi Arabia",
        duration: "3 Nights 4 Days",
        inclusions: [
          "Luxury accommodation for 3 nights",
          "Daily breakfast buffet",
          "Spa access with one complimentary massage",
          "Airport transfers",
          "Desert safari tour",
          "Free Wi-Fi",
          "Welcome Arabic coffee and dates"
        ],
        exclusions: [
          "Airfare",
          "Travel insurance",
          "Personal expenses",
          "Visa fees"
        ],
        hotelDetails: {
          name: "Al Faisaliah Hotel Riyadh",
          address: "King Fahd Rd, Al Olaya, Riyadh 11513",
          amenities: ["Free WiFi", "Swimming Pool", "Spa", "Fitness Center", "Restaurant", "Parking"],
          checkIn: "2:00 PM",
          checkOut: "12:00 PM"
        },
        gallery: [
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Desert views",
          "Traditional Arabian hospitality",
          "Close to historical sites",
          "Luxury spa facilities"
        ]
      },
      {
        id: 2,
        title: "Makkah & Madinah Spiritual Tour",
        description: "Complete 7-day pilgrimage package with 5-star accommodations near the Holy Mosques.",
        price: "$1,299",
        originalPrice: "$2,100",
        discount: "38% off",
        category: "tours",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.9,
        reviews: 567,
        validity: "Valid for Umrah season 2025",
        terms: "Guided tours • 5-star accommodation • Transportation • Meals included",
        bookingLink: "https://www.Finvoy-Gobal.com/tours/makkah-madinah",
        location: "Makkah & Madinah, Saudi Arabia",
        duration: "7 Days 6 Nights",
        inclusions: [
          "Accommodation in 5-star hotels",
          "Daily breakfast and dinner",
          "Guided tours of holy sites",
          "Round-trip airport transfers",
          "Ziyarat tours",
          "24/7 tour guide assistance"
        ],
        exclusions: [
          "International airfare",
          "Visa processing fees",
          "Personal shopping",
          "Optional tours"
        ],
        hotelDetails: {
          name: "Makkah Hilton & Towers",
          address: "Ibrahim Al Khalil Street, Makkah 24246",
          amenities: ["Prayer facilities", "Quran in rooms", "Halal restaurant", "Tour desk", "Business center"],
          checkIn: "3:00 PM",
          checkOut: "12:00 PM"
        },
        gallery: [
          "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1503174971373-b1f69850bced?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1565503261141-40e7c6a2b2d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Direct views of Kaaba",
          "Walking distance to Haram",
          "Spiritual guidance",
          "Comprehensive pilgrimage support"
        ]
      }
    ],
    'hongkong': [
      {
        id: 1,
        title: "Hong Kong Island Luxury Stay",
        description: "Experience the vibrant energy of Hong Kong from a luxurious 5-star hotel in Central district with stunning harbor views.",
        price: "$329",
        originalPrice: "$520",
        discount: "37% off",
        category: "hotels",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.7,
        reviews: 312,
        validity: "Valid until Mar 31, 2025",
        terms: "Free cancellation • Harbor view • Breakfast included • MTR access",
        bookingLink: "https://www.Finvoy-Gobal.com/hotels/details/hongkong-luxury",
        location: "Central, Hong Kong Island",
        duration: "4 Nights 5 Days",
        inclusions: [
          "Luxury accommodation with harbor view",
          "Daily breakfast at the infinity pool restaurant",
          "Complimentary MTR tourist pass",
          "Star Ferry ticket",
          "Free Wi-Fi",
          "Welcome tea ceremony"
        ],
        exclusions: [
          "International airfare",
          "Airport express train",
          "Personal shopping",
          "Theme park tickets"
        ],
        hotelDetails: {
          name: "The Peninsula Hong Kong",
          address: "Salisbury Road, Tsim Sha Tsui, Kowloon",
          amenities: ["Infinity Pool", "Michelin-star restaurants", "Spa", "Helipad", "Rolls-Royce fleet"],
          checkIn: "2:00 PM",
          checkOut: "12:00 PM"
        },
        gallery: [
          "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Victoria Harbour views",
          "Central location",
          "Luxury amenities",
          "Easy MTR access"
        ]
      },
      {
        id: 2,
        title: "Lantau Island & Big Buddha Tour",
        description: "Full-day cultural tour including Ngong Ping 360 cable car, Po Lin Monastery, and Tai O fishing village.",
        price: "$89",
        originalPrice: "$145",
        discount: "39% off",
        category: "tours",
        image: "https://images.unsplash.com/photo-1508807522700-2d5c121240a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.6,
        reviews: 189,
        validity: "Valid for 12 months",
        terms: "Cable car tickets • Lunch included • English guide • Hotel pickup",
        bookingLink: "https://www.Finvoy-Gobal.com/tours/lantau-island",
        location: "Lantau Island, Hong Kong",
        duration: "1 Day Tour",
        inclusions: [
          "Ngong Ping 360 cable car tickets",
          "Traditional vegetarian lunch at monastery",
          "English-speaking guide",
          "Hotel pickup and drop-off",
          "Tai O boat tour",
          "All entrance fees"
        ],
        exclusions: [
          "Personal shopping",
          "Additional food and drinks",
          "Tips for guide",
          "Travel insurance"
        ],
        hotelDetails: null,
        gallery: [
          "https://images.unsplash.com/photo-1508807522700-2d5c121240a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526481285587-51c22e2d7b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Big Buddha statue",
          "Cable car experience",
          "Traditional fishing village",
          "Cultural immersion"
        ]
      }
    ],
    'western-america': [
      {
        id: 1,
        title: "Grand Canyon & Las Vegas Adventure",
        description: "5-day tour exploring the natural wonders of Grand Canyon combined with the excitement of Las Vegas.",
        price: "$899",
        originalPrice: "$1,450",
        discount: "38% off",
        category: "tours",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.8,
        reviews: 421,
        validity: "Valid until Dec 2025",
        terms: "Guided tours • Accommodation • Some meals • Transportation",
        bookingLink: "https://www.Finvoy-Gobal.com/tours/grand-canyon-vegas",
        location: "Arizona & Nevada, USA",
        duration: "5 Days 4 Nights",
        inclusions: [
          "3 nights in Las Vegas Strip hotel",
          "1 night at Grand Canyon lodge",
          "Helicopter tour of Grand Canyon",
          "Guided Hoover Dam tour",
          "Breakfast daily",
          "Transportation in luxury coach"
        ],
        exclusions: [
          "International airfare",
          "Casino expenses",
          "Optional shows",
          "Personal shopping"
        ],
        hotelDetails: {
          name: "Bellagio Hotel & Casino",
          address: "3600 Las Vegas Boulevard South, Las Vegas",
          amenities: ["Famous fountains", "Multiple pools", "Fine dining", "Casino", "Spa"],
          checkIn: "3:00 PM",
          checkOut: "11:00 AM"
        },
        gallery: [
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1511994717241-8e4e484dfa8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1519003722824-194d4455a60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Grand Canyon helicopter tour",
          "Las Vegas Strip accommodation",
          "Hoover Dam visit",
          "Western landscapes"
        ]
      },
      {
        id: 2,
        title: "San Francisco City Break",
        description: "4-day experience exploring the iconic landmarks of San Francisco including Alcatraz and Golden Gate Bridge.",
        price: "$549",
        originalPrice: "$890",
        discount: "38% off",
        category: "hotels",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        rating: 4.7,
        reviews: 287,
        validity: "Valid until Nov 2025",
        terms: "Alcatraz tickets • Cable car pass • Hotel • Breakfast included",
        bookingLink: "https://www.Finvoy-Gobal.com/hotels/details/san-francisco",
        location: "San Francisco, California",
        duration: "4 Nights 3 Days",
        inclusions: [
          "Downtown hotel accommodation",
          "Alcatraz Island tickets",
          "3-day cable car pass",
          "Golden Gate Bridge tour",
          "Daily breakfast",
          "Fisherman's Wharf dining credit"
        ],
        exclusions: [
          "Airfare",
          "Airport transfers",
          "Additional meals",
          "Travel insurance"
        ],
        hotelDetails: {
          name: "Fairmont San Francisco",
          address: "950 Mason Street, San Francisco, CA 94108",
          amenities: ["City views", "Historic property", "Multiple restaurants", "Fitness center", "Concierge"],
          checkIn: "4:00 PM",
          checkOut: "12:00 PM"
        },
        gallery: [
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: [
          "Alcatraz Island visit",
          "Golden Gate Bridge photos",
          "Cable car experience",
          "Fisherman's Wharf"
        ]
      }
    ]
  };

  useEffect(() => {
    const fetchOfferDetails = () => {
      setLoading(true);
      setTimeout(() => {
        if (destination && id) {
          const destOffers = allOffers[destination] || allOffers['saudi-arabia'];
          const offer = destOffers.find(o => o.id === parseInt(id)) || destOffers[0];
          setOfferDetails(offer);
          setSelectedImage(offer.image);
          setCurrentImageIndex(0);
        }
        setLoading(false);
      }, 500);
    };

    fetchOfferDetails();

    // Add scroll listener for header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [destination, id]);

  const handleBookNow = () => {
    setShowBookingPopup(true);
  };

  const handleDirectBooking = () => {
    if (offerDetails?.bookingLink) {
      window.open(offerDetails.bookingLink, '_blank');
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    const heartBtn = document.querySelector('.heart-btn');
    if (heartBtn) {
      heartBtn.classList.add('animate-ping-once');
      setTimeout(() => {
        heartBtn.classList.remove('animate-ping-once');
      }, 300);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: offerDetails?.title || '',
          text: offerDetails?.description || '',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up z-50';
      toast.textContent = 'Link copied to clipboard!';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('animate-fade-out');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }
  };

  const nextImage = () => {
    if (offerDetails?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === offerDetails.gallery.length - 1 ? 0 : prev + 1
      );
      setSelectedImage(offerDetails.gallery[currentImageIndex === offerDetails.gallery.length - 1 ? 0 : currentImageIndex + 1]);
    }
  };

  const prevImage = () => {
    if (offerDetails?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? offerDetails.gallery.length - 1 : prev - 1
      );
      setSelectedImage(offerDetails.gallery[currentImageIndex === 0 ? offerDetails.gallery.length - 1 : currentImageIndex - 1]);
    }
  };

  const getDestinationName = (dest) => {
    const names = {
      'saudi-arabia': 'Saudi Arabia',
      'hongkong': 'Hong Kong',
      'western-america': 'Western America'
    };
    return names[dest] || 'Destination';
  };

  const getDestinationIcon = (dest) => {
    const icons = {
      'saudi-arabia': '🕌',
      'hongkong': '🏙️',
      'western-america': '🗽'
    };
    return icons[dest] || '📍';
  };

  const getRecommendedOffers = () => {
    if (!destination) return [];
    const destOffers = allOffers[destination] || [];
    return destOffers.filter(o => o.id !== parseInt(id)).slice(0, 3);
  };

  // Booking Form Functions
  const handleBookingInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (bookingErrors[name]) {
      setBookingErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateBookingForm = () => {
    const errors = {};
    
    if (!bookingFormData.fullName.trim()) errors.fullName = 'Full name is required';
    
    if (!bookingFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingFormData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!bookingFormData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(bookingFormData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone number must be 10 digits';
    }
    
    if (!bookingFormData.travelDate) errors.travelDate = 'Travel date is required';
    
    if (!bookingFormData.agreeTerms) errors.agreeTerms = 'You must agree to the terms and conditions';
    
    setBookingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    if (!validateBookingForm()) return;
    
    setIsSubmittingBooking(true);
    
    // Generate booking reference
    const ref = `BOOK-${Date.now().toString().slice(-8)}`;
    setBookingReference(ref);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmittingBooking(false);
      setBookingSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setShowBookingPopup(false);
        setBookingSuccess(false);
        setBookingFormData({
          fullName: '',
          email: '',
          phone: '',
          travelDate: '',
          travelers: '1',
          packageType: 'standard',
          specialRequests: '',
          agreeTerms: false
        });
        setBookingReference('');
      }, 5000);
    }, 2000);
  };

  const calculateTotalPrice = () => {
    const basePrice = parseInt(offerDetails?.price.replace('$', '') || '0');
    const travelers = parseInt(bookingFormData.travelers) || 1;
    return basePrice * travelers;
  };

  if (loading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${destinationData[destination]?.theme?.bg || 'from-sand-50 to-amber-50'} flex items-center justify-center animate-fade-in`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-700 font-semibold animate-pulse">Loading offer details...</p>
          <p className="text-gray-500 text-sm mt-2">Discovering the best of {getDestinationName(destination)}</p>
        </div>
      </div>
    );
  }

  if (!offerDetails) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${destinationData[destination]?.theme?.bg || 'from-sand-50 to-amber-50'} flex items-center justify-center animate-fade-in`}>
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl animate-fade-in-up">
          <div className="text-red-500 text-4xl mb-4 animate-bounce">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Offer Not Found</h3>
          <p className="text-gray-600 mb-4">The requested offer could not be found.</p>
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentDestination = destinationData[destination] || destinationData['saudi-arabia'];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentDestination.theme.bg} animate-fade-in`}>
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : `bg-gradient-to-r ${currentDestination.theme.primary}`
      } ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className={`flex items-center transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-amber-300'}`}
            >
              <FaArrowLeft className="mr-2" />
              <span className="hidden sm:inline">Back to Offers</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className={`flex items-center px-3 py-1.5 rounded-full ${isScrolled ? 'bg-green-100 text-green-800' : 'bg-white/20 backdrop-blur-sm'}`}>
                <span className="mr-1 sm:mr-2 text-lg">{getDestinationIcon(destination)}</span>
                <span className="font-medium text-sm sm:text-base">{getDestinationName(destination)}</span>
              </div>
              <button 
                onClick={handleSave}
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 heart-btn ${
                  isScrolled 
                    ? isSaved ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600 hover:text-red-500'
                    : isSaved ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <FaHeart className={isSaved ? 'fill-current' : ''} />
              </button>
              <button 
                onClick={handleShare}
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-600 hover:text-green-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <FaShareAlt />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Popup Modal */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Book Now: {offerDetails.title}
                </h3>
                <p className="text-gray-600 text-sm">Complete your booking in a few simple steps</p>
              </div>
              <button
                onClick={() => {
                  setShowBookingPopup(false);
                  setBookingSuccess(false);
                  setBookingFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    travelDate: '',
                    travelers: '1',
                    packageType: 'standard',
                    specialRequests: '',
                    agreeTerms: false
                  });
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaTimes className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking {offerDetails.title}. Your booking reference number is:
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Booking Reference:</div>
                      <div className="text-2xl font-bold text-gray-900 tracking-wider">{bookingReference}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    A confirmation email has been sent to {bookingFormData.email}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setShowBookingPopup(false)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Package Summary */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800">Package Summary</h4>
                        <p className="text-sm text-gray-600">{offerDetails.title}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{offerDetails.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      <span>{offerDetails.duration}</span>
                      <span className="mx-2">•</span>
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{offerDetails.location}</span>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={bookingFormData.fullName}
                        onChange={handleBookingInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${bookingErrors.fullName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter your full name"
                      />
                      {bookingErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{bookingErrors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingFormData.email}
                          onChange={handleBookingInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${bookingErrors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="your.email@example.com"
                        />
                        {bookingErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{bookingErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaPhone className="inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingFormData.phone}
                          onChange={handleBookingInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${bookingErrors.phone ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="+1 234 567 8900"
                        />
                        {bookingErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{bookingErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaCalendarAlt className="inline mr-2" />
                          Travel Date *
                        </label>
                        <input
                          type="date"
                          name="travelDate"
                          value={bookingFormData.travelDate}
                          onChange={handleBookingInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${bookingErrors.travelDate ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {bookingErrors.travelDate && (
                          <p className="text-red-500 text-sm mt-1">{bookingErrors.travelDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaUsers className="inline mr-2" />
                          Number of Travelers
                        </label>
                        <select
                          name="travelers"
                          value={bookingFormData.travelers}
                          onChange={handleBookingInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Traveler' : 'Travelers'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingFormData.specialRequests}
                        onChange={handleBookingInputChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Any dietary restrictions, accessibility needs, or special arrangements?"
                      ></textarea>
                    </div>

                    {/* Price Summary */}
                    <div className="bg-gray-50 rounded-xl p-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Price per person:</span>
                        <span className="font-semibold">{offerDetails.price}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Travelers:</span>
                        <span className="font-semibold">{bookingFormData.travelers}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <span className="text-lg font-bold text-gray-900">Total Amount:</span>
                        <span className="text-2xl font-bold text-gray-900">${calculateTotalPrice()}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={bookingFormData.agreeTerms}
                          onChange={handleBookingInputChange}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          I agree to the terms and conditions, cancellation policy, and privacy policy. 
                          I understand that this booking is subject to availability and confirmation.
                        </span>
                      </label>
                      {bookingErrors.agreeTerms && (
                        <p className="text-red-500 text-sm mt-2 ml-8">{bookingErrors.agreeTerms}</p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        type="submit"
                        disabled={isSubmittingBooking}
                        className={`w-full bg-gradient-to-r ${currentDestination.theme.primary} text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmittingBooking ? (
                          <>
                            <FaSpinner className="animate-spin mr-2" />
                            Processing Booking...
                          </>
                        ) : (
                          <>
                            <FaCheck className="mr-2" />
                            Confirm Booking - ${calculateTotalPrice()}
                          </>
                        )}
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-3">
                        By clicking "Confirm Booking", you agree to our terms and conditions
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-3 sm:px-4 py-8 pt-16 sm:pt-20">
        {/* Breadcrumb - Mobile optimized */}
        <div className="mb-6 sm:mb-8">
          <nav className="text-gray-600 text-sm sm:text-base">
            <ol className="flex items-center space-x-1 sm:space-x-2 flex-wrap overflow-x-auto pb-1">
              <li><button onClick={() => navigate('/')} className="hover:text-green-700 transition-colors whitespace-nowrap">Home</button></li>
              <li className="text-gray-400">/</li>
              <li><button onClick={() => navigate(`/${destination}`)} className="hover:text-green-700 transition-colors whitespace-nowrap">{getDestinationName(destination)}</button></li>
              <li className="text-gray-400">/</li>
              <li><button className="hover:text-green-700 transition-colors whitespace-nowrap">{offerDetails.category}</button></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-semibold truncate max-w-[150px] sm:max-w-none">{offerDetails.title}</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Image Gallery - Responsive */}
            <div className="animate-fade-in-up">
              <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4 group">
                <img 
                  src={selectedImage} 
                  alt={offerDetails.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r ${currentDestination.theme.secondary} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg text-sm sm:text-base animate-pulse-once`}>
                  {offerDetails.discount} OFF
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800">
                  {offerDetails.category}
                </div>
                
                {/* Image Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {offerDetails.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentImageIndex(index);
                    }}
                    className={`h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                      selectedImage === img 
                        ? 'ring-2 sm:ring-4 ring-green-500 scale-105' 
                        : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">{offerDetails.title}</h1>
                  <div className="flex items-center flex-wrap gap-2 sm:gap-0">
                    <div className="flex items-center mr-4">
                      <FaMapMarkerAlt className="text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm sm:text-base">{offerDetails.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{offerDetails.rating}</span>
                      <span className="text-gray-500 ml-1 sm:ml-2 text-sm">({offerDetails.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{offerDetails.description}</p>

              {/* Highlights */}
              {offerDetails.highlights && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Experience Highlights</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {offerDetails.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Duration</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md">
                  <div className="text-2xl sm:text-3xl font-bold text-green-800">{offerDetails.duration}</div>
                  <div className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Perfect for exploring {getDestinationName(destination)}</div>
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="animate-slide-in-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">What's Included</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {offerDetails.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="animate-slide-in-right">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">What's Not Included</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {offerDetails.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <FaTimes className="text-red-500 mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hotel Details (if available) */}
              {offerDetails.hotelDetails && (
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 animate-fade-in-up">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Accommodation Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2">{offerDetails.hotelDetails.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">{offerDetails.hotelDetails.address}</p>
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <div className="text-gray-500 text-xs sm:text-sm">Check-in</div>
                          <div className="font-semibold text-gray-800 text-sm sm:text-base">{offerDetails.hotelDetails.checkIn}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs sm:text-sm">Check-out</div>
                          <div className="font-semibold text-gray-800 text-sm sm:text-base">{offerDetails.hotelDetails.checkOut}</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">Amenities</div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {offerDetails.hotelDetails.amenities.map((amenity, index) => (
                          <span 
                            key={index}
                            className="bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-700 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Destination Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 animate-fade-in-up">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">About {getDestinationName(destination)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">Travel Tips</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {currentDestination.culturalTips.map((tip, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="text-green-500 mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                          <span className="text-gray-700 text-sm sm:text-base">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">Popular Attractions</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentDestination.popularAttractions.map((attraction, index) => (
                        <span 
                          key={index}
                          className="bg-white/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-white"
                        >
                          {attraction}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card (Sticky on desktop, fixed bottom on mobile) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 animate-fade-in-up">
                {/* Price Section */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{offerDetails.price}</span>
                    <span className="ml-3 sm:ml-4 text-xl sm:text-2xl text-gray-500 line-through">{offerDetails.originalPrice}</span>
                  </div>
                  <div className="text-base sm:text-lg text-green-600 font-bold mb-1 sm:mb-2">
                    Save ${parseInt(offerDetails.originalPrice.replace('$', '')) - parseInt(offerDetails.price.replace('$', ''))}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">Per person for {offerDetails.duration}</div>
                </div>

                {/* Validity */}
                <div className="mb-5 sm:mb-6 p-4 sm:p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-sm">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <FaCalendarAlt className="text-amber-600 mr-2 sm:mr-3" />
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Booking Period</span>
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base">{offerDetails.validity}</div>
                </div>

                {/* Terms */}
                <div className="mb-5 sm:mb-6">
                  <div className="flex items-start">
                    <FaTag className="text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{offerDetails.terms}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-5 sm:mb-6 p-4 sm:p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">{getDestinationName(destination)} Support</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center">
                      <FaPhone className="text-green-600 mr-2 sm:mr-3 text-sm" />
                      <span className="text-gray-700 text-sm sm:text-base">{currentDestination.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-green-600 mr-2 sm:mr-3 text-sm" />
                      <span className="text-gray-700 text-sm sm:text-base">{currentDestination.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="text-green-600 mr-2 sm:mr-3 text-sm" />
                      <span className="text-gray-700 text-sm sm:text-base">{currentDestination.contact.support}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={handleBookNow}
                    className={`w-full bg-gradient-to-r ${currentDestination.theme.primary} text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] active:scale-95`}
                  >
                    <span className="mr-2">Book Now</span>
                    <FaCheck />
                  </button>
                  
                  <button
                    onClick={handleDirectBooking}
                    className="w-full border-2 border-blue-500 text-blue-600 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center"
                  >
                    <HiExternalLink className="mr-2" />
                    Book on Website
                  </button>
                  
                  <button className="w-full border-2 border-amber-500 text-amber-600 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                    Add to Itinerary
                  </button>
                </div>

                {/* Safety Info */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                    <span className="mr-1 sm:mr-2">✅</span>
                    <span>Verified property • Free cancellation • Secure payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mt-12 sm:mt-16 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">More {getDestinationName(destination)} Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {getRecommendedOffers().map((rec, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/detail/${destination}/${rec.id}`)}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden group">
                  <img 
                    src={rec.image} 
                    alt={rec.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{rec.category}</div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">{rec.title}</h3>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <FaStar className="text-yellow-400 mr-1 text-xs sm:text-sm" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">{rec.rating}</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 text-xs sm:text-sm">({rec.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">{rec.price}</span>
                    <span className="text-green-700 font-semibold text-xs sm:text-sm flex items-center group">
                      View Details 
                      <FaChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Book Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How to Book Your {getDestinationName(destination)} Trip</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: 1, title: "Select Package", desc: "Choose your preferred offer and dates" },
              { step: 2, title: "Customize", desc: "Add optional tours or upgrade your stay" },
              { step: 3, title: "Secure Payment", desc: "Pay securely with multiple options" },
              { step: 4, title: "Travel Documents", desc: "Receive e-tickets and confirmation" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 sm:mt-16 animate-fade-in-up">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-2xl mr-2">{getDestinationIcon(destination)}</span>
              <h3 className="text-lg sm:text-xl font-bold">{getDestinationName(destination)} Travel Specialists</h3>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Official travel partner for {getDestinationName(destination)} • Best price guarantee
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              All prices are in USD. Terms and conditions apply. © 2024 Finvoy-Gobal.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={handleBookNow}
          className={`bg-gradient-to-r ${currentDestination.theme.primary} text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-once`}
        >
          <FaCheck className="text-xl" />
        </button>
      </div>

      {/* Add custom CSS for animations */}
      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pingOnce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulseOnce {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-ping-once {
          animation: pingOnce 0.3s ease-in-out;
        }
        
        .animate-bounce-once {
          animation: bounceOnce 0.5s ease-in-out;
        }
        
        .animate-pulse-once {
          animation: pulseOnce 2s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
        <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-22 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 z-40 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default DetailCard;