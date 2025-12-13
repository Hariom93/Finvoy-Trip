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

const InquiryForm = ({ offerTitle, destination, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '1',
    packageType: 'standard',
    budget: '',
    message: '',
    countryCode: '+91',
    receiveUpdates: true,
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [referenceId, setReferenceId] = useState('');

  // Destination-specific data
  const destinationData = {
    'abu-dhabi': {
      theme: {
        primary: 'from-blue-600 to-indigo-700',
        secondary: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
        border: 'border-blue-200',
        label: 'text-blue-700'
      },
      contact: {
        phone: '+971 2 123 4567',
        email: 'uae@cleartrip.com',
        support: 'Arabic & English speaking agents',
        timezone: 'Gulf Standard Time (GMT+4)'
      },
      culturalTips: [
        'Dress modestly in public areas',
        'Friday is the holy day',
        'Avoid public displays of affection',
        'Respect local customs and traditions'
      ],
      popularAttractions: ['Sheikh Zayed Mosque', 'Ferrari World', 'Desert Safari', 'Yas Island', 'Louvre Abu Dhabi']
    },
    'maldives': {
      theme: {
        primary: 'from-teal-600 to-emerald-700',
        secondary: 'from-teal-500 to-emerald-600',
        bg: 'from-teal-50 to-emerald-50',
        border: 'border-teal-200',
        label: 'text-teal-700'
      },
      contact: {
        phone: '+960 123 4567',
        email: 'maldives@cleartrip.com',
        support: 'English & Dhivehi speaking agents',
        timezone: 'Maldives Time (GMT+5)'
      },
      culturalTips: [
        'Resort wear is acceptable in resorts',
        'No alcohol outside resorts',
        'Swimwear only on designated beaches',
        'Learn basic Dhivehi greetings'
      ],
      popularAttractions: ['Overwater Villas', 'Coral Reefs', 'Male City', 'Local Islands', 'Spa Retreats']
    }
  };

  const currentDestination = destinationData[destination] || destinationData['abu-dhabi'];

  const countryCodes = [
    { code: '+91', flag: '🇮🇳', country: 'India' },
    { code: '+1', flag: '🇺🇸', country: 'USA' },
    { code: '+971', flag: '🇦🇪', country: 'UAE' },
    { code: '+960', flag: '🇲🇻', country: 'Maldives' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+65', flag: '🇸🇬', country: 'Singapore' },
    { code: '+60', flag: '🇲🇾', country: 'Malaysia' }
  ];

  const packageTypes = [
    { value: 'standard', label: 'Standard Package', description: 'Basic accommodation + meals' },
    { value: 'premium', label: 'Premium Package', description: 'Luxury accommodation + tours' },
    { value: 'custom', label: 'Custom Package', description: 'Tailored to your needs' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
    }
    
    if (step === 2) {
      if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
      if (!formData.travelers || parseInt(formData.travelers) < 1) {
        newErrors.travelers = 'Number of travelers is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    // Generate reference ID
    const refId = `TRV-${Date.now().toString().slice(-8)}`;
    setReferenceId(refId);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 8 seconds
      setTimeout(() => {
        if (onClose) onClose();
      }, 8000);
    }, 2000);
  };

  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };

  const getBudgetRange = (budget) => {
    if (!budget) return 'Not specified';
    const amount = parseInt(budget);
    if (amount < 1000) return '$500 - $1,000';
    if (amount < 3000) return '$1,000 - $3,000';
    if (amount < 5000) return '$3,000 - $5,000';
    if (amount < 10000) return '$5,000 - $10,000';
    return '$10,000+';
  };

  return (
    <div className="animate-fade-in">
      {/* Success Message */}
      {isSubmitted ? (
        <div className="text-center py-12 px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Inquiry Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Thank you for your interest in {offerTitle}. Our travel expert will contact you within 24 hours.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Your Reference ID:</div>
              <div className="text-2xl font-bold text-gray-900 tracking-wider">{referenceId}</div>
              <div className="text-xs text-gray-500 mt-2">Keep this for future reference</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            This window will close automatically...
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step === currentStep
                      ? `bg-gradient-to-r ${currentDestination.theme.primary} text-white scale-110`
                      : step < currentStep
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <Check size={16} /> : step}
                  </div>
                  <div className={`ml-2 text-sm font-medium hidden sm:block ${
                    step === currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step === 1 && 'Personal Info'}
                    {step === 2 && 'Travel Details'}
                    {step === 3 && 'Message'}
                  </div>
                  {step < 3 && (
                    <div className={`h-1 w-6 sm:w-12 ml-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                    <User size={16} className="mr-2 text-gray-400" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <X size={12} className="mr-1" /> {errors.firstName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                    <User size={16} className="mr-2 text-gray-400" />
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <X size={12} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                  <PhoneIcon size={16} className="mr-2 text-gray-400" />
                  Phone Number *
                </label>
                <div className="flex space-x-3">
                  <div className="relative w-32">
                    <select
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <ChevronLeft size={16} className="text-gray-400 rotate-270" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm`}
                      placeholder="123 456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <X size={12} className="mr-1" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700 text-sm">
                    Receive travel updates and exclusive offers via email
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Step 2: Travel Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.travelDate ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm`}
                  />
                  {errors.travelDate && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <X size={12} className="mr-1" /> {errors.travelDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                    <Users size={16} className="mr-2 text-gray-400" />
                    Number of Travelers *
                  </label>
                  <div className="relative">
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.travelers ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm`}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Traveler' : 'Travelers'}
                        </option>
                      ))}
                      <option value="10+">10+ Travelers (Group)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <ChevronLeft size={16} className="text-gray-400 rotate-270" />
                    </div>
                  </div>
                  {errors.travelers && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <X size={12} className="mr-1" /> {errors.travelers}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                  Package Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {packageTypes.map((pkg) => (
                    <label
                      key={pkg.value}
                      className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 ${
                        formData.packageType === pkg.value
                          ? `${currentDestination.theme.border} bg-gradient-to-r ${currentDestination.theme.bg} scale-105`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="packageType"
                        value={pkg.value}
                        checked={formData.packageType === pkg.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 ${
                          formData.packageType === pkg.value
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-gray-300'
                        }`}>
                          {formData.packageType === pkg.value && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{pkg.label}</div>
                          <div className="text-xs text-gray-600 mt-1">{pkg.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                  Estimated Budget (per person)
                </label>
                <input
                  type="range"
                  name="budget"
                  min="500"
                  max="15000"
                  step="500"
                  value={formData.budget || 500}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">$500</span>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-sm">
                      {formData.budget ? `$${parseInt(formData.budget).toLocaleString()}` : '$500'}
                    </div>
                    <div className="text-xs text-gray-600">
                      {getBudgetRange(formData.budget)}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">$15,000+</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2 text-sm">
                  <MessageCircle size={16} className="mr-2 text-gray-400" />
                  Special Requirements or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                  placeholder="Tell us about any special requirements, dietary restrictions, or specific places you'd like to visit..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-medium mb-4 text-sm">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.preferredContact === 'email'
                      ? `${currentDestination.theme.border} bg-gradient-to-r ${currentDestination.theme.bg}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 ${
                        formData.preferredContact === 'email'
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}>
                        {formData.preferredContact === 'email' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Email</div>
                        <div className="text-xs text-gray-600">Best for detailed itineraries</div>
                      </div>
                    </div>
                  </label>

                  <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.preferredContact === 'phone'
                      ? `${currentDestination.theme.border} bg-gradient-to-r ${currentDestination.theme.bg}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 ${
                        formData.preferredContact === 'phone'
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}>
                        {formData.preferredContact === 'phone' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Phone Call</div>
                        <div className="text-xs text-gray-600">Quick and personal</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Travel Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Travel Information</h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-600">Best Time to Visit</div>
                    <div className="font-medium text-gray-800">Nov - Mar</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Visa Requirements</div>
                    <div className="font-medium text-gray-800">Required</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Flight Duration</div>
                    <div className="font-medium text-gray-800">3-4 hours</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Currency</div>
                    <div className="font-medium text-gray-800">Local</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={currentStep === 1 ? onClose : prevStep}
              className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm"
            >
              {currentStep === 1 ? 'Cancel' : '← Previous'}
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Submit Inquiry
                  </>
                )}
              </button>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-600">
                Need immediate assistance? Call us at{' '}
                <a href={`tel:${currentDestination.contact.phone}`} className="font-bold text-blue-600 hover:text-blue-700">
                  {currentDestination.contact.phone}
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We respond within 24 hours
              </p>
            </div>
          </div>
        </form>
      )}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #2563eb, #4f46e5);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #2563eb, #4f46e5);
          cursor: pointer;
          border: none;
        }
      `}</style>
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

  // Effect to handle body scroll when popup is open
  useEffect(() => {
    if (showBookNowPopup || showInquiryForm) {
      // Disable body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scroll when popup is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showBookNowPopup, showInquiryForm]);

  // Mock data - in real app, fetch from API based on id
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
  ];

  useEffect(() => {
    // Simulate API call
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
      <div className="container mx-auto px-4 ">
       <BackButton className='container mx-auto px-4 pt-6'/>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden ">
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

            {/* Packages Section */}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center  p-4 animate-fade-in">
          <div 
            className="fixed inset-0  bg-black/50"
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
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowInquiryForm(true)}
          className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Add custom animations */}
      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DestinationDetail;