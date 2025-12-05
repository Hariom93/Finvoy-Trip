import { NavLink } from "react-router-dom";
import { FaHome, FaSuitcase, FaTag, FaUserCircle, FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-800 z-50">
      <div className="flex justify-around items-center py-4">

        
        <NavLink to="/" className="flex flex-col items-center text-xs">
          <FaHome className="text-lg mb-1" />
          <span className="text-[11px]">Home</span>
        </NavLink>

        
        <NavLink to="/trips" className="flex flex-col items-center text-xs text-gray-400">
          <FaSuitcase className="text-lg mb-1" />
          <span className="text-[11px]">My Trips</span>
        </NavLink>

       
        <NavLink to="/offers" className="flex flex-col items-center text-xs text-gray-400">
          <FaTag className="text-lg mb-1" />
          <span className="text-[11px]">Offers</span>
        </NavLink>

       
        <NavLink to="/account" className="flex flex-col items-center text-xs text-gray-400">
          <FaUserCircle className="text-lg mb-1" />
          <span className="text-[11px]">Account</span>
        </NavLink>

       
        <NavLink to="/work" className="flex flex-col items-center text-xs text-gray-400">
          <FaBriefcase className="text-lg mb-1" />
          <span className="text-[11px]">Work</span>
        </NavLink>

      </div>
    </div>
  );
}
