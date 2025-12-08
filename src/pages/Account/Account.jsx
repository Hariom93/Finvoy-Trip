import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaSuitcase,
  FaWallet,
  FaTicketAlt, // ✅ Use this if your version has it
  FaCreditCard,
  FaGift,
  FaCog,
  FaHeadphones,
  FaSignOutAlt,
  FaShieldAlt
} from "react-icons/fa";

export default function Account() {
  const navigate = useNavigate();
 


  const menuList = [
    { title: "My Trips", icon: <FaSuitcase />, path: "/account/mytrips" },
    { title: "Cleartrip Wallet", icon: <FaWallet />, path: "/account/finvoytripwallet", right: "₹0" },
    { title: "Bus Pass", icon: <FaTicketAlt />, path: "/account/buspass" },
    { title: "Saved Payment Modes", icon: <FaCreditCard />, path: "/account/savepayment" },
    { title: "Invite and Earn", icon: <FaGift />, path: "/account/invitecard", badge: "₹350 per month" },
    { title: "Settings", icon: <FaCog />, path: "/settings" },
    { title: "Support", icon: <FaHeadphones />, path: "/support" },
    { title: "Sign Out", icon: <FaSignOutAlt />, path: "/logout" },
    { title: "Privacy Rights", icon: <FaShieldAlt />, path: "/privacy" },
  ];  

  return (
    <div className="p-4">
      {/* User Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Hello, Goutam!</h2>
        <span className="text-gray-600 text-sm">+91 62664 89142</span>
        <p className="text-blue-600 text-sm mt-1 cursor-pointer">View profile</p>
      </div>

      {/* Menu List */}
      <div className="rounded-md">
        {menuList.map((item, index) => (
          <div
            key={index}
            onClick={() =>navigate(item.path)}
            className="flex justify-between items-center py-4 px-3 border-b border-gray-200 last:border-none cursor-pointer active:bg-gray-100"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-[15px]">{item.title}</span>
            </div>

            {item.right && <span className="text-gray-700">{item.right}</span>}

            {item.badge && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Wallet Popup */}
    </div>
  );
}
