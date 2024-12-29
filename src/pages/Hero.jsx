import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroImage } from "../components";
import { faArrowRight as right} from "@fortawesome/free-solid-svg-icons";
const MyComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation on mount
    document.title = "Geeksrahul";

  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen flex justify-center items-center flex-col gap-7">
      {/* Animated HeroImage */}
      <div
        className={`transition-transform duration-1000 ease-out ${
          isMounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <HeroImage />
      </div>

      {/* Animated Link */}
      <Link
        className={`text-xl font-semibold bg-gray-600 opacity-80 text-cyan-400 p-2 rounded-sm px-4 flex items-center justify-center gap-2 transition-transform duration-1000 ease-out ${
          isMounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        to="/home"
      >
        cd geeksrahul
        <FontAwesomeIcon icon={right} />
      </Link>
    </div>
  );
};

export default MyComponent;
