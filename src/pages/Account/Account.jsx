import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaHeadphones,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BackButton from "../../components/BackButton";

export default function ContactUs() {
  const navigate = useNavigate();

  const contactList = [
    {
      title: "Customer Support",
      subtitle: "24x7 Help & Assistance",
      icon: <FaHeadphones />,
      action: "Call Now",
      value: "+91 62664 89142",
    },
    {
      title: "Email Us",
      subtitle: "We usually reply within 24 hrs",
      icon: <FaEnvelope />,
      action: "Send Email",
      value: "support@finvoy.com",
    },
    {
      title: "WhatsApp Support",
      subtitle: "Quick chat support",
      icon: <FaWhatsapp />,
      action: "Chat Now",
      value: "+91 62664 89142",
    },
    {
      title: "Office Address",
      subtitle: "Visit us anytime",
      icon: <FaMapMarkerAlt />,
      action: "View Map",
      value: "Indore, Madhya Pradesh, India",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 pt-10 pb-16">
      <BackButton className="container mx-auto px-4 pt-6" />

      {/* Header Card */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <div className="relative p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-8 blur-xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-6 blur-xl" />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <p className="text-blue-100 text-sm mt-2">
              We’re here to help you anytime
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Options */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {contactList.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="relative flex justify-between items-center p-4 bg-white rounded-xl shadow-md border border-gray-100 cursor-pointer group overflow-hidden"
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

            {/* Left Accent */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 text-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
                <p className="text-sm text-gray-700 mt-1">{item.value}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full group-hover:bg-blue-100 transition"
            >
              {item.action}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span>Finvoy Support • Always with you</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
