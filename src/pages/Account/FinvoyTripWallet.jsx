// CleartripWallet.jsx
import React, { useState } from 'react';
import { Wallet, Smartphone, Gift, User, X, Plane, CreditCard, Award } from 'lucide-react';

const FinvoyTripWallet = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMobileBanner, setShowMobileBanner] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInstallApp = () => {
    alert('Redirecting to app store...');
  };

  const handleViewBreakup = () => {
    alert('Showing balance breakup...');
  };

  const faqs = [
    {
      id: 1,
      question: "What is Cleartrip Wallet?",
      answer: "Cleartrip Wallet is a secure digital wallet that stores your travel funds, rewards, and credits. You can use it to make faster bookings, manage refunds, and earn rewards on your transactions."
    },
    {
      id: 2,
      question: "How does balance get added to Cleartrip Wallet?",
      answer: "There are 2 types of balances which can get credited to your Cleartrip Wallet - Credit and Reward.",
      details: [
        {
          type: "Credit balance",
          description: "is the amount earned via cancellation refunds. Credit balance gets added to the Cleartrip Wallet when you choose to get Refunds via Cleartrip Wallet during cancellation, e.g., let be either Credit Balance shall be in the case of a loan or credit balance."
        },
        {
          type: "Reward balance",
          description: "is earned through promotions, referrals, and special offers. Reward balance has specific terms and validity periods."
        }
      ]
    }
  ];

  const transactionFilters = [
    { id: 'all', label: 'All' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'credit', label: 'Credit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Wallet className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Cleartrip Wallet</h1>
                <p className="text-teal-100 text-sm">Manage your travel funds</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-teal-500/20 px-3 py-1.5 rounded-full">
                <Smartphone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">APP ONLY</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full cursor-pointer hover:bg-white/20 transition">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-sm font-medium hidden md:inline">User Account</span>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center justify-center mt-3">
            <div className="flex items-center bg-teal-500/20 px-3 py-1.5 rounded-full">
              <Smartphone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">APP ONLY</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Wallet Balance Section */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Cleartrip Wallet balance</h2>
                <p className="text-gray-500 text-sm mt-1">View your available funds and rewards</p>
              </div>
              <button
                onClick={handleViewBreakup}
                className="bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200 font-medium px-4 py-2.5 rounded-lg transition-colors w-full md:w-auto"
              >
                View breakup
              </button>
            </div>
          </div>
          
          <div className="p-5">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-teal-600 mb-2">₹1,250.50</div>
              <p className="text-gray-500">Available balance</p>
            </div>
            
            {/* Reward Balance Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-500 text-white p-3 rounded-full">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800">Unlock Reward balance</h3>
                    <p className="text-amber-700 text-sm">Install app & save more!</p>
                  </div>
                </div>
                <button
                  onClick={handleInstallApp}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-3 rounded-lg transition-colors w-full md:w-auto flex items-center justify-center space-x-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Install App</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions History */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Transactions history</h2>
          </div>
          
          <div className="p-5">
            {/* Filter Tabs */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {transactionFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            {/* Empty State */}
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No transactions yet</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Your transaction history will appear here once you start using your Cleartrip Wallet.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">FAQs</h2>
          </div>
          
          <div className="p-5">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-6 last:mb-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <div className={`transform transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="mt-4 pl-2 border-l-2 border-teal-500">
                    <p className="text-gray-600 mb-4">{faq.answer}</p>
                    
                    {faq.details && (
                      <div className="space-y-4">
                        {faq.details.map((detail, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                              index === 0 ? 'bg-teal-100 text-teal-600' : 'bg-amber-100 text-amber-600'
                            }`}>
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 mb-1">{detail.type}</h4>
                              <p className="text-gray-600">{detail.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {faq.id < faqs.length && (
                  <hr className="my-6 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile App Banner */}
      {showMobileBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 shadow-lg md:hidden z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Get the App</p>
                <p className="text-teal-100 text-xs">Unlock exclusive rewards</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleInstallApp}
                className="bg-white text-teal-600 font-bold px-4 py-2 rounded-lg text-sm"
              >
                Install
              </button>
              <button
                onClick={() => setShowMobileBanner(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 py-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Cleartrip</span>
            </div>
            
            <div className="text-gray-600 text-sm text-center">
              <p>© 2025 Cleartrip Mobile Pvt. Ltd. All rights reserved.</p>
              <p className="mt-1 text-gray-500">Cleartrip Wallet is a digital wallet service</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinvoyTripWallet;