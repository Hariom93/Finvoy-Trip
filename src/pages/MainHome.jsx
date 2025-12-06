import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import packages from "../Data/packagesData";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import coinLogo from "../assets/supercoins-chip-icon.webp";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.webp";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Airline Logos
import indigo from "../assets/IndigoLogo.webp";
import malaysia from "../assets/malaysiaLogo.webp";
import airindia from "../assets/AirindiaLogo.webp";
import airexpress from "../assets/AirindiaexpressLogo.webp";
import airasia from "../assets/AirAsiaLogo.webp";
import vietjet from "../assets/VietjetthaiLogo.webp";
import spicejet from "../assets/SpicejetLogo.webp";
import akasa from "../assets/AkasaLogo.jpg";

import GatwayImg1 from "../assets/GatwayImg.jpg";
import GatwayImg2 from "../assets/GatwayImg2.jpg";
import GatwayImg3 from "../assets/GatwayImg3.jpg";

export default function MainHome() {
  const [startX, setStartX] = useState(null);
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const airlines = [indigo, malaysia, airindia, airexpress, airasia, vietjet, spicejet, akasa];

  // Slider images with link and label
  const images = [
    { img: GatwayImg1, link: "/hongkong", label: "Hong Kong" },
    { img: GatwayImg2, link: "/saudi", label: "Saudi" },
    { img: GatwayImg3, link: "/western-america", label: "Western America" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <img src={logo} alt="Logo" className="h-24" />
        <div className="border border-gray-300 flex gap-2 rounded-full text-sm px-3 py-1">
          <img src={coinLogo} className="h-5" alt="Coin Logo" />
          <p>0</p>
        </div>
      </div>

      {/* Welcome Box */}
      {visible && (
        <div className="bg-blue-100 border border-gray-300 rounded-lg p-4 relative w-[300px] max-w-md mx-auto shadow-md">
          <button onClick={() => setVisible(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-5 w-5" />
          </button>
          <h2 className="text-gray-800 font-semibold text-lg">Welcome to Cleartrip</h2>
          <p className="text-gray-600 text-sm">Save big with our offers, deals and supercoins!</p>
        </div>
      )}

      {/* Travel Boxes */}
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        <NavLink to="/flight">
          <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
            <img src={Img1} alt="Flights" className="w-12 h-12 mb-2 rounded-full" />
            <h3 className="text-lg font-semibold">Flights</h3>
            <p className="text-gray-400 text-sm mt-1">Up to 25% off</p>
          </div>
        </NavLink>

        <NavLink to="/holiday">
          <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
            <img src={Img2} alt="Holidays" className="w-12 h-12 mb-2 rounded-full" />
            <h3 className="text-lg font-semibold">Holidays</h3>
            <p className="text-gray-400 text-sm mt-1">Plan your trip</p>
          </div>
        </NavLink>
      </div>

      {/* Season's Best Packages */}
      <div className="max-w-4xl mx-auto p-4 ">
        <h2 className="ml-5 text-2xl font-bold text-gray-800 mb-4">Season's best packages ✨</h2>
        <div className="grid grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <NavLink key={pkg.id} to={`/package/${pkg.id}`}>
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img src={pkg.img} alt={pkg.name} className="w-full h-40 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                  <p className="font-bold text-sm">{pkg.name}</p>
                  <p className="text-xs">Starting {pkg.price} ({pkg.duration})</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Airline Partners */}
      <div className="w-full pt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Airline Partners</h2>
        <div className="grid grid-cols-4">
          {airlines.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt="airline" className="w-40 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER */}
      <div
        className="w-full max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl relative"
        onTouchStart={(e) => setStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (!startX) return;
          const diff = startX - e.changedTouches[0].clientX;
          if (diff > 50) setCurrent((prev) => (prev + 1) % images.length);
          if (diff < -50) setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          setStartX(null);
        }}
        onMouseDown={(e) => setStartX(e.clientX)}
        onMouseUp={(e) => {
          if (!startX) return;
          const diff = startX - e.clientX;
          if (diff > 50) setCurrent((prev) => (prev + 1) % images.length);
          if (diff < -50) setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          setStartX(null);
        }}
      >
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Getaways curated for you</h2>

        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((item, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 cursor-pointer "
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.label} className="w-full h-[180px] object-cover flex-shrink-0 select-none rounded-xl" />
              {/* Text overlay */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${current === i ? "bg-white" : "bg-gray-400"}`}></div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mx-5">
        <h1 className="mt-4 font-semibold text-xl">About Finvoytrip</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Launched in July 2006, <strong>Cleartrip Pvt Ltd</strong>., a Flipkart company, has emerged as India’s fastest-growing online travel technology company. In April 2021, Flipkart acquired a majority stake in Cleartrip. Cleartrip recently emerged as the no. 2 OTA player as per a study by VIDEC. With an aggressive plan to emerge as a leading innovator in the industry, Cleartrip is on its way to
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white text-sm px-4 py-6 mb-5">
        <div className="text-blue-600 font-medium flex flex-wrap gap-x-4 mx-2">
          <p>About Us</p>
          <p>Careers</p>
          <p>FAQs</p>
          <p>Support</p>
          <p>Collections</p>
          <p>Cleartrip for Business</p>
          <p>Gift cards</p>
          <p>Referral Program</p>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
        <p className="text-gray-700 text-xs mb-3">© 2006–2025 Cleartrip Pvt. Ltd.</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-4 text-gray-700 text-xs">
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms of Use</p>
          </div>
          <div className="flex gap-3 text-gray-500 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <p className="text-gray-700 text-xs mt-3">Covid-19 lockdown refund procedure</p>
      </footer>
    </>
  );
}
