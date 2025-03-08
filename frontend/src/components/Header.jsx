import React from "react";
import { RocketIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 absolute w-full z-10">
      <div className="flex items-center">
        <button className="text-white mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-b border-gray-500 text-white outline-none p-1 hidden md:block"
        />
      </div>

      <div className="flex items-center space-x-2">
        <RocketIcon className="w-6 h-6" />
        <span className="font-bold text-xl">SPACED</span>
      </div>

      <div className="flex items-center">
        <button className="text-white mr-4">SIGN IN</button>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
