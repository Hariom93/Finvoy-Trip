import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // replace with your logo
import { FaBars, FaTimes } from "react-icons/fa";

export default function HolidayNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Top Destinations", path: "/top-destinations" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10 md:h-10" />
        </NavLink>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 font-medium hover:text-blue-600"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
