// HiFiveRewards.jsx
import React, { useState, useEffect } from 'react';
import {
  Star,
  Gift,
  Trophy,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Users,
  Calendar,
  Target,
  Share2,
  Zap,
  Crown,
  DollarSign,
  Loader,
  ExternalLink,
  Info,
  ArrowRight,
  Heart,
  Coffee,
  Plane,
  Hotel,
  Car
} from 'lucide-react';
import BackButton from "../../components/Backbutton"; 

const InviteCard = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedReward, setSelectedReward] = useState(null);
  const [userPoints, setUserPoints] = useState(1850);
  const [userTier, setUserTier] = useState('gold');
  const [showRedeemModal, setShowRedeemModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const rewards = [
    {
      id: 1,
      title: "50% Off on Next Flight",
      description: "Get 50% discount on your next flight booking",
      points: 2500,
      category: "flights",
      popular: true,
      icon: <Plane className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      expiry: "30 days",
      remaining: 12
    },
    {
      id: 2,
      title: "Free Hotel Upgrade",
      description: "Complimentary room upgrade on hotel bookings",
      points: 1500,
      category: "hotels",
      popular: false,
      icon: <Hotel className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      expiry: "60 days",
      remaining: 25
    },
    {
      id: 3,
      title: "₹500 Cashback",
      description: "Instant cashback on any booking",
      points: 1000,
      category: "cashback",
      popular: true,
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      expiry: "45 days",
      remaining: 8
    },
    {
      id: 4,
      title: "Free Car Rental Day",
      description: "One day free car rental",
      points: 1200,
      category: "car",
      popular: false,
      icon: <Car className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      expiry: "90 days",
      remaining: 15
    },
    {
      id: 5,
      title: "Priority Boarding",
      description: "Priority boarding on all flights",
      points: 800,
      category: "flights",
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      expiry: "365 days",
      remaining: 50
    },
    {
      id: 6,
      title: "Lounge Access",
      description: "Airport lounge access voucher",
      points: 2000,
      category: "luxury",
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      expiry: "30 days",
      remaining: 5
    },
    {
      id: 7,
      title: "Double Rewards Points",
      description: "Earn double points for 7 days",
      points: 1800,
      category: "multiplier",
      popular: true,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      expiry: "7 days",
      remaining: 20
    },
    {
      id: 8,
      title: "Coffee Shop Voucher",
      description: "Free coffee at airport cafes",
      points: 500,
      category: "food",
      popular: false,
      icon: <Coffee className="w-6 h-6" />,
      color: "from-brown-500 to-amber-900",
      bgColor: "bg-amber-50",
      expiry: "30 days",
      remaining: 100
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rewards', count: rewards.length },
    { id: 'flights', name: 'Flights', count: rewards.filter(r => r.category === 'flights').length },
    { id: 'hotels', name: 'Hotels', count: rewards.filter(r => r.category === 'hotels').length },
    { id: 'cashback', name: 'Cashback', count: rewards.filter(r => r.category === 'cashback').length },
    { id: 'luxury', name: 'Luxury', count: rewards.filter(r => r.category === 'luxury').length },
    { id: 'car', name: 'Car Rental', count: rewards.filter(r => r.category === 'car').length }
  ];

  const userStats = {
    tier: userTier,
    points: userPoints,
    nextTier: 2500,
    progress: (userPoints / 2500) * 100,
    streak: 45,
    rank: 1250
  };

  const tierColors = {
    bronze: 'from-amber-700 to-amber-900',
    silver: 'from-gray-400 to-gray-600',
    gold: 'from-yellow-500 to-amber-600',
    platinum: 'from-cyan-500 to-blue-600'
  };

  const filteredRewards = rewards.filter(reward => {
    if (activeTab === 'all') return true;
    return reward.category === activeTab;
  });

  const handleRedeem = (reward) => {
    setSelectedReward(reward);
    if (userPoints >= reward.points) {
      setShowRedeemModal(true);
    }
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <BackButton  className="mt-4" />
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Cleartrip <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">Hi-Five</span></h1>
                <p className="text-gray-500 text-sm">Your Rewards & Loyalty Program</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
                <span className="font-bold text-amber-800">{userStats.points.toLocaleString()} Points</span>
              </div>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
                <Gift className="w-4 h-4" />
                <span>My Rewards</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* User Stats Card */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl shadow-lg p-6 text-white mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Welcome Back!</h2>
                  <p className="text-amber-100">You're a {userStats.tier.charAt(0).toUpperCase() + userStats.tier.slice(1)} Member</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Your Points</span>
                    <span className="font-bold">{userStats.points.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(userStats.progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>{userStats.points} pts</span>
                    <span>{userStats.nextTier} pts for next tier</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{userStats.streak}</div>
                <div className="text-sm text-amber-100">Day Streak</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">#{userStats.rank}</div>
                <div className="text-sm text-amber-100">Global Rank</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">₹850</div>
                <div className="text-sm text-amber-100">Saved Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Earn Points</span>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
              <Gift className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Redeem Rewards</span>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Refer Friends</span>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Tier Benefits</span>
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap flex items-center space-x-2 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === category.id ? 'bg-amber-400/30' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredRewards.map(reward => (
            <div 
              key={reward.id} 
              className={`bg-white rounded-2xl shadow-lg border-2 ${reward.popular ? 'border-amber-200' : 'border-gray-100'} overflow-hidden hover:shadow-xl transition-all`}
            >
              {reward.popular && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-xs text-center font-medium">
                  ⭐ POPULAR
                </div>
              )}
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${reward.color} flex items-center justify-center text-white`}>
                    {reward.icon}
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded">
                    <span className="font-bold text-gray-800">{reward.points}</span>
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 text-lg mb-2">{reward.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Expires in</span>
                    <span className="font-medium">{reward.expiry}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Remaining</span>
                    <span className="font-medium">{reward.remaining} left</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={userPoints < reward.points}
                  className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center space-x-2 ${
                    userPoints >= reward.points
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {userPoints >= reward.points ? (
                    <>
                      <span>Redeem Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Need {reward.points - userPoints} more points</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How Hi-Five Rewards Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Earn Points",
                desc: "Book flights, hotels, or activities to earn Hi-Five points",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                step: 2,
                title: "Climb Tiers",
                desc: "Earn more points to reach higher tiers with better benefits",
                icon: <Trophy className="w-8 h-8" />
              },
              {
                step: 3,
                title: "Redeem Rewards",
                desc: "Use your points for discounts, upgrades, and exclusive offers",
                icon: <Gift className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tier Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tier Benefits</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-600">Tier</th>
                  <th className="text-left p-4 font-medium text-gray-600">Points Required</th>
                  <th className="text-left p-4 font-medium text-gray-600">Benefits</th>
                  <th className="text-left p-4 font-medium text-gray-600">Your Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tier: 'Bronze',
                    points: '0-999',
                    benefits: ['5% points bonus', 'Basic rewards access'],
                    current: userStats.tier === 'bronze',
                    color: 'from-amber-700 to-amber-900'
                  },
                  {
                    tier: 'Silver',
                    points: '1000-2499',
                    benefits: ['10% points bonus', 'Priority support', 'Exclusive deals'],
                    current: userStats.tier === 'silver',
                    color: 'from-gray-400 to-gray-600'
                  },
                  {
                    tier: 'Gold',
                    points: '2500-4999',
                    benefits: ['15% points bonus', 'Free cancellations', 'Lounge access', 'Room upgrades'],
                    current: userStats.tier === 'gold',
                    color: 'from-yellow-500 to-amber-600'
                  },
                  {
                    tier: 'Platinum',
                    points: '5000+',
                    benefits: ['20% points bonus', 'All Gold benefits', 'Personal travel assistant', 'VIP experiences'],
                    current: userStats.tier === 'platinum',
                    color: 'from-cyan-500 to-blue-600'
                  }
                ].map((tier, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                          <Crown className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{tier.tier}</div>
                          {tier.current && (
                            <div className="text-xs text-green-600 font-medium">Current Tier</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-800">{tier.points} points</div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        {tier.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      {tier.current ? (
                        <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1.5 rounded-full font-medium">
                          <CheckCircle className="w-4 h-4" />
                          <span>Achieved</span>
                        </div>
                      ) : userStats.tier === 'gold' && tier.tier === 'Platinum' ? (
                        <div className="text-sm text-gray-600">
                          Need {5000 - userStats.points} more points
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">Not achieved</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Referral Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Invite Friends, Earn Together</h2>
              <p className="text-purple-100 mb-6">
                Share your referral code and earn 500 points for each friend who joins Cleartrip Hi-Five
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                  <span className="font-mono">CTHF-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                  <button className="ml-4 p-1 hover:bg-white/20 rounded">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold">
                  Copy Link
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500</div>
              <div className="text-purple-100">Points Per Referral</div>
            </div>
          </div>
        </div>
      </main>

      {/* Redeem Modal */}
      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Confirm Redemption</h3>
                <button 
                  onClick={() => {
                    setShowRedeemModal(false);
                    setSelectedReward(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedReward.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {selectedReward.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{selectedReward.title}</h4>
                <p className="text-gray-600">{selectedReward.description}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700">Points Required</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-800">{selectedReward.points}</span>
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Your Balance</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-800">{userPoints}</span>
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setUserPoints(userPoints - selectedReward.points);
                    setShowRedeemModal(false);
                    setSelectedReward(null);
                    alert(`Successfully redeemed ${selectedReward.title}!`);
                  }}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-bold"
                >
                  Confirm Redemption
                </button>
                <button
                  onClick={() => {
                    setShowRedeemModal(false);
                    setSelectedReward(null);
                  }}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-2 rounded-lg">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Cleartrip Hi-Five</h3>
                <p className="text-gray-400 text-sm">Rewards that travel with you</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400">© 2025 Cleartrip Hi-Five Rewards Program</p>
              <p className="text-gray-500 text-sm mt-1">Terms & Conditions apply</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center">
      <div className="relative">
        {/* Animated Trophy with Stars */}
        <div className="relative w-40 h-40 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Main Trophy */}
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-20 h-20 text-white animate-bounce" />
                </div>
              </div>
              
              {/* Floating Stars */}
              <div className="absolute -top-2 -left-2 animate-pulse" style={{ animationDelay: '0.2s' }}>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-spin-slow" />
              </div>
              <div className="absolute -top-2 -right-2 animate-pulse" style={{ animationDelay: '0.4s' }}>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-spin-slow" style={{ animationDelay: '0.3s' }} />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-pulse" style={{ animationDelay: '0.6s' }}>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-spin-slow" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="absolute -bottom-2 -right-2 animate-pulse" style={{ animationDelay: '0.8s' }}>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-spin-slow" style={{ animationDelay: '0.9s' }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading Text with Progress */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Loading Hi-Five Rewards
          </h2>
          <p className="text-gray-600 mb-8">Preparing your exclusive travel rewards...</p>
          
          {/* Animated Progress Bar */}
          <div className="w-72 h-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full overflow-hidden mx-auto mb-4">
            <div className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 animate-loadingBar"></div>
          </div>
          
          {/* Loading Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 animate-pulse">...</div>
              <div className="text-sm text-gray-500">Points Loading</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 animate-pulse" style={{ animationDelay: '0.3s' }}>...</div>
              <div className="text-sm text-gray-500">Rewards Loading</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 animate-pulse" style={{ animationDelay: '0.6s' }}>...</div>
              <div className="text-sm text-gray-500">Benefits Loading</div>
            </div>
          </div>
          
          {/* Animated Sparkles */}
          <div className="flex justify-center space-x-2 mt-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <Sparkles 
                key={i}
                className="w-4 h-4 text-amber-500 animate-bounce" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;