import React, { useState } from "react";
import { useEffect} from "react";
import logo from "../assets/logo.jpeg";
import coinLogo from "../assets/supercoins-chip-icon.webp";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.webp";
import Img3 from "../assets/Img3.webp";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";
import Img6 from "../assets/Img6.jpg";
import { XMarkIcon } from "@heroicons/react/24/outline";

// ✅ Airline Logos
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
  const [visible, setVisible] = useState(true);

  const packages = [
    { name: "Bali", price: "₹32,999", duration: "5N/6D", img: Img3 },
    { name: "Maldives", price: "₹55,600", duration: "3N/4D", img: Img4 },
    { name: "Dubai", price: "₹42,845", duration: "4N/5D", img: Img5 },
    { name: "Thailand", price: "₹26,400", duration: "4N/5D", img: Img6 },
  ];

  const airlines = [
    indigo,
    malaysia,
    airindia,
    airexpress,
    airasia,
    vietjet,
    spicejet,
    akasa,
  ];
 
  const images = [GatwayImg1,GatwayImg2, GatwayImg3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 second me slide

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
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <h2 className="text-gray-800 font-semibold text-lg mb-1">
            Welcome to Cleartrip
          </h2>
          <p className="text-gray-600 text-sm">
            Save big with our offers, deals and supercoins!
          </p>
        </div>
      )}

      {/* Travel Boxes */}
      <div className="flex flex-wrap gap-4 p-4 mt-2 justify-center">
        <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
          <img src={Img1} alt="Flights" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold">Flights</h3>
          <p className="text-gray-400 text-sm mt-1">Up to 25% off</p>
        </div>

        <div className="border border-gray-300 flex flex-col items-center justify-center w-36 h-36 bg-white rounded-xl shadow-md p-4">
          <img src={Img2} alt="Holidays" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold">Holidays</h3>
          <p className="text-gray-400 text-sm mt-1">Plan your trip</p>
        </div>
      </div>

      {/* Season's Best Packages */}
      <div className="max-w-4xl mx-auto p-4 ">
        <h2 className="ml-5 text-2xl font-bold text-gray-800 mb-4">
          Season's best packages ✨
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                <p className="font-bold text-sm">{pkg.name}</p>
                <p className="text-xs">
                  Starting {pkg.price} ({pkg.duration})
                </p>
              </div>
            </div>
          ))}
        </div>
  <div className="w-full pt-10">
  <h2 className="text-2xl font-bold text-center mb-4">
    Airline Partners
  </h2>

  {/* ✅ Always 4 circles in one row */}
  <div className="grid grid-cols-4">
    {airlines.map((logo, index) => (
      <div
        key={index}
      >
        <img
          src={logo}
          alt="airline"
          className="w-40 object-contain"
        />
      </div>
    ))}
  </div>
</div>

</div>
 <div className="w-full max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl relative">
      
      {/* SLIDER IMAGES */}

       <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
         Getaways curated for you
        </h2>
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-[180px] object-cover flex-shrink-0"
            alt="slider"
          />
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
    <div className="mx-5">
    <h1 className="mt-4 font-semibold text-xl">About Finvoytrip</h1>
    <p className="mt-2 text-gray-500 text-sm"> Launched in July 2006, <strong>Cleartrip Pvt Ltd</strong>., a Flipkart company, has emerged as India’s fastest-growing online travel technology company. In April 2021, Flipkart acquired a majority stake in Cleartrip. Cleartrip recently emerged as the no. 2 OTA player as per a study by VIDEC. With an aggressive plan to emerge as a leading innovator in the industry, Cleartrip is on its way to</p>
     </div>
    </>
  );
}
