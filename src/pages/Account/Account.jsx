import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaSuitcase,
  FaWallet,
  FaTicketAlt,
  FaCreditCard,
  FaGift,
  FaCog,
  FaHeadphones,
  FaSignOutAlt,
  FaShieldAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Account() {
  const navigate = useNavigate();

  const menuList = [
    { title: "My Trips", icon: <FaSuitcase />, path: "/account/mytrips" },
    { title: "FinvoyGlobal Wallet", icon: <FaWallet />, path: "/account/FinvoyGlobalwallet", right: "₹0" },
    { title: "Bus Pass", icon: <FaTicketAlt />, path: "/account/buspass" },
    { title: "Saved Payment Modes", icon: <FaCreditCard />, path: "/account/savepayment" },
    { title: "Invite and Earn", icon: <FaGift />, path: "/account/invitecard", badge: "₹350 per month" },
    { title: "Settings", icon: <FaCog />, path: "/settings" },
    { title: "Support", icon: <FaHeadphones />, path: "/support" },
    { title: "Sign Out", icon: <FaSignOutAlt />, path: "/logout" },
    { title: "Privacy Rights", icon: <FaShieldAlt />, path: "/privacy" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    tap: { scale: 0.98 }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 pt-4 pb-14"> {/* Added pb-24 for bottom padding */}
      {/* User Section with Animation */}
      <motion.div 
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="relative p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-8 blur-xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-6 blur-xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white">Hello, Goutam!</h2>
            <div className="flex items-center mt-2">
              <span className="text-blue-100 text-sm">+91 62664 89142</span>
              <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <motion.p 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/profile")}
              className="text-white/90 text-sm mt-3 cursor-pointer inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all"
            >
              View profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Menu List with Staggered Animations */}
      <motion.div 
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuList.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate(item.path)}
            className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer border border-gray-100 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            
            {/* Animated left border */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <div className="flex items-center space-x-4">
              <motion.div 
                className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-xl">{item.icon}</span>
              </motion.div>
              <span className="text-[15px] font-medium text-gray-800">{item.title}</span>
            </div>

            {/* Right side content with animations */}
            <div className="flex items-center gap-3">
              {item.right && (
                <motion.span 
                  className="text-lg font-semibold text-gray-800"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.right}
                </motion.span>
              )}

              {item.badge && (
                <motion.span 
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.badge}
                </motion.span>
              )}

              {/* Animated arrow for all items */}
              <motion.div
                className="text-gray-400 group-hover:text-blue-600"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decorative element with additional spacing */}
      <motion.div 
        className="mt-8 mb-10 text-center text-gray-400 text-sm" // Added mb-10 for bottom margin
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span>Account settings • Last updated today</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Extra bottom spacing to prevent footer overlap */}
      <div className="h-1"></div>
    </div>
  );
}