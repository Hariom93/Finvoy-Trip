import React, { useState, useEffect } from 'react';

const Destinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Delhi destinations data
  const destinations = [
    {
      id: 1,
      name: 'India Gate',
      category: 'monument',
      description: 'A war memorial dedicated to Indian soldiers who died in World War I',
      image: 'https://images.unsplash.com/photo-1594736797933-d0d64d1fe48a?w=500',
      rating: 4.8,
      visitTime: '1-2 hours'
    },
    {
      id: 2,
      name: 'Red Fort',
      category: 'historical',
      description: 'A historic fort that served as the main residence of Mughal Emperors',
      image: 'https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?w-500',
      rating: 4.7,
      visitTime: '2-3 hours'
    },
    {
      id: 3,
      name: 'Qutub Minar',
      category: 'monument',
      description: 'The tallest brick minaret in the world, built in 1193',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500',
      rating: 4.6,
      visitTime: '1-2 hours'
    },
    {
      id: 4,
      name: 'Lotus Temple',
      category: 'spiritual',
      description: 'A Baháʼí House of Worship notable for its flowerlike shape',
      image: 'https://images.unsplash.com/photo-1529107386315-e1c2d26d0d4d?w=500',
      rating: 4.5,
      visitTime: '1 hour'
    },
    {
      id: 5,
      name: 'Humayun\'s Tomb',
      category: 'historical',
      description: 'The tomb of Mughal Emperor Humayun, a UNESCO World Heritage Site',
      image: 'https://images.unsplash.com/photo-1524307875964-4c93d5b9c8f9?w=500',
      rating: 4.6,
      visitTime: '1-2 hours'
    },
    {
      id: 6,
      name: 'Akshardham Temple',
      category: 'spiritual',
      description: 'A Hindu temple complex known for its stunning architecture',
      image: 'https://images.unsplash.com/photo-1595599512947-92c571860ca8?w=500',
      rating: 4.8,
      visitTime: '3-4 hours'
    },
    {
      id: 7,
      name: 'Chandni Chowk',
      category: 'market',
      description: 'One of the oldest and busiest markets in Old Delhi',
      image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?w=500',
      rating: 4.4,
      visitTime: '2-3 hours'
    },
    {
      id: 8,
      name: 'Connaught Place',
      category: 'market',
      description: 'A financial and business hub with Georgian-style architecture',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
      rating: 4.3,
      visitTime: '2-3 hours'
    },
    {
      id: 9,
      name: 'Lodhi Garden',
      category: 'park',
      description: 'A city park featuring tombs of Sayyid and Lodhi rulers',
      image: 'https://images.unsplash.com/photo-1575372661367-12f13d8c8b4e?w=500',
      rating: 4.5,
      visitTime: '1-2 hours'
    },
    {
      id: 10,
      name: 'Jama Masjid',
      category: 'historical',
      description: 'One of the largest mosques in India, built by Shah Jahan',
      image: 'https://images.unsplash.com/photo-1553268618-4a5d6f495472?w=500',
      rating: 4.6,
      visitTime: '1 hour'
    },
    {
      id: 11,
      name: 'National Museum',
      category: 'museum',
      description: 'One of the largest museums in India with historical artifacts',
      image: 'https://images.unsplash.com/photo-1580502304780-2fbab3b16d4e?w=500',
      rating: 4.4,
      visitTime: '2-3 hours'
    },
    {
      id: 12,
      name: 'Raj Ghat',
      category: 'memorial',
      description: 'A memorial dedicated to Mahatma Gandhi',
      image: 'https://images.unsplash.com/photo-1616587894286-25f69b2c17e5?w=500',
      rating: 4.3,
      visitTime: '1 hour'
    }
  ];

  // Filter destinations based on active category
  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8">
      <div className="relative">
        {/* Spinning circle animation */}
        <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Delhi text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-2xl font-bold text-orange-600">Delhi</span>
        </div>
      </div>
      
      {/* Loading text with dots animation */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-700">Exploring Delhi's Treasures</h3>
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
      
      {/* Loading progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-loading-bar"></div>
      </div>
    </div>
  );

  // Destination card component
  const DestinationCard = ({ destination }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-800">{destination.rating} ★</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">
            <svg className="inline-block w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {destination.visitTime}
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4 md:p-8">
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover <span className="text-orange-600">Delhi</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the rich history, vibrant culture, and iconic landmarks of India's capital city
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            {/* Category Filter */}
            <div className="mb-10 md:mb-14">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Filter by Category</h2>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['all', 'monument', 'historical', 'spiritual', 'market', 'park', 'museum', 'memorial'].map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category 
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700 shadow-md'
                    }`}
                  >
                    {category === 'all' ? 'All Places' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="mb-8">
              <p className="text-lg text-gray-700">
                Showing <span className="font-bold text-orange-600">{filteredDestinations.length}</span> places in Delhi
                {activeCategory !== 'all' && (
                  <span> in category <span className="font-bold capitalize">{activeCategory}</span></span>
                )}
              </p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            {/* Empty state */}
            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No destinations found</h3>
                <p className="text-gray-600">Try selecting a different category to see more places in Delhi.</p>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="mt-12 md:mt-16 text-center text-gray-600">
        <p className="mb-4">Explore the heart of India through its capital city's iconic landmarks</p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <span className="flex items-center">
            <svg className="w-5 h-5 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Historical Sites
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Cultural Heritage
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Modern Attractions
          </span>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Destinations;