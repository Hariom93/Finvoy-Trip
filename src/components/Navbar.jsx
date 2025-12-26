import { NavLink } from "react-router-dom";
import { FaHome, FaSuitcase, FaTag, FaUserCircle, FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/account/mytrips", label: "My Trips", icon: FaSuitcase },
    { path: "/offers", label: "Offers", icon: FaTag },
    { path: "/account", label: "Account", icon: FaUserCircle },
    { path: "/work", label: "About Us", icon: FaBriefcase },
  ];

  return (
    // Hide on desktop (1180px and above), show on mobile/tablet
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-800 z-50">
      <div className="flex justify-around items-center py-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-2 rounded-lg mb-1 ${isActive ? "bg-gray-800" : ""}`}>
                    <Icon className="text-lg" />
                  </div>
                  <span className="text-[11px]">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}