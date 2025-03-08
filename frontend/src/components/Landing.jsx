import React, { useState } from "react";
import Navbar from "./Header";

// Import statements for images (assuming these will be in an assets folder)
// You would need to configure your build system to handle these imports
import moonImage from '../assets/moon.png';
import marsImage from '../assets/mars.png';
import venusImage from '../assets/venus.png';

export const Landing = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const destinations = [
    { name: "MOON", tagline: "To space and back, safely.", image: moonImage },
    { name: "MARS", tagline: "The next frontier awaits.", image: marsImage },
    { name: "VENUS", tagline: "Experience the hottest journey.", image: venusImage },
  ];

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-white">
      <Navbar />

      {/* Destination Carousel */}
      <div className="h-full w-full relative">
        {destinations.map((destination, index) => (
          <div
            key={destination.name}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              currentDestination === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Image instead of background */}
            <img
              src={destination.image}
              alt={`${destination.name} planet`}
              className="absolute w-full h-full object-cover object-center z-10"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
              <p className="text-sm md:text-base mb-2">{destination.tagline}</p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                {destination.name}
              </h1>
              <p className="text-xs md:text-sm uppercase tracking-wider mb-12">
                NEW DESTINATION
              </p>

              {/* Booking Form */}
              <div className="flex flex-col md:flex-row w-full max-w-3xl">
                <div className="bg-white text-black p-4 md:flex-1 mb-2 md:mb-0 md:mr-1 flex items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">WHERE</p>
                    <p className="font-medium">{destination.name}</p>
                  </div>
                  <div className="ml-auto">
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="bg-white text-black p-4 md:flex-1 mb-2 md:mb-0 md:mr-1 flex items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      PASSENGERS
                    </p>
                    <p className="font-medium">1 Adult</p>
                  </div>
                  <div className="ml-auto">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <div className="bg-white text-black p-4 md:flex-1 mb-2 md:mb-0 md:mr-1 flex items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">DEPARTURE</p>
                    <p className="font-medium">California, US</p>
                  </div>
                  <div className="ml-auto">
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
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
                <button className="bg-red-600 text-white p-4 uppercase font-bold flex items-center justify-center">
                  BOOK
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
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-8 flex space-x-2 z-20">
          <button
            onClick={prevDestination}
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextDestination}
            className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Destination Indicators */}
        <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`w-2 h-2 rounded-full ${
                currentDestination === index ? "bg-red-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;