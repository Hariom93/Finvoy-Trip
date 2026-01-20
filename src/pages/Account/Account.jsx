import React from "react";
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

  const contactList = [
    {
      title: "Customer Support",
      subtitle: "24x7 Help & Assistance",
      icon: <FaHeadphones />,
      action: "Call Now",
      value: "+91 62664 89142",
      onClick: () => window.open("tel:+916266489142"),
    },
    {
      title: "Email Us",
      subtitle: "We usually reply within 24 hrs",
      icon: <FaEnvelope />,
      action: "Send Email",
      value: "support@finvoy.com",
      onClick: () =>
        window.open(
          "mailto:support@finvoy.com?subject=Support Request"
        ),
    },
    {
      title: "WhatsApp Support",
      subtitle: "Quick chat support",
      icon: <FaWhatsapp />,
      action: "Chat Now",
      value: "+91 62664 89142",
      onClick: () =>
        window.open(
          "https://wa.me/916266489142",
          "_blank"
        ),
    },
    {
      title: "Office Address",
      subtitle: "Visit us anytime",
      icon: <FaMapMarkerAlt />,
      action: "View Map",
      value: "Indore, Madhya Pradesh, India",
      onClick: () =>
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Indore, Madhya Pradesh, India",
          "_blank"
        ),
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

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <div className="relative p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p className="text-blue-100 text-sm mt-2">
            We’re here to help you anytime
          </p>
        </div>
      </motion.div>

      {/* Contact Cards */}
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
            onClick={item.onClick}
            className="relative flex justify-between items-center p-4 bg-white rounded-xl shadow-md  cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600 text-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
                <p className="text-sm text-gray-700 mt-1">{item.value}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full"
            >
              {item.action}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        Finvoy Support • Always with you
      </div>
    </div>
  );
}
