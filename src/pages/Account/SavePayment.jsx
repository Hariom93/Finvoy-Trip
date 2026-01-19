// SavedPaymentModes.jsx
import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  Wallet,
  Smartphone,
  Banknote,
  Shield,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  ChevronRight,
  AlertCircle,
  Lock,
  Wifi,
  Globe,
  QrCode,
  Loader,
  RefreshCw,
  X,
  Eye,
  EyeOff,
  MoreVertical
} from 'lucide-react';

const SavedPayment = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Mock payment data
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit',
      name: 'Visa',
      lastFour: '4321',
      expiry: '12/25',
      nameOnCard: 'John Doe',
      isDefault: true,
      brand: 'visa',
      color: 'from-blue-500 to-blue-700',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'debit',
      name: 'MasterCard',
      lastFour: '8765',
      expiry: '09/24',
      nameOnCard: 'John Doe',
      isDefault: false,
      brand: 'mastercard',
      color: 'from-red-500 to-red-700',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'wallet',
      name: 'FinvoyGlobal Wallet',
      balance: '₹2,450',
      isDefault: false,
      icon: <Wallet className="w-5 h-5" />,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 4,
      type: 'upi',
      name: 'UPI',
      upiId: 'johndoe@okicici',
      isDefault: false,
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      type: 'netbanking',
      name: 'HDFC Bank',
      accountType: 'Savings',
      isDefault: false,
      icon: <Banknote className="w-5 h-5" />,
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 6,
      type: 'credit',
      name: 'American Express',
      lastFour: '1234',
      expiry: '03/26',
      nameOnCard: 'John Doe',
      isDefault: false,
      brand: 'amex',
      color: 'from-green-500 to-green-700',
      icon: <CreditCard className="w-5 h-5" />
    }
  ]);

  const [newCard, setNewCard] = useState({
    name: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    nameOnCard: '',
    isDefault: false
  });

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddCard = (e) => {
    e.preventDefault();
    const newId = paymentMethods.length + 1;
    const newPaymentMethod = {
      id: newId,
      type: 'credit',
      name: newCard.name || 'Visa',
      lastFour: newCard.cardNumber.slice(-4),
      expiry: `${newCard.expiryMonth}/${newCard.expiryYear.slice(-2)}`,
      nameOnCard: newCard.nameOnCard,
      isDefault: newCard.isDefault,
      brand: 'visa',
      color: 'from-blue-500 to-blue-700',
      icon: <CreditCard className="w-5 h-5" />
    };

    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setNewCard({
      name: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      nameOnCard: '',
      isDefault: false
    });
    setShowAddForm(false);
  };

  const handleDeleteCard = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    setShowDeleteConfirm(null);
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };

  const filteredMethods = paymentMethods.filter(method => {
    if (activeTab === 'all') return true;
    if (activeTab === 'cards') return method.type === 'credit' || method.type === 'debit';
    if (activeTab === 'wallets') return method.type === 'wallet';
    if (activeTab === 'upi') return method.type === 'upi';
    if (activeTab === 'netbanking') return method.type === 'netbanking';
    return true;
  });

  const stats = {
    total: paymentMethods.length,
    cards: paymentMethods.filter(m => m.type === 'credit' || m.type === 'debit').length,
    wallets: paymentMethods.filter(m => m.type === 'wallet').length,
    upi: paymentMethods.filter(m => m.type === 'upi').length,
    netbanking: paymentMethods.filter(m => m.type === 'netbanking').length
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Saved Payment Modes</h1>
                <p className="text-gray-500 text-sm">Manage your payment methods securely</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                {viewMode === 'grid' ? 'List View' : 'Grid View'}
              </button>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-gray-500 text-sm">Total Methods</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{stats.cards}</div>
            <div className="text-gray-500 text-sm">Cards</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{stats.wallets}</div>
            <div className="text-gray-500 text-sm">Wallets</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{stats.upi}</div>
            <div className="text-gray-500 text-sm">UPI IDs</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-800">{stats.netbanking}</div>
            <div className="text-gray-500 text-sm">Net Banking</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
          {[
            { id: 'all', label: 'All Payment Methods', count: stats.total },
            { id: 'cards', label: 'Cards', count: stats.cards },
            { id: 'wallets', label: 'Wallets', count: stats.wallets },
            { id: 'upi', label: 'UPI', count: stats.upi },
            { id: 'netbanking', label: 'Net Banking', count: stats.netbanking }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-teal-500' : 'bg-gray-100'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Security Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-800">Your payments are secure</h3>
                <p className="text-gray-600 text-sm">All payment methods are encrypted and protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>256-bit SSL</span>
            </div>
          </div>
        </div>

        {/* Payment Methods Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredMethods.map(method => (
              <div 
                key={method.id} 
                className={`bg-white rounded-xl shadow-sm border-2 ${
                  method.isDefault ? 'border-teal-500' : 'border-gray-100'
                } overflow-hidden hover:shadow-md transition-all`}
              >
                <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}>
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{method.name}</h3>
                        {method.type === 'credit' || method.type === 'debit' ? (
                          <p className="text-gray-500 text-sm">**** **** **** {method.lastFour}</p>
                        ) : method.type === 'wallet' ? (
                          <p className="text-teal-600 font-medium text-sm">{method.balance} balance</p>
                        ) : method.type === 'upi' ? (
                          <p className="text-gray-500 text-sm">{method.upiId}</p>
                        ) : (
                          <p className="text-gray-500 text-sm">{method.accountType} Account</p>
                        )}
                      </div>
                    </div>
                    
                    {method.isDefault && (
                      <div className="flex items-center space-x-1 bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                        <CheckCircle className="w-3 h-3" />
                        <span>Default</span>
                      </div>
                    )}
                  </div>

                  {method.type === 'credit' || method.type === 'debit' ? (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Expires</span>
                        <span className="font-medium">{method.expiry}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Cardholder</span>
                        <span className="font-medium">{method.nameOnCard}</span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex space-x-2 pt-4 border-t border-gray-100">
                    {!method.isDefault && (
                      <button
                        onClick={() => handleSetDefault(method.id)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Set as Default
                      </button>
                    )}
                    <button
                      onClick={() => setShowDeleteConfirm(method.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-600">Payment Method</th>
                    <th className="text-left p-4 font-medium text-gray-600">Details</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                    <th className="text-left p-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMethods.map(method => (
                    <tr key={method.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}>
                            {method.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{method.name}</div>
                            <div className="text-sm text-gray-500">
                              {method.type === 'credit' ? 'Credit Card' : 
                               method.type === 'debit' ? 'Debit Card' :
                               method.type === 'wallet' ? 'Digital Wallet' :
                               method.type === 'upi' ? 'UPI' : 'Net Banking'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        {method.type === 'credit' || method.type === 'debit' ? (
                          <div>
                            <div className="text-gray-800">**** **** **** {method.lastFour}</div>
                            <div className="text-sm text-gray-500">Expires {method.expiry}</div>
                          </div>
                        ) : method.type === 'wallet' ? (
                          <div className="text-teal-600 font-medium">{method.balance} balance</div>
                        ) : method.type === 'upi' ? (
                          <div className="text-gray-800">{method.upiId}</div>
                        ) : (
                          <div className="text-gray-800">{method.accountType} Account</div>
                        )}
                      </td>
                      <td className="p-4">
                        {method.isDefault ? (
                          <div className="inline-flex items-center space-x-1 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                            <CheckCircle className="w-3 h-3" />
                            <span>Default</span>
                          </div>
                        ) : (
                          <span className="text-gray-500">Active</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          {!method.isDefault && (
                            <button
                              onClick={() => handleSetDefault(method.id)}
                              className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                            >
                              Set Default
                            </button>
                          )}
                          <button
                            onClick={() => setShowDeleteConfirm(method.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredMethods.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No payment methods found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              You haven't added any payment methods yet. Add one to get started.
            </p>
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Payment Method</span>
            </button>
          </div>
        )}

        {/* Add New Card Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Add New Card</h3>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <form onSubmit={handleAddCard}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        value={newCard.cardNumber}
                        onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Month
                        </label>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={newCard.expiryMonth}
                          onChange={(e) => setNewCard({...newCard, expiryMonth: e.target.value})}
                          required
                        >
                          <option value="">MM</option>
                          {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                            <option key={month} value={month.toString().padStart(2, '0')}>
                              {month.toString().padStart(2, '0')}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Year
                        </label>
                        <select
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={newCard.expiryYear}
                          onChange={(e) => setNewCard({...newCard, expiryYear: e.target.value})}
                          required
                        >
                          <option value="">YYYY</option>
                          {Array.from({length: 10}, (_, i) => new Date().getFullYear() + i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={newCard.cvv}
                          onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={newCard.nameOnCard}
                          onChange={(e) => setNewCard({...newCard, nameOnCard: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="defaultCard"
                        checked={newCard.isDefault}
                        onChange={(e) => setNewCard({...newCard, isDefault: e.target.checked})}
                        className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="defaultCard" className="text-gray-700">
                        Set as default payment method
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-8">
                    <button
                      type="submit"
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium"
                    >
                      Add Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Delete Payment Method?</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this payment method? This action cannot be undone.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleDeleteCard(showDeleteConfirm)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(null)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
              <h3 className="font-bold text-gray-800">Security First</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All your payment details are encrypted and stored securely. We never share your card details with merchants.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-teal-600" />
              <h3 className="font-bold text-gray-800">Easy Management</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Add, edit, or remove payment methods anytime. Set a default payment method for faster checkouts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-teal-600" />
              <h3 className="font-bold text-gray-800">Multiple Options</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Add cards, digital wallets, UPI IDs, and net banking accounts. Choose what works best for you.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Wallet className="w-6 h-6" />
              <span className="text-lg font-bold">FinvoyGlobal Payments</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center">
              <p>© 2025 FinvoyGlobal.com. All rights reserved.</p>
              <p className="mt-1">Your payment security is our priority</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Help Center</a>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center">
      <div className="relative">
        {/* Animated Card Stack */}
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-blue-200 to-teal-200 rounded-xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-8 bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CreditCard className="w-16 h-16 text-teal-600 animate-bounce" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Payment Methods</h2>
          <p className="text-gray-600 mb-8">Securely fetching your saved payment options...</p>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 animate-loadingBar"></div>
          </div>
          
          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-2 mt-8 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>256-bit SSL Encryption</span>
            <Shield className="w-4 h-4 ml-4" />
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPayment;