import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HolidayNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Top Destinations", path: "/top-destinations" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        
        {/* ✅ LOGO (Perfect Size) */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-16 object-contain"
          />
        </NavLink>

        {/* ✅ DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold transition ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition">
            Book Now
          </button>
        </div>

        {/* ✅ MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={26} className="text-gray-800" />
            ) : (
              <FaBars size={26} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4 animate-slideDown">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
