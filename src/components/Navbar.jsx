import { NavLink } from "react-router-dom";
import { FaHome, FaSuitcase, FaTag, FaUserCircle, FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome className="text-lg mb-1" /> },
    { path: "/account/mytrips", label: "My Trips", icon: <FaSuitcase className="text-lg mb-1" /> },
    { path: "/offers", label: "Offers", icon: <FaTag className="text-lg mb-1" /> },
    { path: "/account", label: "Account", icon: <FaUserCircle className="text-lg mb-1" /> },
    { path: "/work", label: "Work", icon: <FaBriefcase className="text-lg mb-1" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-800 z-50">
      <div className="flex justify-around items-center py-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            {item.icon}
            <span className="text-[11px]">{item.label}</span>
          </NavLink>
        ))}

      </div>
    </div>
  );
}