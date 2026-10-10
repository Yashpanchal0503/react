import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          className="w-20 h-auto object-contain hover:scale-105 transition-transform duration-200" 
          src={LOGO_URL} 
          alt="App Logo" 
        />
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center">
        <ul className="flex items-center gap-6 font-medium text-gray-700">
          <li className="flex items-center gap-1.5 text-sm bg-gray-100 px-3 py-1 rounded-full">
            <span>Status:</span>
            <span>{onlineStatus === false ? "🔴" : "🟢"}</span>
          </li>

          <li>
            <Link to="/grocery" className="hover:text-amber-600 transition-colors">
              Grocery
            </Link>
          </li>
          
          <li>
            <Link to="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-amber-600 transition-colors">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-amber-600 transition-colors">
              Contact Us
            </Link>
          </li>

          <li className="hover:text-amber-600 transition-colors cursor-pointer">
            Cart
          </li>

          {/* Action Button */}
          <li>
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 active:scale-95 transition-all shadow-sm"
              onClick={() => {
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;