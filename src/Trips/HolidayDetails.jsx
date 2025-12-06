import { useParams, useNavigate } from "react-router-dom";
import holidayImg1 from "../assets/holidayImg1.jpg";
import HolidayNevbar from "../components/HolidayNevbar";
import SearchBar from "./TripComponents/SearchBar";
import Deals from "./TripComponents/Deals";
import LaxuryGetaway from "./TripComponents/LaxuryGetaway";
export default function HolidayDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
    <div>
      <HolidayNevbar />

      {/* ✅ MAIN WRAPPER */}
      <div className="relative w-full mt-[60px]">

        {/* ✅ BACKGROUND IMAGE */}
        <div
          className="
            w-full 
            bg-cover bg-center
            min-h-[40vh] sm:min-h-[55vh] md:min-h-[70vh] lg:min-h-[80vh]
          "
          style={{ backgroundImage: `url(${holidayImg1})` }}
        ></div>

        {/* ✅ DARK OVERLAY (TEXT CLEAR KE LIYE) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ CONTENT */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center gap-y-2
            text-center
            p-5 sm:p-10
          "
        >
          <h1
            className="
              text-white 
              font-bold 
              drop-shadow-2xl 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
          >
            Thailand : Vibrant and Exotic
          </h1>

          <p className="text-gray-200 font-semibold sm:text-base leading-relaxed">
            30% off on all packages.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
              hover:-translate-y-1 transform duration-300 ease-out
              w-fit 
              lg:px-5 lg:py-2 
              px-3 py-1
              font-semibold 
              rounded-full
              shadow-lg 
              bg-orange-600 text-white
              hover:bg-[#170C69]
            "
          >
            Explore
          </button>
        </div>
      </div>
         <SearchBar/>
    </div>
         <Deals/>
         <LaxuryGetaway/>
    </>
  );
}
