// pages/DestinationDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from "../../components/backbutton";

import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  Plane,
  Hotel,
  UtensilsCrossed,
  Shield,
  Check,
  X,
  Heart,
  Share2,
  Clock,
  Tag,
  Globe,
  Phone,
  Mail,
  User,
  Phone as PhoneIcon,
  ChevronRight,
  ChevronLeft,
  Send,
  MessageCircle,
  CheckCircle,
  Paperclip,
  Loader2,
  BookOpen,
} from "lucide-react";

// InquiryForm Component remains exactly the same as your code
const InquiryForm = ({ offerTitle, destination, onClose }) => {
  // ... (Keep all your InquiryForm code exactly as it is)
  // I'll show a shortened version below to save space, but keep your original

  return (
    <div className="animate-fade-in">
      {/* Your existing InquiryForm JSX */}
    </div>
  );
};

// Main DestinationDetail Component
const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookNowPopup, setShowBookNowPopup] = useState(false);

  // COMPLETE DESTINATIONS DATA - All 8 destinations
  const destinationsData = [
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      country: 'United Arab Emirates',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&auto=format&fit=crop',
      rating: 4.8,
      reviews: 1245,
      description: 'Modern marvel with cultural heritage',
      longDescription: 'Abu Dhabi, the capital of the United Arab Emirates, sits off the mainland on an island in the Persian (Arabian) Gulf. Its focus on oil exports and commerce is reflected by the skyline\'s modern towers and shopping megacenters such as Abu Dhabi and Marina malls.',
      price: '₹35,999',
      originalPrice: '₹42,999',
      discount: '16% OFF',
      duration: '5D/4N',
      category: ['city', 'luxury'],
      season: 'winter',
      highlights: ['Sheikh Zayed Mosque', 'Ferrari World', 'Desert Safari'],
      tags: ['Family', 'Luxury', 'Cultural'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹35,999',
          features: ['Return flights', '4-star hotel', 'Daily breakfast', 'City tour']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹49,999',
          features: ['Return flights', '5-star hotel', 'All meals', 'Desert safari', 'Theme park tickets']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹65,999',
          features: ['Business class flights', 'Luxury resort', 'Private tours', 'Personal guide', 'All activities included']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival & City Orientation', description: 'Arrive at Abu Dhabi International Airport, transfer to hotel, evening city tour' },
        { day: 2, title: 'Cultural Exploration', description: 'Visit Sheikh Zayed Grand Mosque, Heritage Village, and Emirates Palace' },
        { day: 3, title: 'Adventure Day', description: 'Desert safari with dune bashing, camel ride, and traditional dinner' },
        { day: 4, title: 'Modern Attractions', description: 'Ferrari World and Yas Marina Circuit experience' },
        { day: 5, title: 'Departure', description: 'Last minute shopping at malls, transfer to airport' }
      ],
      inclusions: [
        'Return economy class flights',
        '4 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Sightseeing as per itinerary',
        'All applicable taxes'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees',
        'Personal expenses',
        'Meals not mentioned',
        'Optional activities'
      ],
      bestTime: 'November to March',
      visa: 'Required for Indian passport holders',
      inquiryTheme: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
      rating: 4.9,
      reviews: 2567,
      description: 'Tropical paradise with overwater villas',
      longDescription: 'The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It\'s known for its beaches, blue lagoons and extensive reefs.',
      price: '₹89,999',
      originalPrice: '₹1,05,999',
      discount: '15% OFF',
      duration: '7D/6N',
      category: ['beach', 'luxury'],
      season: 'summer',
      highlights: ['Overwater Bungalows', 'Snorkeling', 'Sunset Cruises'],
      tags: ['Honeymoon', 'Luxury', 'Romantic'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹89,999',
          features: ['Return flights', 'Water villa', 'Daily breakfast', 'Island transfers']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹1,25,999',
          features: ['Return flights', 'Luxury water villa', 'All meals', 'Spa sessions', 'Water activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Paradise', description: 'Arrive at Male International Airport, speedboat transfer to resort, check-in and relax' },
        { day: 2, title: 'Island Exploration', description: 'Snorkeling, beach relaxation, sunset cruise' },
        { day: 3, title: 'Water Activities', description: 'Scuba diving, dolphin watching, water sports' },
        { day: 4, title: 'Spa & Relaxation', description: 'Spa treatments, private beach dinner' },
        { day: 5, title: 'Local Island Visit', description: 'Visit local island, cultural experience, shopping' },
        { day: 6, title: 'Free Day', description: 'Enjoy resort amenities at your leisure' },
        { day: 7, title: 'Departure', description: 'Last morning at the beach, transfer to airport' }
      ],
      inclusions: [
        'Return economy class flights',
        '6 nights accommodation in water villa',
        'Daily breakfast',
        'Airport and speedboat transfers',
        'Complimentary snorkeling gear'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional excursions'
      ],
      bestTime: 'November to April',
      visa: 'On arrival for Indian passport holders',
      inquiryTheme: 'from-teal-600 to-emerald-700'
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps',
      country: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop',
      rating: 4.7,
      reviews: 1876,
      description: 'Majestic mountains and alpine beauty',
      longDescription: 'Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern\'s Zytglogge clock tower and Lucerne\'s wooden chapel bridge.',
      price: '₹1,25,999',
      originalPrice: '₹1,45,999',
      discount: '14% OFF',
      duration: '8D/7N',
      category: ['mountain', 'adventure'],
      season: 'winter',
      highlights: ['Jungfraujoch', 'Lake Geneva', 'Matterhorn'],
      tags: ['Adventure', 'Family', 'Scenic'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹1,25,999',
          features: ['Return flights', '3-star hotel', 'Daily breakfast', 'Swiss Travel Pass']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹1,65,999',
          features: ['Return flights', '4-star hotel', 'All meals', 'Jungfraujoch excursion', 'Lake cruise']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹2,25,999',
          features: ['Business class flights', '5-star hotel', 'Private tours', 'Spa access', 'All excursions']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Zurich', description: 'Arrive at Zurich Airport, transfer to hotel, explore Old Town' },
        { day: 2, title: 'Lucerne & Mount Pilatus', description: 'Visit Chapel Bridge, Lion Monument, cable car to Mount Pilatus' },
        { day: 3, title: 'Interlaken & Jungfraujoch', description: 'Train to Interlaken, Jungfraujoch - Top of Europe' },
        { day: 4, title: 'Grindelwald Adventure', description: 'First Cliff Walk, mountain cable cars, alpine views' },
        { day: 5, title: 'Lake Geneva Region', description: 'Travel to Montreux, Chillon Castle, lakeside promenade' },
        { day: 6, title: 'Zermatt & Matterhorn', description: 'Train to Zermatt, Matterhorn views, Gornergrat Railway' },
        { day: 7, title: 'Bernese Oberland', description: 'Lauterbrunnen valley, Trümmelbach Falls, free exploration' },
        { day: 8, title: 'Departure', description: 'Last minute Swiss chocolate shopping, transfer to airport' }
      ],
      inclusions: [
        'Return economy class flights',
        '7 nights accommodation',
        'Daily breakfast',
        'Swiss Travel Pass for 8 days',
        'Airport transfers',
        'Jungfraujoch excursion'
      ],
      exclusions: [
        'Travel insurance',
        'Schengen visa fees',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional winter sports'
      ],
      bestTime: 'June to September for summer, December to March for skiing',
      visa: 'Schengen visa required',
      inquiryTheme: 'from-sky-600 to-blue-700'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&auto=format&fit=crop',
      rating: 4.6,
      reviews: 3124,
      description: 'Island of Gods with rich culture',
      longDescription: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands.',
      price: '₹28,999',
      originalPrice: '₹34,999',
      discount: '17% OFF',
      duration: '6D/5N',
      category: ['beach', 'cultural'],
      season: 'summer',
      highlights: ['Ubud Temples', 'Rice Terraces', 'Beach Clubs'],
      tags: ['Budget', 'Cultural', 'Nature'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹28,999',
          features: ['Return flights', '3-star hotel', 'Daily breakfast', 'Half-day Ubud tour']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹39,999',
          features: ['Return flights', '4-star resort', 'All meals', 'Full-day island tour', 'Spa treatment']
        },
        {
          id: 3,
          name: 'Luxury Villa Package',
          price: '₹55,999',
          features: ['Return flights', 'Private villa with pool', 'All meals', 'Private driver', 'All activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Bali', description: 'Arrive at Ngurah Rai Airport, transfer to hotel, Kuta beach sunset' },
        { day: 2, title: 'Ubud Cultural Tour', description: 'Visit Ubud Monkey Forest, Tegalalang Rice Terraces, Ubud Palace' },
        { day: 3, title: 'Temple & Waterfall', description: 'Besakih Temple, Tegenungan Waterfall, traditional dance performance' },
        { day: 4, title: 'Nusa Penida Day Trip', description: 'Speedboat to Nusa Penida, Kelingking Beach, Angel\'s Billabong' },
        { day: 5, title: 'Beach Day & Sunset', description: 'Jimbaran Bay seafood dinner, Uluwatu Temple sunset, Kecak dance' },
        { day: 6, title: 'Departure', description: 'Last minute souvenir shopping, traditional Balinese massage, airport transfer' }
      ],
      inclusions: [
        'Return economy class flights',
        '5 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Half-day Ubud tour',
        'All entrance fees as per itinerary'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees (free for up to 30 days)',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional water sports'
      ],
      bestTime: 'April to October',
      visa: 'Free visa on arrival for 30 days',
      inquiryTheme: 'from-green-600 to-emerald-700'
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
      rating: 4.5,
      reviews: 2890,
      description: 'City of love and lights',
      longDescription: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.',
      price: '₹68,999',
      originalPrice: '₹79,999',
      discount: '14% OFF',
      duration: '6D/5N',
      category: ['city', 'cultural'],
      season: 'spring',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
      tags: ['Romantic', 'Cultural', 'Luxury'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹68,999',
          features: ['Return flights', '3-star hotel', 'Daily breakfast', 'Eiffel Tower tickets']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹89,999',
          features: ['Return flights', '4-star hotel', 'All meals', 'Louvre Museum entry', 'Seine cruise']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹1,25,999',
          features: ['Business class flights', '5-star hotel', 'Private tours', 'Versailles Palace', 'Gourmet dinners']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Paris', description: 'Arrive at Charles de Gaulle Airport, transfer to hotel, Montmartre exploration' },
        { day: 2, title: 'Classic Paris Tour', description: 'Eiffel Tower, Champs-Élysées, Arc de Triomphe, evening Seine cruise' },
        { day: 3, title: 'Art & Culture Day', description: 'Louvre Museum, Notre-Dame Cathedral, Latin Quarter walking tour' },
        { day: 4, title: 'Palace of Versailles', description: 'Day trip to Versailles Palace and gardens, Marie Antoinette\'s estate' },
        { day: 5, title: 'Montmartre & Shopping', description: 'Sacré-Cœur Basilica, artists square, shopping at Galeries Lafayette' },
        { day: 6, title: 'Departure', description: 'Last visit to local patisserie, airport transfer' }
      ],
      inclusions: [
        'Return economy class flights',
        '5 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Eiffel Tower summit tickets',
        'Seine River cruise',
        'Paris Museum Pass (2 days)'
      ],
      exclusions: [
        'Travel insurance',
        'Schengen visa fees',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional shows and performances'
      ],
      bestTime: 'April to June and September to November',
      visa: 'Schengen visa required',
      inquiryTheme: 'from-pink-600 to-rose-700'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop',
      rating: 4.7,
      reviews: 1987,
      description: 'Futuristic city in the desert',
      longDescription: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.',
      price: '₹45,999',
      originalPrice: '₹52,999',
      discount: '13% OFF',
      duration: '5D/4N',
      category: ['city', 'luxury'],
      season: 'winter',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall'],
      tags: ['Luxury', 'Family', 'Modern'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹45,999',
          features: ['Return flights', '4-star hotel', 'Daily breakfast', 'Desert safari']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹65,999',
          features: ['Return flights', '5-star hotel', 'All meals', 'Burj Khalifa tickets', 'Aquaventure tickets']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹95,999',
          features: ['Business class flights', 'Burj Al Arab stay', 'Private tours', 'Helicopter tour', 'All activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Dubai', description: 'Arrive at Dubai International Airport, transfer to hotel, Dhow cruise dinner' },
        { day: 2, title: 'Modern Dubai', description: 'Burj Khalifa observation deck, Dubai Mall, Dubai Fountain show' },
        { day: 3, title: 'Desert Adventure', description: 'Desert safari with dune bashing, camel riding, BBQ dinner, cultural show' },
        { day: 4, title: 'Palm & Marina', description: 'Palm Jumeirah monorail, Atlantis Aquaventure, Dubai Marina walk' },
        { day: 5, title: 'Departure', description: 'Last minute shopping at Gold Souk, airport transfer' }
      ],
      inclusions: [
        'Return economy class flights',
        '4 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Desert safari with dinner',
        'Burj Khalifa Level 124 tickets',
        'All taxes and service charges'
      ],
      exclusions: [
        'Travel insurance',
        'Visa fees',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional activities'
      ],
      bestTime: 'November to March',
      visa: 'Visa on arrival for Indian passport holders',
      inquiryTheme: 'from-amber-600 to-orange-700'
    },
    {
      id: 'goa',
      name: 'Goa',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop',
      rating: 4.4,
      reviews: 1876,
      description: 'Beach paradise with Portuguese heritage',
      longDescription: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and area\'s tropical spice plantations.',
      price: '₹18,999',
      originalPrice: '₹22,999',
      discount: '17% OFF',
      duration: '5D/4N',
      category: ['beach', 'cultural'],
      season: 'winter',
      highlights: ['Beaches', 'Portuguese Churches', 'Night Markets'],
      tags: ['Budget', 'Beach', 'Party'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹18,999',
          features: ['Return flights', '3-star hotel', 'Daily breakfast', 'North Goa tour']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹28,999',
          features: ['Return flights', '4-star resort', 'All meals', 'Water sports', 'Spice plantation tour']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹45,999',
          features: ['Business class flights', '5-star beach resort', 'All meals & drinks', 'Private cab', 'All activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Goa', description: 'Arrive at Goa Airport, transfer to hotel, evening at Calangute Beach' },
        { day: 2, title: 'North Goa Beaches', description: 'Baga Beach water sports, Anjuna Flea Market, Sunset at Chapora Fort' },
        { day: 3, title: 'Portuguese Heritage', description: 'Old Goa churches, Basilica of Bom Jesus, Se Cathedral, Fontainhas Latin Quarter' },
        { day: 4, title: 'South Goa Relaxation', description: 'Palolem Beach, butterfly beach, spice plantation tour, traditional Goan dinner' },
        { day: 5, title: 'Departure', description: 'Last beach relaxation, local market shopping, airport transfer' }
      ],
      inclusions: [
        'Return economy class flights',
        '4 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Half-day North Goa sightseeing',
        'Spice plantation visit',
        'All applicable taxes'
      ],
      exclusions: [
        'Travel insurance',
        'Personal expenses',
        'Meals not mentioned',
        'Water sports activities',
        'Nightclub entry fees'
      ],
      bestTime: 'November to February',
      visa: 'No visa required for Indian citizens',
      inquiryTheme: 'from-yellow-600 to-amber-700'
    },
    {
      id: 'thailand',
      name: 'Phuket',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e30bf7349d?w=800&auto=format&fit=crop',
      rating: 4.6,
      reviews: 2345,
      description: 'Tropical islands and vibrant nightlife',
      longDescription: 'Phuket, a rainforested, mountainous island in the Andaman Sea, has some of Thailand\'s most popular beaches, mainly situated along the clear waters of the western shore. The island is home to many high-end seaside resorts.',
      price: '₹32,999',
      originalPrice: '₹38,999',
      discount: '15% OFF',
      duration: '6D/5N',
      category: ['beach', 'adventure'],
      season: 'summer',
      highlights: ['Phi Phi Islands', 'James Bond Island', 'Nightlife'],
      tags: ['Adventure', 'Beach', 'Party'],
      packages: [
        {
          id: 1,
          name: 'Standard Package',
          price: '₹32,999',
          features: ['Return flights', '3-star hotel', 'Daily breakfast', 'Phi Phi Islands tour']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '₹49,999',
          features: ['Return flights', '4-star resort', 'All meals', 'James Bond Island tour', 'Spa treatment']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '₹75,999',
          features: ['Business class flights', '5-star beach villa', 'All meals & drinks', 'Private speedboat tours', 'All activities']
        }
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Phuket', description: 'Arrive at Phuket Airport, transfer to hotel, Patong Beach sunset' },
        { day: 2, title: 'Phi Phi Islands', description: 'Speedboat to Maya Bay, Monkey Beach, snorkeling at Phi Phi Leh' },
        { day: 3, title: 'Phang Nga Bay', description: 'James Bond Island canoeing, Hong Islands, floating Muslim village' },
        { day: 4, title: 'Island Exploration', description: 'Big Buddha, Wat Chalong Temple, Phuket Old Town, Bangla Road nightlife' },
        { day: 5, title: 'Free Day & Relaxation', description: 'Optional activities: elephant sanctuary, ATV riding, Thai cooking class' },
        { day: 6, title: 'Departure', description: 'Last minute souvenir shopping, traditional Thai massage, airport transfer' }
      ],
      inclusions: [
        'Return economy class flights',
        '5 nights accommodation',
        'Daily breakfast',
        'Airport transfers',
        'Phi Phi Islands tour with lunch',
        'All entrance fees for mentioned sights',
        'Travel insurance'
      ],
      exclusions: [
        'Visa fees (on arrival for Indian passport holders)',
        'Personal expenses',
        'Premium meals and drinks',
        'Optional tours and activities',
        'Nightlife expenses'
      ],
      bestTime: 'November to April',
      visa: 'Visa on arrival for Indian passport holders',
      inquiryTheme: 'from-red-600 to-orange-700'
    }
  ];

  // Effect to handle body scroll when popup is open
  useEffect(() => {
    if (showBookNowPopup || showInquiryForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showBookNowPopup, showInquiryForm]);

  useEffect(() => {
    // Find destination from the complete list
    const timer = setTimeout(() => {
      const foundDestination = destinationsData.find(dest => dest.id === id);
      setDestination(foundDestination);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBookNow = () => {
    setShowBookNowPopup(true);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowInquiryForm(true);
  };

  const handleClosePopup = () => {
    setShowBookNowPopup(false);
    setShowInquiryForm(false);
    setSelectedPackage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading destination details...</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Destination Not Found</h2>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/destinations')}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${(showBookNowPopup || showInquiryForm) ? 'overflow-hidden' : ''}`}>
      {/* Back Button */}
      <div className="container mx-auto px-4">
        <BackButton className='container mx-auto px-4 pt-6'/>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">{destination.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 mr-1" />
                <span className="text-xl font-bold">{destination.rating}</span>
                <span className="ml-1">({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-8 right-8 flex space-x-3">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-full backdrop-blur-sm ${isFavorite ? 'bg-red-500/20 text-red-500' : 'bg-white/20 text-white hover:bg-white/30'}`}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500' : ''}`} />
          </button>
          <button className="p-3 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Book Now Button */}
        <div className="absolute bottom-6 right-3">
          <button
            onClick={handleBookNow}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <BookOpen className="w-6 h-6" />
            <span>Book Now</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About {destination.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{destination.longDescription}</p>
              
              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
              <div className="space-y-6">
                {destination.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                        Day {day.day}
                      </div>
                      {index < destination.itinerary.length - 1 && (
                        <div className="w-1 h-full bg-teal-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages Section - Uncomment if needed */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.packages.map((pkg, index) => (
                  <div key={pkg.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-gray-900">{pkg.price}</div>
                      <div className="flex items-center mt-2 text-gray-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handlePackageSelect(pkg)}
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      Get Custom Quote
                    </button>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {destination.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <X className="w-6 h-6 text-red-500 mr-3" />
                  What's Not Included
                </h3>
                <ul className="space-y-3">
                  {destination.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Travel Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Travel Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Best Time to Visit</span>
                    <span className="font-bold text-gray-800">{destination.bestTime}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Visa Requirements</span>
                    <span className="font-bold text-gray-800">{destination.visa}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Flight Duration</span>
                    <span className="font-bold text-gray-800">3-4 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Currency</span>
                    <span className="font-bold text-gray-800">Local Currency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Popup Modal */}
      {showBookNowPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={handleClosePopup}
          />
          <div className="relative bg-white pb-5 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Book Now - {destination.name}
                </h3>
                <p className="text-gray-600 text-sm">Complete your booking inquiry</p>
              </div>
              <button
                onClick={handleClosePopup}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <InquiryForm 
                offerTitle={`${destination.name} - ${destination.country}`}
                destination={destination.id}
                onClose={handleClosePopup}
              />
            </div>
          </div>
        </div>
      )}

      {/* Package Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={handleClosePopup}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedPackage 
                    ? `Inquiry for ${selectedPackage.name} - ${destination.name}`
                    : `Custom Inquiry for ${destination.name}`
                  }
                </h3>
                <p className="text-gray-600 text-sm">Get personalized pricing and itinerary</p>
              </div>
              <button
                onClick={handleClosePopup}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <InquiryForm 
                offerTitle={`${destination.name} - ${destination.country}${selectedPackage ? ` (${selectedPackage.name})` : ''}`}
                destination={destination.id}
                onClose={handleClosePopup}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Inquiry Button (Mobile) */}
      <div className="lg:hidden fixed bottom-20 right-6 z-40">
        <button
          onClick={() => setShowInquiryForm(true)}
          className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default DestinationDetail;