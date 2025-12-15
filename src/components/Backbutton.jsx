import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Backbutton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // If user opened page directly, go home
    if (window.history.length <= 2) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ x: -6 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 
        bg-white shadow-lg px-4 py-2 rounded-full"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">Back</span>
    </motion.button>
  );
}
