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
    <div className="h-screen flex justify-center items-center flex-col gap-7 bg-gray-800">
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
        className={`bg-blue-700  text-xl font-semibold bg-y-800 opacity-80 text-white p-2 rounded-md px-4 flex items-center justify-center gap-2 transition-transform duration-1000 ease-out ${
          isMounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } dark:bg-gray-800`}
        to="/home"
      >
        cd geeksrahul
        <FontAwesomeIcon icon={right} />
      </Link>
    </div>
  );
};

export default MyComponent;
